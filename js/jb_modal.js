'use strict';

const jbModalDisplay = 'jb__modal__display';
let jbModal;
let jbModalParams = {};
jbModalParams['modalSize'] = false;
jbModalParams['jb_modal_header_image'] = false;
jbModalParams['jb_modal_header_image_clip'] = false;
jbModalParams['jb_modal_header_1'] = false;
jbModalParams['jb_modal_header_2'] = false;
jbModalParams['set_empty_content'] = true;
jbModalParams['set_empty_footer'] = true;

const buildJBModal = function (jbModalContent = false, jbModalFooter = false) {
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
		const jbModalHeader2 = `<h2>${jbModalParams.jb_modal_header_2}</h2>`;
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
	} else {
		jbModalHeader = `<div class="jb__modal__content__header"></div>`;
		jbModalContentDiv.insertAdjacentHTML('beforeend', jbModalHeader);
	}

	if (jbModalContent) {
		jbModalContent = `<div class="jb__modal__content__body">${jbModalContent}</div>`;
		jbModalContentDiv.insertAdjacentHTML('beforeend', jbModalContent);
	} else if (jbModalParams.set_empty_content) {
		jbModalContent = `<div class="jb__modal__content__body"></div>`;
		jbModalContentDiv.insertAdjacentHTML('beforeend', jbModalContent);
	}

	if (jbModalFooter) {
		jbModalFooter = `<div class="jb__modal__content__footer">${jbModalFooter}</div>`;
		jbModalContentDiv.insertAdjacentHTML('beforeend', jbModalFooter);
	} else if (jbModalParams.set_empty_footer) {
		jbModalFooter = `<div class="jb__modal__content__footer"></div>`;
		jbModalContentDiv.insertAdjacentHTML('beforeend', jbModalFooter);
	}

	///////////////////////////////////////////////
	// Add Close Listeners
	///////////////////////////////////////////////
	const jbModalClose = document.getElementById('jbModalClose');
	jbModalClose.addEventListener('click', function () {
		closeJBModal();
	});

	currentJBModal.addEventListener('click', function () {
		if (event.srcElement.id === 'jb_modal') {
			closeJBModal();
		}
	});
};

const updateJBModaHeader = function (
	jbModalHeaderImg = false,
	jbModalHeaderImgClip = false,
	jbModalHeader1 = false,
	jbModalHeader2 = false
) {
	let jbModalHeaderContents;
	let jbModalHeaderTitle;

	if (jbModalHeaderImg || jbModalHeader1 || jbModalHeader2) {
		const jbModalContentHeaderDiv = document.querySelector(
			'.jb__modal__content__header'
		);
		///////////////////////////////////////////////
		// Build Header Content
		///////////////////////////////////////////////
		if (jbModalHeaderImg) {
			let jbModalHeaderImageClass;
			if (
				jbModalHeaderImgClip === '--clip' ||
				jbModalHeaderImgClip === '--clip-bottom' ||
				jbModalHeaderImgClip === '--clip-bottom-mirror'
			) {
				jbModalHeaderImageClass = `jb__modal__content__header__background jb__modal__content__header__background${jbModalHeaderImgClip}`;
			} else {
				jbModalHeaderImageClass = `jb__modal__content__header__background`;
			}

			jbModalHeaderContents = `<img src="${jbModalHeaderImg}" class="${jbModalHeaderImageClass}" />`;
		}
		if (jbModalHeader1) {
			const jbModalHeader1Content = `<h1>${jbModalHeader1}</h1>`;
			jbModalHeaderTitle = `<div class="jb__modal__content__header__title">${jbModalHeader1Content}`;
		}

		if (jbModalHeader2) {
			const jbModalHeader2Content = `<h2>${jbModalHeader2}</h2>`;
			if (jbModalHeaderTitle) {
				jbModalHeaderTitle = `${jbModalHeaderTitle}${jbModalHeader2Content}</div>`;
			} else {
				jbModalHeaderTitle = `<div class="jb__modal__content__header__title">${jbModalHeader2Content}</div>`;
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
		if (jbModalContentHeaderDiv) {
			jbModalContentHeaderDiv.innerHTML = '';
			jbModalContentHeaderDiv.innerHTML = jbModalHeaderContents;
		} else {
			console.error(
				'JB_Modal header not found on update attempt... Did you build one yet?'
			);
		}
	}
};

const updateJBModalContent = function (jbModalContent = false) {
	if (jbModalContent) {
		const jbModalContentBodyDiv = document.querySelector(
			'.jb__modal__content__body'
		);
		if (jbModalContentBodyDiv) {
			jbModalContentBodyDiv.innerHTML = '';
			jbModalContentBodyDiv.innerHTML = jbModalContent;
		} else {
			console.error(
				'JB_Modal content body not found on update attempt... Did you build one yet?'
			);
		}
	}
};

const updateJBModalFooterContent = function (jbModalFooterContent = false) {
	if (jbModalFooterContent) {
		const jbModalFooterContentDiv = document.querySelector(
			'.jb__modal__content__footer'
		);
		if (jbModalFooterContentDiv) {
			jbModalFooterContentDiv.innerHTML = '';
			jbModalFooterContentDiv.innerHTML = jbModalFooterContent;
		} else {
			console.error(
				'JB_Modal footer not found on update attempt... Did you build one yet?'
			);
		}
	}
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
