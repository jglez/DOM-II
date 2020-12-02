// Store all of the paragraph elements inside of a NodeList
const paragraphs = document.querySelectorAll('p');
console.log(paragraphs);

// Convert our NodeList of paragraph elements and store it inside paraArray
paraArray = Array.from(paragraphs);
console.log(paraArray);

// Loop over each array item (the paragraph elements) and add an event listener for 'mouseover'
// Appy inline style so it makes the text bigger
// And apply an inline style for a transition time of 3,000 milli seconds
paraArray.forEach(para => {
  para.addEventListener('mouseover', event => {
    para.style.transform = 'scale(1.3)';
    para.style.transitionDuration = '.3s';
  });
});

// Loop over our array of paragraphs one more time and return to normal scale on 'mouseout'
paraArray.forEach(para => {
  para.addEventListener('mouseout', event => {
    para.style.transform = 'scale(1.0)';
  })
})

// Headings ------------------------------------------------------------------------------------------------------------------------------
// Create a NodeList of all headings on our page and store it in headings 
const headings = document.querySelectorAll('h1, h2, h4');
console.log(headings);

// Convert our headings NodeList to a JS Array so we can use the forEach method
headingsArray = Array.from(headings);
console.log(headingsArray);

// Loop over all our headings in headingsArray and add an event listener for 'mouseover'
// This time we condensed the event listeners to one forEach block 
headingsArray.forEach(heading => {
  heading.addEventListener('mouseover', event => {
    heading.style.transform = 'scale(1.3)';
    heading.style.transitionDuration = '.3s';
  });
  heading.addEventListener('mouseout', event => {
    heading.style.transform = 'scale(1.0)';
    heading.style.transitionDuration = '.3s';
  })
});

// Change body to red on click -----------------------------------------------------------------------------------------------------------------
const body = document.querySelector('body');
body.addEventListener('click', event => {
  body.style.backgroundColor = 'red';
});

// Change body to seagreen on double click
body.addEventListener('dblclick', event => {
  body.style.backgroundColor = 'seagreen';
});

// Reset color of body to white on keydown
// 'keypress' must return a character, 'keydown' does not
const resetColor = document.querySelector('body');
resetColor.addEventListener('keydown', event => {
  if(event.key === 'Escape') {
    resetColor.style.backgroundColor = 'white';
  }
});

// Change color of header on load -----------------------------------------------------------------------------------------------------------
const header = document.querySelector('header');

window.addEventListener('load', event => {
  header.style.backgroundColor = 'seagreen';
})

// Scroll Event Listener ---------------------------------------------------------------------------------------------------------------------
const text = document.querySelectorAll('h1, h2, h4, p');
const textArray = Array.from(text);

window.addEventListener('scroll', event => {
  textArray.forEach(text => {
    text.style.border = 'dashed red 4px';
  })
})