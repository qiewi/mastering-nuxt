<template>
  <Modal @close="$emit('close')">
    <div
      class="bg-slate-200 p-8 rounded-xl w-full max-w-2xl"
    >
      <form>
        <h2 class="font-bold text-xl text-center">
          Buying {{ course.title }}
        </h2>
        <div
          class="mt-8 text-base width bg-white py-6 px-8 rounded shadow-md"
        >
          <div
            class="w-full flex justify-between items-center mb-8"
          >
            <label class="font-bold"> Email </label>
            <input
              class="input ml-6 focus:outline-none text-left w-full"
              type="email"
              autocomplete="email"
              v-model="email"
              placeholder="your@email.com"
              required
            />
          </div>
        </div>
        <button
          class="font-sans mt-4 w-full text-lg text-black h-12 px-16 rounded"
        >
          <div>Pay $97</div>
        </button>
      </form>
    </div>
  </Modal>
</template>

<script setup>
const course = useCourse();
const email = ref('');

defineEmits(['close']);
</script>
