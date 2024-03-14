import React from "react";
import { Button, Typography } from "@material-tailwind/react";
import { useContext } from "react";
import { CreateContext } from "../App";
import TeamRegistration from "./TeamRegistration";
import { useState } from "react";

const HackathonDetails = () => {
    const { details } = useContext(CreateContext);
    const [open, setOpen] = useState(false);
    return (
        <div className="mx-2 w-2/3">
            <Typography className="w-fit mx-auto" variant="h2" color="black">
                {details.name}
            </Typography>
            <div className="w-full border border-black mt-1 rounded-2xl p-2">
                <Typography variant="h4" color="black">
                    Event Name
                </Typography>
                <Typography variant="h4" color="black">
                    Date
                </Typography>
                <Typography variant="h4" color="black">
                    Time
                </Typography>
                <Typography variant="h4" color="black">
                    Description
                </Typography>
            </div>
            <div className="w-full h-48 border border-black mt-1 rounded-2xl p-2">
                <Typography variant="h4" color="black">
                    Schedule
                </Typography>
            </div>
            <div className="w-full h-48 border border-black mt-1 rounded-2xl p-2">
                <Typography variant="h4" color="black">
                    Submission And Guidlines
                </Typography>
            </div>
            <div className="w-full h-48 border border-black mt-1 rounded-2xl p-2">
                <Typography variant="h4" color="black">
                    Judging Criteria
                </Typography>
            </div>
            <div className="w-full h-48 border border-black mt-1 rounded-2xl p-2">
                <Typography variant="h4" color="black">
                    Prizes
                </Typography>
            </div>
            <div className="w-fit mt-2 mx-auto">
                <Button onClick={() => setOpen((cur) => !cur)}>Register</Button>

                {/* This Message Should Be displayed After Registering to Particular Hackathon instead of Register Button */}
                {/* <Typography variant='h4' color='black'>You Have Registered To This Hackathon</Typography> */}
            </div>
            <TeamRegistration open={open} setOpen={setOpen} />
        </div>
    );
};

export default HackathonDetails;
