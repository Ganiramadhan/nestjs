import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from '../post/post.dto';
import { UpdatePostDto } from '../post/post.dto';

@Controller('posts')
export class PostController {
  constructor(private readonly postService: PostService) {}

  // Get all posts
  @Get()
  async getAllPosts() {
    return this.postService.getAllPosts();
  }

  // Get post by ID
  @Get(':id')
  async getPostById(@Param('id') id: string) {
    return this.postService.getPostById(Number(id));
  }

  // Create new post
  @Post()
  async createPost(@Body() createPostDto: CreatePostDto) {
    return this.postService.createPost(createPostDto);
  }

  // Update post by ID
  @Put(':id')
  async updatePost(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
    return this.postService.updatePost(Number(id), updatePostDto);
  }

  // Delete post by ID
  @Delete(':id')
  async deletePost(@Param('id') id: string) {
    return this.postService.deletePost(Number(id));
  }
}
