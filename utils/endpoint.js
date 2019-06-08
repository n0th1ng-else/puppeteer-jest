const fs = require('fs');
const rimraf = require('rimraf');
const mkdirp = require('mkdirp');
const path = require('path');

const endpointFolderCache = '/tmp/jest_puppeteer_global_setup/';
const endpointFileCache = 'wsEndpoint';

function saveBrowserEndpoint(endpoint) {
	const cacheFile = path.join(endpointFolderCache, endpointFileCache);

	mkdirp.sync(endpointFolderCache);
	fs.writeFileSync(cacheFile, endpoint);
}

function readBrowserEndpoint() {
	const cacheFile = path.join(endpointFolderCache, endpointFileCache);
	const endpoint = fs.readFileSync(cacheFile, 'utf8');

	if (!endpoint) {
		throw new Error('Browser endpoint not found');
	}

	return endpoint;
}

function clearEndpointCache() {
	rimraf.sync(endpointFolderCache);
}

module.exports = {
	clearEndpointCache,
	readBrowserEndpoint,
	saveBrowserEndpoint
};
