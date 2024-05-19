import React from "react";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import AccessAlarmOutlinedIcon from "@mui/icons-material/AccessAlarmOutlined";

const EventDesc = () => {
  return (
    <div className="p-8 pl-0 h-full">
      <div className="p-6 rounded-md h-[85%]">
        <h2 className="text-xl font-semibold p-4 pl-0">
          Explore Your First Event
        </h2>
        <h3 className="text-3xl font-bold mt-4">Event Name</h3>
        <p className="flex items-center mt-4">
          <LocationOnOutlinedIcon />
          Venue
          <span className="ml-4">
            <AccessAlarmOutlinedIcon /> 04/3/2024 19:00
          </span>
        </p>
        <p className="mt-4 text-[12px] w-[70%]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et sed
          ipsum. Pellentesque mattis condimentum ut nulla.
        </p>
        <h4 className="text-xl font-semibold mt-6">Artist Lineup</h4>
        <div className="">
          <div className="mt-4 flex flex-col lg:flex-row gap-2 overflow-hidden">
            <img
              height="120px"
              width="120px"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYx6g0twl6lSjmq0MwZXx99lj9q2Py_x9ZJKE2PPtlCP6dQRunqztETidvjEEHdm6gFSg&usqp=CAU"
              alt="Artist 1"
              className="rounded-md"
            />
            <img
              height="120px"
              width="120px"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz51O0fEOkhhLe6NLSM1DwxtECqrOyVdP3LnnhfzFbFUJLahtOWpSptaCwwE2quu9rG08&usqp=CAU"
              alt="Artist 2"
              className="rounded-md"
            />
            <img
              height="120px"
              width="120px"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0oPZ1hpIBlW1Hy3hF_vdb45pblLLHb1fvOEFzeIYj_YQo562qevFArdD4D5ChEWG40BU&usqp=CAU"
              alt="QR Code"
              className="mr-4 rounded-md"
            />
          </div>
          <div className="mt-8 flex items-end justify-between">
            <img
              className="rounded-md"
              height="80px"
              width="80px"
              src="data:image/jpeg;base64,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"
            />
            <button className="bg-yellow-500 text-gray-900 text-[15px] font-bold py-2 px-4 rounded-[50px]">
              Join Waitlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDesc;
