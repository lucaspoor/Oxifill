import '../video.css';
import Nav from './Nav';

export default function Hero() {
  return (
    <section className="relative h-screen font- flex flex-col items-center justify-center text-center text-white py-0 px-3">
      <div className="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
        <video
          className="min-w-full min-h-full absolute object-cover"
          src="/images/testvideo.mp4"
          typeof="video/mp4"
          autoPlay
          muted
          loop
        ></video>
      </div>
      <div className="video-content space-y-2">
        <h1 className="py-8 text-center text-white font-medium font-manrope text-5xl lg:text-left leading-[70px]">
          Dejar de pagar y Genera
        </h1>
        <h3 className="font-light text-5xl font-manrope">Tu propio Oxigeno</h3>
      </div>
    </section>
  );
}
