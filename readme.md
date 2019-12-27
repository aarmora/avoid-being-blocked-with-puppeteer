# Avoid being blocked while scraping with puppeteer

This package has some sample code using [positionstack](https://positionstack.com/). Positionstack is an API that is extremely easy to use for any kind of location or geocoding.

## Getting Started

Clone the repository and run `npm i`. 

If you plan on using the reCaptcha solver portion you'll need to get a token from [2Captcha](https://2captcha.com?from=7390140) and rename `.sample.env` file to `.env` and place your token there.

After that, you just need to run `npm start`.

[Full Guide Here](https://javascriptwebscrapingguy.com/jordan-uses-positionstack/)

### Prerequisites

Tested on Node v12.4.0 and NPM v6.9.0.

### Installing

After installing [NodeJS](https://nodejs.org/en/) you should be able to just run the following in the terminal.

```
npm i
```

## Built With

* [NodeJS](https://nodejs.org/en/) - NodeJS
* [Puppeteer](https://github.com/puppeteer/puppeteer) - Puppeteer. Headless browser
* [Puppeteer-extra](https://github.com/berstend/puppeteer-extra/tree/master/packages/puppeteer-extra) - puppeteer-extra for recaptcha and stealth plugin

## Authors

* **Jordan Hansen** - *Initial work* - [Jordan Hansen](https://github.com/aarmora)


## License

This project is licensed under the ISC License

