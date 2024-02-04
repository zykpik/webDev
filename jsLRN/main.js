let year;
let age;

document.getElementById('varDate').insertAdjacentHTML('beforeBegin',"<h2>your age in year </h2>");


document.getElementById("mySub").onclick = function calc(){
    age = document.getElementById("age").value 
    age = Number(age)
    year = document.getElementById("varDate").value 
    year = Number(year)
    if (age < 0 ) {
        document.getElementById("years"). textContent = "kidding?";
    } else if (year > 2024){
        document.getElementById("years").textContent = `${year - 2024 + age} years`;
    } else if (age == 0 && year < 2024){
        document.getElementById("years").textContent = "in the future sir + no age?";
    } else {
        document.getElementById("years").textContent = "in the future sir.";
    }
    
    
}