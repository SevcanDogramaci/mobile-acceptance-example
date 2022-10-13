import wdioConfig from "./webdriverio.config.js";
import wdio from "webdriverio";
import "expect-webdriverio";

async function main() {
  const client = await wdio.remote(wdioConfig);

  var selector = 'new UiSelector().descriptionContains("push-number-text")';
  const clickedNumberText = await client.$("android=" + selector);
  const clickedNumberTextContentDescription =
    await clickedNumberText.getAttribute("content-desc");

  console.log(
    "clickedNumberTextContentDescription:",
    clickedNumberTextContentDescription
  );

  const clickedNumberInitialValue = JSON.parse(
    clickedNumberTextContentDescription
  ).value;
  console.log("clickedNumberTextValue:", clickedNumberInitialValue);
  await expect(clickedNumberInitialValue).toBe("0");

  await client.deleteSession();
}

main();
