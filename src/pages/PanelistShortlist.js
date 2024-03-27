import ShortlistDetails from "../components/ShortlistDetails";
import { USER, HACKATHONS, TEAMS } from "../constants";
import React, { useEffect, useState } from "react";
// import VerticalBar from "../components/VerticalBar";
import HackathonDetails from "../components/HackathonDetails";
import BaseLayout from "../components/BaseLayout";
import SearchFilter from "../components/SearchFilter";
import {
    Alert,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    List,
    ListItem,
    Typography,
} from "@material-tailwind/react";

import { useSearchParams } from "react-router-dom";

import { IconButton, ButtonGroup } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";

import {
    fetchPanelistTeamsByHackathonId,
    selectTeams,
} from "../features/team/teamSlice";
import {
    fetchHackathons,
    selectHackathons,
} from "../features/hackathon/hackathonSlice";
import { selectUserDetails } from "../features/user/userSlice";

const themes = [
    { name: "Life Sciences", value: "lifesciences" },
    { name: "Banking and Wealth", value: "banking" },
    { name: "Telecom", value: "telecom" },
    { name: "Product Engineering", value: "product" },
];

const PanelistShortlist = () => {
    const dispatch = useDispatch();

    const teamsData = useSelector(selectTeams);
    const [ideas, setIdeas] = useState([]);
    // useSelector((state) => state.team.judgeteams.data?.data) || [];

    useEffect(() => {
        setIdeas(teamsData);
    }, [teamsData]);

    // const IDEAS = TEAMS;
    // useSelector((state) => state.team.panelistteams.data?.data) || [];

    // const user = USER;
    const userData = useSelector(selectUserDetails);
    // useSelector((state) => state.user.login?.data?.data);
    // console.log(USER);
    // useEffect(() => {
    //     dispatch(fetchHackathons());
    // }, [dispatch]);

    const hackathons = useSelector(selectHackathons);
    // HACKATHONS;
    // useSelector((state) => state.hackathon.hackathons.data) || [];
    // console.log(hackathons);

    // const [filteredHackathons, setFilteredHackathons] =
    //     React.useState(hackathons);

    const [selectedHackathonId, setSelectedHackathonId] = React.useState(null);

    const [selectedIdeaId, setSelectedIdeaId] = React.useState(
        null
        // ideas[0]?.teamId
    );
    // console.log(ideas[0]);

    useEffect(() => {
        if (userData) {
            setSelectedHackathonId(userData?.assignedHackathon);
        }
    }, [hackathons]);

    useEffect(() => {
        if (ideas.length > 0) {
            setSelectedIdeaId(ideas[0].teamId);
        }
    }, [ideas]);

    const [activePage, setActivePage] = React.useState(1);

    const getPaginationItemProps = (index) => ({
        className: activePage === index ? "bg-gray-300 text-gray-900" : "",
        onClick: () => setActivePage(index),
    });

    const nextPage = () => {
        if (activePage === 5) return;

        setActivePage(activePage + 1);
    };

    const prevPage = () => {
        if (activePage === 1) return;

        setActivePage(activePage - 1);
    };

    useEffect(() => {
        if (userData) {
            dispatch(
                fetchPanelistTeamsByHackathonId({
                    hackathonId: userData.assignedHackathon,
                    panelistid: userData.userId,
                })
            );
        }
    }, [userData]);

    return (
        <BaseLayout>
            <div className="py-4 px-4 md:px-8 justify-center">
                {/* <SearchFilter /> */}
                {!userData || userData?.available ? (
                    <div className="w-fit mx-auto justify-self-center">
                        <Alert
                            variant="ghost"
                            className="flex justify-center items-center"
                        >
                            <Typography className="w-full justify-center flex">
                                No Assigned Hackathon
                            </Typography>
                        </Alert>
                    </div>
                ) : (
                    <div className="grid md:grid-cols-3 gap-x-4 gap-y-2">
                        <div className="col-span-3 md:col-span-1">
                            <Card shadow={false} className="md:h-[86vh]">
                                <CardHeader floated={false} shadow={false}>
                                    <Typography
                                        variant="h4"
                                        className="mb-2 px-2 font-semibold flex text-left justify-start"
                                    >
                                        Shortlist Ideas
                                        {/* <div className="ml-3 place-self-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            className="w-6 h-6 fill-green-400"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </div> */}
                                    </Typography>
                                </CardHeader>
                                <CardBody className="h-full py-2">
                                    <List>
                                        {ideas.length === 0 ? (
                                            <ListItem disabled={true}>
                                                No Ideas available.
                                            </ListItem>
                                        ) : null}
                                        {ideas.length > 8
                                            ? ideas.slice(7).map((idea) => {
                                                  //   console.log(idea.name);
                                                  return (
                                                      <ListItem
                                                          key={idea.teamId}
                                                          onClick={() => {
                                                              setSelectedIdeaId(
                                                                  idea.teamId
                                                              );
                                                          }}
                                                          className="flex justify-between"
                                                      >
                                                          {idea.ideaTitle}
                                                          <>
                                                              {idea.status ===
                                                              "submitted" ? null : idea.status ===
                                                                    "selected" ||
                                                                idea.status ===
                                                                    "implemented" ? (
                                                                  <svg
                                                                      xmlns="http://www.w3.org/2000/svg"
                                                                      viewBox="0 0 24 24"
                                                                      fill="currentColor"
                                                                      className="w-6 h-6 fill-green-400"
                                                                  >
                                                                      <path
                                                                          fillRule="evenodd"
                                                                          d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                                                                          clipRule="evenodd"
                                                                      />
                                                                  </svg>
                                                              ) : idea.status ===
                                                                "rejected" ? (
                                                                  <svg
                                                                      xmlns="http://www.w3.org/2000/svg"
                                                                      viewBox="0 0 24 24"
                                                                      fill="currentColor"
                                                                      className="w-6 h-6 fill-red-700"
                                                                  >
                                                                      <path
                                                                          fillRule="evenodd"
                                                                          d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z"
                                                                          clipRule="evenodd"
                                                                      />
                                                                  </svg>
                                                              ) : null}
                                                          </>
                                                      </ListItem>
                                                  );
                                              })
                                            : ideas.map((idea) => {
                                                  //   console.log(hackathon.name);
                                                  return (
                                                      <ListItem
                                                          selected={
                                                              selectedIdeaId ===
                                                              idea.teamId
                                                          }
                                                          key={idea.teamId}
                                                          onClick={() => {
                                                              setSelectedIdeaId(
                                                                  idea.teamId
                                                              );
                                                          }}
                                                          className="border border-gray-200 flex justify-between"
                                                      >
                                                          {idea.ideaTitle}
                                                          <>
                                                              {idea.status ===
                                                              "submitted" ? null : idea.status ===
                                                                "selected" ? (
                                                                  <svg
                                                                      xmlns="http://www.w3.org/2000/svg"
                                                                      viewBox="0 0 24 24"
                                                                      fill="currentColor"
                                                                      className="w-6 h-6 fill-green-400"
                                                                  >
                                                                      <path
                                                                          fillRule="evenodd"
                                                                          d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                                                                          clipRule="evenodd"
                                                                      />
                                                                  </svg>
                                                              ) : idea.status ===
                                                                "rejected" ? (
                                                                  <svg
                                                                      xmlns="http://www.w3.org/2000/svg"
                                                                      viewBox="0 0 24 24"
                                                                      fill="currentColor"
                                                                      className="w-6 h-6 fill-red-700"
                                                                  >
                                                                      <path
                                                                          fillRule="evenodd"
                                                                          d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z"
                                                                          clipRule="evenodd"
                                                                      />
                                                                  </svg>
                                                              ) : null}
                                                          </>
                                                      </ListItem>
                                                  );
                                              })}
                                        {/* <ListItem>Hello</ListItem>
                                    <ListItem>Hello</ListItem>
                                    <ListItem>Hello</ListItem>
                                    <ListItem>Hello</ListItem>
                                    <ListItem>Hello</ListItem>
                                    <ListItem>Hello</ListItem>

                                    <ListItem>Hello</ListItem>
                                    <ListItem>Hello</ListItem> */}
                                    </List>
                                    {/* <VerticalBar /> */}
                                </CardBody>
                                <CardFooter className="flex items-baseline justify-center pt-2 pb-4">
                                    <ButtonGroup variant="outlined" size="sm">
                                        <IconButton onClick={prevPage}>
                                            <ArrowLeftIcon
                                                strokeWidth={2}
                                                className="h-4 w-4"
                                            />
                                        </IconButton>
                                        <IconButton
                                            {...getPaginationItemProps(1)}
                                        >
                                            1
                                        </IconButton>
                                        <IconButton
                                            {...getPaginationItemProps(2)}
                                        >
                                            2
                                        </IconButton>
                                        <IconButton
                                            {...getPaginationItemProps(3)}
                                        >
                                            3
                                        </IconButton>
                                        <IconButton
                                            {...getPaginationItemProps(4)}
                                        >
                                            4
                                        </IconButton>
                                        <IconButton
                                            {...getPaginationItemProps(5)}
                                        >
                                            5
                                        </IconButton>
                                        <IconButton onClick={nextPage}>
                                            <ArrowRightIcon
                                                strokeWidth={2}
                                                className="h-4 w-4"
                                            />
                                        </IconButton>
                                    </ButtonGroup>
                                </CardFooter>
                            </Card>
                            {/* <VerticalBar /> */}
                        </div>
                        <div className="col-span-3 md:col-span-2">
                            <ShortlistDetails
                                hackathons={hackathons}
                                selectedHackathonId={selectedHackathonId}
                                selectedIdeaId={selectedIdeaId}
                                IDEAS={ideas}
                            />
                        </div>
                    </div>
                )}
            </div>
        </BaseLayout>
    );
};

export default PanelistShortlist;
