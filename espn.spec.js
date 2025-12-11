import {test,expect}from "@playwright/test"

test("espn", async({page})=>
{
    let cricketer = "Kohli";
    let score = "Runs";
    await page.goto("https://www.espncricinfo.com/records/most-runs-in-career-83548");
    await page.waitForLoadState();
    const table = await page.locator("//table/thead/tr/td").allTextContents();
    console.log(table);
    let value = table.indexOf(score);
    console.log(value);
    const odi_Runs = await page.locator(`//table/tbody/tr/td/descendant::span[contains(text(),'${cricketer}')]/ancestor::td/following-sibling::td[${value}]`).allTextContents();
    console.log(odi_Runs);
 })