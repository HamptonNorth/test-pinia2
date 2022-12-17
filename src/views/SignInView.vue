<template>
  <div>
    <div class="mx-8">
      <div class="my-8 text-xl font-bold">Sign in page</div>
      <p class="font-sem">Test app for pinia.</p>
      <p>
        Enter a name here - the app should store that in a pinia store and make
        state available throughout the app.
      </p>
      <p>
        To signin, the name entered should start
        <span class="te">pin</span> (case insensitive)
      </p>
      <div class="mt-8 mx-4">
        <label for="email" class="block text-sm font-medium text-gray-700"
          >Name</label
        >
        <div class="mt-2">
          <input
            type="text"
            v-model.lazy="testName"
            name="test-name"
            id="test-name"
            class="block w-80 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder=""
            autocomplete="name"
            required
          />
        </div>
        <button
          @click="updateStore"
          type="button"
          class="my-8 inline-flex items-center rounded-md border border-transparent bg-slate-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
        >
          Update store
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

import { useAdminStore } from "@/stores/admin.js";
import { useRouter, useRoute } from "vue-router";
const store = useAdminStore();
const router = useRouter();
const testName = ref("");

function updateStore() {
  store.initialiseAdmin("");
  // mimic check password against database by ensuring username starts 'rob' something - case insensitive
  if (
    testName.value.length !== 0 &&
    Object.keys(testName).length > 0 &&
    testName.value.slice(0, 3).toLowerCase() === "pin"
  ) {
    console.log("Sign in success");
    store.setAdminUser(testName.value);
    router.push({ path: "/" });
  } else {
    testName.value = "";
  }
}
</script>

<style></style>
