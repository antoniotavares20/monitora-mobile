var chromeOptions = {
  args: ['--headless', '--disable-gpu']
}

if (process.env.GOOGLE_CHROME_BINARY) {
  chromeOptions.binary = process.env.GOOGLE_CHROME_BINARY;
}

exports.config = {
  directConnect: true,
  capabilities: {
    browserName: 'chrome',
    chromeOptions: chromeOptions
  },
  }