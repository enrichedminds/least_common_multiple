let number1, number2, lcm;

const randomNumbers = () => {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    return [num1, num2];
};

const calculateLCM = (a, b) => {
    const gcd = (x, y) => (!y ? x : gcd(y, x % y));
    return (a * b) / gcd(a, b);
};

const generateNewProblem = () => {
    [number1, number2] = randomNumbers();
    lcm = calculateLCM(number1, number2);
    document.getElementById("numbers").innerText = `${number1} and ${number2}`;
    document.getElementById("userInput").value = '';
    document.getElementById("feedback").innerText = '';
    document.getElementById("multiplesList").style.display = "none";
};

function checkAnswer() {
    const userInput = parseInt(document.getElementById("userInput").value, 10);
    const feedback = document.getElementById("feedback");
    const multiplesList = document.getElementById("multiplesList");

    if (userInput === lcm) {
        feedback.innerText = `Correct! The LCM is ${lcm}`;
        feedback.className = "correct";
        multiplesList.style.display = "none";
    } else {
        feedback.innerText = `Incorrect. Here are the multiples of ${number1} and ${number2}:`;
        feedback.className = "incorrect";

        const multiples1 = [];
        const multiples2 = [];
        let i = 1;

        while (true) {
            const multiple1 = number1 * i;
            const multiple2 = number2 * i;
            if (multiple1 <= lcm) multiples1.push(multiple1);
            if (multiple2 <= lcm) multiples2.push(multiple2);
            if (multiple1 >= lcm && multiple2 >= lcm) break;
            i++;
        }

        multiplesList.style.display = "block";
        multiplesList.innerHTML = `
            <p>Multiples of ${number1}: ${multiples1.join(", ")}</p>
            <p>Multiples of ${number2}: ${multiples2.join(", ")}</p>
            <p>
                The least common multiple of ${number1} and ${number2} is 
                <span style="color: red; font-weight: bold;">${lcm}</span>.
            </p>
        `;
    }
}

// Initialize the first problem
generateNewProblem();
