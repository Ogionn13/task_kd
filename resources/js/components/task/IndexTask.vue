<template>
    <div class="container mt-5 w-75">
        <h2 class="text-md-center text-bg-secondary">Все задачи</h2>
        <div class="d-flex flex-column justify-content-center">
            <div class="d-flex align-items-center">
                <div class="d-grid col-2">
                    <label>фильтр категории:</label>
                </div>
                <select class="form-control w-25 border-transparent" @change="selectTaskByCategory"
                        v-model="selectedCategory">
                    <option v-for="category in categories" :value="category.id">{{ category.title }}</option>
                </select>
            </div>
        </div>
        <div class="card-body table-responsive card p-1">
            <table class="table table-hover text-nowrap">
                <thead class="table-warning text-md-center border-3">
                <tr>
                    <th>Название</th>
                    <th>Категория</th>
                    <th>Дата создания</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="task in tasks" v-bind:key="task.id">
                    <td>
                        <router-link :to="{ name: 'tasks.show', params: { id: task.id }}"
                                     class="text-decoration-none text-dark">
                            {{ task.title }}
                        </router-link>
                    </td>
                    <td class="text-md-center">{{ task.category }}</td>
                    <td class="text-md-center">{{ task.created_at }}</td>
                </tr>
                </tbody>
            </table>
        </div>
        <input type="submit" @click.prevent="createTask" class="btn btn-primary" value="Добавить новую задачу">
    </div>
</template>

<script>

export default {
    name: "IndexTask",

    data() {
        return {
            tasks: [],
            categories: [],
            selectedCategory: null
        }
    },

    mounted() {
        this.getTasks();
        this.getCategories();
    },

    methods: {
        getTasks() {
            axios.get('api/tasks')
                .then(response => {
                    this.tasks = response.data;
                })
        },

        getCategories() {
            axios.get('api/categories')
                .then(response => {
                    console.log(response.data)
                    this.categories = response.data;
                })
        },
        selectTaskByCategory() {
            axios.get('api/tasks/select', {
                params: {
                    category_id: this.selectedCategory
                }
            })
                .then(response => {
                    this.tasks = response.data;
                })
        },

        createTask() {
            this.$router.push({name: 'tasks.create'})
        }
    }
};
</script>


<style scoped>
</style>
