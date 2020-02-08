import { Book1Page } from './app.po';

describe('book1 App', function() {
  let page: Book1Page;

  beforeEach(() => {
    page = new Book1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
