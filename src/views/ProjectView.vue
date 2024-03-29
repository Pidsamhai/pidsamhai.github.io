<template>
  <div class="!tw-w-full tw-h-full tw-flex tw-flex-col tw-p-4">
    <div class="tw-w-full tw-flex tw-flex-row tw-gap-2 tw-pb-4">
      <v-spacer></v-spacer>
      <v-menu offset-y v-model="menu">
        <template v-slot:activator="{ props }">
          <v-btn
            :disabled="isLoading"
            color="primary"
            elevation="0"
            v-bind="props"
          >
            <v-icon>mdi-sort</v-icon>
          </v-btn>
        </template>
        <v-list color="primary" class="tw-mt-2 tw-p-2">
          <v-list-item
            v-for="(item, index) in sortFilter"
            :key="index"
            @click="sort = item.value"
          >
            <v-list-item-title
              :class="{ selected: item.value == sort }"
              class="list-item"
              >{{ item.title }}</v-list-item-title
            >
          </v-list-item>
        </v-list>
      </v-menu>
      <v-btn
        @click="toggleSortDirection()"
        :disabled="isLoading"
        color="primary"
        elevation="0"
      >
        <v-icon v-if="direction == `asc`">mdi-sort-ascending</v-icon>
        <v-icon v-else>mdi-sort-descending</v-icon>
      </v-btn>
    </div>
    <div
      v-if="isLoading"
      class="tw-h-full tw-w-full tw-flex tw-items-center tw-justify-center"
    >
      <Loading />
    </div>
    <div v-else class="tw-flex tw-flex-col tw-grow tw-h-0 tw-overflow-auto">
      <template v-for="(item, index) in repositories" :key="index">
        <div>
          <RepoItem :item="item" />
          <v-divider class="tw-bg-black"></v-divider>
        </div>
      </template>
    </div>
  </div>
</template>
<script lang="ts">
import RepoItem from "@/components/RepoItem.vue";
import Loading from "@/components/Loading.vue";
import { Repository } from "@/types/repository";
import {
  IGithubApiServices,
  Sort,
  SortDirection,
  SortFilter,
} from "@/services/github-api.services";
import { inject } from "vue";
import { Component, Vue } from 'vue-facing-decorator'

@Component({
  components: { RepoItem, Loading },
})
export default class ProjectView extends Vue {
  menu = false;
  repositories: Array<Repository> = [];
  sort: Sort = "updated";
  apiServices = inject<IGithubApiServices>("apiServices");
  direction: SortDirection = "desc";
  sortFilter: SortFilter[] = [
    { title: "Create", value: "created" },
    { title: "Update", value: "updated" },
    { title: "Push", value: "pushed" },
    { title: "Full Name", value: "full_name" },
  ];
  attrs = {
    class: "mb-6",
    boilerplate: true,
    elevation: 2,
  };
  isLoading = false;
  async fetch() {
    this.isLoading = true;
    this.repositories = await this.apiServices!.gerRepository(
      this.sort,
      this.direction
    );
    this.isLoading = false;
  }
  toggleSortDirection() {
    this.direction = this.direction == "asc" ? "desc" : "asc";
  }
  created() {
    this.$watch("sort", () => {
      this.menu = false;
      this.fetch();
    });
    this.$watch("direction", () => {
      this.fetch();
    });
  }
  mounted() {
    if (this.repositories.length == 0) {
      this.fetch();
    }
  }
}
</script>
<style scoped lang="scss">
.list-item {
  &.selected {
    font-weight: bold;
    &::before {
      content: "✓ ";
    }
  }
}
</style>
