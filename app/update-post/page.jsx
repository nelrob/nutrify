'use client';
import {useEffect, useState} from 'react'
import { useRouter, useSearchParams } from 'next/navigation';

import Form from '@components/Form';

// Edit post
const UpdatePost = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const promptId = searchParams.get('id');

  const [submitting, setIsSubmitting] = useState(false);
  const [post, setPost] = useState({
    prompt: '',
    tag: '',
  });


  useEffect(()=>{
      // Get prompt details from DB
    const getPromptDetails = async () => {
      const response = await fetch(`/api/prompt/${promptId}`);
      const data = await response.json();

      // set those details in form fields
      setPost({
        prompt: data.prompt,
        tag: data.tag,
      });
    }
    if(promptId) getPromptDetails();
  }, [promptId]);

  const updatePost = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // alert if promptId is missing
    if (!promptId) return alert("Missing PromptId!");
    
    try {
      // fetch prompt ID
      const response = await fetch(`/api/prompt/${promptId}`, {
        method: "PATCH",
        body: JSON.stringify({
          prompt: post.prompt,
          tag: post.tag,
        }),
      });

      // back to home screen if successful
      if (response.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form
      type='Edit'
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={updatePost}
    />
  );
  
}

export default UpdatePost;