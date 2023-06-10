import { connectToDB } from "@utils/database";
import Prompt from '@models/prompt';

export const GET = async (req, {params}) => {
    try {
        await connectToDB;
        // Find post in DB
        const prompt = await Prompt.findById(params.id).populate('creator');
        
        // error
        if (!prompt) return new Response('Prompt not found.', {status: 404});
        return new Response(JSON.stringify(prompt), {status: 200});
    } catch (error) {
        return new Response('Failed to fetch all prompts', {status: 500});
    };
}

export const PATCH = async (req, {params}) => {
    const {prompt, tag} = await req.json();

    try {
        await connectToDB();
        // Find existing post
        const existingPrompt = await Prompt.findById(params.id);

        if(!existingPrompt) return new Response('Prompt not found.', {status: 404});
        // Update with new data
        existingPrompt.prompt = prompt;
        existingPrompt.tag = tag;

        await existingPrompt.save();

        return new Response(JSON.stringify(existingPrompt), {status: 200});
    } catch (error) {
        return new Response('Failed to update the prompt.', {status: 500});
    }
}

export const DELETE = async (req, { params }) => {
    try {
        await connectToDB();

        // Find the post by ID and remove it
        await Prompt.findByIdAndRemove(params.id);

        return new Response("Prompt deleted successfully.", { status: 200 });
    } catch (error) {
        return new Response("Error deleting prompt", { status: 500 });
    }
};