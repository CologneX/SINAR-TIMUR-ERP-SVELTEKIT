<script lang="ts">
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
	import '@skeletonlabs/skeleton/styles/all.css';
	import '../app.postcss';
	import { page } from '$app/stores';
	import { redirect } from '@sveltejs/kit';
	if($page.url.pathname === '/'){
		throw redirect(307, '/dashboard')
	}

	// global.EventSource = require('eventsource');
</script>

<slot />

