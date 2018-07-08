const faker = require('faker');
const puppeteer = require('puppeteer');

const task = faker.random.words(2);

describe('Add Task form', () => {
  it('Can add Task', async () => {
    let browser = await puppeteer.launch({
      headless: false,
      devtools: true,
      slowMo: 100
    });
    let page = await browser.newPage();

    page.emulate({
      viewport: {
        width: 1000,
        height: 1000,
      },
      userAgent: ''
    });

    await page.goto('http://localhost:3000/');
    await page.waitForSelector('.task-form');
    await page.click("input[name=task]");
    await page.type("input[name=task]", task);
    await page.click("button[type=submit]");
    await page.waitForSelector('.list__item');

    const taskLength = await page.$$('.list__item');
    expect(taskLength.length).toBe(1);

    browser.close();
  }, 20000000);
});
