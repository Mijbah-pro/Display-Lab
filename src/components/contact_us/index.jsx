function ContactUs() {
  return (
    <>
      <div className="py-16 md:py-24 bg-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4">

          {/* Contact Section */}
          <div className="grid md:grid-cols-2 gap-10 items-start">

            {/* Left Side */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <p className="mb-2">info@novisign.com</p>
              <p>(646)893-7770</p>
            </div>

            {/* Right Side Form */}
            <form className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-6">
                <input
                  type="text"
                  placeholder="Name"
                  className="bg-transparent border-b border-white placeholder-white outline-none pb-2"
                />
                <input
                  type="text"
                  placeholder="Phone"
                  className="bg-transparent border-b border-white placeholder-white outline-none pb-2"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="bg-transparent border-b border-white placeholder-white outline-none pb-2"
                />
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Message"
                  className="w-full bg-transparent border-b border-white placeholder-white outline-none pb-2"
                />
              </div>

              <button
                type="submit"
                className="w-full border border-white py-3 hover:bg-white hover:text-pink-600 transition  cursor-pointer"
              >
                SUBMIT
              </button>

            </form>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <p className="text-lg mb-6">Get your free 30-day trial now</p>
            <button className="border border-white px-6 py-3 rounded hover:bg-white hover:text-pink-600 transition cursor-pointer">
              Start here →
            </button>
          </div>

        </div>
      </div>
    </>
  );
}

export default ContactUs;