export default function Seccion({ titulo, bajada }: any) {
  return (
    <div className=" h-full bg-[url('/images/industria.jpg')]">
      <h1 className="py-8 text-black mb-10 font-medium font-manrope text-5xl">
        {titulo}
      </h1>
      <h2>{bajada}</h2>
    </div>
  );
}
