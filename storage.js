console.log("script storage.js");

//save data in localStorage
function save(data, id = "data") {
	if (data || data.length) {
		console.log(`Saving ${id} to localStorage!`);
		localStorage.setItem(id, JSON.stringify(data));
	} else {
		console.error("There is no data!");
	}
}

//get data from localStorage
function get(id = "data") {
	const data = localStorage.getItem(id);
	if (data && data.length) {
		console.log(`Getting ${id} from localStorage!`);
		return JSON.parse(data);
	} else {
		return false;
		console.error("Fail getting data from localStorage!");
	}
}

const Storage = {
	save: save,
	get: get,
};

export default Storage;
