class LoginPage {
    
    get loginButton() {
        return $('#login-button');
    }

    get errorMsg () {
        return $("//h3[@data-test='error']");
    }

    async open(path) {
       await browser.url(path);
    }
}

export default new LoginPage();