import puppeteer from 'puppeteer';

const puppeteerExtra = require('puppeteer-extra');
const pluginStealth = require('puppeteer-extra-plugin-stealth');
const RecaptchaPlugin = require('puppeteer-extra-plugin-recaptcha');
import * as dotenv from 'dotenv';

dotenv.config();

(async () => {

	// Use the reCaptcha plugin
	puppeteerExtra.use(
		RecaptchaPlugin({
			provider: { id: '2captcha', token: process.env.captchaToken },
			visualFeedback: true // colorize reCAPTCHAs (violet = detected, green = solved)
		})
	);

	puppeteerExtra.use(pluginStealth());
	const browser = await puppeteerExtra.launch({ headless: false });

	// Normal browser from normal puppeteer
	// const browser = await puppeteer.launch({ headless: false });

	const url = 'https://www.zillow.com/homes/%0913905--ROYAL-BOULEVARD-cleveland-ohio_rb/33601155_zpid/';

	for (let i = 0; i < 100; i++) {
		console.log('starting attempt:', i);
		const page = await browser.newPage();

		await page.goto(url);


		try {
			await page.waitForSelector('.error-content-block', { timeout: 750 });
			console.log('we found a recaptcha on attempt:', i);

			await (<any>page).solveRecaptchas();
			await Promise.all([
				page.waitForNavigation(),
				page.click('[type="submit"]')
			]);
		}
		catch (e) {
			console.log('no recaptcha found on attempt:', i);
		}

		await page.waitFor(1500);

		await page.close();
	}

	await browser.close();
})();