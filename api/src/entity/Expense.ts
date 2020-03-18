import {
  Entity,
  Column,
  JoinColumn,
  ManyToOne,
@Entity()
export class Expense extends Base {
  @PrimaryGeneratedColumn() id: string;

  @IsNotEmpty()
  @Column()
  description: string;

  @IsPositive()
  @Column({ type: "float" })
  amount: number;

  @IsNotEmpty()
  @Column()
  spentAt: Date;

  @ManyToOne(type => ExpenseType, { onDelete: "RESTRICT", onUpdate: "CASCADE" })
  @JoinColumn({ name: "expenseTypeId" })
  expenseType: ExpenseType;

  @IsNotEmpty()
  @Column()
  expenseTypeId: string;
}
