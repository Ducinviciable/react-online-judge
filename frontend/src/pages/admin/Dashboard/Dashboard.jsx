import React from 'react';
import { Plus, Check, List, Trophy, AlignLeft, CheckCircle } from 'lucide-react';
import AdminSideBar from '../../../components/AdminSideBar';

const Dashboard = () => {
  const users = [
    { firstName: 'Lian', lastName: 'Smith', phone: '622322662', email: 'jonsmith@mail.com' },
    { firstName: 'Emma', lastName: 'Johnson', phone: '622322662', email: 'jonsmith@mail.com' },
    { firstName: 'Oliver', lastName: 'Williams', phone: '622322662', email: 'jonsmith@mail.com' },
    { firstName: 'Isabella', lastName: 'Brown', phone: '622322662', email: 'jonsmith@mail.com' }
  ].flatMap(user => [user, user]); // Duplicate each user to match the original table

  return (
    <main className="w-full flex-grow p-6">
        <h1 className="text-3xl text-black pb-6">Dashboard</h1>

        <div className="flex flex-wrap mt-6">
            <div className="w-full lg:w-1/2 pr-0 lg:pr-2 pb-2">
                <div className='border-spacing-8 border-yellow-300 text-3xl border-l-8 bg-white flex flex-row justify-between px-2 py-4 rounded-lg mx-4 shadow-sm'>
                    <div className='flex flex-row gap-4 items-center text-yellow-300'><Trophy color='yellow' /> Contest</div>
                    <div className='text-yellow-300'>10</div>
                </div>
            </div>
            <div className="w-full lg:w-1/2 pr-0 lg:pr-2 pb-2">
                <div className='border-spacing-8 border-blue-500 text-3xl border-l-8 bg-white flex flex-row justify-between px-2 py-4 rounded-lg mx-4 shadow-sm'>
                    <div className='flex flex-row gap-4 items-center text-blue-400'><List color='blue' /> Problem</div>
                    <div className='text-blue-400'>10</div>
                </div>
            </div>
            <div className="w-full lg:w-1/2 pr-0 lg:pr-2 pb-2">
                <div className="border-spacing-8 border-gray-500 text-3xl border-l-8 bg-white flex flex-row justify-between px-2 py-4 rounded-lg mx-4 shadow-sm">
                    <div className="flex flex-row gap-4 items-center text-gray-500">
                        <AlignLeft color="gray" /> Total submissions
                    </div>
                    <div className="text-gray-500">10</div>
                </div>
            </div>
            <div className="w-full lg:w-1/2 pr-0 lg:pr-2 pb-2">
                <div className="border-spacing-8 border-green-500 text-3xl border-l-8 bg-white flex flex-row justify-between px-2 py-4 rounded-lg mx-4 shadow-sm">
                    <div className="flex flex-row gap-4 items-center text-green-500">
                        <CheckCircle color="green" /> Success submissions
                    </div>
                    <div className="text-green-500">10</div>
                </div>
            </div>
        </div>
    </main>
  );
};

export default Dashboard;