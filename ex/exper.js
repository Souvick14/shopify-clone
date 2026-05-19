// --- Global Setup ---
const textchanger = ["textchanger1", "textchanger2", "textchanger3", "textchanger4"];
const photo = document.getElementById("secondsectionphoto"); // Renamed to 'photo'
const flexphotos = document.querySelectorAll('.flexphoto'); // Renamed slides to 'flexphotos'

let currentPosition = 0;



// --- 1. Slideshow (Auto-Play) Logic ---
function slide() { // Original function name 'slide'
  // Move to the next position
  currentPosition -= 100; 

  // Reset to the first slide after the last one is shown
  if (currentPosition < -300) {
    currentPosition = 0;
  }

  // Apply the movement
  if (photo) {
    photo.style.transform = `translate(${currentPosition}vw)`;
  }
}

// Start the continuous slide movement every 3 seconds
setInterval(slide, 3000);

// --- 2. Text Highlighting (Intersection Observer) Logic ---

// Function to handle the color change
function updateTextHighlight(index, Visible) {
  const textId = textchanger[index]; // Use original variable name 'textchanger'
  const textElement = document.getElementById(textId);
  
  if (textElement) {
    if (Visible) {
      textElement.style.color = "white";
    } else {
      textElement.style.color = "rgb(139, 139, 139)";
    }
  }
}

// Set up the Intersection Observer ONCE
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    // Determine the index of the intersecting slide
    const index = Array.from(flexphotos).indexOf(entry.target);

    if (index !== -1) {
      updateTextHighlight(index, entry.isIntersecting);
    }
  });
}, {
  threshold: 1 
});

// Start observing all slide elements ONCE
flexphotos.forEach(flexphoto => {
  observer.observe(flexphoto);
});