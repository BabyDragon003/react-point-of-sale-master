import { Entity, Column, PrimaryColumn, JoinColumn, ManyToOne } from "typeorm";
import { Base } from "./Base";
import { ProductType } from "./ProductType";
import { IsNotEmpty, IsPositive } from "class-validator";

@Entity()
export class Product extends Base {
  @IsNotEmpty()
  @PrimaryColumn()
  id: string;

  @IsNotEmpty()
  @Column()
  name: string;

  })
  @JoinColumn({ name: "productTypeId" })
  productType: ProductType;

  @IsNotEmpty()
  @Column()
  productTypeId: string;
}
