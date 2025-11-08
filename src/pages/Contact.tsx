import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-art-blue-50 to-white">
        <div className="container-max section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-black mb-6">
              Get In Touch
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Interested in commissioning a piece or learning more about my work? 
              I'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="container-max section-padding">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-display font-bold text-black mb-8">
                  Let's Connect
                </h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-black mb-2">Email</h3>
                    <p className="text-gray-700">
                      ms.hr.ball@gmail.com
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-black mb-2">Social Media</h3>
                    <div className="space-y-2">
                      <p className="text-gray-700">
                        Instagram: @helainab_art
                      </p>
                      <p className="text-gray-700">
                        Facebook: @Art by H
                      </p>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-black mb-2">Location</h3>
                    <p className="text-gray-700">
                      Chapel Hill, North Carolina
                    </p>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-art-blue-50 rounded-lg">
                  <h3 className="text-lg font-semibold text-black mb-3">
                    Commission Inquiries
                  </h3>
                  <p className="text-gray-700 mb-4">
                    I'm available for commissioned work. Please include details about 
                    your vision, timeline, and budget in your message.
                  </p>
                  <p className="text-sm text-gray-600">
                    Typical turnaround time: 2-4 weeks depending on complexity
                  </p>
                </div>
              </div>

              {/* Google Form Integration */}
              <div>
                <h2 className="text-3xl font-display font-bold text-black mb-8">
                  Send a Message
                </h2>
                
                {/* Google Form Embed */}
                <div className="bg-gray-50 p-8 rounded-lg">
                  <div className="text-center">
                    <h3 className="text-xl font-semibold text-black mb-4">
                      Contact Form
                    </h3>
                    <div className="text-gray-600 mb-6">
                      <iframe 
                        src="https://docs.google.com/forms/d/e/1FAIpQLSd_UtcSkDBTcbSW-4B-ubebYlu8xGBP-6YL0YyCyRM4J6FYzw/viewform?embedded=true" 
                        width="100%" 
                        height="600" 
                        frameBorder="0" 
                        marginHeight={0} 
                        marginWidth={0}
                        className="rounded-lg"
                        title="Contact Form"
                      >
                        Loading…
                      </iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-art-blue-50">
        <div className="container-max section-padding">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-display font-bold text-black text-center mb-16">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-black mb-3">
                  Do you accept commissions?
                </h3>
                <p className="text-gray-700">
                  Yes, I'm available for commissioned work! Please contact me with details 
                  about your vision, timeline, and budget. I work in all the mediums I showcase 
                  on this site, as well as acrylic on wood or canvas. 
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-black mb-3">
                  How long does a commission take?
                </h3>
                <p className="text-gray-700">
                  Typical turnaround time is 2-4 weeks depending on the complexity and size 
                  of the piece. Rush orders may be accommodated for an additional fee.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-black mb-3">
                  Do you ship internationally?
                </h3>
                <p className="text-gray-700">
                  Yes, I ship worldwide. Shipping costs and delivery times vary by location. 
                  All artwork is carefully packaged to ensure safe delivery.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-black mb-3">
                  Do works come framed?
                </h3>
                <p className="text-gray-700">
                  Works can be framed for an additional price, or can be sold as is!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
