  <h1>
    <img align="left" height=40 src="https://cdn0.iconfinder.com/data/icons/apple-apps/100/Apple_Settings-512.png" />
    <span align="left">fast-convert-currency</span>
  </h1>

All currency units, convert in the simplest way!

```bash
npm i fast-convert-currency
```

<a href="https://github.com/kadoresmi00/fast-convert-currency">![GitHub package.json version](https://img.shields.io/github/package-json/v/fast-convert-currency?style=for-the-badge)</a>
<a href="https://www.npmjs.com/package/fast-convert-currency">![npm](https://img.shields.io/npm/dw/fast-convert-currency?style=for-the-badge)</a>

**Features:**

- The conversion of all currencies. ✅
- Simplified module ✅
- Quick turnaround time✅

# Usage

Very easy, you don't even need to use the documentation, actually.😉

 - getExchangeRate ()

```js
const { getExchangeRate } = require('fast-convert-currency');

getExchangeRate('USD', 'TRY'); // async

example;

(async () => {
    const rate = await getExchangeRate('USD', 'TRY');
    console.log(rate);
    /* 
    {
        amount: 29.97,
        lastUpdated: 'an hour ago'
    }
    */
})();

```

- convertCurrency()

```js
const { convertCurrency } = require('fast-convert-currency');

convertCurrency('USD', 'TRY', 100);

(async () => {
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
    console.log(converted);
})();

```


## NPM
[Link](https://www.npmjs.com/package/convert-currency)
