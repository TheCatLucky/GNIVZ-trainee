import 'expect-puppeteer';

import puppeteer from 'puppeteer';

jest.setTimeout(50000);

describe('Е2Е Тесты', () => {
  let browser: puppeteer.Browser;
  let page: puppeteer.Page;

  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
    await page.goto('https://thecatlucky.github.io/GNIVZ-trainee/', {
      waitUntil: ['networkidle0'],
    });
  });

  // eslint-disable-next-line jest/expect-expect
  it('создается фото отображения списком', async () => {
    await page.click('#root > header > nav > a:nth-child(1)');
    await page.screenshot({ path: './src/tests/list.jpg' });
  }, 5000);

  it('появляяются новые элементы', async () => {
    await page.click('div.Home_content__5uVFV > div > button  ');
    const text = await page.evaluate(() => document.body.textContent);
    expect(text).toContain('eum et est occaecati');
  });
  it('Есть тексты на стартовом экране', async () => {
    const text = await page.evaluate(() => document.body.textContent);
    expect(text).toContain('sunt aut facere');
  });
  it('создается фото отображения карточек', async () => {
    await page.click('#root > header > nav > a:nth-child(2)');
    await page.screenshot({ path: './src/tests/cards.jpg' });
  }, 5000);

  it('переход на страницу О проекте', async () => {
    await page.click('#root > header > nav > a:nth-child(3)');
    const text = await page.evaluate(() => document.body.textContent);
    expect(text).toContain('Представление');
  });

  afterAll(async () => {
    await browser.close();
  });
});
