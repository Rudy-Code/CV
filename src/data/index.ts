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
		date: 'marzec 2024 - grudzień 2025 | powrót grudzień 2026',
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
