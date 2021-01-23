import React from 'react';
import Particles from 'react-particles-js';

export default function ParticlesModel() {
  return (
    <Particles
      params={{
        "particles": {
            "number": {
                "value": 10,
                "density": {
                    "enable": true,
                    "value_area": 700
                }
            },
            "line_linked": {
                "enable": false
            },
            "move": {
                "speed": 1,
                "out_mode": "out"
            },
            "shape": {
                "type": [
                    "image",
                    "circle"
                ],
                "image": [
                    {
                        "src": "https://portalmybot.com/assets/badges/v1/badge_139.png",
                        "height": 20,
                        "width": 23
                    },
                    {
                        "src": "https://portalmybot.com/assets/badges/v1/badge_144.png",
                        "height": 20,
                        "width": 20
                    },
                    {
                        "src": "https://portalmybot.com/assets/badges/v1/badge_123.png",
                        "height": 20,
                        "width": 20
                    }
                ]
            },
            "color": {
                "value": "#CCC"
            },
            "size": {
                "value": 30,
                "random": false,
                "anim": {
                    "enable": true,
                    "speed": 4,
                    "size_min": 10,
                    "sync": false
                }
            }
        },
        "retina_detect": false
    }}
    />

  )
}