const SingleEmoji = ({ singleemoji }) => {
  return (
    <>
      <div className="item">
        <p className="emoji">{singleemoji.emoji}</p>
        <p className="emoji">{singleemoji.description}</p>
      </div>
    </>
  );
};
export default SingleEmoji;
