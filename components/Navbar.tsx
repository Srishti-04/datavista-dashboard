import { Moon, User } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const Navbar = () => {
  return (
    <nav className='p-4 flex items-center justify-between'>
        {/*LEFT*/}
        collapseButton
         {/*RIGHT*/}
         <div className='flex items-center gap-4'>
        <Link href='/'>Dashboard</Link> 
        <Moon/>
        
<DropdownMenu>
  <DropdownMenuTrigger><Avatar>
  <AvatarImage src="https://tse4.mm.bing.net/th/id/OIP.M0Uak0pyXetvVhkUU-RMOAHaEJ?pid=Api&P=0&h=180" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar></DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>
        <User/>
        Profile</DropdownMenuItem>
    <DropdownMenuItem>Billing</DropdownMenuItem>
    <DropdownMenuItem>Team</DropdownMenuItem>
    <DropdownMenuItem>Subscription</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
        </div>
    </nav>
  )
}

export default Navbar