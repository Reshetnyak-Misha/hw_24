function createCurrencyConverter(rate) {
    const localeRate = rate;

    return {
        toLocalCurrency: function (value) {
            if (isNaN(value) && value > 0) {
                return console.error("Error");
            }
            let resultConvertEUR = value * localeRate;
            return resultConvertEUR.toLocaleString('es-ES' , {style: 'currency', currency: 'EUR'});
        },
        toForeignCurrency: function (value) {
            if (isNaN(value) && value > 0) {
                return console.error("Error");
            } else {
                let resultConvertUSD = value / localeRate;
                return resultConvertUSD.toLocaleString('en-US' , {style: 'currency', currency: 'USD'});
            }
        }
    }
}

const converter = createCurrencyConverter(0.89);

console.log(converter.toLocalCurrency(100));
console.log(converter.toForeignCurrency(89));