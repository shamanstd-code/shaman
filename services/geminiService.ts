import { GoogleGenAI, Type } from "@google/genai";
import type { DesignService } from '../types';

// This service is currently not used.
// Data is sourced from mockData.ts and managed via the Admin Dashboard.
// This file is kept for potential future features.

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  console.warn("API_KEY environment variable not set. Gemini service will not function.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY! });

const serviceSchema = {
  type: Type.OBJECT,
  properties: {
    id: { type: Type.STRING, description: "A unique identifier for the service." },
    title: { type: Type.STRING, description: "The title of the design service." },
    shortDescription: { type: Type.STRING, description: "A brief, one-sentence description of the service." },
    longDescription: { type: Type.STRING, description: "A detailed paragraph describing the service, what's included, and the process." },
    price: { type: Type.INTEGER, description: "The price of the service in USD." },
    previewImage: { type: Type.STRING, description: "A placeholder image URL from picsum.photos with size 800x600." },
    designerInfo: { type: Type.STRING, description: "A short bio of the designer or team, e.g., 'By Jane Doe, 10 years of experience'." },
    whatsappNumber: { type: Type.STRING, description: "A fictional WhatsApp phone number, formatted as a string of digits with a country code (e.g., '15551234567')." }
  },
  required: ["id", "title", "shortDescription", "longDescription", "price", "previewImage", "designerInfo", "whatsappNumber"]
};

export const generateServices = async (): Promise<DesignService[]> => {
    if (!API_KEY) {
        console.error("Cannot call Gemini: API_KEY is not configured.");
        return [];
    }

  const prompt = `
    Generate a list of 5 fictional graphic design services for a marketplace called "Fivr".
    Services should be common offerings like "Logo Design", "Social Media Kit", "Brand Identity Package", etc.
    For each service, provide a compelling description, a price, a designer bio, and a placeholder image URL.
    Ensure the response is a valid JSON array of service objects.
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: serviceSchema,
        },
      },
    });

    const jsonText = response.text.trim();
    const services: DesignService[] = JSON.parse(jsonText);
    
    if (!Array.isArray(services)) {
        console.error("Gemini did not return an array:", services);
        return [];
    }
    
    return services;
  } catch (error) {
    console.error("Error generating services with Gemini:", error);
    throw new Error("Failed to generate service data.");
  }
};