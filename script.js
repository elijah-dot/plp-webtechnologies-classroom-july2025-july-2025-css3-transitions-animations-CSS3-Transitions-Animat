// Part 2: JavaScript Functions — Scope, Parameters & Return Values

// Global variable (demonstrating global scope)
let globalCounter = 0;

/**
 * Increments a counter by a given amount.
 * Demonstrates parameters and return values.
 * @param {number} currentCount - The current count value.
 * @param {number} increment - The amount to increment by.
 * @returns {number} - The new incremented count.
 */
function incrementCounter(currentCount, increment) {
  // local variable inside function scope
  let newCount = currentCount + increment;
  return newCount;
}

/**
 * Toggles a CSS class on an element by ID.
 * Demonstrates DOM manipulation and reusability.
 * @param {string} elementId - The ID of the element.
 * @param {string} className - The class to toggle.
 * @returns {boolean} - True if class was added, false if removed.
 */
function toggleClassById(elementId, className) {
  const el = document.getElementById(elementId);
  if (!el) return false;
  const hasClass = el.classList.contains(className);
  if (hasClass) {
    el.classList.remove(className);
    return false;
  } else {
    el.classList.add(className);
    return true;
  }
}

/**
 * Logs the current globalCounter and increments it.
 */
function logAndIncrementGlobalCounter() {
  console.log(`Global counter before increment: ${globalCounter}`);
  globalCounter = incrementCounter(globalCounter, 1);
  console.log(`Global counter after increment: ${globalCounter}`);
}

// Demonstrate function usage in console
console.log("=== Part 2: Function Demonstrations ===");
console.log("Increment 5 by 3:", incrementCounter(5, 3)); // 8
logAndIncrementGlobalCounter();
logAndIncrementGlobalCounter();

// Part 3: Combining CSS Animations with JavaScript

document.addEventListener("DOMContentLoaded", function () {
  // Animate box on button click
  const animateBoxBtn = document.getElementById("animateBoxBtn");
  const animateBox = document.getElementById("animateBox");

  if (animateBoxBtn && animateBox) {
    animateBoxBtn.addEventListener("click", () => {
      // Remove class if already present to allow re-triggering animation
      animateBox.classList.remove("animate-scale");

      // Trigger reflow to restart animation
      void animateBox.offsetWidth;

      // Add class to start animation
      animateBox.classList.add("animate-scale");
    });
  }

  // Card flip on click
  const flipCard = document.getElementById("flipCard");
  if (flipCard) {
    flipCard.addEventListener("click", () => {
      flipCard.classList.toggle("flipped");
    });
  }

  // Loading spinner toggle
  const toggleLoadingBtn = document.getElementById("toggleLoadingBtn");
  const loadingSpinner = document.getElementById("loadingSpinner");

  if (toggleLoadingBtn && loadingSpinner) {
    toggleLoadingBtn.addEventListener("click", () => {
      const isLoading = toggleClassById("loadingSpinner", "loading");
      toggleLoadingBtn.textContent = isLoading ? "Stop Loading Animation" : "Start Loading Animation";
    });
  }

  // Modal open/close with slide and fade animation
  const openModalBtn = document.getElementById("openModalBtn");
  const modal = document.getElementById("modal");
  const closeModalBtn = document.getElementById("closeModalBtn");

  function openModal() {
    if (modal) modal.classList.add("show");
  }

  function closeModal() {
    if (modal) modal.classList.remove("show");
  }

  if (openModalBtn && modal && closeModalBtn) {
    openModalBtn.addEventListener("click", openModal);
    closeModalBtn.addEventListener("click", closeModal);

    // Close modal when clicking outside modal content
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });
  }
});
