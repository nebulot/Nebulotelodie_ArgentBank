import React from 'react';
import features from '../data/features';
import Feature from '../components/Feature';

/**
 * Creates features container component
 * @returns { HTMLElement }
 */
const Features = () => {
  return (
    <section className="features">
        <h2 className="sr-only">Features</h2>
        {
            features.map((feature,index)=>{
                return <Feature data={feature} key={index}/>
            })
        }
    </section>
  )
}

export default Features