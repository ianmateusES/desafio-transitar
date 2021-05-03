import {
  Entity,
  ObjectID,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ObjectIdColumn,
} from 'typeorm';

export type StatusRoleType = 'REPROVADO' | 'APROVADO';

@Entity('alunos')
class Aluno {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  age: number;

  @Column()
  birthday: string;

  @Column({ array: true, type: Number })
  notes: number[];

  @Column({ type: 'enum', enum: ['REPROVADO', 'APROVADO'] })
  status: StatusRoleType;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Aluno;
