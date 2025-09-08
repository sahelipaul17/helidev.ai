'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { CheckCircle, ArrowRight, Home } from 'lucide-react';
import Link from 'next/link';

export default function PaymentSuccess() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // You could verify the session with Stripe here
    setTimeout(() => setLoading(false), 1000);
  }, [sessionId]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-white">Confirming your payment...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 text-center">
        <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-12 h-12 text-white" />
        </div>
        
        <h1 className="text-3xl font-bold text-white mb-4">Payment Successful!</h1>
        <p className="text-gray-300 mb-8">
          Thank you for choosing Helidev.ai! We've received your payment and will be in touch shortly to get started on your AI solution.
        </p>
        
        <div className="space-y-4">
          <div className="bg-blue-500/20 border border-blue-500/30 rounded-lg p-4">
            <h3 className="text-white font-semibold mb-2">What's Next?</h3>
            <ul className="text-blue-300 text-sm space-y-1">
              <li>• You'll receive a confirmation email shortly</li>
              <li>• Our team will contact you within 24 hours</li>
              <li>• We'll schedule a discovery call to discuss your project</li>
            </ul>
          </div>
          
          <Link 
            href="/"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all"
          >
            <Home className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}