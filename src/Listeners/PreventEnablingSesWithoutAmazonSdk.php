<?php

namespace Flagrow\MailDrivers\Listeners;

use Aws\Ses\SesClient;
use Flarum\Foundation\ValidationException;
use Flarum\Locale\LocaleManager;
use Flarum\Settings\Event\Serializing;
use Illuminate\Contracts\Events\Dispatcher;

class PreventEnablingSesWithoutAmazonSdk
{
    public function subscribe(Dispatcher $events)
    {
        $events->listen(Serializing::class, [$this, 'beforeSaving']);
    }

    public function beforeSaving(Serializing $event)
    {
        if ($event->key === 'mail_driver' && $event->value === 'ses' && !class_exists(SesClient::class)) {
            /**
             * @var $locale LocaleManager
             */
            $locale = app(LocaleManager::class);

            throw new ValidationException([
                'mail_driver' => $locale->getTranslator()->trans('flagrow-mail-drivers.admin.error.missingAmazonSdk'),
            ]);
        }
    }
}
