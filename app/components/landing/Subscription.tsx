export default function Subscription() {
    return (
        <section className="py-20 bg-elite-black text-white">
            <div className="max-w-[1200px] mx-auto px-5 lg:px-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
                    <div className="max-w-[700px]">
                        <h2 className="text-[36px] lg:text-[45px] font-bold uppercase mb-4 leading-tight">
                            <span className="gradient-text">БУДЬ В КУРСЕ</span>
                        </h2>
                        <p className="text-gray-300 text-[18px] leading-relaxed">
                            Подпишитесь на последние обновления и узнавайте о новинках и специальных предложениях первыми
                        </p>
                    </div>
                    <form className="w-full lg:w-auto flex flex-col sm:flex-row items-center gap-4">
                        <input
                            type="email"
                            placeholder="Ваш email"
                            className="w-full sm:w-[320px] bg-transparent border border-white/20 px-5 py-4 rounded-full focus:outline-none focus:border-elite-pink transition-colors"
                            required
                        />
                        <button className="w-full sm:w-auto bg-elite-pink text-white font-bold px-10 py-4 rounded-full uppercase tracking-widest hover:bg-[#c91659] transition-all duration-300">
                            Подписаться
                        </button>
                    </form>
                </div>
                <p className="text-[12px] text-gray-500 mt-6">
                    Нажимая кнопку “Подписаться", вы соглашаетесь с политикой конфиденциальности
                </p>
            </div>
        </section>
    );
}
