import { Base } from "./Base";
import { Entity, OneToOne, JoinColumn, PrimaryColumn, Column } from "typeorm";
import { Customer } from "./Customer";

@Entity()

  @Column() seqPointer: number;

  @Column() balanceAmount: number;
}
