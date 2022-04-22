import { useEffect, useState } from 'react';
import 'tw-elements';
import { apiConnectionWithoutToken } from '../../helpers/apiConnection';
import { Loader } from '../Loader/Loader';
import { Button } from './Button';
import { Items } from './Items';

export const Slider = () => {
  const [slideData, setSlideData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const queryAPI = async () => {
      try {
        const { data } = await apiConnectionWithoutToken('/slide');
        setSlideData(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    if (slideData) {
      queryAPI();
    }
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div
          id="carouselDarkVariant"
          className="carousel slide carousel-fade carousel-dark relative w-full m-auto "
          data-bs-ride="carousel">
          {/* <!-- Indicators --> */}
          <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
            {slideData &&
              slideData.map((item, index) => (
                <Button key={item.id} index={index} />
              ))}
          </div>

          {/* <!-- Inner --> */}
          <div className="carousel-inner relative w-full overflow-hidden">
            {/* <!-- Single item --> */}

            {slideData &&
              slideData.map((item, index) => (
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
      )}
    </>
  );
};
