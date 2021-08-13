import { UpdateTareaDto } from './dto/update-tarea.dto';
import { CreateTareaDto } from './dto/create-tarea.dto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { Tarea } from './entities/tarea.entity';

@Injectable()
export class TareasService {
  constructor(
    @InjectRepository(Tarea)
    private readonly tareaRepository: Repository<Tarea>,
  ) {}

  async create(createTareaDto: CreateTareaDto): Promise<Tarea> {
    const tarea = this.tareaRepository.create(createTareaDto);
    return await this.tareaRepository.save(tarea);
  }

  async findAll(): Promise<Tarea[]> {
    return await this.tareaRepository.find();
  }

  async findOne(id: number): Promise<Tarea> {
    return await this.tareaRepository.findOne(id);
  }

  async update(id: number, updateTareaDto: UpdateTareaDto): Promise<Tarea> {
    const tarea = await this.tareaRepository.findOne(id);
    const editedTarea = Object.assign(tarea, updateTareaDto);

    return await this.tareaRepository.save(editedTarea);
  }

  async delete(id: number): Promise<DeleteResult> {
    return await this.tareaRepository.delete(id);
  }
}
