import React from "react";

interface TikTokIconProps {
  className?: string;
}

const TikTokIcon: React.FC<TikTokIconProps> = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    className={className}
  >
    <path d="M14.5 3c.4 1.9 1.7 3.4 3.5 4v2.6c-1.5 0-2.9-.4-4.1-1.1v6.1c0 3.2-2.6 5.9-5.9 5.9-2.5 0-4.7-1.6-5.5-3.9-.3-.7-.4-1.4-.4-2.1 0-3.2 2.6-5.9 5.9-5.9.6 0 1.2.1 1.7.3v2.8c-.5-.3-1.1-.4-1.7-.4-1.5 0-2.7 1.2-2.7 2.7 0 .3 0 .5.1.7.3 1.1 1.4 2 2.6 2 1.5 0 2.7-1.2 2.7-2.7V3h3.8z" />
  </svg>
);

export default TikTokIcon;
