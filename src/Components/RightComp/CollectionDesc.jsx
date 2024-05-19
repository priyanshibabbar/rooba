import React from "react";

const CollectibleCard = ({ imageUrl, name, year, creator }) => (
  <div className="bg-purple-200 rounded-lg p-4">
    <div className="flex justify-between text-[9px] mb-2 text-white">
      <span className="bg-gray-800 rounded-[40px] p-1">{year}</span>
      <span className="text-black p-1">{creator}</span>
    </div>
    <img className="rounded-md" src={imageUrl} alt={name} />
    <div className="mt-2 text-center">{name}</div>
  </div>
);

const CollectionDesc = () => {
  const collectibles = [
    {
      id: 1,
      imageUrl:
        "https://media.istockphoto.com/vectors/circular-abstract-vector-pattern-design-vector-id1206731752?k=20&m=1206731752&s=612x612&w=0&h=-q01HRUh5GjBkx_4118FV5q-ZR-Qz6lYgnA-Z1G2B1E=",
      year: "2024",
      creator: "Pablo",
    },
    {
      id: 2,
      imageUrl:
        "https://media.istockphoto.com/vectors/circular-abstract-vector-pattern-design-vector-id1206731752?k=20&m=1206731752&s=612x612&w=0&h=-q01HRUh5GjBkx_4118FV5q-ZR-Qz6lYgnA-Z1G2B1E=",
      year: "2024",
      creator: "Pablo",
    },
    {
      id: 3,
      imageUrl:
        "https://media.istockphoto.com/vectors/circular-abstract-vector-pattern-design-vector-id1206731752?k=20&m=1206731752&s=612x612&w=0&h=-q01HRUh5GjBkx_4118FV5q-ZR-Qz6lYgnA-Z1G2B1E=",
      year: "2024",
      creator: "Pablo",
    },
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen p-8">
      <div className="max-w-lg mx-auto">
        <header className="mb-8">
          <h1 className="text-2xl font-bold">Explore Your First Collectible</h1>
        </header>
        <main>
          <h2 className="text-4xl font-bold">Meta Lives</h2>
          <h3 className="text-xl mt-2">Live in Astrix</h3>
          <p className="mt-4 mb-6 text-white text-[13px]">
            Lorem ipsum dolor sit amet consectetur. Ac lorem massa in morbi et
            sed ipsum. Pellentesque mattis condimentum ut nulla.
          </p>
          <div className="flex items-center mb-8">
            <div className="flex -space-x-2">
              <img
                className="w-10 h-10 rounded-full border-2 border-gray-900"
                src="https://wallpapers.com/images/hd/funky-stylish-lady-eneb46qd7mrxeh0k.jpg"
                alt="User 1"
              />
              <img
                className="w-10 h-10 rounded-full border-2 border-gray-900"
                src="https://i1.sndcdn.com/avatars-c7IbFKOxAZn3Nzbb-PfklkA-t240x240.jpg"
                alt="User 2"
              />
              <img
                className="w-10 h-10 rounded-full border-2 border-gray-900"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBmETOFxphsQe2E5_fMn6RAFIgzce9pKg3GV9HEwf7KA&s"
                alt="User 3"
              />
              <img
                className="w-10 h-10 rounded-full border-2 border-gray-900"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVJXjJz3CebGQIJmzI6XDzUMYteM1K3_YD2b7F0-zu2A&s"
                alt="User 4"
              />
            </div>
            <span className="ml-4">22k people interested</span>
          </div>
          <div className="mb-8">
            <h4 className="mb-4">Collectibles</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-black text-[10px]">
              {collectibles.map((collectible) => (
                <CollectibleCard key={collectible.id} {...collectible} />
              ))}
            </div>
          </div>
          <button className="bg-yellow-500 text-gray-900 font-bold py-2 px-4 rounded-full mt-8">
            Join Waitlist
          </button>
        </main>
      </div>
    </div>
  );
};

export default CollectionDesc;
