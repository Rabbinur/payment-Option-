import React, { useState } from "react";
import paypal from "../../../assets/logo/068BjcjwBw0snwHIq0KNo5m-15.webp";
import uddokta from "../../../assets/logo/logo (1).png";
import About from "./../About/About";
const PaymentOption = () => {
  const [isCardVisible, setCardVisible] = useState(true);

  const handleCardButtonClick = () => {
    setCardVisible(true);
  };

  const handlePayPalButtonClick = () => {
    setCardVisible(false);
  };
  return (
    <div>
      <section className="antialiased bg-gray-100 text-gray-600 min-h-screen pt-52 p-4">
        <div className="h-full">
          <div>
            <div className="relative px-4 sm:px-6 lg:px-8 max-w-lg mx-auto">
              <img
                className="rounded-t shadow-lg"
                src="https://preview.cruip.com/mosaic/images/pay-bg.jpg"
                width="460"
                height="180"
                alt="Pay background"
              />
            </div>

            <div className="relative px-4 sm:px-6 lg:px-8 pb-8 max-w-lg mx-auto">
              <div className="bg-white px-8 pb-6 rounded-b shadow-lg">
                <div className="text-center mb-6">
                  <div className="mb-2">
                    <img
                      className="-mt-8 inline-flex rounded-full"
                      src="https://preview.cruip.com/mosaic/images/user-64-13.jpg"
                      width="64"
                      height="64"
                      alt="User"
                    />
                  </div>
                  <h1 className="text-xl leading-snug text-gray-800 font-semibold mb-2">
                    Restream 🔥
                  </h1>
                  <div className="text-sm">
                    <ul>
                      <li>Movie: 5000+</li>
                      <li>Drama: 5000+</li>
                      <li>Sports: 500+</li>
                    </ul>
                  </div>
                </div>

                <div className="flex justify-center mb-6">
                  <div className="relative flex w-full p-1 bg-gray-50 rounded">
                    <span
                      className="absolute inset-0 m-1 pointer-events-none"
                      aria-hidden="true"
                    >
                      <span
                        className={`absolute inset-0 w-1/2 bg-white rounded border border-gray-200 shadow-sm transform transition duration-150 ease-in-out ${
                          isCardVisible ? "translate-x-0" : "translate-x-full"
                        }`}
                      ></span>
                    </span>
                    <button
                      className="relative flex-1 text-sm font-medium p-1 transition duration-150 ease-in-out focus:outline-none focus-visible:ring-2"
                      onClick={handleCardButtonClick}
                    >
                      Pay With UddoktaPay
                    </button>
                    <button
                      className="relative flex-1 text-sm font-medium p-1 transition duration-150 ease-in-out focus:outline-none focus-visible:ring-2"
                      onClick={handlePayPalButtonClick}
                    >
                      Pay With PayPal
                    </button>
                  </div>
                </div>

                {isCardVisible && (
                  <div>
                    <div className="space-y-4">
                      <div className="flex justify-center">
                        <img src={uddokta} alt="" className="py-5 w-52" />
                      </div>

                      {/* ... rest of the card form inputs ... */}

                      <div className="mt-6">
                        <div className="mb-4">
                          <button className="font-medium text-sm inline-flex items-center justify-center px-3 py-2 border border-transparent rounded leading-5 shadow-sm transition duration-150 ease-in-out w-full bg-indigo-500 hover:bg-indigo-600 text-white focus:outline-none focus-visible:ring-2">
                            Pay with Uddokta Pay $253.00
                          </button>
                        </div>
                        <div className="text-xs text-gray-500 italic text-center">
                          You'll be charged $253, including $48 for VAT in Italy
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {!isCardVisible && (
                  <div>
                    <div className="flex justify-center">
                      <img src={paypal} alt="" className="py-2 w-52" />
                    </div>
                    <div className="mb-4">
                      <button className="font-medium text-sm inline-flex items-center justify-center px-3 py-2 border border-transparent rounded leading-5 shadow-sm transition duration-150 ease-in-out w-full bg-indigo-500 hover:bg-indigo-600 text-white focus:outline-none focus-visible:ring-2">
                        Pay with PayPal - $253.00
                      </button>
                    </div>
                    <div className="text-xs text-gray-500 italic text-center">
                      You'll be charged $253, including $48 for VAT in Italy
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PaymentOption;
