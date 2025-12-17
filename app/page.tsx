import AppAreaChart from '@/components/AppAreaChart';
import AppBarChart from '@/components/AppBarChart';
import AppPieChart from '@/components/AppPieChart';
import CardList from '@/components/CardList';
import ToDoList from '@/components/ToDoList';
import { Button } from '@/components/ui/button'
import { CirclePlus } from "lucide-react";

import React from 'react'

const Homepage = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4'>
      <div className=" bg-primary-foreground p-4 rounded-lg xl:col-span-2"><AppBarChart/></div>
      <div className="bg-primary-foreground p-4 rounded-lg text-center"><CardList title='Popular Content'/></div>
      <div className="bg-primary-foreground p-4 rounded-lg text-center"><CardList title='Latest Transactions'/></div>
      <div className="bg-primary-foreground p-4 rounded-lg xl:col-span-2"><AppAreaChart/> </div>
      <div className="bg-primary-foreground p-4 rounded-lg "><ToDoList/></div>
      <div className="bg-primary-foreground p-4 rounded-lg "></div>
      <div className="bg-primary-foreground p-4 rounded-lg"><AppPieChart/></div>
      


    </div>
  )
}

export default Homepage