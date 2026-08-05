import Link from "next/link";

function LotMore() {
    return ( <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* hava a 1 div */}
            <div className="mt-16 bg-gradient-to-r from-[#3095b5] to-[#105783] rounded-3xl p-8 md:p-12 text-center shadow-2xl">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    And A Lot More
                </h3>
                <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
                Discover all the powerful features that make OptiSigns the #1 choice for digital signage.
                </p>
                <Link href={"#"} className="bg-white text-[#105783] px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-50 transition-all shadow-xl" >
                Try For Free
                </Link>
            </div>
        </div>
    </section> );
}

export default LotMore;