import React from 'react'
import Link from 'next/link';

function PopUp(props: any) {



    return (<main className='flex flex-row h-screen w-screen items-center justify-center scroll overflow-y-scroll bg-gray-700 '>

        <div className="p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400" role="alert">
            <span className="font-medium text-red-600">Oops! &nbsp;</span>{props.message}<br />
            <div className='flex justify-center mt-2 text-xs w-full'>
                <span><button onClick={props.backToLogin} className=' text-white transition duration-150 ease-out hover:ease-in text-xs p-2 mb-2 bg-indigo-600 hover:bg-indigo-800 rounded-3xl'>Back to login</button></span>
            </div>
        </div>

    </main >);
};

export { PopUp }; 