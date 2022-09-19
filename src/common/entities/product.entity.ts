import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn  } from 'typeorm';

@Entity({name:'Productos'})
export class ProductEntity {
  //* Aqui ira todas las variables que tendran los productos.
  
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ type: "varchar" })
  public name: string;

  @Column()
  public precio: number;

  @Column({ type: 'decimal', precision: 22, scale: 2, default: 0.00 })
  public IVA: number;

  @Column({ type: 'decimal', precision: 22, scale: 2, default: 0.00 })
  public no_IVA: number;

  @CreateDateColumn()
  public createdAt?: Date;

  @Column({ type: 'date' })
  public expiration_date: Date;

  @Column()
  public Notes: string;

  @Column()
  public stock: number;

  @Column({ default: true })
  public isActive: boolean;
}
