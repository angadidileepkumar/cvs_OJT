// // Get references to necessary elements
// const navLinks = document.querySelectorAll('.nav-links a');

// // Add event listeners to navigation links
// navLinks.forEach(link => {
//   link.addEventListener('click', e => {
//     const targetSection = e.target.getAttribute('href');

//     // Check if the link is an in-page anchor link
//     if (targetSection.startsWith('#')) {
//       e.preventDefault(); // Prevent default link behavior
//       const section = document.querySelector(targetSection);

//       // Smooth scroll to the target section if it exists
//       if (section) {
//         section.scrollIntoView({
//           behavior: 'smooth',
//           block: 'start',
//         });
//       }
//     }
//   });
// });
a
// // Add event listener to the "Get Started" button
// const getStartedBtn = document.querySelector('.btn');
// getStartedBtn.addEventListener('click', e => {
//   e.preventDefault();
//   // Redirect to the certificate validation page or perform desired action
//   window.location.href = '/login/';
// });

// // Add event listener to handle form submission
// const form = document.querySelector('form');
// form.addEventListener('submit', e => {
//   e.preventDefault();
//   // Perform form validation and submission logic
//   validateForm();
// });

// // Form validation function
// function validateForm() {
//   // Get form input values
//   const formData = new FormData(form);
//   const certificateFile = formData.get('certificateFile');

//   // Validate certificate file
//   if (!certificateFile) {
//     alert('Please upload a certificate file.');
//     return;
//   }

//   // Additional validation checks as needed

//   // Submit the form data to the server for validation
//   // Replace the following code with your server-side validation logic
//   console.log('Form submitted successfully!');
//   console.log('Certificate File:', certificateFile);
// }


// Get references to necessary elements
const navLinks = document.querySelectorAll('.nav-links a');

// Add event listeners to navigation links
// navLinks.forEach(link => {
//   link.addEventListener('click', e => {
//     const targetSection = e.target.getAttribute('href');
  
//     // Check if the link is an in-page anchor link
//     if (targetSection.startsWith('#')) {
//       e.preventDefault(); // Prevent default link behavior
//       console.log(targetSection);
//       console.log(targetSection);

//       const section = document.querySelector(targetSection);

//       // Smooth scroll to the target section if it exists
//       // window.location.href=targetSection
//       // if (section) {
//       //   section.scrollIntoView({
//       //     behavior: 'smooth',
//       //     block: 'start',
//       //   });
//       // }
//     }
//   });
// });

// Add event listener to the "Get Started" button
const getStartedBtn = document.querySelector('.btn');
if (getStartedBtn) {
  getStartedBtn.addEventListener('click', e => {
    e.preventDefault();
    // Redirect to the certificate validation page or perform desired action
    window.location.href = '/login/';
  });
}

// Add event listener to handle form submission
const form = document.querySelector('form');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    // Perform form validation and submission logic
    validateForm();
  });
}

// Form validation function
function validateForm() {
  // Get form input values
  const formData = new FormData(form);
  const certificateFile = formData.get('certificateFile');

  // Validate certificate file
  if (!certificateFile) {
    alert('Please upload a certificate file.');
    return;
  }

  // Additional validation checks as needed

  // Submit the form data to the server for validation
  // Replace the following code with your server-side validation logic
  console.log('Form submitted successfully!');
  console.log('Certificate File:', certificateFile);
}


