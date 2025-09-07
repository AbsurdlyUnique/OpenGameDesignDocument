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
    interface Props {
        class?: string;
    }

    let { class: className }: Props = $props();
    let patternId = $derived(`pattern-${Math.random().toString(36).substring(2, 9)}`);
</script>

<svg class={className} fill="none">
    <defs>
        <pattern id={patternId} x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M-3 13 15-5M-5 5l18-18M-1 21 17 3"></path>
        </pattern>
    </defs>
    <rect stroke="none" fill={`url(#${patternId})`} width="100%" height="100%"></rect>
</svg>
