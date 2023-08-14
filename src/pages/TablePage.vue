<script setup>
import VBaseTable from "../components/Table/VBaseTable.vue";
import VRowTable from "../components/Table/VRowTable.vue";
import VColumnTable from "../components/Table/VColumnTable.vue";
import { ref, computed } from "vue";
import VButton from "../components/VButton.vue";
const tableHeads = ["id", "Author", "Title", "Cover", "Action"];

const columnsTemplates = "50px 1fr 2fr 150px 140px";

const books = ref([
  {
    id: 1,
    author: "Dmitry Glukhovsky",
    title: "Metro 2033",
    image: "https://cdn.img-gorod.ru/620x1000/nomenclature/27/067/2706710.jpg",
    bg: "#FFA26B",
  },
  {
    id: 12,
    author: "James Clear",
    title: "Atomic Habits: An Easy",
    image: "https://m.media-amazon.com/images/I/81wgcld4wxL.jpg",
    bg: "#00C48C",
  },
  {
    id: 3,
    author: "J. K. Rowling",
    title: "Harry Potter and the Order of the Phoenix",
    image: "https://images.booksense.com/images/071/358/9780439358071.jpg",
    bg: "#00C48C",
  },
]);

const sortField = ref("id");
const typeSort = ref("asc");

const booksSorting = computed(() => {
  return books.value.sort((a, b) => {
    let modifer = 1;
    if (typeSort.value === "desc") {
      modifer = -1;
    }
    if (a[sortField.value] < b[sortField.value]) {
      return -1 * modifer;
    }
    if (a[sortField.value] > b[sortField.value]) {
      return 1 * modifer;
    }
    return 0;
  });
});

const setSort = (name) => {
  if (sortField.value === name) {
    if (typeSort.value === "asc") {
      typeSort.value = "desc";
    } else {
      typeSort.value = "asc";
    }
  } else {
    sortField.value = name;
  }
};
</script>

<template>
  <div class="table">
    <div class="table__container">
      <h1 class="heading-1">Table</h1>
      <span>Sort Field: {{ sortField }}</span> <br />
      <span>Type Sort: {{ typeSort }}</span> <br />
      <VBaseTable
        :heads="tableHeads"
        :columnsTemplates="columnsTemplates"
        @sortingByHead="setSort"
      >
        <VRowTable
          v-for="(book, index) in booksSorting"
          :key="index"
          :columnsTemplates="columnsTemplates"
          :bgRow="book.bg"
        >
          <VColumnTable :columnTitle="tableHeads[0]">
            {{ book.id }}
          </VColumnTable>
          <VColumnTable :columnTitle="tableHeads[1]">
            {{ book.author }}
          </VColumnTable>
          <VColumnTable :columnTitle="tableHeads[2]">
            {{ book.title }}
          </VColumnTable>

          <VColumnTable
            :image="true"
            :srcImage="book.image"
            :columnTitle="tableHeads[3]"
          />
          <VColumnTable :columnTitle="tableHeads[4]">
            <VButton :label="'Read online'" />
          </VColumnTable>
        </VRowTable>
      </VBaseTable>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
