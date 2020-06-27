const login = require("../login");

describe('EDIT PROFILE', () => {
    before(() => {
        login();
    })
    it('Should click on diary in main menu', function () {
        $("//a[contains(text(),'Diary')]").click();
    });
    it('should HAVE CORRECT TITLE', function () {
        const actualTitle = $("//h1").getText();
        expect(actualTitle).toEqual('Daily reports')
    });
    it('should Button create day report is clickable', function () {
        const dayReportBtn = $("//a[@qa='create-day-report-button']");
        browser.pause(1000);
        const actualResult = dayReportBtn.isClickable();
        expect(actualResult).true;
    });
    it('should click on Day Report Btn', function () {
        $("//a[@class='btn btn-secondary']").click();
    });
    it('should click on I UNDERSTOOD EVERYTHING ', function () {
        const elem = $("//input[@id='input-1']");
        browser.pause(2000);
        elem.click();
        expect(elem.isSelected()).true;
    });
    it('should click on check box Helped Classmates', function () {
        const elem = $("//input[@id='input-2']");
        browser.pause(2000);
        elem.click();
        expect(elem.isSelected()).true;

    });
    it('should click on Watched Lectures', function () {
        const elem = $("//input[@id='input-3']");
        browser.pause(2000);
        elem.click();
        expect(elem.isSelected()).true;

    });
});
//fi



//