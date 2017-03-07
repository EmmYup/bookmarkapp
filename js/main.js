//listen for form submit
document.getElementById('myForm').addEventListener('submit', saveBookmark);
function saveBookmark(e) {
	console.log('It Works');

	//Prevent form from submitting
	e.preventDefault();
}