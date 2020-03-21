<script>
	import { timeline } from './store.js';
	import Timeline from './components/Timeline.svelte';

	let timelineData;
	timeline.subscribe(value => {
		timelineData = value;
	});

</script>
<style >
	body {
		overflow-x: hidden;
		font-size: 17px;
		font-weight: 400;
		background-color: #222C32;
	}

	h1 {
		font-size: 200%;
		letter-spacing: 3px;
		font-weight: 400;
		font-family: 'Cardo', serif;
		color: white;
	}

	header {
		background: #2B343A;
		color: 'white';
		padding: 150px 0;
	}
</style>
<body>
	<header>
		<div class="container text-center">
			<h1>History of everything</h1>
		</div>
	</header>
	<Timeline timelineData={timelineData} />
</body>

