const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row gap-48 justify-center items-center h-screen w-screen pb-44 text-4xl">
      <div className="w-80 h-96 bg-blue-200 rounded-lg">
      </div>
      <div>
        Hi, I'm <span className="line-through">Thibault Thuillier, a.k.a</span> Chep0x61
      </div>
    </div>
  );
}

export default Hero;
