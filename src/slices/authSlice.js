import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { auth } from "../functions/api/auth";
import { register } from "../functions/api/register";
import { forgetPassword } from "../functions/api/forget";
import { reset } from "../functions/api/reset";


export const performLogin = createAsyncThunk('auth/performLogin', async (arg) => {
    const response = await auth(arg.password, arg.email);
    return response;
})

export const performSignup = createAsyncThunk('auth/performSignup', async (arg) => {
    const response = await register(arg.email, arg.name, arg.password);
    return response;
})

export const performForgetPassword = createAsyncThunk('auth/performForgetPassword', async (email) => {
    const response = await forgetPassword(email);
    return response;
})

export const performResetPassword = createAsyncThunk('auth/performResetPassword', async (arg) => {
    const response = await reset(arg.confirm, arg.password, arg.email, arg.id);
    return response;
})


const authSlice = createSlice({
    name: 'auth',
    initialState: {
        loginData: [],
        signupData: [],
        forgetPassData: [],
        ResetPassData: [],
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(performLogin.pending, (state) => {
            state.status = 'loading';
        }).addCase(performLogin.fulfilled, (state, action) => {
            state.loginData = action.payload;
            state.status = 'succeeded';
        }).addCase(performLogin.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        }).addCase(performSignup.pending, (state) => {
            state.status = 'loading';
        }).addCase(performSignup.fulfilled, (state, action) => {
            state.loginData = action.payload;
            state.status = 'succeeded';
        }).addCase(performSignup.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        }).addCase(performForgetPassword.pending, (state) => {
            state.status = 'loading';
        }).addCase(performForgetPassword.fulfilled, (state, action) => {
            state.loginData = action.payload;
            state.status = 'succeeded';
        }).addCase(performForgetPassword.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        }).addCase(performResetPassword.pending, (state) => {
            state.status = 'loading';
        }).addCase(performResetPassword.fulfilled, (state, action) => {
            state.loginData = action.payload;
            state.status = 'succeeded';
        }).addCase(performResetPassword.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        });
    },
});

export default authSlice.reducer;


