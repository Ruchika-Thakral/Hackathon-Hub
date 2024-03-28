import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";

const initialState = {
    data: null,
    loading: false,
    error: null,

    // register: {
    //     data: null,
    //     loading: false,
    //     error: null,
    // },
    // login: {
    //     data: null,
    //     loading: false,
    //     error: null,
    // },
};

export const userRegistration = createAsyncThunk(
    "user/userRegistration",
    async (formData, thunkAPI) => {
        try {
            const response = await axios.post(
                "http://localhost:8080/User/register",
                formData
            );
            return response.data;
            // return { data: response.data, status: response.status };
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
            return response.data;
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
            // console.log(response);
            // console.log(response.headers.getAuthorization());
            // if (response.status === 200) {
            //     Cookies.set("userData", JSON.stringify(response.data), {
            //         expires: 7,
            //     });
            //     console.log("cookie log set");
            //     console.log(JSON.stringify(response.data));
            // }
            return response.data;
            // return { data: response.data, status: response.status };
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
            state.data = null;
            // Cookies.remove("userData");
        },
        reattemptLogin(state, action) {
            // const userCookie = Cookies.get("userData");
            // if (userCookie) {
                state.data = action.payload ;
                console.log("reloggedin");
                // console.log({ data: JSON.parse(userCookie) });
            // }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(userRegistration.pending, (state) => {
                state.loading = true;
                state.error = null;

                // state.register.loading = true;
                // state.register.error = null;
            })
            .addCase(userRegistration.fulfilled, (state, action) => {
                // state.data = action.payload;
                state.loading = false;
                state.error = null;

                // state.register.loading = false;
                // state.register.data = action.payload; // Extract data from the response
                // state.register.error = null;
            })
            .addCase(userRegistration.rejected, (state, action) => {
                state.data = null;
                state.loading = false;
                state.error = action.payload;

                // state.register.loading = false;
                // state.register.data = null;
                // state.register.error = action.payload; // Set error payload
            })
            .addCase(otpVerification.pending, (state) => {
                state.loading = true;
                state.error = null;

                // state.register.loading = true;
                // state.register.error = null;
            })
            .addCase(otpVerification.fulfilled, (state, action) => {
                // state.data = action.payload;
                state.loading = false;
                state.error = null;

                // state.register.loading = false;
                // state.register.data = action.payload; // Extract data from the response
                // state.register.error = null;
            })
            .addCase(otpVerification.rejected, (state, action) => {
                state.loading = false;
                state.data = null;
                state.error = action.payload; // Set error payload
            })
            .addCase(userLogin.pending, (state) => {
                // state.data = null;
                state.loading = true;
                state.error = null;

                // state.login.loading = true;
                // state.login.error = null;
            })
            .addCase(userLogin.fulfilled, (state, action) => {
                state.data = action.payload;
                state.loading = false;
                state.error = null;

                // state.login.loading = false;
                // state.login.data = action.payload; // Extract data from the response
                // state.login.error = null;
            })
            .addCase(userLogin.rejected, (state, action) => {
                state.data = null;
                state.loading = false;
                state.error = action.payload;

                // state.login.loading = false;
                // state.login.data = null;
                // state.login.error = action.payload; // Set error payload
            });
    },
});

export const selectUserDetails = (state) => state.user.data;
export const selectUserId = (state) => state.user.data?.userId;
export const selectErrorUser = (state) => state.user.error;
export const selectLoadingUser = (state) => state.user.loading;

export const { logout, reattemptLogin, successTeamRegistration } =
    userSlice.actions;
export default userSlice.reducer;
