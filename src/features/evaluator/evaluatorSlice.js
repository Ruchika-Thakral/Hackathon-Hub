import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    evaluators: {
        data: [],
        loading: false,
        error: null,
    },
};

export const fetchEvaluators = createAsyncThunk(
    "evaluator/fetchEvaluators",
    async (thunkAPI) => {
        try {
            const response = await axios.get(
                "http://localhost:8080/Admin/Evaluator"
            );
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const registerEvaluator = createAsyncThunk(
    "evaluator/registerEvaluator",
    async (evaluatorData, thunkAPI) => {
        try {
            const response = await axios.post(
                "http://localhost:8080/Admin/Evaluator",
                evaluatorData
            );
            const response2 = await axios.get(
                "http://localhost:8080/Admin/Evaluator"
            );
            return response2.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const assignEvaluator = createAsyncThunk(
    "evaluator/assignEvaluator",
    async (evaluatorData, thunkAPI) => {
        try {
            const response = await axios.post(
                "http://localhost:8080/Admin/assign",
                evaluatorData
            );
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

const evaluatorSlice = createSlice({
    name: "evaluator",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchEvaluators.pending, (state) => {
                state.evaluators.loading = true;
                state.evaluators.error = null;
            })
            .addCase(fetchEvaluators.fulfilled, (state, action) => {
                state.evaluators.loading = false;
                state.evaluators.data = action.payload; // Extract data from the response
                state.evaluators.error = null;
            })
            .addCase(fetchEvaluators.rejected, (state, action) => {
                state.evaluators.loading = false;
                state.evaluators.data = null;
                state.evaluators.error = action.payload; // Set error payload
            })
            .addCase(registerEvaluator.pending, (state) => {
                state.evaluators.loading = true;
                state.evaluators.error = null;
            })
            .addCase(registerEvaluator.fulfilled, (state, action) => {
                state.evaluators.loading = false;
                state.evaluators.data = action.payload; // Refetch and set evalautor list   
                state.evaluators.error = null;
            })
            .addCase(registerEvaluator.rejected, (state, action) => {
                state.evaluators.loading = false;
                state.evaluators.data = null;
                state.evaluators.error = action.payload; // Set error payload
            });
    },
});

export const { login, logout, register } = evaluatorSlice.actions;

export default evaluatorSlice.reducer;
