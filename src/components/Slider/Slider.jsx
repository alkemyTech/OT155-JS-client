import 'tw-elements';
import { Button } from './Button';
import { Items } from './Items';

export const Slider = () => {
  const data = [
    {
      id: '1',
      imageUrl:
        'https://cdn.pixabay.com/photo/2020/10/21/18/07/laptop-5673901__340.jpg',
      text: 'Texto 1',
    },
    {
      id: '2',
      imageUrl:
        'https://cdn.pixabay.com/photo/2015/01/08/18/25/desk-593327__340.jpg',
      text: 'Texto 2',
    },
    {
      id: '3',
      imageUrl:
        'https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227__340.jpg',
      text: 'Texto 3',
    },
  ];

  return (
    <div
      id="carouselDarkVariant"
      className="carousel slide carousel-fade carousel-dark relative w-11/12 m-auto "
      data-bs-ride="carousel">
      {/* <!-- Indicators --> */}
      <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
        {data &&
          data.map((item, index) => <Button key={item.id} index={index} />)}
      </div>

      {/* <!-- Inner --> */}
      <div className="carousel-inner relative w-full overflow-hidden">
        {/* <!-- Single item --> */}

        {data &&
          data.map((item, index) => (
            <Items
              key={item.id}
              text={item.text}
              imageUrl={item.imageUrl}
              index={index}
            />
          ))}
      </div>

      {/* <!-- Controls --> */}
      <button
        className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
        type="button"
        data-bs-target="#carouselDarkVariant"
        data-bs-slide="prev">
        <span
          className="carousel-control-prev-icon inline-block bg-no-repeat"
          aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0 "
        type="button"
        data-bs-target="#carouselDarkVariant"
        data-bs-slide="next">
        <span
          className="carousel-control-next-icon inline-block bg-no-repeat"
          aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};
