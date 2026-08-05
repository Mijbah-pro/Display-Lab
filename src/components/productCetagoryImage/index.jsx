import {
    ClipboardList,
    CloudDrizzle,
    DoorOpen,
    Grid2x2,
    LayoutPanelLeft,
    Monitor,
    Presentation,
    ShoppingCart,
} from "lucide-react";
import Image from "next/image";
import Reveal from "../utils/Reveal";

function ProductCetagoryImage({ selectedCategory, setSelectedCategory }) {
    const categories = [
        {
            id: "indoor",
            name: "Ultra Thin Dual Side Stand Display",
            description: "Sleek and ultra-thin displays with dual side visibility.",
            image: "/images/products/product-1.png",
            icon: Monitor,
        },
        {
            id: "kiosks",
            name: "Digital Stand Kiosk",
            description: "Perfect for promotions, advertising and brand awareness.",
            image: "/images/products/product-2.png",
            icon: DoorOpen,
        },
        {
            id: "kiosks",
            name: "Self Ordering Kiosk",
            description: "Interactive kiosks that enhance customer experience and reduce wait time.",
            image: "/images/products/product-4.png",
            icon: ShoppingCart,
        },
        {
            id: "indoor",
            name: "Digital Poster Display",
            description: "Bring your content to life with vibrant digital posters.",
            image: "/images/products/product-5.png",
            icon: LayoutPanelLeft,
        },
        {
            id: "indoor",
            name: "Window Display",
            description: "Attract attention with bright and eye-catching window displays.",
            image: "/images/products/product-6.png",
            icon: Grid2x2,
        },
        {
            id: "kiosks",
            name: '"K" Presentation Stand Display',
            description: "Stylish and portable displays for high impact presentations and events.",
            image: "/images/products/product-7.png",
            icon: Presentation,
        },
        {
            id: "outdoor",
            name: "Outdoor Digital A Display",
            description: "Weatherproof displays built for outdoor performance and durability.",
            image: "/images/products/product-8.png",
            icon: CloudDrizzle,
        },
        {
            id: "menu_boards",
            name: "Digital Menu Board",
            description: "Display menus and offers in a modern and dynamic way.",
            image: "/images/products/product-10.png",
            icon: ClipboardList,
        },
    ];

    console.log(categories, "categories");
    
    const handleCategoryClick = (id) => {
        setSelectedCategory(id);
        const element = document.getElementById("products-section");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-[#eef3fb] via-[#f4f7fc] to-white py-20">
            {/* soft ambient blobs */}
            <div className="pointer-events-none absolute -top-24 right-0 h-[420px] w-[420px] rounded-full bg-blue-100/60 blur-3xl" />
            <div className="pointer-events-none absolute bottom-0 left-0 h-[320px] w-[320px] rounded-full bg-blue-50 blur-3xl" />

            <div className="relative w-full mx-auto px-6 lg:px-48 lg:px-8">
                {/* Heading */}
                <Reveal props={"w-full"}>

                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-extrabold text-[#0b1f4b] tracking-tight">
                        Product Categories
                    </h2>
                    <div className="mx-auto mt-4 h-1 w-14 rounded-full bg-[#2755f0]" />
                    <p className="mt-6 text-gray-500 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
                        Explore our wide range of digital display solutions designed to
                        enhance your business communication.
                    </p>
                </div>
                </Reveal>

                {/* Rows of 4 */}
                    <Reveal props={"w-full"}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3 gap-x-10 gap-y-14">
                            {categories.map((category, i) => {
                                const Icon = category.icon;
                                return (
                                    <div
                                        key={i}
                                        onClick={() => handleCategoryClick(category.id)}
                                        className="group flex items-start gap-4 cursor-pointer"
                                    >
                                        {/* Product image */}
                                        <div className="shrink-0 w-[110px] lg:w-[190px] h-[190px] relative overflow-hidden rounded-md">
                                            <Image
                                                src={category.image}
                                                alt={category.name}
                                                fill
                                                sizes="110px"
                                                className="object-contain transition-transform duration-300 group-hover:scale-105"
                                            />
                                        </div>

                                        {/* Text block */}
                                        <div className="pt-1">
                                            <h4 className="text-[17px] font-bold text-[#0b1f4b] leading-snug">
                                                {category.name}
                                            </h4>
                                            <div className="mt-2 mb-3 h-[3px] w-8 rounded-full bg-[#2755f0]" />
                                            <p className="text-sm text-gray-500 leading-relaxed">
                                                {category.description}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </Reveal> 
            </div>
        </section>
    );
}

export default ProductCetagoryImage;
