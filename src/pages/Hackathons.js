import React, { useEffect, useState } from "react";
import VerticalBar from "../components/VerticalBar";
import HackathonDetails from "../components/HackathonDetails";
import BaseLayout from "../components/BaseLayout";
import SearchFilter from "../components/SearchFilter";
import {
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

const themes = [
    { name: "Life Sciences", value: "lifesciences" },
    { name: "Banking and Wealth", value: "banking" },
    { name: "Telecom", value: "telecom" },
    { name: "Product Engineering", value: "product" },
];

const Hackathons = () => {
    let [searchParams, setSearchParams] = useSearchParams();

    const [searchParamsObject, setSearchParamsObject] = useState(
        Object.fromEntries([...searchParams])
    );

    const [filteredHackathons, setFilteredHackathons] =
        React.useState(hackathons);

    useEffect(() => {
        setSearchParamsObject(Object.fromEntries([...searchParams]));
    }, [searchParams]);

    const [selectedHackathonId, setSelectedHackathonId] = React.useState(
        filteredHackathons[0].hackathonId
    );

    useEffect(() => {
        if (searchParamsObject?.theme) {
            setFilteredHackathons(
                hackathons.filter(
                    (hackathon) =>
                        themes.find((theme) => theme.name === hackathon.theme)
                            .value === searchParamsObject.theme
                )
            );
        } else {
            setFilteredHackathons(hackathons);
        }
        if (searchParamsObject?.hackathonId) {
            setSelectedHackathonId(Number(searchParamsObject.hackathonId));
            setSearchParams({});
        }
    }, [searchParamsObject]);

    useEffect(() => {
        setSelectedHackathonId(filteredHackathons[0].hackathonId);
    }, [filteredHackathons]);

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

    return (
        <BaseLayout>
            <div className="py-4 px-4 md:px-8">
                {/* <SearchFilter /> */}
                <div className="grid md:grid-cols-3 gap-x-4 gap-y-2">
                    <div className="col-span-3 md:col-span-1">
                        <Card shadow={false} className="md:h-[86vh]">
                            <CardHeader floated={false} shadow={false}>
                                <Typography
                                    variant="h4"
                                    className="mb-2 px-2 font-semibold flex text-left justify-start"
                                >
                                    Hackathons List
                                </Typography>
                            </CardHeader>
                            <CardBody className="h-full py-2">
                                <List>
                                    {filteredHackathons.length > 8
                                        ? filteredHackathons
                                              .slice(7)
                                              .map((hackathon) => {
                                                  console.log(hackathon.name);
                                                  return (
                                                      <ListItem
                                                          key={
                                                              hackathon.hackathonId
                                                          }
                                                          onClick={() => {
                                                              setSelectedHackathonId(
                                                                  hackathon.hackathonId
                                                              );
                                                          }}
                                                      >
                                                          {hackathon.name}
                                                      </ListItem>
                                                  );
                                              })
                                        : filteredHackathons.map(
                                              (hackathon) => {
                                                  //   console.log(hackathon.name);
                                                  return (
                                                      <ListItem
                                                          selected={
                                                              selectedHackathonId ===
                                                              hackathon.hackathonId
                                                          }
                                                          key={
                                                              hackathon.hackathonId
                                                          }
                                                          onClick={() => {
                                                              setSelectedHackathonId(
                                                                  hackathon.hackathonId
                                                              );
                                                          }}
                                                          className="border border-gray-200"
                                                      >
                                                          {hackathon.name}
                                                      </ListItem>
                                                  );
                                              }
                                          )}
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
                            <CardFooter className="flex justify-center pt-2 pb-4">
                                <ButtonGroup variant="outlined" size="sm">
                                    <IconButton onClick={prevPage}>
                                        <ArrowLeftIcon
                                            strokeWidth={2}
                                            className="h-4 w-4"
                                        />
                                    </IconButton>
                                    <IconButton {...getPaginationItemProps(1)}>
                                        1
                                    </IconButton>
                                    <IconButton {...getPaginationItemProps(2)}>
                                        2
                                    </IconButton>
                                    <IconButton {...getPaginationItemProps(3)}>
                                        3
                                    </IconButton>
                                    <IconButton {...getPaginationItemProps(4)}>
                                        4
                                    </IconButton>
                                    <IconButton {...getPaginationItemProps(5)}>
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
                        <HackathonDetails
                            hackathons={hackathons}
                            selectedHackathonId={selectedHackathonId}
                        />
                    </div>
                </div>
                {/* <VerticalBar /> */}
                {/* <HackathonDetails /> */}
            </div>
            {/* <div className='main flex overflow-y-auto 'style={{ height: '590px'}} > */}
            {/* </div> */}
        </BaseLayout>
    );
};

export default Hackathons;
