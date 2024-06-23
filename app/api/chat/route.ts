import OpenAI from 'openai';
import { OpenAIStream, StreamingTextResponse } from 'ai';

const openai = new OpenAI({
    apiKey: "",
})

export const runtime = "edge";

export async function POST(req: Request, res: Response){
    const {messages} = await req.json();
    console.log('messages:', messages);

    const response = await openai.chat.completions.create({
        model: "gpt-4-1106-preview",
        messages: [
            {
                role: 'system',
                content: "" + "" + ""
            },
            ...messages
        ],
        stream: true,
        temperature: 1,
    });
    const stream = OpenAIStream(response);

    return new StreamingTextResponse(stream);
}