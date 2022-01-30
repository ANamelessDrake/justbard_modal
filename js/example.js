'use strict';

const buildModalButton = document.getElementById('jb_modal_build');
buildModalButton.addEventListener('click', function () {
	buildJBModal();
});

const buildMedModalButton = document.getElementById('jb_modal_build_medium');
buildMedModalButton.addEventListener('click', function () {
	jbModalParams.modalSize = 'medium';
	buildJBModal();
});

const buildSmallModalButton = document.getElementById('jb_modal_build_small');
buildSmallModalButton.addEventListener('click', function () {
	jbModalParams.modalSize = 'small';
	buildJBModal();
});

const openModalButton = document.getElementById('jb_modal_open');
openModalButton.addEventListener('click', function () {
	openJBModal();
});

///////////////////////////////////////////////
// Set JB Modal Params
///////////////////////////////////////////////

jbModalParams.jb_modal_header_image =
	'https://images.unsplash.com/photo-1512987415479-85f370bca602?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80';

jbModalParams.jb_modal_header_image_clip = '--clip';
