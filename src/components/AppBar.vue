<template>
  <v-app-bar elevation="4" color="primary lighten-3">
    <v-app-bar-title>
      <router-link to="/">Pidsamhai</router-link>
    </v-app-bar-title>
    <v-spacer></v-spacer>
    <div
      class="tw-mr-2 tw-hidden tw-flex-row tw-gap-2 tw-h-full tw-items-center md:tw-flex"
    >
      <template v-for="(item, index) in menuItem" :key="index">
        <MenuButton :title="item.name" :to="item.path" />
      </template>

      <v-btn @click="toggleTheme()" icon>
        <v-icon size="32" icon="mdi-brightness-6"></v-icon>
      </v-btn>
      <GithubRepo />
    </div>
    <v-menu top :close-on-content-click="closeMenu">
      <template v-slot:activator="{ props }">
        <v-btn
          v-bind="props"
          icon
          class="tw-block md:tw-hidden"
        >
          <v-icon size="32" icon="mdi-menu"></v-icon>
        </v-btn>
      </template>

      <v-card class="tw-mt-3 tw-left-[-10%]" elevation="8" rounded="xl">
        <v-list class="tw-p-4">
          <template v-for="(item, index) in menuItem" :key="index">
            <router-link v-bind:to="item.path" custom v-slot="{ navigate }">
              <v-list-item @click="() => navigate()">
                <v-list-item-title> {{ item.name }} </v-list-item-title>
              </v-list-item>
            </router-link>
          </template>
          <v-list-item @click="toggleTheme()">
            <v-list-item-title class="tw-capitalize">
              <v-icon icon="mdi-brightness-6"></v-icon>
              {{ store.state.themeMode }}</v-list-item-title
            >
          </v-list-item>
        </v-list>
      </v-card>
    </v-menu>
  </v-app-bar>
</template>
<script lang="ts">
import { useStore } from "@/store";
import MenuButton from "@/components/MenuButton.vue";
import { Component, Vue } from "vue-facing-decorator";

@Component({
  components: {
    MenuButton,
  },
})
export default class AppBar extends Vue {
  closeMenu = false;
  menuItem = [
    { name: "Project", path: "/project" },
    { name: "Release", path: "/release" },
    // { name: "Privacy Policy", path: "/privacypolicy" },
    { name: "About", path: "/about" },
  ];
  closeOnContentClick = true;
  store = useStore();
  toggleTheme() {
    this.store.commit("toggleTheme");
  }
}
</script>
