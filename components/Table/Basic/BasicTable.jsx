import Dropdown from '@/components/Dropdown/Dropdown';
import React from 'react'

const tableData = [
    {
        id: 1,
        name: 'John Doe',
        email: 'johndoe@yahoo.com',
        date: '10/08/2020',
        sale: 120,
        status: 'Complete',
        register: '5 min ago',
        progress: '40%',
        position: 'Developer',
        office: 'London',
    },
    {
        id: 2,
        name: 'Shaun Park',
        email: 'shaunpark@gmail.com',
        date: '11/08/2020',
        sale: 400,
        status: 'Pending',
        register: '11 min ago',
        progress: '23%',
        position: 'Designer',
        office: 'New York',
    },
    {
        id: 3,
        name: 'Alma Clarke',
        email: 'alma@gmail.com',
        date: '12/02/2020',
        sale: 310,
        status: 'In Progress',
        register: '1 hour ago',
        progress: '80%',
        position: 'Accountant',
        office: 'Amazon',
    },
    {
        id: 4,
        name: 'Vincent Carpenter',
        email: 'vincent@gmail.com',
        date: '13/08/2020',
        sale: 100,
        status: 'Canceled',
        register: '1 day ago',
        progress: '60%',
        position: 'Data Scientist',
        office: 'Canada',
    },
];

const BasicTable = () => {
    const isRtl = false;
  return (
    <div>
       {/* dropdown */}
       <div className="panel">
                <div className="mb-5">
                    <h5 className="text-lg font-semibold dark:text-white-light">Dropdown Table</h5>
                </div>
                <div className="table-responsive mb-5">
                    <table className="table-hover">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Date</th>
                                <th>Sale</th>
                                <th>Status</th>
                                <th className="text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableData.map((data) => {
                                return (
                                    <tr key={data.id}>
                                        <td>
                                            <div className="whitespace-nowrap">{data.name}</div>
                                        </td>
                                        <td>{data.date}</td>
                                        <td>{data.sale}</td>
                                        <td>
                                            <span
                                                className={`badge whitespace-nowrap ${
                                                    data.status === 'completed'
                                                        ? 'bg-primary   '
                                                        : data.status === 'Pending'
                                                        ? 'bg-secondary'
                                                        : data.status === 'In Progress'
                                                        ? 'bg-success'
                                                        : data.status === 'Canceled'
                                                        ? 'bg-danger'
                                                        : 'bg-primary'
                                                }`}
                                            >
                                                {data.status}
                                            </span>
                                        </td>
                                        <td className="text-center">
                                            <div className="dropdown">
                                                <Dropdown
                                                    offset={[0, 5]}
                                                    placement={`${isRtl ? 'bottom-start' : 'bottom-end'}`} 
                                                    

                                                    button={
                                                        <svg className="h-5 w-5 opacity-70" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <circle cx="5" cy="12" r="2" stroke="currentColor" strokeWidth="1.5" />
                                                            <circle opacity="0.5" cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="1.5" />
                                                            <circle cx="19" cy="12" r="2" stroke="currentColor" strokeWidth="1.5" />
                                                        </svg>
                                                    }
                                                >
                                                    <ul>
                                                        <li>
                                                            <button type="button">Download</button>
                                                        </li>
                                                        <li>
                                                            <button type="button">Share</button>
                                                        </li>
                                                        <li>
                                                            <button type="button">Edit</button>
                                                        </li>
                                                        <li>
                                                            <button type="button">Delete</button>
                                                        </li>
                                                    </ul>
                                                </Dropdown>
                                            </div>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
                
            </div>
    </div>
  )
}

export default BasicTable
