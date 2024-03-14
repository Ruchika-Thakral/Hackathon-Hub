import React from "react";
import {
    Card,
    CardBody,
    Input,
    Typography,
    Button,
} from "@material-tailwind/react";

const DualFormCard = () => {
    return (
        <Card className="border border-black mt-4 mx-4">
            <CardBody className="flex">
                {/* Left half with small form */}
                <div className="w-1/2 p-4">
                    <Card>
                        <CardBody>
                            {/* <form>
               
                <input type="text" placeholder="Small Form Field 1" className="mb-4 w-full p-2 rounded border border-gray-300" />
                <input type="text" placeholder="Small Form Field 2" className="mb-4 w-full p-2 rounded border border-gray-300" />
              </form> */}
                        </CardBody>
                    </Card>
                </div>

                {/* Right half with larger form */}
                <div className="w-1/2 p-4 ">
                    <Card>
                        <Typography
                            variant="h2"
                            color="blue-gray"
                            className="mb-2 font-medium flex justify-center"
                        >
                            Host your hackathon
                        </Typography>
                        <CardBody>
                            <form className="flex flex-col gap-y-2">
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
                                <Input
                                    type="text"
                                    label="Details"
                                    placeholder="Enter details on the hackathon"
                                    className="mb-4 w-full p-2 rounded border border-gray-300"
                                />
                                <Button
                                    className="btn-submit-form w-fit"
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
    );
};

export default DualFormCard;
