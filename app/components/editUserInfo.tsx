import React from "react";

function EditUserInfo() {

    const currentInfo = 'currentInfo'

    return (

        <div className='bg-gray-800 grid grid-col-1 w-full m-10 sm:m-20 p-10  '>

            <form action='submit' method='post'>
                <div className='mb-8'>
                    <h2 className='font-bold text-2xl'>Update Your Account Info </h2>
                    <p className="mt-2 text-white text-xs">See your growth and get consulting support!</p>
                </div>
                <div className='mt-4'>
                    <span className='text-xs'>Current Email: {currentInfo}</span>
                    <input className=' bg-gray-800 text-sm rounded-3xl border w-full p-2' placeholder='Enter new email address' required type='email' name='email' title='email' />
                </div>
                <div className='mt-4'>
                    <span className='text-xs'> Current First Name: {currentInfo}</span>
                    <input className=' bg-gray-800 text-sm rounded-3xl border w-full p-2' placeholder='Enter new name' required type='text' name='name' title='name' />
                </div>
                <div className='mt-4'>
                    <span className='text-xs'>Current Last Name: {currentInfo}</span>
                    <input className=' bg-gray-800 text-sm rounded-3xl border w-full p-2' placeholder='Enter new last name' required type='lastname' name='lastname' title='lastname' />
                </div>
                <div className='mt-4'>
                    <span className='text-xs'>Current Password: {currentInfo}</span>
                    <input className=' bg-gray-800 text-sm rounded-3xl border w-full p-2' placeholder='Enter new password' required type='password' name='password' title='password' />
                </div>
                <div className='mt-8 flex justify-center items-center text-xs rounded-3xl bg-purple-600 hover:bg-purple-800'>
                    <button className='p-4  ' type='submit'><p>Update Account</p></button>
                </div>
                <div className='mt-4 text-xs p-2'>
                    <p>@ 2023 Mark.Magorimbo all rights reserved</p>
                </div>
            </form>

        </div>

    );
};

export default EditUserInfo; 