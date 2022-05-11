# Simple Key Store

The most simple key store imaginable using Identity Vault.

## Building

This app _must_ be run in a native context, either on a device or on an emulator. As always, it is always _best_ to have a multitude of actually devices and use one of them rather than an emulator.

**Note:** to build this, you will need an Ionic Enterprise key that has access to `@ionic-enterprise/identity-vault`. If you already have a production app that is using one, you can simply copy the `.npmrc` file from there prior to doing the `npm install` step.

1. Copy a valid `.npmrc` that has an Ionic Enterprise key from another one of your projects.
1. `npm install`
1. `npm run build`
1. `npx cap sync`
1. `npx cap open ios` - run native app on a device from there
1. `npx cap open android` - run native app on a device from there
