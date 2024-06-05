export default function Info() {
  return (
    <div className="w-100 mx-auto p-4 h-screen max-w-screen-xl">
      <div className="flex justify-between  mt-20">
        <img src="/images/psa.png" />

        <div className="video-content  ml-28">
          <h1 className="py-8  text-black font-medium font-manrope text-5xl  text-left leading-[60px]">
            Hacemos que produzcas tu tu propio oxigeno
          </h1>
          <p className="font-manrope mb-12  pr-24 font-medium  text-gray-600">
            Oxifil es el representante en Chile de la empresa “Can Gas” líder en
            plantas productoras de oxígeno para todo tipo de industrias que
            cuenta con la experiencia y equipo de la empresa “Cymmedical” la
            cual tiene una gran equipo y experiencia en la instalación de gases
            en Chile.
          </p>
          <button className="w-48 py-2 rounded-lg text-white font-bold text-lg  bg-emerald-600">
            See brochure
          </button>
        </div>
      </div>
    </div>
  );
}
