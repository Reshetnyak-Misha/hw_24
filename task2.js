function createInvestmentAccount(initialAmount, annualInterestRate) {
    let localMoney = initialAmount;
    let interestRate = annualInterestRate / 100;
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
                const profit = localMoney * Math.pow(1 + interestRate, years) - localMoney;
                let result = 0;
                result += profit;
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
createMoney.deposit(1000);
createMoney.allMoney();
createMoney.withdraw(5000);
createMoney.calculateProfit(3);
createMoney.getAccountInfo();

