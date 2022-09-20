import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name:'Usuarios'})
export class UserEntity {
  //* Aqui ira todas las variables que tendran los usuarios.

  @PrimaryGeneratedColumn('increment')
  public id: number;

  @Column({ type: "varchar", nullable: true })
  public name: string;

  @Column({ type: "varchar", length: 25, unique: true, nullable: false })
  public username: string;

  @Column({ type: "varchar", nullable: false })
  public email: string;

  @Column({ type: "varchar", nullable: false })
  public password: string;
}
