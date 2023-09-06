import { Role } from "@/components/AdminSignin/model";

export type SigninType = {
  email: string;
  password: string;
}

export type ReturnValueType = {
  _id: string;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  role: Role[];
  parastatals: string;
  department: string;
  date: Date;
  token: string;
}