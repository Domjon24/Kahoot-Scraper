const PORT = 8000
const axios = require('axios')
const cheerio = require('cheerio')
const express = require('express')
const url = 'https://www.stltoday.com/'


const app = express()

axios(url)

    .then(response => {
        const html = response.data
        const $ = cheerio.load(html)
        const articles = []
        // console.log(html)

        $('.tnt-headline', html).each(function () {
           const title = $(this).text() 
           const url = $(this).find('a').attr('href')
           articles.push({
                title, 
                url
           })
        })
        console.log(articles[0])
    }).catch(err => console.log(err))

    app.listen(PORT, () => console.log(`server running on PORT ${PORT}`))
