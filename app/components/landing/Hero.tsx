import Link from 'next/link';

export default function Hero() {
    return (
        <section className="relative w-full h-screen min-h-[700px] flex items-center overflow-hidden">
            {/* Background Video */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                >
                    <source src="https://static.tildacdn.com/vide3935-3464-4436-b263-333330323961/video-OP24-720.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-black/50" /> {/* Background overlay */}
            </div>

            <div className="max-w-[1200px] mx-auto px-5 lg:px-10 w-full relative z-10">
                <div className="max-w-[900px]">
                    <h1 className="text-[40px] lg:text-[65px] font-bold leading-tight uppercase mb-8 text-white">
                        ПРОФЕССИОНАЛЬНОЕ <br />
                        <span className="gradient-text">УПРАВЛЕНИЕ ПЕРСОНАЛОМ</span>
                    </h1>

                    <div className="text-white text-[18px] lg:text-[20px] leading-relaxed max-w-[700px]">
                        <p className="mb-10 font-light tracking-wide lg:text-[24px]">
                            Предоставляем лучшие аутсорсинговые решения, обеспечивая максимальную эффективность вашего бизнеса
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-4">
                        <Link
                            href="/contact"
                            className="inline-block bg-elite-pink hover:bg-white hover:text-elite-pink text-white px-12 py-5 rounded-full font-bold transition-all transform hover:scale-105 uppercase tracking-wider text-sm"
                        >
                            Бесплатная консультация
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
