import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { InstagramPostModel } from 'src/models/instagram-post.model';
import { UserModel } from 'src/models/user.model';

const baseUrl = 'https://imai.co/api';


@Injectable()
export class IGService {

  async getIGProfiles(filter: string): Promise<UserModel> {
    
    const endpoint = '/dict/users/';
    const apiKeyValue = process.env.APIKEYVALUE;
    const postFixUrl = 'type=lookalike&platform=instagram'
    const search = filter;
    try {
      const response = await axios.get(`${baseUrl}${endpoint}?q=${search}&limit=10&${postFixUrl}`, {
        headers: {
          'authkey': apiKeyValue
        }
      });
      return response.data;
    } catch (error) {
      // Handle error
      throw error;
    }
  }

  async getIGPosts(user_id: string): Promise<InstagramPostModel> {
    
    const endpoint = '/raw/ig/user/feed';
    const apiKeyValue = process.env.APIKEYVALUE;
    const igId = '?url=' + user_id;
    try {
      const response = await axios.get(`${baseUrl}${endpoint}${igId}`, {
        headers: {
          'authkey': apiKeyValue
        }
      });
      
      return response.data.items;
    } catch (error) {
      // Handle error
      throw error;
    }
  }
}
