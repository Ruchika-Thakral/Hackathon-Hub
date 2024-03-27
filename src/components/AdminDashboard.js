import React from "react";
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Avatar,
    Button,
    Chip,
} from "@material-tailwind/react";

const AdminDashboard = () => {

    
    return (
        <div className="container mx-auto px-4 flex justify-center">
            <div className="grid w-full grid-cols-1 gap-y-4 gap-x-2">
                {/* <div> */}
                <div className="max-w-full col-span-1 mx-4 py-6 sm:mx-auto sm:px-6 lg:px-8">
                    {/* <div className="sm:flex space-x-0 sm:space-x-4"> */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-3 gap-x-3">
                        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow transform transition-all w-full">
                            <div className="bg-white p-5">
                                <div className="sm:flex sm:items-start">
                                    <div className="text-center sm:mt-0 sm:ml-2 sm:text-left">
                                        <h3 className="text-sm leading-6 font-medium text-gray-400">
                                            Total Users
                                        </h3>
                                        <p className="text-3xl font-bold text-black">
                                            71,897
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow transform transition-all w-full">
                            <div className="bg-white p-5">
                                <div className="sm:flex sm:items-start">
                                    <div className="text-center sm:mt-0 sm:ml-2 sm:text-left">
                                        <h3 className="text-sm leading-6 font-medium text-gray-400">
                                            Panelists
                                        </h3>
                                        <p className="text-3xl font-bold text-black">
                                            398
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow transform transition-all w-full">
                            <div className="bg-white p-5">
                                <div className="sm:flex sm:items-start">
                                    <div className="text-center sm:mt-0 sm:ml-2 sm:text-left">
                                        <h3 className="text-sm leading-6 font-medium text-gray-400">
                                            Judges
                                        </h3>
                                        <p className="text-3xl font-bold text-black">
                                            209
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow transform transition-allw-full">
                            <div className="bg-white p-5">
                                <div className="sm:flex sm:items-start">
                                    <div className="text-center sm:mt-0 sm:ml-2 sm:text-left">
                                        <h3 className="text-sm leading-6 font-medium text-gray-400">
                                            Active Hackathons
                                        </h3>
                                        <p className="text-3xl font-bold text-black">
                                            29
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <Typography variant="h4" color="blue-gray">
                        Ongoing Hackathons
                    </Typography>
                    <hr className="h-px my-2 bg-gray-300 border-0 dark:bg-gray-900" />
                    <div className="grid my-2 mx-auto px-2 grid-cols-1 lg:grid-cols-2 gap-y-3 gap-x-3">
                        {HACKATHONS.map((hackathon) => {
                            const currTime = new Date();
                            const reviewEndTime = new Date(
                                hackathon.reviewEndTime
                            );
                            const startDate = new Date(hackathon.startDate);
                            const disabledStatus =
                                currTime >= reviewEndTime ? false : true;
                            return !hackathon.isAvailable ? (
                                <Card
                                    // color="transparent"
                                    // shadow={false}
                                    className="w-full cols px-4 pt-3 mt-1"
                                >
                                    <CardHeader
                                        color="transparent"
                                        floated={false}
                                        shadow={false}
                                        className="mx-0 rounded-none flex items-center align-top gap-4 pt-0 pb-8"
                                    >
                                        <Avatar
                                            size="xl"
                                            variant="square"
                                            src="https://picsum.photos/200/200/?blur=2"
                                            alt="tania andrew"
                                        />
                                        <div className="flex w-full flex-col gap-0.5">
                                            <div className="flex items-center justify-between">
                                                <div>
                                                    <Typography
                                                        variant="h5"
                                                        color="blue-gray"
                                                    >
                                                        {hackathon.name}
                                                    </Typography>
                                                    <Typography color="blue-gray">
                                                        {hackathon.theme}
                                                    </Typography>
                                                </div>
                                                <div className="flex items-center gap-0">
                                                    <Button
                                                        size="sm"
                                                        disabled={
                                                            disabledStatus
                                                        }
                                                        className="hidden lg:block"
                                                    >
                                                        End
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </CardHeader>
                                    <CardBody className="flex justify-between mb-6 p-0">
                                        <div className="flex justify-between">
                                            <Chip
                                                variant="ghost"
                                                color="green"
                                                size="sm"
                                                value={`Submissions: ${hackathon.totalSubmissions}`}
                                                className="mx-auto hidden lg:block text-center"
                                            />
                                            <Chip
                                                variant="ghost"
                                                color="green"
                                                size="sm"
                                                value={`Panelist: ${hackathon.panelists.length}`}
                                                className="mx-auto hidden lg:block text-center"
                                            />
                                            <Chip
                                                variant="ghost"
                                                color="green"
                                                size="sm"
                                                value={`Judges: ${hackathon.judges.length}`}
                                                className="mx-auto hidden lg:block text-center"
                                            />
                                            <Chip
                                                variant="ghost"
                                                color="green"
                                                size="sm"
                                                value={`Review End: ${reviewEndTime.toLocaleString(
                                                    "en-IN",
                                                    { hour12: false }
                                                )}`}
                                                className="mx-auto block text-center"
                                            />
                                        </div>
                                        <Button
                                            size="sm"
                                            disabled={disabledStatus}
                                            className="lg:hidden block"
                                        >
                                            End
                                        </Button>
                                    </CardBody>
                                </Card>
                            ) : null;
                        })}
                        {/* <Card
                            // color="transparent"
                            // shadow={false}
                            className="w-full cols px-4 pt-3 mt-1"
                        >
                            <CardHeader
                                color="transparent"
                                floated={false}
                                shadow={false}
                                className="mx-0 rounded-none flex items-center align-top gap-4 pt-0 pb-8"
                            >
                                <Avatar
                                    size="xl"
                                    variant="square"
                                    src="https://picsum.photos/200/200/?blur=2"
                                    alt="tania andrew"
                                />
                                <div className="flex w-full flex-col gap-0.5">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <Typography
                                                variant="h5"
                                                color="blue-gray"
                                            >
                                                Tania Andrew
                                            </Typography>
                                            <Typography color="blue-gray">
                                                Frontend Lead @ Google
                                            </Typography>
                                        </div>
                                        <div className="flex items-center gap-0">
                                            <Button size="sm">End</Button>
                                        </div>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardBody className="flex justify-between mb-6 p-0">
                                <Chip
                                    variant="ghost"
                                    color="green"
                                    size="sm"
                                    value={`Start : 11.02.2024 11:04`}
                                    className="mx-auto block text-center"
                                />
                                <Chip
                                    variant="ghost"
                                    color="green"
                                    size="sm"
                                    value={"Review End: 36"}
                                    className="mx-auto block text-center"
                                />
                                <Chip
                                    variant="ghost"
                                    color="green"
                                    size="sm"
                                    value={"Submissions: 36"}
                                    className="mx-auto block text-center"
                                />
                            </CardBody>
                        </Card> */}
                    </div>
                </div>
            </div>
            {/* </div> */}
        </div>
    );
};

export default AdminDashboard;
