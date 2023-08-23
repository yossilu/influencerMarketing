import { Injectable, NotFoundException } from '@nestjs/common';
import axios from 'axios';

const baseUrl = 'https://imai.co/api';

@Injectable()
export class ContactsService {
  async getContactDetails(user_id: string): Promise<any> {
    
    const endpoint = '/exports/contacts';
    const apiKeyValue = process.env.APIKEYVALUE;
    const queryParam = 'platform=instagram'
    const ig_id = process.env.IGID;
    // const ig_id = user_id;
    try {
      const response = await axios.get(`${baseUrl}${endpoint}?url=${ig_id}&${queryParam}`, {
        headers: {
          'authkey': apiKeyValue
        }
      });

      return response.data;
    } catch (error) {
      // Handle error
      throw new NotFoundException(error.response.data);
      // throw new ;
      
    }
  }

}
// https://imai.co/api/exports/contacts?url=10529896&platform=instagram