import { useEffect, useState } from "react";
import Post from "./Post";
import RightSidebar from "./RightSidebar";

const getRandomText = () => {
  const texts = [
    "Loving the vibes today!",
    "Just chilling 😎",
    "Nature is amazing!",
    "Coding all day long!",
    "What a view!",
    "Good morning folks!",
    "Life is better with coffee ☕",
    "Dream big, hustle harder!",
    "Exploring new places 🌍",
    "Happiness in little things 💫",
  ];
  return texts[Math.floor(Math.random() * texts.length)];
};

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("https://randomuser.me/api/?results=5");
      const data = await res.json();

      const randomPosts = data.results.map((user) => {
        const randomSeed = Math.floor(Math.random() * 1000); // ensures unique image
        return {
          name: `${user.name.first} ${user.name.last}`,
          text: getRandomText(),
          image: `https://picsum.photos/seed/${randomSeed}/500/300`, // larger size for better visuals
        };
      });

      setPosts(randomPosts);
    };

    fetchPosts();
  }, []);

  return (
    <div className="flex">
      <div className="w-full md:w-2/4 p-4">
        {posts.map((post, index) => (
          <Post key={index} {...post} />
        ))}
      </div>
      <RightSidebar />
    </div>
  );
};

export default Feed;
