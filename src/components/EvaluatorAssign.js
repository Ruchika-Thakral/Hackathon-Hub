import React, { useEffect, useState } from "react";
import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
} from "@material-tailwind/react";

import { ChevronDownIcon } from "@heroicons/react/24/outline";

import {
    assignEvaluator,
    fetchEvaluators,
    selectEvaluators,
} from "../features/evaluator/evaluatorSlice";
import {
    fetchHackathons,
    selectHackathons,
} from "../features/hackathon/hackathonSlice";
import { useDispatch, useSelector } from "react-redux";
import { EVALUATORS, HACKATHONS } from "../constants";
import { toast } from "react-toastify";

const EvaluatorAssign = () => {
    const hackathons = useSelector(selectHackathons);
    // HACKATHONS;
    // useSelector((state) => state.hackathon.hackathons?.data) || [];
    const evaluators = useSelector(selectEvaluators);
    // EVALUATORS;
    // useSelector((state) => state.evaluator.evaluators?.data) || [];

    const [JUDGES, setJUDGES] = useState(
        evaluators.filter((evaluator) => evaluator.role === "judge")
    );

    const [PANELISTS, setPANELISTS] = useState(
        evaluators.filter((evaluator) => evaluator.role === "panelist")
    );

    // console.log(JUDGES);
    // console.log(PANELISTS);

    useEffect(() => {
        setJUDGES(evaluators.filter((evaluator) => evaluator.role === "judge"));
        setPANELISTS(
            evaluators.filter((evaluator) => evaluator.role === "panelist")
        );
        // console.log("hi")
    }, [evaluators]);

    const dispatch = useDispatch();
    const roles = [
        { name: "Panelist", value: "panelist" },
        { name: "Judge", value: "judge" },
    ];
    const [selectedRole, setSelectedRole] = React.useState({
        name: "",
    });

    const [selectedHackathon, setSelectedHackathon] = React.useState({
        hackathonId: 0,
        name: "",
    });

    // const [selectedRole, _] = roles[selectedRoleIndex];

    const [selectedEvaluator, setSelectedEvaluator] = React.useState({
        name: "",
        email: "",
        role: "",
        isAvailable: true,
    });

    useEffect(() => {
        setSelectedEvaluator({
            name: "",
            email: "",
            role: "",
            isAvailable: true,
        });
    }, [selectedRole]);

    // const [evaluatorData, setEvaluatorData] = useState({role: roles[selectedRoleIndex].value});
    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setEvaluatorData((prevstate) => ({ ...prevstate, [name]: value }));
    // };

    // useEffect(() => {
    //     dispatch(fetchEvaluators());
    //     dispatch(fetchHackathons());
    // }, [dispatch]);

    const handleSubmit = async () => {
        try {
            const data = {
                hackathonId: selectedHackathon.hackathonId,
                evaluators: [{ userId: selectedEvaluator.userId }],
            };

            // console.log(data);
            await toast.promise(dispatch(assignEvaluator(data)).unwrap(), {
                pending: "Assigning...",
                success: `${selectedEvaluator.name} assigned to ${selectedHackathon.name} successfully!`,
                error: "A problem occured while assigning. Please try again",
            });
            // toast.success(`${selectedEvaluator.name} assigned to ${selectedHackathon.name} successfully!`)
            setSelectedEvaluator({
                name: "",
                email: "",
                role: "",
                isAvailable: true,
            });
            setSelectedRole({
                name: "",
            });
            setSelectedHackathon({
                hackathonId: 0,
                name: "",
            });
            await dispatch(fetchEvaluators()).unwrap();
        } catch (error) {
            toast.error(`Error: ${error?.message}`);
        }
    };

    return (
        <div className="container my-2 mx-auto px-1 flex justify-center">
            <Card
                className="flex-intial w-full px-4 py-2"
                color="white"
                shadow={true}
            >
                <Typography variant="h4" color="blue-gray">
                    Evaluator Assign
                </Typography>
                <Typography color="gray" className="mt-1 font-normal">
                    Welcome! Assign the evaluator to a hackathon.
                </Typography>
                <form className="mt-3 mb-2">
                    <div className="mb-1 flex flex-col gap-4">
                        <Typography
                            variant="h6"
                            color="blue-gray"
                            className="-mb-3"
                        >
                            Hackathon
                        </Typography>
                        <div className="relative flex w-full max-w-[24rem]">
                            <Menu placement="bottom-start">
                                <MenuHandler>
                                    <Button
                                        ripple={false}
                                        variant="text"
                                        color="blue-gray"
                                        className="relative flex h-10 w-full items-center justify-between gap-2 border-blue-gray-200 bg-blue-gray-500/10 pl-3"
                                    >
                                        {selectedHackathon.name || ""}
                                        <ChevronDownIcon className="absolute w-4 h-4 right-3" />
                                    </Button>
                                </MenuHandler>
                                <MenuList className="max-h-[20rem] max-w-[18rem]">
                                    {hackathons.length === 0 ||
                                    hackathons.every(
                                        (hackathon) =>
                                            hackathon.isCompleted === true
                                    ) ? (
                                        <MenuItem
                                            className="flex items-center gap-2"
                                            disabled={true}
                                        >
                                            No available hackathons.
                                        </MenuItem>
                                    ) : (
                                        hackathons.map((hackathon, index) => {
                                            if (!hackathon.isCompleted) {
                                                return (
                                                    <MenuItem
                                                        key={index}
                                                        value={hackathon.name}
                                                        className="flex items-center gap-2"
                                                        onClick={() =>
                                                            setSelectedHackathon(
                                                                hackathons[
                                                                    index
                                                                ]
                                                            )
                                                        }
                                                    >
                                                        {hackathon.name}
                                                    </MenuItem>
                                                );
                                            } else {
                                                return null;
                                            }
                                        })
                                    )}
                                </MenuList>
                            </Menu>
                        </div>
                        <Typography
                            variant="h6"
                            color="blue-gray"
                            className="-mb-3"
                        >
                            Role
                        </Typography>
                        <div className="relative flex w-full max-w-[24rem]">
                            <Menu placement="bottom-start">
                                <MenuHandler>
                                    <Button
                                        ripple={false}
                                        variant="text"
                                        color="blue-gray"
                                        className="relative flex h-10 w-full items-center gap-2 border-blue-gray-200 bg-blue-gray-500/10 pl-3"
                                    >
                                        {selectedRole.name || ""}
                                        <ChevronDownIcon className="absolute w-4 h-4 right-3" />
                                    </Button>
                                </MenuHandler>
                                <MenuList className="max-h-[20rem] max-w-[18rem]">
                                    {roles.map(({ name }, index) => {
                                        return (
                                            <MenuItem
                                                key={index}
                                                value={name}
                                                className="flex items-center gap-2"
                                                onClick={() =>
                                                    setSelectedRole(
                                                        roles[index]
                                                    )
                                                }
                                            >
                                                {name}
                                            </MenuItem>
                                        );
                                    })}
                                </MenuList>
                            </Menu>
                            {/* <Input
                                placeholder="John Doe"
                                className="rounded-l-none !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className:
                                        "before:content-none after:content-none",
                                }}
                                containerProps={{
                                    className: "min-w-0",
                                }}
                            /> */}
                        </div>
                        <Typography
                            variant="h6"
                            color="blue-gray"
                            className="-mb-3"
                        >
                            Evaluator
                        </Typography>
                        <div className="relative flex w-full max-w-[24rem]">
                            <Menu placement="bottom-start">
                                <MenuHandler>
                                    <Button
                                        ripple={false}
                                        variant="text"
                                        color="blue-gray"
                                        className="relative flex h-10 w-full items-center gap-2 border-blue-gray-200 bg-blue-gray-500/10 pl-3"
                                        disabled={selectedRole.name === ""}
                                    >
                                        {selectedEvaluator.name || ""}
                                        <ChevronDownIcon className="absolute w-4 h-4 right-3" />
                                    </Button>
                                </MenuHandler>
                                <MenuList className="max-h-[20rem] max-w-[18rem]">
                                    {selectedRole.name === "Panelist" ? (
                                        PANELISTS.length === 0 ||
                                        PANELISTS.every(
                                            (evaluator) =>
                                                evaluator.available === false
                                        ) ? (
                                            <MenuItem
                                                className="flex items-center gap-2"
                                                disabled={true}
                                            >
                                                No available panelist.
                                            </MenuItem>
                                        ) : (
                                            PANELISTS.map(
                                                (evaluator, index) => {
                                                    //   if (evaluator.isAvailable) {
                                                    return evaluator.available ? (
                                                        <MenuItem
                                                            key={index}
                                                            value={
                                                                evaluator.name
                                                            }
                                                            className="flex items-center gap-2"
                                                            onClick={() =>
                                                                setSelectedEvaluator(
                                                                    evaluator
                                                                )
                                                            }
                                                        >
                                                            {evaluator.name}
                                                        </MenuItem>
                                                    ) : null;
                                                    //   }
                                                }
                                            )
                                        )
                                    ) : selectedRole.name === "Judge" ? (
                                        JUDGES.length === 0 ||
                                        JUDGES.every(
                                            (evaluator) =>
                                                evaluator.available === false
                                        ) ? (
                                            <MenuItem
                                                className="flex items-center gap-2"
                                                disabled={true}
                                            >
                                                No available judge.
                                            </MenuItem>
                                        ) : (
                                            JUDGES.map((evaluator, index) => {
                                                //   if (evaluator.isAvailable) {
                                                return evaluator.available ? (
                                                    <MenuItem
                                                        key={index}
                                                        value={evaluator.name}
                                                        className="flex items-center gap-2"
                                                        onClick={() =>
                                                            setSelectedEvaluator(
                                                                evaluator
                                                            )
                                                        }
                                                    >
                                                        {evaluator.name}
                                                    </MenuItem>
                                                ) : null;
                                                //   }
                                            })
                                        )
                                    ) : (
                                        <MenuItem
                                            className="flex items-center gap-2"
                                            disabled={true}
                                        >
                                            Select a role.
                                        </MenuItem>
                                    )}
                                </MenuList>
                            </Menu>
                        </div>
                        <Typography
                            variant="h6"
                            color="blue-gray"
                            className="-mb-3"
                        >
                            Email
                        </Typography>
                        <Input
                            placeholder="name@mail.com"
                            disabled
                            value={selectedEvaluator.email || ""}
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                                className:
                                    "before:content-none after:content-none",
                            }}
                            containerProps={{
                                className: "min-w-0",
                            }}
                        />
                    </div>
                    <Button
                        className="mt-6"
                        fullWidth
                        onClick={handleSubmit}
                        disabled={
                            selectedEvaluator.name === "" ||
                            selectedHackathon.name === "" ||
                            selectedRole.name === ""
                        }
                    >
                        Assign{" " + selectedRole.name}
                    </Button>
                </form>
            </Card>
        </div>
    );
};

export default EvaluatorAssign;
