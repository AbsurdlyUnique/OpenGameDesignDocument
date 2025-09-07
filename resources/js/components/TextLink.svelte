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
    import type { Method } from '@inertiajs/core';
    import { Link } from '@inertiajs/svelte';
    import type { Snippet } from 'svelte';

    interface Props {
        href: string;
        tabindex?: number;
        method?: Method;
        as?: keyof HTMLElementTagNameMap;
        class?: string;
        children: Snippet;
    }

    let { href, tabindex, method, as, class: className, children }: Props = $props();
</script>

<Link
    {href}
    {tabindex}
    {method}
    {as}
    class="text-foreground underline decoration-neutral-300 underline-offset-4 transition-colors duration-300 ease-out hover:!decoration-current dark:decoration-neutral-500 {className}"
>
    {@render children()}
</Link>
