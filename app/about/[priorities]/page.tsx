import PrioritiesPage from '@/components/PrioritiesPage';
import React from 'react'

const details = {
    production: {
        src: '/production.jpg',
        alt: 'Production',
        content: 'The sustainable production and restoration of gum and resin resources promoted',
        content1: 'To promote the sustainable production and restoration of gums and resin resources.',
        list1: 'Regularly assess, monitor and map resources',
        list2: 'Promote the sustainable management and governance of resources',
        list3: 'Support restoration programmes',
        list4: 'Encourage an enabling policy and legal framework'
    },
}

const Priorities = ({ params }: { params: { priorities: string } }) => {
    const priorities = params.priorities.toLowerCase() as keyof typeof details;

    const priorityData = details[priorities]

  return (
    <div className='flex flex-col justify-center align-middle items-center px-5 w-full pt-16'>
      <PrioritiesPage 
      src={priorityData?.src} 
      alt={priorityData?.alt} 
      title={priorities} 
      content={priorityData?.content} 
      content1={priorityData?.content1} 
      list1={priorityData?.list1} 
      list2={priorityData?.list2} 
      list3={priorityData?.list3} 
      list4={priorityData?.list4} />
    </div>
  )
}

export default Priorities
