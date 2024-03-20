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
    },
    repo:{
        data:null,
        loading:false,
        error:null
    },
    teamdetails:{
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
    async ({hackathonId,userId,ideaData},thunkAPI) => {
        try {
            const response = await axios.post(`http://localhost:8080/Team/idea/${hackathonId}/${userId}`,ideaData);
            return response;
        } catch (error) {
            console.log(error);
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const repoSubmission=createAsyncThunk(
    'team/repoSubmission',
    async ({hackathonId,userId,repoData},thunkAPI) => {
        try {
            const response = await axios.post(`http://localhost:8080/Team/ideaFiles/${hackathonId}/${userId}`,repoData);
            return response;
        } catch (error) {
            console.log(error);
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const fetchTeamDetails=createAsyncThunk(
    'hackathon/fetchTeamDetails',
    async (userId,thunkAPI) => {
        try {
            const response = await axios.get(`http://localhost:8080/User/Teams/${userId}`); 
            return response.data;
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
        .addCase(repoSubmission.pending, (state) => {
            state.repo.loading = true;
            state.repo.error = null;
        })
        .addCase(repoSubmission.fulfilled, (state, action) => {
            state.repo.loading = false;
            state.repo.data = action.payload; // Extract data from the response
            state.repo.error = null;
        })
        .addCase(repoSubmission.rejected, (state, action) => {
            state.repo.loading = false;
            state.repo.data= null;
            state.repo.error = action.payload; // Set error payload
        })
        .addCase(fetchTeamDetails.pending, (state) => {
            state.teamdetails.loading = true;
            state.teamdetails.error = null;
        })
        .addCase(fetchTeamDetails.fulfilled, (state, action) => {
            state.teamdetails.loading = false;
            state.teamdetails.data = action.payload; // Extract data from the response
            state.teamdetails.error = null;
        })
        .addCase(fetchTeamDetails.rejected, (state, action) => {
            state.teamdetails.loading = false;
            state.teamdetails.data= null;
            state.teamdetails.error = action.payload; // Set error payload
        })
    }
});


export default teamSlice.reducer;
