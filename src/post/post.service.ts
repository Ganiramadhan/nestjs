import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePostDto } from '../post/post.dto';
import { UpdatePostDto } from '../post/post.dto';

@Injectable()
export class PostService {
  constructor(private prisma: PrismaService) {}

  // Get all posts
  async getAllPosts() {
    try {
      const posts = await this.prisma.post.findMany();
      return { code: 0, guid: 0, data: posts };
    } catch (error) {
      return { code: 1, guid: 1, message: `Failed to retrieve posts: ${error.message}` };
    }
  }

  // Get post by ID
  async getPostById(id: number) {
    try {
      const post = await this.prisma.post.findUnique({ where: { id } });
      if (!post) {
        return { code: 1, guid: 1, message: `Post with ID ${id} not found` };
      }
      return { code: 0, guid: 0, data: post };
    } catch (error) {
      return { code: 1, guid: 1, message: `Failed to retrieve post with ID ${id}: ${error.message}` };
    }
  }

  // Create a new post
  async createPost(createPostDto: CreatePostDto) {
    try {
      const post = await this.prisma.post.create({ data: createPostDto });
      return { code: 0, guid: 0, message: 'Post created successfully', data: post };
    } catch (error) {
      return { code: 1, guid: 1, message: `Failed to create post: ${error.message}` };
    }
  }

  // Update an existing post
  async updatePost(id: number, updatePostDto: UpdatePostDto) {
    try {
      const post = await this.prisma.post.update({
        where: { id },
        data: updatePostDto,
      });
      return { code: 0, guid: 0, message: 'Post updated successfully', data: post };
    } catch (error) {
      return { code: 1, guid: 1, message: `Failed to update post: ${error.message}` };
    }
  }

  // Delete a post by ID
  async deletePost(id: number) {
    try {
      await this.prisma.post.delete({ where: { id } });
      return { code: 0, guid: 0, message: 'Post deleted successfully' };
    } catch (error) {
      return { code: 1, guid: 1, message: `Failed to delete post: ${error.message}` };
    }
  }
}
