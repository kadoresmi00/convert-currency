const getExchangeRate = require('./getExchangeRate');


/**
 * @param {string} baseCurrency
 * @param {string} targetCurrency
 * @param {number} amount
 * @returns {Promise<{data: {amount: string, currency: string}, message: string}>}
 */

async function convertCurrency(baseCurrency, targetCurrency, amount) {
    if(baseCurrency === targetCurrency) {
        throw new Error('baseCurrency and targetCurrency must be different');
    }
    if(!baseCurrency || !targetCurrency || typeof baseCurrency !== 'string' || typeof targetCurrency !== 'string') {
        throw new Error('baseCurrency and targetCurrency are required and must be strings');
    }
    if(!amount || isNaN(amount)) {
        throw new Error('amount must be a number');
    }
    const rate = await getExchangeRate(baseCurrency, targetCurrency);
    const convertedAmount = (amount * rate.amount).toFixed(2);
    const data = {
        data: {
            amount: convertedAmount,
            currency: targetCurrency,
        },
        message: `${amount} ${baseCurrency} is worth ${convertedAmount} ${targetCurrency}.`,
    }
    return data;
}

module.exports = convertCurrency;