import {tool} from "@langchain/core/tools";
import {createReactAgent} from "@langchain/langgraph/prebuilt";
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { z } from "zod";
import { config } from "dotenv";
config();


const model = new ChatGoogleGenerativeAI({
    model: "gemini-2.0-flash",
    apiKey: process.env.GOOGLE_API_KEY,
    
});

