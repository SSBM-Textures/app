<script lang="ts">
	import { Button } from "$lib/components/ui/button";
</script>

<div class="p-8 space-y-4">
	<h1 class="text-2xl font-bold">UnoCSS + shadcn-svelte Test</h1>

	<div class="flex gap-4">
		<Button>Default</Button>
		<Button variant="secondary">Secondary</Button>
		<Button variant="outline">Outline</Button>
		<Button variant="destructive">Destructive</Button>
	</div>

	<div class="p-4 bg-primary text-primary-foreground rounded-md">
		Primary colored box
	</div>
</div>
