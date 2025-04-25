import { UserInformations, UserProfileApiResponse } from "../Models/User";
import * as API from "./ApiService";

export const GetUser = async (token: string): Promise<UserProfileApiResponse> => {
  if (!token) throw new Error("Utilisateur non authentifié");

  return await API.PostRequest<UserProfileApiResponse>("user/profile/", {}, token);
};

export const SaveUser = async (token: string, user: UserInformations): Promise<UserProfileApiResponse> => {
  if (!token) throw new Error("Utilisateur non authentifié");

  return await API.PutRequest<UserProfileApiResponse>("user/profile/", user, token);
};
