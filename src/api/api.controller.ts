import { Controller, Post, Get, Body } from '@nestjs/common';
import { ApiService } from './api.service';
import { ConfigService } from '@nestjs/config';

@Controller('api')
export class ApiController {
  constructor(
    private readonly apiService: ApiService,
    private readonly configService: ConfigService
  ) {}

  @Post('post-data')
  async postData(@Body() body: any) {
    const apiUrl = this.configService.get<string>('API_URL');
    const result = await this.apiService.postDataToApi(apiUrl, body);
    return result;
  }

  @Get('posts')
  async getPosts() {
    const apiUrl = this.configService.get<string>('API_URL');
    const result = await this.apiService.getPostsFromApi(apiUrl);
    return result;
  }
}
