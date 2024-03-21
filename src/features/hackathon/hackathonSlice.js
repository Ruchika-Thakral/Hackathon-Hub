import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    hackathons:{
        data:null,
        loading:false,
        error:null
    }
};
export const fetchHackathons=createAsyncThunk(
    'hackathon/fetchHackathons',
    async (thunkAPI) => {
        try {
            const response = await axios.get('http://localhost:8080/Hackathon');
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);
export const hackathonCreation=createAsyncThunk(
    'hackathon/hackathonCreation',
    async (hackathonData,thunkAPI) => {
        try {
            const response = await axios.post('http://localhost:8080/Admin/hackathon',hackathonData);
            console.log(response)
            const response2 = await axios.get('http://localhost:8080/Hackathon');
            return response2.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

const hackathonSlice = createSlice({
    name: "hackathon",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchHackathons.pending, (state) => {
                state.hackathons.loading = true;
                state.hackathons.error = null;
            })
            .addCase(fetchHackathons.fulfilled, (state, action) => {
                state.hackathons.loading = false;
                state.hackathons.data = action.payload; // Extract data from the response
                state.hackathons.error = null;
            })
            .addCase(fetchHackathons.rejected, (state, action) => {
                state.hackathons.loading = false;
                state.hackathons.data= null;
                state.hackathons.error = action.payload; // Set error payload
            })
            .addCase(hackathonCreation.pending, (state) => {
                state.hackathons.loading = true;
                state.hackathons.error = null;
            })
            .addCase(hackathonCreation.fulfilled, (state, action) => {
                state.hackathons.loading = false;
                state.hackathons.data = action.payload; // Extract data from the response
                state.hackathons.error = null;
            })
            .addCase(hackathonCreation.rejected, (state, action) => {
                state.hackathons.loading = false;
                state.hackathons.data= null;
                state.hackathons.error = action.payload; // Set error payload
            })
        }
});



export default hackathonSlice.reducer;
