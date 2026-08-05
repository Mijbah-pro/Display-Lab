"use client";
import { FaRegCalendarAlt, FaRegEdit, FaUserCog } from "react-icons/fa";
import { MdOutlineSettingsSuggest } from "react-icons/md";

function CMS_Content() {
  const Content_data = [
    {
      svg: <FaRegEdit size={40} />,
      title: "Content Creation",
      description:
        "Design oyp catching content for your displays with our user-friendly tools",
    },

    {
      svg: <FaRegCalendarAlt size={40} />,
      title: "Scheduling  & Publishing",
      description:
        "Set up content to play on one of multiple displays with our easy to use scheduling options",
    },
    {
      svg: <MdOutlineSettingsSuggest size={40} />,
      title: "Remote Management",
      description:
        "Manage and update yourcont from anywlasy any time, ensuring frexibility convenence",
    },
  ];
  const Content_data2 = [
    {
        svg: <FaRegEdit size={40} />,
      title: "Intuitive Interface",
      description:
        "Navigate our CMS easily with a stanghfonward user-friendly interface",
    },
    {
        svg: <FaUserCog size={40} />,
      title: "User Permissions",
      description:
        "Control access to content and display management with customizablle user permissions",
    },
    {
        svg: <FaRegEdit size={40} />,
      title: "Display Lab Products",
      description:
        "Explore our range of digital signage displays for various applications.",
    },
  ]
  return (
    <>
    <div className="space-large"></div>
    <div className="">
      <h3 className="section_sub_title">
        Simplify content management
      </h3>
      <p className="section_desc">
        Easily create and organize content playlists, expedule display times and
        add/pdata content in real time: Our CMS makes managing effortless.
      </p>
      <div className="three_columns_items">
        {Content_data.map((singleCard, index) => (
          <div className="single_items_size" key={index}>
            {singleCard?.svg}
            <h4 className="section_sub_sub_title">{singleCard?.title}</h4>
            <p className="section_sub_sub_desc">
              {singleCard?.description}
            </p>
          </div>
        ))}
      </div>

      <h3 className="section_sub_title mt-20">
        Features that make managing content a breeze
      </h3>

      <div className="three_columns_items">
        {Content_data2.map((singleCard, index) => (
          <div className="single_items_size" key={index}>
            {singleCard?.svg}
            <h4 className="section_sub_sub_title">{singleCard?.title}</h4>
            <p className="section_sub_sub_desc">
              {singleCard?.description}
            </p>
          </div>
        ))}
      </div>
    </div>
    </>
    
  );
}

export default CMS_Content;
