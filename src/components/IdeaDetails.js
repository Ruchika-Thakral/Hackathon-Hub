import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
    // List,
    // ListItem,
    // ListItemPrefix,
    // Avatar,
    Card,
    Typography,
    CardHeader,
    CardBody,
    Input,
    Textarea,
    // IconButton,
    Button,
} from "@material-tailwind/react";

import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
} from "@material-tailwind/react";

import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { ideaSubmission } from "../features/team/teamSlice";
import { repoSubmission } from "../features/team/teamSlice";
import { TEAMS, USER } from "../constants";

const DOMAINS = [
    { name: "Data and AI", value: "data" },
    { name: "Ops Transformation", value: "operations" },
    { name: "Cloud and Digital", value: "cloud" },
    { name: "Experience Design", value: "ux" },
];

const IdeaDetails = () => {
    const dispatch = useDispatch();
    const data = USER
    // useSelector((state) => state.user.login.data);
    const hackathonId = data ? data.assignedHackathon : null;
    const userId = data ? data.userId : null;

    // const teamData=useSelector(state=>state.team.teamdetails.data)
    const data2 = TEAMS
    // useSelector((state) => state.team.teamdetails.data);

    const [teamData, setTeamData] = useState({});
    useEffect(() => {
        setTeamData(data2);
    }, [data2]);

    const status = teamData.length > 0 ? teamData[0].status : null;

    const [repoData, setRepoData] = useState({});
    const [ideaData, setIdeaData] = useState({});
    const [isShortlisted, setIsShortlisted] = useState(false);
    // const [didSubmit, setDidSubmit] = useState(false)
    useEffect(() => {
        if (status === "selected") {
            setIsShortlisted(true); // Set isShortlisted to true when status is 'selected'
        }
    }, [status]);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setIdeaData((prevstate) => ({ ...prevstate, [name]: value }));
    };

    const handleSubmit = () => {
        console.log(ideaData);
        dispatch(ideaSubmission({ hackathonId, userId, ideaData }));
        // setDidSubmit(true)
    };

    const handleRepoChange = (e) => {
        const { name, value } = e.target;
        setRepoData((prevstate) => ({ ...prevstate, [name]: value }));
    };

    const handleRepoSubmit = () => {
        console.log(repoData);
        dispatch(repoSubmission({ hackathonId, userId, repoData }));
        // setDidSubmit(true)
    };

    return (
        <Card className="w-full">
            <CardHeader floated={false} shadow={false}>
                <Typography variant="h4">Idea</Typography>
            </CardHeader>
            <CardBody className="w-full lg:w-2/3">
                <Input
                    disabled={isShortlisted}
                    label="Idea Title*"
                    value={ideaData?.ideaTitle || ""}
                    name="ideaTitle"
                    onChange={handleChange}
                />
                <div className="relative mt-3 flex w-full">
                    <Menu placement="bottom-start">
                        <MenuHandler>
                            <Button
                                disabled={isShortlisted}
                                ripple={false}
                                variant="text"
                                color="blue-gray"
                                className="relative flex h-10 w-full justify-between gap-2 border border-blue-gray-200 bg-blue-gray-500/10 pl-3 pr-2"
                            >
                                {ideaData?.ideaDomain || "Idea Domain*"}
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
                                                        DOMAINS[index].name,
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
                        disabled={isShortlisted}
                        label="Idea Description*"
                        name="ideaBody"
                        value={ideaData?.ideaBody || ""}
                        onChange={handleChange}
                    />
                </div>
                {!isShortlisted && (
                    <div className="flex w-full justify-between mt-3 py-1.5">
                        <div className="flex gap-2 justify-center md:justify-end w-full">
                            <Button
                                size="sm"
                                className="rounded-md"
                                onClick={handleSubmit}
                            >
                                Submit Idea
                            </Button>
                        </div>
                    </div>
                )}
                {isShortlisted && (
                    <div>
                        <div className="mt-3">
                            <Input
                                label="Repository Link"
                                value={repoData?.ideaRepo || ""}
                                // disabled={didSubmit}
                                name="ideaRepo"
                                onChange={handleRepoChange}
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
                                // disabled={didSubmit}
                                value={repoData?.ideaFiles || ""}
                                name="ideaFiles"
                                onChange={handleRepoChange}
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
                        <div className="flex w-full justify-between mt-3 py-1.5">
                            {/* <IconButton
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
                            </IconButton> */}
                            <div className="flex gap-2 justify-center md:justify-end w-full">
                                <Button
                                    size="sm"
                                    className="rounded-md"
                                    onClick={handleRepoSubmit}
                                >
                                    Submit Implementation
                                </Button>
                            </div>
                        </div>
                    </div>
                )}
            </CardBody>
        </Card>
    );
};

export default IdeaDetails;
