import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    // hackathons:{
    data: [],
    loading: false,
    error: null,
    // }
};
export const fetchHackathons = createAsyncThunk(
    "hackathon/fetchHackathons",
    async (thunkAPI) => {
        try {
            const response = await axios.get("http://localhost:8080/Hackathon");
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);
export const hackathonCreation = createAsyncThunk(
    "hackathon/hackathonCreation",
    async (hackathonData, thunkAPI) => {
        try {
            const response = await axios.post(
                "http://localhost:8080/Admin/hackathon",
                hackathonData
            );
            // console.log(response);
            // const response2 = await axios.get(
            //     "http://localhost:8080/Hackathon"
            // );
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const hackathonEnd = createAsyncThunk(
    "hackathon/hackathonEnd",
    async (hackathonId, thunkAPI) => {
        try {
            const response = await axios.put(
                `http://localhost:8080/Admin/hackathon/end/${hackathonId}`
            );
            // console.log(response);
            // const response2 = await axios.get(
            //     "http://localhost:8080/Hackathon"
            // );
            return response.data;
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
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchHackathons.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload; // Extract data from the response
                state.error = null;
            })
            .addCase(fetchHackathons.rejected, (state, action) => {
                state.loading = false;
                state.data = [];
                state.error = action.payload; // Set error payload
            })
            .addCase(hackathonCreation.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(hackathonCreation.fulfilled, (state, action) => {
                state.loading = false;
                // state.data = action.payload; // Extract data from the response
                state.error = null;
            })
            .addCase(hackathonCreation.rejected, (state, action) => {
                state.loading = false;
                // state.data = null;
                state.error = action.payload; // Set error payload
            })
            .addCase(hackathonEnd.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(hackathonEnd.fulfilled, (state, action) => {
                state.loading = false;
                // state.data = action.payload; // Extract data from the response
                state.error = null;
            })
            .addCase(hackathonEnd.rejected, (state, action) => {
                state.loading = false;
                // state.data = null;
                state.error = action.payload; // Set error payload
            });
    },
});

export const selectHackathons = (state) => state.hackathon.data;
export const selectHackathonById = (state, hackathonId) =>
    state.hackathon.data?.find(
        (hackathon) => hackathon.hackathonId === hackathonId
    );
export const selectErrorHackathon = (state) => state.hackathon.error;
export const selectLoadingHackathon = (state) => state.hackathon.loading;

export default hackathonSlice.reducer;
