import React from "react";
import EventDesc from "../../RightComp/EventDesc";
import Divider from "../../MiddleComp/Divider";
import CollectionDesc from "../../RightComp/CollectionDesc";

const EventPage = () => {
  const [collection, setCollection] = React.useState(false);

  const handleClick = () => {
    setCollection(true);
  };

  const handleEventClick = () => {
    setCollection(false);
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen h-[90%] bg-gray-900 text-white justify-center">
      <div className="lg:w-[55%] w-full p-6 pr-0">
        <h1 className="text-4xl font-bold mb-8">Astrix.</h1>
        <div className="slideshow">
          <div className="slideshow-track">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnmKe1Zyw3Og7BzuX_R5Vs7EhdcmIxKpxmhu4uYBv-wQ&s"
              alt="Event 1"
              className="slideshow-image"
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbYwu6dFwdvALXr8ztBNXrXXZGYD_B7dbd0yxVok4ZDw&s"
              alt="Event 2"
              className="slideshow-image"
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHAk4HS_UjYOlIatx4b5EAIz1JVtkc2zNaQrHyeaRotw&s"
              alt="Event 3"
              className="slideshow-image"
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnmKe1Zyw3Og7BzuX_R5Vs7EhdcmIxKpxmhu4uYBv-wQ&s"
              alt="Event 1"
              className="slideshow-image"
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbYwu6dFwdvALXr8ztBNXrXXZGYD_B7dbd0yxVok4ZDw&s"
              alt="Event 2"
              className="slideshow-image"
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHAk4HS_UjYOlIatx4b5EAIz1JVtkc2zNaQrHyeaRotw&s"
              alt="Event 3"
              className="slideshow-image"
            />
          </div>
        </div>
        <div className="mt-8 flex space-x-2">
          <button
            onClick={handleEventClick}
            className="bg-gray-800 py-2 px-4 rounded-md"
          >
            Events
          </button>
          <button
            onClick={handleClick}
            className="bg-gray-800 py-2 px-4 rounded-md"
          >
            Collections
          </button>
        </div>
      </div>
      <Divider className="hidden lg:block" />
      <div className="lg:w-[45%] w-full">
        {collection ? <CollectionDesc /> : <EventDesc />}
      </div>
    </div>
  );
};

export default EventPage;
