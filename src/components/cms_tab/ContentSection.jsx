import { TabsContent } from "../ui/tabs";


function ContentSection() {
  const contentDatas = [
    {
      contentImageUrl:
        "/images/Digital-Signage-Solutions-for-Every-Industry/Retail/Retail_1.jpg",
      contentTitle: "Retail",
      contentDescription:
        "Promote offers, highlight products, and create engaging in-store experiences.",
      contentValue: "smart_content_designer",
    },
    {
      contentImageUrl:
        "/images/Digital-Signage-Solutions-for-Every-Industry/Corporate-Offices/Corporate-Offices.jpg",
      contentTitle: "Corporate Offices",
      contentDescription:
        "Improve internal communication with company news, dashboards, and announcements.",
      contentValue: "flexible_scheduling_playlists",
    },
    {
      contentImageUrl:
        "/images/Digital-Signage-Solutions-for-Every-Industry/Restaurants/Restaurants_2.jpg",
      contentTitle: "Restaurants",
      contentDescription:
        "Display digital menus, promotions, and dynamic pricing updates.",
      contentValue: "seamless_apps_integrations",
    },
    {
      contentImageUrl:
        "/images/Digital-Signage-Solutions-for-Every-Industry/Healthcare/Healthcare_4.jpg",
      contentTitle: "Healthcare",
      contentDescription:
        "Share important information with patients, visitors, and staff across facilities.",
      contentValue: "control_access_empower_teams",
    },
  ];
  return (
    <>
      {contentDatas?.map((singleContentData, index) => (
        <TabsContent
          className={
            "data-[state=active]:animate-in data-[state=active]:fade-in-0 data-[state=active]:slide-in-from-bottom-2 duration-500 h-full"
          }
          key={index}
          value={singleContentData?.contentValue}
        >
          <div className="flex flex-col justify-center h-full">
            <div className="overflow-hidden rounded-xl">
              <img
                src={singleContentData?.contentImageUrl}
                className="w-full h-full object-cover"
              />
            </div>

            {/* <div>
              <h3 className="text-2xl font-semibold mb-4">
                {singleContentData?.contentTitle}
              </h3>

              <p className="text-gray-600 leading-relaxed mb-6">
                {singleContentData?.contentDescription}
              </p>

              <button className="bg-[#105783] hover:bg-[#003051] text-white px-6 py-3 rounded-lg cursor-pointer">
                Setup Digital Signage in Retail Store
              </button>
            </div> */}
          </div>
        </TabsContent>
      ))}
    </>
  );
}

export default ContentSection;
