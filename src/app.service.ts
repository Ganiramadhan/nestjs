import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  greetings(): string {
    return 'Hello World!';
  }
  
  getTesting():string{
    return 'Hello Testing!'
  }
}
