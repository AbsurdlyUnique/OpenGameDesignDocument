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
    import AppearanceTabs from '@/components/AppearanceTabs.svelte';
    import HeadingSmall from '@/components/HeadingSmall.svelte';
    import { type BreadcrumbItem } from '@/types';

    import AppLayout from '@/layouts/AppLayout.svelte';
    import SettingsLayout from '@/layouts/settings/Layout.svelte';

    const breadcrumbItems: BreadcrumbItem[] = [
        {
            title: 'Appearance settings',
            href: '/settings/appearance',
        },
    ];
</script>

<svelte:head>
    <title>Appearance Settings</title>
</svelte:head>

<AppLayout breadcrumbs={breadcrumbItems}>
    <SettingsLayout>
        <div class="space-y-6">
            <HeadingSmall title="Appearance settings" description="Update your account's appearance settings" />
            <AppearanceTabs />
        </div>
    </SettingsLayout>
</AppLayout>
