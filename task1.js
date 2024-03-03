function createCurrencyConverter(rate) {
    return {
        rate: rate,
        toLocalCurrency: function (value) {
            if (isNaN(value) && value > 0) {
                return console.error("Error");
            }
            return value * this.rate;
        },
        toForeignCurrency: function (value) {
            if (isNaN(value) && value > 0) {
                return console.error("Error");
            } else {
                return value / this.rate;
            }
        }
    }
}

const converter = createCurrencyConverter(0.89);

console.log(converter.toLocalCurrency(100));
console.log(converter.toForeignCurrency(89));