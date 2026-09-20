import Reveal from "../utils/Reveal";
import Video from "../Video";

function ProductsVideo() {
    return ( <>
    <div className="container_paddingTop container_paddingBtm bg-[#f5f7fb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal props={"w-full"}>
            <h2 className="h2_text text-center">
              Our Products
            </h2>
          </Reveal>
          <div className="hero_section pt-24">
            <div className="relative w-full md:w-3xl lg:w-5xl mx-auto">
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
                  
                  <Video src="/videos/ProductVideo.mp4" />
                </div>
              </div>
            </div>
          </div>

          
          </div>
          </div>
    
    </> );
}

export default ProductsVideo;