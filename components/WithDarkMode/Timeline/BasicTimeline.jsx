"use client";
import React from "react";

const items = [
    {
        id: 0,
        time: '10:00',
        title: 'Updated Server Logs',
        duration: ' 25 mins ago'
    },
    {
        id: 1,
        time: '12:45',
        title: 'Backup Files EOD',
        duration: ' 2 hrs ago'
    },
    {
        id: 2,
        time: '14:00',
        title: 'Send Mail to HR and Admin',
        duration: '4 hrs ago'
    },
    {
        id: 3,
        time: '16:00',
        title: 'Conference call with Marketing Manager',
        duration: '6 hrs ago'
    },{
        id: 4,
        time: '17:00',
        title: 'Collected documents from Sara',
        duration: '9 hrs ago'
    },
    {
        id: 5,
        time: '16:00',
        title: 'Server rebooted successfully',
        duration: ' 8 hrs ago'
    },

]

const BasicTimeline = () => {
  return (
    <div className="grid grid-cols-1 gap-6 pt-5 xl:grid-cols-2">
      {/* basic */}
      <div className="panel">
        <div className="mb-5 flex items-center justify-between">
          <h5 className="text-lg font-semibold dark:text-white-light">Basic</h5>
        </div>
        <div className="mb-5">
          <div className="mx-auto max-w-[900px]">
            {
                items.map((item, index) => (
                    <div key={item.id} className="flex">
              <p className="min-w-[58px] max-w-[100px] py-2.5 text-base font-semibold text-[#3b3f5c] dark:text-white-light">
               {
                item.time
               }
              </p>
              <div className={`relative before:absolute before:left-1/2 before:top-[15px] before:h-2.5 before:w-2.5 before:-translate-x-1/2 before:rounded-full before:border-2
              ${index === 0 ? 'before:border-primary' : index === 1 ?
               'before:border-secondary' : index === 2 ? 'before:border-success' : index === 3 ?
                'before:border-danger' : index === 4 ? 'before:border-warning' : index === 5 ? 'before:border-info' : ''} 
                after:${index === 5 ? '': 'absolute'}
                after:${index === 5 ? '': 'left-1/2'} 
                after:${index === 5 ? '': 'top-[25px]'} 
                after:${index === 5 ? '': '-bottom-[15px]'}
                after:${index === 5 ? 'h-0': 'h-auto'}
                after:${index === 5 ? '': 'w-0'}
                after:${index === 5 ? '': '-translate-x-1/2'}
                after:${index === 5 ? '': 'rounded-full'}
                after:${index === 5 ? '': 'border-l-2'}
               ${index === 0 ? ' after:border-primary' : index === 1 ?
               'after:border-secondary' : index === 2 ? 'after:border-success' : index === 3 ?
                'after:border-danger' : index === 4 ? 'after:border-warning' : index === 5 ? '' : ''} 
               `}></div>
              <div className="self-center p-2.5 mx-2.5">
                <p className="text-[13px] font-semibold text-[#3b3f5c] dark:text-white-light">
                  {
                    item.title
                  }
                </p>
                <p className="min-w-[100px] max-w-[100px] self-center text-xs font-bold text-white-dark">
                 {
                    item.duration
                 }
                </p>
              </div>
            </div>
                ))
            }
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default BasicTimeline;
