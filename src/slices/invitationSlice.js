import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";



export const sendInvite = createAsyncThunk('invite/sendInvite', async ({inviteData, accessToken,clientCode}) => {
    const response = await auth(inviteData, accessToken, clientCode);
    return response.data;
})

const initialState = {
    selectedResumes: [],
    inviteData: null,
    inviteResponseData: null,
    status: 'idle',
    error: null,
}

const inviteSlice = createSlice({
    name: 'invite',
    initialState,
    reducers: {
        addResumes: (state,action) => {
            console.log("Worked",action.payload)
            state.selectedResumes = action.payload;
        },

    },
    
    extraReducers: (builder) => {
        builder.addCase(sendInvite.pending, (state) => {
            state.status = 'loading';
        }).addCase(sendInvite.fulfilled, (state, action) => {
            state.userData = action.payload;
            state.status = 'succeeded';
        }).addCase(sendInvite.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        })
    }
});
export const {addResumes} = inviteSlice.actions;
export default inviteSlice.reducer;


