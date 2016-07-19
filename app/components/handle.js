import React from 'react';

export default function Handle({value, ...props}) {
  return (
    <div className="handle">{value}</div>
  );
}
