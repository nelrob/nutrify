import { connectToDB } from "@utils/database";
import Prompt from '@models/prompt';
import dayjs from "dayjs";
import localizedFormat from 'dayjs/plugin/localizedFormat';

export const POST = async (req) => {
    const {userId, prompt, tag} = await req.json();
    const postDate = new Date().toLocaleString() + "";
    dayjs.extend(localizedFormat);
    
    try {
        await connectToDB();
        const newPrompt = new Prompt({
            creator: userId,
            prompt,
            tag,
            date: dayjs(postDate).format('LLL'),
        })

        await newPrompt.save();
        return new Response(JSON.stringify(newPrompt), { status: 201 })
    } catch (error) {
        return new Response('Failed to create a new prompt', { status: 500 })
    }
}