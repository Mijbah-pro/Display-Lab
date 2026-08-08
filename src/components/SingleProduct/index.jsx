"use client";
import { ProductsDatas } from "@/utils";
import { products_details_all_data } from "@/utils/products_details_data";
import {Award,Box,ChevronRight,ClipboardList,Cloud,Cpu,Download,Grid2X2,Layers,Monitor,RotateCw,Sun,Tablet,Users,Wifi} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import SingleProductInquiry from "../Form/SingleProductIncoary";


// Dynamically select the badge icon based on the product badge text
const getBadgeIcon = (text) => {
    const lower = text.toLowerCase();
    if (lower.includes("kiosk")) return <Tablet className="w-3.5 h-3.5" />;
    if (lower.includes("hologram") || lower.includes("holograph")) return <Box className="w-3.5 h-3.5" />;
    if (lower.includes("menu") || lower.includes("board")) return <ClipboardList className="w-3.5 h-3.5" />;
    if (lower.includes("wall")) return <Grid2X2 className="w-3.5 h-3.5" />;
    if (lower.includes("poster")) return <Monitor className="w-3.5 h-3.5" />;
    if (lower.includes("outdoor")) return <Sun className="w-3.5 h-3.5" />;
    return <Monitor className="w-3.5 h-3.5" />;
};

