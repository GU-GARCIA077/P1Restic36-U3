interface Tpoptions {
    element: HTMLElement;
    text: string;
    delay: number;
  }
  
  function typewriter({ element, text, delay }: Tpoptions) {
    let i = 0;
    function type() {
      if (i < text.length) {
        element.textContent += text.charAt(i);
        i++;
        setTimeout(type, delay);
      }
    }
    type();
  }
  // Manipulando os títulos:
const h2Element = document.querySelector('.informations h2') as HTMLHeadingElement;
const h3Element = document.querySelector('.informations h3') as HTMLHeadingElement;

typewriter({
  element: h2Element,
  text: 'Barber\'s Club',
  delay: 100,
});

typewriter({
  element: h3Element,
  text: 'Um novo conceito em Barbearia',
  delay: 200,
});