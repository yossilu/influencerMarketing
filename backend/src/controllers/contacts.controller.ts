import { Controller, Get, Query } from '@nestjs/common';
import { ContactsService } from 'src/services/contacts_api.service';

@Controller('contacts')
export class ContactsController {
  constructor(private readonly apiService: ContactsService) {}

  @Get()
  async getContactDetails(@Query('url') user_id: string) {
    return await this.apiService.getContactDetails(user_id);
  }



}