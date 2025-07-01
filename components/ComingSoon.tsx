'use client';

export default function ComingSoon() {
  return (
    <div className="h-screen bg-accent text-primary flex flex-col justify-center items-center px-6 md:px-16 lg:px-24 py-28">
      {/* Main Content */}
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
          Coming Soon!
        </h1>
        <p className="text-lg md:text-xl opacity-90 ">
          Empowering sustainable forest enterprise across Africa. Stay tuned for updates!
        </p>
      </div>
    </div>
  );
}