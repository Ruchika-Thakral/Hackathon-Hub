import React from "react";
import { Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import styles from "./HorizontalScrollBar.module.css";
import { useContext } from "react";
import { CreateContext } from "../App";

const HorizontalScrollBar = () => {
    const { arr, setDetails } = useContext(CreateContext);
    const clickHandler = (item) => {
        setDetails(item);
    };

    return (
        <div
            className={`${styles.main} flex gap-x-4  w-9/12 overflow-x-auto  border border-black rounded-3xl p-4 mx-auto mt-4`}
        >
            {arr.map((item) => (
                <Link
                    to="hackathons"
                    key={item.id}
                    onClick={() => clickHandler(item)}
                >
                    <div className="shrink-0 w-96  h-48 border border-black rounded-3xl">
                        <Typography
                            className="w-fit mx-auto"
                            variant="h2"
                            color="black"
                        >
                            {item.name}
                        </Typography>
                        <Typography variant="h6" color="black">
                            Start Date:{item.start}
                        </Typography>
                        <Typography variant="h6" color="black">
                            End Date:{item.end}
                        </Typography>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default HorizontalScrollBar;
