import { NextResponse } from 'next/server';
import { headers } from 'next/headers';
import stripe from '@/lib/stripe';

export async function POST(request) {
  const body = await request.text();
  const signature = headers().get('stripe-signature');

  let event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    console.error('Webhook signature verification failed:', err.message);
    return NextResponse.json(
      { error: 'Webhook signature verification failed' },
      { status: 400 }
    );
  }

  // Handle the event
  switch (event.type) {
    case 'checkout.session.completed':
      const session = event.data.object;
      console.log('Payment successful:', session);
      
      // Here you would typically:
      // 1. Update your database with the successful payment
      // 2. Send confirmation email to customer
      // 3. Trigger any post-payment workflows
      // 4. Grant access to purchased services
      
      break;
    case 'payment_intent.succeeded':
      const paymentIntent = event.data.object;
      console.log('Payment intent succeeded:', paymentIntent);
      break;
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  return NextResponse.json({ received: true });
}