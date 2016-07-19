import React from 'react';

export default function Handle({pokemon, ...props}) {
  console.log('handle', props)
  return (
    <div className="handle">
      {pokemon}<br/>
      15
    </div>
  )
}
