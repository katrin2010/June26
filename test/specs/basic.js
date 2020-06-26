// const {expect} = require('chai'); //obj: expect, assert /// distructuring assigment, destryktyrizaciya massiva
// //babel -> new js to old js with var
//
// //before - pered IT inside describe.
//
// describe('REGISTRATION PAGE', () =>{
//     before(()=> {
//         browser.maximizeWindow();
//         browser.url('https://stage.pasv.us/user/register')
//     })
//     it('should Title is correct', function () {
//         const actualText = $('//h1').getText();
//         const expectedText = 'User Register';
//         expect(actualText).eq(expectedText);
//     });
//     it('should fill out First Name field', () => {
//       const IfFirstName = $('//input[@name=\'firstName\']');
//       IfFirstName.setValue('Ekaterina');
//       const text = IfFirstName.getValue();
//       expect(text).eq('Ekaterina')
//     });
//     it('should input first name is valid', function () {
//         const IfFirstName = $('//input[@name=\'firstName\']');
//         browser.keys('Tab');
//         const result = IfFirstName.getAttribute('class')
//         expect(result).contains('is-valid');
//     });
//     it('should fill out Last Name field', function () {
//         const inputLastName = $('//input[@name=\'lastName\']');
//         inputLastName.setValue('Semenova');
//
//     });
//     it('should input Last name is valid', function () {
//         const inputLastName = $('//input[@name=\'lastName\']');
//         browser.keys('Tab');
//         const result = inputLastName.getAttribute('class')
//         expect(result).contains('is-valid');
//     });
//     it('should fill out Email field', function () {
//         const inputEmail = $('//input[@name=\'email\']');
//         inputEmail.setValue('katrin-2010@hotmail.com');
//     });
//     it('should input Email is valid', function () {
//         const inputEmail = $('//input[@name=\'email\']');
//         browser.keys('Tab');
//         const result = inputEmail.getAttribute('class')
//         expect(result).contains('is-valid');
//     });
//     it('should fill out Password field', function () {
//         const inputPassowrd = $('//input[@name=\'password\']');
//         inputPassowrd.setValue('123698745Kate');
//     });
//     it('should input Password is valid', function () {
//         const inputPassword = $('//input[@name=\'password\']');
//         browser.keys('Tab');
//         const result = inputPassword.getAttribute('class')
//         expect(result).contains('is-valid');
//     });
//
//     it('should Submit button is clickable ', () => {
//         let btnSubmit = $('//button[@type="submit"]');
//         let result = btnSubmit.isClickable();
//         expect(result).eq(true);
//     });
//
//     // it('should check if button Submit is clickable', function () {
//     //     const submitButton = $('//button[@class=\'btn btn-primary disabled\']').isClickable();
//     //     //const button = $('//button[@class=\'btn btn-primary disabled\']').getText();
//     //     expect(submitButton).eq(true);
//
// })
//
// function login(){
//     browser.maximizeWindow();
//     browser.url('https://stage.pasv.us/user/login');
//     $("//input[@name='email']").setValue('katrin-2010@hotmail.com');
//     $("//input[@name='password']").setValue('123698745Qaz');
//     $("//button[@type='submit']").click();
// }
//
//
// describe('EDIT PROFILE',() => {
//     before(() => {
//         login();
//
//     })
//     it('check size t-shirt', function () {
//         browser.pause(2000);
//
//     });
// })

