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
    import { Breadcrumb, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator, Item } from '@/components/ui/breadcrumb';
    import { Link } from '@inertiajs/svelte';

    interface BreadcrumbItem {
        title: string;
        href?: string;
    }

    interface Props {
        breadcrumbs: BreadcrumbItem[];
    }

    let { breadcrumbs }: Props = $props();
</script>

<Breadcrumb>
    <BreadcrumbList>
        {#each breadcrumbs as item, index (index)}
            <Item>
                {#if index === breadcrumbs.length - 1}
                    <BreadcrumbPage>{item.title}</BreadcrumbPage>
                {:else}
                    <BreadcrumbLink>
                        <Link href={item.href ?? '#'}>{item.title}</Link>
                    </BreadcrumbLink>
                {/if}
            </Item>
            {#if index !== breadcrumbs.length - 1}
                <BreadcrumbSeparator />
            {/if}
        {/each}
    </BreadcrumbList>
</Breadcrumb>
