import { Controller, Get, Param } from '@nestjs/common';
import { PostService } from './post.service';

@Controller('posts')
export class PostController {
  constructor(private readonly postService: PostService) {}

  // Mendapatkan semua posts
  @Get()
  async getAllPosts() {
    return this.postService.getAllPosts();
  }

  // Mendapatkan post berdasarkan ID
  @Get(':id')
  async getPostById(@Param('id') id: string) {
    return this.postService.getPostById(Number(id));
  }
}
