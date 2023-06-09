'use client';
import {useEffect, useState} from 'react'
import { useRouter, useSearchParams } from 'next/navigation';

import Form from '@components/form';

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
    const getPromptDetails = async () => {
      const response = await fetch(`/api/prompt/${promptId}`);
      const data = await response.json();

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