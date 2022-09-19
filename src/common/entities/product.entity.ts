import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name:'Productos'})
export class ProductEntity {
  //* Aqui ira todas las variables que tendran los productos.
  
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ type: "varchar" })
  public name: string;

  @Column()
  public precio: number;

  @Column()
  //? Esta bien definido?
  public IVA: number;

  @Column()
  //? Esta bien definido?
  public no_IVA: number;

  @Column({ type: Date })
  private expiration_date: Date;

  @Column()
  private Notes: string;

  @Column()
  private stock: number;

  @Column({ default: true })
  private isActive: boolean;
}
