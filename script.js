// script.js
document.getElementById('flamesForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const name1 = document.getElementById('name1').value.toLowerCase();
    const name2 = document.getElementById('name2').value.toLowerCase();

    const remainingChars = calculateRemainingChars(name1, name2);
    displayResult(remainingChars);
});

function calculateRemainingChars(name1, name2) {
    let unmatchedCount = 0;
    const name1Chars = name1.split('');
    const name2Chars = name2.split('');

    // Cross out matching characters
    for (let i = 0; i < name1Chars.length; i++) {
        for (let j = 0; j < name2Chars.length; j++) {
            if (name1Chars[i] === name2Chars[j]) {
                name1Chars[i] = '0';
                name2Chars[j] = '0';
                break;
            }
        }
    }

    // Count non-zero characters
    const combinedNames = name1Chars.concat(name2Chars);
    combinedNames.forEach(char => {
        if (char !== '0') unmatchedCount++;
    });

    return unmatchedCount;
}

function displayResult(count) {
    let resultText;
    switch (count) {
        case 2: case 8: case 12: case 14: case 18: case 20: case 24: case 30:
            resultText = "TRUE FRIENDS ";
            break;
        case 3: case 4: case 6: case 15: case 28:
            resultText = "LOVE BIRDS!";
            break;
        case 10: case 16: case 26:
            resultText = "AFFECTION";
            break;
        case 9: case 5: case 27:
            resultText = "MARRIAGE";
            break;
        case 25: case 21: case 22:
            resultText = "ENEMIES";
            break;
        case 7: case 1: case 11: case 13: case 17: case 19: case 23: case 29:
            resultText = "SIBLINGS!";
            break;
        default:
            resultText = "No relationship found.";
    }

    const resultDiv = document.getElementById('result');
    resultDiv.innerText = resultText;
    
    // Add the 'show' class to trigger fade-in animation
    resultDiv.classList.add('show');
}
