import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    register:{
        data: null,
        loading: false,
        error: null,},
    login:{
        data: null,
        loading: false,
         error: null,},
    
};

export const userRegistration = createAsyncThunk(
    'user/userRegistration',
    async (formData, thunkAPI) => {
        try {
            const response = await axios.post('http://localhost:8080/User/register', formData);
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const otpVerification = createAsyncThunk(
    'user/otpVerification',
    async (otpDetails, thunkAPI) => {
        try {
            const response = await axios.post('http://localhost:8080/User/verifyOtp', otpDetails);
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const userLogin = createAsyncThunk(
    'user/userLogin',
    async (formData, thunkAPI) => {
        try {
            const response = await axios.post('http://localhost:8080/User/login', formData);
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);



const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(userRegistration.pending, (state) => {
                state.register.loading = true;
                state.register.error = null;
            })
            .addCase(userRegistration.fulfilled, (state, action) => {
                state.register.loading = false;
                state.register.data = action.payload; // Extract data from the response
                state.register.error = null;
            })
            .addCase(userRegistration.rejected, (state, action) => {
                state.loading = false;
                state.register.data= null;
                state.register.error = action.payload; // Set error payload
            })
            .addCase(otpVerification.pending, (state) => {
                state.register.loading = true;
                state.register.error = null;
            })
            .addCase(otpVerification.fulfilled, (state, action) => {
                state.register.loading = false;
                state.register.data = action.payload; // Extract data from the response
                state.register.error = null;
            })
            .addCase(otpVerification.rejected, (state, action) => {
                state.register.loading = false;
                state.register.data = null;
                state.register.error = action.payload; // Set error payload
            })
            .addCase(userLogin.pending, (state) => {
                state.login.loading = true;
                state.login.error = null;
            })
            .addCase(userLogin.fulfilled, (state, action) => {
                state.login.loading = false;
                state.login.data = action.payload; // Extract data from the response
                state.login.error = null;
            })
            .addCase(userLogin.rejected, (state, action) => {
                state.login.loading = false;
                state.login.data = null;
                state.login.error = action.payload; // Set error payload
            });
    },
});

export default userSlice.reducer;