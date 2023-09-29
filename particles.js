var style = getComputedStyle(document.body)

function getColorWithoutOpacity(inputColor) {
    const color = chroma(inputColor);
    const hexColor = color.alpha(1).hex().toUpperCase();
    return hexColor;
}
  
function getColor(colorVariable) {
    console.log(getColorWithoutOpacity(style.getPropertyValue(colorVariable)))
    return getColorWithoutOpacity(style.getPropertyValue(colorVariable))
}


tsParticles.load("tsparticles", {
    fpsLimit: 60,
    particles: {
      number: {
        value: 100,
        density: {
          enable: true,
          value_area: 1000
        }
      },
      color: {
        value: getColor("--particles-blob-color"),
        animation: {
          enable: true,
          speed: 1,
          sync: true
        }
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: {
          enable: false,
          speed: 10,
          opacity_min: 0.1,
          sync: false
        }
      },
      size: {
        value: 3,
        random: true,
        anim: {
          enable: false,
          speed: 2,
          size_min: 0.1,
          sync: false
        }
      },
      line_linked: {
        enable: true,
        distance: 100,
        color: getColor("--particles-line-color"),
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 3,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200
        }
      },
      life: {
        duration: {
          sync: false,
          value: 3
        },
        count: 0,
        delay: {
          random: {
            enable: true,
            minimumValue: 0.5
          },
          value: 1
        }
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "repulse"
        },
        onclick: {
          enable: true,
          mode: "push"
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
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
          particles_nb: 4
        },
        remove: {
          particles_nb: 2
        }
      }
    },
    retina_detect: true,
    background: {
      color: getColor("--background-color"),
      image: "",
      position: "50% 50%",
      repeat: "no-repeat",
      size: "cover"
    }
  });