import { UpdateDateColumn, CreateDateColumn, ManyToOne } from "typeorm";
import { User } from "./User";
import { Exclude } from "class-transformer";

export abstract class Base {
  @Exclude()
  @CreateDateColumn()
  createdAt?: Date;

  @Exclude()
  @Exclude()
  @ManyToOne(type => User, {
    onDelete: "NO ACTION",
    onUpdate: "CASCADE",
    nullable: false
  })
  updatedBy: string;
}
