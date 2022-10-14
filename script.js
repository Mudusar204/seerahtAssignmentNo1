document.getElementById("alertName").onclick = function () {
    let name = "Mudussar Arshad"
    alert(name)
    document.getElementById("statement").innerHTML = "alert('Mudussar Arshad')"

}
// document.getElementById("alertName").onclick=(()=>alert("Mudusar Arshad"))
document.getElementById("alertNumber").onclick = function () {
    let number = 123;
    alert(number);
    document.getElementById("statement").innerHTML = "alert(123)"
}
// document.getElementById("alertNumber").onclick=(()=>alert(123))
document.getElementById("variables").onclick = function () {
    let output = "There are some rules for variable which are discused in book"
    document.getElementById("output").innerHTML = output
}
document.getElementById("camelCase").onclick = function () {
    let output = '<h2>Example</h2> <ul><li>rollNo</li><li>yourName</li></ul>'
    document.getElementById("output").innerHTML = output
}
document.getElementById("sum").onclick = function () {
    let num1 = 2;
    let num2 = 2;
    let sum = num1 + num2;
    document.getElementById("output").innerHTML = sum
    let statement = " let num1=" + num1 + ";<br>let num2=" + num2 + ";<br>let sum=num1 + num2;"
    document.getElementById("statement").innerHTML = statement

}
document.getElementById("subtract").onclick = function () {
    let num1 = 2;
    let num2 = 2;
    let sum = num1 - num2;
    document.getElementById("output").innerHTML = sum
    let statement = " let num1=" + num1 + ";<br>let num2=" + num2 + ";<br>let sum=num1 - num2;"
    document.getElementById("statement").innerHTML = statement

}
document.getElementById("multiply").onclick = function () {
    let num1 = 2;
    let num2 = 2;
    let sum = num1 * num2;
    document.getElementById("output").innerHTML = sum
    let statement = " let num1=" + num1 + ";<br>let num2=" + num2 + ";<br>let sum=num1 * num2;"
    document.getElementById("statement").innerHTML = statement

}
document.getElementById("divide").onclick = function () {
    let num1 = 2;
    let num2 = 2;
    let sum = num1 / num2;
    document.getElementById("output").innerHTML = sum
    let statement = " let num1=" + num1 + ";<br>let num2=" + num2 + ";<br>let sum=num1 / num2;"
    document.getElementById("statement").innerHTML = statement

}
document.getElementById("calculation").onclick = function () {
    let calculate = 2 + 4 - 5 * 4 / 4;
    document.getElementById("output").innerHTML = calculate
    let statement = 'calculate=2+4-5*4/4;'
    document.getElementById("statement").innerHTML = statement

}
document.getElementById("clearOutput").onclick = function () {
    document.getElementById("output").style.visibility = "hidden"

}
document.getElementById("clearStatement").onclick = function () {
    document.getElementById("statement").style.visibility = "hidden"

}