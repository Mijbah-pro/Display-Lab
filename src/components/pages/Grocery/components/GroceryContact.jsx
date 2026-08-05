function GroceryContact() {

    return (
<section id="contact" className="py-16">
  <div className="container mx-auto px-4">
    <div className="flex flex-col md:flex-row items-center justify-between gap-8 rounded-2xl bg-gray-900 p-8 md:p-12">
      <div>
        <h2 className="text-3xl font-bold text-white md:text-4xl">
          Ready to modernize your grocery store?
        </h2>
        <p className="mt-4 max-w-xl text-gray-300">
          Start with your existing screens or request a complete hardware and
          software package.
        </p>
      </div>

      <div className="flex flex-wrap gap-3">
        <a
          href="mailto:sales@displaylab.com"
          className="rounded-lg bg-white px-6 py-3 font-medium text-gray-900 transition hover:bg-gray-100"
        >
          Request a Demo
        </a>

        <a
          href="mailto:sales@displaylab.com"
          className="rounded-lg border border-white px-6 py-3 font-medium text-white transition hover:bg-white hover:text-gray-900"
        >
          Talk to Sales
        </a>
      </div>
    </div>
  </div>
</section>

 );
}

export default GroceryContact;