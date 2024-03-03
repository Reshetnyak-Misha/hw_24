function createInvestmentAccount(initialAmount, annualInterestRate) {
    let localMoney = initialAmount;
    let finalResult = 0;

    return {
        deposit: function (outMoney) { //Положить деньги на депозит
            localMoney += outMoney;
        },
        withdraw: function (outMoney) { //Снять деньги с депозита
            if (!outMoney > localMoney) {
                localMoney -= outMoney;
            } else {
                console.error("Слишком много снимаете");
            }
        },
        allMoney: function () { //Вывести текущий баланс
            console.log(localMoney);
        },
        calculateProfit: function (years) { //Высчитать прибыль от процентной ставки с годами
            if (localMoney > 0) {
                const profit = (localMoney * annualInterestRate) / 100;
                const result = localMoney + (profit * years);
                finalResult = result.toFixed(2);
                return console.log(result.toFixed(2));
            }
        },
        getAccountInfo: function () { //Вывести информацию по аккаунту
            console.log("Баланс:",localMoney,"Процентая ставка:", annualInterestRate,"Общая прибыль:", finalResult)
        }
    }
}

const createMoney = createInvestmentAccount(1000, 5);// createInvestmentAccount(баланс и процент)
createMoney.deposit(500);
createMoney.allMoney();
createMoney.withdraw(1000);
createMoney.calculateProfit(3);
createMoney.getAccountInfo();

