import React, { useEffect } from "react";
import { Card, CardBody, Carousel, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import styles from "./HorizontalScrollBar.module.css";
import { useContext } from "react";
import { CreateContext } from "../App";
import { useDispatch } from "react-redux";
import { fetchHackathons } from "../features/hackathon/hackathonSlice";
import { useSelector } from "react-redux";

const hackathons = [
    {
        hackathonId: 15672,
        name: "InnovateLife",
        theme: "Life Sciences",
        startDate: "2024-03-01T09:00",
        ideaSubmissionDeadline: "2024-03-05T18:00",
        shortListDeadline: "2024-03-08T12:00",
        implementationSubmissionDeadline: "2024-03-10T18:00",
        reviewStartTime: "2024-03-11T09:00",
        reviewEndTime: "2024-03-12T15:00",
        isAvailable: true,
        panelists: [
            "Alice",
            "Bob",
            "Charlie",
            "David",
            "Eva",
            "Frank",
            "Grace",
            "Helen",
            "Ivy",
            "Jack",
        ],
        judges: ["Olivia", "Patrick", "Quincy", "Rachel", "Sam"],
        totalSubmissions: 85,
        description:
            "The life sciences hackathon unites diverse innovators to address industry challenges, from drug discovery to patient care. Participants collaborate intensively, brainstorming ideas and developing prototypes within a limited timeframe. Mentors offer guidance as teams work to refine their solutions. At the event's conclusion, teams present their innovations to judges, competing for recognition and prizes. This dynamic atmosphere fosters creativity and urgency, driving participants to push the boundaries of innovation in healthcare and biotechnology.",
        rules: "Original ideas and implementations must be submitted within the specified deadlines.",
        prizes: "Cash prizes for the top three teams.",
        judgingCriteria:
            "Projects will be evaluated based on innovation, feasibility, and impact.",
    },
    {
        hackathonId: 23784,
        name: "TeleTechX",
        theme: "Telecom",
        startDate: "2024-03-03T10:00",
        ideaSubmissionDeadline: "2024-03-07T18:00",
        shortListDeadline: "2024-03-10T12:00",
        implementationSubmissionDeadline: "2024-03-12T18:00",
        reviewStartTime: "2024-03-13T10:00",
        reviewEndTime: "2024-03-14T10:30",
        isAvailable: true,
        panelists: [
            "Emily",
            "Fiona",
            "George",
            "Hannah",
            "Isaac",
            "Jane",
            "Kevin",
            "Lily",
            "Mia",
        ],
        judges: ["Tom", "Uma", "Vicky", "Walter", "Xavier"],
        totalSubmissions: 73,
        description:
            "A hackathon focusing on innovation in the telecommunications industry.",
        rules: "Original ideas and implementations required.",
        prizes: "Top teams will receive cash prizes and opportunities for collaboration.",
        judgingCriteria:
            "Projects will be evaluated based on creativity, technical skill, and feasibility.",
    },
    {
        hackathonId: 39812,
        name: "BankingBoost",
        theme: "Banking and Wealth",
        startDate: "2024-03-05T11:00",
        ideaSubmissionDeadline: "2024-03-09T18:00",
        shortListDeadline: "2024-03-12T12:00",
        implementationSubmissionDeadline: "2024-03-14T18:00",
        reviewStartTime: "2024-03-15T11:00",
        reviewEndTime: "2024-03-16T14:45",
        isAvailable: false,
        panelists: [
            "Noah",
            "Olivia",
            "Peter",
            "Quincy",
            "Rachel",
            "Sarah",
            "Trevor",
            "Uma",
            "Victoria",
        ],
        judges: ["Zara", "Alex", "Benjamin", "Catherine", "David"],
        totalSubmissions: 64,
        description:
            "A hackathon focusing on innovation in the banking and wealth management sector.",
        rules: "Original ideas and implementations required. Closed for new submissions.",
        prizes: "Cash prizes for top performers.",
        judgingCriteria:
            "Projects will be evaluated based on innovation, practicality, and market potential.",
    },
    {
        hackathonId: 56473,
        name: "EngiNex",
        theme: "Product Engineering",
        startDate: "2024-03-07T12:00",
        ideaSubmissionDeadline: "2024-03-11T18:00",
        shortListDeadline: "2024-03-14T12:00",
        implementationSubmissionDeadline: "2024-03-16T18:00",
        reviewStartTime: "2024-03-17T12:00",
        reviewEndTime: "2024-03-18T11:15",
        isAvailable: true,
        panelists: [
            "Zoe",
            "Amy",
            "Bryan",
            "Clara",
            "Dylan",
            "Ella",
            "Felix",
            "Gina",
            "Harry",
            "Isla",
        ],
        judges: ["Jacob", "Katherine", "Liam", "Megan", "Nathan"],
        totalSubmissions: 56,
        description:
            "A hackathon focusing on innovation in product engineering.",
        rules: "Original ideas and implementations required.",
        prizes: "Prizes for top teams.",
        judgingCriteria:
            "Projects will be evaluated based on innovation, technical complexity, and potential impact.",
    },
    {
        hackathonId: 72691,
        name: "MediTechSprint",
        theme: "Life Sciences",
        startDate: "2024-03-09T14:00",
        ideaSubmissionDeadline: "2024-03-13T18:00",
        shortListDeadline: "2024-03-16T12:00",
        implementationSubmissionDeadline: "2024-03-18T18:00",
        reviewStartTime: "2024-03-19T14:00",
        reviewEndTime: "2024-03-20T09:00",
        isAvailable: true,
        panelists: [
            "James",
            "Kate",
            "Logan",
            "Madison",
            "Natalie",
            "Oscar",
            "Penny",
            "Quentin",
            "Rebecca",
        ],
        judges: ["Sophia", "Timothy", "Ursula", "Victor", "Wendy"],
        totalSubmissions: 63,
        description:
            "A hackathon focused on innovations in medical technology.",
        rules: "Original ideas and implementations must be submitted within the specified deadlines.",
        prizes: "Cash prizes for top performers.",
        judgingCriteria:
            "Projects will be evaluated based on innovation, feasibility, and potential impact on healthcare.",
    },
    {
        hackathonId: 83246,
        name: "TeleTrend",
        theme: "Telecom",
        startDate: "2024-03-11T16:00",
        ideaSubmissionDeadline: "2024-03-15T18:00",
        shortListDeadline: "2024-03-18T12:00",
        implementationSubmissionDeadline: "2024-03-20T18:00",
        reviewStartTime: "2024-03-21T16:00",
        reviewEndTime: "2024-03-22T16:30",
        isAvailable: false,
        panelists: [
            "James",
            "Kate",
            "Logan",
            "Madison",
            "Natalie",
            "Oscar",
            "Penny",
            "Quentin",
            "Rebecca",
        ],
        judges: ["Sophia", "Timothy", "Ursula", "Victor", "Wendy"],
        totalSubmissions: 63,
        description: "A hackathon focused on innovations in tele technology.",
        rules: "Original ideas and implementations must be submitted within the specified deadlines.",
        prizes: "Cash prizes for top performers.",
        judgingCriteria:
            "Projects will be evaluated based on innovation, feasibility, and potential impact on healthcare.",
    },
];

const HorizontalScrollBar = () => {
    // const { arr,setDetails } = useContext(CreateContext);

    // const clickHandler = (item) => {
    //     setDetails(item);
    // };
    const dispatch = useDispatch();
    const hackathons = useSelector((state) => state.hackathon.hackathons.data);
    console.log(hackathons);
    // const arr = hackathons ? hackathons.data : [];
    // const [details, setDetails] = useState(arr[0]);

    useEffect(() => {
        dispatch(fetchHackathons());
    }, [dispatch]);
    return (
        <div className="w-full h-96 bg-white py-8 px-8">
            <Typography
                variant="h2"
                // color="i"
                className="mb-2 font-semibold flex justify-center text-incedo-secondary-600 text-center"
            >
                Popular Hackathons
            </Typography>
            {/* <Carousel className="rounded-xl place-self-center justify-self-center">
                {hackathons?.map((hachathon) => (
                    <div className="relative h-40">
                        <Card className=" h-full w-full" shadow={true} color="black">
                            <CardBody className="flex justify-center items-center">
                                {hachathon.name}
                            </CardBody>
                        </Card>
                    </div>
                ))}

            </Carousel> */}
            <div
                className={`${styles.main} flex gap-x-4 items-center w-9/12 overflow-x-auto  borderrounded-3xl p-4 mx-auto`}
            >
                {hackathons ? (
                    hackathons?.map((item) => (
                        <Link
                            to={`hackathons/?hackathonId=${item.hackathonId}`}
                            key={item.hackathonId}
                            // onClick={() => clickHandler(item)}
                        >
                            <Card className="h-24 md:h-48 w-56 md:w-72 shadow-md bg-incedo-secondary-100/50 px-4 py-2 flex align-middle justify-center">
                                <Typography
                                    variant="h4"
                                    className="mb-2 font-semiboldflex justify-center text-center text-incedo-secondary-600"
                                >
                                    {item.name}
                                </Typography>

                                <Typography
                                    variant="h6"
                                    className=" hidden md:flex text-incedo-secondary-600 justify-center text-center"
                                >
                                    Start Date:{item.startDate}
                                </Typography>
                            </Card>
                            {/* <div className="shrink-0 w-96 h-48 border shadow-md p-8 items-center justify-center rounded-3xl  bg-incedo-secondary-100/50">
                            <>
                            <Typography
                                className="w-full mx-auto justify-self-center  text-incedo-secondary-600 "
                                variant="h2"
                                color="black"
                                // className=""
                            >
                                {item.name}
                            </Typography>
                            <Typography variant="h6" color=" text-incedo-secondary-600">
                                Start Date:{item.startDate}
                            </Typography>
                            </>
                        </div> */}
                        </Link>
                    ))
                ) : (
                    <div className="shrink-0 w-96 h-48 border shadow-md p-8 items-center justify-center rounded-3xl  bg-incedo-secondary-100/50">
                        <>
                            <Typography
                                className="w-full mx-auto justify-self-center  text-incedo-secondary-600 "
                                variant="h2"
                                color="black"
                                // className=""
                            >
                                No Hackathons
                            </Typography>
                            <Typography
                                variant="h6"
                                color=" text-incedo-secondary-600"
                            ></Typography>
                        </>
                    </div>
                )}
            </div>
        </div>
    );
};

export default HorizontalScrollBar;
