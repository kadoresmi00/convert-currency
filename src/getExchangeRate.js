const fetch = require('node-fetch');
const moment = require('moment');

/**
 * @param {string} baseCurrency
 * @param {string} targetCurrency
 * @returns {Promise<{amount: number, lastUpdated: string}>}
 */


async function getExchangeRate(baseCurrency, targetCurrency) {
    if(baseCurrency === targetCurrency) {
        throw new Error('baseCurrency and targetCurrency must be different');
    }
    if(!baseCurrency || !targetCurrency || typeof baseCurrency !== 'string' || typeof targetCurrency !== 'string') {
        throw new Error('baseCurrency and targetCurrency are required and must be strings');
    }
    const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${baseCurrency}`);
    const data = await response.json();
    if (data.result === 'error') {
        throw new Error(data['error-type']);
    }
    const rate = data.rates[targetCurrency];
    if (rate) {
        return {
            amount: rate,
            lastUpdated: moment.unix(data.time_last_updated).startOf('hour').fromNow(),
        };
    } else {
        throw new Error(`Unable to get currency ${targetCurrency}`);
    }
}

module.exports = getExchangeRate;