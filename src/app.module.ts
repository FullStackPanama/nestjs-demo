import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TareasModule } from './tareas/tareas.module';
import { PostsModule } from './posts/posts.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'database',
      port: 3306,
      username: 'demo',
      password: 'fullstackpanama2021',
      database: 'demo',
      entities: [join(__dirname, './**/**/*entity{.ts,.js}')],
      autoLoadEntities: true,
      synchronize: true,
    }),
    TareasModule,
    PostsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
