import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('posts')
export class Post {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'text', nullable: false })
  author_id!: number;

  @Column({ type: 'varchar', length: 255, nullable: false })
  title!: string;

  @Column({ type: 'varchar', length: 500, nullable: false })
  description!: string;

  @Column({ type: 'text', nullable: false })
  content!: string;

  @CreateDateColumn({ type: 'timestamp' })
  date!: Date;
}
