import React, { useEffect, useState } from "react";
import {
    List,
    ListItem,
    ListItemPrefix,
    Avatar,
    Card,
    Typography,
    CardHeader,
    CardBody,
    Input,
    Textarea,
    IconButton,
    Button,
    Alert,
} from "@material-tailwind/react";

import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
} from "@material-tailwind/react";

import { ChevronDownIcon } from "@heroicons/react/24/outline";
import BaseLayout from "../components/BaseLayout";
import TeamMembers from "../components/TeamMembers";
import IdeaDetails from "../components/IdeaDetails";
import { useDispatch, useSelector } from "react-redux";
import { fetchTeamDetails } from "../features/team/teamSlice";
import { selectUserDetails } from "../features/user/userSlice";

// const DOMAINS = [
//     { name: "Data and AI", value: "data" },
//     { name: "Ops Transformation", value: "operations" },
//     { name: "Cloud and Digital", value: "cloud" },
//     { name: "Experience Design", value: "ux" },
// ];

// const TEAM_MEMBERS = [
//     { name: "Rohith", email: "rohith@gmail.com" },
//     { name: "Bhavaneshwar", email: "bhuvaneshwar@gmail.com" },
//     { name: "Ankit", email: "ankitbahnja99@gmail.com" },
//     { name: "Ankit", email: "ankitbahnja99@gmail.com" },
// ];

const TeamDetails = () => {

    const userData = useSelector(selectUserDetails);
    // const [ideaData, setIdeaData] = useState({});
    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setIdeaData((prevstate) => ({ ...prevstate, [name]: value }));
    // };

    // const handleSubmit = () => {
    //     console.log(ideaData);
    //     // dispatch(hackathonCreation(ideaData));
    // };
    // const data = useSelector((state) => state.user.login.data);
    // const userId = data ? data.data.userId : null;
    // const teamData=useSelector(state=>state.team.teamdetails.data)
    // const teamDatas=teamData?teamData[0]:[]

    // const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(fetchTeamDetails(userId));
    // }, [dispatch]);

    return (
        <BaseLayout>
            <div className="container my-2 mx-auto py-4 px-2 flex justify-center">
                {!userData || userData?.available ? (
                    <div className="w-fit mx-auto justify-self-center">
                        <Alert
                            variant="ghost"
                            className="flex justify-center items-center"
                        >
                            <Typography className="w-full justify-center flex">
                                No Registered Hackathon
                            </Typography>
                        </Alert>
                    </div>
                ) : (
                    <div className="w-full">
                        {/* <Typography
                        variant="h3"
                        className="mb-3 text-incedo-secondary-600"
                    >
                        Team Name : {teamDatas.name}
                    </Typography> */}
                        <TeamMembers />
                        <IdeaDetails />
                    </div>
                )}
            </div>
        </BaseLayout>
    );
};

export default TeamDetails;
