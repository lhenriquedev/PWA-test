import OneSignal from 'react-onesignal';

export default async function runOneSignal() {
  await OneSignal.init({ appId: '4d93cd2f-efca-41b4-bba9-f7ea5a41db79', allowLocalhostAsSecureOrigin: true });
  OneSignal.showSlidedownPrompt();
}