import { SidebarProvider, SidebarTrigger  } from '@/components/ui/sidebar'
import React from 'react'
import { AppSidebar } from './_components/AppSidebar'
import WelcomeContainer from './dashboard/_components/WelcomeContainer'
function DashboardProvider({ children }) {
  return (
    <SidebarProvider>
        <AppSidebar />
       <div className='w-full'>
       {/*<SidebarTrigger /> */}
       <WelcomeContainer/>
        {children}
       </div>
    </SidebarProvider>
  )
}
export function useUser() {
  const user = { name: 'Rao Arvinder', email: 'john@example.com' , picture: "https://lh3.googleusercontent.com/a-/AOh14GgD-MYEXAMPLEURL"}; 
  
  console.log("User from hook:", user);
  return { user };
}
export default DashboardProvider