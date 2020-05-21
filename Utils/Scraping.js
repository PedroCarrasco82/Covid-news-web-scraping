const puppeteer = require('puppeteer');

module.exports.getInfo = async() => {
    console.log('Starting data scrap');
    let chromium = await puppeteer.launch();
    let browser = await chromium.newPage();
    await browser.goto('https://www.saopaulo.sp.gov.br/noticias-coronavirus/');
    const info = await browser.evaluate(()=>{

        let json =  document.querySelectorAll('.style-post-list .post');
        let contact = Object.keys(json).map(i => {
            let index = Number(i);
            let news = document.querySelectorAll('.style-post-list .post')[index];
            return {
                title: news.querySelector('.title').textContent,
                description: news.querySelector('.excerpt').textContent,
                date: news.querySelector('.date').textContent.split(' - ')[0],
                time: news.querySelector('.date').textContent.split(' - ')[1],
                image: news.querySelector('.image').getAttribute('src'),
                newsLink: news.querySelector('.title a').getAttribute('href')
            }
        });
        return contact;
    });

    await browser.close();

    console.log(info);

    console.log('finalizado');
    return info;
}