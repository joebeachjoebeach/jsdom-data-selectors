## High performance cost of data selectors in `jsdom`

This repository illustrates the high performance cost of using data selectors (e.g. `document.querySelector('[data-name="Lars"]')`) in `jsdom` when compared to a native browser. Obviously, I wouldn't expect `jsdom` to match native browser speeds, but the slowdown in data selectors far exceeds the slowdown in ID selectors.

-   [Measuring performance](#measuring-performance)
-   [Results](#results)
    -   [Browser](#browser)
    -   [`jsdom`](#jsdom)
    -   [Analysis](#analysis)
-   [How to see it for yourself](#how-to-see-it-for-yourself)

### Measuring performance

This repo contains a script that **measures and logs the time to execute 500 data selectors**, and then does the same for ID selectors. It's set up to easily run the script in a browser or `jsdom`.

### Results

#### Browser

Here's what I get in Chrome 94:

```
data selector time:: 5.259033203125 ms
id selector time:: 0.270751953125 ms
```

#### `jsdom`

Here's what I get in `jsdom` 17:

```
data selector time:: 644.866ms
id selector time:: 1.956ms
```

#### Analysis

This means that **ID selectors are approximately 7 times slower** in `jsdom` than in Chrome, but that **data selectors are approximately 123 times slower**.

### How to see it for yourself

1. Clone this repo

2. Run `npm install`

3. To see browser perf numbers:

    a. Run `npm run browser` to start the HTTP server.

    b. Open the page in your browser.

    c. Open the JS console to see timing information.

4. To see `jsdom` perf numbers

    a. Run `npm run jsdom`.

    b. The perf numbers will be logged directly to your terminal.
