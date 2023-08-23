import { Controller, Post, Body, Res } from '@nestjs/common';
import * as fetch from 'node-fetch';
import { Response } from 'express';

@Controller('proxy')
export class ProxyController {
  @Post() // Change to POST method
  async proxyImages(@Body() requestBody: { urls: string[] }, @Res() res: Response): Promise<void> {
    const urlArray = requestBody.urls;

    if (!urlArray || urlArray.length === 0) {
      res.status(400).send('Missing or empty URLs array.');
      return;
    }

    try {
      const responses = await Promise.all(urlArray.map(url => fetch(url)));
      
      const imageBuffers = await Promise.all(responses.map(response => response.buffer()));

      const contentType = responses[0].headers.get('content-type');
      res.contentType(contentType);
      
      res.send(imageBuffers);
    } catch (error) {
      res.status(500).send('Internal server error.');
    }
  }
}
