// authSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { LoginResponse } from "../Models/LoginResponse";
import { UserCredentials } from "../Models/User";
import * as AuthService from "../Services/AuthService";

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (credentials: UserCredentials, { rejectWithValue }) => {
    try {
      const response: LoginResponse = await AuthService.Login(credentials);

      //let isConnected = !!localStorage.getItem("token") || !!sessionStorage.getItem("token");
  
      localStorage.setItem("remember", credentials.remember.toString())
      if (credentials.remember) localStorage.setItem("token", response.body.token);
      else sessionStorage.setItem("token", response.body.token);

      return response.body.token;
    } catch (error) {
      return rejectWithValue("Échec de l'authentification");
    }
  }
);

const remember = localStorage.getItem("remember") == "true";
const token = remember ? localStorage.getItem("token") : sessionStorage.getItem("token");

const initialState: { token: string | null; loading: boolean; error: string | null } = {
  token: token,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.token = null;
      state.error = null;
      localStorage.removeItem("token");
      sessionStorage.removeItem("token");
      localStorage.removeItem("remember");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action: PayloadAction<string>) => {
        state.token = action.payload;
        state.loading = false;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
