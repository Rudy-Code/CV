// ==== INTERFACE ====

export interface contactInfo {
	name: string
	title: string
	email: string
	phone: string
	city: string
	portfolio: string
}

export interface experienceItem {
	role: string
	company: string
	date: string
	bullets: string[]
}

export interface ProjectItem {
	name: string
	stack: string[]
	links: {
		label: string
		url: string
	}[]
	bullets: string[]
}

export interface TechGroup {
	label: string
	tags: string[]
	variant?: 'default' | 'learning'
}

// ==== DATA  ====

export const contactInfo: contactInfo = {
	name: 'Marek Gondek',
	title: 'Frontend Developer',
	email: 'marek@rudycode.pl',
	phone: '+48665260251',
	city: 'Bochnia',
	portfolio: 'rudycode.pl',
}

export const experience: experienceItem[] = [
	{
		role: 'Frontend Developer | Właściciel',
		company: 'RudyCode.pl - działalność gospodarcza',
		date: 'marzec 2024 - obecnie',
		bullets: [
			'Tworzę strony internetowe dla klientów z branży usługowej - od projektu w Figmie po wdrożenie',
			'Każda dostarczona strona osiąga wynik 100/100 w Google PageSpeed',
			'Przekładam potrzeby klientów na konkretne rozwiązania techniczne - komunikacja bezpośrednia, bez pośredników',
			'Rozwijam własną stronę firmową (Astro, TypeScript, Tailwind CSS) i tworzę content na media społecznościowe (Figma, Photoshop)',
		],
	},
	{
		role: 'Frontend Developer',
		company: 'MLE - Młodzieżowa Liga Esportowa',
		date: 'marzec 2024 - grudzień 2025',
		bullets: [
			'Pełna przebudowa frontendu: migracja do TypeScript i Tailwind CSS, responsywność, optymalizacja wydajności',
			'Implementacja nowych funkcjonalności z użyciem Reacta; integracja frontendu z backendem',
			'Praca w zespole, regularne code review od starszego programisty i wdrażanie uwag',
		],
	},
	{
		role: 'Frontend Developer (praktyki)',
		company: 'RAX',
		date: '2023, 1 miesiąc',
		bullets: [
			'Dynamiczne wykresy w Chart.js z responsywnością, efektami powiększania i przewijania danych',
			'Optymalizacja wydajności: czyszczenie klatek animacji, podział danych, wskaźnik ładowania',
			'Samodzielne znajdowanie rozwiązań nieudokumentowanych w sieci - praca bezpośrednio z dokumentacją',
		],
	},
]

export const projects: ProjectItem[] = [
	{
		name: 'ShinyVisions.pl + Ofoliowany.pl',
		stack: ['Astro', 'TypeScript', 'Tailwind CSS', 'Vite'],
		links: [
			{ label: 'ofoliowany.pl', url: 'https://ofoliowany.pl' },
			{ label: 'shinyvisions.pl', url: 'https://shinyvisions.pl' },
		],
		bullets: [
			'Panel administracyjny z auto-optymalizacją zdjęć - klient samodzielnie dodaje realizacje',
			'Interaktywny suwak przed/po prezentujący efekty pracy; animowane marquee z realizacjami',
			'Formularz kontaktowy w dwóch trybach (ogólny / szczegółowe zapytanie projektowe)',
		],
	},
	{
		name: 'RudyCode.pl - strona firmowa',
		stack: ['Astro', 'TypeScript', 'Tailwind CSS', 'Vite', 'Umami'],
		links: [{ label: 'rudycode.pl', url: 'https://rudycode.pl' }],
		bullets: [
			'Portfolio z blogiem, podstroną oferry, realizacji, darmowymi narzędziami i sekcją kontaktową',
			'Analityka bez cookies (Umami); 100/100 PageSpeed',
		],
	},
	{
		name: 'Pozostałe realizacje',
		stack: ['SB Detailing', 'Arte Meubles', 'MOSiR Bochnia', 'MLE'],
		links: [{ label: 'rudycode.pl/realizacje', url: 'https://rudycode.pl/realizacje/' }],
		bullets: ['Strony dla klientów z branż detailingu, meblarstwa, sportu i esportu'],
	},
]

export const technologies: TechGroup[] = [
	{
		label: 'Frontend',
		tags: ['HTML5', 'CSS3', 'SCSS', 'JavaScript ES6+', 'TypeScript', 'Tailwind CSS', 'Bootstrap', 'Astro', 'React'],
		variant: 'default',
	},
	{
		label: 'Narzędzia',
		tags: ['Git', 'Vite', 'npm', 'Figma', 'Jira', 'Photoshop'],
		variant: 'default',
	},
	// {
	// 	label: 'Do odświeżenia',
	// 	tags: [''],
	// 	variant: 'learning',
	// },
]

export const interests: string[] = [
	'Piłka ręczna - bramkarz i sędzia ligowy',
	'Bieganie - przygotowania do trasy 48 km',
	'STAR WARS',
]
