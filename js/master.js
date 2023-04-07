let Translations = {
	en: {
		name: 'Anas Eihab Awwad',
		about: 'About Me',
		skills: 'Skills',
		expericence: 'Expericence',
		gallery: 'My Gallery',
		freelancer: 'Freelancer Sites',
		contact: 'Contact Me'
	},

	ar: {
		name: 'أنس إيهاب رشدي عواد',
		about: 'نبذة عنى',
		skills: 'مهاراتي',
		expericence: 'الخبرة',
		gallery: 'معرض الأعمال',
		freelancer: 'موقع العمل الحر',
		contact: 'إتصل بي'
	}
};

let LanguagesSelector = document.querySelector('select');
let icons = document.querySelector('.translation i');
LanguagesSelector.addEventListener('change', (event) => {
	setLanguages(event.target.value);
	localStorage.setItem('lang', event.target.value);
});

// LanguagesSelector.addEventListener('click', (event) => {
// 	setLanguages(event.target.value);
// 	localStorage.setItem('lang', event.target.value);
// });

document.addEventListener('DOMContentLoaded', () => {
	setLanguages(localStorage.getItem('lang'));
});
let setLanguages = (language) => {
	let elements = document.querySelectorAll('[data-trans]');
	elements.forEach((element) => {
		let translationKey = element.getAttribute('data-trans');
		element.textContent = Translations[language][translationKey];
	});
	document.dir = language === 'ar' ? 'rtl' : 'ltr';
};
