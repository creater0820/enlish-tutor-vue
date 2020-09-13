<template>
  <div id="app">
    <input placeholder="タスクを入力" v-model="value" />
    <button @click="add">追加</button>
    <ul class="show-list">
      <li v-for="item in items" :key="item.id">
        <input type="radio" name="show" :id="item.id" :value="item.value" v-model="show" />
        <label :for="item.id">{{item.text}}</label>
      </li>
    </ul>
    <ul class="task-list">
      <li v-if="showTasks.length <= 0">タスクなし</li>
      <li v-for="(task, index) in showTasks" :key="index">
        <input type="checkbox" v-model="task.done" />
        <span :class="{'line-through': task.done}">{{task.task}}</span>
        <a @click="del(index)">削除</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  el: "#app",
  data() {
    return {
      items: [
        { id: "all", value: 0, text: "すべて" },
        { id: "doing", value: 1, text: "未完了" },
        { id: "done", value: 2, text: "完了" }
      ],
      tasks: [],
      value: "",
      show: 0
    };
  },
  methods: {
    add() {
      this.tasks.push({
        task: this.value,
        done: false
      });
      this.value = "";
    },
    del(index) {
      if (confirm("削除しますか？")) {
        this.tasks.splice(index, 1);
      }
    }
  },
  computed: {
    showTasks() {
      switch (this.show) {
        case 0:
          return this.tasks;
        case 1:
          return this.tasks.filter(e => !e.done);
        case 2:
          return this.tasks.filter(e => e.done);
        default:
          return [];
      }
    }
  }
};
</script>

<style scoped>
div {
  border: 1px solid blue;
}
h1 {
  color: blue;
}
p {
  color: blue;
}
</style>