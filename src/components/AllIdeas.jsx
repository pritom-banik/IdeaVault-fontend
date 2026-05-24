import React from 'react';
import HeroIdeaCard from './HeroIdeaCard';

const AllIdeas = async() => {
    const Ideas = await fetch(
    `${process.env.API_ENDPOINT}/ideas`,
  );
  const ideas = await Ideas.json();
    return (
        <div className='max-w-6xl mx-auto'>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-5 justify-items-center mx-1">  
      {ideas.map((idea) => <HeroIdeaCard key={idea._id} idea={idea}></HeroIdeaCard>)}
    </div>
        </div>
    );
};

export default AllIdeas;