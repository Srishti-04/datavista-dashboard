import React from 'react'
import { Calendar, ChevronDown, ChevronUp, Home, Inbox, Plus, Projector, Search, Settings, User2 } from "lucide-react"
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupAction, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarSeparator } from './ui/sidebar'
import Link from 'next/link'
import Image from 'next/image'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './ui/collapsible'
const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
]
 
const AppSidebar = () => {
  return <Sidebar collapsible='icon'>
    <SidebarHeader className='py-4'   >
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton asChild >
            <Link href={"/"}  >
            <Image src ="/logo.jpeg" alt="logo" width={20} height= {20} className='rounded' />
            <span className='font-medium' >SRISHTI JAISWAL</span>
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>


    </SidebarHeader>
    <SidebarSeparator className="my-2 opacity-30"/>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map(item=>(
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                    <item.icon/>
                    <span>{item.title}</span></Link>
                  </SidebarMenuButton>

                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Projects

          </SidebarGroupLabel>
          <SidebarGroupAction>
            <Plus /> <span className="sr-only">Add Project</span>
            </SidebarGroupAction>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <Link href={'/#'}>
                    <Projector/>See All Projects</Link>

                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <Link href={'/#'}>
                    <Plus/>Add Projects</Link>

                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
            
          
        </SidebarGroup>
        {/* Collapsible */}
        <Collapsible defaultOpen className="group/collapsible">
<SidebarGroup>
          <SidebarGroupLabel asChild>
            <CollapsibleTrigger>
            Collapsible Group 
            <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
          </CollapsibleTrigger> 

          </SidebarGroupLabel>
          <CollapsibleContent>
            <SidebarGroupContent>

              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <Link href={'/#'}>
                    <Projector/>See All Projects</Link>

                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <Link href={'/#'}>
                    <Plus/>Add Projects</Link>

                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
            </CollapsibleContent>
            
          
        </SidebarGroup>
        </Collapsible>

      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  <User2/>SUYASH <ChevronUp className='ml-auto font-medium'/>
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent align='end'>
                <DropdownMenuItem>Account</DropdownMenuItem>
    <DropdownMenuItem>Setting</DropdownMenuItem>
    <DropdownMenuItem>Sign Out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

          </SidebarMenuItem>
        </SidebarMenu>

      </SidebarFooter>
  </Sidebar>
}

export default AppSidebar