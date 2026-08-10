"use client";
import SingleProduct from "@/components/SingleProduct";
import Reveal from "@/components/utils/Reveal";
import { ProductsDatas } from "@/utils";
import {
  Box,
  Calendar,
  ClipboardList,
  CloudDrizzle,
  Grid2X2,
  LayoutGrid,
  Lightbulb,
  Monitor,
  Presentation,
  Sun,
  Tablet
} from "lucide-react";
import { useEffect, useState } from "react";


const TOP_CATEGORIES = [
  { id: "indoor", label: "Indoor Displays", icon: Monitor },
  { id: "outdoor", label: "Outdoor Displays", icon: Sun },
]

const CATEGORIES = [
  { id: "all", label: "All Products", icon: LayoutGrid },
  { id: "ultra_thin_dual_side_stand_display", label: "Ultra Thin Dual Side Stand Display", icon: Tablet },
  { id: "digital_stand_kiosk", label: "Digital Stand Kiosk", icon: ClipboardList },
  { id: "self_ordering_kiosk", label: "Self Ordering Kiosk", icon: Grid2X2 },
  { id: "digital_poster_display", label: "Digital Poster Display", icon: Box },
  { id: "window_display", label: "Window Display", icon: Calendar },
  { id: "k_style_presentation", label: '"K" Presentation Stand Display', icon: Presentation },
  { id: "outdoor_digital_a_display", label: "Outdoor Digital A Display", icon: CloudDrizzle },
  { id: "digital_menu_board", label: "Digital Menu Board", icon: ClipboardList },
  { id: "gobo_projectors", label: "GOBO Projector", icon: Lightbulb }
];

function Products({ selectedCategory: propSelectedCategory, setSelectedCategory: propSetSelectedCategory }) {
  const [localCategory, setLocalCategory] = useState("all");
  const selectedCategory = propSelectedCategory !== undefined ? propSelectedCategory : localCategory;
  const setSelectedCategory = propSetSelectedCategory !== undefined ? propSetSelectedCategory : setLocalCategory;
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    setShowAll(false);
  }, [selectedCategory]);

  const handleShowAll = () => {
    setShowAll(!showAll);
  };

  const handleCategorySelect = (categoryId) => {
    setSelectedCategory(categoryId);
    setShowAll(false);
    const element = document.getElementById("products-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Filter products based on selected category
  // const filteredProducts = ProductsDatas.filter(product => {
  //   if (selectedCategory === "all") return true;

  //   if (selectedCategory === "rentals") {
  //     // Products available for rent: Indoor Display (1), Stand Kiosk (2, 6), 3D Holographic Fan (3)
  //     return product.id === 1 || product.id === 2 || product.id === 6 || product.id === 3;
  //   }
  //   return product.category === selectedCategory;
  // });

  const filteredProducts = ProductsDatas.filter(product => {
    if (selectedCategory === "all") return true;

    if (selectedCategory === "rentals") {
      // Products available for rent: Indoor Display (1), Stand Kiosk (2, 6), 3D Holographic Fan (3)
      return product.id === 1 || product.id === 2 || product.id === 6 || product.id === 3;
    }

    // category is an array of category ids, so check membership instead of equality
    return Array.isArray(product.category)
      ? product.category.includes(selectedCategory)
      : product.category === selectedCategory;
  });


  const productsToShow = showAll ? filteredProducts : filteredProducts.slice(0, 6);

  return (
    <>
      <div id="products-section" className="space-large" style={{ scrollMarginTop: "120px" }}></div>
      <div className="flex flex-col gap-12 max-w-375 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 ">
          <Reveal props={"w-full"}>
            <div className="flex flex-col gap-4">
              <h1 className="title text-center text-gray-900">Display Lab Products</h1>
              <p className="section_desc text-center max-w-2xl mx-auto text-gray-600">
                Explore our range of digital signage displays for various applications.
              </p>
            </div>
          </Reveal>

          {/* Product Categories Bar */}
          

            {/* Product Categories Bar */}
            <div className="flex flex-col items-center gap-3 w-full sticky top-4 z-50 bg-white/80 backdrop-blur-sm py-2">

              {/* Top row: All / Indoor / Outdoor */}
              <Reveal props={"w-full"}>
                <div className="w-fit mx-auto bg-white rounded-2xl shadow-[0_4px_25px_rgba(0,0,0,0.06)] border border-slate-100 p-2 flex flex-wrap items-center justify-center gap-2 md:gap-3">
                  {TOP_CATEGORIES.map((cat) => {
                    const Icon = cat.icon;
                    const isActive = selectedCategory === cat.id;
                    return (
                      <button
                        key={cat.id}
                        onClick={() => handleCategorySelect(cat.id)}
                        className={`flex items-center gap-2.5 px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer shrink-0 bg-cyan-50 ${isActive
                            ? "bg-cyan-600 text-white shadow-md shadow-cyan-600/20"
                            : "text-slate-600"
                          }`}
                      >
                        <Icon size={18} />
                        <span>{cat.label}</span>
                      </button>
                    );
                  })}
                </div>
              </Reveal>

              {/* Bottom row: Other Categories */}
              <Reveal props={"w-full"}>
                <div className="w-full bg-white rounded-2xl shadow-[0_4px_25px_rgba(0,0,0,0.06)] border border-slate-100 p-2 overflow-x-auto scrollbar-none grid grid-cols-2 md:flex flex-wrap items-center justify-start lg:justify-center gap-2 md:gap-3">
                  {CATEGORIES.map((cat) => {
                    const Icon = cat.icon;
                    const isActive = selectedCategory === cat.id;
                    return (
                      <button
                        key={cat.id}
                        onClick={() => handleCategorySelect(cat.id)}
                        className={`flex items-center gap-2.5 px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer shrink-0 bg-cyan-50 ${isActive
                            ? "bg-cyan-600 text-white shadow-md shadow-cyan-600/20"
                            : "text-slate-600 "
                          }`}
                      >
                        <Icon size={18} />
                        <span>{cat.label}</span>
                      </button>
                    );
                  })}
                </div>
              </Reveal>
            </div>
          
          {/* Dynamic Product Grid */}
          <Reveal props={"w-full"}>
            <div className="flex flex-col gap-6">
              {productsToShow.length === 0 ? (
                <div className="text-center py-16 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
                  <p className="text-gray-500 text-lg">No products found in this category.</p>
                </div>
              ) : (
                <>
                  <div className="grid grid-cols-1 gap-8">
                    {productsToShow.map((product, index) => (
                      <SingleProduct key={product.id} product={product} index={index} />
                    ))}
                  </div>

                </>
              )}
            </div>
          </Reveal>
        </div>


        {filteredProducts.length > 6 && (
          <Reveal props={"mx-auto"}>
            <button
              className="button cursor-pointer self-center mt-4"
              onClick={handleShowAll}
            >
              {showAll ? "View Less Products" : "View All Products"}
            </button>
          </Reveal>
        )}
      </div>
    </>
  );
}

export default Products;
