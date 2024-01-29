<template>
  <div class="grid justify-items-center font-NotoSansJP">
    <article class="sm:w-[480px] w-80">
      <h1>
        <img src="~/assets/images/book.png" alt="Book List" class="sm:w-[480px] w-80" />
      </h1>
      <section class="mt-12 mb-12">
        <section class="mb-12">
          <section class="mb-4">
            <h2 class="text-xl mb-4 border-b-2">読んだ技術書リスト</h2>
            <p class="leading-7"></p>
          </section>
          <section class="mb-6">
            <h3 class="text-lg">以下外部サイト（ブクログ）のURLからもご確認いただけます</h3>
            <div class="underline hover:opacity-75 transition-all duration-100 text-sm break-words">
              <a
                href="https://booklog.jp/users/tamaki460/all?category_id=3530577&status=3&rank=all&sort=sort_desc&display=front"
                target="_blank"
                rel="noopener noreferrer"
                >https://booklog.jp/users/tamaki460/all?category_id=3530577&status=3&rank=all&sort=sort_desc&display=front</a
              >
            </div>
          </section>
        </section>
        <section class="overflow-x-auto">
          <table class="min-w-full">
            <thead>
              <tr>
                <th>カテゴリ</th>
                <th>書籍名</th>
                <th>著者</th>
                <th>輪読会</th>
                <th>ブログ</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="book in books" :key="book.title">
                <td>{{ book.category }}</td>
                <td>{{ book.title }}</td>
                <td>{{ book.author }}</td>
                <td>{{ book.readingCircle ? '✔' : '' }}</td>
                <td v-if="book.blog">
                  <a
                    :href="book.blog"
                    target="_blank"
                    rel="noopener"
                    aria-label="Blog Link"
                    class="hover:opacity-50 transition-all duration-100"
                  >
                    <font-awesome-icon :icon="['fas', 'arrow-up-right-from-square']" />
                  </a>
                </td>
                <td v-else></td>
              </tr>
            </tbody>
          </table>
        </section>
      </section>
    </article>
  </div>
</template>

<script setup>
import books from '@/assets/json/booklog.json'
</script>

<style scoped>
table {
  border-collapse: collapse;
  width: 100%;
}

th,
td {
  border: 1px solid #ddd;
  padding: 8px;
}

th {
  background-color: #f2f2f2;
}
</style>
