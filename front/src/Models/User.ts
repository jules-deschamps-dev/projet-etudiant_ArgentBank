
export interface UserCredentials {
  email: string;
  password: string;
  remember: boolean;
}

export interface UserInformations {
  firstName: string;
  lastName: string;
  email: string;
}

export interface UserProfileApiResponse {
  status: number;
  message: string;
  body: UserProfile;
}

export interface UserProfile {
  email: string;
  firstName: string;
  lastName: string;
  createdAt: string;
  updatedAt: string;
  id: string;
}


export interface ApiResponse {
  status: number;
  message: string;
}
export interface UserState {
  identity: UserInformations | null;
  loading: boolean;
  error: string | null;
}
