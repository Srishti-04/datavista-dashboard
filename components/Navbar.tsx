import { Moon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const Navbar = () => {
  return (
    <nav className='p-4 flex items-center justify-between'>
        {/*LEFT*/}
        collapseButton
         {/*RIGHT*/}
         <div className='flex items-center gap-4'>
        <Link href='/'>Dashboard</Link> 
        <Moon/>
        <Avatar>
  <AvatarImage src="https://tse4.mm.bing.net/th/id/OIP.M0Uak0pyXetvVhkUU-RMOAHaEJ?pid=Api&P=0&h=180" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>
        </div>
    </nav>
  )
}

export default Navbar