function SingleProduct({ product, index }) {
    console.log(product.product_items ,"product");
    
    const [isFormOpen, setIsFormOpen] = useState(false);
    const router = useRouter();
    if (!product) return null;
    const details = products_details_all_data[product.id] || {};

    // Dynamic badge text based on product type
    let badgeText = "DISPLAY SYSTEM";
    const name = product.name.toLowerCase();
    if (name.includes("cms") || name.includes("software")) {
        badgeText = "CMS Software";
    } else if (name.includes("kiosk")) {
        badgeText = "Smart Kiosk";
    } else if (name.includes("holograph") || name.includes("hologram")) {
        badgeText = "3D Hologram";
    } else if (name.includes("menu")) {
        badgeText = "Digital Menu Board";
    } else if (name.includes("poster")) {
        badgeText = "Digital Poster";
    } else if (name.includes("outdoor")) {
        badgeText = "Outdoor Signage";
    } else if (name.includes("window")) {
        badgeText = "Window Display";
    } else if (name.includes("wall")) {
        badgeText = "Video Wall";
    } else if (name.includes("indoor")) {
        badgeText = "Indoor Display";
    }

    const badgeTextUpper = badgeText.toUpperCase();

    // Map feature image name/url to Lucide Icons
    const getIcon = (imgUrl) => {
        if (!imgUrl) return <Cloud className="text-blue-600 w-5 h-5 shrink-0" />;
        const iconName = imgUrl.toLowerCase();
        if (iconName.includes("monitor") || iconName.includes("screen") || iconName.includes("panel")) {
            return <Monitor className="text-blue-600 w-5 h-5 shrink-0" />;
        }
        if (iconName.includes("wifi") || iconName.includes("network") || iconName.includes("connect")) {
            return <Wifi className="text-blue-600 w-5 h-5 shrink-0" />;
        }
        if (iconName.includes("joystick") || iconName.includes("control") || iconName.includes("touch")) {
            return <Cpu className="text-blue-600 w-5 h-5 shrink-0" />;
        }
        if (iconName.includes("library") || iconName.includes("format") || iconName.includes("media") || iconName.includes("os")) {
            return <Layers className="text-blue-600 w-5 h-5 shrink-0" />;
        }
        return <Award className="text-blue-600 w-5 h-5 shrink-0" />;
    };

    // Default features matching the mockup
    const defaultFeatures = [
        {
            feature_title: "Cloud Based",
            feature_description: "Secure cloud platform for reliable content management.",
            icon: <Cloud className="text-blue-600 w-5 h-5 shrink-0" />
        },
        {
            feature_title: "Real-time Sync",
            feature_description: "Instant updates across all your displays, anywhere.",
            icon: <RotateCw className="text-blue-600 w-5 h-5 shrink-0" />
        },
        {
            feature_title: "Multi-user",
            feature_description: "Role-based access for seamless team collaboration.",
            icon: <Users className="text-blue-600 w-5 h-5 shrink-0" />
        }
    ];

    // If details.key_features is available, map it, else use defaults
    const features = details.key_features?.slice(0, 3).map((feat) => ({
        feature_title: feat.feature_title,
        feature_description: feat.feature_description,
        icon: getIcon(feat.feature_imgUrl)
    })) || defaultFeatures;

    // Display Lab branding prefix
    // const brandedName = product.name.toLowerCase().startsWith("display lab")
    //     ? product.name
    //     : `Display Lab ${product.name}`;

    // Main description
    const description = details.product_description || "Premium commercial digital signage display designed for high-traffic environments.";
  
    
    const bglist = {
        bg1: "/svg/product_card/bg-01.svg",
        bg2: "/svg/product_card/bg-02.svg",
        bg3: "/svg/product_card/bg-03.svg",
        bg4: "/svg/product_card/bg-04.svg"
    }

    const bgImage1 = bglist.bg1 === `/svg/product_card/bg-0${(index % 4) + 1}.svg`;
    const bgImage2 = bglist.bg2 === `/svg/product_card/bg-0${(index % 4) + 1}.svg`;
    const bgImage3 = bglist.bg3 === `/svg/product_card/bg-0${(index % 4) + 1}.svg`;
    const bgImage4 = bglist.bg4 === `/svg/product_card/bg-0${(index % 4) + 1}.svg`;


    // Utilize the high-res transparent PNG images for a clean blend with the card gradients
    const isMenuBoardOrWindow = product.id === 12 || product.id === 8 || product.image?.includes("3D_Holographic_Fan.png") || product.image?.includes("Outdoor_Digital_A_Display.png");
    return (
        <>
        <div 
            className={`bg-white border border-slate-100/80 rounded-[32px] shadow-[0px_3px_8px_rgba(0,0,0,0.24)] hover:shadow-[0px_5px_15px_rgba(0,0,0,0.35)] transition-all duration-500 overflow-hidden flex flex-col ${bgImage1 ? "lg:flex-row-reverse" : `${bgImage2 ? "lg:flex-row" :   `${bgImage3 ? "lg:flex-row-reverse" : `${bgImage4 ? `lg:flex-row` : ``}`}`}`
                } w-full group `}

        >
            {/* Product Image Container */}
            <div onClick={() => router.push(`/details?product_name=${product.name}`)}
                className={`w-full lg:w-[50%] cursor-pointer flex items-center justify-center p-0 relative min-h-[360px] lg:min-h-full overflow-hidden shrink-0`}
            >
                {/* Product Image Link */}
                <div className={`w-full h-full flex ${isMenuBoardOrWindow ? "md:items-start" : "md:items-center" }  ${bgImage1 ? "md:justify-end" : `${bgImage2 ? "md:justify-start" :   `${bgImage3 ? "md:justify-end" : ""}`}`
                } relative z-20 bg-cover bg-center bg-no-repeat`}
                    style={{ backgroundImage: `url(/svg/product_card/bg-0${(index % 4) + 1}.svg)` }} >
                    <Image
                    width={1000}
                    height={1000}
                        className="w-[85%] max-h-[320px] md:max-h-[600px] object-contain transition-transform duration-500 group-hover:scale-105 drop-shadow-[0_20px_50px_rgba(0,122,155,0.18)]"
                        src={product.image}
                        alt={product.name}
                        onError={(e) => {
                            // Fallback to original product.image if png is not loaded properly
                            e.target.src = product.image;
                        }}
                    />
                </div>
            </div>

            {/* Product Details Container */}
            <div className={`w-full lg:w-[50%] py-8 lg:py-10 ${bgImage1 ? "pr-4 pl-4 md:pr-0 md:pl-8 lg:pl-12" : `${bgImage2 ? "pr-4 pl-4 md:pl-0 md:pr-8 lg:pr-12" :   `${bgImage3 ? "pr-4 pl-4 md:pr-0 md:pl-8 lg:pl-12" : `${bgImage4 ? "pr-4 pl-4 md:pl-0 md:pr-8 lg:pr-12" : ``}`}`}`
                } flex flex-col justify-between relative z-10`}>
                <div className="cursor-pointer" onClick={() => router.push(`/details?product_name=${product.name}`)}>
                    {/* Badge */}
                    <div className="inline-flex items-center gap-1.5 bg-blue-50/70 text-blue-600 border border-blue-100/50 text-[10px] sm:text-xs font-bold tracking-wider uppercase px-3.5 py-1.5 rounded-lg w-fit mb-4">
                        {getBadgeIcon(badgeText)}
                        <span>{badgeTextUpper}</span>
                    </div>

                    {/* Title */}
                        <h3 className="text-2xl lg:text-4xl font-black tracking-tight text-slate-900 group-hover:text-[#035eb8] transition-colors leading-tight">
                            {product.name}
                        </h3>

                    {/* Description */}
                    <p className="text-slate-500 text-sm md:text-base mt-4 leading-relaxed font-normal">
                        {description}
                    </p>

                    {/* Divider */}
                    <div className="border-t border-slate-100/80 my-7"></div>
                </div>

                {/* Features and Action Buttons inside: side-by-side on desktop */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    {/* Features Column */}
                    <div onClick={() => router.push(`/details?product_name=${product.name}`)} className="lg:col-span-7 space-y-5 cursor-pointer">
                        {features.map((feat, idx) => (
                            <div key={idx} className="flex items-start gap-4">
                                <div className="w-11 h-11 rounded-full border border-blue-100 bg-blue-50/30 flex items-center justify-center shrink-0">
                                    {feat.icon}
                                </div>
                                <div>
                                    <h4 className="font-extrabold text-slate-800 text-sm md:text-base">
                                        {feat.feature_title}
                                    </h4>
                                    <p className="text-slate-500 text-xs md:text-sm mt-0.5 leading-snug">
                                        {feat.feature_description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Action Buttons Column */}
                    <div className="lg:col-span-5 flex flex-col gap-3 justify-center w-full">
                        <button
                              onClick={() => setIsFormOpen(true)}
                            className="bg-[#035eb8] hover:bg-[#03478b] text-white font-bold py-3.5 px-6 rounded-xl flex items-center justify-between transition-all shadow-md shadow-blue-600/10 hover:shadow-blue-600/20 cursor-pointer text-sm md:text-base"
                        >
                            <span>Product Inquiry</span>
                            <ChevronRight className="w-5 h-5" />
                        </button>

                        <Link
                            href={`/contact?product=${encodeURIComponent(product.name)}`}
                            className="border border-[#035eb8] text-[#035eb8] bg-white hover:bg-blue-50/20 font-bold py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer text-sm md:text-base shadow-sm"
                        >
                            <Download className="w-4 h-4" />
                            <span>Download Brochure</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        {/* Product Inquiry Modal */}
      {isFormOpen && (
        <div
          className="fixed inset-0 top-20 z-100 flex items-center justify-center bg-black/50 p-4"
          onClick={() => setIsFormOpen(false)}
        >
          <div
            className="max-h-[92vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <SingleProductInquiry Product={product} onClose={() => setIsFormOpen(false)} />
          </div>
        </div>
      )}
        </>
    );
}

export default SingleProduct;