"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react'

const Nav = () => {
    const { data: session  } = useSession();
    const [providers, setProviders] = useState(null);
    const [toggleDropdown, setToggleDropdown] = useState(false);

    useEffect(()=> {
        const setUpProviders = async () => {
            const response = await getProviders();
            setProviders(response);
        }
        setUpProviders();
    }, [])

    return (
        <nav className="flex-between w-full mb-16 pt-3">
            <Link href="/" className='flex gap-2 flex-center'>
            <Image 
                src={"/assets/images/logo.svg"}
                alt="Nutrify Logo"
                width={30}
                height={30}
                className='object-contain'
            />
            <p className='logo_text'>Nutrify</p>
            </Link>

            {/* Desktop Navigation */}
            <div className='sm:flex hidden'>
                {session?.user ? (
                    <div className='flex gap-3 md:gap-5'>
                        {/* Post Button */}
                        <Link href="/create-post" className="black_btn"> Create Post </Link>
                        {/* Sign Out Button */}
                        <button type="button" onClick={signOut} className="outline_btn">Sign Out</button>
                        {/* Profile Pic */}
                        <Link href="/profile">
                            <Image 
                            src={session?.user.image}
                            width={37}
                            height={37}
                            alt="Profile Image"
                            onClick={() => setToggleDropdown((prev)=> !prev)}
                            />
                        </Link>
                    
                    </div>
                ): (
                    <>
                    {providers && 
                        Object.values(providers).map((provider) => (
                            <button 
                            type='button' 
                            onClick={() => signIn(provider.id)} 
                            className='black_btn'
                            >
                                Sign In
                            </button>
                        ))}
                    </>
                )}
            </div>


            {/* Mobile Navigation */}
            <div className='sm:hidden flex relative'>
                {session?.user ? (
                    <div className='flex'>
                        {/* Profile Image */}
                        <Image 
                            src={session?.user.image}
                            width={37}
                            height={37}
                            alt="Profile Image"
                            onClick={() => setToggleDropdown((prev)=> !prev)}
                            />
                        
                        {/* Dropdown */}
                        {toggleDropdown && (
                            <div className='dropdown'>
                                {/* My Profile */}
                                <Link href="/profile" className='dropdown_link' onClick={() => setToggleDropdown(false)}>My Profile</Link>
                                {/* Create Post */}
                                <Link href="/create-post" className='dropdown_link' onClick={() => setToggleDropdown(false)}>Create Post</Link>
                                {/* Sign out */}
                                <button 
                                type='button' 
                                className="mt-5 w-full black_btn"
                                onClick={() => {
                                    setToggleDropdown(false);
                                    signOut();    
                                }}
                                >
                                    Sign Out
                                </button>
                            </div>
                            
                        )}
                    </div>
                ):
                <>
                    {providers && 
                        Object.values(providers).map((provider) => (
                            <button 
                            type='button' 
                            onClick={() => signIn(provider.id)} 
                            className='black_btn'
                            >
                                Sign In
                            </button>
                        ))}
                </>
                }
            </div>
        </nav>
    )
}

export default Nav