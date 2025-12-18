"use client"
import React, { useState } from 'react'
import { ScrollArea } from './ui/scroll-area'
import { Card } from './ui/card'
import { Checkbox } from './ui/checkbox'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'
import { Button } from './ui/button'
import { CalculatorIcon,  CalendarIcon } from 'lucide-react'
import {format} from "date-fns"
import { Calendar } from './ui/calendar'



const ToDoList = () => {
    const [date,setDate] = useState<Date | undefined>(new Date());
    const [open,setOpen]= useState(false);
  return (
    <div className='text-center font-medium'>
        <h1 className='text-lg font-medium mb-4'>ToDo List</h1>
    <Popover open={open} onOpenChange={setOpen}>
  <PopoverTrigger asChild>
    <Button className='w-full' >
        <CalendarIcon/>
        {date ? format(date,"PPP"):<span>Pick a date</span>}
    </Button>
  </PopoverTrigger>
  <PopoverContent className='p-0 w-auto'> 
    

  <Calendar
    mode="single"
    selected={date}
    onSelect={(date)=>{
        setDate(date)
        setOpen(false)
    }}
   
  />
</PopoverContent>
</Popover>
    {/* LIST */}
    
    <ScrollArea className='max-h-[400px] mt-4 overflow-y-auto '>
        <div className='flex flex-col gap-4 p-2'>
       {/* LIST ITEM */}
<Card className='p-4'>
    <div className='flex items-center gap-4 '>
        <Checkbox id='item1' />
        <label htmlFor='item1' className='text-sm text-muted-foreground'> Review analytics report</label>

    </div>
    </Card>   
    <Card className='p-4'>
    <div className='flex items-center gap-4 '>
        <Checkbox id='item1' />
        <label htmlFor='item1' className='text-sm text-muted-foreground'>Approve new user registrations </label>

    </div>
    </Card>   <Card className='p-4'>
    <div className='flex items-center gap-4 '>
        <Checkbox id='item1' />
        <label htmlFor='item1' className='text-sm text-muted-foreground'>Fix payment gateway issues </label>

    </div>
    </Card>   <Card className='p-4'>
    <div className='flex items-center gap-4 '>
        <Checkbox id='item1' checked/>
        <label htmlFor='item1' className='text-sm text-muted-foreground'>Update homepage content </label>

    </div>
    </Card>   <Card className='p-4'>
    <div className='flex items-center gap-4 '>
        <Checkbox id='item1' checked/>
        <label htmlFor='item1' className='text-sm text-muted-foreground'> Check server health status</label>

    </div>
    </Card>   <Card className='p-4'>
    <div className='flex items-center gap-4 '>
        <Checkbox id='item1' checked/>
        <label htmlFor='item1' className='text-sm text-muted-foreground'>Respond to customer queries </label>

    </div>
    </Card>   <Card className='p-4'>
    <div className='flex items-center gap-4 '>
        <Checkbox id='item1' checked/>
        <label htmlFor='item1' className='text-sm text-muted-foreground'>Deploy latest production build </label>

    </div>
    </Card>   <Card className='p-4'>
    <div className='flex items-center gap-4 '>
        <Checkbox id='item1' checked/>
        <label htmlFor='item1' className='text-sm text-muted-foreground'> Backup database</label>

    </div>
    </Card>   <Card className='p-4'>
    <div className='flex items-center gap-4 '>
        <Checkbox id='item1' />
        <label htmlFor='item1' className='text-sm text-muted-foreground'>Plan next sprint tasks </label>

    </div>
    </Card> 
    </div>      
    </ScrollArea>
    </div>
  )
}

export default ToDoList