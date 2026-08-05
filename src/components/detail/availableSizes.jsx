export default function AvailableSizes({ productData }) {
  if (!productData) return null;

  const sizes = productData.sizes || [];
  const boxItems = productData.box_items || [
    "User manual",
    "Power cable",
    "Warranty card",
    "Base hardware screws",
    "Remote control"
  ];
  const shellBuild = productData.shell_build || {
    frame: "Aluminum alloy bezel with glass front.",
    back_shell: "Heavy duty sheet metal chassis.",
    cms_software: "Supported by Display Lab CMS."
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            Available Sizes & What's Included
          </h2>
          <p className="mt-3 text-gray-600 leading-relaxed">
            The {productData.product_name} is available in multiple screen sizes to suit any space. All
            units ship with a complete accessory package for quick setup.
          </p>
        </div>

        {/* Size Grid */}
        <div className="rounded-lg border border-gray-200 overflow-hidden bg-gray-50">
          <div className="grid md:grid-cols-2 divide-x divide-y divide-gray-200">
            {sizes.map((item, index) => (
              <div key={index} className="p-6 md:p-7">
                <h3 className="text-lg font-semibold text-gray-900">
                  {item.size}
                </h3>

                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {/* In the Box */}
          <div className="bg-gray-800 text-white rounded-lg p-7">
            <h3 className="text-lg font-semibold mb-5">In the Box</h3>

            <ul className="space-y-3 text-sm text-gray-200">
              {boxItems.map((item, i) => (
                <li key={i} className="flex gap-2">
                  <span>•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Shell & Build */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-5">
              Shell & Build
            </h3>

            <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
              <p>
                <span className="font-medium text-gray-900">Frame:</span>{" "}
                {shellBuild.frame}
              </p>

              <p>
                <span className="font-medium text-gray-900">Back shell:</span>{" "}
                {shellBuild.back_shell}
              </p>

              <p>
                <span className="font-medium text-gray-900">CMS Software:</span>{" "}
                {shellBuild.cms_software}
              </p>
            </div>

            {/* Notice */}
            <div className="mt-6 flex items-center gap-3 bg-gray-100 rounded-md px-4 py-3 text-sm text-gray-600">
              <span className="text-gray-500">☑</span>
              <p>All data are subject to the actual items.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
