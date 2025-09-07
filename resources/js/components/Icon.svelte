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
    import * as icons from 'lucide-svelte';

    interface Props {
        name: string;
        class?: string;
        size?: number | string;
        color?: string;
        strokeWidth?: number | string;
    }

    let { name, class: className, size = 16, color, strokeWidth = 2 }: Props = $props();

    const Component = $derived(() => {
        const iconName = name.charAt(0).toUpperCase() + name.slice(1);
        return (icons as Record<string, any>)[iconName];
    });

    const styles = $derived(['h-4 w-4', className]);
</script>

<Component class={styles} {size} {color} {strokeWidth} />
