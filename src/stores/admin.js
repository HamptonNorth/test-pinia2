import { ref, computed } from "vue";

import { defineStore } from "pinia";

export const useAdminStore = defineStore("admin", () => {
  const isSignedIn = ref(false);
  const adminName = ref("");
  const getIsAdmin = computed(() => isSignedIn.value);
  const getAdminName = computed(() => adminName.value);
  function setAdminUser(name) {
    (this.adminName = name), (this.isSignedIn = true);
  }
  function initialiseAdmin(name) {
    (this.adminName = name), (this.isSignedIn = false);
  }
  return {
    isSignedIn,
    adminName,
    getIsAdmin,
    getAdminName,
    setAdminUser,
    initialiseAdmin,
  };
});
