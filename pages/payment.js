import { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import Navbar from '../components/_App/Navbar';
import Footer from '../components/_App/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router';
import PageBanner from '../components/Common/PageBanner';

const PaymentForm = ({ planId }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const router = useRouter();

  const handleSubmit = async (event) => {
console.log("===================1");
    event.preventDefault();
    setLoading(true);
    if (!stripe || !elements) {
      setError('Stripe has not loaded yet. Please try again.');
      setLoading(false);
      return;
    }
    console.log("===================2");

    const cardElement = elements.getElement(CardElement);
    console.log("===================3===",cardElement);

    const { error: createPaymentMethodError, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
      billing_details: {
        name: event.target.full_name.value,
      },
    });
    console.log("===================4");

    if (createPaymentMethodError) {
console.log("===================0");

      setError(createPaymentMethodError.message);
      setLoading(false);
      toast.error("Payment Failed");
      return;
    }
    console.log("===================5====",paymentMethod);

    const { id: paymentMethodId } = paymentMethod;
    console.log("===================5===00=",paymentMethodId);
    
    const token2 = localStorage.getItem("token");

    const response = await fetch(`${baseUrl}/payment/subscribe-plan`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token2}`,
      },
      body: JSON.stringify({ plan: 'price_1P9ApLFEOHQHKmKcM9uzsGOc', paymentMethod: paymentMethodId }),
    });

    const { error: backendError } = await response.json();

    if (backendError) {
      setError(backendError);
      setLoading(false);
      return;
    }

    setLoading(false);
    router.push("/patient-info/");
  };

  return (
    <>
      <ToastContainer />
      <Navbar />
      <PageBanner
        pageTitle="Payment"
        homePageUrl="/payment"
        homePageText="Payment"
        activePageText="Payment"
        bgImage="page-title-one"
      />
      <section className="mt-5 mb-5 bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <div className="mx-auto max-w-5xl" style={{display:'flex',justifyContent:'center',flexDirection:"column",alignItems:'center'}}>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white sm:text-2xl">Payment</h2>
            <div style={{width:'30%'}} className="flex justify-center mt-6 sm:mt-8 lg:flex lg:items-start lg:gap-12">
              <div className="w-full max-w-xl p-8 bg-blue-500 rounded-lg shadow-md lg:max-w-2xl">
                <form style={{backgroundColor:'#0046c0',padding:'42px 25px 35px 25px'}} onSubmit={handleSubmit} className="expertise-inner w-full rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
                  <div style={{display:'flex',flexDirection:'column'}}className="mb-6">
                    <label htmlFor="full_name" className="block text-sm font-medium text-gray-900 dark:text-white">Full name*</label>
                    <input type="text" id="full_name" className="input-field block w-full p-2 mt-1 border border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" placeholder="Your name" required />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="card-element" className="block text-sm font-medium text-gray-900 dark:text-white">Card details*</label>
                    <div className="input-field block w-full p-2 mt-1 border border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50">
                      <CardElement id="card-element" />
                    </div>
                  </div>
                  <div className="text-center">
                    <button 
                      type="submit"
                      style={{backgroundColor:'#0046c0',color:'white',marginTop:'2%'}}
                      className="btn appointment-btn">
                        {loading ? 'Processing...' : 'Pay now'}
                    </button>
                  </div>
                  {error && <div className="text-red-500 mt-4">{error}</div>}
                </form>
              </div>
            </div>
            <p className="mt-6 text-center text-gray-500 dark:text-gray-400 sm:mt-8 lg:text-left">
              Payment processed by <a href="#" title="" className="font-medium text-primary-700 underline hover:no-underline dark:text-primary-500">Paddle</a> for <a href="#" title="" className="font-medium text-primary-700 underline hover:no-underline dark:text-primary-500">Flowbite LLC</a> - United States Of America
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default PaymentForm;
