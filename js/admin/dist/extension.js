'use strict';

System.register('flagrow/mail-drivers/components/DriverSettingsModal', ['flarum/app', 'flarum/components/SettingsModal', 'flarum/components/Button'], function (_export, _context) {
    "use strict";

    var app, SettingsModal, Button, settingsPrefix, translationPrefix, DRIVERS, DriverSettingsModal;
    return {
        setters: [function (_flarumApp) {
            app = _flarumApp.default;
        }, function (_flarumComponentsSettingsModal) {
            SettingsModal = _flarumComponentsSettingsModal.default;
        }, function (_flarumComponentsButton) {
            Button = _flarumComponentsButton.default;
        }],
        execute: function () {
            settingsPrefix = 'flagrow-mail-drivers.';
            translationPrefix = 'flagrow-mail-drivers.admin.settings.';
            DRIVERS = [{
                driver: 'mailgun',
                fields: ['mailgunSecret', 'mailgunDomain']
            }, {
                driver: 'mandrill',
                fields: ['mandrillSecret']
            }, {
                driver: 'ses',
                fields: ['sesKey', 'sesSecret', 'sesRegion']
            }];

            DriverSettingsModal = function (_SettingsModal) {
                babelHelpers.inherits(DriverSettingsModal, _SettingsModal);

                function DriverSettingsModal() {
                    babelHelpers.classCallCheck(this, DriverSettingsModal);
                    return babelHelpers.possibleConstructorReturn(this, (DriverSettingsModal.__proto__ || Object.getPrototypeOf(DriverSettingsModal)).apply(this, arguments));
                }

                babelHelpers.createClass(DriverSettingsModal, [{
                    key: 'title',
                    value: function title() {
                        return app.translator.trans(translationPrefix + 'title');
                    }
                }, {
                    key: 'form',
                    value: function form() {
                        var _this2 = this;

                        return [m('p', app.translator.trans(translationPrefix + 'introduction')), m('.Form-group', [m('label', app.translator.trans(translationPrefix + 'field.sender')), m('input.FormControl', {
                            type: 'text',
                            bidi: this.setting('mail_from')
                        }), m('.helpText', app.translator.trans(translationPrefix + 'field.sender-help'))]), DRIVERS.map(function (driver) {
                            return [m('h2', app.translator.trans(translationPrefix + 'driver.' + driver.driver)), driver.fields.map(function (field) {
                                return m('.Form-group', [m('label', app.translator.trans(translationPrefix + 'field.' + field)), m('input.FormControl', {
                                    type: 'text',
                                    bidi: _this2.setting(settingsPrefix + field),
                                    placeholder: app.translator.trans(translationPrefix + 'placeholder.' + field)
                                })]);
                            }), m('.Form-group', _this2.setting('mail_driver')() === driver.driver ? Button.component({
                                className: 'Button Button--primary',
                                disabled: true,
                                children: app.translator.trans(translationPrefix + 'state.enabled', {
                                    driver: driver.driver
                                })
                            }) : Button.component({
                                className: 'Button Button--primary',
                                children: app.translator.trans(translationPrefix + 'state.enable', {
                                    driver: driver.driver
                                }),
                                onclick: function onclick() {
                                    _this2.setting('mail_driver')(driver.driver);
                                }
                            }))];
                        })];
                    }
                }]);
                return DriverSettingsModal;
            }(SettingsModal);

            _export('default', DriverSettingsModal);
        }
    };
});;
'use strict';

System.register('flagrow/mail-drivers/main', ['flarum/app', 'flagrow/mail-drivers/components/DriverSettingsModal'], function (_export, _context) {
    "use strict";

    var app, DriverSettingsModal;
    return {
        setters: [function (_flarumApp) {
            app = _flarumApp.default;
        }, function (_flagrowMailDriversComponentsDriverSettingsModal) {
            DriverSettingsModal = _flagrowMailDriversComponentsDriverSettingsModal.default;
        }],
        execute: function () {

            app.initializers.add('flagrow-mail-drivers', function (app) {
                app.extensionSettings['flagrow-mail-drivers'] = function () {
                    return app.modal.show(new DriverSettingsModal());
                };
            });
        }
    };
});