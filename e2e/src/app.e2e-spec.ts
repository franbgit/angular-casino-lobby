import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display home link', async () => {
    await page.navigateTo();
    expect(await page.getFirstHeaderLink()).toEqual('Home');
  });

  it('should display 10 games', async () => {
    expect(await page.getGameElements()).toEqual(10);
  });

  it('should display 20 games after click add', async () => {
    await page.clickShowMoreButton();
    expect(await page.getGameElements()).toEqual(20);
  });

  it('should search games', async () => {
    await page.clickSearchLink();
    await page.addSearchText();
    await page.showGames();
    expect(await page.getGameElements()).toEqual(10);
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
