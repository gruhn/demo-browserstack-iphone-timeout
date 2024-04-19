import { browserstackLauncher } from '@web/test-runner-browserstack';

const { BROWSERSTACK_USERNAME, BROWSERSTACK_ACCESSKEY } = process.env

const sharedCapabilities = {
  'browserstack.user': BROWSERSTACK_USERNAME,
  'browserstack.key': BROWSERSTACK_ACCESSKEY,
  project: 'Debug',
  name: 'demo web-test-runner/iphone timeout',
  build: `local run: ${new Date()}`
};

export default {
  files: [ './index.html' ],
  nodeResolve: true,
  concurrentBrowsers: 1,

  // NOTE: no issue when this is set to 1
  concurrency: 2,

  browsers: [
    browserstackLauncher({
      capabilities: {
        ...sharedCapabilities,
        osVersion: '17',
        deviceName: 'iPhone 13',
        deviceOrientation: 'portrait',
      },
    }),
  ],
};
