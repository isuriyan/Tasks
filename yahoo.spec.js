import {test,expect}from "@playwright/test"

test("yahoo", async({page})=>
    {
     await page.goto("https://www.yahoo.com/");
     const trend = await page.locator("//div[@class='hd']//following-sibling::div[@class='bd']//descendant::span[@class='D(ib) Ell'][9]");
     const text = trend.allTextContents();
     console.log(text);
    })