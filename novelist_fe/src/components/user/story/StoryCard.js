const StoryCard = ({ story }) => {
  return (
    <div className="cursor-pointer">
      <img alt="" src={story.image} />
      <div className="mt-2">
        <p className="font-bold">{story.name}</p>
        <p className="text-sm text-gray-500">{story.title}</p>
      </div>
    </div>
  );
};

export default StoryCard;
