import { useEffect, useState } from "react";

const dummyGroups = [
  {
    name: "Web Developers 💻",
    description: "A community for front-end & back-end devs to share ideas.",
    banner: "https://picsum.photos/seed/webdev/600/200",
  },
  {
    name: "Anime World 🌸",
    description: "Discuss your favorite anime, characters, and fan theories!",
    banner: "https://picsum.photos/seed/anime/600/200",
  },
  {
    name: "Fitness Freaks 🏋️",
    description: "Join us and share workouts, diets, and progress!",
    banner: "https://picsum.photos/seed/fitness/600/200",
  },
  {
    name: "AI & ML Enthusiasts 🤖",
    description: "Talk all things AI, ML, Data Science and more!",
    banner: "https://picsum.photos/seed/ai/600/200",
  },
  {
    name: "Travel the World 🌍",
    description: "Share travel stories, tips, and bucket lists!",
    banner: "https://picsum.photos/seed/travel/600/200",
  },
];

const Groups = () => {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    // Simulate async fetch
    setTimeout(() => {
      setGroups(dummyGroups);
    }, 500);
  }, []);

  return (
    <div className="p-4 w-full">
      <h2 className="text-2xl font-bold mb-4">Your Groups</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {groups.map((group, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow overflow-hidden transition-transform hover:scale-[1.01]"
          >
            <img
              src={group.banner}
              alt={group.name}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg">{group.name}</h3>
              <p className="text-gray-600 text-sm mb-3">{group.description}</p>
              <button className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700">
                Join
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Groups;
