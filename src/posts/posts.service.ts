import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Post } from './entities/post.entity';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private readonly postRepository: Repository<Post>,
  ) {}

  async create(createPostDto: CreatePostDto) {
    const post = this.postRepository.create(createPostDto);
    return await this.postRepository.save(post);
  }

  async findAll() {
    return await this.postRepository.find();
  }

  async findOne(id: number) {
    const post = await this.postRepository.findOne(id);

    if (!post) throw new NotFoundException();

    return post;
  }

  async update(id: number, updatePostDto: UpdatePostDto) {
    const post = await this.postRepository.findOne(id);
    const editedPost = Object.assign(post, updatePostDto);

    return await this.postRepository.save(editedPost);
  }

  async remove(id: number) {
    const post = await this.postRepository.findOne(id);

    return await this.postRepository.remove(post);
  }
}
