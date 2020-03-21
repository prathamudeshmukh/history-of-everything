<script>
	export let event;
</script>
<style  src="./scss/eventcard.scss"></style>
<div class="timeline-item">
    <div class="timeline-img"></div>
    <div class="timeline-content">
        <h2>Event</h2>
        <div class="date">{event.event_date}</div>
        <p>{event.description}</p>
        <a class="bnt-more" href="javascript:void(0)">More</a>
    </div>
</div>