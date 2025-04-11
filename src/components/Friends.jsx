import { useEffect, useState } from "react";

const Friends = () => {
  const [friendRequests, setFriendRequests] = useState([]);
  const [yourFriends, setYourFriends] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=24")
      .then((res) => res.json())
      .then((data) => {
        const requests = data.results.slice(0, 12);
        const friends = data.results.slice(12, 24);
        setFriendRequests(requests);
        setYourFriends(friends);
      });
  }, []);

  return (
    <div className="p-6">
      {/* Friend Requests Section */}
      <h2 className="text-2xl font-bold mb-4">Friend Requests</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {friendRequests.map((friend, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-4 flex items-center gap-4"
          >
            <img
              src={friend.picture.medium}
              alt={friend.name.first}
              className="w-16 h-16 rounded-full"
            />
            <div className="flex-1">
              <h3 className="font-semibold text-lg">
                {friend.name.first} {friend.name.last}
              </h3>
              <p className="text-sm text-gray-500">{friend.location.country}</p>
            </div>
            <div className="flex flex-col gap-2">
              <button className="bg-blue-500 text-white text-sm px-3 py-1 rounded-md hover:bg-blue-600">
                Accept
              </button>
              <button className="bg-gray-300 text-gray-800 text-sm px-3 py-1 rounded-md hover:bg-gray-400">
                Decline
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Your Friends Section */}
      <h2 className="text-2xl font-bold mb-4">Your Friends</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {yourFriends.map((friend, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-4 flex items-center gap-4"
          >
            <img
              src={friend.picture.medium}
              alt={friend.name.first}
              className="w-16 h-16 rounded-full"
            />
            <div className="flex-1">
              <h3 className="font-semibold text-lg">
                {friend.name.first} {friend.name.last}
              </h3>
              <p className="text-sm text-gray-500">{friend.location.country}</p>
            </div>
            <button className="bg-blue-500 text-white text-sm px-3 py-1 rounded-md hover:bg-blue-600">
              Message
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Friends;
