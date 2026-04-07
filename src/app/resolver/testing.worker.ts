/// <reference lib="webworker" />
import {Prime} from 'src/app/app.prime'
addEventListener('message', ({ data }) => {
  const response = Prime.findNthPrimeNumer(parseInt(data))
  postMessage(response);
});
