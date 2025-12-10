import {test,expect}from "@playwright/test"

test("Myntra",async({page})=>
{
    await page.goto("https://www.myntra.com/");
    const Kids = await page.locator("//a[text()='Kids' and @data-group='kids']").hover();
    const tshirt = await page.locator("(//a[text()='T-Shirts'])[2]").click();
    await page.waitForTimeout(3000);
    const count = await page.locator("//li[@class='product-base']").count();
    console.log(count);
    const price = await page.locator("//li[@class='product-base']/descendant::div[@class='product-price']//span[@class='product-discountedPrice' or (text() and not (@class))]");
    const totalPrice = await price.allTextContents();
    console.log(totalPrice);
    const nprice = [];
    for (const p of totalPrice) 
     {
      const prices =Number(p.replace("Rs. ", "").replace(",", "")); 
      nprice.push(prices);
     }
    console.log("Prices without text:",nprice);
    const sorted = nprice.sort();
    console.log("Prices in Ascending Order:",sorted);
    let mini = sorted[0];
    console.log("The Mininum Price is:",mini);
    const Brand = page.locator(`//span[text()='${mini}']//ancestor::div[@class='product-price']//preceding-sibling::h3[@class='product-brand']`);
    const productName = await Brand.allTextContents();
    console.log(productName);   
})