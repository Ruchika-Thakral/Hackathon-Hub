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
} from "../features/evaluator/evaluatorSlice";
import { fetchHackathons } from "../features/hackathon/hackathonSlice";
import { useDispatch, useSelector } from "react-redux";

// const HACKATHONS = [
//     {
//         hackathonId: 163627,
//         name: "Hackathon1",
//     },
//     {
//         hackathonId: 987654,
//         name: "Hackathon2",
//     },
//     {
//         hackathonId: 345678,
//         name: "Hackathon3",
//     },
//     {
//         hackathonId: 876543,
//         name: "Hackathon4",
//     },
//     {
//         hackathonId: 234567,
//         name: "Hackathon5",
//     },
//     {
//         hackathonId: 765432,
//         name: "Hackathon6",
//     },
// ];

// const PANELISTS = [
//     {
//         name: "John Doe",
//         email: "john.doe@example.com",
//         isAvailable: true,
//         role: "panelist",
//     },
//     {
//         name: "Jane Smith",
//         email: "jane.smith@example.com",
//         isAvailable: false,
//         role: "panelist",
//     },
//     {
//         name: "Alice Johnson",
//         email: "alice.johnson@example.com",
//         isAvailable: true,
//         role: "panelist",
//     },
//     {
//         name: "Michael Brown",
//         email: "michael.brown@example.com",
//         isAvailable: false,
//         role: "panelist",
//     },
//     {
//         name: "Emily Williams",
//         email: "emily.williams@example.com",
//         isAvailable: true,
//         role: "panelist",
//     },
// ];

// const JUDGES = [
//     {
//         name: "David Johnson",
//         email: "david.johnson@example.com",
//         isAvailable: true,
//         role: "judge",
//     },
//     {
//         name: "Sarah Miller",
//         email: "sarah.miller@example.com",
//         isAvailable: false,
//         role: "judge",
//     },
//     {
//         name: "James Anderson",
//         email: "james.anderson@example.com",
//         isAvailable: true,
//         role: "judge",
//     },
//     {
//         name: "Sophia Martinez",
//         email: "sophia.martinez@example.com",
//         isAvailable: false,
//         role: "judge",
//     },
//     {
//         name: "Ethan Wilson",
//         email: "ethan.wilson@example.com",
//         isAvailable: true,
//         role: "judge",
//     },
// ];

const EvaluatorAssign = () => {
    const HACKATHONS =
        useSelector((state) => state.hackathon.hackathons?.data) || [];
    const EVALUATORS =
        useSelector((state) => state.evaluator.evaluators?.data) || [];

    console.log(HACKATHONS);
    console.log(EVALUATORS);
    const [JUDGES, setJUDGES] = useState(
        EVALUATORS.filter((evaluator) => evaluator.role === "judge")
    );

    const [PANELISTS, setPANELISTS] = useState(
        EVALUATORS.filter((evaluator) => evaluator.role === "panelist")
    );

    console.log(JUDGES);
    console.log(PANELISTS);

    useEffect(() => {
        setJUDGES(EVALUATORS.filter((evaluator) => evaluator.role === "judge"));
        setPANELISTS(
            EVALUATORS.filter((evaluator) => evaluator.role === "panelist")
        );
    }, [EVALUATORS]);

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

    useEffect(() => {
        dispatch(fetchEvaluators());
        dispatch(fetchHackathons());
    }, []);

    const handleSubmit = () => {
        const data = {
            hackathonId: selectedHackathon.hackathonId,
            evaluators: [{ userId: "6" }],
        };
        console.log({ data });
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
        dispatch(assignEvaluator(data));
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
                                    {HACKATHONS.map(({ name }, index) => {
                                        return (
                                            <MenuItem
                                                key={index}
                                                value={name}
                                                className="flex items-center gap-2"
                                                onClick={() =>
                                                    setSelectedHackathon(
                                                        HACKATHONS[index]
                                                    )
                                                }
                                            >
                                                {name}
                                            </MenuItem>
                                        );
                                    })}
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
                                    {selectedRole.name === "Panelist"
                                        ? PANELISTS.map((evaluator, index) => {
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
                                        : selectedRole.name === "Judge"
                                        ? JUDGES.map((evaluator, index) => {
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
                                        : null}
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
                    <Button className="mt-6" fullWidth onClick={handleSubmit}>
                        Assign{" " + selectedRole.name}
                    </Button>
                </form>
            </Card>
        </div>
    );
};

export default EvaluatorAssign;
