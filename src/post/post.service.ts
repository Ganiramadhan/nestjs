import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service'; 

@Injectable()
export class PostService {
  constructor(private prisma: PrismaService) {}

  async getAllPosts() {
    try {
      return await this.prisma.post.findMany(); 
    } catch (error) {
      throw new Error(`Failed to retrieve posts: ${error.message}`);
    }
  }

  async getPostById(id: number) {
    try {
      return await this.prisma.post.findUnique({
        where: { id },
      });
    } catch (error) {
      throw new Error(`Failed to retrieve post with ID ${id}: ${error.message}`);
    }
  }
}
