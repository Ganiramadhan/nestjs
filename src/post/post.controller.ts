import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { PostService } from './post.service';

@Controller('posts')
export class PostController {
  constructor(private readonly postService: PostService) {}

  // Get all posts
  @Get()
  async getAllPosts() {
    return this.postService.getAllPosts();
  }

  // Get a single post by its ID
  @Get(':id')
  async getPostById(@Param('id') id: string) {
    return this.postService.getPostById(Number(id));
  }

  // Create a new post
  @Post()
  async createPost(@Body() body: { title: string; content: string }) {
    return this.postService.createPost(body);
  }

  // Update an existing post by its ID
  @Put(':id')
  async updatePost(@Param('id') id: string, @Body() body: { title: string; content: string }) {
    return this.postService.updatePost(Number(id), body);
  }

  // Delete a post by its ID
  @Delete(':id')
  async deletePost(@Param('id') id: string) {
    return this.postService.deletePost(Number(id));
  }
}
