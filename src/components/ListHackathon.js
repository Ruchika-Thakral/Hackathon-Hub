import React from "react";

import { Card, Typography, Chip, Button } from "@material-tailwind/react";

const TABLE_HEAD = [
    "Hackathon",
    "Theme",
    "Panelists",
    "Judges",
    "Status",
    "Actions",
];

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
const ListHackathon = () => {
    return (
        <div className="container my-2 mx-auto px-1 flex justify-center">
            <Card className="h-full w-full mx-2">
                <table className="w-full min-w-max table-auto text-left">
                    <thead>
                        <tr>
                            {TABLE_HEAD.map((head) => (
                                <th
                                    key={head}
                                    className={
                                        head === "Theme" ||
                                        head === "Panelists" ||
                                        head === "Judges" ||
                                        head === "Actions"
                                            ? "border-b border-blue-gray-100 bg-blue-gray-50 p-4 hidden lg:table-cell"
                                            : "border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                                    }
                                >
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal leading-none opacity-70"
                                    >
                                        {head}
                                    </Typography>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {HACKATHONS.map((hackathon, index) => {
                            const isLast = index === HACKATHONS.length - 1;
                            const classes = isLast
                                ? "p-4"
                                : "p-4 border-b border-blue-gray-50";

                            const status = "Completed";

                            return (
                                <tr key={hackathon.name}>
                                    <td className="p-4">
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal"
                                        >
                                            {hackathon.name}
                                        </Typography>
                                    </td>
                                    <td className="p-4 hidden lg:table-cell">
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal"
                                        >
                                            {hackathon.theme}
                                        </Typography>
                                    </td>
                                    <td className="p-4 hidden lg:table-cell">
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal"
                                        >
                                            {hackathon.panelists.length}
                                        </Typography>
                                    </td>
                                    <td className="p-4 hidden lg:table-cell">
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal"
                                        >
                                            {hackathon.judges.length}
                                        </Typography>
                                    </td>
                                    <td className="p-4">
                                        {/* <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal"
                                        > */}
                                        <Chip
                                            variant="ghost"
                                            color="green"
                                            size="sm"
                                            value={status}
                                            className="ml-0 mr-auto block w-24 text-center rounded-full"
                                        />
                                        {/* </Typography> */}
                                    </td>
                                    <td className="p-4 hidden lg:table-cell">
                                        <Button
                                            className="flex items-center gap-3"
                                            size="sm"
                                            // onClick={handleAssignMembers}
                                            disabled={!hackathon.isAvailable}
                                        >
                                            {/* <PencilIcon className="h-4 w-4" /> */}
                                            End
                                        </Button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </Card>
        </div>
    );
};

export default ListHackathon;
