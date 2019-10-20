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

let a1 = prompt("Введите обязательную статью расходов в этом месяце", ''),
    a2 = prompt("Во сколько обойдется?", ''),
    a3 = prompt("Введите обязательную статью расходов в этом месяце", ''),
    a4 = prompt("Во сколько обойдется?", '');

appData.expeses.a1 = a2;
appData.expeses.a3 = a4;

alert(appData.budget / 30);
