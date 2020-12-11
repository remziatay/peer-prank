<template>
  <div class="bg-gray-50 bg-opacity-60 mx-auto p-6 flex flex-col w-full">
    <div
      v-for="(qa, i) in FAQs"
      :key="qa.q"
      class="max-w-screen-lg w-full mx-auto pb-4"
    >
      <div
        class="flex items-center justify-between bg-gray-200 pl-3 pr-2 py-3 w-full rounded text-gray-600 font-bold cursor-pointer hover:bg-gray-300"
        @click="active = active !== i ? i : -1"
      >
        {{ qa.q }}
        <span class="h-6 w-6 flex items-center justify-center text-teal-500">
          <svg
            v-if="i === active"
            class="w-3 h-3 fill-current"
            viewBox="0 -192 469.33333 469"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m437.332031.167969h-405.332031c-17.664062 0-32 14.335937-32 32v21.332031c0 17.664062 14.335938 32 32 32h405.332031c17.664063 0 32-14.335938 32-32v-21.332031c0-17.664063-14.335937-32-32-32zm0 0"
            />
          </svg>
          <svg
            v-else
            class="w-3 h-3 fill-current"
            viewBox="0 0 469.33333 469.33333"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m437.332031 192h-160v-160c0-17.664062-14.335937-32-32-32h-21.332031c-17.664062 0-32 14.335938-32 32v160h-160c-17.664062 0-32 14.335938-32 32v21.332031c0 17.664063 14.335938 32 32 32h160v160c0 17.664063 14.335938 32 32 32h21.332031c17.664063 0 32-14.335937 32-32v-160h160c17.664063 0 32-14.335937 32-32v-21.332031c0-17.664062-14.335937-32-32-32zm0 0"
            />
          </svg>
        </span>
      </div>
      <div v-if="active === i" class="p-3">
        <p class="text-gray-800 mb-3">
          {{ qa.a }}
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    FAQs: [
      {
        q: 'Why?',
        a:
          "Because it's fun! Also I wanted to build something original and this is the product.",
      },
      {
        q: 'Is it dangerous?',
        a: 'Yes. It might be dangerous. Use it at your own risk.',
      },
      {
        q: 'Can I use the pictures/sounds of my choice?',
        a: "Not right now but I'm planning to bring such feature.",
      },
      {
        q: 'What are those dots in the Cockpit?',
        a:
          "First two dots will be green when sound and picture are loaded. And third one when your friend interacts with the website in any way. This is necessary to play the sound on jumpscare but you don't have to wait for it to FIRE.",
      },
      {
        q: 'Can I contribute?',
        a:
          'Yes! Any kind of contribution, bug report, feature request is very welcome.',
      },
    ],
    active: 0,
  }),
};
</script>
