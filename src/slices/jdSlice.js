import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { auth } from "../functions/api/authentication/auth";
import { getJds } from "../functions/api/employers/getJds";
import { getJdsForMatching } from "../functions/api/employers/match/getJdsForMatching";



export const getAvailableJds = createAsyncThunk('jd/getJds', async ({accessToken,clientCode}) => {
    const response = await getJds(accessToken, clientCode);
    return response.data;
})

export const getActiveJds = createAsyncThunk('jd/getActiveJds', async ({accessToken,clientCode}) => {
    const response = await getJdsForMatching(accessToken, clientCode);
    return response.data;
})


const initialState = {
    availableJds: null,
    activeJds: null,
    status: 'idle',
    error: null,
}

const jdSlice = createSlice({
    name: 'jd',
    initialState,
    reducers: {
    },
    
    extraReducers: (builder) => {
        builder.addCase(getAvailableJds.pending, (state) => {
            state.status = 'loading';
        }).addCase(getAvailableJds.fulfilled, (state, action) => {
            state.availableJds = action.payload.data;
            state.status = 'succeeded';
        }).addCase(getAvailableJds.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        }).addCase(getActiveJds.pending, (state) => {
            state.status = 'loading';
        }).addCase(getActiveJds.fulfilled, (state, action) => {
            state.activeJds = action.payload?.data;
            state.status = 'succeeded';
        }).addCase(getActiveJds.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        })
    }
});
export default jdSlice.reducer;


