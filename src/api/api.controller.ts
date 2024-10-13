import { Controller, Get } from '@nestjs/common';
import { ApiService } from './api.service';
import { ConfigService } from '@nestjs/config';

@Controller('api')
export class ApiController {
  constructor(
    private readonly apiService: ApiService,
    private readonly configService: ConfigService
  ) {}

  @Get('postList')
  async getPosts() {
    const apiUrl = this.configService.get<string>('API_URL');
    const result = await this.apiService.getPostsFromApi(apiUrl);
    return result;
  }
}
