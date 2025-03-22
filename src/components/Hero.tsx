export default function Hero() {
  return (
    <section
      id="home"
      className="h-screen flex flex-col justify-center items-center text-center bg-gray-900 text-white"
    >
      <h1 className="text-6xl">
        <span className="font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">Hey, I'm Chirag </span>
        🚀
      </h1>
      <p className="mt-4 text-xl text-gray-300">
        Full Stack Developer | React | Next.js | Laravel
      </p>
      <button className="mt-6 px-6 py-3 text-lg font-medium rounded-full bg-blue-600 hover:bg-blue-700 transition">
        View My Work
      </button>
    </section>
  );
}
