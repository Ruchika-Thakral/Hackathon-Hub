import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";

const initialState = {
    register: {
        data: null,
        loading: false,
        error: null,
    },
    login: {
        data: null,
        loading: false,
        error: null,
    },
};

export const userRegistration = createAsyncThunk(
    "user/userRegistration",
    async (formData, thunkAPI) => {
        try {
            const response = await axios.post(
                "http://localhost:8080/User/register",
                formData
            );
            return { data: response.data, status: response.status };
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const otpVerification = createAsyncThunk(
    "user/otpVerification",
    async (otpDetails, thunkAPI) => {
        try {
            const response = await axios.post(
                "http://localhost:8080/User/verifyOtp",
                otpDetails
            );
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const userLogin = createAsyncThunk(
    "user/userLogin",
    async (formData, thunkAPI) => {
        try {
            const response = await axios.post(
                "http://localhost:8080/User/login",
                formData
            );
            console.log(response);
            if (response.status === 200) {
                Cookies.set("userData", JSON.stringify(response.data), {
                    expires: 7,
                });
                console.log("cookie log set");
                console.log(JSON.stringify(response.data));
            }
            return { data: response.data, status: response.status };
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        logout(state) {
            state.login.data = null;
            Cookies.remove("userData");
        },
        reattemptLogin(state) {
            const userCookie = Cookies.get("userData");
            if (userCookie) {
                state.login.data = { data: JSON.parse(userCookie) };
                console.log("reloggedin");
                console.log({ data: JSON.parse(userCookie) });
            }
        },
        successTeamRegistration(state, hackathonId) {
            const userCookie = JSON.parse(Cookies.get("userData"));
            state.login.data = { data: {...userCookie, available: 0, assignedHackathon: hackathonId}}
            Cookies.set("userData", JSON.stringify({...userCookie, available: 0, assignedHackathon: hackathonId}), {
                expires: 7,
            });
            state.login.data = { data: JSON.parse(userCookie) }
        }
    },
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
                state.register.loading = false;
                state.register.data = null;
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
export const { logout, reattemptLogin, successTeamRegistration } = userSlice.actions;
export default userSlice.reducer;
