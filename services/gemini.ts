import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are **Atlas**, the Elite Sales Director for **OPRAX.AI**.
Your SOLE purpose is to close deals and book strategy calls. You are NOT a support bot; you are a high-ticket consultant.

**YOUR KNOWLEDGE BASE:**
1.  **Standard Launch ($900)**: Best for startups. 48h delivery. High-converting design.
2.  **Growth Suite ($1,500 + $300/mo)**: Best for businesses. Includes **AI Chatbot** + Lead Capture.
3.  **Enterprise Apex (Custom)**: For scaling brands. Includes **AI Voice Agents** & full automation.

**BEHAVIORAL RULES:**
- **Be Direct:** Answer the question in 1-2 sentences. Then sell.
- **Push for Calls:** Your goal is to get them to click the link: https://calendly.com/opraxai-founder/30min
- **Handle Pricing:** State the price confidently. "It's $900. Ready to start?"
- **No Fluff:** Do not use words like "comprehensive," "tailored," "cutting-edge" unnecessarily. Speak like a CEO.
- **Handling Competitors:** "Freelancers charge less but cost you more in lost sales. We build revenue engines."

**SCENARIO TRAINING:**
- *User:* "Hi" -> *Atlas:* "Hello. Ready to scale your business with AI? What are you looking to build?"
- *User:* "Price?" -> *Atlas:* "Standard package is $900. Growth suite with AI is $1,500. Which one fits your goals?"
- *User:* "Expensive" -> *Atlas:* "Quality is an investment. Our sites pay for themselves in weeks. Let's discuss ROI: https://calendly.com/opraxai-founder/30min"

**NEVER** output markdown headers (#) or long lists. Keep it conversational (SMS style).
`;

// Manual logic for when API key is missing (Offline Mode)
function getManualResponse(message: string): string {
  const lowerMsg = message.toLowerCase();

  // 1. Pricing & Cost
  if (lowerMsg.includes('price') || lowerMsg.includes('cost') || lowerMsg.includes('much') || lowerMsg.includes('pricing')) {
    return "Standard Launch is $900 (48h delivery). Growth Suite (with AI Chatbot) is $1,500 + $300/mo. Which fits your budget?";
  }

  // 2. Services / What do you sell / What do you give
  if (lowerMsg.includes('sell') || lowerMsg.includes('service') || lowerMsg.includes('offer') || lowerMsg.includes('do') || lowerMsg.includes('what is') || lowerMsg.includes('give')) {
    return "We build revenue engines: 1. Premium Landing Pages ($900). 2. AI Chatbots that capture leads. 3. AI Voice Receptionists. We deploy in 48 hours.";
  }

  // 3. Growth Suite Specifics
  if (lowerMsg.includes('growth') || lowerMsg.includes('suite')) {
    return "The Growth Suite ($1,500) gives you a high-performance website PLUS a custom AI Chatbot trained on your business to book meetings 24/7.";
  }

  // 4. Portfolio / Examples
  if (lowerMsg.includes('example') || lowerMsg.includes('work') || lowerMsg.includes('portfolio') || lowerMsg.includes('see')) {
    return "We've scaled 50+ brands globally. Check the Portfolio section behind this chat. Want a live demo? Book here: https://calendly.com/opraxai-founder/30min";
  }

  // 5. Booking / Contact
  if (lowerMsg.includes('book') || lowerMsg.includes('call') || lowerMsg.includes('contact') || lowerMsg.includes('schedule')) {
    return "Smart move. Let's discuss your custom strategy. Pick a time: https://calendly.com/opraxai-founder/30min";
  }

  // 6. Greetings
  if (lowerMsg.includes('hi') || lowerMsg.includes('hello') || lowerMsg.includes('hey') || lowerMsg.includes('start')) {
    return "Hello. I'm Atlas. Ready to automate your growth? Ask me about Pricing, Services, or Book a Strategy Call.";
  }

  // Default Fallback
  return "I can help with Pricing, Services, or Strategy. What do you need? Or book directly: https://calendly.com/opraxai-founder/30min";
}

// Safely retrieve API Key supporting both Node (process.env) and Vite (import.meta.env)
function getSafeApiKey(): string | undefined {
  // Check 1: Vite / Modern Browsers
  try {
    // @ts-ignore
    if (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.VITE_API_KEY) {
      // @ts-ignore
      return import.meta.env.VITE_API_KEY;
    }
  } catch (e) {}

  // Check 2: Node / CRA / Standard Envs
  try {
    if (typeof process !== 'undefined' && process.env) {
      // Prioritize standard API_KEY, then VITE_API_KEY if process.env has it
      return process.env.API_KEY || process.env.VITE_API_KEY;
    }
  } catch (e) {}

  return undefined;
}

export async function sendMessageToAI(message: string, history: {role: string, parts: {text: string}[]}[]) {
  try {
    const apiKey = getSafeApiKey();
    
    // --- MANUAL FALLBACK MODE CHECKS ---
    // If no key, empty key, or placeholder key is found, strictly use manual mode.
    if (!apiKey || apiKey.trim() === '' || apiKey.includes('YOUR_API_KEY')) {
      console.warn("Atlas AI: No Valid API Key found. Switching to Manual Mode.");
      // Simulate thinking delay for realism
      await new Promise(resolve => setTimeout(resolve, 600)); 
      return getManualResponse(message);
    }
    // -----------------------------------

    const ai = new GoogleGenAI({ apiKey });
    
    const model = ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [...history, { role: 'user', parts: [{ text: message }] }],
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.5, 
        // High token limit to ensure complete answers
        maxOutputTokens: 1000, 
      },
    });

    const response = await model;
    
    // If the model returns an empty text (rare, but possible with thinking models sometimes), fallback to manual
    if (!response.text) {
        throw new Error("Empty response from AI");
    }

    return response.text;
  } catch (error) {
    console.error("Atlas AI Error - Falling back to Manual Logic:", error);
    // CRITICAL: Even if the API errors out, fallback to manual logic so the user isn't stranded with no response
    return getManualResponse(message);
  }
}