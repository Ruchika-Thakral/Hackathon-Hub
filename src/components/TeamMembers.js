import React, { useState, useEffect } from "react";
import {
    List,
    ListItem,
    ListItemPrefix,
    Avatar,
    Card,
    Typography,
    CardHeader,
    CardBody,
    // Input,
    // Textarea,
    // IconButton,
    // Button,
} from "@material-tailwind/react";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchTeamDetails, selectTeams } from "../features/team/teamSlice";
import { TEAMS, USER } from "../constants";
import { selectUserDetails, selectUserId } from "../features/user/userSlice";

// import {
//     Menu,
//     MenuHandler,
//     MenuList,
//     MenuItem,
// } from "@material-tailwind/react";

// import { ChevronDownIcon } from "@heroicons/react/24/outline";

// const TEAM_MEMBERS = [
//     { name: "Rohith", email: "rohith@gmail.com" },
//     { name: "Bhavaneshwar", email: "bhuvaneshwar@gmail.com" },
//     { name: "Ankit", email: "ankitbahnja99@gmail.com" },
//     { name: "Ankit", email: "ankitbahnja99@gmail.com" },
// ];

const TeamMembers = () => {
    const dispatch = useDispatch();
    const teamsData = useSelector(selectTeams);
    // TEAMS
    // useSelector((state) => state.team.teamdetails.data) || [];
    // const teamdetails=data.length>0?data[0].teamUserDetailsDTOs:[]
    // const login = USER
    // useSelector((state) => state.user.login.data);
    const userData = useSelector(selectUserDetails);
    // login ? login?.userId : null;
    const [teamDetails, setTeamDetails] = useState(
        []
        // data.length > 0 ? data[0].teamUserDetailsDTOs : []
    );
    // useEffect(() => {
    //     // console.log("hi");
    //     dispatch(fetchTeamDetails(userId));
    // }, [dispatch]);

    useEffect(() => {
        if (userData && teamsData.length > 0) {
            setTeamDetails(
                teamsData.find(
                    (team) => team.hackathonId === userData?.assignedHackathon
                )?.teamUserDetailsDTOs
            );
        }
    }, [teamsData, userData]);

    return (
        <Card className="w-full mb-4">
            <CardHeader floated={false} shadow={false}>
                <Typography variant="h4">Team Members</Typography>
            </CardHeader>
            <CardBody className="p-4 py-2">
                {teamDetails.length === 0 ? (
                    <Typography variant="paragraph" color="gray">
                        No team members found.
                    </Typography>
                ) : (
                    <List className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {teamDetails.map((member) => {
                            return (
                                <ListItem key={member.userId}>
                                    <ListItemPrefix>
                                        <Avatar
                                            variant="circular"
                                            alt="candice"
                                            src="https://avatar.iran.liara.run/public"
                                        />
                                    </ListItemPrefix>
                                    <div>
                                        <Typography
                                            variant="h6"
                                            color="blue-gray"
                                        >
                                            {member.name}
                                        </Typography>
                                        <Typography
                                            variant="small"
                                            color="gray"
                                            className="font-normal"
                                        >
                                            {member.email}
                                        </Typography>
                                    </div>
                                </ListItem>
                            );
                        })}
                    </List>
                )}
            </CardBody>
        </Card>
    );
};

export default TeamMembers;
