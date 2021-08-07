import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Injectable()
export class PostsService {
  create(createPostDto: CreatePostDto) {
    return {
      msg: 'This action adds a new post',
      data: [createPostDto],
    };
  }

  findAll() {
    return {
      msg: `This action returns all posts`,
      data: [],
    };
  }

  findOne(id: number) {
    return {
      msg: `This action returns a #${id} post`,
      data: [],
    };
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return {
      msg: `This action updates a #${id} post`,
      data: [updatePostDto],
    };
  }

  remove(id: number) {
    return {
      msg: `This action removes a #${id} post`,
      data: [],
    };
  }
}
