import { browser, by, element, ExpectedConditions } from 'protractor';

export class AppPage {
  async navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl);
  }

  async getFirstHeaderLink(): Promise<string> {
    return element(by.css('#link_home')).getText();
  }

  async getGameElements(): Promise<number> {
    return element.all(by.css('app-game')).count();
  }

  async clickShowMoreButton(): Promise<unknown> {
    return element(by.css('#showMore_button')).click();
  }

  async clickSearchLink(): Promise<unknown> {
    return element(by.css('#link_search')).click();
  }

  async addSearchText(): Promise<unknown> {
    return element(by.css('#text_input')).sendKeys('a');
  }

  async showGames(): Promise<any> {
    return browser.wait(ExpectedConditions.visibilityOf(element(by.css('#link_home'))), 5000);
  }
}
