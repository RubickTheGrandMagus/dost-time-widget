<div id="pst-time-mod" class="pst-grid">
	<div class="pst-time-header"><img alt="dost-logo" src="http://region7.bfp.gov.ph/wp-content/uploads/pag-asa-100x100-1.png" width="24px" ></div>
	<div class="pst-time-header">
		<h5 style="color:white; margin:1em 0 0 0;">PHILIPPINE STANDARD TIME</h5>
	</div>
	<div class="pst-time-header"><img alt="Philipine Flag" src="http://region7.bfp.gov.ph/wp-content/uploads/flag-100.png" width="24px" ></div>
	<div id="pst-time-format" style="grid-column:1 / span 3">Loading...</div>
</div>

<div id="pst-time" style="display:none">
	
</div>
<script>
	$(document).ready(function(){ 
		setInterval(()=> $("#pst-time-format").html(()=> {
			const serverTime = $("#pst-time a").html();
			const opt1 = { dateStyle:"full"};
			const opt2 = { timeStyle:"medium"};
			const webTime = new Date(serverTime);
			
			return `<h1>${webTime.toLocaleString("en-US",opt2)}</h1><h5>${webTime.toLocaleString("en-US",opt1)}</h5>`;
			
		}) , 1000)
	});
	</script>
