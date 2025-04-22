"use client"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
  } from "@/components/ui/sidebar"
  import { Button } from "@/components/ui/button";
  import { Plus } from "lucide-react"
  import Image from "next/image";
  import Link from "next/link";
  import { usePathname } from 'next/navigation';
  import { SideBarOption } from "@/services/constants";
  
  export function AppSidebar() {
    return (
      <Sidebar>
        <SidebarHeader className='flex items-center mt-5'>
            <Image src={'/logo.png'} alt="logo" width={100} height={100} className="w-[150px] h-[100px]"/>
            <Button className='w-full mt-4'> <Plus/>Creat New Interview </Button>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
                <SidebarContent>
                    <SidebarMenu>
                        {SideBarOption.map((option,index)=>(
                            <SidebarMenuItem key={index} className='p-1'><SidebarMenuButton asChild className ={'p-5 ${path === option.path && " bg-blue-100"}'}>
                                <Link href={option.path}>
                                <option.icon className={' ${path === option.path ? && "text-primary" :}'} />
                                <span className={'text-[16px] font-medium ${path === option.path ? && "text-primary "}'}>{option.name}</span>
                                </Link>
                            </SidebarMenuButton>
                            </SidebarMenuItem>    
                        ))}
                    </SidebarMenu>
                </SidebarContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter />
      </Sidebar>
    )
  }
  