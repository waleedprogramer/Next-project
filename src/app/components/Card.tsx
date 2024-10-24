import React from 'react';
import Button from './button';

interface CardProps {
  pricing: string;
  pricingHeading: string,
  features: string[];
}

function PricingCard({ pricing, pricingHeading, features }: CardProps) {
  return (
    <div className="card bg-gray-900">
      <h3><span>{pricing}</span></h3>
      <h2>{pricingHeading} <span>Monthly</span></h2>
    
      <ul>
        {features.map((feature, index) => (
          <li key={index}>
            {feature}
          </li>
        ))}
      </ul>
      <Button/>
    </div>
  );
}

export default PricingCard;
