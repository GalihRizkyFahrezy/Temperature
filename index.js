let i = 0;

document.getElementById("buttonInput").onclick = function()
{

    const Celcius = document.getElementById("celcius");
	const Fahrenheit = document.getElementById("fahrenheit");
	const Reamur = document.getElementById("reamur");
    const Kelvin = document.getElementById("kelvin");

    if(Celcius.checked)
    {
        i = document.getElementById("valueInput").value;
        functCelcius(i);
    }
    else if(Fahrenheit.checked)
    {
        i = document.getElementById("valueInput").value;
        functFahrenheit(i);
    }
    else if(Reamur.checked)
    {
        i = document.getElementById("valueInput").value;
        functReamur(i);
    }
    else if(Kelvin.checked)
    {
        i = document.getElementById("valueInput").value;
        functKelvin(i);
    }
}


functCelcius(10);
function functCelcius(C)
{
    let F = (C * 9/5) + 32;
    if(F%1 != 0)
    {
        F = F.toFixed(2);
    }
    let R = C * 4/5;
    if(R%1 != 0)
    {
        R = R.toFixed(2);
    }
    let K = Number(C) + Number(273.15);
    if(F%1 != 0)
    {
        K = K.toFixed(2);
    }
    document.getElementById("result1").innerHTML = F + "° fahrenheit";
    document.getElementById("result2").innerHTML = R + "° Reamur";
    document.getElementById("result3").innerHTML = K + "° Kelvin";
}

functFahrenheit(50)
function functFahrenheit(F)
{
    let C = (F -32) * 5/9;
    if(C%1 != 0)
    {
        C = C.toFixed(2);
    }
    let R = (F -32) * 4/9;
    if(R%1 != 0)
    {
        R = R.toFixed(2);
    }    
    let K = (F -32) * 5/9 + Number(273.15);
    if(K%1 != 0)
    {
        K = K.toFixed(2);
    }
    document.getElementById("result1").innerHTML = C + "° Celcius";
    document.getElementById("result2").innerHTML = R + "° Reamur";
    document.getElementById("result3").innerHTML = K + "° Kelvin";

}

functReamur(8);
function functReamur(R)
{
    let C = R * 5/4;
    if(C%1 != 0)
    {
        C = C.toFixed(2);
    }
    let F = (R * 9/4) + 32;
    if(F%1 != 0)
    {
        F = F.toFixed(2);
    }
    let K = (R * 5/4) + Number(273.15);
    if(K%1 != 0)
    {
        K = K.toFixed(2);
    }


    document.getElementById("result1").innerHTML = C + "° Celcius";
    document.getElementById("result2").innerHTML = F + "° Fahrenheit";
    document.getElementById("result3").innerHTML = K + "° Kelvin";
}

functKelvin(283.15);
function functKelvin(K)
{
    let C = K - Number(273.15);
    if(C%1 != 0)
    {
        C = C.toFixed(2);
    }
    let F = (K - Number(273.15)) * 9/5 + 32;
    if(F%1 != 0)
    {
        F = F.toFixed(2);
    }
    let R = (K - Number(273.15)) * 4/5;
    if(R%1 != 0)
    {
        R = R.toFixed(2);
    }

    document.getElementById("result1").innerHTML = C + "° Celcius";
    document.getElementById("result2").innerHTML = F + "° Fahrenheit";
    document.getElementById("result3").innerHTML = R + "° Reamur";
}