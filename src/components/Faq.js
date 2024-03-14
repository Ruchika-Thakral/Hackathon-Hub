import React from "react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
    Typography,
} from "@material-tailwind/react";

const Faq = () => {
    const [open, setOpen] = React.useState(1);

    const handleOpen = (value) => setOpen(open === value ? 0 : value);

    return (
        <>
            <Typography
                variant="h2"
                color="blue-gray"
                className="mb-2 font-medium flex justify-center mt-2"
            >
                FAQ
            </Typography>
            <Accordion
                open={open === 1}
                className="mb-2 rounded-lg border border-blue-gray-100 px-4"
            >
                <AccordionHeader
                    onClick={() => handleOpen(1)}
                    className={`border-b-0 transition-colors ${
                        open === 1 ? "text-blue-500 hover:!text-blue-700" : ""
                    }`}
                >
                    How can I participate
                </AccordionHeader>
                <AccordionBody className="pt-0 text-base font-normal">
                    You can form a team of four members, then you have to
                    register the team in the registration form along with your
                    team name and idea for the hackathon.
                </AccordionBody>
            </Accordion>
            <Accordion
                open={open === 2}
                className="mb-2 rounded-lg border border-blue-gray-100 px-4"
            >
                <AccordionHeader
                    onClick={() => handleOpen(2)}
                    className={`border-b-0 transition-colors ${
                        open === 2 ? "text-blue-500 hover:!text-blue-700" : ""
                    }`}
                >
                    Who can participate in this hackathon?
                </AccordionHeader>
                <AccordionBody className="pt-0 text-base font-normal">
                    Anyone Part of Incedo above level 2 can participate.
                </AccordionBody>
            </Accordion>
            <Accordion
                open={open === 3}
                className="rounded-lg border border-blue-gray-100 px-4"
            >
                <AccordionHeader
                    onClick={() => handleOpen(3)}
                    className={`border-b-0 transition-colors ${
                        open === 3 ? "text-blue-500 hover:!text-blue-700" : ""
                    }`}
                >
                    Will i get team mates assigned
                </AccordionHeader>
                <AccordionBody className="pt-0 text-base font-normal">
                    No, you should form your own team.
                </AccordionBody>
            </Accordion>
        </>
    );
};

export default Faq;
