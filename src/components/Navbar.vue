<template>
  <header>
    <nav class="bg-gray-800">
      <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div class="relative flex items-center justify-between h-16">
          <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <!-- Mobile menu button-->
            <button
              class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-expanded="false"
              @click="menuOpen = !menuOpen"
            >
              <span class="sr-only">Open main menu</span>
              <svg
                v-if="!menuOpen"
                class="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                v-if="menuOpen"
                class="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div
            class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start"
          >
            <div class="flex-shrink-0 flex items-center">
              <router-link to="/">
                <img
                  :src="logo"
                  alt="PeerPrank"
                  class="block "
                  width="121"
                  height="32"
                />
              </router-link>
            </div>
            <div class="hidden sm:block sm:ml-6">
              <div class="flex space-x-4">
                <router-link
                  v-for="nav in navs"
                  :key="nav.path"
                  :to="nav.path"
                  class="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:text-white focus:bg-gray-700 focus:outline-none"
                  active-class="px-3 py-2 rounded-md text-sm font-medium text-white bg-gray-900"
                  >{{ nav.name }}</router-link
                >
              </div>
            </div>
          </div>

          <div
            class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
          >
            <button
              class="bell relative bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              @click="alertCount = 0"
            >
              <badge
                v-if="alertCount"
                class="absolute right-0 -top-2 bg-red"
                :style="{ background: 'rgb(239, 68, 68)', padding: '3px 5px' }"
              >
                {{ alertCount }}
              </badge>
              <span class="sr-only">View notifications</span>
              <!-- Heroicon name: bell -->
              <svg
                class="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            </button>
            <div
              v-show="newVictimCount"
              class="modal select-none shadow-md bg-gray-800 text-white absolute top-full mt-1 right-0 min-w-max px-8 py-5 rounded border-2 border-red-800"
            >
              {{ newVictimCount }} new victim{{ newVictimCount > 1 ? 's' : '' }}
            </div>
          </div>
        </div>
      </div>

      <div :class="[menuOpen ? 'block' : 'hidden', 'sm:hidden']">
        <div class="px-2 pt-2 pb-3 space-y-1">
          <router-link
            v-for="nav in navs"
            :key="nav.path"
            :to="nav.path"
            class="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:text-white focus:bg-gray-700 focus:outline-none"
            active-class="block px-3 py-2 rounded-md text-base font-medium text-white bg-gray-900"
            >{{ nav.name }}</router-link
          >
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import logo from '../assets/logo.png';
import Badge from './Badge.vue';

export default {
  components: { Badge },
  data: () => ({
    menuOpen: false,
    logo,
    alertCount: 0,
    newVictimCount: 0,
  }),
  computed: {
    navs() {
      return this.$router.getRoutes().filter(route => route.name !== 'Prank');
    },
  },
  inject: ['connections'],
  watch: {
    'connections.value.length'(val, oldVal) {
      if (val - oldVal > 0) {
        this.alertCount += val - oldVal;
        this.newVictimCount = this.alertCount;
      }
    },
  },
};
</script>

<style scoped>
.bell:not(:focus) + .modal {
  visibility: hidden;
}
</style>
