import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
    Card,
    Input,
    Button,
    Typography,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Textarea,
} from "@material-tailwind/react";

import { ChevronDownIcon } from "@heroicons/react/24/outline";
import {
    fetchHackathons,
    hackathonCreation,
} from "../features/hackathon/hackathonSlice";
import { Slide, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CreateHackathon = () => {
    const themes = [
        { name: "Life Sciences" },
        { name: "Banking and Wealth" },
        { name: "Telecom" },
        { name: "Product Engineering" },
    ];
    const dispatch = useDispatch();
    // useEffect(()=>{
    //     dispatch(fetchHackathons())
    // },[dispatch])
    const [formData, setFormData] = useState({
        name: "",
        theme: "",
        startDate: "",
        ideaSubmissionDeadLine: "",
        shortListDeadLine: "",
        implementationDeadLine: "",
        reviewStartTime: "",
        reviewEndTime: "",
        description: "",
        guidelines: "",
        prizes: "",
        judgingCriteria: "",
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevstate) => ({ ...prevstate, [name]: value }));
    };
    const [errors, setErrors] = useState({});
    const handleSubmit = async () => {
        const newErrors = {};
        if (!formData.name) {
            newErrors.name = "Hackathon Name is Required!";
        }
        if (!formData.theme) {
            newErrors.theme = "Theme Is Required";
        }
        if (!formData.startDate) {
            newErrors.startDate = "Start Date is Required!";
        }
        if (!formData.ideaSubmissionDeadLine) {
            newErrors.ideaSubmissionDeadLine =
                "Idea Submission Dead Line is Required!";
        }
        if (!formData.shortListDeadLine) {
            newErrors.shortListDeadLine = "short List Dead Line is Required!";
        }
        if (!formData.implementationDeadLine) {
            newErrors.implementationDeadLine =
                "Implementation Dead Line is Required!";
        }
        if (!formData.reviewStartTime) {
            newErrors.reviewStartTime = "Review Start Time is Required!";
        }
        if (!formData.reviewEndTime) {
            newErrors.reviewEndTime = "Review End Time is Required!";
        }
        if (!formData.description) {
            newErrors.description = "Description is Required!";
        }
        if (!formData.guidelines) {
            newErrors.guidelines = "GuideLines Are Required!";
        }
        if (!formData.prizes) {
            newErrors.prizes = "Prizes Are Required!";
        }
        if (!formData.judgingCriteria) {
            newErrors.judgingCriteria = "Judging Criteria Is Required";
        }
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            try {
                await dispatch(hackathonCreation(formData)).unwrap();
                setFormData({
                    name: "",
                    theme: "",
                    startDate: "",
                    ideaSubmissionDeadLine: "",
                    shortListDeadLine: "",
                    implementationDeadLine: "",
                    reviewStartTime: "",
                    reviewEndTime: "",
                    description: "",
                    guidelines: "",
                    prizes: "",
                    judgingCriteria: "",
                });
                toast.success("Hackathon successfully created!");
                // try {
                    await dispatch(fetchHackathons()).unwrap();
                // } catch (error) {
                //     toast.error(`Error: ${error?.message}`);
                // }
            } catch (error) {
                toast.error(`Error: ${error?.message}`);
            }
        }

        setErrors(newErrors);
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
                                value={formData.name}
                                name="name"
                                onChange={handleChange}
                            />
                            {errors.name && (
                                <Typography className="text-red-500 text-xs w-fit">
                                    {errors.name}
                                </Typography>
                            )}
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
                            {errors.theme && (
                                <Typography className="text-red-500 text-xs w-fit">
                                    {errors.theme}
                                </Typography>
                            )}
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
                                value={formData.startDate}
                                name="startDate"
                                onChange={handleChange}
                            />
                            {errors.startDate && (
                                <Typography className="text-red-500 text-xs w-fit">
                                    {errors.startDate}
                                </Typography>
                            )}
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
                                value={formData.ideaSubmissionDeadLine}
                                name="ideaSubmissionDeadLine"
                                onChange={handleChange}
                            />
                            {errors.ideaSubmissionDeadLine && (
                                <Typography className="text-red-500 text-xs w-fit">
                                    {errors.ideaSubmissionDeadLine}
                                </Typography>
                            )}
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
                                value={formData.shortListDeadLine}
                                onChange={handleChange}
                            />
                            {errors.shortListDeadLine && (
                                <Typography className="text-red-500 text-xs w-fit">
                                    {errors.shortListDeadLine}
                                </Typography>
                            )}
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
                                value={formData.implementationDeadLine}
                                name="implementationDeadLine"
                                onChange={handleChange}
                            />
                            {errors.implementationDeadLine && (
                                <Typography className="text-red-500 text-xs w-fit">
                                    {errors.implementationDeadLine}
                                </Typography>
                            )}
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
                                value={formData.reviewStartTime}
                                name="reviewStartTime"
                                onChange={handleChange}
                            />
                            {errors.reviewStartTime && (
                                <Typography className="text-red-500 text-xs w-fit">
                                    {errors.reviewStartTime}
                                </Typography>
                            )}
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
                                value={formData.reviewEndTime}
                                name="reviewEndTime"
                                onChange={handleChange}
                            />
                            {errors.reviewEndTime && (
                                <Typography className="text-red-500 text-xs w-fit">
                                    {errors.reviewEndTime}
                                </Typography>
                            )}
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
                            {errors.description && (
                                <Typography className="text-red-500 text-xs w-fit">
                                    {errors.description}
                                </Typography>
                            )}
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
                                name="guidelines"
                                value={formData?.guidelines}
                                onChange={handleChange}
                            />
                            {errors.guidelines && (
                                <Typography className="text-red-500 text-xs w-fit">
                                    {errors.guidelines}
                                </Typography>
                            )}
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
                            {errors.prizes && (
                                <Typography className="text-red-500 text-xs w-fit">
                                    {errors.prizes}
                                </Typography>
                            )}
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
                                name="judgingCriteria"
                                value={formData?.judgingCriteria}
                                onChange={handleChange}
                            />
                            {errors.judgingCriteria && (
                                <Typography className="text-red-500 text-xs w-fit">
                                    {errors.judgingCriteria}
                                </Typography>
                            )}
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
