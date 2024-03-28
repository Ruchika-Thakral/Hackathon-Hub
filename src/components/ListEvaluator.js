import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { PencilIcon, UserPlusIcon } from "@heroicons/react/24/solid";
import {
    Card,
    CardHeader,
    Input,
    Typography,
    Button,
    CardBody,
    Chip,
    CardFooter,
    Tabs,
    TabsHeader,
    Tab,
    Avatar,
    IconButton,
    Tooltip,
} from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import {
    fetchEvaluators,
    selectEvaluators,
} from "../features/evaluator/evaluatorSlice";
import {
    fetchHackathons,
    selectHackathons,
} from "../features/hackathon/hackathonSlice";
import { EVALUATORS, HACKATHONS } from "../constants";

const TABS = [
    {
        label: "All",
        value: "all",
    },
    {
        label: "Panelists",
        value: "panelist",
    },
    {
        label: "Judges",
        value: "judge",
    },
];

const TABLE_HEAD = ["Member", "Role", "Status"];
// , "Actions"

//   https://avatar.iran.liara.run/public
// https://ui-avatars.com/api/?background=random&name=Vidit+Bhanja

const ListEvaluator = ({ handleAddMembers, handleAssignMembers }) => {
    const dispatch = useDispatch();
    // useEffect(() => {
    //     dispatch(fetchEvaluators());
    //     dispatch(fetchHackathons())
    // }, [dispatch]);

    // const data =
    // HACKATHONS
    // useSelector((state) => state.hackathon.hackathons.data);
    let hackathons = useSelector(selectHackathons);
    // data ? data : [];
    // const data2 = EVALUATORS
    // useSelector((state) => state.evaluator.evaluators.data);
    const evaluatorData = useSelector(selectEvaluators);
    // data2 ? data2 : [];;

    // console.log(evaluatorData)
    const [evaluators, setEvaluators] = useState(evaluatorData);
    useEffect(() => {
        setEvaluators(evaluatorData);
    }, [evaluatorData]);
    const handleFilterClick = (keyword = "all") => {
        // console.log("hi" + keyword);
        if (keyword === "all") {
            setEvaluators(evaluatorData);
            return;
        }

        setEvaluators(
            evaluatorData.filter((evaluator) => evaluator.role === keyword)
        );
    };

    return (
        <div className="container my-2 mx-auto px-1 flex justify-center">
            <Card className="h-full w-full">
                <CardHeader
                    floated={false}
                    shadow={false}
                    className="rounded-none"
                >
                    <div className="mb-8 flex flex-wrap items-center justify-between gap-8">
                        <div>
                            <Typography variant="h5" color="blue-gray">
                                Evaluators List
                            </Typography>
                            <Typography
                                color="gray"
                                className="mt-1 font-normal"
                            >
                                See information about all evaluators
                            </Typography>
                        </div>
                        <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
                            {/* <Button variant="outlined" size="sm">
                                view all
                            </Button> */}
                            <Button
                                className="flex items-center gap-3"
                                size="sm"
                                onClick={handleAddMembers}
                            >
                                <UserPlusIcon
                                    strokeWidth={2}
                                    className="h-4 w-4"
                                />{" "}
                                Add member
                            </Button>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                        <Tabs value="all" className="w-full md:w-max">
                            <TabsHeader>
                                {TABS.map(({ label, value }) => (
                                    <Tab
                                        key={value}
                                        value={value}
                                        onClick={() => {
                                            handleFilterClick(value);
                                        }}
                                    >
                                        &nbsp;&nbsp;{label}&nbsp;&nbsp;
                                    </Tab>
                                ))}
                            </TabsHeader>
                        </Tabs>
                        <div className="w-full md:w-72">
                            <Input
                                label="Search"
                                icon={
                                    <MagnifyingGlassIcon className="h-5 w-5" />
                                }
                            />
                        </div>
                    </div>
                </CardHeader>
                <CardBody className="px-0">
                    <table className="mt-4 w-full min-w-max table-auto text-left">
                        <thead>
                            <tr>
                                {TABLE_HEAD.map((head) => (
                                    <th
                                        key={head}
                                        className={
                                            head === "Role" ||
                                            head === "Status" ||
                                            head === "Actions"
                                                ? "border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 hidden lg:table-cell"
                                                : "border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
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
                            {evaluators.map((evaluator, index) => {
                                const isLast =
                                    index === evaluatorData.length - 1;
                                const classes = isLast
                                    ? "p-4"
                                    : "p-4 border-b border-blue-gray-50";

                                return (
                                    <tr key={evaluator.userId}>
                                        <td className="p-4">
                                            <div className="flex items-center gap-3">
                                                <Avatar
                                                    src="https://avatar.iran.liara.run/public"
                                                    alt={evaluator?.name}
                                                    size="sm"
                                                />
                                                <div className="flex flex-col">
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-bold"
                                                    >
                                                        {evaluator?.name}
                                                    </Typography>
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal opacity-70"
                                                    >
                                                        {evaluator?.email}
                                                    </Typography>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="p-4 hidden lg:table-cell">
                                            <div className="flex flex-col">
                                                <Typography
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="font-semibold"
                                                >
                                                    {evaluator.role ===
                                                    "panelist"
                                                        ? "Panelist"
                                                        : evaluator.role ===
                                                          "judge"
                                                        ? "Judge"
                                                        : null}
                                                </Typography>
                                                {!evaluator.available && (
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal opacity-70"
                                                    >
                                                        {
                                                            hackathons.find(
                                                                (hackathon) =>
                                                                    hackathon?.hackathonId ===
                                                                    evaluator?.assignedHackathon
                                                            )?.name
                                                        }
                                                    </Typography>
                                                )}
                                            </div>
                                        </td>
                                        <td className="p-4 hidden lg:table-cell">
                                            <div className="w-max">
                                                <Chip
                                                    variant="ghost"
                                                    size="sm"
                                                    value={
                                                        evaluator.available
                                                            ? "Available"
                                                            : "Assigned"
                                                    }
                                                    color={
                                                        evaluator.available
                                                            ? "green"
                                                            : "blue-gray"
                                                    }
                                                />
                                            </div>
                                        </td>
                                        {/* <td className="p-4 hidden lg:table-cell">
                                            <Button
                                                className="flex items-center gap-3"
                                                size="sm"
                                                onClick={handleAssignMembers}
                                                disabled={
                                                    !evaluator.isAvailable
                                                }
                                            >
                                                <PencilIcon className="h-4 w-4" />
                                                Assign
                                            </Button>
                                        </td> */}
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </CardBody>
                <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
                    <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                    >
                        Page 1 of 10
                    </Typography>
                    <div className="flex gap-2">
                        <Button variant="outlined" size="sm">
                            Previous
                        </Button>
                        <Button variant="outlined" size="sm">
                            Next
                        </Button>
                    </div>
                </CardFooter>
            </Card>
        </div>
    );
};

ListEvaluator.propTypes = {
    handleAddMembers: PropTypes.func,
    handleAssignMembers: PropTypes.func,
};

export default ListEvaluator;
