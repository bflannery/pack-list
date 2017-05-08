import { PackListPage } from './app.po';

describe('pack-list App', () => {
  let page: PackListPage;

  beforeEach(() => {
    page = new PackListPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
