import { useEffect, useState } from "react";

const RightSidebar = () => {
  const [contacts, setContacts] = useState([]);
  const [birthdayName, setBirthdayName] = useState("");

  useEffect(() => {
    const fetchContacts = async () => {
      const res = await fetch("https://randomuser.me/api/?results=15");
      const data = await res.json();
      setContacts(data.results);

      // Set a random birthday name from the results
      const randomIndex = Math.floor(Math.random() * data.results.length);
      const randomUser = data.results[randomIndex];
      const fullName = `${randomUser.name.first} ${randomUser.name.last}`;
      setBirthdayName(fullName);
    };

    fetchContacts();
  }, []);

  return (
    <div className="hidden lg:block w-1/4 p-4 space-y-6">
      {/* Sponsored (optional) */}
      <div>
        <h2 className="text-gray-600 font-semibold mb-2">Sponsored</h2>
        <div className="bg-gray-100 h-16 rounded-lg flex items-center justify-center text-gray-400">
          No sponsored content
        </div>
      </div>

      {/* Birthdays */}
      <div>
        <h2 className="text-gray-600 font-semibold mb-2">Birthdays</h2>
        <div className="flex items-center gap-2 bg-blue-50 p-2 rounded-md">
          🎁{" "}
          <span className="text-sm">
            {birthdayName
              ? `${birthdayName}'s birthday is today.`
              : "Loading..."}
          </span>
        </div>
      </div>

      {/* Contacts */}
      <div>
        <h2 className="text-gray-600 font-semibold mb-2">Contacts</h2>
        <div className="space-y-2">
          {contacts.map((contact, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="relative">
                  <img
                    src={contact.picture.thumbnail}
                    alt={contact.name.first}
                    className="w-8 h-8 rounded-full"
                  />
                  <span className="absolute bottom-0 right-0 bg-green-500 w-2.5 h-2.5 rounded-full border-2 border-white"></span>
                </div>
                <span className="text-sm">
                  {contact.name.first} {contact.name.last}
                </span>
              </div>
              <span className="text-gray-400 text-lg cursor-pointer">⋮</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
