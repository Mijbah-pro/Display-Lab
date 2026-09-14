"use client"

import * as React from "react"
import Link from "next/link"

import { NavDocuments } from "@/components/nav-documents"
import { NavMain } from "@/components/nav-main"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import {
  LayoutDashboardIcon,
  ListIcon,
  ChartBarIcon,
  FolderIcon,
  UsersIcon,
  Settings2Icon,
  CircleHelpIcon,
  SearchIcon,
  DatabaseIcon,
  FileChartColumnIcon,
  FileIcon,
  CommandIcon,
} from "lucide-react"
import Image from "next/image"

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    // {
    //   title: "Dashboard",
    //   url: "/admin",
    //   icon: <LayoutDashboardIcon />,
    // },
    {
      title: "Blogs",
      url: "/admin/blogs",
      icon: <ListIcon />,
    },
    // {
    //   title: "Analytics",
    //   url: "/admin/analytics",
    //   icon: <ChartBarIcon />,
    // },
    // {
    //   title: "Projects",
    //   url: "/admin/projects",
    //   icon: <FolderIcon />,
    // },
    // {
    //   title: "Team",
    //   url: "/admin/team",
    //   icon: <UsersIcon />,
    // },
  ],
  navSecondary: [
    {
      title: "Settings",
      url: "/admin/settings",
      icon: <Settings2Icon />,
    },
    {
      title: "Get Help",
      url: "/admin/help",
      icon: <CircleHelpIcon />,
    },
    {
      title: "Search",
      url: "/admin/search",
      icon: <SearchIcon />,
    },
  ],
  documents: [
    {
      name: "Data Library",
      url: "/admin/docs/library",
      icon: <DatabaseIcon />,
    },
    {
      name: "Reports",
      url: "/admin/docs/reports",
      icon: <FileChartColumnIcon />,
    },
    {
      name: "Word Assistant",
      url: "/admin/blogs",
      icon: <FileIcon />,
    },
  ],
}

export function AppSidebar({ variant = "inset", ...props }) {
  return (
    <Sidebar variant={variant} collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            {/* Using Next.js Link with asChild on SidebarMenuButton */}
            <SidebarMenuButton className="p-1.5" asChild>
              <Link href="/admin/blogs" className="flex justify-center items-center gap-5">
                {/* <CommandIcon className="size-5" />
                <span className="text-base font-semibold">Acme Inc.</span> */}
              <Image src={"/icon.png"} width={150} height={150} className="object-cover w-[40px] h-[40px]" alt="Logo" />
              <h3 className="font-bold text-2xl">Display Lab</h3>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <NavMain items={data.navMain} />
        {/* <NavDocuments items={data.documents} /> */}
        {/* <NavSecondary items={data.navSecondary} className="mt-auto" /> */}
      </SidebarContent>

      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}