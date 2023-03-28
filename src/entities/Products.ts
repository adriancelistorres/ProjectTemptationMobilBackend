import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
 class Products extends BaseEntity {
  @PrimaryGeneratedColumn()
  idproduc: number;

  @Column()
  idcat: number;

  @Column()
  idsize: number;

  @Column()
  idstyles: number;

  @Column()
  idbrand: number;

  @Column()
  idcolor: number;

  @Column()
  name_p: string;

  @Column()
  description: string;

  @Column()
  price: number;

  @Column()
  stock: number;

  @Column()
  image_front: string;

  @Column()
  image_back: string;

  @Column()
  image_using: string;

  @Column()
  state: number;
}

export default Products;