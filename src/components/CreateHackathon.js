import React, { useState } from "react";
import { UseDispatch, useDispatch } from "react-redux";
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
    Textarea,
} from "@material-tailwind/react";

import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { hackathonCreation } from "../features/hackathon/hackathonSlice";

const CreateHackathon = () => {
    const themes = [
        { name: "Life Sciences" },
        { name: "Banking and Wealth" },
        { name: "Telecom" },
        { name: "Product Engineering" },
    ];

    const dispatch = useDispatch();
    // const [selectedTheme, setSelectedTheme] = useState({ name: "" });

    const [formData, setFormData] = useState({});
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevstate) => ({ ...prevstate, [name]: value }));
    };

    const handleSubmit = () => {
        console.log(formData);
        dispatch(hackathonCreation(formData));
    };

    return (
        <div className="container my-2 mx-auto px-2 lg:px-4 flex justify-center">
            <Card
                className="flex-intial w-full lg:mx-2 px-4 py-4"
                color="white"
                shadow={true}
            >
                <Typography
                    variant="h4"
                    color="blue-gray"
                    className="md:text-center text-left"
                >
                    Create Hackathon
                </Typography>
                <Typography
                    color="gray"
                    className="mt-1 font-normal md:text-center text-left"
                >
                    Welcome! Create a new hackathon here.
                </Typography>
                <form className="mt-3 mb-2 md:mb-6 md:px-8 xl:px-16">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-y-4 gap-x-8">
                        {/* <div className="mb-1 flex flex-col gap-4"> */}
                        <div className="flex flex-col gap-4">
                            <Typography
                                variant="h6"
                                color="blue-gray"
                                className="-mb-3"
                            >
                                Hackathon Name
                            </Typography>
                            <Input
                                placeholder="HackPhoenix"
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "hidden",
                                }}
                                containerProps={{
                                    className: "min-w-0",
                                }}
                                name="name"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="flex flex-col gap-4">
                            <Typography
                                variant="h6"
                                color="blue-gray"
                                className="-mb-3"
                            >
                                Theme
                            </Typography>
                            <div className="relative flex w-full max-w-[24rem]">
                                <Menu placement="bottom-start">
                                    <MenuHandler>
                                        <Button
                                            ripple={false}
                                            variant="text"
                                            color="blue-gray"
                                            className="relative flex h-10 w-full justify-between gap-2 border border-blue-gray-200 bg-blue-gray-500/10 pl-3 pr-2"
                                        >
                                            {formData?.theme}
                                            <ChevronDownIcon className="absolute w-4 h-4 right-2" />
                                        </Button>
                                    </MenuHandler>
                                    <MenuList className="max-h-[20rem] max-w-[18rem]">
                                        {themes.map((theme, index) => {
                                            return (
                                                <MenuItem
                                                    key={index}
                                                    value={theme.name}
                                                    className="flex items-center gap-2"
                                                    onClick={() =>
                                                        // setSelectedTheme(
                                                        //     themes[index]
                                                        // )
                                                        setFormData({
                                                            ...formData,
                                                            theme: themes[index]
                                                                .name,
                                                        })
                                                    }
                                                >
                                                    {theme.name}
                                                </MenuItem>
                                            );
                                        })}
                                    </MenuList>
                                </Menu>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4">
                            <Typography
                                variant="h6"
                                color="blue-gray"
                                className="-mb-3"
                            >
                                Start
                            </Typography>
                            <Input
                                type="datetime-local"
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                // style={{ minWidth: "unset" }}
                                labelProps={{
                                    className: "hidden",
                                }}
                                containerProps={{
                                    className: "min-w-0",
                                }}
                                step={1}
                                name="startDate"
                                onChange={handleChange}
                            />
                        </div>

                        <div className="flex flex-col gap-4">
                            <Typography
                                variant="h6"
                                color="blue-gray"
                                className="-mb-3"
                            >
                                Idea Deadline
                            </Typography>
                            <Input
                                type="datetime-local"
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                // style={{ minWidth: "unset" }}
                                labelProps={{
                                    className: "hidden",
                                }}
                                containerProps={{
                                    className: "min-w-0",
                                }}
                                
                                step={1}
                                name="ideaSubmissionDeadLine"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="flex flex-col gap-4">
                            <Typography
                                variant="h6"
                                color="blue-gray"
                                className="-mb-3"
                            >
                                Shortlist Deadline
                            </Typography>
                            <Input
                                type="datetime-local"
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                // style={{ minWidth: "unset" }}
                                labelProps={{
                                    className: "hidden",
                                }}
                                containerProps={{
                                    className: "min-w-0",
                                }}
                                
                                step={1}
                                name="shortListDeadLine"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="flex flex-col gap-4">
                            <Typography
                                variant="h6"
                                color="blue-gray"
                                className="-mb-3"
                            >
                                Implementation Deadline
                            </Typography>
                            <Input
                                type="datetime-local"
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                // style={{ minWidth: "unset" }}
                                labelProps={{
                                    className: "hidden",
                                }}
                                containerProps={{
                                    className: "min-w-0",
                                }}
                                
                                step={1}
                                name="implementationDeadLine"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="flex flex-col gap-4">
                            <Typography
                                variant="h6"
                                color="blue-gray"
                                className="-mb-3"
                            >
                                Review Start
                            </Typography>
                            <Input
                                type="datetime-local"
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                // style={{ minWidth: "unset" }}
                                labelProps={{
                                    className: "hidden",
                                }}
                                containerProps={{
                                    className: "min-w-0",
                                }}
                                
                                step={1}
                                name="reviewStartTime"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="flex flex-col gap-4">
                            <Typography
                                variant="h6"
                                color="blue-gray"
                                className="-mb-3"
                            >
                                Review Deadline
                            </Typography>
                            <Input
                                type="datetime-local"
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                // style={{ minWidth: "unset" }}
                                labelProps={{
                                    className: "hidden",
                                }}
                                containerProps={{
                                    className: "min-w-0",
                                }}
                                
                                step={1}
                                name="reviewEndTime"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="flex flex-col gap-4 md:col-span-2">
                            <Typography
                                variant="h6"
                                color="blue-gray"
                                className="-mb-3"
                            >
                                Description
                            </Typography>
                            <Textarea
                                placeholder="Description"
                                className="px-2 !border-t-blue-gray-200 focus:!border-t-gray-900"
                                // style={{ minWidth: "unset" }}
                                labelProps={{
                                    className: "hidden",
                                }}
                                containerProps={{
                                    className: "min-w-0",
                                }}
                                
                                name="description"
                                value={formData?.description}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="flex flex-col gap-4 md:col-span-2">
                            <Typography
                                variant="h6"
                                color="blue-gray"
                                className="-mb-3"
                            >
                                Guidelines
                            </Typography>
                            <Textarea
                                placeholder="Guidelines"
                                className="px-2 !border-t-blue-gray-200 focus:!border-t-gray-900"
                                // style={{ minWidth: "unset" }}
                                labelProps={{
                                    className: "hidden",
                                }}
                                containerProps={{
                                    className: "min-w-0",
                                }}
                                name="rules"
                                value={formData?.rules}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="flex flex-col gap-4 md:col-span-2">
                            <Typography
                                variant="h6"
                                color="blue-gray"
                                className="-mb-3"
                            >
                                Prizes
                            </Typography>
                            <Textarea
                                placeholder="Prizes"
                                className="px-2 !border-t-blue-gray-200 focus:!border-t-gray-900"
                                // style={{ minWidth: "unset" }}
                                labelProps={{
                                    className: "hidden",
                                }}
                                containerProps={{
                                    className: "min-w-0",
                                }}
                                name="prizes"
                                value={formData?.prizes}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="flex flex-col gap-4 md:col-span-2">
                            <Typography
                                variant="h6"
                                color="blue-gray"
                                className="-mb-3"
                            >
                                Judging Criteria
                            </Typography>
                            <Textarea
                                placeholder="Judging Criteria"
                                className="px-2 !border-t-blue-gray-200 focus:!border-t-gray-900"
                                // style={{ minWidth: "unset" }}
                                labelProps={{
                                    className: "hidden",
                                }}
                                containerProps={{
                                    className: "min-w-0",
                                }}
                                name="judging_criteria"
                                value={formData?.judgingCriteria}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <Button className="mt-6" onClick={handleSubmit} fullWidth>
                        Create Hackathon
                    </Button>
                </form>
            </Card>
        </div>
    );
};

export default CreateHackathon;
