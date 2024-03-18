import React from "react";
import "./Results.css";

const Results = () => {
    return (
        <div className="py-6">
            <div
                className="container results flex flex-col m-0 justify-between rounded-3xl
      md:shadow-2xl md:w-3/5 md:flex-row md:mx-auto"
            >
                <div
                    className="flex flex-col h-3/4 items-center space-y-9 bg-gradient-to-b
     from-lightSlateBlue to-lightRoyalBlue rounded-b-3xl py-9 md:py-12 md:space-y-12 
     md:rounded-3xl md:w-1/2"
                >
                    <p className="text-md text-lightLavender text-2xl font-bold">
                        Your Result
                    </p>
                    <div
                        className="flex flex-col  px-9 py-7 rounded-full
       items-center justify-between bg-gradient-to-b from-violetBlue to-persianBlue"
                    >
                        <h1 className="text-white text-7xl font-bold">4.1</h1>
                        <p className="text-lg text-lightLavender font-bold">
                            of 5
                        </p>
                    </div>
                    <div
                        className="flex flex-col items-center justify-between text-center
        w-3/4 space-y-2 md:w-3/5"
                    >
                        <h3 className="text-3xl text-white font-bold">Great</h3>
                        <p className=" text-lightLavender text-lg font-bold">
                            You scored higher than 65% of the people who have
                            taken these tests.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col h-3/4 items-start p-7 md:w-1/2 space-y-7">
                    <h4 className="text-xl text-darkGrayBlue font-bold">Summary</h4>
                    <div className="container flex flex-col space-y-5 md:space-y-5">
                        <div className="result-element bg-lightRed p-3 rounded-md bg-opacity-20">
                            <div className="flex flex-row justify-between">
                                <div className="flex flex-row space-x-2">
                                    {/* <img src="" alt="reaction-icon" /> */}
                                    <p className="text-lightRed">Team 1</p>
                                </div>
                                <div className="flex flex-row space-x-1">
                                    <p className="font-bold text-darkGrayBlue">4.9</p>
                                    <p className="text-gray-500 font-semibold">/</p>
                                    <p className="text-gray-500 font-semibold">
                                        5
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="result-element bg-orangeyYellow p-3 rounded-md bg-opacity-20">
                            <div className="flex flex-row justify-between">
                                <div className="flex flex-row space-x-2">
                                    {/* <img src="" alt="reaction-icon" /> */}
                                    <p className="text-orangeyYellow">Team 2</p>
                                </div>
                                <div className="flex flex-row space-x-1">
                                    <p className="font-bold text-darkGrayBlue">4.7</p>
                                    <p className="text-gray-500 font-semibold">/</p>
                                    <p className="text-gray-500 font-semibold">
                                        5
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="result-element bg-greenTeal p-3 rounded-md bg-opacity-20">
                            <div className="flex flex-row justify-between">
                                <div className="flex flex-row space-x-2">
                                    {/* <img src="" alt="reaction-icon" /> */}
                                    <p className="text-greenTeal">Team 3</p>
                                </div>
                                <div className="flex flex-row space-x-1">
                                    <p className="font-bold text-darkGrayBlue">4.5</p>
                                    <p className="text-gray-500 font-semibold">/</p>
                                    <p className="text-gray-500 font-semibold">
                                        5
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* <div className="result-element bg-cobaltBlue p-3 rounded-md bg-opacity-20">
                            <div className="flex flex-row justify-between">
                                <div className="flex flex-row space-x-2">
                                    {/* <img src="" alt="reaction-icon" /> */}
                                    {/* <p className="text-cobaltBlue"></p>
                                </div>
                                <div className="flex flex-row space-x-1">
                                    <p className="font-bold text-darkGrayBlue"></p>
                                    <p className="text-gray-500 font-semibold">/</p>
                                    <p className="text-gray-500 font-semibold">
                                        100
                                    </p>
                                </div>
                            </div>
                        </div> */}
                    </div>
                    <button
                        className="container p-4
       bg-darkGrayBlue rounded-full text-lg font-bold text-white
       hover:bg-gradient-to-b from-lightSlateBlue to-lightRoyalBlue"
                    >
                        Continue
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Results;
