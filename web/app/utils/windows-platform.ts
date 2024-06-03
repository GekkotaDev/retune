// https://learn.microsoft.com/en-us/microsoft-edge/web-platform/how-to-detect-win11

// @ts-ignore
export default navigator.userAgentData
  .getHighEntropyValues(["platformVersion"])
  // @ts-ignore
  .then((ua) => {
    // @ts-ignore
    if (navigator.userAgentData.platform === "Windows") {
      const majorPlatformVersion = parseInt(ua.platformVersion.split(".")[0])
      if (majorPlatformVersion >= 13) {
        return "windows11"
      } else if (majorPlatformVersion > 0) {
        return "windows10"
      } else {
        return "windows"
      }
    } else {
      return "nix"
    }
  }) as "windows11" | "windows10" | "windows" | "nix"
