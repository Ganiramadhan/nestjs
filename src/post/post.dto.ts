import { IsNotEmpty } from 'class-validator';

// CreatePostDto for creating a new post
export class CreatePostDto {
  @IsNotEmpty({ message: 'Title should not be empty' })
  title: string;

  @IsNotEmpty({ message: 'Content should not be empty' })
  content: string;
}

// UpdatePostDto for updating an existing post
export class UpdatePostDto {
  @IsNotEmpty({ message: 'Title should not be empty' })
  title: string;

  @IsNotEmpty({ message: 'Content should not be empty' })
  content: string;
}
