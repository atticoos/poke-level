import React from 'react';

export default function Totals ({gross}) {
  return (
    <div>
      <h3>Totals</h3>
      <span>Gross XP: <strong>{gross}</strong></span>
    </div>
  );
}
