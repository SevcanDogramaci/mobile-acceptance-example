const osSpecificOps =
  process.env.APPIUM_OS === "android"
    ? {
        platformName: "Android",
        deviceName: "emulator-5554",
        platformVersion: "11.0",
        app: "/Users/sevcandogramaci/Desktop/Playground/flutter_open_component_example/build/app/outputs/flutter-apk/app-debug.apk" || __dirname + "/apps/app-debug.apk",
        path: "/wd/hub",
      }
    : process.env.APPIUM_OS === "ios"
    ? {
        platformName: "iOS",
        platformVersion: "12.2",
        deviceName: "iPhone X",
        noReset: true,
        app: __dirname + "/apps/Runner.zip",
      }
    : {};

export default {
  port: 4723,
  capabilities: {
    ...osSpecificOps,
  },
};