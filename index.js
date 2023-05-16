// const PORT = 8000
// const axios = require('axios')
// const cheerio = require('cheerio')
// const express = require('express')
// // const url = 'https://www.stltoday.com/'
// const url = 'https://kahoot.com'


// const app = express()

// axios(url)

//     .then(response => {
//         const html = response.data
//         const $ = cheerio.load(html)
//         const articles = []
//         // console.log(html)

//         $('h1', html).each(function () {
//            const title = $(this).text() 
//            articles.push({
//                 title,
//            })
//         })
//         $('.content-container--inner', html).each(function () {
//             const description = $(this).find('p').text()
//             articles.push({
//                  description
//             })
//          })
//         console.log(articles)
//     }).catch(err => console.log(err))

//     app.listen(PORT, () => console.log(`server running on PORT ${PORT}`))

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