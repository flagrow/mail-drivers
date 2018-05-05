# Mail Drivers by ![Flagrow logo](https://avatars0.githubusercontent.com/u/16413865?v=3&s=20) [Flagrow](https://discuss.flarum.org/d/1832-flagrow-extension-developer-group), a project of [Gravure](https://gravure.io/)

[![MIT license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/flagrow/mail-drivers/blob/master/LICENSE.md) [![Latest Stable Version](https://img.shields.io/packagist/v/flagrow/mail-drivers.svg)](https://packagist.org/packages/flagrow/mail-drivers) [![Total Downloads](https://img.shields.io/packagist/dt/flagrow/mail-drivers.svg)](https://packagist.org/packages/flagrow/mail-drivers) [![Join our Discord server](https://discordapp.com/api/guilds/240489109041315840/embed.png)](https://flagrow.io/join-discord)

This extension lets you use other mail drivers already included with Flarum but which had no way to be configured by the forum owner.

The drivers are **Mailgun**, **Mandrill** and **Amazon SES**.

These drivers are API-based which means you can usually use them even if the host has blocked outbound SMTP.

## Installation

Use [Bazaar](https://discuss.flarum.org/d/5151-flagrow-bazaar-the-extension-marketplace) or install manually:

```bash
composer require flagrow/mail-drivers
```

## Updating

```bash
composer update flagrow/mail-drivers
php flarum migrate
php flarum cache:clear
```

## Configuration

Open the extension settings to configure your driver credentials.
All the credentials are saved even if you don't enable the driver.

Clicking "set the mail driver to ..." will update your current "driver" setting from the Email tab.
You can go back to the SMTP driver by setting "driver" to "smtp" in the Email tab of the admin panel.

**Disabling this extension won't automatically switch you back to SMTP !**

Mailgun and Mandrill will work out of the box.
Before configuring the SES driver you need to install the Amazon SDK with `composer require aws/aws-sdk-php:~3.0`.

## Security

If you discover a security vulnerability within Mail Drivers, please send an email to the Gravure team at security@gravure.io. All security vulnerabilities will be promptly addressed.

Please include as many details as possible. You can use `php flarum info` to get the PHP, Flarum and extension versions installed.

## Links

- [Flarum Discuss post](https://discuss.flarum.org/d/11800-flagrow-mail-drivers-send-email-via-mailgun-mandrill-or-ses-api)
- [Source code on GitHub](https://github.com/flagrow/mail-drivers)
- [Report an issue](https://github.com/flagrow/mail-drivers/issues)
- [Download via Packagist](https://packagist.org/packages/flagrow/mail-drivers)

An extension by [Flagrow](https://flagrow.io/), a project of [Gravure](https://gravure.io/).
