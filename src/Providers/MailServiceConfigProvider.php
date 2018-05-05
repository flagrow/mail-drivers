<?php

namespace Flagrow\MailDrivers\Providers;

use Flarum\Foundation\AbstractServiceProvider;
use Flarum\Settings\SettingsRepositoryInterface;
use Illuminate\Config\Repository;

class MailServiceConfigProvider extends AbstractServiceProvider
{
    public function register()
    {
        /**
         * @var $settings SettingsRepositoryInterface
         */
        $settings = $this->app->make(SettingsRepositoryInterface::class);

        /**
         * @var $config Repository
         */
        $config = $this->app->make('config');

        $config->set('services.mailgun.secret', $settings->get('flagrow-mail-drivers.mailgunSecret'));
        $config->set('services.mailgun.domain', $settings->get('flagrow-mail-drivers.mailgunDomain'));

        $config->set('services.mandrill.secret', $settings->get('flagrow-mail-drivers.mandrillSecret'));

        $config->set('services.ses.key', $settings->get('flagrow-mail-drivers.sesKey'));
        $config->set('services.ses.secret', $settings->get('flagrow-mail-drivers.sesSecret'));
        $config->set('services.ses.region', $settings->get('flagrow-mail-drivers.sesRegion', 'us-east-1'));
    }
}
