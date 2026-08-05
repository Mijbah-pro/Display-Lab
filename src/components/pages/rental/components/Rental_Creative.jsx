import Reveal from "@/components/utils/Reveal";

function Rental_Creative() {

    const cardDatas = [
        {
            svg: (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
            </svg>),
            name: "Motion Graphics"
        },

        {
            svg: (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
            </svg>
            ),
            name: "Template Design"
        },
        {
            svg: (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
            </svg>
            ),
            name: "Live Data Feeds"
        },
        {
            svg: (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>
            ),
            name: "Brand Alignment"
        },

    ]

    return (<>
        <div className="relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
            <div className="max-w-375 mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <Reveal props={"w-full"} >
                <h1 className="mt-2 text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight text-center">
                    Display Lab's Rental Devices <br /> Built for Impact
                </h1>
                </Reveal>
                <Reveal props={"w-full"} >

                <div className="w-full grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2 lg:items-start lg:gap-y-10">

                    {/* TEXT CONTENT CONTAINER (Moved to the Left Side on desktop via lg:col-start-1) */}
                    <div className="w-full lg:col-span-1 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:gap-x-8">
                        <div className="lg:pr-4"> {/* Changed to lg:pr-4 for breathing room on the right side next to the image */}
                            <div className="lg:max-w-lg">


                                <div className="max-w-xl text-lg md:text-xl text-gray-600 mb-8 mx-auto lg:mx-0 lg:max-w-lg">
                                    <p>
                                        A stunning display is only as powerful as the content it carries. Display Lab offers a full suite of content creation and management services to ensure your screens always look exceptional — from static branded slides to dynamic motion graphics and real-time data integrations.
                                    </p>
                                    <br />
                                    <p>
                                        Our creative team works hand-in-hand with your marketing department to develop visuals that align with your brand identity, event theme, and audience expectations. Whether you need a quick template refresh or a full motion design package, we deliver pixel-perfect output for every screen size and format.
                                    </p>

                                    {/* Stats Grid */}
                                    <div className="grid grid-cols-2 gap-2">
                                        {cardDatas.map((singleCard,index) => (
                                        <div key={index} className="px-2 py-2 md:px-5 md:py-5 text-center bg-[#003d5e] rounded-2xl flex flex-col items-center justify-center text-white text-base md:text-2xl font-bold mt-6 gap-5">
                                            <span>{singleCard?.svg}</span>
                                            <p className="text-sm md:text-xl">{singleCard?.name}</p>
                                        </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* IMAGE CONTAINER (Moved to the Right Side on desktop via lg:col-start-2) */}
                    <div className="lg:sticky lg:top-20 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden mx-auto">
                        <img
                            alt="Display Lab's Premium Rental Devices"
                            src="https://imgproxy.gamma.app/resize/quality:80/resizing_type:fit/width:2000/https://cdn.gamma.app/2v6wxo9tk6qxbvk/generated-images/I38D9RG_qphIFCV0q8dwO.jpg"
                            className="w-3xl max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-228"
                        />
                    </div>

                </div>
                </Reveal>
            </div>
        </div>
    </>);
}

export default Rental_Creative;