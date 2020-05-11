const puppeteer = require('puppeteer');
var length;
(async () => {
    //Open Browser
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto('https://vnexpress.net/');

    //Run this JS , move result to array
    const article = await page.evaluate(() => {
        // Select tất cả các element chứa tiêu đề bài viết
        let titleLinks = document.querySelectorAll(' .title-news > a'); 
        // Chuyển node list thành 1 mảng
        titleLinks = [...titleLinks];
        // Với mỗi phần tử trong mảng, ta lấy attribute titlreqe và link, chuyển thành object
        let article = titleLinks.map(link => ({
            title: link.getAttribute('title'), url: link.getAttribute('href'),
        }));            
        return article;
    });
    length = article.length;
    await browser.close();
    console.log(length);
})();

