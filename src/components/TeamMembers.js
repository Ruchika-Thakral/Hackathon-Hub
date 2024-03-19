import React, { useState } from "react";
import {
    List,
    ListItem,
    ListItemPrefix,
    Avatar,
    Card,
    Typography,
    CardHeader,
    CardBody,
    Input,
    Textarea,
    IconButton,
    Button,
} from "@material-tailwind/react";

import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
} from "@material-tailwind/react";

import { ChevronDownIcon } from "@heroicons/react/24/outline";

const TEAM_MEMBERS = [
    { name: "Rohith", email: "rohith@gmail.com" },
    { name: "Bhavaneshwar", email: "bhuvaneshwar@gmail.com" },
    { name: "Ankit", email: "ankitbahnja99@gmail.com" },
    { name: "Ankit", email: "ankitbahnja99@gmail.com" },
];

const TeamMembers = () => {
    return (
        <Card className="w-full mb-4">
            <CardHeader floated={false} shadow={false}>
                <Typography variant="h4">Team Members</Typography>
            </CardHeader>
            <CardBody className="p-4 py-2">
                <List className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {TEAM_MEMBERS.map((member) => {
                        return (
                            <ListItem>
                                <ListItemPrefix>
                                    <Avatar
                                        variant="circular"
                                        alt="candice"
                                        src="https://avatar.iran.liara.run/public"
                                    />
                                </ListItemPrefix>
                                <div>
                                    <Typography variant="h6" color="blue-gray">
                                        {member.name}
                                    </Typography>
                                    <Typography
                                        variant="small"
                                        color="gray"
                                        className="font-normal"
                                    >
                                        {member.email}
                                    </Typography>
                                </div>
                            </ListItem>
                        );
                    })}
                </List>
            </CardBody>
        </Card>
    );
};

export default TeamMembers;
