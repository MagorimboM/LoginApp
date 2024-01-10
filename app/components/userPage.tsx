'use client'

import { CiLogout } from "react-icons/ci";
import { CiEdit } from "react-icons/ci";
import { RiAccountBoxFill } from "react-icons/ri";
import DisplayUserInfo from './displayUserInfo';
import { supabase } from '@/database/supaBase'
import { useState, useEffect } from 'react';
import { redirect } from 'next/navigation';
import { useRouter } from 'next/navigation';

function UserPage(props: any) {
    const router = useRouter();
    const [error, setError] = useState<any>(``);
    const [signedOut, setSignedOut] = useState<boolean>(false);
    const [userInfo, setUserInfo] = useState<any>();
 

    async function LogOutUser() {
        // send a log out request to supabase
        const { error } = await supabase.auth.signOut();

        // if there issues logging out let me know..

        if (error) {
            console.log(`There appears to be an issue signing out: ${error}`)
            setError(error);
        };
        // reload DOM or render pages...
        router.refresh();
    };

    // while the session is still going, check if the user is still logged in at supabase, 
    // if the user is not logged in then redirect them to login page. 
    useEffect(() => {
        async function CheckIfStillLoggedIn() {

            const { data: { user } } = await supabase.auth.getUser();
            if (!user) {
                setSignedOut(true);
            } else {
                setUserInfo(userInfo);
            };
        };
        CheckIfStillLoggedIn();
    });
    // if the user is logged out, redirect them to login page. 
    if (signedOut == true) {
        redirect(`${location.origin}/`);

    } else {
        return (<main className='flex flex-row h-screen w-screen items-center justify-center scroll overflow-y-scroll bg-gray-700 '>
            <div className='fixed left-0 h-full bg-gray-800 flex flex-col gap-60 p-2 items-center w-20 p-2 scroll overflow-y-scroll'>
                <div className=' flex mt-10 p-4 bg-gray-50 hover:bg-gray-400 text-black transition-color cursor-pointer items-center rounded-3xl'>
                    <button title='showUserDetails' ><RiAccountBoxFill /></button>
                </div>
                <div className='flex flex-col gap-4'>
                    <div className='flex text-white bg-purple-600 hover:bg-purple-800 transition-color p-4 cursor-pointer items-center rounded-3xl'>
                        <button title='logOut' onClick={() => (LogOutUser())} ><CiLogout /></button>
                    </div>
                </div>
            </div>
            <div><DisplayUserInfo user={props.user} /></div>

        </main>);
    }; 
};

export { UserPage }; 