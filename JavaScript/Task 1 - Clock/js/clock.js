var myName = prompt("Adınızı giriniz.");
document.getElementById("myName").innerHTML = myName;

var today = new Date();
var time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

document.getElementById("myClock").innerHTML = time;

const getDayName = (dayIndex) =>{
	const days = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'];
	return days[dayIndex];
}

setInterval(() => {
    var today = new Date();
    var time =
    String(today.getHours()).padStart(2, '0') + ":" + String(today.getMinutes()).padStart(2, '0') + ":" + String(today.getSeconds()).padStart(2, '0') + " " + getDayName(today.getDay());
    document.getElementById("myClock").innerHTML = time;
}, 1000);
