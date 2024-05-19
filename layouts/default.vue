<template>
  <div>
    <NuxtLink to="/">Home</NuxtLink>
    <NuxtLink to="/about">About</NuxtLink>
    <v-app class="">
      <h1>Color mode: {{ $colorMode.unknown }}</h1>
      <select v-model="$colorMode.preference">
        <option value="system">System</option>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="sepia">Sepia</option>
      </select>
      <slot />
    </v-app>
  </div>
</template>

<script lang="ts" setup>

</script>

<style>

</style>