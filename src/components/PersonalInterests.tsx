import React from 'react';

const PersonalInterests = () => {
  return (
    <section className="py-16 bg-navy animate-fade-in">
      <h2 className="text-3xl font-bold text-softwhite mb-8">Personal Interests</h2>
      <div className="max-w-2xl mx-auto text-left space-y-6">
        <div>
          <h3 className="text-xl font-semibold mb-2 text-softwhite">Skiing</h3>
          <p className="text-softwhite/80 leading-relaxed">
            I have been an avid skiier for over 8 years, having explored different terrains in several countries.
            However, my favorite skiing region forever remains Chamonix Mont-Blanc Valley.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2 text-softwhite">Jazz Music</h3>
          <p className="text-softwhite/80 leading-relaxed">
            Exploring musical expression through jazz since primary school. I have performed several modern compositions
            as a saxofonist. Some of my favorite artists include John Coltrane and Rikard From.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2 text-softwhite">Classic Films</h3>
          <p className="text-softwhite/80 leading-relaxed">
            Appreciating the artistry and storytelling of classic cinema, with a particular
            interest in film noir and French New Wave.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PersonalInterests;
