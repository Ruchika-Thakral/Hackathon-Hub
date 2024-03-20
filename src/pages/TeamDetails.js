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
import { useDispatch ,useSelector} from "react-redux";
import { fetchTeamDetails } from "../features/team/teamSlice";

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
    // const [ideaData, setIdeaData] = useState({});
    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setIdeaData((prevstate) => ({ ...prevstate, [name]: value }));
    // };

    // const handleSubmit = () => {
    //     console.log(ideaData);
    //     // dispatch(hackathonCreation(ideaData));
    // };
    const data=useSelector(state=>state.user.login.data)
    const userId=data?data.data.userId:null
    // const teamData=useSelector(state=>state.team.teamdetails.data)
    // const teamDatas=teamData?teamData[0]:[]

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchTeamDetails(userId))
    },[dispatch])

 
    
    return (
        <BaseLayout>
            <div className="container my-2 mx-auto py-4 px-2 flex justify-center">
                <div className="w-full">
                    {/* <Typography
                        variant="h3"
                        className="mb-3 text-incedo-secondary-600"
                    >
                        Team Name : {teamDatas.name}
                    </Typography> */}
                    <TeamMembers />
                    <IdeaDetails />
                    {/* <Card className="w-full mb-4">
                        <CardHeader floated={false} shadow={false}>
                            <Typography variant="h4">Team Members</Typography>
                        </CardHeader>
                        <CardBody className="p-4 py-2">
                            <List className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {TEAM_MEMBERS.map((member) => {
                                    return (
                                        <ListItem>
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
                        </CardBody>
                    </Card> */}
                    {/* <Card className="w-full">
                        <CardHeader floated={false} shadow={false}>
                            <Typography variant="h4">Idea</Typography>
                        </CardHeader>
                        <CardBody className="w-full lg:w-2/3">
                            <Input
                                label="Idea Title*"
                                value={ideaData?.ideaTitle || ""}
                                name="ideaTitle"
                                onChange={handleChange}
                            />
                            <div className="relative mt-3 flex w-full">
                                <Menu placement="bottom-start">
                                    <MenuHandler>
                                        <Button
                                            ripple={false}
                                            variant="text"
                                            color="blue-gray"
                                            className="relative flex h-10 w-full justify-between gap-2 border border-blue-gray-200 bg-blue-gray-500/10 pl-3 pr-2"
                                        >
                                            {ideaData?.ideaDomain ||
                                                "Idea Domain*"}
                                            <ChevronDownIcon className="absolute w-4 h-4 right-2" />
                                        </Button>
                                    </MenuHandler>
                                    <MenuList className="max-h-[20rem] max-w-[18rem]">
                                        {DOMAINS.map((domain, index) => {
                                            return (
                                                <MenuItem
                                                    key={index}
                                                    value={domain.name}
                                                    className="flex items-center gap-2"
                                                    onClick={
                                                        () =>
                                                            // setSelectedTheme(
                                                            //     themes[index]
                                                            // )
                                                            setIdeaData({
                                                                ...ideaData,
                                                                ideaDomain:
                                                                    DOMAINS[
                                                                        index
                                                                    ].name,
                                                            })
                                                        // console.log(domain.name)
                                                    }
                                                >
                                                    {domain.name}
                                                </MenuItem>
                                            );
                                        })}
                                    </MenuList>
                                </Menu>
                            </div>

                            <div className="mt-3">
                                <Textarea
                                    label="Idea Description*"
                                    name="ideaBody"
                                    value={ideaData?.ideaBody || ""}
                                    onChange={handleChange}
                                />
                            </div>
                            {true ? (
                                <div>
                                    <div className="mt-3">
                                        <Input
                                            label="Repository Link"
                                            value={ideaData?.ideaRepo || ""}
                                            name="ideaRepo"
                                            onChange={handleChange}
                                            icon={
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    strokeWidth={2}
                                                    // className="h-4 w-4"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                                                    />
                                                </svg>
                                            }
                                        />
                                    </div>
                                    <div className="mt-3">
                                        <Input
                                            label="Drive Link"
                                            value={ideaData?.ideaFiles || ""}
                                            name="ideaFiles"
                                            onChange={handleChange}
                                            icon={
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    strokeWidth={2}
                                                    // className="h-4 w-4"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                                                    />
                                                </svg>
                                            }
                                        />
                                    </div>
                                </div>
                            ) : null}
                            <div className="flex w-full justify-between mt-3 py-1.5">
                                <IconButton
                                variant="text"
                                color="blue-gray"
                                size="sm"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    className="h-4 w-4"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                                    />
                                </svg>
                            </IconButton>
                                <div className="flex gap-2 justify-center md:justify-end w-full">
                                    <Button size="sm" className="rounded-md">
                                        Submit Idea
                                    </Button>
                                </div>
                            </div>
                        </CardBody>
                    </Card> */}
                </div>
            </div>
        </BaseLayout>
    );
};

export default TeamDetails;
