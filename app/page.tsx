'use client'
import React, { useEffect } from "react";
import { supabase } from "@/database/supaBase";
import { useState } from 'react';
import { useRouter } from 'next/navigation'
import { UserPage } from '@/app/components/userPage'
import { PopUp } from './components/popUp';
import { LoginForm } from "./components/loginForm";



export default function Home() {
  const [email, setEmail] = useState<any>(``);
  const [password, setPassword] = useState<any>(``);
  const [userLoggedIn, setUserIn] = useState<any>(``);
  const [loading, setLoading] = useState<boolean>(true);
  const [invalidPassword, setInvalidPassword] = useState<boolean>(false);
  const [invalidPasswordMessage, setInvalidPasswordMessage] = useState<any>();
  const router = useRouter();
  // collect login infomation from user
  async function loginUser() {

    const { data, error } = await supabase.auth.signInWithPassword({
      email: email, password: password
    });
    // if there is an issue with logging in let me know... 
    if (error) {

      setInvalidPassword(true);
      setInvalidPasswordMessage(error.message); 

    } else {
      
      router.refresh(); 
      setEmail(``);
      setPassword(``);
      window.location.reload(); 
    };
  };

  function backtoLogin() {

    setInvalidPassword(false);
    setInvalidPasswordMessage(null);
  };

  // in the background check if there is a login on the broswer

  useEffect(() => {
    async function confirmLogin() {

      const { data: { user } } = await supabase.auth.getUser();
      setUserIn(user);
      setLoading(false);
    };
    confirmLogin();
  }, []);
  // if user is logged in then render the userPage component else render the login page
  if (!loading) {
    if (userLoggedIn) {
      return <UserPage user={userLoggedIn} />
    };
    if (invalidPassword == true) {
      return <PopUp backToLogin={backtoLogin} message={invalidPasswordMessage} />
    } else {
      return (
          <main className="p-10 md:p-20 lg:p-20 xl:p-20 bg-gray-700 h-screen w-screen scroll overflow-scroll">
            <LoginForm Email={email} Password={password} setEmail={setEmail} setPassword={setPassword} loginUser={loginUser} />
          </main>
        );
    };
  };
}; 
