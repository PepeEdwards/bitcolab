---
title: "BitCoLab"
description: "From ideas to prototypes, this is a place for mad experiments"
---

<div class="flex flex-col items-center justify-center text-center">

  <!-- Logo (click to toggle theme) -->
  <button onclick="document.documentElement.classList.toggle('dark'); localStorage.setItem('appearance', document.documentElement.classList.contains('dark') ? 'dark' : 'light');" class="cursor-pointer bg-transparent border-none p-0 m-0">
    {{< figure src="img/BitCoLab.svg" alt="BitCoLab Logo" class="h-24 w-24 mb-1 nozoom" >}}
  </button>

  <!-- Site Title -->
  <h1 class="text-4xl font-extrabold mb-2">BitCoLab</h1>

  <!-- Description -->
  <p class="text-xl text-neutral-500 dark:text-neutral-400 max-w-xl mb-2">
    Llevando ideas a prototipos, este lugar es para mostrar algunos de <strong> nuestros experimentos </strong>
  </p>

  <!-- Hamster GIF -->
  {{< figure src="img/hamster.gif" alt="Hamster powering a light" class="rounded-lg w-xs mx-auto nozoom" >}}
</div>
