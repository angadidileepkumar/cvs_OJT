const validationForm = document.getElementById('validationForm');

validationForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const candidateId = document.getElementById('candidateId').value;
    const certificateFile = document.getElementById('certificateFile').files[0];

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
        console.log('hello haii');
        console.log(data);
        const details = data.candidates
        let candidateFound = false
        for (let index = 0; index < details.length; index++) {
            if (candidateId == details[index].candidate_ID){
                candidateFound = true
                break;
            }   
        }
        if (candidateFound) {
            window.location.href = '/dashboard';
        } else {
            window.location.href = '/home';
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

