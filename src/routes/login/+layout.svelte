<script>
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
	import '@skeletonlabs/skeleton/styles/all.css';
	import '../app.postcss';
	import { AppShell, AppBar, AppRail, AppRailTile, LightSwitch } from '@skeletonlabs/skeleton';
</script>

<!-- Side navbar for admin page that consists of Dashboard, Barang, Pelanggan, Supplier buttons-->

<AppShell>
	<svelte:fragment slot="sidebarLeft">
		<AppRail class="rounded-lg">
			<!-- <svelte:fragment slot="lead"><img src="static\LOGO UC.png" alt="Good"></svelte:fragment> -->
			<AppRailTile tag="a" href="/" label="Dashboard" class="rounded-lg" />

			<!-- Dashboard apprailtile with icon -->

			<AppRailTile tag="a" href="/barang" label="Barang" class="rounded-lg" value="man"/>
			<AppRailTile tag="a" href="/pelanggan" label="Pelanggan" class="rounded-lg" />
			<AppRailTile tag="a" href="/supplier" label="Supplier" class="rounded-lg" />
			<svelte:fragment slot="trail">
				<AppRailTile class="hover:bg-transparent">
					<LightSwitch />
				</AppRailTile>
			</svelte:fragment>
		</AppRail>
	</svelte:fragment>
	<svelte:fragment slot="pageHeader">
		<AppBar class="rounded-lg">
			<svelte:fragment slot="trail">User</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Router Slot -->
	<slot />
</AppShell>
