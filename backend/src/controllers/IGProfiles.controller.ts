import { Controller, Get, Query } from '@nestjs/common';
import { IGService } from '../services/ig_api.service';

@Controller('profiles')
export class ProfilesController {
  constructor(private readonly apiService: IGService) {}

  @Get('instagram')
  async getIGProfiles(@Query('filter') filter: string) {
    return await this.apiService.getIGProfiles(filter);
  }

  @Get('ig_posts')
  async getIGPosts(@Query('user_id') user_id: string) {
    return await this.apiService.getIGPosts(user_id);
  }


}