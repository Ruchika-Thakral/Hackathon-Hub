import React from "react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
    Typography,
} from "@material-tailwind/react";
import AccordionItem from "./AccordionItem";

const Faq = () => {
    // const [open, setOpen] = React.useState(1);

    // const handleOpen = (value) => setOpen(open === value ? 0 : value);

    // return (
    //     <>
    //         <Typography
    //             variant="h2"
    //             color="blue-gray"
    //             className="mb-2 font-medium flex justify-center mt-2"
    //         >
    //             FAQ
    //         </Typography>
    //         <Accordion
    //             open={open === 1}
    //             className="mb-2 rounded-lg border border-blue-gray-100 px-4"
    //         >
    //             <AccordionHeader
    //                 onClick={() => handleOpen(1)}
    //                 className={`border-b-0 transition-colors ${
    //                     open === 1 ? "text-blue-500 hover:!text-blue-700" : ""
    //                 }`}
    //             >
    //                 How can I participate
    //             </AccordionHeader>
    //             <AccordionBody className="pt-0 text-base font-normal">
    //                 You can form a team of four members, then you have to
    //                 register the team in the registration form along with your
    //                 team name and idea for the hackathon.
    //             </AccordionBody>
    //         </Accordion>
    //         <Accordion
    //             open={open === 2}
    //             className="mb-2 rounded-lg border border-blue-gray-100 px-4"
    //         >
    //             <AccordionHeader
    //                 onClick={() => handleOpen(2)}
    //                 className={`border-b-0 transition-colors ${
    //                     open === 2 ? "text-blue-500 hover:!text-blue-700" : ""
    //                 }`}
    //             >
    //                 Who can participate in this hackathon?
    //             </AccordionHeader>
    //             <AccordionBody className="pt-0 text-base font-normal">
    //                 Anyone Part of Incedo above level 2 can participate.
    //             </AccordionBody>
    //         </Accordion>
    //         <Accordion
    //             open={open === 3}
    //             className="rounded-lg border border-blue-gray-100 px-4"
    //         >
    //             <AccordionHeader
    //                 onClick={() => handleOpen(3)}
    //                 className={`border-b-0 transition-colors ${
    //                     open === 3 ? "text-blue-500 hover:!text-blue-700" : ""
    //                 }`}
    //             >
    //                 Will i get team mates assigned
    //             </AccordionHeader>
    //             <AccordionBody className="pt-0 text-base font-normal">
    //                 No, you should form your own team.
    //             </AccordionBody>
    //         </Accordion>
    //     </>
    // );

    return (
        <section className="relative z-20 overflow-hidden bg-white pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]">
            <div className="container mx-auto">
                <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4">
                        <div className="mx-auto mb-[60px] max-w-[520px] text-center lg:mb-20">
                            <span className="mb-2 block text-lg font-semibold text-primary">
                                FAQ
                            </span>
                            <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-[40px]/[48px]">
                                Any Questions? Look Here
                            </h2>
                            <p className="text-base text-body-color dark:text-dark-6">
                                {/* There are many variations of passages of Lorem
                                Ipsum available but the majority have suffered
                                alteration in some form. */}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mx-2 md:-mx-4 flex flex-wrap">
                    <div className="w-full px-4 lg:w-1/2">
                        <AccordionItem
                            header="How can I participate?"
                            text="You can form a team of four members, then you have to register the team in the registration form along with your team name and idea for the hackathon."
                        />
                        <AccordionItem
                            header="Who can participate in this hackathon?"
                            text="Anyone Part of Incedo above level 2 can participate."
                        />
                        <AccordionItem
                            header=" Will I get team mates assigned?"
                            text=" No, you should form your own team."
                        />
                    </div>
                    <div className="w-full px-4 lg:w-1/2">
                        <AccordionItem
                            header="Are there incentives or awards for the winners?"
                            text="Yes, the winning teams will receive interesting benefits and incentives, such as cash awards, sponsored items, or chances to develop and carry out their proposals further. All competitors will also get the opportunity to exhibit their work and receive praise from the community."
                        />
                        <AccordionItem
                            header="What are the benefits of participating?"
                            text="Participating in a hackathon offers numerous benefits, including opportunities to learn new skills, network with industry professionals, showcase your talent, collaborate with peers, and potentially win prizes or recognition for your work."
                        />
                        <AccordionItem
                            header="Can non-technical people participate?"
                            text="Of course! People with a variety of skill sets are accepted at hackathons, including those with non-technical backgrounds like design, business
                            development, and marketing. A variety of perspectives and skill sets help teams produce well-rounded products."
                        />
                    </div>
                </div>
            </div>

            <div className="absolute top-0 right-0 z-[-1]">
                <svg
                    width="1440"
                    height="886"
                    viewBox="0 0 1440 886"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        opacity="0.5"
                        d="M193.307 -273.321L1480.87 1014.24L1121.85 1373.26C1121.85 1373.26 731.745 983.231 478.513 729.927C225.976 477.317 -165.714 85.6993 -165.714 85.6993L193.307 -273.321Z"
                        fill="url(#paint0_linear)"
                    />
                    <defs>
                        <linearGradient
                            id="paint0_linear"
                            x1="1308.65"
                            y1="1142.58"
                            x2="602.827"
                            y2="-418.681"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="#3056D3" stopOpacity="0.36" />
                            <stop
                                offset="1"
                                stopColor="#F5F2FD"
                                stopOpacity="0"
                            />
                            <stop
                                offset="1"
                                stopColor="#F5F2FD"
                                stopOpacity="0.096144"
                            />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
        </section>
    );
};

export default Faq;
