import React, { useState } from 'react';

const Footer = () => {
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);
  const [showTermsConditions, setShowTermsConditions] = useState(false);

  const togglePrivacyPolicy = () => {
    setShowPrivacyPolicy(!showPrivacyPolicy);
  };

  const toggleTermsConditions = () => {
    setShowTermsConditions(!showTermsConditions);
  };

  return (
    <footer className="fixed bottom-0 left-0 w-full bg-white text-orange-500 py-4 shadow-xl drop-shadow-3xl">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div>
          <p>&copy; 2024. All rights reserved.</p>
        </div>
        <div>
          <p>
            <a href="#" onClick={togglePrivacyPolicy} className="mr-4">Privacy Policy.</a>
            <a href="#" onClick={toggleTermsConditions}>Terms and Conditions.</a>
          </p>
        </div>
      </div>
      {showPrivacyPolicy && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-md">
            <h2 className="text-lg font-bold mb-2">Privacy Policy</h2>
            <p>This is the privacy policy content.</p>
            <button onClick={togglePrivacyPolicy} className="mt-4 bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-md">Close</button>
          </div>
        </div>
      )}
      {showTermsConditions && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-md">
            <h2 className="text-lg font-bold mb-2">Terms and Conditions</h2>
            <p>This is the terms and conditions content.</p>
            <button onClick={toggleTermsConditions} className="mt-4 bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-md">Close</button>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
