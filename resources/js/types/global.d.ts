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

import { PageProps as InertiaPageProps } from '@inertiajs/core';
import { AxiosInstance } from 'axios';
import type { route as routeFn } from 'ziggy-js';
import { PageProps as AppPageProps } from './';

declare global {
    const route: typeof routeFn;
    interface Window {
        axios: AxiosInstance;
    }
}

declare module '@inertiajs/core' {
    interface PageProps extends InertiaPageProps, AppPageProps {}
}
