// import { Button } from '@material-tailwind/react';
import React, { useEffect } from "react";
import AdminEvaluators from "./pages/AdminEvaluators";
import AdminHackathons from "./pages/AdminHackathons";
// import AdminDashboard from './components/AdminDashboard';
import Results from "./pages/Results";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Hackathons from "./pages/Hackathons";
import { useDispatch, useSelector } from "react-redux";
import { fetchHackathons } from "./features/hackathon/hackathonSlice";
import { reattemptLogin } from "./features/user/userSlice";
import BaseLayout from "./components/BaseLayout";
import TeamDetails from "./pages/TeamDetails";
import PanelistShortlist from "./pages/PanelistShortlist";
import JudgeReview from "./pages/JudgeReview";
import { fetchTeamDetails } from "./features/team/teamSlice";
function App() {
    const dispatch = useDispatch();

    //change to this for redux integration
    const hackathons = useSelector((state) => state.hackathon.hackathons.data);

    useEffect(() => {
        dispatch(fetchHackathons());
    }, [dispatch]);

    useEffect(() => {
        dispatch(reattemptLogin());
    }, []);

    const data = useSelector((state) => state.user.login.data);
    const userId = data ? data.data.userId : null;
    useEffect(() => {
        dispatch(fetchTeamDetails(userId));
    }, [dispatch]);


    const [reviewedIdeas, setReviewedIdeas] = useState([]);

    return (
            <div className="App">
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />} />

                        <Route path="hackathons" element={<Hackathons />} />
                        <Route
                            path="admin/hackathons"
                            element={<AdminHackathons />}
                        />
                        <Route
                            path="admin/evaluators"
                            element={<AdminEvaluators />}
                        />
                        <Route
                            path="results/:hackathonId"
                            element={
                                    <Results />
                            }
                        />
                        <Route path="teamdetails" element={<TeamDetails />} />
                        <Route
                            path="panelist/shortlist"
                            element={<PanelistShortlist />}
                        />
                        <Route
                            path="judge/review"
                            element={
                                <JudgeReview
                                    reviewedIdeas={reviewedIdeas}
                                    setReviewedIdeas={setReviewedIdeas}
                                />
                            }
                        />
                        {/* <Route
                            path="trial"
                            element={<YourComponent arr={arr} />}
                        /> */}
                    </Routes>
                </BrowserRouter>
            </div>
    );
}

export default App;
