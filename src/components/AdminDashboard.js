import React from "react";
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Avatar,
    Button,
    Chip,
} from "@material-tailwind/react";

const HACKATHONS = [
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
    },
    {
        hackathonId: 39812,
        name: "BankingBoost",
        theme: "Banking and Wealth Management",
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
            "Zack",
            "Ava",
            "Brandon",
            "Chloe",
            "Daniel",
            "Emma",
            "Finn",
            "Grace",
            "Henry",
            "Isabella",
        ],
        judges: ["Jackson", "Kelly", "Luke", "Mia", "Nolan"],
        totalSubmissions: 75,
    },
    {
        hackathonId: 98712,
        name: "BankUp",
        theme: "Banking and Wealth Management",
        startDate: "2024-03-13T09:00",
        ideaSubmissionDeadline: "2024-03-17T18:00",
        shortListDeadline: "2024-03-20T12:00",
        implementationSubmissionDeadline: "2024-03-22T18:00",
        reviewStartTime: "2024-03-23T09:00",
        reviewEndTime: "2024-03-24T13:20",
        isAvailable: true,
        panelists: [
            "Oliver",
            "Patricia",
            "Quentin",
            "Riley",
            "Stella",
            "Theo",
            "Violet",
            "Wyatt",
            "Xander",
        ],
        judges: ["Yvonne", "Zachary", "Amelia", "Brian", "Caroline"],
        totalSubmissions: 88,
    },
    {
        hackathonId: 10654,
        name: "ProductPulse",
        theme: "Product Engineering",
        startDate: "2024-03-15T10:00",
        ideaSubmissionDeadline: "2024-03-19T18:00",
        shortListDeadline: "2024-03-22T12:00",
        implementationSubmissionDeadline: "2024-03-24T18:00",
        reviewStartTime: "2024-03-25T10:00",
        reviewEndTime: "2024-03-26T10:45",
        isAvailable: true,
        panelists: [
            "Abigail",
            "Blake",
            "Charlotte",
            "Derek",
            "Eleanor",
            "Fiona",
            "Gavin",
            "Hazel",
            "Ivan",
        ],
        judges: ["Jasmine", "Kyle", "Lucy", "Max", "Nora"],
        totalSubmissions: 51,
    },
    {
        hackathonId: 11938,
        name: "MediInno",
        theme: "Life Sciences",
        startDate: "2024-03-17T12:00",
        ideaSubmissionDeadline: "2024-03-21T18:00",
        shortListDeadline: "2024-03-24T12:00",
        implementationSubmissionDeadline: "2024-03-26T18:00",
        reviewStartTime: "2024-03-27T12:00",
        reviewEndTime: "2024-03-28T14:10",
        isAvailable: false,
        panelists: [
            "Jack",
            "Kayla",
            "Logan",
            "Molly",
            "Nathan",
            "Olivia",
            "Parker",
            "Quinn",
            "Rachel",
        ],
        judges: ["Samantha", "Thomas", "Uma", "Victoria", "Winston"],
        totalSubmissions: 89,
    },
    {
        hackathonId: 12543,
        name: "TechConnect",
        theme: "Telecom",
        startDate: "2024-03-19T14:00",
        ideaSubmissionDeadline: "2024-03-23T18:00",
        shortListDeadline: "2024-03-26T12:00",
        implementationSubmissionDeadline: "2024-03-28T18:00",
        reviewStartTime: "2024-03-29T14:00",
        reviewEndTime: "2024-03-30T12:00",
        isAvailable: true,
        panelists: [
            "Zoe",
            "Andy",
            "Bella",
            "Charlie",
            "Daisy",
            "Evan",
            "Fiona",
            "Gus",
            "Hannah",
            "Ivy",
        ],
        judges: ["Jake", "Kaitlyn", "Liam", "Mia", "Nora"],
        totalSubmissions: 65,
    },
];

