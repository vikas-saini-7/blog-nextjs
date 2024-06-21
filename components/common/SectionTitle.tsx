import React from 'react';

interface Props {
  text: string;
}

const SectionTitle: React.FC<Props> = ({ text }) => {
  return (
    <h1 className='text-2xl border-b-4 border-teal-950 w-fit mb-8'>{text}</h1>
  );
}

export default SectionTitle;
