Bug reproduction for [next-page-tester#151](https://github.com/toomuchdesign/next-page-tester/issues/151).

Instructions:

1. `git clone https://github.com/jesstelford/next-page-tester-bug-151.git`
2. `cd next-page-tester-bug-151`
3. `yarn`
4. `yarn jest`
5. Note the error (below)
6. Uncomment line 8 in `__tests__/test.js`
7. `yarn jest`
8. Note the success


```
❯ yarn jest
yarn run v1.22.10
$ next-page-tester-bug-151/node_modules/.bin/jest
 FAIL  __tests__/test.js
  failing tests
    ✕ loads env vars correctly (36 ms)

  ● failing tests › loads env vars correctly

    Invalid i18n.domains values:
    {"defaultLocale":"en-AU"}

    domains value must follow format { domain: 'example.fr', defaultLocale: 'fr', locales: ['fr'] }.
    See more info here: https://err.sh/next.js/invalid-i18n-config

       7 |     // Uncomment this line to make the test pass
       8 |     // process.env.DOMAIN = "https://example.com";
    >  9 |     const { serverRender, render } = await getPage({
         |                                            ^
      10 |       route: "/",
      11 |       dotenvFile: ".env.production",
      12 |     });

      at assignDefaults (node_modules/next/next-server/server/config.ts:419:15)
      at Object.loadConfig [as default] (node_modules/next/next-server/server/config.ts:544:12)
      at Object.loadNextConfig (node_modules/next-page-tester/dist/nextConfig.js:12:34)
      at getPage (node_modules/next-page-tester/dist/getPage.js:43:18)
      at Object.<anonymous> (__tests__/test.js:9:44)

Test Suites: 1 failed, 1 total
Tests:       1 failed, 1 total
Snapshots:   0 total
Time:        3.226 s
Ran all test suites.
```
