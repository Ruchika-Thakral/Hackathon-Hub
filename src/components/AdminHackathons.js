import React from "react";
import CreateHackathon from "./CreateHackathon";
import ListHackathon from "./ListHackathon";

const AdminHackathons = () => {
    return (
        <div className="container py-2 mx-auto px-1 flex justify-center">
            <div className="grid grid-cols-1 gap-y-4">
                <div>
                    <CreateHackathon />
                </div>
                <div>
                    <ListHackathon />
                </div>
            </div>
        </div>
    );
};

export default AdminHackathons;
