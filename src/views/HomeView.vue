<template>
  <div>
    <div class="my-8 mx-8 text-xl font-bold">Home page</div>
    <div class="mx-8 flex-shrink-0">
      <svg
        class="h-24 w-24 border border-gray-300 bg-white text-gray-300"
        preserveAspectRatio="none"
        stroke="currentColor"
        fill="none"
        viewBox="0 0 200 200"
        aria-hidden="true"
      >
        <path
          vector-effect="non-scaling-stroke"
          stroke-width="1"
          d="M0 0l200 200M0 200L200 0"
        />
      </svg>
    </div>
    <p class="my-4 mx-8">Some example home page content</p>
    <hr />
    <div class="mt-4 mx-12 bg-green-50">
      Pinia store contents -
      <p class="ml-4">
        name:
        <span class="text-green-500 font-bold"> {{ store.getAdminName }}</span>
      </p>
      <p class="ml-4">
        isSignedIn:
        <span class="text-green-500 font-bold">{{ store.getIsAdmin }}</span>
      </p>
    </div>
  </div>
</template>

<script setup>
import { useAdminStore } from "@/stores/admin.js";
const store = useAdminStore();
</script>
