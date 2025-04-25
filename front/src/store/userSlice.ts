import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { UserInformations, UserState } from "../Models/User";
import * as UserService from "../Services/UserService";


export const fetchUserInformations = createAsyncThunk(
  "user/fetchIdentity",
  async (token: string, { rejectWithValue }) => {
    try {
      if (!token) return rejectWithValue("Aucun token disponible");
      const response = await UserService.GetUser(token);
      return response.body;
    } catch (error) {
      return rejectWithValue("Échec de la récupération de l'utilisateur");
    }
  }
);


export const updateUserInformations = createAsyncThunk(
  "user/updateIdentity",
  async ({ token, user }: { token: string; user: UserInformations }, { rejectWithValue }) => {
    try {
      if (!token) return rejectWithValue("Aucun token disponible");
      const response = await UserService.SaveUser(token, user);
      return response.body;
    } catch (error) {
      return rejectWithValue("Échec de la mise à jour de l'utilisateur");
    }
  }
);


const initialState: UserState = {
  identity: null,
  loading: false,
  error: null
};


const UserInformationsSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserInformations.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserInformations.fulfilled, (state, action: PayloadAction<UserInformations>) => {
        state.identity = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchUserInformations.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(updateUserInformations.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateUserInformations.fulfilled, (state, action: PayloadAction<UserInformations>) => {
        state.identity = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(updateUserInformations.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  }
});

export default UserInformationsSlice.reducer;
