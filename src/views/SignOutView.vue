<template>
  <div>
    <div class="mx-8">
      <div class="my-8 text-xl font-bold">Sign out page</div>
      <p class="font-sem">Test app for pinia.</p>
      <p>Should only be available if already 'signed in'</p>
      <div class="my-8 mx-4">
        <button
          @click="signOut"
          type="button"
          class="mt-4 mb-8 inline-flex items-center rounded-md border border-transparent bg-slate-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
        >
          Sign Out
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
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useAdminStore } from "@/stores/admin.js";
const store = useAdminStore();
const router = useRouter();

function signOut() {
  store.initialiseAdmin("");
  router.push({ path: "/" });
}
</script>

<style></style>
