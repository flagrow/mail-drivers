<?php

namespace Flagrow\MailDrivers;

use Flarum\Foundation\Application;
use Illuminate\Contracts\Events\Dispatcher;

return function (Dispatcher $events, Application $app) {
    $events->subscribe(Listeners\Assets::class);
    $events->subscribe(Listeners\PreventEnablingSesWithoutAmazonSdk::class);

    $app->register(Providers\MailServiceConfigProvider::class);
};
