import React from 'react';
import { ChevronRight } from 'lucide-react';

/**
 * Error404Hero component
 * 
 * Clones the main 404 error section featuring a light wood texture background with a succulent 
 * and coffee cup, a large "404" heading in dark blue, and a bottom dark blue strip 
 * containing the text "The page you are looking for does not exist" and a yellow "homepage" button.
 */
const Error404Hero: React.FC = () => {
  // Asset: Light wood texture / desk image from screenshots and high-level design
  // The layout_1.png style mentioned in design refers to the desk with succulent and coffee.
  const backgroundImageUrl = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/254855f2-da70-4f6b-b7ed-c811c1dba101-consulting-stylemixthemes-com/assets/images/new-york-2.jpg";

  return (
    <section className="relative flex flex-col min-h-screen overflow-hidden">
      {/* 
        Hero Section (Top 75%)
        Light wood texture background with large 404 text.
      */}
      <div 
        className="relative flex-grow flex flex-col justify-end"
        style={{
          height: '75vh',
          backgroundImage: `url(${backgroundImageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundColor: '#d9eada' // Fallback color from high level design
        }}
      >
        {/* Container for the large 404 text */}
        <div className="container mx-auto px-[15px] max-w-[1170px] w-full">
          <h1 
            className="text-404 m-0 p-0 mb-[-15px] select-none"
            style={{
              fontSize: 'clamp(120px, 20vw, 250px)',
              fontWeight: 900,
              lineHeight: '0.8',
              letterSpacing: '-0.05em',
              color: '#002e5b'
            }}
          >
            404
          </h1>
        </div>
      </div>

      {/* 
        Action Bar / Footer (Bottom 25%)
        Primary Navy background with message and CTA button.
      */}
      <div 
        className="flex items-center"
        style={{
          height: '25vh',
          backgroundColor: '#002e5b',
          minHeight: '160px'
        }}
      >
        <div className="container mx-auto px-[15px] max-w-[1170px] w-full">
          <div className="flex flex-col md:flex-row items-center justify-between gap-[30px]">
            {/* Message */}
            <div className="flex-1">
              <h3 
                className="footer-message m-0"
                style={{
                  fontSize: '24px',
                  fontWeight: 700,
                  color: '#ffffff'
                }}
              >
                The page you are looking for does not exist.
              </h3>
            </div>

            {/* Button */}
            <div className="flex-shrink-0">
              <a 
                href="/" 
                className="btn-primary flex items-center gap-2 group transition-colors duration-300"
                style={{
                  backgroundColor: '#fde428',
                  color: '#262626',
                  padding: '12px 24px',
                  fontSize: '14px',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  textDecoration: 'none',
                  display: 'inline-flex'
                }}
              >
                homepage
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Internal component Styles specifically for the 404 typography and layout overrides */}
      <style jsx global>{`
        .text-404 {
          font-family: "Inter", sans-serif;
        }
        .footer-message {
          font-family: "Inter", sans-serif;
        }
        .btn-primary:hover {
          background-color: #e6ce14 !important;
        }
        /* Mobile adjustments for 404 text layering */
        @media (max-width: 768px) {
          .text-404 {
            line-height: 1.2;
            margin-bottom: 20px;
          }
        }
      `}</style>
    </section>
  );
};

export default Error404Hero;