'use strict';

const buildModalButton = document.getElementById('jb_modal_build');
buildModalButton.addEventListener('click', function () {
	jbModalParams.modalSize = false;
	jbModalParams.jb_modal_header_1 = 'Normal Sized Modal';
	jbModalParams.jb_modal_header_2 =
		"A simple modal just trying to make it's way in the world";
	jbModalParams.jb_modal_header_image_clip = '--clip-bottom-mirror';
	buildJBModal("This modal has a mirrored clip applied to it's header image");
});

const buildBottomClipModalButton = document.getElementById('jb_modal_build2');
buildBottomClipModalButton.addEventListener('click', function () {
	jbModalParams.modalSize = false;
	jbModalParams.jb_modal_header_1 = 'Normal Sized Modal';
	jbModalParams.jb_modal_header_2 =
		"A simple modal just trying to make it's way in the world";
	jbModalParams.jb_modal_header_image_clip = '--clip-bottom';
	buildJBModal("This modal has a bottom clip applied to it's header image");
});

const buildMedModalButton = document.getElementById('jb_modal_build_medium');
buildMedModalButton.addEventListener('click', function () {
	jbModalParams.modalSize = 'medium';
	jbModalParams.jb_modal_header_1 = 'Medium Sized Modal';
	jbModalParams.jb_modal_header_2 =
		"A simple modal just trying to make it's way in the world";
	jbModalParams.jb_modal_header_image_clip = '--clip';
	buildJBModal(
		"This modal has a top and bottom clip applied to it's header image!<br /><br />Lorem ipsum dolor, <strong>sit amet consectetur</strong> adipisicing elit. At suscipit illo error, expedita perspiciatis nam laudantium dolore quaerat atque unde aspernatur? Mollitia non molestias eos vero veritatis ipsum provident sint!",
		'Just a simple footer!'
	);
});

const buildSmallModalButton = document.getElementById('jb_modal_build_small');
buildSmallModalButton.addEventListener('click', function () {
	jbModalParams.modalSize = 'small';
	jbModalParams.jb_modal_header_1 = 'Small Sized Modal';
	jbModalParams.jb_modal_header_2 =
		"A simple modal just trying to make it's way in the world";
	jbModalParams.jb_modal_header_image_clip = false;
	buildJBModal("This modal has no clip applied to it's header image");
});

const openModalButton = document.getElementById('jb_modal_open');
openModalButton.addEventListener('click', function () {
	openJBModal();
});

const destroyModalButton = document.getElementById('jb_modal_destroy');
destroyModalButton.addEventListener('click', function () {
	destroyJBModal();
});

const updateModalHeaderButton = document.getElementById(
	'jb_modal_update_header'
);

updateModalHeaderButton.addEventListener('click', function () {
	updateJBModaHeader(
		'https://images.unsplash.com/photo-1643575102128-0d6b42fbdda1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80',
		'--clip',
		'Some New Header',
		'Wow this is some info!'
	);
});

const updateModalButton = document.getElementById('jb_modal_update');
updateModalButton.addEventListener('click', function () {
	updateJBModalContent(
		"Some New Information! <br /><br /><strong>Can't miss out on knowing this new stuff!</strong>"
	);
});

const updateFooterModalButton = document.getElementById(
	'jb_modal_update_footer'
);
updateFooterModalButton.addEventListener('click', function () {
	updateJBModalFooterContent(
		"Some New Footer Information! <strong>Can't miss out on knowing this new stuff!</strong>"
	);
});

///////////////////////////////////////////////
// Set JB Modal Params
///////////////////////////////////////////////

jbModalParams.jb_modal_header_image =
	'https://images.unsplash.com/photo-1512987415479-85f370bca602?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80';
