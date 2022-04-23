import { useNavigate } from "react-router-dom";

export default function Detail() {
  const navigate = useNavigate();

  const activity = {
    id: 1,
    name: "Fútbol",
    imageUrl: "",
    description:
      "Proin imperdiet arcu at risus tristique, vitae tristique lacus ornare. Suspendisse potenti. Donec felis ante, tincidunt sed augue a, dictum congue nulla. Etiam vehicula quam et nunc accumsan commodo. Aliquam vehicula nisl arcu, vitae tristique sem iaculis in. Donec iaculis nunc massa, non mollis lectus fermentum ut. Sed at velit sit amet augue porta lobortis at a libero. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed vel magna egestas, malesuada dolor sed, malesuada magna. Suspendisse potenti. Proin lobortis ante sapien, in laoreet lacus pharetra vitae. Sed pellentesque vitae lacus in aliquam. Aliquam eget orci mi. Cras venenatis nisi a sagittis tempus.",
  };
  return (
    <section className="w-screen h-screen flex flex-col">
      {activity ? (
        <>
          <section className="w-full h-full flex flex-row">
            <section className="w-5/12 h-full flex flex-row items-center justify-center">
              <div className="w-4/5 h-1/2 bg-slate-400">
                <img />
              </div>
            </section>
            <section className="w-7/12 h-full flex flex-col items-start justify-center p-6">
              <h1 className="font-bold text-5xl mb-12">{activity.name}</h1>
              <p className="text-justify text-md font-normal">
                {activity.description}
              </p>
            </section>
          </section>
        </>
      ) : (
        <section className="w-screen h-screen flex flex-col items-center justify-center p-6">
          <h1 className="font-bold text-5xl mb-12">404.</h1>
          <p className="text-justify text-md font-normal">
            La pagina que estabas buscando no existe. :(
          </p>
        </section>
      )}

      <div className="w-full h-40 flex flex-col justify-evenly items-center">
        <button
          className="bg-gray-200 px-6 py-2 rounded-2xl text-xl font-semibold"
          onClick={() => navigate("/")}
        >
          Volver al menú
        </button>
      </div>
    </section>
  );
}
