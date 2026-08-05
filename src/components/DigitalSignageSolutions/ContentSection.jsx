import { TabsContent } from "../ui/tabs";

function ContentSection() {
  const contentDatas = [
    {
      contentImageUrl: "/images/Every-Industry/Retail.jpg",
      contentTitle: "Retail",
      contentDescription:
        "Promote offers, highlight products, and create engaging in-store experiences.",
      contentValue: "retail",
      features: [
        {
          title: "Engage Students",
          desc: "Display announcements,updates,event promotions,and motivational content in common areas,hallways, and classrooms.",
        },
        {
          title: "Improve Campus Navigation",
          desc: "Use interactive maps and directories to help students and visitors easily find their way around campus.",
        },
        {
          title: "Schedule & Alerts",
          desc: "Share class schedules, exam dates, and important alerts, like emergency notifications and weather advisories.",
        },
        {
          title: "Promote Campus Events",
          desc: "Advertise sports games, club activities, guest speakers, and school events to boost participation and awareness.",
        },
      ],
    },
    {
      contentImageUrl: "/images/Every-Industry/Corporate Offices.jpg",
      contentTitle: "Corporate Offices",
      contentDescription:
        "Improve internal communication with company news, dashboards, and announcements.",
      contentValue: "corporate_offices",
      features: [
        {
          title: "Engage Students",
          desc: "Display announcements,updates,event promotions,and motivational content in common areas,hallways, and classrooms.",
        },
        {
          title: "Improve Campus Navigation",
          desc: "Use interactive maps and directories to help students and visitors easily find their way around campus.",
        },
        {
          title: "Schedule & Alerts",
          desc: "Share class schedules, exam dates, and important alerts, like emergency notifications and weather advisories.",
        },
        {
          title: "Promote Campus Events",
          desc: "Advertise sports games, club activities, guest speakers, and school events to boost participation and awareness.",
        },
      ],
    },
    {
      contentImageUrl: "/images/Every-Industry/Restaurants.jpg",
      contentTitle: "Restaurants",
      contentDescription:
        "Display digital menus, promotions, and dynamic pricing updates.",
      contentValue: "restaurants",
      features: [
        {
          title: "Engage Students",
          desc: "Display announcements,updates,event promotions,and motivational content in common areas,hallways, and classrooms.",
        },
        {
          title: "Improve Campus Navigation",
          desc: "Use interactive maps and directories to help students and visitors easily find their way around campus.",
        },
        {
          title: "Schedule & Alerts",
          desc: "Share class schedules, exam dates, and important alerts, like emergency notifications and weather advisories.",
        },
        {
          title: "Promote Campus Events",
          desc: "Advertise sports games, club activities, guest speakers, and school events to boost participation and awareness.",
        },
      ],
    },
    {
      contentImageUrl: "/images/Every-Industry/Healthcare.jpg",
      contentTitle: "Healthcare",
      contentDescription:
        "Share important information with patients, visitors, and staff across facilities.",
      contentValue: "healthcare",
      features: [
        {
          title: "Engage Students",
          desc: "Display announcements,updates,event promotions,and motivational content in common areas,hallways, and classrooms.",
        },
        {
          title: "Improve Campus Navigation",
          desc: "Use interactive maps and directories to help students and visitors easily find their way around campus.",
        },
        {
          title: "Schedule & Alerts",
          desc: "Share class schedules, exam dates, and important alerts, like emergency notifications and weather advisories.",
        },
        {
          title: "Promote Campus Events",
          desc: "Advertise sports games, club activities, guest speakers, and school events to boost participation and awareness.",
        },
      ],
    },
    {
      contentImageUrl: "/images/Every-Industry/Education.jpg",
      contentTitle: "Education",
      contentDescription:
        "Communicate announcements, schedules, and campus updates on digital screens.",
      contentValue: "education",
      features: [
        {
          title: "Engage Students",
          desc: "Display announcements,updates,event promotions,and motivational content in common areas,hallways, and classrooms.",
        },
        {
          title: "Improve Campus Navigation",
          desc: "Use interactive maps and directories to help students and visitors easily find their way around campus.",
        },
        {
          title: "Schedule & Alerts",
          desc: "Share class schedules, exam dates, and important alerts, like emergency notifications and weather advisories.",
        },
        {
          title: "Promote Campus Events",
          desc: "Advertise sports games, club activities, guest speakers, and school events to boost participation and awareness.",
        },
      ],
    },
  ];
  return (
    <>
      {contentDatas?.map((singleContentData, index) => (
        <TabsContent key={index} value={singleContentData.contentValue}>
          
            {/* IMAGE */}
            <div className="hero rounded-xl overflow-hidden mb-6">
              <img
                src={singleContentData.contentImageUrl}
                className="w-full h-65 md:h-87.5 object-cover"
              />
            </div>

            {/* TITLE + DESC */}
            <div className="content mb-8">
              <h3 className="text-3xl font-bold mb-4">
                {singleContentData.contentTitle}
              </h3>
              <p className="text-gray-600 max-w-2xl">
                {singleContentData.contentDescription}
              </p>
            </div>

            {/* FEATURES GRID */}
            <div className=" features grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {singleContentData?.features?.map((feature, i) => (
                <div key={i} className="flex gap-3">
                  <div className="w-10 h-10 flex items-center justify-center bg-blue-50 text-[#105783] rounded-lg">
                    📢
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-gray-600">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            {/* <div className="text-center">
              <button className="bg-[#105783] hover:bg-[#003051] text-white px-8 py-3 rounded-lg">
                Lets Setup a Demo Online
              </button>
            </div> */}
          
        </TabsContent>
      ))}
    </>
  );
}

export default ContentSection;
