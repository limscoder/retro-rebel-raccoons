var videos = [
{
	url: 'https://www.youtube.com/embed/PKDodoDF9Qg',
	title: 'Granny Old Wound'
},{
	url: 'https://www.youtube.com/embed/SpPkih-GXF8',
	title: "Invisable children's Music"
},{
	url: 'https://www.youtube.com/embed/jPMy01lS5as',
	title: 'Amos Lee - Windows'
}
];

var selectedVideo = 0;
function nextVideo() {
	console.log('next video clicked');
	selectedVideo = selectedVideo + 1;
	if (selectedVideo > videos.length - 1) {
		selectedVideo = 0;
	}

	var videoEl = window.document.querySelector('.youtube-video');
	videoEl.setAttribute('src', videos[selectedVideo].url);
}