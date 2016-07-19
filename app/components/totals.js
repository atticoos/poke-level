import React from 'react';

export default function Totals ({current, gross, target}) {
  return (
    <div>
      <h3>Totals</h3>
      <div>Gross XP: <strong>{gross}</strong></div>
      <div>Remaining XP: <strong>{Math.max(0, target - gross)}</strong></div>
    </div>
  );
}
