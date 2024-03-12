import React, { useState } from 'react';
import { Card, Select, Option, Typography, Button,Input } from "@material-tailwind/react";

const Judge = ({ arr }) => {
    const [selectedItemId, setSelectedItemId] = useState(""); // Store the ID of the selected item
    const [selectedTeam, setSelectedTeam] = useState(null); // Store the selected team

    const handleSelectChange = (value) => {
        setSelectedItemId(value); // Update the selected item ID
        // Reset selected team when changing the hackathon
        setSelectedTeam(null);
    };

    const handleTeamClick = (team) => {
        setSelectedTeam(team); // Update the selected team
    };

    const handleButtonClick = (type) => {
        // Handle button click based on type (e.g., GitHub, video, Google Drive)
        console.log(`${type} button clicked`);
    };

    const handleSubmitRating = () => {
        // Handle submit rating
        console.log("Rating submitted");
    };

    return (
        <div className="mt-8">
           <div>
    <Card className="absolute top-0 right-0 w-72">
        {/* Selected Hackathon Heading */}
        <Typography variant="body1" color="textSecondary">SELECT HACKATHON</Typography>
        <Select label="" value={selectedItemId} onChange={handleSelectChange}>
            <Option value="">Select a hackathon...</Option>
            {arr.map(hackathon => (
                <Option key={hackathon.id} value={hackathon.id}>{hackathon.name}</Option>
            ))}
        </Select>
    </Card>
</div>

    
    {selectedItemId && (
        <Typography className="text-center mt-4" variant="h2">{arr.find(hackathon => hackathon.id === selectedItemId).name}</Typography>
    )}

            {/* Hackathon Details Section */}
            <div className="mt-4">
                {selectedItemId ? (
                    // Check if an item is selected by checking if selectedItemId is truthy
                    // Find the selected hackathon from arr based on selectedItemId
                    arr.map(hackathon => {
                        if (hackathon.id === selectedItemId) {
                            return (
                                <div key={hackathon.id}>
                                    <div className='w-full border border-black mt-1 rounded-xl'>
                                        <Typography variant="body1" color="textSecondary">Description: {hackathon.description}</Typography>
                                        <Typography variant="body1" color="textSecondary">Start Date: {hackathon.start}</Typography>
                                        <Typography variant="body1" color="textSecondary">End Date: {hackathon.end}</Typography>
                                    </div>
                                    <div className='w-full border border-black mt-1 rounded-xl'>
                                        <Typography variant="body1" color="textSecondary">Judging Criteria:</Typography>
                                        <ul>
                                            {Object.entries(hackathon.criteriaPoints).map(([criterion, points]) => (
                                                <li key={criterion}>
                                                    {criterion}: {points} points
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className='w-full border border-black mt-1 rounded-xl'>
                                        <Typography variant="body1" color="textSecondary">Timeline: {hackathon.timeline}</Typography>
                                    </div>
                                </div>
                            );
                        }
                        return null;
                    })
                ) : (
                    <Typography variant="body1" color="textSecondary">Please select a hackathon to view details.</Typography>
                )}
            </div>

            {/* Teams Section */}
            <div className="mt-4 flex">
                {/* Selected Teams */}
                <div className="w-1/4 mr-4" style={{ maxHeight: "300px", overflowY: "auto" }}>
                    <Card>
                        <Typography className="text-center" variant="body1" color="textSecondary">SELECT TEAMS</Typography>
                        {/* Render teams associated with the selected hackathon */}
                        {selectedItemId && arr.find(hackathon => hackathon.id === selectedItemId)?.teams.map((team, index) => (
                            <div key={index} className="border-b border-gray-200 py-2 cursor-pointer" onClick={() => handleTeamClick(team)}>
                                <Typography variant="body1" color="textSecondary">Team {index + 1}:</Typography>
                                <Typography variant="body1">Name: {team.name}</Typography>
                                <Typography variant="body1">Idea: {team.idea}</Typography>
                            </div>
                        ))}
                    </Card>
                </div>

                {/* Team Description with Accept/Reject Buttons */}
                <div className="w-3/4">
                    {selectedTeam && (
                        <Card>
                            <div className="p-4">
                                <Typography variant="h4" gutterBottom>{selectedTeam.name}</Typography>
                                <Typography variant="body1" color="textSecondary">{selectedTeam.idea}</Typography>
                                <Typography variant="body1" color="textSecondary">Description:</Typography>
                                <Typography variant="body1">{selectedTeam.description}</Typography>
                                <img src={selectedTeam.image} alt={selectedTeam.name} className="my-4" style={{ maxWidth: "100%" }} />

               
                <div className="flex justify-between">
                    {selectedTeam.github && (
                        <Button color="blue" onClick={() => handleButtonClick('github')}>GitHub</Button>
                    )}
                    {selectedTeam.video && (
                        <Button color="red" onClick={() => handleButtonClick('video')}>Video</Button>
                    )}
                    {selectedTeam.googleDrive && (
                        <Button color="yellow" onClick={() => handleButtonClick('googleDrive')}>Google Drive</Button>
                    )}
                </div>
                            </div>
                            <div className="mt-4">
                            <Input
    id="rating"
    label="Rating (out of 5)"
    type="number"
    inputProps={{ min: 0, max: 5 }}
    onChange={(e) => {
        const value = parseInt(e.target.value);
        if (isNaN(value) || value < 0 || value > 5) {
            e.target.value = ''; // Clear the input if the value is invalid
        }
    }}
/>
                </div>

                {/* Submit Rating Button */}
                <div className="mt-4">
                    <Button color="green" onClick={handleSubmitRating}>Submit Rating</Button>
                </div>
                        </Card>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Judge;