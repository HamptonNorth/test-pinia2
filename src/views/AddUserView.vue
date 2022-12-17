<template>
  <div>
    <div class="my-8 mx-12 text-xl font-bold">Add a new user</div>
    <div class="mt-4 mx-12">This page requires the user to be signed in.</div>
    <div class="mt-4 mx-12">
      The menu option to route to this page is not visible if the user is not
      signed in
    </div>

    <div class="mt-8 mx-16 w-3/5">
      <form class="space-y-8 divide-y divide-gray-200">
        <div class="space-y-8 divide-y divide-gray-200 sm:space-y-5">
          <div class="space-y-6 sm:space-y-5">
            <div class="mt-8 mx-4">
              <label for="email" class="block text-sm font-medium text-gray-700"
                >Name</label
              >
              <div class="mt-2">
                <input
                  type="text"
                  name="test-name"
                  class="block w-80 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>

              <div class="mt-2 mb-8">
                <label
                  for="email"
                  class="block text-sm font-medium text-gray-700"
                  >Email</label
                >
                <div class="mt-2">
                  <input
                    type="text"
                    name="email"
                    class="block w-80 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
    <div class="mx-12">
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
