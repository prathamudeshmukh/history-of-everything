import App from './App.svelte';
const timelineData = [
		{
			event_date: "1/05/2016",
			image_url: "https://images.unsplash.com/photo-1554966681-fe80183de048?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
			description: "New York, New York annexes land from surrounding counties, creating the City of Greater New York. The four initial boroughs, Manhattan, Brooklyn, Queens, and The Bronx, are joined on January 25 by Staten Island to create the modern city of five boroughs."
		},
		{
			event_date: "2/05/2016",
			image_url: "",
			description: "John V is proclaimed King of Portugal and the Algarves in Lisbon."
		},
		{
			event_date: "4/05/2016",
			image_url: "https://images.unsplash.com/photo-1554966681-fe80183de048?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
			description: "Bouvet Island, the world's remotest island is discovered by French explorer Jean-Baptiste Charles Bouvet de Lozier."
		},
		{
			event_date: "5/05/2016",
			image_url: "https://images.unsplash.com/photo-1554966681-fe80183de048?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
			description: "The first traveler's cheques, which could be used in 90 European cities, were issued by the London Credit Exchange Company."
		},
		{
			event_date: "10/05/2016",
			image_url: "https://images.unsplash.com/photo-1554966681-fe80183de048?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
			description: "American Revolutionary War: Norfolk, Virginia is burned by combined Royal Navy and Continental Army action."
		}
		
	];
const app = new App({
	target: document.body,
	props: {
		timelineData
	}
});

export default app;