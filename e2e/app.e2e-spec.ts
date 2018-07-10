import { TypescriptAppPage } from './app.po';

describe('typescript-app App', () => {
  let page: TypescriptAppPage;

  beforeEach(() => {
    page = new TypescriptAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
