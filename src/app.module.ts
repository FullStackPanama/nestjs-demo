import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TareasModule } from './tareas/tareas.module';
import { PostsModule } from './posts/posts.module';

@Module({
  imports: [TareasModule, PostsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