const AdminDashboard = () => {
    return (
        <div className="container mx-auto px-4 flex justify-center">
            <div className="grid w-full grid-cols-1 gap-y-4 gap-x-2">
                {/* <div> */}
                <div className="max-w-full col-span-1 mx-4 py-6 sm:mx-auto sm:px-6 lg:px-8">
                    {/* <div className="sm:flex space-x-0 sm:space-x-4"> */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-3 gap-x-3">
                        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow transform transition-all w-full">
                            <div className="bg-white p-5">
                                <div className="sm:flex sm:items-start">
                                    <div className="text-center sm:mt-0 sm:ml-2 sm:text-left">
                                        <h3 className="text-sm leading-6 font-medium text-gray-400">
                                            Total Users
                                        </h3>
                                        <p className="text-3xl font-bold text-black">
                                            71,897
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow transform transition-all w-full">
                            <div className="bg-white p-5">
                                <div className="sm:flex sm:items-start">
                                    <div className="text-center sm:mt-0 sm:ml-2 sm:text-left">
                                        <h3 className="text-sm leading-6 font-medium text-gray-400">
                                            Panelists
                                        </h3>
                                        <p className="text-3xl font-bold text-black">
                                            398
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow transform transition-all w-full">
                            <div className="bg-white p-5">
                                <div className="sm:flex sm:items-start">
                                    <div className="text-center sm:mt-0 sm:ml-2 sm:text-left">
                                        <h3 className="text-sm leading-6 font-medium text-gray-400">
                                            Judges
                                        </h3>
                                        <p className="text-3xl font-bold text-black">
                                            209
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow transform transition-allw-full">
                            <div className="bg-white p-5">
                                <div className="sm:flex sm:items-start">
                                    <div className="text-center sm:mt-0 sm:ml-2 sm:text-left">
                                        <h3 className="text-sm leading-6 font-medium text-gray-400">
                                            Active Hackathons
                                        </h3>
                                        <p className="text-3xl font-bold text-black">
                                            29
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <Typography variant="h4" color="blue-gray">
                        Ongoing Hackathons
                    </Typography>
                    <hr className="h-px my-2 bg-gray-300 border-0 dark:bg-gray-900" />
                    <div className="grid my-2 mx-auto px-2 grid-cols-1 lg:grid-cols-2 gap-y-3 gap-x-3">
                        {HACKATHONS.map((hackathon) => {
                            const currTime = new Date();
                            const reviewEndTime = new Date(
                                hackathon.reviewEndTime
                            );
                            const startDate = new Date(hackathon.startDate);
                            const disabledStatus =
                                currTime >= reviewEndTime ? false : true;
                            return !hackathon.isAvailable ? (
                                <Card
                                    // color="transparent"
                                    // shadow={false}
                                    className="w-full cols px-4 pt-3 mt-1"
                                >
                                    <CardHeader
                                        color="transparent"
                                        floated={false}
                                        shadow={false}
                                        className="mx-0 rounded-none flex items-center align-top gap-4 pt-0 pb-8"
                                    >
                                        <Avatar
                                            size="xl"
                                            variant="square"
                                            src="https://picsum.photos/200/200/?blur=2"
                                            alt="tania andrew"
                                        />
                                        <div className="flex w-full flex-col gap-0.5">
                                            <div className="flex items-center justify-between">
                                                <div>
                                                    <Typography
                                                        variant="h5"
                                                        color="blue-gray"
                                                    >
                                                        {hackathon.name}
                                                    </Typography>
                                                    <Typography color="blue-gray">
                                                        {hackathon.theme}
                                                    </Typography>
                                                </div>
                                                <div className="flex items-center gap-0">
                                                    <Button
                                                        size="sm"
                                                        disabled={
                                                            disabledStatus
                                                        }
                                                        className="hidden lg:block"
                                                    >
                                                        End
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </CardHeader>
                                    <CardBody className="flex justify-between mb-6 p-0">
                                        <div className="flex justify-between">
                                            <Chip
                                                variant="ghost"
                                                color="green"
                                                size="sm"
                                                value={`Submissions: ${hackathon.totalSubmissions}`}
                                                className="mx-auto hidden lg:block text-center"
                                            />
                                            <Chip
                                                variant="ghost"
                                                color="green"
                                                size="sm"
                                                value={`Panelist: ${hackathon.panelists.length}`}
                                                className="mx-auto hidden lg:block text-center"
                                            />
                                            <Chip
                                                variant="ghost"
                                                color="green"
                                                size="sm"
                                                value={`Judges: ${hackathon.judges.length}`}
                                                className="mx-auto hidden lg:block text-center"
                                            />
                                            <Chip
                                                variant="ghost"
                                                color="green"
                                                size="sm"
                                                value={`Review End: ${reviewEndTime.toLocaleString(
                                                    "en-IN",
                                                    { hour12: false }
                                                )}`}
                                                className="mx-auto block text-center"
                                            />
                                        </div>
                                        <Button
                                            size="sm"
                                            disabled={disabledStatus}
                                            className="lg:hidden block"
                                        >
                                            End
                                        </Button>
                                    </CardBody>
                                </Card>
                            ) : null;
                        })}
                        {/* <Card
                            // color="transparent"
                            // shadow={false}
                            className="w-full cols px-4 pt-3 mt-1"
                        >
                            <CardHeader
                                color="transparent"
                                floated={false}
                                shadow={false}
                                className="mx-0 rounded-none flex items-center align-top gap-4 pt-0 pb-8"
                            >
                                <Avatar
                                    size="xl"
                                    variant="square"
                                    src="https://picsum.photos/200/200/?blur=2"
                                    alt="tania andrew"
                                />
                                <div className="flex w-full flex-col gap-0.5">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <Typography
                                                variant="h5"
                                                color="blue-gray"
                                            >
                                                Tania Andrew
                                            </Typography>
                                            <Typography color="blue-gray">
                                                Frontend Lead @ Google
                                            </Typography>
                                        </div>
                                        <div className="flex items-center gap-0">
                                            <Button size="sm">End</Button>
                                        </div>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardBody className="flex justify-between mb-6 p-0">
                                <Chip
                                    variant="ghost"
                                    color="green"
                                    size="sm"
                                    value={`Start : 11.02.2024 11:04`}
                                    className="mx-auto block text-center"
                                />
                                <Chip
                                    variant="ghost"
                                    color="green"
                                    size="sm"
                                    value={"Review End: 36"}
                                    className="mx-auto block text-center"
                                />
                                <Chip
                                    variant="ghost"
                                    color="green"
                                    size="sm"
                                    value={"Submissions: 36"}
                                    className="mx-auto block text-center"
                                />
                            </CardBody>
                        </Card> */}
                    </div>
                </div>
            </div>
            {/* </div> */}
        </div>
    );
};

export default AdminDashboard;
