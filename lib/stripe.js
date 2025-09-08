import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2023-10-16',
});

export const services = {
  'custom-gpt': {
    name: 'Custom GPT Development',
    price: 299900, // $2,999.00 in cents
    description: 'Create powerful, domain-specific AI models tailored to your business requirements'
  },
  'chatbot': {
    name: 'AI Chatbot Solutions',
    price: 149900, // $1,499.00 in cents
    description: 'Intelligent conversational agents that enhance customer experience and support'
  },
  'automation': {
    name: 'AI Automation with Make & n8n',
    price: 99900, // $999.00 in cents
    description: 'Streamline workflows and automate repetitive tasks with advanced AI integrations'
  },
  'education': {
    name: 'AI Education & Training',
    price: 19900, // $199.00 in cents
    description: 'Comprehensive courses and workshops on AI implementation and automation'
  },
  'consulting': {
    name: 'AI Consulting & Strategy',
    price: 50000, // $500.00 in cents
    description: 'Expert guidance on AI adoption and digital transformation strategies'
  }
};

export async function createPaymentIntent(serviceId, customerEmail, customerName) {
  const service = services[serviceId];
  if (!service) {
    throw new Error('Invalid service ID');
  }

  const paymentIntent = await stripe.paymentIntents.create({
    amount: service.price,
    currency: 'usd',
    metadata: {
      service: serviceId,
      customerEmail,
      customerName,
    },
    receipt_email: customerEmail,
  });

  return paymentIntent;
}

export async function createCheckoutSession(serviceId, customerEmail, customerName, successUrl, cancelUrl) {
  const service = services[serviceId];
  if (!service) {
    throw new Error('Invalid service ID');
  }

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: service.name,
            description: service.description,
          },
          unit_amount: service.price,
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: successUrl,
    cancel_url: cancelUrl,
    customer_email: customerEmail,
    metadata: {
      service: serviceId,
      customerName,
    },
  });

  return session;
}

export default stripe;