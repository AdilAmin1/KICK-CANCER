import React from 'react';

interface KickLogoProps {
  fillColor?: string;
  ribbonColor?: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function KickLogo({ fillColor = '#171717', ribbonColor = '#eab308', ...props }: KickLogoProps) {
  return (
    <svg 
      viewBox="0 0 240 80" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      {...props}
    >
      {/* First Letter 'K' */}
      <g fill={fillColor}>
        <rect x="15" y="10" width="14" height="60" rx="2.5" />
        <polygon points="29,40 59,10 44,10 23,34" />
        <polygon points="26,34 59,70 44,70 20,44" />
      </g>

      {/* Ribbon representing Letter 'I' */}
      <g transform="translate(68, 5)" fill={ribbonColor}>
        <path 
          d="M22,5 C11,5 5,14 5,26 C5,37 13,46 19,51 L9,69 C8.5,70 9,71 10,71 L16,71 L22,57 L28,71 L34,71 C35,71 35.5,70 35,69 L25,51 C31,46 39,37 39,26 C39,14 33,5 22,5 Z M22,14 C27.5,14 30,18.5 30,25.5 C30,30.5 27,36 22,41.5 C17,36 14,30.5 14,25.5 C14,18.5 16.5,14 22,14 Z" 
        />
        {/* Child silhouette holding hands detailed inner touch to ribbon loop */}
        <circle cx="22" cy="20" r="2.5" fill={fillColor} className="opacity-80" />
        <path d="M18.5,27.5 C19.5,25.5 24.5,25.5 25.5,27.5" stroke={fillColor} strokeWidth="1.2" strokeLinecap="round" className="opacity-80" />
      </g>

      {/* Letter 'C' */}
      <path 
        d="M128,10 H168 V24 H146 V56 H168 V70 H128 C122,70 118,66 118,60 V20 C118,14 122,10 128,10 Z" 
        fill={fillColor} 
      />

      {/* Second Letter 'K' */}
      <g fill={fillColor}>
        <rect x="178" y="10" width="14" height="60" rx="2.5" />
        <polygon points="192,40 222,10 207,10 186,34" />
        <polygon points="189,34 222,70 207,70 183,44" />
      </g>
    </svg>
  );
}
