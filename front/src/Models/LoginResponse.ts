export interface LoginResponse {
  status: number;
  message: string;
  body: {
    token: string;
  };
}
