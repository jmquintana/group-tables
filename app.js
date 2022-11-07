const countries = {
	AR: {
		id: "AR",
		name: "Argentina",
		flagClass: "flag-argentina",
	},
	EN: {
		id: "EN",
		name: "Inglaterra",
		flagClass: "flag-england",
	},
	FR: {
		id: "FR",
		name: "Francia",
		flagClass: "flag-france",
	},
	BR: {
		id: "BR",
		name: "Brasil",
		flagClass: "flag-brazil",
	},
	DE: {
		id: "DE",
		name: "Alemania",
		flagClass: "flag-germany",
	},
	QA: {
		id: "QA",
		name: "Qatar",
		flagClass: "flag-qatar",
	},
	WA: {
		id: "WA",
		name: "Gales",
		flagClass: "flag-wales",
	},
	EC: {
		id: "EC",
		name: "Ecuador",
		flagClass: "flag-ecuador",
	},
	SN: {
		id: "SN",
		name: "Senegal",
		flagClass: "flag-senegal",
	},
	NL: {
		id: "NL",
		name: "Paises Bajos",
		flagClass: "flag-netherlands",
	},
	IR: {
		id: "IR",
		name: "Iran",
		flagClass: "flag-iran",
	},
	US: {
		id: "US",
		name: "USA",
		flagClass: "flag-us",
	},
	SA: {
		id: "SA",
		name: "Arabia Saudita",
		flagClass: "flag-saudi-arabia",
	},
	MX: {
		id: "MX",
		name: "Mexico",
		flagClass: "flag-mexico",
	},
	AU: {
		id: "AU",
		name: "Australia",
		flagClass: "flag-australia",
	},
	PL: {
		id: "PL",
		name: "Polonia",
		flagClass: "flag-poland",
	},
	DK: {
		id: "DK",
		name: "Dinamarca",
		flagClass: "flag-denmark",
	},
	TN: {
		id: "TN",
		name: "Tunez",
		flagClass: "flag-tunisia",
	},
	ES: {
		id: "ES",
		name: "España",
		flagClass: "flag-spain",
	},
	CR: {
		id: "CR",
		name: "Costa Rica",
		flagClass: "flag-costa-rica",
	},
	JP: {
		id: "JP",
		name: "Japon",
		flagClass: "flag-japan",
	},
	BE: {
		id: "BE",
		name: "Belgica",
		flagClass: "flag-belgium",
	},
	CA: {
		id: "CA",
		name: "Canada",
		flagClass: "flag-canada",
	},
	MA: {
		id: "MA",
		name: "Marruecos",
		flagClass: "flag-morocco",
	},
	HR: {
		id: "HR",
		name: "Croacia",
		flagClass: "flag-croatia",
	},
	RS: {
		id: "RS",
		name: "Serbia",
		flagClass: "flag-serbia",
	},
	CH: {
		id: "CH",
		name: "Suiza",
		flagClass: "flag-switzerland",
	},
	CM: {
		id: "CM",
		name: "Camerun",
		flagClass: "flag-cameroon",
	},
	PT: {
		id: "PT",
		name: "Portugal",
		flagClass: "flag-portugal",
	},
	GH: {
		id: "GH",
		name: "Ghana",
		flagClass: "flag-ghana",
	},
	UY: {
		id: "UY",
		name: "Uruguay",
		flagClass: "flag-uruguay",
	},
	KR: {
		id: "KR",
		name: "Corea del Sur",
		flagClass: "flag-south-korea",
	},
};

