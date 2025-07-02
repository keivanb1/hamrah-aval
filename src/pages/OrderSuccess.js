import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Package, Truck, Mail } from 'lucide-react';

const OrderSuccess = () => {
  // In a real app, this would come from the order data
  const orderNumber = Math.random().toString(36).substr(2, 8).toUpperCase();

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12">
      <div className="max-w-md w-full mx-4">
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          {/* Success Icon */}
          <div className="flex justify-center mb-6">
            <CheckCircle className="w-16 h-16 text-green-500" />
          </div>

          {/* Success Message */}
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Order Placed Successfully!
          </h1>
          <p className="text-gray-600 mb-6">
            Thank you for your purchase. Your order has been confirmed and is being processed.
          </p>

          {/* Order Details */}
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <div className="text-sm text-gray-600 mb-1">Order Number</div>
            <div className="text-lg font-semibold text-gray-900">#{orderNumber}</div>
          </div>

          {/* What's Next */}
          <div className="space-y-4 mb-8">
            <h2 className="text-lg font-semibold text-gray-900">What's Next?</h2>
            
            <div className="space-y-3">
              <div className="flex items-start space-x-3 text-left">
                <Mail className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-sm font-medium text-gray-900">
                    Confirmation Email
                  </div>
                  <div className="text-xs text-gray-600">
                    You'll receive an email confirmation shortly
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-3 text-left">
                <Package className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-sm font-medium text-gray-900">
                    Order Processing
                  </div>
                  <div className="text-xs text-gray-600">
                    We'll prepare your items for shipment
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-3 text-left">
                <Truck className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-sm font-medium text-gray-900">
                    Shipping Updates
                  </div>
                  <div className="text-xs text-gray-600">
                    Track your package with the tracking number we'll send
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <Link
              to="/products"
              className="w-full bg-primary-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-primary-700 transition-colors inline-block"
            >
              Continue Shopping
            </Link>
            <Link
              to="/"
              className="w-full bg-gray-200 text-gray-700 py-3 px-6 rounded-lg font-medium hover:bg-gray-300 transition-colors inline-block"
            >
              Back to Home
            </Link>
          </div>

          {/* Support Info */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-xs text-gray-500">
              Need help? Contact our support team at{' '}
              <a href="mailto:support@electroshop.com" className="text-primary-600 hover:text-primary-700">
                support@electroshop.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;