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
    import { SidebarGroup, SidebarGroupContent, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
    import type { NavItem } from '@/types';

    interface Props {
        items: NavItem[];
        class?: string;
    }

    let { items, class: className }: Props = $props();
</script>

<SidebarGroup class="group-data-[collapsible=icon]:p-0 {className}">
    <SidebarGroupContent>
        <SidebarMenu>
            {#each items as item, index (index)}
                <SidebarMenuItem>
                    <SidebarMenuButton class="text-neutral-600 hover:text-neutral-800 dark:text-neutral-300 dark:hover:text-neutral-100">
                        <a href={item.href} target="_blank" rel="noopener noreferrer" class="block w-full">
                            <div class="flex items-center gap-2 w-full">
                                {#if item.icon}
                                    {@const Icon = item.icon}
                                    <Icon class="h-4 w-4 shrink-0" />
                                {/if}
                                <span>{item.title}</span>
                            </div>
                        </a>
                    </SidebarMenuButton>
                </SidebarMenuItem>
            {/each}
        </SidebarMenu>
    </SidebarGroupContent>
</SidebarGroup>
