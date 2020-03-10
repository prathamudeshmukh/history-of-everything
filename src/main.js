import App from './App.svelte';
import db from './firestore';
import { timeline } from './store.js';

const dateFormat = new Intl.DateTimeFormat('default', {
	month: 'long',day:'2-digit',year:'numeric'
  });

db.collection('events').orderBy('event_date').get().then(querySnapshot => {
	const timelineEvents = []
	querySnapshot.forEach(document => {
		const data = document.data();
		const date = dateFormat.format(data.event_date.toDate())

		timelineEvents.push({
			event_date: date,
			description: data.description,
			tags: data.entities,
			wiki_cite_link: data.wiki_cite_link
		});
	});
	timeline.update(() => timelineEvents);
})

const app = new App({
	target: document.body,
});

export default app;