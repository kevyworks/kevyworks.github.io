import React from 'react';

export default function BuyMeACoffeeButton({ height = 60, width = 217 }: { height?: number; width?: number }) {
  return (
    <a 
      href="https://www.buymeacoffee.com/kevyworks/extras" 
      target="_blank"
      rel="noopener noreferrer"
    >
      <img 
        src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" 
        alt="Buy Me a Coffee"
        style={{ height: `${height}px`, width: `${width}px` }} 
      />
    </a>
  );
}