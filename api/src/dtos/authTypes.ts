import { Role } from "../entity/User";

export class UserLoginPost {
  @IsNotEmpty() userid: string;
  @IsNotEmpty() password: string;
}

export class Claim {
  userid: string;
  role: Role;
}
