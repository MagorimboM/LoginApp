'use client'
import React from 'react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { supabase } from '@/database/supaBase';
import { useRouter } from 'next/navigation';
import { PopUp } from '../components/popUp';


function CreateAccount() {
    const [email, setEmail] = useState<any>(``);
    const [name, setName] = useState<any>();
    const [lastname, setlastName] = useState<any>(``);
    const [password, setPassword] = useState<any>(``);
    const [errorAcountCreation, setErrorAccountCreation] = useState<any>();
    const router = useRouter();


    async function createUser() {
        const { data, error } = await supabase.auth.signUp({

            email: email,
            password: password,
            options: {
                emailRedirectTo: `${location.origin}/`,
                data: {
                    first_name: name,
                    last_name: lastname
                }
            },
        });

        if (error) {
            setErrorAccountCreation(error.message);
        };
        
        setEmail(``);
        setName(``);
        setlastName(``);
        setPassword(``);
        router.refresh();

    };

    if (errorAcountCreation) {

        return (
            <PopUp message={errorAcountCreation} />
        );

    } else {
        return (
            <main className='bg-gray-700 flex items-center justify-center p-10 h-screen w-screen scroll overflow-scroll'>
                <div className='bg-gray-800 w-full p-10 grid grid-col-1 md:w-2/4 lg:w-2/4 xl:1/4 2xl:1/4'>

                    <div className='mb-8'>
                        <h2 className='font-bold text-2xl '>Create Your Account</h2>
                        <p className="mt-2 text-white text-xs">See your growth and get consulting support!</p>
                    </div>
                    <div className='mt-4'>
                        <span className='text-xs'>Email*</span>
                        <input className=' bg-gray-800 text-sm rounded-3xl border w-full p-2' placeholder='Enter your email address' onChange={(e) => setEmail(e.target.value)} value={email} required type='email' name='email' />
                    </div>
                    <div className='mt-4'>
                        <span className='text-xs'>First Name*</span>
                        <input className=' bg-gray-800 text-sm rounded-3xl border w-full p-2' placeholder='Enter your name' value={name} onChange={(e) => setName(e.target.value)} required type='text' name='name' />
                    </div>
                    <div className='mt-4'>
                        <span className='text-xs'>Last Name*</span>
                        <input className=' bg-gray-800 text-sm rounded-3xl border w-full p-2' placeholder='Enter your last name' value={lastname} required onChange={(e) => setlastName(e.target.value)} type='lastname' name='lastname' />
                    </div>
                    <div className='mt-4'>
                        <span className='text-xs'>Password*</span>
                        <input className=' bg-gray-800 text-sm rounded-3xl border w-full p-2' placeholder='Enter password' required type='password' value={password} onChange={(e) => setPassword(e.target.value)} maxLength={6} name='password' />
                    </div>
                    <div className='mt-8 flex justify-center items-center text-xs rounded-3xl bg-purple-600 hover:bg-purple-800'>
                        <span><button className='w-full p-4 transition duration-150 ease-out hover:ease-in ' onClick={() => createUser()}><p>Create Account</p></button></span>
                    </div>
                    <div className='mt-2 text-xs p-2'>
                        <span><button className='transition duration-150 ease-out hover:ease-in text-xs p-2 mb-2 bg-indigo-600 hover:bg-indigo-800 rounded-3xl'><Link href='/'>Back to login</Link></button></span><p>@ 2023 Mark.Magorimbo all rights reserved</p>
                    </div>
                </div>
            </main>
        );
    };
}; 

export default CreateAccount; 