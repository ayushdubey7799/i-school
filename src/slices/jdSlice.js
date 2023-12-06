import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { auth } from "../functions/api/authentication/auth";
import { getJds } from "../functions/api/employers/getJds";
import { getJdsForMatching } from "../functions/api/employers/match/getJdsForMatching";



export const getAvailableJds = createAsyncThunk('jd/getJds', async ({ accessToken, clientCode, page, size }) => {
    const response = await getJds(accessToken, clientCode, page = 1, size = 100);
    return response.data;
})

export const getActiveJds = createAsyncThunk('jd/getActiveJds', async ({ accessToken, clientCode }) => {
    const response = await getJdsForMatching(accessToken, clientCode);
    return response.data;
})


const initialState = {
    availableJds: null,
    cloneSpecificData: null,
    activeJds: null,
    JdTrigger: false,  // New state added
    status: 'idle',
    error: null,
}

const jdSlice = createSlice({
    name: 'jd',
    initialState,
    reducers: {
        setJdTrigger: (state, action) => {
            state.JdTrigger = action.payload;
        },
    },

    extraReducers: (builder) => {
        builder.addCase(getAvailableJds.pending, (state) => {
            state.status = 'loading';
        }).addCase(getAvailableJds.fulfilled, (state, action) => {
            state.availableJds = action.payload.data;
            state.cloneSpecificData = action.payload.data.map((item) => {
                return {
                    jdId: item.jdId,
                    numOfReqs: item.reqNumber,
                    title: item.title,
                    description: item.description,
                    skills: item.skills,
                    bu: item.bu,
                    exp: item.exp,
                    location: item.location,
                    certification: item.certification,
                    workType: item.workType,
                    ctc: item.ctc,
                    keywords: item.keywords,
                    jd: item.jd,
                    noticePeriod: item.noticePeriod,
                    companyType: item.companyType,
                    candidateAvl: item.candidateAvl,
                    hiringManager: item.hiringManager,
                    recruiter: item.recruiter,
                    // jdUpload: item.jdUpload,
                    visibility: item.visibility,
                    autoReqNumbers: true,}
            })
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

export const { setJdTrigger } = jdSlice.actions;
export default jdSlice.reducer;


