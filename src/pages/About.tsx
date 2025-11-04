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
              Contemporary visual artist and BA student at UNC Chapel Hill
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
                    My work explores the delicate balance between tradition and innovation, 
                    where classical techniques meet contemporary digital expression. Through 
                    oil paintings, watercolors, drawings, and digital art, I investigate 
                    themes of identity, memory, and the human connection to nature.
                  </p>
                  <p>
                    Each medium offers a unique voice in my artistic practice. Oil painting 
                    allows for rich, layered textures and deep emotional expression, while 
                    watercolor captures the ephemeral and fluid nature of experience. 
                    Drawing provides the foundation of observation and understanding, and 
                    digital art opens new possibilities for experimentation and collaboration.
                  </p>
                  <p>
                    My process is deeply rooted in observation and reflection, often beginning 
                    with studies in pencil or charcoal before developing into larger works. 
                    This methodical approach ensures that each piece, regardless of medium, 
                    carries the weight of careful consideration and personal meaning.
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

      {/* Process Section */}
      <section className="py-20 bg-art-blue-50">
        <div className="container-max section-padding">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-display font-bold text-black text-center mb-16">
              My Process
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="text-xl font-semibold text-black mb-3">Observation</h3>
                <p className="text-gray-600">
                  Careful study of subjects through drawing and photography
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="text-xl font-semibold text-black mb-3">Exploration</h3>
                <p className="text-gray-600">
                  Experimenting with composition, color, and medium
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="text-xl font-semibold text-black mb-3">Creation</h3>
                <p className="text-gray-600">
                  Bringing the vision to life through careful execution
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  4
                </div>
                <h3 className="text-xl font-semibold text-black mb-3">Reflection</h3>
                <p className="text-gray-600">
                  Evaluating and learning from each completed work
                </p>
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
                  <h3 className="text-2xl font-semibold text-black mb-4">Oil Painting</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Working primarily with traditional oil paints on canvas, I explore 
                    rich textures and deep color relationships. My oil paintings often 
                    feature multiple layers and glazing techniques to achieve depth and luminosity.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold text-black mb-4">Watercolor</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Watercolor allows me to capture the fluid, ephemeral nature of my subjects. 
                    I work with both transparent and opaque techniques, often combining wet-on-wet 
                    and dry brush methods for varied effects.
                  </p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold text-black mb-4">Drawing</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Drawing forms the foundation of my practice, from quick sketches to 
                    detailed studies. I work primarily in graphite, charcoal, and ink, 
                    exploring line, value, and form through various mark-making techniques.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold text-black mb-4">Digital Art</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Digital tools offer new possibilities for experimentation and collaboration. 
                    I use digital painting software to explore color relationships and 
                    compositions that inform my traditional work.
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
