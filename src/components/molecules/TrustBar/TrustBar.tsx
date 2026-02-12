"use client";

import React, { useEffect, useRef } from 'react';
import styles from './TrustBar.module.scss';
import gsap from 'gsap';

const TrustBar: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const partners = [
    { name: 'AXON', id: '01' },
    { name: 'SYNTAX', id: '02' },
    { name: 'ORBIT', id: '03' },
    { name: 'QUANTUM', id: '04' },
    { name: 'NEXUS', id: '05' },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(`.${styles.partnerNode}`, {
        opacity: 0,
        y: 20,
        duration: 1,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 90%",
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div className={styles.trustBar} ref={containerRef}>
      <div className={styles.label}>Strategic Partners</div>
      <div className={styles.partnersList}>
        {partners.map((partner) => (
          <div key={partner.id} className={styles.partnerNode}>
            <span className={styles.partnerId}>{partner.id}</span>
            <span className={styles.partnerName}>{partner.name}</span>
            <div className={styles.nodeLine} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustBar;
