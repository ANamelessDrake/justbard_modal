'use strict';

const jbModalDisplay = 'jb__modal__display';
let jbModal;
let jbModalParams = {};
jbModalParams['modalSize'] = false;
jbModalParams['jb_modal_header_image'] = false;
jbModalParams['jb_modal_header_image_clip'] = false;
jbModalParams['jb_modal_header_1'] = false;
jbModalParams['jb_modal_header_2'] = false;

const buildJBModal = function (params = false) {
	let jbModalHeader = false;
	let jbModalHeaderContents = false;
	let jbModalHeaderTitle = false;
	const jbModalControlHTML =
		'<div class="jb__modal__content__controls"><span class="material-icons-sharp" id="jbModalClose"> close </span></div>';
	const jbModalEmptyContentHTML = '<div class="jb__modal__content"></div>';
	const jbModalNormal = 'jb__modal';
	const jbModalMed = 'jb__modal__medium';
	const jbModalSmall = 'jb__modal__small';
	let currentJBModal = document.getElementById('jb_modal');

	if (currentJBModal) {
		document.body.removeChild(currentJBModal);
	}

	///////////////////////////////////////////////
	// Build Header Content
	///////////////////////////////////////////////
	if (jbModalParams.jb_modal_header_image) {
		let jbModalHeaderImageClass;
		if (
			jbModalParams.jb_modal_header_image_clip === '--clip' ||
			jbModalParams.jb_modal_header_image_clip === '--clip-bottom' ||
			jbModalParams.jb_modal_header_image_clip === '--clip-bottom-mirror'
		) {
			jbModalHeaderImageClass = `jb__modal__content__header__background jb__modal__content__header__background${jbModalParams.jb_modal_header_image_clip}`;
		} else {
			jbModalHeaderImageClass = `jb__modal__content__header__background`;
		}

		jbModalHeaderContents = `<img src="${jbModalParams.jb_modal_header_image}" class="${jbModalHeaderImageClass}" />`;
	}
	if (jbModalParams.jb_modal_header_1) {
		const jbModalHeader1 = `<h1>${jbModalParams.jb_modal_header_1}</h1>`;
		jbModalHeaderTitle = `<div class="jb__modal__content__header__title">${jbModalHeader1}`;
	}

	if (jbModalParams.jb_modal_header_2) {
		const jbModalHeader2 = `<h1>${jbModalParams.jb_modal_header_1}</h1>`;
		if (jbModalHeaderTitle) {
			jbModalHeaderTitle = `${jbModalHeaderTitle}${jbModalHeader2}</div>`;
		} else {
			jbModalHeaderTitle = `<div class="jb__modal__content__header__title">${jbModalHeader2}</div>`;
		}
	} else {
		if (jbModalHeaderTitle) {
			jbModalHeaderTitle = jbModalHeaderTitle + '</div>';
		}
	}

	if (jbModalHeaderContents) {
		jbModalHeaderContents = jbModalHeaderContents + jbModalHeaderTitle;
	} else {
		jbModalHeaderContents = jbModalHeaderTitle;
	}

	///////////////////////////////////////////////
	// Set Header Content
	///////////////////////////////////////////////
	if (jbModalHeaderContents) {
		jbModalHeader = `<div class="jb__modal__content__header">${jbModalHeaderContents}</div>`;
	}

	///////////////////////////////////////////////
	// Build Modal
	///////////////////////////////////////////////

	jbModal = document.createElement('div');
	jbModal.id = 'jb_modal';

	if (jbModalParams.modalSize === 'medium') {
		jbModal.className = jbModalMed;
	} else if (jbModalParams.modalSize === 'small') {
		jbModal.className = jbModalSmall;
	} else {
		jbModal.className = jbModalNormal;
	}

	document.body.appendChild(jbModal);

	currentJBModal = document.getElementById('jb_modal');
	currentJBModal.insertAdjacentHTML('beforeend', jbModalEmptyContentHTML);

	const jbModalContentDiv = currentJBModal.querySelector('.jb__modal__content');

	jbModalContentDiv.insertAdjacentHTML('beforeend', jbModalControlHTML);

	if (jbModalHeaderContents) {
		jbModalContentDiv.insertAdjacentHTML('beforeend', jbModalHeader);
	}

	///////////////////////////////////////////////
	// Add Close Listener
	///////////////////////////////////////////////
	const jbModalClose = document.getElementById('jbModalClose');
	jbModalClose.addEventListener('click', function () {
		closeJBModal();
	});

	console.log(currentJBModal);
};

const openJBModal = function () {
	const jbModal = document.getElementById('jb_modal');

	if (jbModal) {
		jbModal.classList.add(jbModalDisplay);
	}
};

const closeJBModal = function () {
	const jbModal = document.getElementById('jb_modal');

	if (jbModal) {
		jbModal.classList.remove(jbModalDisplay);
	}
};

const destroyJBModal = function () {
	let currentJBModal = document.getElementById('jb_modal');

	if (currentJBModal) {
		document.body.removeChild(currentJBModal);
	}
};
