/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('products')
export class ProductEntity {
  //* Aqui ira todas las variables que tendran los productos.
  
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ type: "varchar" })
  public name: string;

  @Column()
  //? Esta bien definido?
  public price_no_iva: number;

  @Column()
  //? Esta bien definido?
  public price_iva: number;

  @Column({ type: Date })
  public expiration_date: Date;

  @Column()
  public Notes: string;

  @Column()
  public stock: number;

  @Column({ default: true })
  public isActive: boolean;
}
