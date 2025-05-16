module.exports = {
  ci: {
    collect: {
      numberOfRuns: 1,
      url: [],
      settings: {
        preset: 'desktop',
        emulatedFormFactor: 'desktop',
        screenEmulation: {
          mobile: false,
          width: 1024,
          height: 768,
          deviceScaleFactor: 1,
          disabled: false,
        },
        throttling: {
          rttMs: 40,
          throughputKbps: 10240,
          cpuSlowdownMultiplier: 1,
          requestLatencyMs: 0,
          downloadThroughputKbps: 0,
          uploadThroughputKbps: 0,
        },
      },
    },
    upload: {
      target: 'filesystem',
      outputDir: './lhci-report-desktop',
    },
  },
};
