import ShadowComponent from './ShadowComponent';

class ModalComponent extends ShadowComponent {

	constructor () {
		super();

		this.state = {
			open: false
		};
	}

	onStateUpdate (property, oldValue, newValue) {
		if (property === 'open') {
			this.classList.toggle ('modal--active');
		}
		return Promise.resolve ();
	}

	render () {
		return `
			<div class="modal">
				<div class="modal--content">
					<slot></slot>
				</div>
			</div>
		`;
	}
}

export { ModalComponent };