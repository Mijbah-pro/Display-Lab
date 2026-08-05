import Button from "@/components/ui/button";
import Image from "next/image";

function HOW_TO_WORK() {
    return ( <>
    <div className="space-large"></div>
    <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[40px] mx-auto px-4">
            <div className="">
            <Image width={800} height={500} src={'/images/about_us/about_us.png'} alt="about_us" className="object-cover rounded-lg shadow-xl max-w-full h-full"></Image>
          </div>

          <div className="flex flex-col gap-2 md:gap-5 text-center md:text-left items-center md:items-start">
            <p className="text-xs md:text-base text-slate-600 bg-gray-200 w-fit px-3 py-1 rounded-full ml-0 md:-ml-3">
              PLUG-AND-PLAY SOLUTIONS
            </p>
            <h1 className="title mb-10">
              How It Works
            </h1>
    
            <p className="two_column_desc">
              Simple connect the Power, Ethernet (or Wi-Fi), and HDMI cables to set up the digital signage player with a display screen.
            </p>
            
            <p className="two_column_desc">
              Then, login to our secure Digital Signage CMS via a standard web-browser (e.g.Google Chrome) from any PC or Laptop from anywhere.
            </p>

            <p className="two_column_desc">
              Once logged into the CMS, upload images, videos, audio, PDF, MS Office files or design your content and schedule playback across screens.
            </p>

            <Button className={"mt-10"} btnName={"Learn More"} route={"/cms"}/>
          </div>
          
        </div>
    </div>
        
    </> );
}

export default HOW_TO_WORK;