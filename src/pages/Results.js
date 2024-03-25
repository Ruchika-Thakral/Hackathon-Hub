import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./Results.css";
import { useSelector } from "react-redux";
import { Alert, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import BaseLayout from "../components/BaseLayout";
import { HACKATHONS } from "../constants";

const Results = () => {
    let { hackathonId } = useParams();

    const data = useSelector((state) => state.hackathon.hackathons.data) || [];
    const [hackathons, setHackathons] = useState(
        HACKATHONS
        // data
        );

    // useEffect(() => {
    //     setHackathons(data);
    // }, []);

    const hackathon =
        hackathons?.find((hack) => hack.hackathonId === Number(hackathonId)) ||
        null;

    const data2 = useSelector((state) => state.team.teamdetails.data) || [];
    // const teamdetails=data.length>0?data[0].teamUserDetailsDTOs:[]
    const [teams, setTeams] = useState(data2);

    useEffect(() => {
        if (data2.length > 0) {
            setTeams(data2);
        }
    }, [data2]);

    const [teamDetails, setTeamDetails] = useState(
        teams.find((team) => team.hackathonId === Number(hackathonId))
    );

    useEffect(() => {
        if (teams.length > 0) {
            setTeamDetails(
                teams.find((team) => team.hackathonId === Number(hackathonId))
            );
        }
    }, [teams]);

    return (
        <BaseLayout>
            <div className="py-6">
                {!hackathon || !hackathon.isCompleted ? (
                    <div className="w-fit mx-auto justify-self-center">
                        <Alert
                            variant="ghost"
                            className="flex justify-center items-center"
                        >
                            <Typography className="w-full justify-center flex">
                                Hackathon is not finished or doesn't exist.
                            </Typography>
                        </Alert>
                    </div>
                ) : (
                    <div
                        className="container results flex flex-col m-0 justify-between rounded-3xl
      md:shadow-2xl md:w-3/5 md:flex-row md:mx-auto"
                    >
                        <div
                            className="flex flex-col h-3/4 items-center space-y-9 bg-gradient-to-b
     from-lightSlateBlue to-lightRoyalBlue rounded-b-3xl py-9 md:py-12 md:space-y-12 
     md:rounded-3xl md:w-1/2"
                        >
                            <p className="text-md text-lightLavender text-2xl font-bold">
                                Your Result
                            </p>
                            <div
                                className="flex flex-col  px-9 py-7 rounded-full
       items-center justify-between bg-gradient-to-b from-violetBlue to-persianBlue"
                            >
                                <h1 className="text-white text-7xl font-bold">
                                    {teamDetails?.conslidatedRating || "NA"}
                                </h1>
                                <p className="text-lg text-lightLavender font-bold">
                                    of 5
                                </p>
                            </div>
                            <div
                                className="flex flex-col items-center justify-between text-center
        w-3/4 space-y-2 md:w-3/5"
                            >
                                <h3 className="text-3xl text-white font-bold">
                                    {teamDetails ? "Great" : ""}
                                </h3>
                                <p className=" text-lightLavender text-lg font-bold">
                                    {teamDetails
                                        ? "You scored well amongst the people who have taken these tests."
                                        : "You didn't participate in this hackathon"}
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col h-3/4 items-start p-7 md:w-1/2 space-y-7">
                            <h4 className="text-xl text-darkGrayBlue font-bold">
                                {hackathon?.name} Top Scorers
                            </h4>
                            <div className="container flex flex-col space-y-5 md:space-y-5">
                                <div className="result-element bg-lightRed p-3 rounded-md bg-opacity-20">
                                    <div className="flex flex-row justify-between">
                                        <div className="flex flex-row space-x-2">
                                            {/* <img src="" alt="reaction-icon" /> */}
                                            <p className="text-lightRed">
                                                {hackathon?.firstTeamId || "NA"}
                                                {/* Team 1 */}
                                            </p>
                                        </div>
                                        {/* <div className="flex flex-row space-x-1">
                                    <p className="font-bold text-darkGrayBlue">
                                        4.9
                                    </p>
                                    <p className="text-gray-500 font-semibold">
                                        /
                                    </p>
                                    <p className="text-gray-500 font-semibold">
                                        5
                                    </p>
                                </div> */}
                                    </div>
                                </div>
                                <div className="result-element bg-orangeyYellow p-3 rounded-md bg-opacity-20">
                                    <div className="flex flex-row justify-between">
                                        <div className="flex flex-row space-x-2">
                                            {/* <img src="" alt="reaction-icon" /> */}
                                            <p className="text-orangeyYellow">
                                                {hackathon?.secondTeamId ||
                                                    "NA"}
                                                {/* Team 2 */}
                                            </p>
                                        </div>
                                        {/* <div className="flex flex-row space-x-1">
                                    <p className="font-bold text-darkGrayBlue">
                                        4.7
                                    </p>
                                    <p className="text-gray-500 font-semibold">
                                        /
                                    </p>
                                    <p className="text-gray-500 font-semibold">
                                        5
                                    </p>
                                </div> */}
                                    </div>
                                </div>
                                <div className="result-element bg-greenTeal p-3 rounded-md bg-opacity-20">
                                    <div className="flex flex-row justify-between">
                                        <div className="flex flex-row space-x-2">
                                            {/* <img src="" alt="reaction-icon" /> */}
                                            <p className="text-greenTeal">
                                                {hackathon?.secondTeamId ||
                                                    "NA"}
                                                {/* Team 3 */}
                                            </p>
                                        </div>
                                        {/* <div className="flex flex-row space-x-1">
                                    <p className="font-bold text-darkGrayBlue">
                                        4.5
                                    </p>
                                    <p className="text-gray-500 font-semibold">
                                        /
                                    </p>
                                    <p className="text-gray-500 font-semibold">
                                        5
                                    </p>
                                </div> */}
                                    </div>
                                </div>
                                {/* <div className="result-element bg-cobaltBlue p-3 rounded-md bg-opacity-20">
                            <div className="flex flex-row justify-between">
                                <div className="flex flex-row space-x-2">
                                    {/* <img src="" alt="reaction-icon" /> */}
                                {/* <p className="text-cobaltBlue"></p>
                                </div>
                                <div className="flex flex-row space-x-1">
                                    <p className="font-bold text-darkGrayBlue"></p>
                                    <p className="text-gray-500 font-semibold">/</p>
                                    <p className="text-gray-500 font-semibold">
                                        100
                                    </p>
                                </div>
                            </div>
                        </div> */}
                            </div>
                            <Link
                                to="/"
                                className="container p-4
       bg-darkGrayBlue rounded-full text-lg font-bold text-white
       hover:bg-gradient-to-b from-lightSlateBlue to-lightRoyalBlue"
                            >
                                <button
                                    className="w-full"
                                    //                         className="container p-4
                                    //    bg-darkGrayBlue rounded-full text-lg font-bold text-white
                                    //    hover:bg-gradient-to-b from-lightSlateBlue to-lightRoyalBlue"
                                >
                                    Close
                                </button>
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </BaseLayout>
    );
};

export default Results;
