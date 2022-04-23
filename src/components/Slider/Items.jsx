export const Items = ({ text, imageUrl, index }) => {
  const option1 = 'carousel-item active relative float-left w-full';
  const option2 = 'carousel-item relative float-left w-full';

  return (
    <div className={index === 0 ? option1 : option2}>
      <img
        src={imageUrl}
        className="block w-full h-full rounded-md "
        alt="Loading...."
      />
      <div className="carousel-caption absolute text-center">
        <p className="text-white text-xl font-bold bg-black/30">{text}</p>
      </div>
    </div>
  );
};
