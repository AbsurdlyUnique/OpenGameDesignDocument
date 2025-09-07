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
    import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
    import { useInitials } from '@/hooks/useInitials';
    import type { User } from '@/types';

    interface Props {
        user: User;
        showEmail?: boolean;
    }

    let { user, showEmail = false }: Props = $props();

    const { getInitials } = useInitials();

    let showAvatar = $derived(user.avatar && user.avatar !== '');
</script>

<Avatar class="h-8 w-8 overflow-hidden rounded-full">
    {#if showAvatar}
        <AvatarImage src={user.avatar} alt={user.name} />
    {:else}
        <AvatarFallback class="rounded-lg bg-neutral-200 text-black dark:bg-neutral-700 dark:text-white">
            {getInitials(user.name)}
        </AvatarFallback>
    {/if}
</Avatar>

<div class="grid flex-1 text-left text-sm leading-tight">
    <span class="truncate font-medium">{user.name}</span>

    {#if showEmail}
        <span class="truncate text-xs text-muted-foreground">{user.email}</span>
    {/if}
</div>
