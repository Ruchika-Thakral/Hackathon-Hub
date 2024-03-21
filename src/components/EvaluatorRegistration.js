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

import { useDispatch } from "react-redux";


import { ChevronDownIcon } from "@heroicons/react/24/outline";

import React, { useEffect, useState } from "react";

import { registerEvaluator, fetchEvaluators } from "../features/evaluator/evaluatorSlice";
import { fetchHackathons } from "../features/hackathon/hackathonSlice";

const EvaluatorRegistration = () => {
    const roles = [
        { name: "Panelist", value: "panelist" },
        { name: "Judge", value: "judge" },
    ];
    const [selectedRoleIndex, setSelectedRoleIndex] = React.useState(0);
    const selectedRole = roles[selectedRoleIndex];

    const dispatch = useDispatch();
    // const [selectedTheme, setSelectedTheme] = useState({ name: "" });


    const [evaluatorData, setEvaluatorData] = useState({role: roles[selectedRoleIndex].value});
    const handleChange = (e) => {
        const { name, value } = e.target;
        setEvaluatorData((prevstate) => ({ ...prevstate, [name]: value }));
    };

    useEffect(()=>{
        dispatch(fetchEvaluators())
        dispatch(fetchHackathons())
    },[dispatch])

    const handleSubmit = () => {
        console.log(evaluatorData);
        
        setEvaluatorData({role: roles[selectedRoleIndex].value})
        dispatch(registerEvaluator(evaluatorData));
    };

    return (
        <div className="container my-2 mx-auto px-1 flex justify-center">
            <Card
                className="flex-intial w-full px-4 py-2"
                color="white"
                shadow={true}
            >
                <Typography variant="h4" color="blue-gray">
                    Evaluator Registration
                </Typography>
                <Typography color="gray" className="mt-1 font-normal">
                    Welcome! Enter the details to register.
                </Typography>
                <form className="mt-4 mb-2">
                    <div className="mb-1 flex flex-col gap-6">
                        <Typography
                            variant="h6"
                            color="blue-gray"
                            className="-mb-5"
                        >
                            Name
                        </Typography>
                        <div className="relative flex w-full max-w-[24rem]">
                            <Menu placement="bottom-start">
                                <MenuHandler>
                                    <Button
                                        ripple={false}
                                        variant="text"
                                        color="blue-gray"
                                        className="relative flex h-10 justify-between gap-2 rounded-r-none border border-r-0 border-blue-gray-200 bg-blue-gray-500/10 pl-3"
                                    >
                                        {selectedRole.name}&nbsp;&nbsp;
                                        <ChevronDownIcon className="absolute w-4 h-4 right-2" />
                                    </Button>
                                </MenuHandler>
                                <MenuList className="max-h-[20rem] max-w-[18rem]">
                                    {roles.map((item, index) => {
                                        return (
                                            <MenuItem
                                                key={index}
                                                value={item.name}
                                                className="flex items-center gap-2"
                                                onClick={() => {
                                                    setSelectedRoleIndex(index);
                                                    setEvaluatorData({
                                                        ...evaluatorData,
                                                        role: item.value,
                                                    });
                                                }}
                                            >
                                                {item.name}
                                            </MenuItem>
                                        );
                                    })}
                                </MenuList>
                            </Menu>
                            <Input
                                placeholder="John Doe"
                                className="rounded-l-none !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className:
                                        "before:content-none after:content-none",
                                }}
                                containerProps={
                                    {
                                        // className: "min-w-0",
                                    }
                                }
                                value={evaluatorData?.name || ""}
                                name="name"
                                onChange={handleChange}
                            />
                        </div>
                        <Typography
                            variant="h6"
                            color="blue-gray"
                            className="-mb-5"
                        >
                            Email
                        </Typography>
                        <Input
                            placeholder="name@mail.com"
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                                className:
                                    "before:content-none after:content-none",
                            }}
                            containerProps={{
                                className: "min-w-0",
                            }}
                            value={evaluatorData?.email || ""}
                            name="email"
                            onChange={handleChange}
                        />
                    </div>
                    <Button className="mt-6" fullWidth onClick={handleSubmit}>
                        Create{" " + selectedRole.name}
                    </Button>
                </form>
            </Card>
        </div>
    );
};

export default EvaluatorRegistration;
