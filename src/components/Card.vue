<template>
  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>A simple demo </span>
      </div>
    </template>

    <div v-for="(items, key) in getItems" :key="key" class="text item">
      {{ key }}
      <ul>
        <li v-for="item in items" :key="item.name">{{ item.name }}</li>
      </ul>
    </div>
  </el-card>
</template>

<script>
const groupBy = function (arr, key) {
  return arr.reduce((rv, x) => {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {})
}

export default {
  props: {
  },
  data() {
    return {
      count: 0,
      items: [],
      url: "http://5c92dbfae7b1a00014078e61.mockapi.io/owners",
    }
  },
  computed: {
    getItems() {
      const items = this.items.sort((a, b) => {
        return a.name > b.name ? 1 : -1;
      });
      return groupBy(items, "gender");
    }
  },
  methods: {
    fetchRecord() {
      fetch(this.url)
        .then((response) => response.json())
        .then((data) => (this.items = data));
    }
  },
  mounted() {
    this.fetchRecord()
  }
}
</script>

<style scoped>
.box-card {

  max-width: 600px;
  margin: 0 auto;

}
</style>