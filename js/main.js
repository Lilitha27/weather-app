function displayMessage(){
let temperature = document.getElementById("temp").value;
console.log(temperature)
if (temperature >= 28) {
    alert("Vest , shoes and shorts");
} else if (temperature <= 27 && temperature >= 15){
    alert("wear a windbreaker");
} else if (temperature <= 14 && temperature >= -7) {
    alert("wear a raincoat and have a umbrella");
} else {
    alert("not a valid weather temperature");
}
}