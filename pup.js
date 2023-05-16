const puppeteer = require("puppeteer");
(async (start) => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto("https://quotes.toscrape.com/");
    await page.waitForSelector(".col-md-4")
    await page.click(".col-md-4 a")
    await page.waitForSelector("#username")
    await page.type("#username", "Beyonce", {delay: 100});
    await page.type("#password", "1234", {delay: 100});
    // await browser.close();
    setTimeout(() => { browser.close(); }, 3000);  
})

()