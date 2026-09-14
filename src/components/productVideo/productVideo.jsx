import Video from "../Video";

function ProductVideo() {
    return ( <>
    
    <div className="container_paddingTop container_paddingBtm bg-[#f5f7fb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="h2_text text-center mb-10">Our Products</h2>
            <div className="hero_section">
            <div className="relative w-full  mx-auto">
              <div className="relative">
                <div
                  animate={{
                    y: [0, 15, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="bg-white rounded-2xl shadow-[0px_5px_15px_rgba(0,0,0,0.35)] p-4 relative z-10"
                >
                  <Video src="/videos/Display-Lab-Rental-Products.mp4" />
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
    
    
    </> );
}

export default ProductVideo;