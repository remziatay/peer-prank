<template>
  <div class="bg-gray-100 bg-opacity-70 h-full px-4 py-2">
    <transition name="fade">
      <div
        v-if="alert"
        class="relative py-3 pl-4 pr-10 leading-normal rounded-lg mb-2"
        :class="
          alert.fail ? 'text-red-700 bg-red-100' : 'text-blue-700 bg-blue-100'
        "
        role="alert"
      >
        <p>{{ alert.message }}</p>
        <span
          class="absolute inset-y-0 right-0 flex items-center mr-4"
          @click="alert = null"
        >
          <svg class="w-4 h-4 fill-current" role="button" viewBox="0 0 20 20">
            <path
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
              fill-rule="evenodd"
            ></path>
          </svg>
        </span>
      </div>
    </transition>
    <div class="grid grid-cols-3 gap-2">
      <label class="text-xl font-semibold" for="title"
        >A title for the victim</label
      >
      <input
        id="title"
        class="col-span-2 px-4 py-2 text-lg text-gray-700 placeholder-gray-600 border rounded-lg focus:ring-2"
        type="text"
        placeholder="Some convincing title"
        v-model="title"
      />
      <label class="text-xl font-semibold" for="title">Link</label>
      <input
        class="col-span-2 px-4 py-2 text-lg text-gray-700 border rounded-lg focus:ring-2"
        type="text"
        v-model="link"
      />
      <div class="flex gap-2 col-span-3 ml-auto">
        <button
          @click="share"
          class="px-4 py-2 text-purple-50 bg-purple-600 rounded-lg shadow transition-colors duration-150 focus:outline-none focus:ring-2 ring-indigo-400 hover:bg-purple-800"
        >
          Share
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import 'share-api-polyfill';
export default {
  data: () => ({
    title: '',
    alert: null,
  }),
  methods: {
    share() {
      navigator
        .share(
          { title: this.title, url: this.link, text: ' ' },
          { print: false, linkedin: false, skype: false }
        )
        .then(() => {
          this.alert = { message: 'Done!' };
          setTimeout(() => (this.alert = null), 2500);
        })
        .catch(() => {
          this.alert = { message: 'There was an error!', fail: true };
          setTimeout(() => (this.alert = null), 2500);
        });
    },
  },
  inject: ['peerId'],
  computed: {
    link: {
      get() {
        const title = this.title.replaceAll(/\s+|[/.'"]/g, '-').toLowerCase();
        return `${window.location.origin}/p/${title}/${this.peerId.value}`;
      },
      set() {
        const title = this.title;
        this.title = '';
        this.title = title;
      },
    },
  },
};
</script>
<style scoped>
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease-in-out;
}
</style>
