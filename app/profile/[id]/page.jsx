"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import Profile from "@components/Profile";

const UserProfile = ({ params }) => {
    const searchParams = useSearchParams();
    const userName = searchParams.get("name");

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch(`/api/users/${params?.id}/posts`);
            const data = await response.json();
            console.log(`fetched ${params?.id}'s data`)
            setPosts(data);
        };

        if (params?.id) fetchPosts();
    }, [params.id]);
    
    return (
        <Profile
            name={`${userName}'s`}
            desc={`Here is what ${userName} has shared with the world.`}
            data={posts}
        />
    );
};

export default UserProfile;