# Expo Linking API Unreliable on Android (App Already Open)

This repository demonstrates a bug in the Expo `Linking` API on Android. When the app is already running and a deep link is tapped, the `Linking.addEventListener` callback is not always triggered.

## Problem
The issue lies in the inconsistency between Android and iOS behavior. On iOS, the event listener fires reliably, regardless of the app's state. On Android, it often fails to trigger when the app is already open.

## Reproduction Steps
1. Clone this repository.
2. Run the app on both Android and iOS emulators/devices.
3. Open a deep link in a separate browser or app (the link is defined in the code).
4. Observe the console logs to see whether the event listener is triggered on each platform.

## Solution
The proposed solution involves using both `Linking.addEventListener` and `Linking.getInitialURL` to handle the deep link in different scenarios.  `getInitialURL` retrieves the URL if the app was launched via a deep link, while `addEventListener` handles subsequent links.

## Note
This issue might be related to specific Android versions or Expo SDK versions.  Please check the Expo documentation and issue tracker for updates and potential fixes.
