<script setup>
import { RouterLink, RouterView } from "vue-router";

import { useAdminStore } from "@/stores/admin.js";
const store = useAdminStore();
</script>

<template>
  <header>
    <div class="my-8 mx-8">
      <nav>
        <div class="decoration-indigo-600 underline">
          <RouterLink to="/">Home</RouterLink>
        </div>
        <div v-if="!store.getIsAdmin" class="decoration-indigo-600 underline">
          <RouterLink to="/signin">Sign In</RouterLink>
        </div>
        <div v-if="store.getIsAdmin" class="decoration-indigo-600 underline">
          <RouterLink to="/signout">Sign Out</RouterLink>
        </div>
        <div class="decoration-indigo-600 underline">
          <RouterLink to="/settings"
            >Settings -
            <span class="text-xs">
              redirect to the Sign In page if not authenticated</span
            ></RouterLink
          >
        </div>
        <div v-if="store.getIsAdmin" class="decoration-indigo-600 underline">
          <RouterLink to="/addUser"
            >Add a new user -
            <span class="text-xs">
              menu choice not visible unless authenticated</span
            ></RouterLink
          >
        </div>
      </nav>
    </div>
  </header>
  <!-- useful video re Transitions -->
  <!-- https://www.youtube.com/watch?v=gAwKhi7Huhc -->

  <RouterView class="router-view" v-slot="{ Component }">
    <!-- <Transition name="page-slide" mode="out-in"> -->
    <Transition name="page-opacity" mode="out-in">
      <component :is="Component" />
    </Transition>
  </RouterView>
</template>

<style scoped>
.page-opacity-enter-active,
.page-opacity-leave-active {
  transition: 200ms ease all;
}
.page-opacity-enter-from,
.page-opacity-leave-to-from {
  opacity: 0;
}

.page-slide-enter-active,
.page-slide-leave-active {
  transition: 400ms ease all;
}
.page-slide-enter-from,
.page-slide-leave-to {
  opacity: 0;
  transform: translateY(60px);
}
</style>
