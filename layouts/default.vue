<template>
  <div>
    <header class='shadow-sw bg-white'>
      <nav class='container mx-auto p-4 flex justify-between'>
        <ul class='flex gap-4'>
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/about">A Propos</NuxtLink></li>
          <li><NuxtLink to="/products" class="btn">Produits</NuxtLink></li>
        </ul>
      </nav>
    </header>
    <div class='container mx-auto p-4'>
      <slot />
    </div>
  </div>
</template>
<style>
    .router-link-exact-active {
        color: #12b488;
    }
</style>
