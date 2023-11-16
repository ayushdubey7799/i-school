import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { createInterview } from "../functions/api/interview/createInterview";
import { updateStatus } from "../functions/api/interview/updateStatus";
import { getQuestion } from "../functions/api/interview/getQuestion";
import { submitAnswer } from "../functions/api/interview/submitAnswer";
import { submitAnswerWithFile } from "../functions/api/interview/submitAnswerWithFile";

export const createInterviewId = createAsyncThunk('interview/create', async ({jobSummary,resumeText,accessToken}) => {
    const response = await createInterview(jobSummary, resumeText, accessToken);
    return response.data;
})

export const updateInterview = createAsyncThunk('interview/status', async ({id,status,accessToken}) => {
    const response = await updateStatus(id, status, accessToken);
    return response.data;
})

export const fetchQuestion = createAsyncThunk('interview/question', async ({jobSummary,resumeText,accessToken}) => {
    const response = await getQuestion(jobSummary, resumeText, accessToken);
    return response.data;
})

export const submit = createAsyncThunk('interview/answer', async ({input,
    id,
    lastQuestion,
    interviewId,
    accessToken}) => {
    const response = await submitAnswer(input,
        id,
        lastQuestion,
        interviewId,
        accessToken);
    return response.data;
})

export const submitAnswerFile = createAsyncThunk('interview/fileAnswer', async ({formData,
    id,
    lastQuestion,
    interviewId,
    accessToken}) => {
    const response = await submitAnswerWithFile(formData,
        id,
        lastQuestion,
        interviewId,
        accessToken);
    return response.data;
})



const initialState = {
    interviewData: null,
    questionData: null,
    answerData: null,
    status: 'idle',
    error: null,
}

const interviewSlice = createSlice({
    name: 'interview',
    initialState,
    reducers: {},
    
    extraReducers: (builder) => {
        builder
        .addCase(createInterviewId.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(createInterviewId.fulfilled, (state, action) => {
            state.interviewData = action.payload;
            state.status = 'succeeded';
        })
        .addCase(createInterviewId.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        })
        .
        addCase(updateInterview.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(updateInterview.fulfilled, (state, action) => {
            console.log(action);
            state.interviewData = action.payload;
            state.status = 'succeeded';
        })
        .addCase(updateInterview.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        })
        .
        addCase(fetchQuestion.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(fetchQuestion.fulfilled, (state, action) => {
            state.questionData = action.payload;
            state.status = 'succeeded';
        })
        .addCase(fetchQuestion.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        })
        .
        addCase(submit.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(submit.fulfilled, (state, action) => {
            state.answerData = action.payload;
            state.status = 'succeeded';
        })
        .addCase(submit.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        })
        .addCase(submitAnswerFile.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(submitAnswerFile.fulfilled, (state, action) => {
            state.answerData = action.payload;
            state.status = 'succeeded';
        })
        .addCase(submitAnswerFile.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        })
    }
});
export default interviewSlice.reducer;


