import React from 'react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-art-blue-50 to-white">
        <div className="container-max section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-black mb-6">
              About Helaina-Rose Ball
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Contemporary visual artist and undergraduate student at UNC Chapel Hill
            </p>
          </div>
        </div>
      </section>

      {/* Artist Statement */}
      <section className="py-20">
        <div className="container-max section-padding">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-3xl font-display font-bold text-black mb-6">
                  Artist Statement
                </h2>
                <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                  <p>
                    I have no memory of the first time I fell in love with creating, and I do
                    not have some moment of revelation when I realized this was the path I wanted
                    to pursue. I have simply always known. I started drawing the moment I could 
                    hold a pencil, and I never stopped.
                  </p>
                  <p>
                    As an undergraduate student in the arts, I have spent much of my artistic
                    career exploring and experimenting. Currently, my aim is to simply learn, 
                    create, and further my understanding of both the world and my own artistic process. 
                    My style is constantly evolving as I test different mediums, methods, and techniques. 
                    Currently, I have really enjoyed painting the human figure while experimenting with 
                    different textures and colors. In recent works, I have also aimed to tell more of a
                    story, and create a raw, intimate view of the subject. 
                  </p>
                  <p>
                    My current favorite work I have done is probably 
                    “Foot Supported by Boy”, or “Sunday Night”. I really enjoyed the process of making both, 
                    where I used methods such as scraping paint away, or working in very thin, glaze-like 
                    layers to add color. I also enjoy their grungy and gritty, yet intimate feel. 
                    I hope to explore these elements and themes further in my work and creating process.
                  </p>
                </div>
              </div>
              
              {/* Artist Photo */}
              <div className="relative">
                <div className="aspect-[4/5] bg-gradient-to-br from-art-blue-200 to-art-blue-400 rounded-lg shadow-2xl">
                  <div className="flex items-center justify-center h-full text-white text-xl font-medium">
                  <img 
                      src="/Images/headshot.jpg" 
                      alt="Helaina-Rose Ball - Artist Portfolio"
                      className="w-full h-full object-cover"
                    />
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Mediums Section */}
      <section className="py-20">
        <div className="container-max section-padding">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-display font-bold text-black text-center mb-16">
              Mediums & Techniques
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold text-black mb-4">Oil and Acrylic Painting</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Working primarily with traditional oil paints on canvas, I get to explore elements
                    such as color, or shape, as well as paint handling. My paintings often 
                    feature many layers and glazing techniques to achieve depth and light.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold text-black mb-4">Watercolor</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Watercolor allows me to combine drawing and painting, incorporating my
                    favorite aspects of each.I work with both transparent and opaque techniques, 
                    often combining wet-on-wet and dry brush methods for varied effects.
                  </p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold text-black mb-4">Drawing</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Drawing forms the foundation of my practice, from quick sketches to 
                    detailed studies. I work primarily in graphite or ink, but occasionally 
                    enjoy charcoal. 
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold text-black mb-4">Digital Art</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Digital tools offer new possibilities for experimentation and innovation.
                    I use digital painting software to create complex digital illustrations, and to
                    explore color relationships and compositions that inform my traditional work.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
