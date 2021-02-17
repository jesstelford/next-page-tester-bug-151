const { initTestHelpers, getPage } = require("next-page-tester");

initTestHelpers();

describe("failing tests", () => {
  it("loads env vars correctly", async () => {
    // Uncomment this line to make the test pass
    // process.env.DOMAIN = "https://example.com";
    const { serverRender, render } = await getPage({
      route: "/",
      dotenvFile: ".env.production",
    });

    expect(true).toBeTruthy();
  });
});
