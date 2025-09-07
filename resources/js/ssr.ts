/*
 * Open Game Design Document — an open source solution for creating and exporting
 * Open Game Design Documents project-wise, with version history and more.
 *
 * Copyright (c) 2025  Julian Richter
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 2 only,
 * as published by the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 *
 */

import type { ResolvedComponent } from '@inertiajs/svelte';
import { createInertiaApp } from '@inertiajs/svelte';
import createServer from '@inertiajs/svelte/server';
import type { LegacyComponentType } from 'svelte/legacy';
import { render } from 'svelte/server';

createServer((page) =>
    createInertiaApp({
        page,
        resolve: async (name: string): Promise<ResolvedComponent> => {
            const pages = import.meta.glob<{ default: LegacyComponentType }>('./pages/**/*.svelte', { eager: true });
            return pages[`./pages/${name}.svelte`].default as unknown as ResolvedComponent;
        },
        setup({ App, props }) {
            return render(App, { props });
        },
    }),
);
