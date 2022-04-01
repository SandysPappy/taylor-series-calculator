Work in progress!

This directory is a basic represenation of a planar Taylor Series expansion. Simply open up index.html in your browser.

Uses MathJax for formula formatting

- Build up a polynomial function.
- The polynimial function along with its Taylor expanded form will be drawn on a js canvas element.
- The expanded form will also be written out using MathJax

TODO

- needs better styling in general

- replace graph button with event listeners to graph in real time
- force input for 'r' to be non-negative
- add polynomial builder terms to memory and implement clear button
- create regex that accepts valid polynomial strings

- function that takes a function, and maps the input function about the x-axis
- function to parse and calulate a polynomial function
- function to get taylor expanded form (returns string)
- function to take math expression input and parse it to MathJax represenataion
- update the math expressions in the DOM with event listeners to update the
  MathJax in real-time

- add sine and cosine functionality (use a dict for the derivatives)
