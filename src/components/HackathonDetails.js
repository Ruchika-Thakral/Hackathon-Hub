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
import { useContext } from "react";
import { CreateContext } from "../App";
import TeamRegistration from "./TeamRegistration";
import { useSelector } from "react-redux";
const HackathonDetails = ({ hackathons, selectedHackathonId }) => {
    // const hackathons = [
    //     {
    //         hackathonId: 15672,
    //         name: "InnovateLife",
    //         theme: "Life Sciences",
    //         startDate: "2024-03-01T09:00",
    //         ideaSubmissionDeadline: "2024-03-05T18:00",
    //         shortListDeadline: "2024-03-08T12:00",
    //         implementationSubmissionDeadline: "2024-03-10T18:00",
    //         reviewStartTime: "2024-03-11T09:00",
    //         reviewEndTime: "2024-03-12T15:00",
    //         isAvailable: true,
    //         panelists: [
    //             "Alice",
    //             "Bob",
    //             "Charlie",
    //             "David",
    //             "Eva",
    //             "Frank",
    //             "Grace",
    //             "Helen",
    //             "Ivy",
    //             "Jack",
    //         ],
    //         judges: ["Olivia", "Patrick", "Quincy", "Rachel", "Sam"],
    //         totalSubmissions: 85,
    //         description:
    //             "The life sciences hackathon unites diverse innovators to address industry challenges, from drug discovery to patient care. Participants collaborate intensively, brainstorming ideas and developing prototypes within a limited timeframe. Mentors offer guidance as teams work to refine their solutions. At the event's conclusion, teams present their innovations to judges, competing for recognition and prizes. This dynamic atmosphere fosters creativity and urgency, driving participants to push the boundaries of innovation in healthcare and biotechnology.",
    //         rules: "Original ideas and implementations must be submitted within the specified deadlines.",
    //         prizes: "Cash prizes for the top three teams.",
    //         judgingCriteria:
    //             "Projects will be evaluated based on innovation, feasibility, and impact.",
    //     },
    //     {
    //         hackathonId: 23784,
    //         name: "TeleTechX",
    //         theme: "Telecom",
    //         startDate: "2024-03-03T10:00",
    //         ideaSubmissionDeadline: "2024-03-07T18:00",
    //         shortListDeadline: "2024-03-10T12:00",
    //         implementationSubmissionDeadline: "2024-03-12T18:00",
    //         reviewStartTime: "2024-03-13T10:00",
    //         reviewEndTime: "2024-03-14T10:30",
    //         isAvailable: true,
    //         panelists: [
    //             "Emily",
    //             "Fiona",
    //             "George",
    //             "Hannah",
    //             "Isaac",
    //             "Jane",
    //             "Kevin",
    //             "Lily",
    //             "Mia",
    //         ],
    //         judges: ["Tom", "Uma", "Vicky", "Walter", "Xavier"],
    //         totalSubmissions: 73,
    //         description:
    //             "A hackathon focusing on innovation in the telecommunications industry.",
    //         rules: "Original ideas and implementations required.",
    //         prizes: "Top teams will receive cash prizes and opportunities for collaboration.",
    //         judgingCriteria:
    //             "Projects will be evaluated based on creativity, technical skill, and feasibility.",
    //     },
    //     {
    //         hackathonId: 39812,
    //         name: "BankingBoost",
    //         theme: "Banking and Wealth Management",
    //         startDate: "2024-03-05T11:00",
    //         ideaSubmissionDeadline: "2024-03-09T18:00",
    //         shortListDeadline: "2024-03-12T12:00",
    //         implementationSubmissionDeadline: "2024-03-14T18:00",
    //         reviewStartTime: "2024-03-15T11:00",
    //         reviewEndTime: "2024-03-16T14:45",
    //         isAvailable: false,
    //         panelists: [
    //             "Noah",
    //             "Olivia",
    //             "Peter",
    //             "Quincy",
    //             "Rachel",
    //             "Sarah",
    //             "Trevor",
    //             "Uma",
    //             "Victoria",
    //         ],
    //         judges: ["Zara", "Alex", "Benjamin", "Catherine", "David"],
    //         totalSubmissions: 64,
    //         description:
    //             "A hackathon focusing on innovation in the banking and wealth management sector.",
    //         rules: "Original ideas and implementations required. Closed for new submissions.",
    //         prizes: "Cash prizes for top performers.",
    //         judgingCriteria:
    //             "Projects will be evaluated based on innovation, practicality, and market potential.",
    //     },
    //     {
    //         hackathonId: 56473,
    //         name: "EngiNex",
    //         theme: "Product Engineering",
    //         startDate: "2024-03-07T12:00",
    //         ideaSubmissionDeadline: "2024-03-11T18:00",
    //         shortListDeadline: "2024-03-14T12:00",
    //         implementationSubmissionDeadline: "2024-03-16T18:00",
    //         reviewStartTime: "2024-03-17T12:00",
    //         reviewEndTime: "2024-03-18T11:15",
    //         isAvailable: true,
    //         panelists: [
    //             "Zoe",
    //             "Amy",
    //             "Bryan",
    //             "Clara",
    //             "Dylan",
    //             "Ella",
    //             "Felix",
    //             "Gina",
    //             "Harry",
    //             "Isla",
    //         ],
    //         judges: ["Jacob", "Katherine", "Liam", "Megan", "Nathan"],
    //         totalSubmissions: 56,
    //         description:
    //             "A hackathon focusing on innovation in product engineering.",
    //         rules: "Original ideas and implementations required.",
    //         prizes: "Prizes for top teams.",
    //         judgingCriteria:
    //             "Projects will be evaluated based on innovation, technical complexity, and potential impact.",
    //     },
    //     {
    //         hackathonId: 72691,
    //         name: "MediTechSprint",
    //         theme: "Life Sciences",
    //         startDate: "2024-03-09T14:00",
    //         ideaSubmissionDeadline: "2024-03-13T18:00",
    //         shortListDeadline: "2024-03-16T12:00",
    //         implementationSubmissionDeadline: "2024-03-18T18:00",
    //         reviewStartTime: "2024-03-19T14:00",
    //         reviewEndTime: "2024-03-20T09:00",
    //         isAvailable: true,
    //         panelists: [
    //             "James",
    //             "Kate",
    //             "Logan",
    //             "Madison",
    //             "Natalie",
    //             "Oscar",
    //             "Penny",
    //             "Quentin",
    //             "Rebecca",
    //         ],
    //         judges: ["Sophia", "Timothy", "Ursula", "Victor", "Wendy"],
    //         totalSubmissions: 63,
    //         description:
    //             "A hackathon focused on innovations in medical technology.",
    //         rules: "Original ideas and implementations must be submitted within the specified deadlines.",
    //         prizes: "Cash prizes for top performers.",
    //         judgingCriteria:
    //             "Projects will be evaluated based on innovation, feasibility, and potential impact on healthcare.",
    //     },
    //     {
    //         hackathonId: 83246,
    //         name: "TeleTrend",
    //         theme: "Telecom",
    //         startDate: "2024-03-11T16:00",
    //         ideaSubmissionDeadline: "2024-03-15T18:00",
    //         shortListDeadline: "2024-03-18T12:00",
    //         implementationSubmissionDeadline: "2024-03-20T18:00",
    //         reviewStartTime: "2024-03-21T16:00",
    //         reviewEndTime: "2024-03-22T16:30",
    //         isAvailable: false,
    //         panelists: [
    //             "James",
    //             "Kate",
    //             "Logan",
    //             "Madison",
    //             "Natalie",
    //             "Oscar",
    //             "Penny",
    //             "Quentin",
    //             "Rebecca",
    //         ],
    //         judges: ["Sophia", "Timothy", "Ursula", "Victor", "Wendy"],
    //         totalSubmissions: 63,
    //         description:
    //             "A hackathon focused on innovations in tele technology.",
    //         rules: "Original ideas and implementations must be submitted within the specified deadlines.",
    //         prizes: "Cash prizes for top performers.",
    //         judgingCriteria:
    //             "Projects will be evaluated based on innovation, feasibility, and potential impact on healthcare.",
    //     },
    // ];

    const { details } = useContext(CreateContext);
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

    const user = useSelector((state) => state.user.login?.data?.data);

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
                        <Typography
                            className="mb-2 px-2 font-semibold flex text-incedo-secondary-600 text-left justify-start"
                            variant="h2"
                            // color="black"
                        >
                            {selectedHackathon?.name}
                        </Typography>
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
                                <Button onClick={() => setOpen((cur) => !cur)}>
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
