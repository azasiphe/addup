function addNumbers() {
    let num1 = parseFloat(document.getElementById('num1').value) || 0;

    let num2 = parseFloat(document.getElementById('num2').value) || 0;


let sum = num1 + num2 ;
document.getElementById('results').textContent=`Result: ${sum}`;
}
