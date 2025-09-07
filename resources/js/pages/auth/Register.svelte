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
    import InputError from '@/components/InputError.svelte';
    import TextLink from '@/components/TextLink.svelte';
    import { Button } from '@/components/ui/button';
    import { Input } from '@/components/ui/input';
    import { Label } from '@/components/ui/label';
    import AuthBase from '@/layouts/AuthLayout.svelte';
    import { Form } from '@inertiajs/svelte';
    import { LoaderCircle } from 'lucide-svelte';
</script>

<svelte:head>
    <title>Register</title>
</svelte:head>

<AuthBase title="Create an account" description="Enter your details below to create your account">
    <Form method="post" action={route('register')} resetOnSuccess={['password', 'password_confirmation']} class="flex flex-col gap-6">
        {#snippet children({ errors, processing }: { errors: Record<string, string>; processing: boolean })}
            <div class="grid gap-6">
                <div class="grid gap-2">
                    <Label for="name">Name</Label>
                    <Input id="name" name="name" type="text" required autofocus tabindex={1} autocomplete="name" placeholder="Full name" />
                    <InputError message={errors.name} />
                </div>

                <div class="grid gap-2">
                    <Label for="email">Email address</Label>
                    <Input id="email" name="email" type="email" required tabindex={2} autocomplete="email" placeholder="email@example.com" />
                    <InputError message={errors.email} />
                </div>

                <div class="grid gap-2">
                    <Label for="password">Password</Label>
                    <Input id="password" name="password" type="password" required tabindex={3} autocomplete="new-password" placeholder="Password" />
                    <InputError message={errors.password} />
                </div>

                <div class="grid gap-2">
                    <Label for="password_confirmation">Confirm password</Label>
                    <Input
                        id="password_confirmation"
                        name="password_confirmation"
                        type="password"
                        required
                        tabindex={4}
                        autocomplete="new-password"
                        placeholder="Confirm password"
                    />
                    <InputError message={errors.password_confirmation} />
                </div>

                <Button type="submit" class="mt-2 w-full" tabindex={5} disabled={processing}>
                    {#if processing}
                        <LoaderCircle class="h-4 w-4 animate-spin" />
                    {/if}
                    Create account
                </Button>
            </div>

            <div class="text-center text-sm text-muted-foreground">
                Already have an account?
                <TextLink href={route('login')} class="underline underline-offset-4" tabindex={6}>Log in</TextLink>
            </div>
        {/snippet}
    </Form>
</AuthBase>
