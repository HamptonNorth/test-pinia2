<template>
  <div class="my-8 mx-12 text-xl font-bold">Page not found</div>
  <div class="mt-4 mx-12">The the URL is probably wrong</div>
  <div class="mx-12">
    <button
      @click="goToHome"
      type="button"
      class="mt-4 inline-flex items-center rounded-md border border-transparent bg-slate-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
    >
      Go to home page
    </button>
  </div>
</template>

<script setup>
import { useRouter, useRoute } from "vue-router";
const router = useRouter();

function goToHome() {
  router.push({ path: "/" });
}
</script>
