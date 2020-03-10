<script>
	export let timelineData;
</script>
<head>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
	<link href="https://fonts.googleapis.com/css?family=Cardo&display=swap" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css?family=Bree+Serif&display=swap" rel="stylesheet">
</head>
<style  src="./timeline.scss"></style>

<section class="timeline">
  <div class="container">
	{#each timelineData as event}
		<div class="timeline-item">
		<div class="timeline-img"></div>
		<div class="timeline-content js--fadeInLeft">
			<h2>Event</h2>
			<div class="date">{event.event_date}</div>
			<p>{event.description}</p>
			<a class="bnt-more" href="javascript:void(0)">More</a>
		</div>
		</div>
	{/each}
  </div>
</section>
