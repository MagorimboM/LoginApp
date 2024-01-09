import React from 'react';
import { MdAccountBox } from "react-icons/md";



function DisplayUserInfo(props:any){

    return (
        <div className=' bg-gray-800 grid grid-col-1 w-full m-10 sm:m-20 p-10'>
            <div className='flex justify-center'>
                <h1 className='font-bold text-2xl'> Your information</h1>
            </div>
            <div className='flex flex-col w-full p-4 gap-1 mb-2 '>
                <div className='flex justify-center w-full' ><MdAccountBox className='p-4 rounded-3xl bg-gray-100 flex text-black justify-center' size={50} /></div>
                <span className='text-xs text-white'>First Name: <span className='ml-3'>{props.user.user_metadata.first_name}</span></span>
                <span className='text-xs text-white'>Last Name :   <span className='ml-3'>{props.user.user_metadata.last_name}</span> </span>
                <span className='w-full border border-b-1 rounded-2xl'></span>
            </div>
            <div className='flex justify-center mb-4'>
                <span>{props.user.email}</span>
            </div>
        </div>);
};

export default DisplayUserInfo;