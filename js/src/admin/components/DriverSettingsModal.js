import app from 'flarum/app';
import SettingsModal from 'flarum/components/SettingsModal';
import Button from 'flarum/components/Button';

const settingsPrefix = 'flagrow-mail-drivers.';
const translationPrefix = 'flagrow-mail-drivers.admin.settings.';

const DRIVERS = [
    {
        driver: 'mailgun',
        fields: [
            'mailgunSecret',
            'mailgunDomain',
        ],
    },
    {
        driver: 'mandrill',
        fields: [
            'mandrillSecret',
        ],
    },
    {
        driver: 'ses',
        fields: [
            'sesKey',
            'sesSecret',
            'sesRegion',
        ],
    },
];

export default class DriverSettingsModal extends SettingsModal {
    title() {
        return app.translator.trans(translationPrefix + 'title');
    }

    form() {
        return [
            m('p', app.translator.trans(translationPrefix + 'introduction')),
            m('.Form-group', [
                m('label', app.translator.trans(translationPrefix + 'field.sender')),
                m('input.FormControl', {
                    type: 'text',
                    bidi: this.setting('mail_from'),
                }),
                m('.helpText', app.translator.trans(translationPrefix + 'field.sender-help')),
            ]),
            DRIVERS.map(driver => [
                m('h2', app.translator.trans(translationPrefix + 'driver.' + driver.driver)),
                driver.fields.map(field => m('.Form-group', [
                    m('label', app.translator.trans(translationPrefix + 'field.' + field)),
                    m('input.FormControl', {
                        type: 'text',
                        bidi: this.setting(settingsPrefix + field),
                        placeholder: app.translator.trans(translationPrefix + 'placeholder.' + field),
                    }),
                ])),
                m('.Form-group', this.setting('mail_driver')() === driver.driver ? Button.component({
                    className: 'Button Button--primary',
                    disabled: true,
                    children: app.translator.trans(translationPrefix + 'state.enabled', {
                        driver: driver.driver,
                    }),
                }) : Button.component({
                    className: 'Button Button--primary',
                    children: app.translator.trans(translationPrefix + 'state.enable', {
                        driver: driver.driver,
                    }),
                    onclick: () => {
                        this.setting('mail_driver')(driver.driver);
                    },
                })),
            ]),
        ];
    }
}
