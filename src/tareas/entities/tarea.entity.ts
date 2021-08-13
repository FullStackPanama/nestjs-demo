import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('tareas')
export class Tarea {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text', nullable: false })
  tarea: string;

  @Column({ type: 'boolean', nullable: false, default: false })
  terminada: boolean;
}
