import { LayoutDashboard, Calendar, WalletCards, List, Settings, BriefcaseBusinessIcon, Puzzle, User2Icon } from "lucide-react";
import { Code2Icon, UserIcon } from 'lucide-react';

export const SideBarOption=[
    {
        name:'Dashboard',
        icon:LayoutDashboard,
        path:'/dashboard'
    },
    {
        name:'Scheduled Interview',
        icon: Calendar,
        path:'/scheduled-interview'
    },
    {
        name:'All Interview',
        icon: List,
        path:'/all-interview'
    },  {
        name:'Billing',
        icon: WalletCards,
        path:'/billing'
    },  {
        name:'Setting',
        icon: Settings,
        path:'/setting'
    },
]
export const InterviewType = [
    {
        title: 'Technical',
        icon: Code2Icon
    },
    {
        title: 'Behavioral',
        icon: UserIcon
    },
    {
        title: 'Experience',
        icon: BriefcaseBusinessIcon
    },
    {
        title: 'Problem Solving',
        icon: Puzzle
    },
    {
        title: 'Behavioural',
        icon: Code2Icon
    },
]