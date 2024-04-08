<template>
    <div>
      <header class='shadow-sw bg-white'>
        <nav class='container mx-auto p-4'>
            <NuxtLink to="/products" class='font-bold'>Nuxt_Toto Produits</NuxtLink>
        </nav>
      </header>
      <div class='container mx-auto p-4'>
        <slot />
      </div>
    </div>
    <footer class='container mx-auto p-4 flex justify-between border-t-2'>
        <ul class='flex gap-4'>
            <li><NuxtLink to="/">Home</NuxtLink></li>
            <li><NuxtLink to="/about">A Propos</NuxtLink></li>
            <li><NuxtLink to="/products">Produits</NuxtLink></li>
        </ul>
    </footer>
  </template>
  <style>
      .router-link-exact-active {
          color: #12b488;
      }
  </style>
  