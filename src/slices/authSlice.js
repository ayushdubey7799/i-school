import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { auth } from "../functions/api/auth";



export const performLogin = createAsyncThunk('auth/performLogin', async (arg) => {
    const response = await auth(arg.password, arg.email);
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
            state.error = action.error.message;
        })
    }
});
export const {logout} = authSlice.actions;
export default authSlice.reducer;


