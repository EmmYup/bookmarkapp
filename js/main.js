//listen for form submit
document.getElementById('myForm').addEventListener('submit', saveBookmark);

//Save Bookmark
function saveBookmark(e) {
	//Get form values
	var siteName = document.getElementById('siteName').value;
	var siteUrl = document.getElementById('siteUrl').value;

	var bookmark ={
		name: siteName,
		url: siteUrl
	}

	/*
		//Local storage test
		localStorage.setItem('test', 'Hello world');
		console.log(localStorage.getItem('test'));
		localStorage.removeItem('test');
		console.log(localStorage.getItem('test'));
	*/

	//Test if bookmarks
	if (localStorage.getItems('bookmarks') === null) {
		//Init array
		var bookmarks = [];
		//Add to array
		bookmarks.push(bookmark);

		//set to local storage
		localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
	} else {
		//get bookmarks from localstorage
		var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
		//Add booksmark to array
		bookmarks.push(booksmark);
		//Re-set back to localstorage
		localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
	}

	//Prevent form from submitting
	e.preventDefault();
}

//Fetch bookmarks
function fetchBookmarks () {
	// body... 
}