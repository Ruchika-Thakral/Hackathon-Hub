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
import ReviewDetails from "../components/ReviewDetails";
import { fetchJudgeTeamsByHackathonId } from "../features/team/teamSlice";

import { useDispatch, useSelector } from "react-redux";

import { fetchHackathons } from "../features/hackathon/hackathonSlice";

// const IDEAS = [
//     {
//         teamId: 101,
//         ideaBody:
//             "Our team proposes a revolutionary approach to personalized medicine by integrating genetic sequencing with advanced machine learning algorithms. By analyzing individual genetic profiles, we can predict disease susceptibility, drug responses, and potential treatment outcomes with unprecedented accuracy. This personalized approach enables healthcare providers to tailor treatment plans to each patient's unique genetic makeup, leading to improved efficacy and reduced adverse effects. Additionally, our platform provides insights into genetic predispositions for diseases, empowering individuals to make proactive lifestyle choices to mitigate risks. With the potential to transform healthcare delivery, our Genetic-Based Personalized Medicine solution represents a significant leap forward in precision medicine.",
//         ideaDomain: "Healthcare Technology",
//         ideaTitle: "Genetic-Based Personalized Medicine",
//         teamName: "Innovative MedTech Solutions",
//         status: "implemented",
//         ideaRepo: "https://tailwindcss.com/docs/font-size",
//         ideaFiles: "https://heroicons.com/solid"
//     },
//     {
//         teamId: 102,
//         ideaBody:
//             "Our team's innovation lies in the development of an AI-driven platform for predicting drug interactions and adverse effects, revolutionizing pharmaceutical therapies. Leveraging vast datasets of drug properties, patient medical records, and clinical trial data, our algorithms can identify potential drug-drug interactions, adverse reactions, and contraindications with unparalleled accuracy. By integrating this predictive analytics tool into healthcare systems, physicians can make informed decisions when prescribing medications, reducing the risk of adverse events and improving patient safety. Furthermore, pharmaceutical companies can use our platform to streamline drug development processes, identifying potential safety concerns early in the development pipeline. With our AI-Driven Drug Interaction Prediction solution, we aim to enhance the safety and efficacy of pharmaceutical therapies, ultimately improving patient outcomes.",
//         ideaDomain: "Pharmaceuticals",
//         ideaTitle: "AI-Driven Drug Interaction Prediction",
//         teamName: "PharmaTech Innovators",
//         status: "implemented",
//         ideaRepo: "https://whimsical.com/pricing",
//         ideaFiles: "https://github.com/Ruchika-Thakral/Hackathon-Hub"
//     },
//     {
//         teamId: 103,
//         ideaBody:
//             "Our team envisions a novel approach to early disease detection through the development of a non-invasive wearable biosensor. This biosensor utilizes cutting-edge technology to continuously monitor key biomarkers in real-time, providing early warnings for various health conditions, including cardiovascular diseases, diabetes, and respiratory disorders. By leveraging advanced signal processing techniques and cloud-based analytics, our wearable device can detect subtle changes in physiological parameters, allowing for timely intervention and preventive measures. Moreover, our platform integrates seamlessly with existing healthcare systems, enabling remote monitoring and personalized health insights for individuals. With our Wearable Biosensor for Early Disease Detection, we aim to empower individuals to take proactive steps towards better health and well-being.",
//         ideaDomain: "Healthcare Technology",
//         ideaTitle: "Wearable Biosensor",
//         teamName: "BioTech Innovations",
//         status: "rejected",

//         ideaRepo: "https://preline.co/docs/alerts.html",
//         ideaFiles: "https://preline.co/docs/alerts.html"
//     },
//     {
//         teamId: 104,
//         ideaBody:
//             "Our team proposes an innovative telemedicine platform that revolutionizes access to healthcare services, particularly in underserved rural areas. By leveraging telecommunication technologies and mobile applications, patients can connect with healthcare providers remotely, receiving medical consultations, diagnoses, and prescriptions from the comfort of their homes. Our platform also facilitates remote monitoring of chronic conditions, enabling proactive management and timely interventions. Additionally, we integrate electronic health records (EHR) systems to ensure seamless information exchange between patients and healthcare providers. With our Telemedicine Platform for Rural Healthcare, we aim to bridge the gap in healthcare access, improving health outcomes and enhancing patient satisfaction.",
//         ideaDomain: "Healthcare Technology",
//         ideaTitle: "Telemedicine Platform",
//         teamName: "TeleHealth Innovations",
//         status: "shortlist",

//         ideaRepo: "https://preline.co/docs/alerts.html",
//         ideaFiles: "https://preline.co/docs/alerts.html"
//     },
// ];

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
//         theme: "Banking and Wealth",
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
//         description: "A hackathon focused on innovations in tele technology.",
//         rules: "Original ideas and implementations must be submitted within the specified deadlines.",
//         prizes: "Cash prizes for top performers.",
//         judgingCriteria:
//             "Projects will be evaluated based on innovation, feasibility, and potential impact on healthcare.",
//     },
// ];

const themes = [
    { name: "Life Sciences", value: "lifesciences" },
    { name: "Banking and Wealth", value: "banking" },
    { name: "Telecom", value: "telecom" },
    { name: "Product Engineering", value: "product" },
];
const JudgeReview = ({reviewedIdeas, setReviewedIdeas}) => {
    const dispatch = useDispatch();
    const teams = useSelector((state) => state.team.panelistteams);

    const IDEAS =
        useSelector((state) => state.team.judgeteams.data?.data) || [];

    const user = useSelector((state) => state.user.login?.data?.data);

    useEffect(() => {
        dispatch(fetchHackathons());
    }, [dispatch]);

    const hackathons =
        useSelector((state) => state.hackathon.hackathons.data) || [];
    console.log(hackathons);

    useEffect(() => {
        console.log(teams);
    }, [teams]);


    const [filteredHackathons, setFilteredHackathons] =
        React.useState(hackathons);

    const [selectedHackathonId, setSelectedHackathonId] = React.useState(
        filteredHackathons[0]?.hackathonId
    );

    const [selectedIdeaId, setSelectedIdeaId] = React.useState(
        IDEAS[0]?.teamId
    );
    console.log(IDEAS);
    // const user = useSelector((state) => state.user.login?.data?.data);
    useEffect(() => {
        setSelectedHackathonId(filteredHackathons[0]?.hackathonId);
    }, [filteredHackathons]);

    useEffect(() => {
        // if (user) {
        dispatch(
            fetchJudgeTeamsByHackathonId({
                // hackathonId: user.assignedHackathon,
                // panelistid: user.userId,
                hackathonId: user?.assignedHackathon,
                // panelistid: 3,
            })
        );
        // }
    }, []);

    // const [reviewedIdeas, setReviewedIdeas] = useState([]);

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
                                    Review Ideas
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
                                    {IDEAS.length > 8
                                        ? IDEAS.slice(7).map((idea) => {
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
                                                          {reviewedIdeas.includes(idea.teamId) ? (
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
                                                          ) : null}
                                                      </>
                                                  </ListItem>
                                              );
                                          })
                                        : IDEAS.map((idea) => {
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
                                                          {reviewedIdeas.includes(idea.teamId) ? (
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
                        <ReviewDetails
                            hackathons={hackathons}
                            selectedHackathonId={selectedHackathonId}
                            selectedIdeaId={selectedIdeaId}
                            IDEAS={IDEAS}
                            reviewedIdeas={reviewedIdeas}
                            setReviewedIdeas={setReviewedIdeas}
                        />
                    </div>
                </div>
            </div>
        </BaseLayout>
    );
};

export default JudgeReview;
