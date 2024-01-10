<template>
  <div class="flex flex-col min-h-screen p-4">
    <Header />
    <main class="flex-grow">
      <slot />
    </main>
    <Footer />
  </div>
</template>
