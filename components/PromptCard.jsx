'use client';
import Image from 'next/image';
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import MyProfile from '@app/my-profile/page';

const PromptCard = ({ post, handleEdit, handleDelete, handleTagClick }) => {
  const { data: session } = useSession();
  const pathName = usePathname();
  const router = useRouter();

  const handleProfileClick = () => {
    // if post's creator is the user, show my-profile page
    if (post.creator._id === session?.user.id) return router.push("/my-profile");
    // if post's creator is another user, show profile-[id] page
    return router.push(`/profile/${post.creator._id}?name=${post.creator.username}`);
  };

  return (
    // prompt card wrapper
    <div className="prompt_card">
      {/* profile */}
      <div className="flex justify-between items-start gap-5">
        <div
          className='flex-1 flex justify-start items-center gap-3 cursor-pointer'
          onClick={handleProfileClick}
        >
          {/* image */}
          <Image
            src={post.creator.image}
            alt='user_image'
            width={40}
            height={40}
            className='object-contain'
          />
          {/* username and email */}
          <div className='flex flex-col'>
            <h3 className='font-satoshi font-semibold text-gray-900'>
              {post.creator.username}
            </h3>
            <p className='font-inter text-sm text-gray-500'>
                {post.date}
            </p>
          </div>

        </div>

      </div>

      <p className='my-4 font-satoshi text-sm text-gray-700'>{post.prompt}</p>
      <p
        className='font-inter text-sm blue_gradient cursor-pointer'
        onClick={() => handleTagClick && handleTagClick(post.tag)}
      >
        #{post.tag}
      </p>
      
      {/* check if currently logged in user is creator of the post & they're on profile page*/}
      {session?.user.id === post.creator._id && pathName === "/my-profile" && (
        <div className='mt-5 flex-center gap-4 border-t border-gray-100 pt-3'>
          <p
            className='font-inter text-sm text-amber-600 cursor-pointer'
            onClick={handleEdit}
          >
            Edit
          </p>
          <p
            className='font-inter text-sm text-red-500 cursor-pointer'
            onClick={handleDelete}
          >
            Delete
          </p>
        </div>
      )}
    </div>
  )
}

export default PromptCard