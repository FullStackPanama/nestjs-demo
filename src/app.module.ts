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
      host: process.env.DATABASE_HOST || 'database',
      port: parseInt(process.env.DATABASE_PORT, 10) || 3306,
      username: process.env.DATABASE_USER || 'demo',
      password: process.env.DATABASE_PASS || 'fullstackpanama2021',
      database: process.env.DATABASE_DB || 'demo',
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
