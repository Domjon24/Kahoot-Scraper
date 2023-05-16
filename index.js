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
