import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class ApiService {
  constructor(private readonly httpService: HttpService) {}

  async postDataToApi(apiUrl: string, data: any) {
    const response = await firstValueFrom(this.httpService.post(apiUrl, data));
    return response.data;
  }

  async getPostsFromApi(apiUrl: string) {
    const response = await firstValueFrom(this.httpService.get(apiUrl));
    // console.log(response.data); s
    return response.data;
  }
  
}
