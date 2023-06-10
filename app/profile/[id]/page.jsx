"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import Profile from "@components/Profile";

const UserProfile = (userId) => {
  const [posts, setPosts] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${userId}/posts`);
      const data = await response.json();
      setPosts(data);
      console.log(`----------- fetched ${userId}'s prompts`)
      
    };

    if (userId) return fetchPosts(userId);
    try {
      
    } catch (error) {
      console.log(error);
    }
  }, userId);
  
  return (
    <Profile
      name={`${userId}'s`}
      desc={`Here is what ${userId} has shared with others.`}
      data={posts}
    />
  );
};

export default UserProfile;
