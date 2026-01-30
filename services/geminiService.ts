
import { GoogleGenAI, Type } from "@google/genai";
import { VerdictData, SpendingAppetite, MoodTarget } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });

export const analyzeRoom = async (
  imageData: string, 
  budget: SpendingAppetite, 
  mood: MoodTarget
): Promise<VerdictData> => {
  const prompt = `You are the InteriorCost.in AI, an expert in improving Indian homes (rented, temporary, old) without expensive renovations. 
  Your goal is to provide a "Glow-up" plan focused on clarity, energy, vibe, and comfort. 
  The user has a budget of ${budget} and wants a ${mood} vibe.
  Analyze the provided image and respond strictly in JSON format.
  
  Terms to use: energy, vibe, flow, calm, comfort, mental space, visual noise.
  Avoid: vastu, luxury, Pinterest, aspiration, spiritual language.
  
  Be honest, slightly opinionated, and realistic about Indian constraints (e.g. rented limitations).`;

  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: [
      {
        parts: [
          { inlineData: { mimeType: "image/jpeg", data: imageData.split(',')[1] } },
          { text: prompt }
        ]
      }
    ],
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          realityCheck: { type: Type.STRING, description: "A few blunt sentences on how the room currently feels." },
          energyImprovements: { 
            type: Type.ARRAY, 
            items: { type: Type.STRING },
            description: "Bulleted points focused on light, decluttering, balance."
          },
          worthSpendingOn: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                item: { type: Type.STRING },
                range: { type: Type.STRING, description: "₹ range e.g. ₹500 - ₹2000" },
                impact: { type: Type.STRING, description: "High/Medium/Low" }
              },
              required: ["item", "range", "impact"]
            }
          },
          dontOverInvest: { 
            type: Type.ARRAY, 
            items: { type: Type.STRING },
            description: "Gently explain what NOT to fix."
          },
          conceptualMood: { type: Type.STRING, description: "A vivid text description of the conceptual mood preview." }
        },
        required: ["realityCheck", "energyImprovements", "worthSpendingOn", "dontOverInvest", "conceptualMood"]
      }
    }
  });

  try {
    return JSON.parse(response.text || "{}") as VerdictData;
  } catch (e) {
    throw new Error("Failed to parse AI response");
  }
};
