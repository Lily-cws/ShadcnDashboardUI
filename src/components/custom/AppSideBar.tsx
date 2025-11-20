import Link from "next/link";
import { Home, Inbox, Calendar,Search, Settings, User2, ChevronUp, Plus, Projector, CircleDollarSign, Users2, Rocket, SquareCode} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarSeparator,
  SidebarMenuBadge,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
} from "@/components/ui/sidebar";
import { DropdownMenu, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuContent } from "../ui/dropdown-menu";
// import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../ui/collapsible";
import { Badge } from "../ui/badge";

const items =[
    {
        title: "Home",
        url: "/",
        wUrl: true,
        icon: Home,
    },
    {
        title: "Inbox",
        url: "#",
        wUrl: false,
        icon: Inbox,
    },
    {
        title: "User",
        url: "/users",
        wUrl: true,
        icon: Users2,
    },
        {
        title: "Payment",
        url: "/payments",
        wUrl: true,
        icon: CircleDollarSign,
    },
    {
        title: "Calendar",
        url: "#",
        wUrl: false,
        icon: Calendar,
    },
    {
        title: "Search",
        url: "#",
        wUrl: false,
        icon: Search,
    },
        {
        title: "Settings",
        url: "#",
        wUrl: false,
        icon: Settings,
    }
]


const AppSideBar = () =>{
    return(
        <Sidebar side="left" variant="sidebar" collapsible="icon">
            <SidebarHeader className="py-4">
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton asChild>
                            <Link href="/">
                            <span className="text-3xl font-semibold">Dashboard</span>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarSeparator className="mx-auto" />
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Application</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                        {
                            items.map((item)=>(
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <Link href={item.url} className={`${item.wUrl ? "":"cursor-not-allowed"}`}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                    {
                                        item.title === "Inbox" && <SidebarMenuBadge>24</SidebarMenuBadge>
                                    }
                                                                        {
                                        item.title === "Payment" && 
                                        <SidebarMenuBadge>
                                            <div className="">
                                                <Badge className="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums bg-red-500/40 text-white dark:bg-red-500/40" >8</Badge>
                                                <Badge className="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums bg-yellow-500/40 text-white dark:bg-yellow-500/40">9</Badge>
                                                </div>
                                                </SidebarMenuBadge>
                                    }

                                </SidebarMenuItem>
                            ))
                        }
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>

                {/* Standard Project */}
                {/* <SidebarGroup>
                    <SidebarGroupLabel>Projects</SidebarGroupLabel>
                    <SidebarGroupAction>
                        <Plus/><span className="sr-only">Add Project</span>
                    </SidebarGroupAction>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <Link href="/#">
                                    <Projector />
                                    See All Projects
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <Link href="/#" className="cursor-not-allowed">
                                    <Rocket />
                                    Campaign
                                    </Link>
                                </SidebarMenuButton>
                                <SidebarMenuButton asChild>
                                    <Link href="/#" className="cursor-not-allowed">
                                    <SquareCode />
                                    Web Feature
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <Link href="/#" className="cursor-not-allowed">
                                    <Plus />
                                    Add Project
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup> */}
                {/* Collasible Menu */}
                {/* <Collapsible defaultOpen className="group/collapsible">
                    <SidebarGroup>
                        <SidebarGroupLabel asChild>
                            <CollapsibleTrigger>
                                    Collapsible Menu
                                    <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                            </CollapsibleTrigger>
                        </SidebarGroupLabel>
                        <CollapsibleContent>
                            <SidebarGroupContent>
                                <SidebarMenu>
                                    <SidebarMenuItem>
                                        <SidebarMenuButton asChild>
                                            <Link href="/#">
                                            <Projector />
                                            See All Projects
                                            </Link>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                </SidebarMenu>
                                <SidebarMenu>
                                    <SidebarMenuItem>
                                        <SidebarMenuButton asChild>
                                            <Link href="/#" className="cursor-not-allowed">
                                            <Plus />
                                            Add Project
                                            </Link>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                </SidebarMenu>
                            </SidebarGroupContent>
                        </CollapsibleContent>
                    </SidebarGroup>
                </Collapsible> */}
             {/* Nested    */}
             <SidebarGroup>
                    <SidebarGroupLabel>Project</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <Link href="/#" className="cursor-not-allowed">
                                    <Projector />
                                    See All Projects
                                    </Link>
                                </SidebarMenuButton>
                                <SidebarMenuSub>
                                    <SidebarMenuSubItem>
                                        <SidebarMenuSubButton asChild>
                                            <Link href="/#" className="cursor-not-allowed">
                                            <Rocket />
                                            Campaign
                                            </Link>
                                        </SidebarMenuSubButton>
                                    </SidebarMenuSubItem>
                                </SidebarMenuSub>
                                <SidebarMenuSub>
                                    <SidebarMenuSubItem>
                                        <SidebarMenuSubButton asChild>
                                            <Link href="/#" className="cursor-not-allowed">
                                            <SquareCode />
                                            Web Feature
                                            </Link>
                                        </SidebarMenuSubButton>
                                    </SidebarMenuSubItem>
                                </SidebarMenuSub>
                                <SidebarMenuSub>
                                    <SidebarMenuSubItem>
                                        <SidebarMenuSubButton asChild>
                                            <Link href="/#" className="cursor-not-allowed">
                                            <Plus />
                                            Add Project
                                            </Link>
                                        </SidebarMenuSubButton>
                                    </SidebarMenuSubItem>
                                </SidebarMenuSub>
                                <SidebarMenuSub>
                                    <SidebarMenuSubItem>
                                        <SidebarMenuSubButton asChild>
                                            <Link href="/#" className="cursor-not-allowed">
                                            <Plus />
                                            Add Category
                                            </Link>
                                        </SidebarMenuSubButton>
                                    </SidebarMenuSubItem>
                                </SidebarMenuSub>
                            </SidebarMenuItem>

                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            
            <SidebarFooter>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <SidebarMenuButton>
                                    <User2 /> John Doe <ChevronUp className="ml-auto" />
                                </SidebarMenuButton>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuItem className="cursor-not-allowed">Profile</DropdownMenuItem>
                                <DropdownMenuItem className="cursor-not-allowed">Settings</DropdownMenuItem>
                                <DropdownMenuItem className="cursor-not-allowed">Logout</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    )
}

export default AppSideBar;