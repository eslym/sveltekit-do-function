<script lang="ts">
    import type { PageData } from './$types';

    export let data: PageData;
</script>

<svelte:head>
    <title>Inspiration</title>
    <meta name="description" content="This is just a demo app to host sveltekit with DigitalOcean functions" />
    <meta name="og:title" content="Inspiration" />
    <meta name="og:description" content="This is just a demo app to host sveltekit with DigitalOcean functions" />
</svelte:head>

<div class="flex min-h-screen w-full items-center justify-center">
    <div class="max-w-xl border-l-4 border-orange-300 px-8">
        <p class="text-2xl text-slate-300">
            {data.text}
        </p>
        <p class="mt-8 text-right text-lg italic text-slate-400">
            —— {data.author}
        </p>
    </div>
</div>
