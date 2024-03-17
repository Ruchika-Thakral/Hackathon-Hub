import React from "react";
import VerticalBar from "../components/VerticalBar";
import HackathonDetails from "../components/HackathonDetails";
import BaseLayout from "../components/BaseLayout";
import SearchFilter from "../components/SearchFilter";

const Hackathons = () => {
    return (
        <BaseLayout>
            <div className="py-4 px-8">
              
            {/* <SearchFilter /> */}
                <div className="grid md:grid-cols-3">
                    <div className="col-span-1">
                        <VerticalBar />
                    </div>
                    <div className="col-span-2">
                        <HackathonDetails />
                    </div>
                </div>
                {/* <VerticalBar /> */}
                {/* <HackathonDetails /> */}
            </div>
            {/* <div className='main flex overflow-y-auto 'style={{ height: '590px'}} > */}
            {/* </div> */}
        </BaseLayout>
    );
};

export default Hackathons;
