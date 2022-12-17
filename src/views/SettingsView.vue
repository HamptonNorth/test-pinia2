<template>
  <div>
    <div class="my-8 mx-12 text-xl font-bold">Settings</div>
    <div class="mt-4 mx-12">
      This page requires the user to be signed in. It uses a route guard. If the
      user in not logged in, they will be redirected to the sign in page.
    </div>
    <div class="my-8 mx-12">
      <button
        @click="goToHome"
        type="button"
        class="mt-4 mb-8 inline-flex items-center rounded-md border border-transparent bg-slate-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
      >
        Go to home page
      </button>
      <hr />
      <div class="mt-8 mx-2 bg-green-50">
        Pinia store contents -
        <p class="ml-4">
          name:
          <span class="text-green-500 font-bold">
            {{ store.getAdminName }}</span
          >
        </p>
        <p class="ml-4">
          isSignedIn:
          <span class="text-green-500 font-bold">{{ store.getIsAdmin }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter, useRoute } from "vue-router";
import { useAdminStore } from "@/stores/admin.js";
const store = useAdminStore();
const router = useRouter();

function goToHome() {
  router.push({ path: "/" });
}
</script>
