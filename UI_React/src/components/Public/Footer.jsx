import React, { useState } from 'react';
import { HeartFill } from 'react-bootstrap-icons';


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
    <footer className="relative bottom-0 left-0 w-full bg-white text-blue-600 py-4 rounded-t-lg shadow-md">
      {/* Gradient line */}
      <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-red-400 to-blue-300"></div>
      <div className="container mx-auto px-4 flex justify-between items-center">
      <div className="flex justify-between items-center">
      <div>&copy; 2024. Made with <HeartFill className="text-blue-500 inline-block align-text-bottom" /> by team IONIX</div>
      </div>

        <div>
          <p>
            <a href="/contact" className="mr-2 hover:text-blue-800 transition duration-300 ease-in-out">Contact</a>
            <span>|</span>
            <a href="#" onClick={togglePrivacyPolicy} className="ml-2 mr-2 hover:text-blue-800 transition duration-300 ease-in-out">Privacy Policy</a>
            <span>|</span>
            <a href="#" onClick={toggleTermsConditions} className="ml-2 hover:text-blue-800 transition duration-300 ease-in-out">Terms and Conditions</a>
          </p>
        </div>
      </div>
      {/* Privacy Policy Popup */}
      {showPrivacyPolicy && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-700 bg-opacity-50">
        <div className="bg-white p-4 rounded-lg w-3/4 max-h-80 overflow-y-auto">
          <div class="container mx-auto mt-8">
            <div class="bg-white p-8 rounded-lg shadow-xl">
              <h1 class="text-2xl text-black font-bold mb-6">Privacy Policy</h1>
              <section class="mb-8">
                <h2 class="text-lg font-bold mb-2">Information We Collect</h2>
                <p class="mb-4">
                  We may collect various types of information when you use our website and services, including:
                </p>
                <ul class="list-disc ml-8">
                  <li><strong>Personal Information</strong>: such as your name, email address, and contact details, which you provide when registering for our services or contacting us.</li>
                  <li><strong>Usage Information</strong>: such as your IP address, browser type, operating system, and pages visited on our website, collected automatically through cookies and similar tracking technologies.</li>
                  <li><strong>Chess Progress Data</strong>: such as your chess skill level, game history, and progress in chess courses or events, collected to personalize your learning experience and improve our services.</li>
                </ul>
              </section>
              <section class="mb-8">
                <h2 class="text-lg font-bold mb-2">How We Use Your Information</h2>
                <p class="mb-4">
                  We may use the information we collect for the following purposes:
                </p>
                <ul class="list-disc ml-8">
                  <li>To provide and maintain our services, including registering your account, processing payments, and delivering course materials.</li>
                  <li>To personalize your experience, such as recommending courses and events based on your chess skill level and interests.</li>
                  <li>To communicate with you, respond to your inquiries, and provide customer support.</li>
                  <li>To analyze usage trends and improve our website and services.</li>
                  <li>To comply with legal obligations and enforce our terms and policies.</li>
                </ul>
              </section>
            </div>
          </div>
          <button onClick={togglePrivacyPolicy} className="mt-4 bg-gradient-to-r from-blue-300 to-blue-500 text-white py-2 px-4 rounded-md border border-transparent hover:border-blue-500 hover:bg-transparent hover:text-black transition duration-300 ease-in-out">Close</button>
        </div>
      </div>
      )}
      {/* Terms and Conditions Popup */}
      {showTermsConditions && (
         <div className="fixed inset-0 flex justify-center items-center bg-gray-700 bg-opacity-50">
         <div className="bg-white p-4 rounded-lg w-3/4 max-h-80 overflow-y-auto">
           <div class="container mx-auto mt-8">
             <div class="bg-white p-8 rounded-lg shadow-xl">
               {/* Terms and Conditions Content */}
               <p class="mb-4">
               <div className="fixed inset-0 flex justify-center items-center bg-gray-500 bg-opacity-50">
      <div className="bg-white p-4 rounded-lg w-3/4 max-h-80 overflow-y-auto">
        <div class="container mx-auto mt-8">
          <div class="bg-white p-8 rounded-lg shadow-xl">
            <h1 class="text-2xl text-black font-bold mb-6">Terms and Conditions</h1>
            <p class="mb-4">
              These terms and conditions outline the rules and regulations for the use of the Matrix Chess Academy's Website.
            </p>
            <h2 class="text-lg font-bold mt-6 mb-2">1. Agreement to Terms</h2>
            <p class="mb-4">
              By accessing this Website, you agree to be bound by these Terms and Conditions and agree that you are responsible for compliance with any applicable laws.
            </p>
            <h2 class="text-lg font-bold mt-6 mb-2">2. Intellectual Property Rights</h2>
            <p class="mb-4">
              All content included on this Website, such as text, graphics, logos, button icons, images, audio clips, digital downloads, data compilations, and software, is the property of Matrix Chess Academy or its content suppliers and protected by international copyright laws.
            </p>
            <h2 class="text-lg font-bold mt-6 mb-2">3. Restrictions</h2>
            <p class="mb-4">
              You are specifically restricted from all of the following:
            </p>
            <ul class="list-disc ml-8">
              <li>publishing any Website material in any other media;</li>
              <li>selling, sublicensing and/or otherwise commercializing any Website material;</li>
              <li>publicly performing and/or showing any Website material;</li>
              <li>using this Website in any way that is or may be damaging to this Website;</li>
              <li>using this Website in any way that impacts user access to this Website;</li>
              <li>using this Website contrary to applicable laws and regulations, or in any way may cause   harm to the Website, or to any person or business entity;</li>
              <li>engaging in any data mining, data harvesting, data extracting or any other similar activity in relation to this Website;</li>
              <li>using this Website to engage in any advertising or marketing.</li>
            </ul>
          </div>
        </div>
        <button onClick={toggleTermsConditions} className="mt-4 bg-gradient-to-r from-red-500 to-blue-500 text-white py-2 px-4 rounded-md border border-transparent hover:border-blue-500 hover:bg-transparent hover:text-black transition duration-300 ease-in-out">Close</button>
      </div>
    </div>                </p>
               {/* More sections */}
             </div>
           </div>
           <button onClick={toggleTermsConditions} className="mt-4 bg-gradient-to-r from-red-500 to-blue-500 text-white py-2 px-4 rounded-md border border-transparent hover:border-blue-500 hover:bg-transparent hover:text-black transition duration-300 ease-in-out">Close</button>
         </div>
       </div>
      )}
    </footer>
  );
};

export default Footer;
