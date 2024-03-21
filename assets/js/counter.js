const list = document.querySelectorAll('[data-role="count"]');

// The code to start the animation is now wrapped in a function
const startCounter = () => {
    list.forEach(element => {
        let start // set on the first step to the timestamp provided

        const final = parseInt(element.textContent, 10) // parse out the final number
        const duration = 1000 // duration in ms
        const step = ts => {
            if (!start) {
                start = ts
            }
            // get the time passed as a fraction of total duration
            let progress = (ts - start) / duration

            element.textContent = Math.floor(progress * final) // set the text
            if (progress < 1) {
                // if we're not 100% complete, request another animation frame
                requestAnimationFrame(step)
            }
        }

        // start the animation
        requestAnimationFrame(step)
    })
}

// On the first scroll in this window, call the function to start the counters
window.addEventListener("scroll", startCounter, {
    once: true
});