import { auth } from "@clerk/nextjs"
import { NextResponse } from "next/server"
import { Configuration, OpenAIApi, ChatCompletionRequestMessage } from "openai"
import { incrementApiLimit,checkApiLimit } from "@/lib/api-limit"


const configuration = new Configuration({
    apiKey:process.env.OPEN_API_KEY,
})

const openai = new OpenAIApi(configuration)


const instructionMessage: ChatCompletionRequestMessage = {
  role: "system",
  content: "You are a code generator. You must answer only in markdown code snippets. Use code comments for explanations."
};

export async function POST(
    req:Request
) {
    try { 
        const { userId } = auth()
        const body = await req.json()
        const { messages } = body
        
        if (!userId) {
            return new NextResponse("Unauthorized",{status: 401})
        }

        if (!configuration.apiKey) {
            return new NextResponse("OpenAI key not configured",{status: 500})
        }

        if (!messages) {
            return new NextResponse("Messages are required", { status: 400 });
        }

        const freeTrial = await checkApiLimit();

        if (!freeTrial ) {
        return new NextResponse("Free trial has expired. Please upgrade to pro.", { status: 403 });
        }

        const response = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages:[instructionMessage,...messages]
        });

        await incrementApiLimit()

    return NextResponse.json(response.data.choices[0].message);
    }
    catch (error) {
        console.log("[Code_ERROR]", error)
        return new NextResponse("internal error",{status: 500})
    }
}