import { initFederation } from '@angular-architects/native-federation';

initFederation({
  "taskapp": "https://angular-mfa-taskapp.vercel.app/remoteEntry.json"
})
  .catch(err => console.error(err))
  .then(_ => import('./bootstrap'))
  .catch(err => console.error(err));
