import { ChangeEvent, FormEvent } from "react";

export type SignInType = {
  handleOnChangeEmail: (e: ChangeEvent<HTMLInputElement>) => void;
  handleOnChangePassword: (e: ChangeEvent<HTMLInputElement>) => void;
  handleOnSubmit: (e: FormEvent<HTMLFormElement>) => void;
  email: string;
  password: string;
}