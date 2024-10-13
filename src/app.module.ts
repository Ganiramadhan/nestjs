import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ApiController } from './api/api.controller';
import { ApiService } from './api/api.service';
import { ConfigModule } from '@nestjs/config';
import { PostModule } from './post/post.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    HttpModule,
    PostModule, 
  ],
  controllers: [ApiController],
  providers: [ApiService],
})
export class AppModule {}
