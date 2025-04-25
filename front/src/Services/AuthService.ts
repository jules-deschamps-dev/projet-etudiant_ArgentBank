// AuthService.ts
import { LoginResponse } from "../Models/LoginResponse";
import { UserCredentials } from "../Models/User";
import * as API from "./ApiService";

export const Login = async (credentials: UserCredentials): Promise<LoginResponse> => {
  return await API.PostRequest<LoginResponse>("user/login/", credentials);
};