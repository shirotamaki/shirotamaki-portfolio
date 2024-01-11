<template>
  <div class="grid justify-items-center font-Poppins">
    <ul class="grid justify-items-center font-Poppins">
      <li class="mb-8">
        <NuxtLink to="/talks/kakutanitalk">
          <img
            src="~/assets/images/kakutanitalk2022.png"
            alt="kakutanitalk LT"
            class="sm:w-96 w-80 hover:opacity-75 transition-all duration-100 shadow-xl"
          />
        </NuxtLink>
      </li>
      <li class="mb-8">
        <NuxtLink to="/talks/sinatralt">
          <img
            src="~/assets/images/sinatra_lt.jpeg"
            alt="subatra LT"
            class="sm:w-96 w-80 hover:opacity-75 transition-all duration-100 shadow-md"
          />
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/talks/rubylt">
          <img
            src="~/assets/images/ruby_lt.jpeg"
            alt="FBC LT"
            class="sm:w-96 w-80 hover:opacity-75 transition-all duration-100 shadow-md"
          />
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
