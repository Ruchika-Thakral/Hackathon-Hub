import React, { useEffect } from "react";

import { Card, Typography, Chip, Button } from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import { fetchHackathons } from "../features/hackathon/hackathonSlice";

const TABLE_HEAD = [
    "Hackathon",
    "Theme",
    "Panelists",
    "Judges",
    "Status",
    "Actions",
];

const ListHackathon = () => {
    const data=useSelector(state=>state.hackathon.hackathons.data)
    let HACKATHONS=data?data:[]

    return (
        <div className="container my-2 mx-auto px-1 flex justify-center">
            <Card className="h-full w-full mx-2">
                <table className="w-full min-w-max table-auto text-left">
                    <thead>
                        <tr>
                            {TABLE_HEAD.map((head) => (
                                <th
                                    key={head}
                                    className={
                                        head === "Theme" ||
                                        head === "Panelists" ||
                                        head === "Judges" ||
                                        head === "Actions"
                                            ? "border-b border-blue-gray-100 bg-blue-gray-50 p-4 hidden lg:table-cell"
                                            : "border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                                    }
                                >
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal leading-none opacity-70"
                                    >
                                        {head}
                                    </Typography>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {HACKATHONS.map((hackathon, index) => {
                            const isLast = index === HACKATHONS.length - 1;
                            const classes = isLast
                                ? "p-4"
                                : "p-4 border-b border-blue-gray-50";

                            const status = "";

                            return (
                                <tr key={hackathon.name}>
                                    <td className="p-4">
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal"
                                        >
                                            {hackathon.name}
                                        </Typography>
                                    </td>
                                    <td className="p-4 hidden lg:table-cell">
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal"
                                        >
                                            {hackathon.theme}
                                        </Typography>
                                    </td>
                                    <td className="p-4 hidden lg:table-cell">
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal"
                                        >
                                        </Typography>
                                    </td>
                                    <td className="p-4 hidden lg:table-cell">
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal"
                                        >
                                        </Typography>
                                    </td>
                                    <td className="p-4">
                                        {/* <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal"
                                        > */}
                                        <Chip
                                            variant="ghost"
                                            color="green"
                                            size="sm"
                                            value={status}
                                            className="ml-0 mr-auto block w-24 text-center rounded-full"
                                        />
                                        {/* </Typography> */}
                                    </td>
                                    <td className="p-4 hidden lg:table-cell">
                                        <Button
                                            className="flex items-center gap-3"
                                            size="sm"
                                            // onClick={handleAssignMembers}
                                        >
                                            {/* <PencilIcon className="h-4 w-4" /> */}
                                            End
                                        </Button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </Card>
        </div>
    );
};

export default ListHackathon;
