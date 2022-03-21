export const Items = ({ text, imageUrl, index }) => {
  return (
    <div
      className={
        index === 0
          ? 'carousel-item active relative float-left w-full '
          : 'carousel-item relative float-left w-full '
      }>
      <img
        src={imageUrl}
        className="block w-full rounded-md "
        alt="Young woman model"
      />
      <div className="carousel-caption absolute text-center">
        <p className="text-white text-xl font-bold bg-black/30">{text}</p>
      </div>
    </div>
  );
};
