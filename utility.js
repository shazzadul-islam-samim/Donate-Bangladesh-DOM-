// Function to get input value and convert to a number
function inputValueId(id) {
    const inputElement = document.getElementById(id);
    const inputNum = parseFloat(inputElement.value);

    if (isNaN(inputNum)) {
        alert('Invalid number. Please try again.');
        return 0; // Return 0 if the input is not a number
    }

    return inputNum;
}

// Function to get the current balance from an element
function mainvalue(id) {
    const mainBalance = document.getElementById(id);
    const mainbalance = parseFloat(mainBalance.innerText);

    if (isNaN(mainbalance)) {
        return 0; // Prevent NaN errors
    }
    return mainbalance;
}

// Function to calculate the new balance after deduction
function calculateNewBalance(balanceId, inputAmount) {
    const mainbalance = mainvalue(balanceId); // Get current balance

    if (mainbalance >= inputAmount) {
        return mainbalance - inputAmount; // Deduct input amount
    } else {
        alert('Insufficient Balance.');
        return mainbalance; // Return unchanged balance if insufficient
    }
}

function showSection(id){
    document.getElementById('donation-container').classList.add('hidden');
    document.getElementById('donation-history').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden');
}
