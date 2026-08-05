function CustomerCounting() {
  const stats = [
    { number: "190,000+", label: "Online Screens" },
    { number: "30,000+", label: "Organizations" },
    { number: "163", label: "Countries" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
      {stats.map((item, index) => (
        <div key={index}>
          <h3 className="text-4xl font-bold text-gray-800">
            {item.number}
          </h3>
          <p className="text-gray-500 mt-2">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
}

export default CustomerCounting;