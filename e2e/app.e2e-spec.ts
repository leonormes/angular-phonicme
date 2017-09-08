import { AngularPhonicmePage } from './app.po';

describe('angular-phonicme App', () => {
  let page: AngularPhonicmePage;

  beforeEach(() => {
    page = new AngularPhonicmePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
