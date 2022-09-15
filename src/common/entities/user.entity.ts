/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class UserEntity {
  //* Aqui ira todas las variables que tendran los usuarios.

  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ type: "varchar", nullable: true })
  public name: string;

  @Column({ type: "varchar", length: 20, unique: true, nullable: false })
  public username: string;

  @Column({ type: "varchar", nullable: false })
  public password: string;
}
