<script>
		import EventCard from './EventCard.svelte';
		export let timelineData;
</script>
<head>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
	<link href="https://fonts.googleapis.com/css?family=Cardo&display=swap" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css?family=Bree+Serif&display=swap" rel="stylesheet">
</head>
<style  src="./scss/timeline.scss"></style>

<section class="timeline">
  <div class="container">
	{#each timelineData as event}
		<EventCard event={event} />
	{/each}
  </div>
</section>
