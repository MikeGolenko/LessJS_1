let money = prompt("Ваш бюджет за месяц?", '');
let time = prompt("Введите дату в формате YYYY-MM-DD", '');

appData = {
    budget : money,
    timeData : time,
    expeses : {},
    optionalExpenses : {},
    incom: [],
    savings : false
};


for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
        b = prompt("Во сколько обойдется?", '');

    if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
        && a !='' && b !='' && a.length < 50) {
            console.log("Done");
            appData.expeses[a] = b;
        } else {
            alert("Ошибка ввода!");
            i--;
        }
    
};

appData.moneyPerDay = appData.budget / 30;

alert("Бюджет на 1 день составляет" + appData.moneyPerDay + "руб.");
