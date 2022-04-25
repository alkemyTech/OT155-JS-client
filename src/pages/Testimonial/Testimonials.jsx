import React, { useEffect, useState } from 'react';
import { Loader } from '../../components/Loader/Loader';
import { apiConnectionWithoutToken } from '../../helpers/apiConnection';
import { TestimonialItem } from './TestimonialItem';

export const Testimonials = () => {
  const [testimonialsData, setTestimonialsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const queryAPI = async () => {
      try {
        const { data } = await apiConnectionWithoutToken('/testimonials');
        setTestimonialsData(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    if (testimonialsData) {
      queryAPI();
    }
  }, []);

  const testimonials = testimonialsData.testimonials;

  return (
    <section className="my-20 text-gray-700 container mx-auto animate__animated animate__fadeIn">
      <div className="text-center md:max-w-xl lg:max-w-3xl mx-auto ">
        <h3 className="text-3xl font-bold mb-6 text-gray-800">Testimonios de nuestros voluntarios</h3>
        <p className="mb-6 pb-2 md:mb-12 md:pb-0">
          Formamos una red social donde los padres son junto con sus hijos
          protagonista, ellos construyen, cuidan y nutren su sociedad. Somos Más
          pretende facilitarles herramientas para ayudarlos en este esfuerzo.
          Brindamos talleres de tejido, manicura, nutrición, huerta, entre
          otros. Ellos cooperan con la limpieza y mantenimiento de Somos Más.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 text-center ">
        {loading ? (
          <Loader />
        ) : (
          testimonials.map((testimonial) => (
            <TestimonialItem
              key={testimonial.id}
              name={testimonial.name}
              content={testimonial.content}
            />
          ))
        )}
      </div>
    </section>
  );
};
