<template>
  <div
    class="tw-h-full tw-w-full tw-flex tw-flex-col tw-items-center tw-justify-center"
  >
    <p class="tw-text-3xl md:tw-text-5xl font-weight-bold">Pidsamhai</p>
    <p class="text-body tw-font-mono tw-p-4 tw-text-center">
      Pidsamhai (pid-sa-mhai) is the Thai word meaning, passionate something
    </p>
    <div class="tw-flex tw-flex-row tw-gap-2 tw-items-center">
      <a href="https://github.com/Pidsamhai" target="_blank"
        ><v-icon size="32" icon="mdi-github"></v-icon></a
      >
      <v-icon size="32" @click="hireMe()" icon="mdi-email" class="tw-cursor-pointer"
        ></v-icon
      >
    </div>
  </div>
</template>

<script lang="ts">
import MenuButton from "@/components/MenuButton.vue"; // @ is an alias to /src
import { Component, Vue } from 'vue-facing-decorator'

@Component({
  components: {
    MenuButton
  }
})
export default class HomeView extends Vue {
  hireMe() {
    window.open("mailto:meng348@gmail.com");
  }
}
</script>
