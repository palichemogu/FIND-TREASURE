// Здесь будет код игры
//задача случайного числа
let getRandomNumber=function(size){
return Math.floor(Math.random()*size);
};

let getDistance=function(event,target)
{
   let diffX=event.offsetX-target.x;
   let diffY=event.offsetY-target.y;
   return Math.sqrt((diffX*diffX)+(diffY*diffY));
};

let getDistanceHint = function (distance) {
if (distance < 10) {
return "Обожжешься!";
} else if (distance < 20) {
return "Очень горячо";
} else if (distance < 40) {
return "Горячо";
} else if (distance < 80) {
return "Тепло";
} else if (distance < 160) {
return "Холодно";
} else if (distance < 320) {
return "Очень холодно";
} 
else if(distance<360)
{
    return "Очень-очень холодно";
}
else {
return "Замерзнешь!";
}
};

// Создаем переменные
var width = 400;
var height = 400;
var clicks = 0;
var tryes=25;
// Случайная позиция клада
var target = {
x: getRandomNumber(width),
y: getRandomNumber(height)
};

//обработчик клика 
// Добавляем элементу img обработчик клика
$("#map").click(function (event) {
clicks++;
tryes--;
// Получаем расстояние от места клика до клада
var distance = getDistance(event, target);
// Преобразуем расстояние в подсказку
var distanceHint = getDistanceHint(distance);
// Записываем в элемент #distance новую подсказку
$("#distance").text(distanceHint+"; Осталось попыток: "+tryes);
// Если клик был достаточно близко, поздравляем с победой
if (distance < 8) {
alert("Клад найден! Сделано кликов: " + clicks);
}
if(tryes===0)
{
    alert("Вы проиграли!Осталось попыток: "+ tryes);
}
});

