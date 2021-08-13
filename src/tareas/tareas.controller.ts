import { Body, Controller, Delete, Get, NotFoundException, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { TareasService } from './tareas.service';
import { CreateTareaDto } from './dto/create-tarea.dto';
import { UpdateTareaDto } from './dto/update-tarea.dto';

@Controller('tareas')
export class TareasController {
  constructor(private readonly tareasService: TareasService) {}

  @Get()
  getTareas() {
    return this.tareasService.findAll();
  }

  @Get(':id')
  getTarea(@Param('id', ParseIntPipe) id: number) {
    return this.tareasService.findOne(id);
  }

  @Post()
  crearTarea(@Body() tarea: CreateTareaDto) {
    return this.tareasService.create(tarea);
  }

  @Put(':id')
  async modificarTarea(
    @Param('id', ParseIntPipe) id: number,
    @Body() tarea: UpdateTareaDto,
  ) {
    const tareaDb = await this.tareasService.findOne(id);
    if (!tareaDb) throw new NotFoundException();

    return this.tareasService.update(id, tarea);
  }

  @Delete(':id')
  borrarTarea(@Param('id', ParseIntPipe) id: number) {
    return this.tareasService.delete(id);
  }
}
