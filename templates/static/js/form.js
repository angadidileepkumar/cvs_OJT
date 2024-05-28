
let totalUsers = JSON.parse(localStorage.getItem('totalUsers')) || [];
let validUsers = JSON.parse(localStorage.getItem('validUsers')) || [];



document.addEventListener("DOMContentLoaded", function() {

const validationForm = document.getElementById('validationForm');



validationForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const candidateId = document.getElementById('candidateId').value;
    const certificateFile = document.getElementById('certificateFile').files[0];

    totalUsers.push(candidateId);
    console.log(totalUsers);
    localStorage.setItem('totalUsers', JSON.stringify(totalUsers));


    // Perform form validation
    if (!candidateId) {
        alert('Please enter a candidate ID.');
        return;
    }

    if (!certificateFile) {
        alert('Please select a certificate file.');
        return;
    }

    fetch('/candidate-data/')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        const details = data.candidate
        let candidateFound = false
        for (let index = 0; index < details.length; index++) {
            if (candidateId == details[index].candidate_ID){
                candidateFound = true
                break;
            }   
        }
        if (candidateFound) {
            validUsers.push(candidateId)
            localStorage.setItem('validUsers', JSON.stringify(validUsers));
            // window.location.href = '/valid-data';
        } else {
            // window.location.href = '/invalid-data';
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });


    // Create a FormData object and append the form data
//     const formData = new FormData();
//     formData.append('candidateId', candidateId);
//     formData.append('certificateFile', certificateFile);

//     // Send the form data to the server for validation
//     fetch('/validate', {
//         method: 'POST',
//         body: formData
//     })
//     .then(response => {
//         if (response.ok) {
//             alert('Certificate validation successful!');
//         } else {
//             alert('Certificate validation failed. Please try again.');
//         }
//     })
//     .catch(error => {
//         console.error('Error:', error);
//         alert('An error occurred during certificate validation.');

    });
});


export { totalUsers, validUsers };

