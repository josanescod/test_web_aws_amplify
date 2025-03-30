import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_l502ZGdZ.mjs';
import { manifest } from './manifest_CZw9t8T9.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["src/pages/index.astro", _page0]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "client": "file:///home/josan/projects/astro-static-site/simple-static-site/.amplify-hosting/static/",
    "server": "file:///home/josan/projects/astro-static-site/simple-static-site/.amplify-hosting/compute/default/",
    "host": false,
    "port": 3000,
    "assets": "_astro"
};

const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { pageMap };
