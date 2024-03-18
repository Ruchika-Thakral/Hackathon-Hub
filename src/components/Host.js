import React from "react";
import {
    Card,
    CardBody,
    Input,
    Typography,
    Button,
    Textarea,
} from "@material-tailwind/react";

const DualFormCard = () => {
    return (
        <div className="w-full bg-gradient-to-t md:bg-gradient-to-r from-incedo-secondary-100/50 to-incedo-primary-100/50">
            <Card color="transparent" shadow={false} className="mx-0 md:mx-4">
                <CardBody className="flex py-4 px-1 md:p-4">
                    {/* Left half with small form */}
                    {/* <div className="w-1/2 h-full p-4">
                        <Card className="h-full">
                            <CardBody>
                                <form>
                                    <input
                                        type="text"
                                        placeholder="Small Form Field 1"
                                        className="mb-4 w-full p-2 rounded border border-gray-300"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Small Form Field 2"
                                        className="mb-4 w-full p-2 rounded border border-gray-300"
                                    />
                                </form>
                            </CardBody>
                        </Card>
                    </div> */}

                    <div className="hidden w-1/2 p-4 md:flex justify-start items-center flex-wrap gap-y-1">
                        <div>
                            <Typography
                                variant="h1"
                                // color="i"
                                className="mb-2 font-semibold flex text-incedo-secondary-600"
                            >
                                Host Your Own
                                <br />
                                Hackathon
                            </Typography>
                            <Typography
                                // variant="h1"
                                // color="i"
                                className="mb-2 font-semibold flex text-incedo-tertiary-900/575"
                            >
                                Explore the benefits of hosting your own
                                hackathon, a platform for collaboration,
                                innovation, and problem-solving.
                            </Typography>
                        </div>
                    </div>

                    {/* Right half with larger form */}
                    <div className="w-full md:w-1/2 p-4 ">
                        <Card shadow={false} className="pt-8">
                            <Typography
                                variant="h2"
                                // color="i"
                                className="mb-2 font-semibold flex justify-center text-incedo-secondary-600"
                            >
                                Contact Us
                            </Typography>
                            <CardBody>
                                <form className="flex flex-col justify-center gap-y-4 md:px-8">
                                    {/* Larger form content */}
                                    {/* For example: */}
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
                                        // type="text"
                                        label="Details"
                                        // placeholder="Enter details on the hackathon"
                                        // labelProps={{
                                        //     className: "hidden",
                                        // }}
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
                            </CardBody>
                        </Card>
                    </div>
                </CardBody>
            </Card>
        </div>
    );
};

export default DualFormCard;
