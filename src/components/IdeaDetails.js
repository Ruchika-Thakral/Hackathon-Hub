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
import {
    fetchTeamDetails,
    ideaSubmission,
    selectTeams,
} from "../features/team/teamSlice";
import { repoSubmission } from "../features/team/teamSlice";
import { TEAMS, USER } from "../constants";
import { selectUserDetails, selectUserId } from "../features/user/userSlice";
import { toast } from "react-toastify";

const DOMAINS = [
    { name: "Data and AI", value: "data" },
    { name: "Ops Transformation", value: "operations" },
    { name: "Cloud and Digital", value: "cloud" },
    { name: "Experience Design", value: "ux" },
];

const IdeaDetails = () => {
    const dispatch = useDispatch();
    const userData = useSelector(selectUserDetails);
    // useSelector((state) => state.user.login.data);
    const hackathonId = userData?.assignedHackathon || null;
    const userId = userData?.userId || null;

    // const teamData=useSelector(state=>state.team.teamdetails.data)
    const teamsData = useSelector(selectTeams);
    // const userData = useSelector(selectUserDetails);
    // TEAMS
    // useSelector((state) => state.team.teamdetails.data);

    const [teamDetails, setTeamDetails] = useState({});
    useEffect(() => {
        if (userData && teamsData.length > 0) {
            setTeamDetails(
                teamsData.find(
                    (team) => team.hackathonId === userData?.assignedHackathon
                )
            );
        }
    }, [teamsData, userData]);
    console.log(teamDetails);
    // const status = teamDetails.length > 0 ? teamDetails[0].status : null;

    const [repoData, setRepoData] = useState({});
    const [ideaData, setIdeaData] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isShortlisted, setIsShortlisted] = useState(false);
    const [isImplemented, setIsImplemented] = useState(false);
    const [isRejected, setIsRejected] = useState(false);
    // const [didSubmit, setDidSubmit] = useState(false)
    useEffect(() => {
        if (teamDetails?.status === "submitted") {
            setIsSubmitted(true); // Set isSubmitted to true when status is 'selected'
            setIdeaData({
                ...ideaData,
                ideaTitle: teamDetails.ideaTitle,
                ideaDomain: teamDetails.ideaDomain,
            });
        }
        if (teamDetails?.status === "selected") {
            setIsShortlisted(true); // Set isSubmitted to true when status is 'selected'
            setIdeaData({
                ...ideaData,
                ideaTitle: teamDetails.ideaTitle,
                ideaDomain: teamDetails.ideaDomain,
            });
        }
        if (teamDetails?.status === "implemented") {
            setIsImplemented(true); // Set isSubmitted to true when status is 'selected'
            setIdeaData({
                ...ideaData,
                ideaTitle: teamDetails.ideaTitle,
                ideaDomain: teamDetails.ideaDomain,
                // ideaFiles: teamDetails.ideaFiles,
                // ideaRepo: ideaData.ideaRepo,
            });

            setRepoData({
                ...repoData,
                ideaFiles: teamDetails.ideaFiles,
                ideaRepo: teamDetails.ideaRepo,
            });
        }

        if (teamDetails?.status === "rejected") {
            setIsRejected(true);
            setIdeaData({
                ...ideaData,
                ideaTitle: teamDetails.ideaTitle,
                ideaDomain: teamDetails.ideaDomain,
            });
        }
    }, [teamDetails]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setIdeaData((prevstate) => ({ ...prevstate, [name]: value }));
    };

    const [validationIdeaErrors, setValidationIdeaErrors] = useState({});

    const handleSubmit = async () => {
        const newErrors = {};
        if (!ideaData.ideaTitle) {
            newErrors.ideaTitle = "Idea Title is Required!";
        }
        if (ideaData.ideaTitle && ideaData.ideaTitle.length > 255) {
            newErrors.ideaTitle =
                "Idea Title Should Not Contain More Than 255 Characters";
        }
        if (!ideaData.ideaDomain) {
            newErrors.ideaDomain = "Theme Is Required";
        }
        if (!ideaData.ideaBody) {
            newErrors.ideaBody = "Idea Description Is Required";
        }
        if (ideaData.ideaBody && ideaData.ideaBody.length > 3000) {
            newErrors.ideaBody =
                "Idea Title Should Not Contain More Than 3000 Characters";
        }
        if (Object.keys(newErrors).length > 0) {
            setValidationIdeaErrors(newErrors);
        } else {
            try {
                console.log(ideaData);
                await dispatch(
                    ideaSubmission({ hackathonId, userId, ideaData })
                ).unwrap();
                // setIsSubmitted(true);
                toast.success("Idea submitted successfully!");
                await dispatch(fetchTeamDetails(userData.userId)).unwrap();
                // toast.success("Fetched Teams");
                console.log(teamsData);
                console.log(teamsData);
            } catch (error) {
                toast.error(`Error: ${error?.message}`);
            }
        }
        setValidationIdeaErrors(newErrors);
        // setDidSubmit(true)
    };

    const handleRepoChange = (e) => {
        const { name, value } = e.target;
        setRepoData((prevstate) => ({ ...prevstate, [name]: value }));
    };

    const [validationRepoErrors, setValidationRepoErrors] = useState({});

    const handleRepoSubmit = async () => {
        const newErrors = {};
        if (!repoData.ideaRepo) {
            newErrors.ideaRepo = "Repository Link is Required!";
        }
        if (repoData.ideaRepo && repoData.ideaRepo.length > 255) {
            newErrors.ideaRepo =
                "Repository Link Should Not Contain More Than 255 Characters";
        }
        if (!repoData.ideaFiles) {
            newErrors.ideaFiles = "Drive Link Is Required";
        }
        if (repoData.ideaFiles && repoData.ideaFiles.length > 255) {
            newErrors.ideaBody =
                "Drive Link Should Not Contain More Than 255 Characters";
        }
        if (Object.keys(newErrors).length > 0) {
            setValidationRepoErrors(newErrors);
        } else {
            try {
                console.log(repoData);
                await dispatch(
                    repoSubmission({ hackathonId, userId, repoData })
                ).unwrap();
                // setIsImplemented(true);
                toast.success("Idea submitted successfully!");
                await dispatch(fetchTeamDetails(userData.userId)).unwrap();
            } catch (error) {
                toast.error(`Error: ${error?.message}`);
            }
        }
        setValidationRepoErrors(newErrors);
        // setDidSubmit(true)
    };

    return (
        <Card className="w-full">
            <CardHeader floated={false} shadow={false}>
                <Typography variant="h4">Idea</Typography>
            </CardHeader>
            <CardBody className="w-full lg:w-2/3">
                <Input
                    disabled={
                        isSubmitted ||
                        isShortlisted ||
                        isRejected ||
                        isImplemented
                    }
                    label="Idea Title*"
                    value={ideaData?.ideaTitle || ""}
                    name="ideaTitle"
                    onChange={handleChange}
                />
                {validationIdeaErrors.ideaTitle && (
                    <Typography className="text-red-500 text-xs w-fit">
                        {validationIdeaErrors.ideaTitle}
                    </Typography>
                )}
                <div className="relative mt-3 flex w-full">
                    <Menu placement="bottom-start">
                        <MenuHandler>
                            <Button
                                disabled={
                                    isSubmitted ||
                                    isShortlisted ||
                                    isRejected ||
                                    isImplemented
                                }
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
                    {validationIdeaErrors.ideaDomain && (
                        <Typography className="text-red-500 text-xs w-fit">
                            {validationIdeaErrors.ideaDomain}
                        </Typography>
                    )}
                </div>

                <div className="mt-3">
                    <Textarea
                        disabled={
                            isSubmitted ||
                            isShortlisted ||
                            isRejected ||
                            isImplemented
                        }
                        label="Idea Description*"
                        name="ideaBody"
                        value={ideaData?.ideaBody || ""}
                        onChange={handleChange}
                    />
                    {validationIdeaErrors.ideaBody && (
                        <Typography className="text-red-500 text-xs w-fit">
                            {validationIdeaErrors.ideaBody}
                        </Typography>
                    )}
                </div>
                {!isSubmitted &&
                    !isRejected &&
                    !isImplemented &&
                    !isShortlisted && (
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
                {(isShortlisted || isImplemented) && (
                    <div>
                        <div className="mt-3">
                            <Input
                                label="Repository Link"
                                value={repoData?.ideaRepo || ""}
                                disabled={isImplemented}
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

                        {validationRepoErrors.ideaRepo && (
                            <Typography className="text-red-500 text-xs w-fit">
                                {validationRepoErrors.ideaRepo}
                            </Typography>
                        )}
                        <div className="mt-3">
                            <Input
                                label="Drive Link"
                                disabled={isImplemented}
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

                        {validationRepoErrors.ideaFiles && (
                            <Typography className="text-red-500 text-xs w-fit">
                                {validationRepoErrors.ideaFiles}
                            </Typography>
                        )}
                        {!isImplemented && (
                            <div className="flex w-full justify-between mt-3 py-1.5">
                                <div className="flex gap-2 justify-center md:justify-end w-full">
                                    <Button
                                        size="sm"
                                        className="rounded-md"
                                        disabled={isImplemented}
                                        onClick={handleRepoSubmit}
                                    >
                                        Submit Implementation
                                    </Button>
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </CardBody>
        </Card>
    );
};

export default IdeaDetails;
