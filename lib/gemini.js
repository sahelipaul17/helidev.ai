import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export async function generateAIResponse(message, conversationHistory = []) {
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

    // Create context for Bunny AI assistant
    const systemPrompt = `You are Bunny, a friendly and knowledgeable AI assistant for Helidev.ai. You specialize in:

1. AI Automation with Make.com and n8n
2. Custom GPT development and implementation
3. AI chatbot solutions
4. AI education and training
5. Business process automation
6. AI consulting and strategy

Your personality:
- Friendly, helpful, and enthusiastic about AI
- Use occasional bunny emojis 🐰 but don't overdo it
- Professional yet approachable
- Always try to guide conversations toward how Helidev.ai can help
- Provide specific, actionable advice
- Ask follow-up questions to better understand client needs

Services you can discuss:
- Custom GPT Development ($2,999+)
- AI Chatbot Solutions ($1,499+)
- AI Automation with Make & n8n ($999+)
- AI Education & Training ($199+)
- Custom AI Development (Custom quote)
- AI Consulting & Strategy ($500+)

Always be helpful and try to understand what the user needs, then suggest appropriate Helidev.ai services.`;

    // Combine system prompt with conversation history
    const fullPrompt = `${systemPrompt}\n\nConversation history:\n${conversationHistory.map(msg => `${msg.isBot ? 'Bunny' : 'User'}: ${msg.text}`).join('\n')}\n\nUser: ${message}\n\nBunny:`;

    const result = await model.generateContent(fullPrompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('Gemini API Error:', error);
    return "I'm having trouble connecting right now 🐰 But I'd love to help you with AI solutions! Could you try asking again, or would you like to speak with our team directly?";
  }
}