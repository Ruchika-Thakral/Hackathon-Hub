import React, { useEffect, useState } from "react";
import {
    Button,
    Card,
    CardBody,
    Timeline,
    TimelineBody,
    TimelineConnector,
    TimelineHeader,
    TimelineIcon,
    TimelineItem,
    Typography,
} from "@material-tailwind/react";
import TeamRegistration from "./TeamRegistration";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { USER } from "../constants";
import { selectUserDetails } from "../features/user/userSlice";
const HackathonDetails = ({ hackathons, selectedHackathonId }) => {
    // const { details } = useContext(CreateContext);
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(true);

    const dateConverter = (date) => {
        const shortdate = new Date(date).toLocaleString("en-GB", {
            weekday: "long",
            year: "numeric",
            month: "short",
            day: "numeric",
        });

        const time = new Date(date).toLocaleTimeString("en-GB", {
            hour12: false,
        });

        return `${shortdate}, ${time}`;
    };

    
    const user = useSelector(selectUserDetails)
    // useSelector((state) => state.user.login?.data?.data);

    // useEffect(()=>{
    //     if(details){
    //         setLoading(false)
    //     }
    // },[details])
    const [selectedHackathon, setSelectedHackathon] = useState(hackathons[0]);

    useEffect(() => {
        // console.log(selectedHackathonId)
        setSelectedHackathon(
            hackathons.find(
                (hackathon) => hackathon.hackathonId === selectedHackathonId
            ) || hackathons[0]
        );
    }, [selectedHackathonId]);

    // console.log(selectedHackathon)

    return (
        <>
            {/* {!loading &&  */}
            <div className="md:px-2 w-full">
                <Card shadow={false}>
                    <CardBody>
                        <div className="w-full mb-2 px-2 flex justify-between">
                            <Typography
                                className="font-semibold flex text-incedo-secondary-600 text-left justify-start"
                                variant="h2"
                                // color="black"
                            >
                                {selectedHackathon?.name}
                            </Typography>
                            {selectedHackathon.isCompleted ? (
                                <Link
                                    to={`/results/${selectedHackathon.hackathonId}`}
                                >
                                    <Button
                                        size="sm"
                                        className="h-8"
                                        color="green"
                                    >
                                        Result
                                    </Button>
                                </Link>
                            ) : null}
                        </div>
                        <div className="w-full rounded-2xl p-2 text-incedo-tertiary-900">
                            <Typography variant="h4">
                                Theme: {selectedHackathon?.theme}
                            </Typography>
                            <Typography variant="h4">
                                Start Date:{" "}
                                {selectedHackathon?.startDate?.split(" ")[0] ||
                                    ""}
                            </Typography>
                            <Typography variant="h4">
                                Time:{" "}
                                {selectedHackathon?.startDate
                                    ?.split(" ")[1]
                                    ?.split(".")[0] || ""}
                            </Typography>
                        </div>
                        <div className="w-full mt-1 rounded-2xl p-2">
                            <Typography>
                                {selectedHackathon?.description}
                            </Typography>
                        </div>
                        <div className="w-full mt-1 rounded-2xl p-2">
                            <Typography variant="h4">Schedule</Typography>
                            <div className="w-full mt-4">
                                <Timeline>
                                    <TimelineItem>
                                        <TimelineConnector />
                                        <TimelineHeader className="h-3">
                                            <TimelineIcon />
                                            <Typography
                                                variant="h6"
                                                color="blue-gray"
                                                className="leading-none"
                                            >
                                                Start:{" "}
                                                {dateConverter(
                                                    selectedHackathon?.startDate
                                                ) || " "}
                                            </Typography>
                                        </TimelineHeader>
                                        <TimelineBody className="pb-8">
                                            <Typography
                                                variant="small"
                                                color="gray"
                                                className="font-normal text-gray-600"
                                            >
                                                Get set for an exhilarating
                                                hackathon! Afterthe event
                                                begins, be sure to register your
                                                team. Get ready to dive into a
                                                day of innovation and
                                                collaboration.
                                            </Typography>
                                        </TimelineBody>
                                    </TimelineItem>
                                    <TimelineItem>
                                        <TimelineConnector />
                                        <TimelineHeader className="h-3">
                                            <TimelineIcon />
                                            <Typography
                                                variant="h6"
                                                color="blue-gray"
                                                className="leading-none"
                                            >
                                                Idea Deadline:{" "}
                                                {dateConverter(
                                                    selectedHackathon?.ideaSubmissionDeadline
                                                ) || " "}
                                            </Typography>
                                        </TimelineHeader>
                                        <TimelineBody className="pb-8">
                                            <Typography
                                                variant="small"
                                                color="gray"
                                                className="font-normal text-gray-600"
                                            >
                                                Submit your innovative ideas
                                                before the deadline. Late
                                                submissions won't be considered.
                                                Your idea will be reviewed by
                                                panelists, and if it's
                                                promising, you'll proceed to the
                                                next step. Let your creativity
                                                shine!
                                                {/* took me twenty five years to get
                                            these plants, twenty five years of
                                            blood sweat and tears, and I&apos;m
                                            never giving up, I&apos;m just
                                            getting started. I&apos;m up to
                                            something. Fan luv. */}
                                            </Typography>
                                        </TimelineBody>
                                    </TimelineItem>
                                    <TimelineItem>
                                        <TimelineConnector />
                                        <TimelineHeader className="h-3">
                                            <TimelineIcon />
                                            <Typography
                                                variant="h6"
                                                color="blue-gray"
                                                className="leading-none"
                                            >
                                                Implementation Deadline:{" "}
                                                {dateConverter(
                                                    selectedHackathon?.implementationSubmissionDeadline
                                                ) || " "}
                                            </Typography>
                                        </TimelineHeader>
                                        <TimelineBody className="pb-8">
                                            <Typography
                                                variant="small"
                                                color="gray"
                                                className="font-normal text-gray-600"
                                            >
                                                Once your idea is approved, it's
                                                time to bring it to life!
                                                Implement your project before
                                                the deadline. Feel free to make
                                                changes or expand on your
                                                initial idea as you see fit. Be
                                                innovative, be creative, and
                                                make your vision a reality. Good
                                                luck!
                                            </Typography>
                                        </TimelineBody>
                                    </TimelineItem>
                                    <TimelineItem>
                                        <TimelineHeader className="h-3">
                                            <TimelineIcon />
                                            <Typography
                                                variant="h6"
                                                color="blue-gray"
                                                className="leading-none"
                                            >
                                                Results:{" "}
                                                {dateConverter(
                                                    selectedHackathon?.reviewEndTime
                                                ) || " "}
                                            </Typography>
                                        </TimelineHeader>
                                        <TimelineBody>
                                            <Typography
                                                variant="small"
                                                color="gray"
                                                className="font-normal text-gray-600"
                                            >
                                                After the implementation phase,
                                                expert judges will evaluate your
                                                work to determine the best
                                                projects. Stay tuned as we
                                                reveal the top three teams who
                                                will be recognized for their
                                                outstanding contributions. Get
                                                ready for an exciting conclusion
                                                to the event!
                                            </Typography>
                                        </TimelineBody>
                                    </TimelineItem>
                                </Timeline>
                            </div>
                        </div>
                        <div className="w-full mt-1 rounded-2xl p-2">
                            <Typography variant="h4">
                                Rules and Guidlines
                            </Typography>
                            <Typography>{selectedHackathon?.rules}</Typography>
                        </div>
                        <div className="w-full rounded-2xl p-2">
                            <Typography variant="h4">
                                Judging Criteria
                            </Typography>
                            <Typography>
                                {selectedHackathon?.judgingCriteria}
                            </Typography>
                        </div>
                        <div className="w-full mt-1 rounded-2xl p-2">
                            <Typography variant="h4">
                                Rewards and Prizes
                            </Typography>
                            <Typography>{selectedHackathon?.prizes}</Typography>
                        </div>
                        <div className="w-fit mt-2 mx-auto">
                            {user?.role === "participant" ? (
                                <Button
                                    disabled={!user.available}
                                    onClick={() => setOpen((cur) => !cur)}
                                >
                                    Register
                                </Button>
                            ) : null}

                            {/* This Message Should Be displayed After Registering to Particular Hackathon instead of Register Button */}
                            {/* <Typography variant='h4' color='black'>You Have Registered To This Hackathon</Typography> */}
                        </div>
                        <TeamRegistration
                            open={open}
                            setOpen={setOpen}
                            selectedHackathonId={selectedHackathonId}
                        />
                    </CardBody>
                </Card>
            </div>
            {/* } */}
        </>
    );
};

export default HackathonDetails;
