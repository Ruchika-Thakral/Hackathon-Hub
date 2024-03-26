import React, { useEffect } from "react";
import { Card, CardBody, Carousel, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import styles from "./HorizontalScrollBar.module.css";
import { useContext } from "react";
import { CreateContext } from "../App";
import { useDispatch } from "react-redux";
import { fetchHackathons } from "../features/hackathon/hackathonSlice";
import { useSelector } from "react-redux";

import { HACKATHONS } from "../constants";

const HorizontalScrollBar = () => {
    // const { arr,setDetails } = useContext(CreateContext);

    // const clickHandler = (item) => {
    //     setDetails(item);
    // };
    const dispatch = useDispatch();
    const hackathons = HACKATHONS
    // useSelector((state) => state.hackathon.hackathons.data);
    console.log(hackathons);
    // const arr = hackathons ? hackathons.data : [];
    // const [details, setDetails] = useState(arr[0]);

    // useEffect(() => {
    //     dispatch(fetchHackathons());
    // }, [dispatch]);
    return (
        <div className="w-full h-96 bg-white py-8 px-8">
            <Typography
                variant="h2"
                // color="i"
                className="mb-2 font-semibold flex justify-center text-incedo-secondary-600 text-center"
            >
                Popular Hackathons
            </Typography>
            {/* <Carousel className="rounded-xl place-self-center justify-self-center">
                {hackathons?.map((hachathon) => (
                    <div className="relative h-40">
                        <Card className=" h-full w-full" shadow={true} color="black">
                            <CardBody className="flex justify-center items-center">
                                {hachathon.name}
                            </CardBody>
                        </Card>
                    </div>
                ))}

            </Carousel> */}
            <div
                className={`${styles.main} flex gap-x-4 items-center w-9/12 overflow-x-auto  borderrounded-3xl p-4 mx-auto`}
            >
                {hackathons ? (
                    hackathons?.map((item) => (
                        <Link
                            to={`hackathons/?hackathonId=${item.hackathonId}`}
                            key={item.hackathonId}
                            // onClick={() => clickHandler(item)}
                        >
                            <Card className="h-24 md:h-48 w-56 md:w-72 shadow-md to-incedo-primary-100/50 px-4 py-2 flex align-middle justify-center">
                                <Typography
                                    variant="h4"
                                    className="mb-2 font-semiboldflex justify-center text-center text-incedo-secondary-600"
                                >
                                    {item.name}
                                </Typography>

                                <Typography
                                    variant="h6"
                                    className=" hidden md:flex text-incedo-secondary-600 justify-center text-center"
                                >
                                    Start Date:{item.startDate}
                                </Typography>
                            </Card>
                            {/* <div className="shrink-0 w-96 h-48 border shadow-md p-8 items-center justify-center rounded-3xl  bg-incedo-secondary-100/50">
                            <>
                            <Typography
                                className="w-full mx-auto justify-self-center  text-incedo-secondary-600 "
                                variant="h2"
                                color="black"
                                // className=""
                            >
                                {item.name}
                            </Typography>
                            <Typography variant="h6" color=" text-incedo-secondary-600">
                                Start Date:{item.startDate}
                            </Typography>
                            </>
                        </div> */}
                        </Link>
                    ))
                ) : (
                    <div className="shrink-0 w-96 h-48 border shadow-md p-8 items-center justify-center rounded-3xl  bg-incedo-secondary-100/50">
                        <>
                            <Typography
                                className="w-full mx-auto justify-self-center  text-incedo-secondary-600 "
                                variant="h2"
                                color="black"
                                // className=""
                            >
                                No Hackathons
                            </Typography>
                            <Typography
                                variant="h6"
                                color=" text-incedo-secondary-600"
                            ></Typography>
                        </>
                    </div>
                )}
            </div>
        </div>
    );
};

export default HorizontalScrollBar;
