import * as sapper from '@sapper/app';

sapper.start({
	target: document.querySelector('#sapper')
});

if (window.localStorage && window.localStorage.getItem('dark-mode') === 'true') {
	toggleDarkMode()
}
