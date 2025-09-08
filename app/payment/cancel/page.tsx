'use client';

import { XCircle, ArrowLeft, Home } from 'lucide-react';
import Link from 'next/link';

export default function PaymentCancel() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 text-center">
        <div className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <XCircle className="w-12 h-12 text-white" />
        </div>
        
        <h1 className="text-3xl font-bold text-white mb-4">Payment Cancelled</h1>
        <p className="text-gray-300 mb-8">
          No worries! Your payment was cancelled and no charges were made. You can try again anytime or contact us if you have questions.
        </p>
        
        <div className="space-y-4">
          <div className="bg-yellow-500/20 border border-yellow-500/30 rounded-lg p-4">
            <h3 className="text-white font-semibold mb-2">Need Help?</h3>
            <p className="text-yellow-300 text-sm">
              If you experienced any issues during checkout, please don't hesitate to contact our support team.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <Link 
              href="/#services"
              className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Try Again
            </Link>
            
            <Link 
              href="/"
              className="inline-flex items-center justify-center px-6 py-3 border border-white/20 text-white rounded-lg font-semibold hover:bg-white/10 transition-all"
            >
              <Home className="w-5 h-5 mr-2" />
              Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}