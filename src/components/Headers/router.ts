import { USER_BASE_URL } from "../SignUp/router";

export const logoutUserUrl = (token: string) => `${USER_BASE_URL}/logout/${token}`;