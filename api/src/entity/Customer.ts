import { Entity, Column, PrimaryColumn, JoinColumn, OneToOne } from "typeorm";
import { Base } from "./Base";
import { IsNotEmpty, Length, IsEmail } from "class-validator";

@Entity()
export class Customer extends Base {
  @IsNotEmpty()
  @PrimaryColumn()
  id: string;

  @Length(10, 10)
  @Column()
  mobile: string;

  @Column({ nullable: true })
  @IsEmail()
  email: string;
}
