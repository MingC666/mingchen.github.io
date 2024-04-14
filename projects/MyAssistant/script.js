
// Submit button click event
document.getElementById('submitBtn').addEventListener('click', function () {
    var inputText = document.getElementById('inputText').value;

    fetch('/askGPT', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ prompt: inputText })
    }).then(function (response) {
        if (response.ok) {
            // Request succeeded
            return response.json(); // Parse response as JSON
        } else {
            // Request failed
            throw new Error('Request failed with status ' + response.status);
        }
    }).then(function (data) {
        // Handle the response data
        let answer = data.data; // Access the 'data' property of the response
        document.getElementById('outputText').value = answer;
    }).catch(function (error) {
        console.error('Error:', error);
    });
});


// Copy button click event
document.getElementById('copyBtn').addEventListener('click', function () {
    console.log("hhh")
    var outputText = document.getElementById('outputText');
    outputText.select();
    document.execCommand('copy');
});

// delete input box content 
document.getElementById("deleteBtn").addEventListener("click", function () {
    console.log("hhh")
    document.getElementById("inputText").value = "";
});


// access the API key
document.getElementById('apiBtn').addEventListener('click', function () {
    var inputApiKey = document.getElementById('inputApiKey').value;
    // console.log("send key: " + inputApiKey);
    fetch('/sendApiKey', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ apiKey: inputApiKey })
    }).then(function (response) {
        if (response.ok) {
            // Request succeeded
            return response.json();
        } else {
            // Request failed
            throw new Error('Request failed with status ' + response.status);
        }
    })
});
