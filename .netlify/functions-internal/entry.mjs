import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { i as server_default, j as deserializeManifest } from './chunks/astro.ad65d64d.mjs';
import { _ as _page0 } from './chunks/pages/all.19fea8a7.mjs';
/* empty css                                 */import 'os';
import 'fs';
import 'url';
import 'path';

const pageMap = new Map([["src/pages/index.astro", _page0],]);
const renderers = [Object.assign({"name":"astro:jsx","serverEntrypoint":"astro/jsx/server.js","jsxImportSource":"astro"}, { ssr: server_default }),];

const _manifest = Object.assign(deserializeManifest({"adapterName":"@astrojs/netlify/functions","routes":[{"file":"","links":["/_astro/index.8c6dc5e0.css"],"scripts":[],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"_meta":{"trailingSlash":"ignore"}}}],"site":"http://thuanowa.com","base":"/","markdown":{"drafts":false,"syntaxHighlight":"shiki","shikiConfig":{"langs":[],"theme":"github-dark","wrap":false},"remarkPlugins":[],"rehypePlugins":[],"remarkRehype":{},"gfm":true,"smartypants":true},"pageMap":null,"componentMetadata":[["/home/master/repos/thuanowa/link_in_bio_astro/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"_@astrojs-ssr-virtual-entry.mjs","astro:scripts/before-hydration.js":""},"assets":["/_astro/fira-code-cyrillic-400-normal.dac6dde5.woff2","/_astro/fira-code-cyrillic-ext-400-normal.aeaf7f0a.woff2","/_astro/fira-code-greek-ext-400-normal.9abd2774.woff2","/_astro/fira-code-greek-400-normal.ab9177a1.woff2","/_astro/fira-code-latin-ext-400-normal.5e162e63.woff2","/_astro/fira-code-latin-400-normal.2b407eb4.woff2","/_astro/fira-code-all-400-normal.80245a18.woff","/_astro/index.8c6dc5e0.css","/favicon.svg"]}), {
	pageMap: pageMap,
	renderers: renderers
});
const _args = {};
const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap, renderers };
