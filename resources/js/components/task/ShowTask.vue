<template>
    <div v-if="task">
        <header class="d-flex justify-content-center mt-4">
            <h1 contenteditable="true" ref="newTitle" @blur="editTitle">{{ task.title }}</h1>
        </header>
        <div class="container mt-3 w-75">
            <div>
                <h3>Описание задачи</h3>
                <p class="mr-5" contenteditable="true" ref="newDescription" @blur="editDescription">
                    {{ task.description }}</p>
            </div>
            <div class="d-flex flex-column justify-content-center">
                <div class="d-flex align-items-center">
                    <div class="d-grid col-2">
                        <label>Категория задачи:</label>
                    </div>
                    <select class="form-control w-25 border-transparent" @change="updateCategory"
                            v-model="task.category_id">
                        <option v-for="category in categories" :value="category.id">{{ category.title }}</option>
                    </select>
                </div>
            </div>
        </div>
    </div>
</template>

<script>


export default {
    name: "ShowTask",

    data() {
        return {
            task: null,
            categories: []
        };
    },

    mounted() {
        this.getTaskById();
        this.getCategories()
    },


    methods: {
        editTask(data) {
                    axios.patch('/api/tasks/' + this.task.id, data)
        },

        editTitle() {
            if (this.$refs.newTitle.textContent !== this.task.title) {
                this.task.title = this.$refs.newTitle.textContent
                this.editTask({title: this.$refs.newTitle.textContent}, 'Изменено название задачи');
            }
        },


        editDescription() {
            if (this.$refs.newDescription.textContent !== this.task.description) {
                this.task.description = this.$refs.newDescription.textContent
                this.editTask({description: this.$refs.newDescription.textContent}, 'Изменено описание задачи ');
            }
        },

        updateCategory() {
            this.editTask({category_id: this.task.category_id}, 'изменена категория задачи');
        },

        getCategories() {
            axios.get('/api/categories')
                .then(response => {
                    console.log(response.data)
                    this.categories = response.data;
                })
        },

        getTaskById() {
                    axios.get('/api/tasks/' + this.$route.params.id)
                        .then(response => {
                            this.task = response.data;
                        })
        },
    },
};
</script>

<style scoped>
</style>
