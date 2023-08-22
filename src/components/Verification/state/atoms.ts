import { atom } from "recoil";

import { VerificationCheckType } from "../model";

export const verificationCheck = atom<VerificationCheckType>({
  key: "verificationCheck",
  default: {
    sub: null,
    username: null,
  }
})