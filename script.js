let currentIndex = 0;
const testimonials = document.querySelectorAll('.testimonial');
const totalTestimonials = testimonials.length;

function showNextTestimonial() {
  testimonials[currentIndex].style.opacity = 0;
  currentIndex = (currentIndex + 1) % totalTestimonials;
  testimonials[currentIndex].style.opacity = 1;
}

// Display the next testimonial every 5 seconds
setInterval(showNextTestimonial, 5000);
