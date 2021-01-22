import React from 'react';
import Particles from 'react-particles-js';

export default function ParticlesModel() {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "50%"
      }}
    >
    <Particles
        params={{
          "particles": {
              "number": {
                  "value": 20
              },
              "size": {
                  "value": 5
              }
          },
          "interactivity": {
              "events": {
                  "onhover": {
                      "enable": true,
                      "mode": "repulse"
                  }
              }
          }
      }} />
    </div>
  )
}