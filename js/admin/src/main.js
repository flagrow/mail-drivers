import app from 'flarum/app';
import DriverSettingsModal from 'flagrow/mail-drivers/components/DriverSettingsModal';

app.initializers.add('flagrow-mail-drivers', app => {
    app.extensionSettings['flagrow-mail-drivers'] = () => app.modal.show(new DriverSettingsModal());
});
