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

import React from "react";

const EvaluatorRegistration = () => {
    const roles = [{ name: "Panelist" }, { name: "Judge" }];
    const [selectedRoleIndex, setSelectedRoleIndex] = React.useState(0);
    const selectedRole = roles[selectedRoleIndex];

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
                                        <ChevronDownIcon className="absolute w-4 h-4 right-2"/>
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
                                                    setSelectedRoleIndex(index)
                                                }
                                            >
                                                {name}
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
                                containerProps={{
                                    // className: "min-w-0",
                                }}
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
                        />
                    </div>
                    <Button className="mt-6" fullWidth>
                        Create{" " + selectedRole.name}
                    </Button>
                </form>
            </Card>
        </div>
    );
};

export default EvaluatorRegistration;
