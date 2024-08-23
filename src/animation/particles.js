import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { tsParticles } from "@tsparticles/engine";

function PartclesConfig(){
  return(
    (async () => {
      await loadFull(tsParticles);
    
      await tsParticles.load({
        options: {
          fpsLimit: 60,
          particles: {
            groups: {
              z5000: {
                number: {
                  value: 70
                },
                zIndex: {
                  value: 5000
                }
              },
              z7500: {
                number: {
                  value: 30
                },
                zIndex: {
                  value: 75
                }
              },
              z2500: {
                number: {
                  value: 50
                },
                zIndex: {
                  value: 25
                }
              },
              z1000: {
                number: {
                  value: 40
                },
                zIndex: {
                  value: 10
                }
              }
            },
            number: {
              value: 200,
              density: {
                enable: false,
                area: 800
              }
            },
            color: {
              value: "#fff",
              animation: {
                enable: false,
                speed: 20,
                sync: true
              }
            },
            shape: {
              type: "circle"
            },
            opacity: {
              value: { min: 0.1, max: 1 },
              random: false,
              animation: {
                enable: false,
                speed: 3,
                sync: false
              }
            },
            size: {
              value: 3
            },
            move: {
              angle: {
                value: 10,
                offset: 0
              },
              enable: true,
              speed: 5,
              direction: "right",
              random: false,
              straight: true,
              outModes: "out"
            },
            zIndex: {
              value: 5,
              opacityRate: 0.5
            }
          },
          interactivity: {
            detectsOn: "canvas",
            events: {
              onHover: {
                enable: false,
                mode: "repulse"
              },
              onClick: {
                enable: true,
                mode: "push"
              },
              resize: true
            },
            modes: {
              grab: {
                distance: 400,
                links: {
                  opacity: 1
                }
              },
              bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 0.8
              },
              repulse: {
                distance: 200
              },
              push: {
                quantity: 4,
                groups: ["z5000", "z7500", "z2500", "z1000"]
              },
              remove: {
                quantity: 2
              }
            }
          },
          detectRetina: true,
          background: {
            color: "#000000"
          },
        }
      });
    })()
  );
    
  
   
}

export default PartclesConfig;


