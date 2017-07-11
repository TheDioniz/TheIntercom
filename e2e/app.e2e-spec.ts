import { NG4IntercomPage } from './app.po';

describe('ng4-intercom App', () => {
  let page: NG4IntercomPage;

  beforeEach(() => {
    page = new NG4IntercomPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
