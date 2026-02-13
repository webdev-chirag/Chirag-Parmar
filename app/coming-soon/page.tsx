
import ParticlesBackground from "@/components/ParticlesBackground";

export default function ComingSoon() {
  return (
    <main className="flex h-screen w-full flex-col items-center justify-center bg-[#030014] overflow-hidden relative">
      <ParticlesBackground />
      
      <div className="z-10 flex flex-col items-center justify-center gap-5 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 animate-pulse">
          Coming Soon
        </h1>
        <p className="text-gray-300 text-lg md:text-xl max-w-lg">
          We are working hard to bring you something amazing. Stay tuned!
        </p>
        <div className="mt-8">
            <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mx-auto" />
        </div>
      </div>
    </main>
  );
}
