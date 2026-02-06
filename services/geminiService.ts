
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });

export const generateMorningGreeting = async (label: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Gere uma saudação matinal curta, motivadora e amigável em Português do Brasil para alguém que acaba de acordar. O objetivo do alarme era: "${label}". Seja conciso (máximo 2 frases).`,
    });

    return response.text || "Bom dia! Hora de começar o dia com energia.";
  } catch (error) {
    console.error("Error generating greeting:", error);
    return "Bom dia! Desperte para um novo dia cheio de possibilidades.";
  }
};
