const Post = ({ name, text, image }) => (
  <div className="bg-white p-4 rounded-lg shadow-md mb-6">
    {/* Header: Profile pic, name, time */}
    <div className="flex items-center mb-3">
      <img
        src={`https://i.pravatar.cc/40?u=${name}`}
        alt={name}
        className="w-10 h-10 rounded-full mr-3"
      />
      <div>
        <h3 className="font-semibold text-sm">{name}</h3>
        <span className="text-xs text-gray-500">Just now • 🌍</span>
      </div>
    </div>

    {/* Text content */}
    <p className="text-sm mb-3">{text}</p>

    {/* Image */}
    {image && (
      <img
        src={image}
        alt="Post"
        className="w-full rounded-lg mb-3 max-h-[400px] object-cover"
      />
    )}

    {/* Actions */}
    <div className="flex justify-between text-sm text-gray-600 border-t border-gray-200 pt-2">
      <button className="hover:text-blue-600">👍 Like</button>
      <button className="hover:text-blue-600">💬 Comment</button>
      <button className="hover:text-blue-600">↪️ Share</button>
    </div>
  </div>
);

export default Post;
