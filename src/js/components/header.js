import { getHeaderHeight } from '../functions/header-height';
import { throttle } from '../functions/throttle';

getHeaderHeight()

let func = throttle(getHeaderHeight);
window.addEventListener('resize', func);