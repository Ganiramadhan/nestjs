import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PostService {
  constructor(private prisma: PrismaService) {}

  // Fetch all posts from the database
  async getAllPosts() {
    try {
      return await this.prisma.post.findMany();
    } catch (error) {
      throw new Error(`Failed to retrieve posts: ${error.message}`);
    }
  }

  // Fetch a single post by its ID
  async getPostById(id: number) {
    try {
      const post = await this.prisma.post.findUnique({
        where: { id },
      });
      if (!post) {
        throw new NotFoundException(`Post with ID ${id} not found`);
      }
      return post;
    } catch (error) {
      throw new Error(`Failed to retrieve post with ID ${id}: ${error.message}`);
    }
  }

  // Create a new post with the provided title and content
  async createPost(data: { title: string; content: string }) {
    try {
      const newPost = await this.prisma.post.create({
        data,
      });
      return { message: 'Post successfully created', post: newPost };
    } catch (error) {
      throw new Error(`Failed to create post: ${error.message}`);
    }
  }

  // Update an existing post by its ID with new title and content
  async updatePost(id: number, data: { title: string; content: string }) {
    try {
      const post = await this.prisma.post.findUnique({ where: { id } });
      if (!post) {
        throw new NotFoundException(`Post with ID ${id} not found`);
      }
      const updatedPost = await this.prisma.post.update({
        where: { id },
        data,
      });
      return { message: 'Post successfully updated', post: updatedPost };
    } catch (error) {
      throw new Error(`Failed to update post with ID ${id}: ${error.message}`);
    }
  }

  // Delete a post by its ID
  async deletePost(id: number) {
    try {
      const post = await this.prisma.post.findUnique({ where: { id } });
      if (!post) {
        throw new NotFoundException(`Post with ID ${id} not found`);
      }
      await this.prisma.post.delete({ where: { id } });
      return { message: 'Post successfully deleted' };
    } catch (error) {
      throw new Error(`Failed to delete post with ID ${id}: ${error.message}`);
    }
  }
}
