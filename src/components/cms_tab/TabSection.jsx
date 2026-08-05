import { TabsTrigger } from "../ui/tabs";

function TabSection() {
  const TabDatas = [
    {
      tabName: "Smart Content Designer",
      tabDescription:
        "Create stunning visuals with an intuitive drag-and-drop editor.Design content quickly using a modern interface built for ease and speed.Bring your ideas to life with flexible tools that make content creation effortless.",
      tabValue: "smart_content_designer",
    },
    {
      tabName: "Flexible Scheduling & Playlists",
      tabDescription:
        "Access thousands of ready-made templates and customize them your way.Combine images, videos, and apps into dynamic playlists for any screen.Schedule and control your content anytime, anywhere from mobile or desktop.",
      tabValue: "flexible_scheduling_playlists",
    },
    {
      tabName: "Seamless Apps & Integrations",
      tabDescription:
        "Connect with popular apps like social media, weather, Teams, and Google Drive. Display content from 140+ integrations directly on your screens.Use split-screen features to show multiple apps and maximize engagement.",
      tabValue: "seamless_apps_integrations",
    },
    {
      tabName: "Control Access, Empower Teams",
      tabDescription:
        "Invite your team to manage and update content with ease.Assign roles and permissions to maintain control and consistency.Collaborate efficiently with streamlined workflows for better screen management.",
      tabValue: "control_access_empower_teams",
    },
  ];
  const tabStyle =
    "w-full text-start p-6 rounded-xl border border-gray-200  bg-gray-50 hover:bg-gray-100 transition-all duration-200  flex flex-col items-center gap-2  whitespace-normal break-words  data-[state=active]:bg-blue-50   data-[state=active]:border-blue-400   data-[state=active]:shadow-sm ";
  // "text-left text-2xl shadow-none p-5 border-l-2 border-r-0 border-b-0 border-t-0 border-gray-300 rounded-none justify-start data-[state=active]:border-[#003051] data-[state=active]:text-[#003051] data-[state=active]:text-xl md:data-[state=active]:text-3xl cursor-pointer";

  return (
    <>
      <div className="flex flex-col w-full max-w-2xl mx-auto gap-4">
        {TabDatas?.map((singleTab, index) => (
          <TabsTrigger
            key={index}
            className={tabStyle}
            value={singleTab?.tabValue}
          >
            <h3 className="text-2xl font-semibold text-gray-900">
              {singleTab?.tabName}
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              {singleTab?.tabDescription}
            </p>
          </TabsTrigger>
        ))}
      </div>
    </>
  );
}

export default TabSection;
