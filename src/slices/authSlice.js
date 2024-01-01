import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { auth } from "../api/authApis";
import { auth } from "../functions/api/authentication/auth";



export const performLogin = createAsyncThunk('auth/performLogin', async ({ password, email, clientCode }) => {
    console.log("IN LOGIN", clientCode);

    const response = await auth(password, email, clientCode);
    console.log("From slice->", response);
    if (response.response?.data?.status == "FAILED") throw new Error(JSON.stringify(response.response?.data));
    return response.data;
})

const initialState = {
    userData: null,
    status: 'idle',
    error: null,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.userData = null;
            state.status = "idle";
            state.error = null;
        }
    },

    extraReducers: (builder) => {
        builder.addCase(performLogin.pending, (state) => {
            state.status = 'loading';
        }).addCase(performLogin.fulfilled, (state, action) => {
            state.userData = action.payload;
            state.status = 'succeeded';
        }).addCase(performLogin.rejected, (state, action) => {
            state.status = 'failed';
            console.log("Action---->", action);
            state.error = action.error.message;
        })
    }
});
export const { logout } = authSlice.actions;
export default authSlice.reducer;


