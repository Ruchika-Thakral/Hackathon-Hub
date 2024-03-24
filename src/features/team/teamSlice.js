import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    registration: {
        data: null,
        loading: false,
        error: null,
    },
    idea: {
        data: null,
        loading: false,
        error: null,
    },
    repo: {
        data: null,
        loading: false,
        error: null,
    },
    teamdetails: {
        data: null,
        loading: false,
        error: null,
    },
    judgeteams: {
        data: null,
        loading: false,
        error: null,
    },
    panelistteams: {
        data: null,
        loading: false,
        error: null,
    },
};
export const teamRegistration = createAsyncThunk(
    "team/teamRegistration",
    async ({ hackathonId, userId, team }, thunkAPI) => {
        try {
            console.log({ hackathonId, userId, team });
            const response = await axios.post(
                `http://localhost:8080/Team/${hackathonId}/${userId}`,
                team
            );
            const response2 = await axios.get(
                `http://localhost:8080/User/Teams/${userId}`
            );
            console.log(response);
            return {a:response, b:response2};
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);
export const ideaSubmission = createAsyncThunk(
    "team/ideaSubmission",
    async ({ hackathonId, userId, ideaData }, thunkAPI) => {
        try {
            console.log({ hackathonId, userId, ideaData });
            const response = await axios.post(
                `http://localhost:8080/Team/idea/${hackathonId}/${userId}`,
                ideaData
            );
            const response2 = await axios.get(
                `http://localhost:8080/User/Teams/${userId}`
            );
            console.log(response);
            return {a:response, b:response2};
        } catch (error) {
            console.log(error);
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const repoSubmission = createAsyncThunk(
    "team/repoSubmission",
    async ({ hackathonId, userId, repoData }, thunkAPI) => {
        try {
            console.log({ hackathonId, userId, repoData });
            const response = await axios.post(
                `http://localhost:8080/Team/ideaFiles/${hackathonId}/${userId}`,
                repoData
            );
            const response2 = await axios.get(
                `http://localhost:8080/User/Teams/${userId}`
            );
            console.log(response);
            return {a:response, b:response2};
        } catch (error) {
            console.log(error);
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const fetchTeamDetails = createAsyncThunk(
    "hackathon/fetchTeamDetails",
    async (userId, thunkAPI) => {
        try {
            console.log(userId);
            if (userId) {
                const response = await axios.get(
                    `http://localhost:8080/User/Teams/${userId}`
                );
                console.log(response);
                return response.data;
            }
            return []
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const fetchJudgeTeamsByHackathonId = createAsyncThunk(
    "team/fetchJudgeTeamsByHackathonId",
    async ({ hackathonId }, thunkAPI) => {
        // Assuming hackathonId is already available in the state
        try {
            const response = await axios.get(
                `http://localhost:8080/Judge/selectedTeams/${hackathonId}`
            );
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const fetchPanelistTeamsByHackathonId = createAsyncThunk(
    "team/fetchPanelistTeamsByHackathonId",
    async ({ hackathonId, panelistid }, thunkAPI) => {
        // Assuming hackathonId is already available in the state
        try {
            const response = await axios.get(
                `http://localhost:8080/panelist/${hackathonId}/${panelistid}`
            );
            console.log(response);
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const rejectTeam = createAsyncThunk(
    "team/rejectTeam",
    async ({teamId, hackathonId, panelistid}, thunkAPI) => {
        // Assuming hackathonId is already available in the state
        try {
            const response = await axios.post(
                `http://localhost:8080/Team/rejected/${teamId}`
            );
            const response2 = await axios.get(
                `http://localhost:8080/panelist/${hackathonId}/${panelistid}`
            );
            return response2.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const acceptTeam = createAsyncThunk(
    "team/acceptTeam",
    async ({teamId, hackathonId, panelistid}, thunkAPI) => {
        // Assuming hackathonId is already available in the state
        try {
            const response = await axios.put(
                `http://localhost:8080/Team/selected/${teamId}`
            );
            const response2 = await axios.get(
                `http://localhost:8080/panelist/${hackathonId}/${panelistid}`
            );
            return response2.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const rateTeam = createAsyncThunk(
    "team/rateTeam",
    async ({ teamId, rating }, thunkAPI) => {
        // Assuming hackathonId is already available in the state
        try {
            const response = await axios.post(
                `http://localhost:8080/Judge/review/${teamId}`,
                { rating }
            );
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
    extraReducers: (builder) => {
        builder
            .addCase(teamRegistration.pending, (state) => {
                state.registration.loading = true;
                state.registration.error = null;
            })
            .addCase(teamRegistration.fulfilled, (state, action) => {
                state.registration.loading = false;
                state.registration.data = action.payload.a; // Extract data from the response
                state.teamdetails.data = action.payload.b
                state.registration.error = null;
            })
            .addCase(teamRegistration.rejected, (state, action) => {
                state.registration.loading = false;
                state.registration.data = null;
                state.registration.error = action.payload; // Set error payload
            })
            .addCase(ideaSubmission.pending, (state) => {
                state.idea.loading = true;
                state.idea.error = null;
            })
            .addCase(ideaSubmission.fulfilled, (state, action) => {
                state.idea.loading = false;
                state.idea.data = action.payload.a; // Extract data from the response
                state.teamdetails.data = action.payload.b
                state.idea.error = null;
            })
            .addCase(ideaSubmission.rejected, (state, action) => {
                state.idea.loading = false;
                state.idea.data = null;
                state.idea.error = action.payload; // Set error payload
            })
            .addCase(repoSubmission.pending, (state) => {
                state.repo.loading = true;
                state.repo.error = null;
            })
            .addCase(repoSubmission.fulfilled, (state, action) => {
                state.repo.loading = false;
                state.repo.data = action.payload.a; // Extract data from the response
                state.teamdetails.data = action.payload.b
                state.repo.error = null;
            })
            .addCase(repoSubmission.rejected, (state, action) => {
                state.repo.loading = false;
                state.repo.data = null;
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
                state.teamdetails.data = null;
                state.teamdetails.error = action.payload; // Set error payload
            })
            .addCase(fetchJudgeTeamsByHackathonId.pending, (state) => {
                state.judgeteams.loading = true;
                state.judgeteams.error = null;
            })
            .addCase(
                fetchJudgeTeamsByHackathonId.fulfilled,
                (state, action) => {
                    state.judgeteams.loading = false;
                    state.judgeteams.data = action.payload;
                    state.judgeteams.error = null;
                }
            )
            .addCase(fetchJudgeTeamsByHackathonId.rejected, (state, action) => {
                state.judgeteams.loading = false;
                state.judgeteams.data = null;
                state.judgeteams.error = action.payload;
            })
            .addCase(fetchPanelistTeamsByHackathonId.pending, (state) => {
                state.panelistteams.loading = true;
                state.panelistteams.error = null;
            })
            .addCase(
                fetchPanelistTeamsByHackathonId.fulfilled,
                (state, action) => {
                    state.panelistteams.loading = false;
                    state.panelistteams.data = action.payload;
                    state.panelistteams.error = null;
                }
            )
            .addCase(
                fetchPanelistTeamsByHackathonId.rejected,
                (state, action) => {
                    state.panelistteams.loading = false;
                    state.panelistteams.data = null;
                    state.panelistteams.error = action.payload;
                }
            )

            .addCase(acceptTeam.pending, (state) => {
                state.panelistteams.loading = true;
                state.panelistteams.error = null;
            })
            .addCase(acceptTeam.fulfilled, (state, action) => {
                state.panelistteams.loading = false;
                state.panelistteams.data = action.payload;
                // state.panelistteams.data = action.payload;
                state.panelistteams.error = null;
            })
            .addCase(acceptTeam.rejected, (state, action) => {
                state.panelistteams.loading = false;
                state.panelistteams.data = null;
                state.panelistteams.error = action.payload;
            })
            .addCase(rejectTeam.pending, (state) => {
                state.panelistteams.loading = true;
                state.panelistteams.error = null;
            })
            .addCase(rejectTeam.fulfilled, (state, action) => {
                state.panelistteams.loading = false;
                state.panelistteams.data = action.payload;
                state.panelistteams.error = null;
            })
            .addCase(rejectTeam.rejected, (state, action) => {
                state.panelistteams.loading = false;
                state.panelistteams.data = null;
                state.panelistteams.error = action.payload;
            })
            .addCase(rateTeam.pending, (state) => {
                state.judgeteams.loading = true;
                state.judgeteams.error = null;
            })
            .addCase(rateTeam.fulfilled, (state, action) => {
                state.judgeteams.loading = false;
                // state.judgeteams.data= action.payload;
                state.judgeteams.error = null;
            })
            .addCase(rateTeam.rejected, (state, action) => {
                state.judgeteams.loading = false;
                state.judgeteams.data = null;
                state.judgeteams.error = action.payload;
            });
    },
});

export default teamSlice.reducer;
