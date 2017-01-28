import { CursoAngular2CliPage } from './app.po';

describe('curso-angular2-cli App', function() {
  let page: CursoAngular2CliPage;

  beforeEach(() => {
    page = new CursoAngular2CliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
