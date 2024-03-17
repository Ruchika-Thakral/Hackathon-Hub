import React from "react";
import {
    Card,
    CardBody,
    Input,
    Typography,
    Button,
    Textarea,
} from "@material-tailwind/react";

const Categories = () => {
    const themes = [
        { name: "Life Sciences" },
        { name: "Banking and Wealth" },
        { name: "Telecom" },
        { name: "Product Engineering" },
    ];

    return (
        <div className="w-full bg-gradient-to-t md:bg-gradient-to-r from-incedo-secondary-100/50 to-incedo-primary-100/50">
            <Card color="transparent" shadow={false} className=" mx-4">
                <CardBody className="flex p-1 md:p-4">
                    <div className="w-1/2 p-4 hidden md:flex justify-start items-center flex-wrap gap-y-1">
                        <div>
                            <Typography
                                variant="h1"
                                // color="i"
                                className="mb-2 font-semibold flex text-incedo-secondary-600"
                            >
                                Explore
                                <br />
                                Hackathons
                            </Typography>
                            <Typography
                                // variant="h1"
                                // color="i"
                                className="mb-2 font-semibold flex text-incedo-tertiary-900/575 pr-8 text-pretty"
                            >
                                Dive into the world of hackathons, where
                                creativity meets innovation, and opportunities
                                abound for collaboration and skill-building.
                            </Typography>
                        </div>
                    </div>

                    {/* Right half with larger form */}
                    <div className="w-full md:w-1/2 py-4 px-2 md:p-4 ">
                        <Card
                            shadow={false}
                            color="transparent"
                            className="h-full"
                        >
                            <Typography
                                variant="h3"
                                // color="i"
                                className="mb-4 font-semibold flex md:hidden self-center text-incedo-secondary-600 text-center"
                            >
                                Explore
                                Hackathons
                            </Typography>
                            <div className="grid grid-cols-1 md:grid-cols-2 h-full gap-x-4 gap-y-4">
                                <Card className="h-24 md:h-40 bg-gradient-to-r from-indigo-500 to-blue-500  px-4  py-2 flex align-middle justify-center">
                                    <Typography
                                        variant="h4"
                                        className="mb-2 font-semibold text-white flex justify-center text-center"
                                    >
                                        {themes[0].name}
                                    </Typography>
                                </Card>

                                <Card className="h-24 md:h-40 bg-gradient-to-r from-blue-800 to-indigo-900 py-2 px-4 flex align-middle justify-center">
                                    <Typography
                                        variant="h4"
                                        className="mb-2 font-semibold text-white flex justify-center text-center"
                                    >
                                        {themes[1].name}
                                    </Typography>
                                </Card>

                                <Card className="h-24 md:h-40 bg-gradient-to-r from-deep-purple-300 to-purple-500 px-4 py-2 flex align-middle justify-center">
                                    <Typography
                                        variant="h4"
                                        className="mb-2 font-semibold text-white flex justify-center text-center"
                                    >
                                        {themes[2].name}
                                    </Typography>
                                </Card>

                                <Card className="h-24 md:h-40 bg-gradient-to-r from-red-400 to-red-500 flex py-2 px-4 align-middle justify-center">
                                    <Typography
                                        variant="h4"
                                        className="mb-2 font-semibold text-white flex justify-center text-center"
                                    >
                                        {themes[3].name}
                                    </Typography>
                                </Card>
                            </div>
                            {/* <CardBody>
                                <form className="flex flex-col gap-y-4">
                                    <Input
                                        type="text"
                                        label="Name"
                                        placeholder="Enter you name"
                                        className="mb-4 w-full p-2 rounded border border-gray-300"
                                    />
                                    <Input
                                        type="email"
                                        label="E-Mail"
                                        placeholder="Enter your E-mail"
                                        className="mb-4 w-full p-2 rounded border border-gray-300"
                                    />
                                    <Textarea
                                        label="Details"
                                        className="mb-2 w-full px-2 rounded border border-gray-300"
                                    />
                                    <Button
                                        className="btn-submit-form w-fit self-center bg-incedo-secondary-900"
                                        type="submit"
                                        style={{ cursor: "pointer" }}
                                    >
                                        Submit
                                    </Button>
                                </form>
                            </CardBody> */}
                        </Card>
                    </div>
                </CardBody>
            </Card>
        </div>
    );
};

export default Categories;
