import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    registration:{
        data:null,
        loading:false,
        error:null
    },
    idea:{
        data:null,
        loading:false,
        error:null
    }
};
export const teamRegistration=createAsyncThunk(
    'team/teamRegistration',
    async ({hackathonId,userId,team},thunkAPI) => {
        try {
            const response = await axios.post(`http://localhost:8080/Team/${hackathonId}/${userId}`,team);
            
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);
export const ideaSubmission=createAsyncThunk(
    'team/ideaSubmission',
    async ({hackathonId,userId,Idea},thunkAPI) => {
        try {
            const response = await axios.post(`http://localhost:8080/team/idea/${hackathonId}/${userId}/idea`,Idea);
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);
const teamSlice = createSlice({
    name: "team",
    initialState,
    reducers: {},
    extraReducers:(builder)=>{
        builder
        .addCase(teamRegistration.pending, (state) => {
            state.registration.loading = true;
            state.registration.error = null;
        })
        .addCase(teamRegistration.fulfilled, (state, action) => {
            state.registration.loading = false;
            state.registration.data = action.payload; // Extract data from the response
            state.registration.error = null;
        })
        .addCase(teamRegistration.rejected, (state, action) => {
            state.registration.loading = false;
            state.registration.data= null;
            state.registration.error = action.payload; // Set error payload
        })
        .addCase(ideaSubmission.pending, (state) => {
            state.idea.loading = true;
            state.idea.error = null;
        })
        .addCase(ideaSubmission.fulfilled, (state, action) => {
            state.idea.loading = false;
            state.idea.data = action.payload; // Extract data from the response
            state.idea.error = null;
        })
        .addCase(ideaSubmission.rejected, (state, action) => {
            state.idea.loading = false;
            state.idea.data= null;
            state.idea.error = action.payload; // Set error payload
        })
    }
});


export default teamSlice.reducer;
