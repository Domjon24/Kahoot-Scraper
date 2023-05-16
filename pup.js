const puppeteer = require("puppeteer");
const fs = require('fs/promises');
(async (start) => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    // const names = ["123", "456", "789"]
    await page.goto("https://learnwebcode.github.io/practice-requests");          /*Original website https://quotes.toscrape.com/*/
    // await page.waitForSelector(".col-md-4")
    // await page.click(".col-md-4 a")
    // await page.waitForSelector("#username")
    // await page.type("#username", "Beyonce");                  /*, {delay: 100}  <-- add this after beyonce for delay*/ 
    // await page.type("#password", "1234"/*, {delay: 100}*/);
    // // class(span) = text. id = text
    const names = await page.evaluate(() => {
        return Array.from(document.querySelectorAll(".info strong")).map(x => x.textContent)
    })
    await fs.writeFile("names.txt", names.join("\r\n"));
    setTimeout(() => { browser.close(); }, 100);  
})

()