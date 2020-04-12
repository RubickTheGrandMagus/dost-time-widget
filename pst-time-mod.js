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
		$(".pst-time-header").click(()=> window.open('http://www.pagasa.dost.gov.ph/','_blank'));
	
		setInterval(()=> $("#pst-time-format").html(()=> {
			const serverTime = $("#pst-time a").html().split(",");
			
			return `<h1>${serverTime[3]}</h1><h5>${serverTime[1]},${serverTime[2]} ${serverTime[0]}</h5>`;
			
		}) , 1000)
	});
	</script>
