function setup() {
    window.onload = () => {
        for (let i = 0; i < 10; i++) {
            document.getElementById(i.toString()).addEventListener("click", () => {
                document.getElementById("equation").innerText += i.toString();
            });
        }

        // Operator Button Listeners
        document.getElementById("+").addEventListener("click", () => {operatorListeners("+")})
        document.getElementById("-").addEventListener("click", () => {operatorListeners("-")})
        document.getElementById("/").addEventListener("click", () => {operatorListeners("÷")})
        document.getElementById("x").addEventListener("click", () => {operatorListeners("×")})

        document.getElementById("C").addEventListener("click", () => {
            document.getElementById("equation").innerText = "";
            document.getElementById("result").innerText = "";
        });

        document.getElementById("=").addEventListener("click", () => {
            if (document.getElementById("equation").innerText !== "") {
                let formattedEquation = document.getElementById("equation").innerText.replaceAll("×", "*").replaceAll("÷", "/");
                try {
                    document.getElementById("result").innerText = "=" + eval(formattedEquation).toString();
                }
                catch (e) {
                    document.getElementById("result").innerText = "ERROR";
                }
            }
        });
    }
}

function operatorListeners(operator) {
    let equation = document.getElementById("equation").innerText;
    let i = equation.length - 1;
    if (equation !== "" && equation.charAt(i) !== "+" && equation.charAt(i) !== "-" && equation.charAt(i) !== "×" && equation.charAt(i) !== "÷") {
        document.getElementById("equation").innerText += operator;
    }
}

setup();