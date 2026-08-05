import Footer from "@/components/footer";
import NavberMain from "@/components/NavberMain";

function page() {
  return (
    <>
      <NavberMain />
      <div className="hero-section mt-20">
        <div className="">
          <div className="container">
            <div className="flex flex-col gap-5 items-center py-10">
              <h1 className="title">CONTACT US</h1>
            </div>
          </div>
        </div>
      </div>
      {/* FORM */}
      <div className="form-section my-10">
        <div className="container">
          <div className="mx-auto w-full grid grid-cols-1 md:grid-cols-2 bg-gray-200 rounded-4xl overflow-hidden">
            <div className="px-2 md:p-10 bg-[#005582] text-white flex flex-col justify-between ">
              <div className="">
              <h4 className="title">Get in touch</h4>
              <p className="mt-4 w-5/6 font-semibold">
                We would love to hear from you! Whether you have a question
                about our services, pricing, or anything else, our team is ready
                to answer all your questions.
              </p>
              </div>
              <p className="mt-4 w-5/6">
                {" "}
                <span> Arlington </span>
                <br />
                <span> 901 S Highland St </span>
                <br />
                <span> Suite 301, United States</span>
                <br />
                <span> VA 22204 </span>
                <br />
                <span> +1 571-501-8246 </span>
                <br />
              </p>
            </div>

            <div className="px-2 md:p-10 mt-8">
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="bg-white border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="bg-white border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full bg-white border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <textarea
                  placeholder="Message"
                  rows={5}
                  className="w-full bg-white border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
                <button type="submit" className="button cursor-pointer">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default page;
