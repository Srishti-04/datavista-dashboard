import AppAreaChart from '@/components/AppAreaChart';
import AppBarChart from '@/components/AppBarChart';
import AppPieChart from '@/components/AppPieChart';
import { Button } from '@/components/ui/button'
import { CirclePlus } from "lucide-react";

import React from 'react'

const Homepage = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4'>
      <div className=" bg-primary-foreground p-4 rounded-lg xl:col-span-2"><AppBarChart/></div>
      <div className="bg-primary-foreground p-4 rounded-lg">Test</div>
      <div className="bg-primary-foreground p-4 rounded-lg"><AppPieChart/></div>
      <div className="bg-primary-foreground p-4 rounded-lg">Test</div>
      <div className="bg-primary-foreground p-4 rounded-lg xl:col-span-2"></div>
      <div className="bg-primary-foreground p-4 rounded-lg"><AppAreaChart/></div>
      


    </div>
  )
}

export default Homepage