import { Body, Controller, Delete, Get, NotFoundException, Param, ParseIntPipe, Post, Put } from '@nestjs/common';

interface ITareas {
  id: number;
  text: string;
  done: boolean;
}

@Controller('tareas')
export class TareasController {
  private tareas: ITareas[] = [];

  @Get()
  getTareas(): ITareas[] {
    return this.tareas;
  }

  @Get(':id')
  getTarea(@Param('id', ParseIntPipe) id: number): ITareas {
    const tarea = this.tareas.find((todo) => todo.id === id);

    if (!tarea) throw new NotFoundException();

    return tarea;
  }

  @Post()
  crearTarea(@Body() tarea: ITareas) {
    this.tareas.push(tarea);
    return 'Tarea agregada';
  }

  @Put(':id')
  modificarTarea(
    @Param('id', ParseIntPipe) id: number,
    @Body() tarea: ITareas,
  ) {
    const index = this.tareas.findIndex((tarea) => tarea.id === id);

    if (index === -1) throw new NotFoundException();
    this.tareas[index] = tarea;

    return 'Tarea actualizada';
  }

  @Delete(':id')
  borrarTarea(@Param('id', ParseIntPipe) id: number) {
    const index = this.tareas.findIndex((tarea) => tarea.id === id);

    if (index === -1) throw new NotFoundException();

    this.tareas.splice(index, 1);
    return 'Tarea eliminada';
  }
}
