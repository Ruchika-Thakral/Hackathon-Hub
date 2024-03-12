import React,{useState}from "react";
import { Drawer, Typography, IconButton ,Button ,Select,Option, Input} from "@material-tailwind/react";

const DrawerDefault = ({ opens, onClose, user }) => {
    const [editMode, setEditMode] = useState(false);

    const handleEdit = () => {
        setEditMode(true);
      };
      const handleSave = () => {
        setEditMode(false);
      };
    
      // const [selectedHackathon, setSelectedHackathon] = useState("");

      // const handleSelectChange = (e) => {
      //   setSelectedHackathon(e.taget.value);
      // };
  return (
    <Drawer placement="right" open={opens} onClose={onClose} className="p-4">
      <div className="mb-6  bg-orange-600">
        
        <IconButton variant="text" color="blue-gray" onClick={onClose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </IconButton>
        <Typography variant="h5" color="blue-gray" className="text-center">
          User Profile
        </Typography>
      </div>
      {editMode ? (
        <form>
        <div className="mb-4">
          <Input
            label="First Name"
            name="firstName"
            value={user.firstName}
          />
        </div>
        <div className="mb-4">
          <Input
            label="Last Name"
            name="lastName"
            value={user.lastName}
          />
        </div>
        <div className="mb-4">
          <Input
            label="Bio"
            name="bio"
            value={user.bio}
          />
        </div>
        <div className="mt-6">
          <Button size="sm" onClick={handleSave}>Save</Button>
        </div>
      </form>
      ):(<div>
      <div className="mb-4">
        <Typography variant="subtitle1">First Name: {user.firstName}</Typography>
        {/* <Typography variant="body1">{user.firstName}</Typography> */}
      </div>
      <div className="mb-4">
        <Typography variant="subtitle1">Last Name: {user.lastName}</Typography>
        {/* <Typography variant="body1">{user.lastName}</Typography> */}
      </div>
      <div className="mb-4">
        <Typography variant="subtitle1">Email: {user.email}</Typography>
        {/* <Typography variant="body1">{user.email}</Typography> */}
      </div>
      <div className="mb-4">
        <Typography variant="subtitle1">Bio: {user.bio}</Typography>
        {/* <Typography variant="body1">{user.bio}</Typography> */}
      </div>
      <div className="mb-4">
      <Select label="Select Hackathon" 
      // value={selectedHackathon} onChange={handleSelectChange}
      >
        {user.hackathons.map((option, index) => (
          <Option key={index}>{option}</Option>
        ))}
      </Select>
      {/* {selectedHackathon && (
        <Typography variant="subtitle1">
          Selected Hackathon: {selectedHackathon}
        </Typography>
      )} */}
      
        {/* <Typography variant="subtitle1">Hackathons: {user.hackathons.join(', ')}</Typography> */}
        {/* <Typography variant="body1">{user.hackathons.join(', ')}</Typography> */}
      </div>
      <div className="mt-6">
        <Button size="sm" onClick={handleEdit}>Edit</Button>
      </div></div>)}
    </Drawer>
  );
}

export default DrawerDefault;
