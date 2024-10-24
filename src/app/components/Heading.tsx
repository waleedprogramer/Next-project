import React from 'react';

interface HeadingProps {
  heading: string;
  subheading: string;
}

function Heading({ heading,subheading }: HeadingProps) {
  return (
    <div>
      <h3 className='subheading'>{subheading}</h3>
      <h1 className='heading'>{heading}</h1>
    </div>
  );
}

export default Heading;
