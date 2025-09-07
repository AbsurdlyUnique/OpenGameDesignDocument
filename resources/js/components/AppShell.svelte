<!--
  - Open Game Design Document — an open source solution for creating and exporting
  - Open Game Design Documents project-wise, with version history and more.
  -
  - Copyright (c) 2025  Julian Richter
  -
  - This program is free software; you can redistribute it and/or modify
  - it under the terms of the GNU General Public License version 2 only,
  - as published by the Free Software Foundation.
  -
  - This program is distributed in the hope that it will be useful,
  - but WITHOUT ANY WARRANTY; without even the implied warranty of
  - MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
  -
  -->

<script lang="ts">
    import { SidebarProvider } from '@/components/ui/sidebar';
    import { page } from '@inertiajs/svelte';
    import type { Snippet } from 'svelte';

    interface Props {
        variant?: 'header' | 'sidebar';
        class?: string;
        children?: Snippet;
    }

    let { variant = 'sidebar', class: className, children }: Props = $props();

    const isOpen = $derived($page.props.sidebarOpen as boolean);
</script>

{#if variant === 'header'}
    <div class="flex min-h-screen w-full flex-col {className}">
        {@render children?.()}
    </div>
{:else}
    <SidebarProvider open={isOpen}>
        {@render children?.()}
    </SidebarProvider>
{/if}
