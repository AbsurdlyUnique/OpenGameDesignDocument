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
    import { SidebarInset } from '@/components/ui/sidebar';
    import type { Snippet } from 'svelte';

    type Props = {
        variant?: 'header' | 'sidebar';
        class?: string;
        children: Snippet;
    };

    let { variant, class: className, children }: Props = $props();
</script>

{#if variant === 'sidebar'}
    <SidebarInset class={className}>
        <div class="mx-auto w-full max-w-7xl">
            {@render children?.()}
        </div>
    </SidebarInset>
{:else}
    <main class="mx-auto flex h-full w-full max-w-7xl flex-1 flex-col gap-4 rounded-xl {className}">
        {@render children?.()}
    </main>
{/if}
