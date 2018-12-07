import app from 'flarum/app';
import DriverSettingsModal from './components/DriverSettingsModal';

app.initializers.add('flagrow-mail-drivers', app => {
    app.extensionSettings['flagrow-mail-drivers'] = () => app.modal.show(new DriverSettingsModal());
});
