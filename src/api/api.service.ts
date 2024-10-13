import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class ApiService {
  constructor(private readonly httpService: HttpService) {}

  async getPostsFromApi(apiUrl: string) {
    const response = await firstValueFrom(this.httpService.get(apiUrl));
    return response.data;
  }
  
}
