const {convertCurrency, getExchangeRate} = require('convert-currency');

(async  () => {
    try {
        const rate = await getExchangeRate('USD', 'TRY'); 
        /* 
        {
            amount: 29.97,
            lastUpdated: 'an hour ago'
        }
        */
        const converted = await convertCurrency('USD', 'TRY', 100);
        /*
        {
            data: {
                amount: '2997.00',
                currency: 'TRY'
            },
            message: '100 USD is worth 2997.00 TRY.'
        }
        */
        console.log(rate, converted);

    } catch (error) {
        console.log(error.message);
    }
})();