

'use client';
import { useState } from "react";
import SignUp from "./SignUp";
import Login from "./Login";

export default function Account() {
    const [isLogin, setIsLogin] = useState('login')
    return (
        <>
            {isLogin == 'login' ? <Login onclick={setIsLogin}/> : <SignUp onclick={setIsLogin}/>}
        </>
    )
}