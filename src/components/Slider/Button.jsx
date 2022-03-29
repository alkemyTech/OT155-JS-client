import 'tw-elements';

export const Button = ({ index }) => {
  return (
    <button
      className="active"
      aria-current="true"
      data-bs-target="#carouselDarkVariant"
      data-bs-slide-to={index}
      aria-label={`Slide ${index + 1}`}></button>
  );
};