const teams = [
	{
		id: "QA",
		name: "Qatar",
		flagClass: "flag-qatar",
	},
	{
		id: "EC",
		name: "Ecuador",
		flagClass: "flag-ecuador",
	},
	{
		id: "SN",
		name: "Senegal",
		flagClass: "flag-senegal",
	},
	{
		id: "NL",
		name: "Paises Bajos",
		flagClass: "flag-netherlands",
	},

	{
		id: "EN",
		name: "Inglaterra",
		flagClass: "flag-england",
	},
	{
		id: "IR",
		name: "Iran",
		flagClass: "flag-iran",
	},
	{
		id: "US",
		name: "USA",
		flagClass: "flag-us",
	},
	{
		id: "WA",
		name: "Gales",
		flagClass: "flag-wales",
	},
	{
		id: "AR",
		name: "Argentina",
		flagClass: "flag-argentina",
	},
	{
		id: "SA",
		name: "Arabia Saudita",
		flagClass: "flag-saudi-arabia",
	},
	{
		id: "MX",
		name: "Mexico",
		flagClass: "flag-mexico",
	},
	{
		id: "PL",
		name: "Polonia",
		flagClass: "flag-poland",
	},
	{
		id: "FR",
		name: "Francia",
		flagClass: "flag-france",
	},
	{
		id: "AU",
		name: "Australia",
		flagClass: "flag-australia",
	},
	{
		id: "DK",
		name: "Dinamarca",
		flagClass: "flag-denmark",
	},
	{
		id: "TN",
		name: "Tunez",
		flagClass: "flag-tunisia",
	},
	{
		id: "ES",
		name: "España",
		flagClass: "flag-spain",
	},
	{
		id: "CR",
		name: "Costa Rica",
		flagClass: "flag-costa-rica",
	},
	{
		id: "DE",
		name: "Alemania",
		flagClass: "flag-germany",
	},
	{
		id: "JP",
		name: "Japon",
		flagClass: "flag-japan",
	},
	{
		id: "BE",
		name: "Belgica",
		flagClass: "flag-belgium",
	},
	{
		id: "CA",
		name: "Canada",
		flagClass: "flag-canada",
	},
	{
		id: "MA",
		name: "Marruecos",
		flagClass: "flag-morocco",
	},
	{
		id: "HR",
		name: "Croacia",
		flagClass: "flag-croatia",
	},
	{
		id: "BR",
		name: "Brasil",
		flagClass: "flag-brazil",
	},
	{
		id: "RS",
		name: "Serbia",
		flagClass: "flag-serbia",
	},
	{
		id: "CH",
		name: "Suiza",
		flagClass: "flag-switzerland",
	},
	{
		id: "CM",
		name: "Camerun",
		flagClass: "flag-cameroon",
	},
	{
		id: "PT",
		name: "Portugal",
		flagClass: "flag-portugal",
	},
	{
		id: "GH",
		name: "Ghana",
		flagClass: "flag-ghana",
	},
	{
		id: "UY",
		name: "Uruguay",
		flagClass: "flag-uruguay",
	},
	{
		id: "KR",
		name: "Corea del Sur",
		flagClass: "flag-south-korea",
	},
];
const groupArr = [
	{
		id: "QA",
		name: "Qatar",
		flagClass: "flag-qatar",
	},
	{
		id: "EC",
		name: "Ecuador",
		flagClass: "flag-ecuador",
	},
	{
		id: "SN",
		name: "Senegal",
		flagClass: "flag-senegal",
	},
	{
		id: "NL",
		name: "Paises Bajos",
		flagClass: "flag-netherlands",
	},
];
const groupTemplate = document.querySelector("#group-template").content;
const teamTemplate = document.querySelector("#team-template").content;
const groupTables = document.querySelectorAll(".group-table");
const fragment = document.createDocumentFragment();
const grupoA = document.querySelector(".grupoA tbody");

const groupDataA = ["QA", "EC", "SN", "NL"];
const groupDataB = ["EN", "IR", "US", "WA"];
const groupDataC = ["AR", "SA", "MX", "PL"];
const groupDataD = ["FR", "AU", "DK", "TN"];
const groupDataE = ["ES", "CR", "DE", "JP"];
const groupDataF = ["BE", "CA", "MA", "HR"];
const groupDataG = ["BR", "RS", "CH", "CM"];
const groupDataH = ["PT", "GH", "UY", "KR"];

const groups = {
	A: groupDataA,
	B: groupDataB,
	C: groupDataC,
	D: groupDataD,
	E: groupDataE,
	F: groupDataF,
	G: groupDataG,
	H: groupDataH,
};

const groupsArr = [
	groupDataA,
	groupDataB,
	groupDataC,
	groupDataD,
	groupDataE,
	groupDataF,
	groupDataG,
	groupDataH,
];

document.addEventListener("DOMContentLoaded", () => printData());

const printData = () => {
	for (const [i, group] of groupsArr.entries()) {
		groupTemplate.querySelector(".group-name").textContent = `Grupo ${i + 1}`;
		const clone = groupTemplate.cloneNode(true);
		fragment.appendChild(clone);
		groupTables[i].appendChild(fragment);
		printRow(groupTables[i], i);
	}
};

const printRow = (group, j) => {
	groupsArr[j].forEach((teamID, i) => {
		const { flagClass, name } = countries[teamID];
		teamTemplate.querySelector(".pos").textContent = i + 1;
		teamTemplate.querySelector(".team").innerText = name;
		const iElement = document.createElement("i");
		iElement.classList.add("flag", `${flagClass}`);
		teamTemplate.querySelector(".team").prepend(iElement);

		const clone = teamTemplate.cloneNode(true);
		fragment.appendChild(clone);
	});
	group.querySelector("tbody").appendChild(fragment);
};