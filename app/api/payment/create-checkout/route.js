import { NextResponse } from 'next/server';
import { createCheckoutSession } from '@/lib/stripe';

export async function POST(request) {
  try {
    const { serviceId, customerEmail, customerName } = await request.json();

    if (!serviceId || !customerEmail || !customerName) {
      return NextResponse.json(
        { error: 'Service ID, customer email, and name are required' },
        { status: 400 }
      );
    }

    const successUrl = `${request.nextUrl.origin}/payment/success?session_id={CHECKOUT_SESSION_ID}`;
    const cancelUrl = `${request.nextUrl.origin}/payment/cancel`;

    const session = await createCheckoutSession(
      serviceId,
      customerEmail,
      customerName,
      successUrl,
      cancelUrl
    );

    return NextResponse.json({ sessionId: session.id });
  } catch (error) {
    console.error('Checkout creation error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to create checkout session' },
      { status: 500 }
    );
  }
}