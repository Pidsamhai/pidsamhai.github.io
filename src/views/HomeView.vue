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
        ><v-icon size="32">mdi-github</v-icon></a
      >
      <v-icon size="32" @click="hireMe()" class="tw-cursor-pointer"
        >mdi-email</v-icon
      >
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import MenuButton from "@/components/MenuButton.vue"; // @ is an alias to /src

@Options({
  components: { MenuButton },
})
export default class HomeView extends Vue {
  hireMe() {
    window.open("mailto:meng348@gmail.com");
  }
}
</script>
