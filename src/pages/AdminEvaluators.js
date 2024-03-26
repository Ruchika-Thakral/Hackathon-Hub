import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
    Collapse,
} from "@material-tailwind/react";

import React, { useEffect, useState } from "react";
import EvaluatorRegistration from "../components/EvaluatorRegistration";
import EvaluatorAssign from "../components/EvaluatorAssign";
import ListEvaluator from "../components/ListEvaluator";
import BaseLayout from "../components/BaseLayout";
import { useDispatch } from "react-redux";
import { fetchEvaluators } from "../features/evaluator/evaluatorSlice";

const AdminEvaluators = () => {
    const data = [
        {
            label: "Create",
            value: "create",
            comp: <EvaluatorRegistration />,
        },
        {
            label: "Assign",
            value: "assign",
            comp: <EvaluatorAssign />,
        },
    ];

    const [evaluatorCollapseOpen, setEvaluatorCollapseOpen] =
        React.useState(false);

    const toggleEvaluatorCollapseOpen = () => {
        setEvaluatorCollapseOpen((cur) => !cur);
    };

    const [selectedTab, setSelectedTab] = useState("create");

    const handleAddMembers = () => {
        // console.log("add");
        // setSelectedTab("create");
        toggleEvaluatorCollapseOpen();
    };

    const handleAssignMembers = () => {
        // console.log("assign");
        // setSelectedTab("assign");
        toggleEvaluatorCollapseOpen();
    };


    // const dispatch = useDispatch();
    // useEffect(() => {
    //     dispatch(fetchEvaluators);
    // }, []);

    return (
        <BaseLayout>
            <div className="container py-2 mx-auto px-4 flex justify-center">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-y-4 gap-x-2">
                    <div
                        className={
                            evaluatorCollapseOpen
                                ? "order-2 lg:order-1 lg:col-span-3"
                                : "order-2 lg:order-1 lg:col-span-5"
                        }
                    >
                        <ListEvaluator
                            handleAddMembers={handleAddMembers}
                            handleAssignMembers={handleAssignMembers}
                        />
                    </div>

                    <div
                        className={
                            evaluatorCollapseOpen
                                ? "order-1 lg:order-2 lg:col-span-2"
                                : "order-1 lg:order-2 col-span-0"
                        }
                    >
                        <Collapse
                            open={evaluatorCollapseOpen}
                            animate={{
                                initial: { x: 150 },
                                mount: { x: 0 },
                                unmount: { x: 150 },
                            }}
                        >
                            <div className="container my-2 mx-auto px-4 flex justify-center">
                                <Tabs
                                    id="custom-animation"
                                    value={selectedTab}
                                    className="w-full"
                                >
                                    <TabsHeader className="w-full">
                                        {data.map(({ label, value }) => (
                                            <Tab key={value} value={value}>
                                                {label}
                                            </Tab>
                                        ))}
                                    </TabsHeader>
                                    <TabsBody
                                    // animate={{
                                    //     initial: { x: 750 },
                                    //     mount: { x: 0 },
                                    //     unmount: { x: 750 },
                                    // }}
                                    >
                                        {data.map(({ value, comp }) => (
                                            <TabPanel key={value} value={value}>
                                                {comp}
                                            </TabPanel>
                                        ))}
                                    </TabsBody>
                                </Tabs>
                            </div>
                        </Collapse>
                    </div>
                </div>
            </div>
        </BaseLayout>
    );
};

export default AdminEvaluators;
