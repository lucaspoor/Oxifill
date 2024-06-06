import CardMia from './Card';

export default function Cualidades() {
  return (
    <div className="bg-gray-50">
      <div className="w-100 mx-auto p-4 h-[700px] max-w-screen-xl">
        <div className="flex flex-col   ">
          <div className="flex justify-center  w-100 ">
            <h1 className="py-8 text-black mb-10 font-medium font-manrope text-5xl  text-center leading-[60px]">
              Areas Principales
            </h1>
          </div>
          <CardMia />
        </div>
        <div className="flex justify-center">
          <button className="w-80 mt-12 py-4 rounded-lg  text-white font-bold text-lg  bg-emerald-600">
            Ver mas Sobre Oxifill
          </button>
        </div>
      </div>
    </div>
  );
}
