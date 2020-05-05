export class BrowserHelper {

  static getBrowserLanguage(): string {
    const language = window.navigator.languages ? window.navigator.languages[0] : null;
    return (language || navigator.language).toLocaleLowerCase();
  }

  static isLanguagePtBr(): boolean {
    const language = BrowserHelper.getBrowserLanguage();
    if (language === 'pt-br' || language === 'pt') {
      return true;
    }
    return false;
  }
}