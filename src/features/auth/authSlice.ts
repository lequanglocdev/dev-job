
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { AuthState, LoginData, RegisterData, ForgotPassword, VerifyEmailData, LoginGoogle} from "@/pages/auth/types/authTypes";
import { login, register, forgotPassword, verifyEmail, loginGoogle } from "@/apis/authApi";

const initialState: AuthState = {
  user: null,
  loading: false,
  error: null,
};

export const loginUser = createAsyncThunk(
  "auth/login",
  async (data: LoginData, { rejectWithValue }) => {
    try {
      return await login(data);
    } catch (error: any) {
      return rejectWithValue(error.response.data.message || "Login failed");
    }
  }
);

export const loginUserGoogle = createAsyncThunk(
  "auth/loginGoogle",
  async (data: LoginGoogle, { rejectWithValue }) => {
    try {
      return await loginGoogle(data);
    } catch (error: any) {
      return rejectWithValue(error.response.data.message || "Login failed");
    }
  }
);

export const registerUser = createAsyncThunk(
  "auth/register",
  async (data: RegisterData, { rejectWithValue }) => {
    try {
      return await register(data);
    } catch (error: any) {
      return rejectWithValue(error.response.data.message || "Registration failed");
    }
  }
);

export const forgotPasswordUser = createAsyncThunk(
  "auth/forgotPassword",
  async (data: ForgotPassword, { rejectWithValue }) => {
    try {
      return await forgotPassword(data);
    } catch (error: any) {
      return rejectWithValue(error.response.data.message || "Registration failed");
    }
  }
);

export const verifyEmaildUser = createAsyncThunk(
  "auth/verifyEmail",
  async (data: VerifyEmailData, { rejectWithValue }) => {
    try {
      return await verifyEmail(data);
    } catch (error: any) {
      return rejectWithValue(error.response.data.message || "Registration failed");
    }
  }
);


const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Xử lý đăng nhập
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      // Xử lý đăng nhập google
      .addCase(loginUserGoogle.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUserGoogle.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(loginUserGoogle.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      // Xử lý đăng ký
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      // Xử lý quên mật khẩu
      .addCase(forgotPasswordUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(forgotPasswordUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(forgotPasswordUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
       // Xử lý veryfy email 
      .addCase(verifyEmaildUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(verifyEmaildUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(verifyEmaildUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
