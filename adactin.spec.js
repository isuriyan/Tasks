import {test,expect}from '@playwright/test'

test('adactin',async({page}) =>{
    await page.goto('https://adactinhotelapp.com/index.php');
    const usrname = await page.locator('#username');
    await usrname.fill('Ilamsuriyan');
    const password = await page.locator('#password')
    await password.fill('Ilam@1826');
    await page.screenshot({path: 'screencapture.js'+'Login.png'});
    const login = await page.locator('#login');
    await login.click();
    await page.waitForTimeout(3000);
    const location = await page.locator('#location');
    await location.selectOption('Sydney');
    const hotel = await page.locator('#hotels');
    await hotel.selectOption('Hotel Sunshine');
    const roomtype = await page.locator('#room_type');
    await roomtype.selectOption('Deluxe');
    const roomnum = await page.locator('#room_nos');
    await roomnum.selectOption('2 - Two');
    const checkin = await page.locator('#datepick_in');
    await checkin.fill('03/12/2025');
    const checkout = await page.locator('#datepick_out');
    await checkout.fill('05/12/2025');
    const numofper = await page.locator('#adult_room');
    await numofper.selectOption('2 - Two');
    const children = await page.locator('#child_room');
    await children.selectOption('0 - None');
    await page.screenshot({path: 'screencapture.js'+'details.png'});
    await page.locator('#Submit');
    await page.waitForTimeout(3000);
    const confirm = await page.locator('#radiobutton_0');
    await confirm.click();
    await page.locator('#continue').click();
    await page.screenshot({path: 'screencapture.js'+'confirm.png'});
    const fname = await page.locator('#first_name');
    await fname.fill('Ilamsuriyan');
    const lname = await page.locator('#last_name');
    await lname.fill('K S');
    const address = await page.locator('#address');
    await address.fill('1 ABC');
    await page.locator('#cc_num').fill('1234567899876547');
    await page.locator('#cc_type').selectOption('American Express');
    await page.locator('#cc_exp_month').selectOption('August');
    await page.locator('#cc_exp_year').selectOption('2030');
    await page.locator('#cc_cvv').fill('456');
    await page.screenshot({path: 'screencapture.js'+'payment.png'});
    await page.locator('#book_now');
    await page.waitForTimeout(3000);
    await page.screenshot({path: 'screencapture.js'+'final.png'})
})