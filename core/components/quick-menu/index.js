import { MenuComponent } from './../../lib/MenuComponent';
import { Monogatari } from './../../monogatari';

class QuickMenu extends MenuComponent {

	static init () {
		// Remove the Skip text button if it has been disabled on the game settings
		if (!(this.engine.setting ('Skip') > 0)) {
			this.removeButton ('Skip');
		}
	}

	createButton (button) {
		const element = super.createButton (button);
		element.innerHTML = `
			<span class="${button.icon}"></span>
			<span data-string="${button.string}">${Monogatari.string (button.string)}</span>
		`;
		return element;
	}

}

QuickMenu._configuration = {
	buttons: [
		{
			string: 'Back',
			icon: 'fas fa-arrow-left',
			data: {
				action: 'back'
			}
		},
		{
			string: 'Hide',
			icon: 'fas fa-eye',
			data: {
				action: 'distraction-free'
			}
		},
		{
			string: 'AutoPlay',
			icon: 'fas fa-play-circle',
			data: {
				action: 'auto-play'
			}
		},
		{
			string: 'Skip',
			icon: 'fas fa-fast-forward',
			data: {
				action: 'skip'
			}
		},
		{
			string: 'Save',
			icon: 'fas fa-save',
			data: {
				action: 'open-screen',
				open: 'save'
			}
		},
		{
			string: 'Load',
			icon: 'fas fa-undo',
			data: {
				action: 'open-screen',
				open: 'load'
			}
		},
		{
			string: 'Settings',
			icon: 'fas fa-cog',
			data: {
				action: 'open-screen',
				open: 'settings'
			}
		},
		{
			string: 'Quit',
			icon: 'fas fa-times-circle',
			data: {
				action: 'end'
			}
		}
	]
};

QuickMenu.tag = 'quick-menu';

Monogatari.registerComponent (QuickMenu);