import React from "react";
import CreateHackathon from "../components/CreateHackathon";
import ListHackathon from "../components/ListHackathon";
import BaseLayout from "../components/BaseLayout";

const AdminHackathons = () => {
    return (
        <BaseLayout>
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
        </BaseLayout>
    );
};

export default AdminHackathons;
