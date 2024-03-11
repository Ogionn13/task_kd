<template>

    <div>
        <div class="container w-75">
            <!--           //<user_error_block></user_error_block>-->
        </div>
        <div class="container mt-5 w-25">
            <h2 class="text-md-center text-bg-secondary">Новая задача</h2>
            <div class="mb-3">
                <input type="text" class="form-control" v-model="title" placeholder="Введите название задачи">
            </div>
            <div class="mb-3">
                <label>Описание задачи</label>
                <textarea class="form-control" v-model="description" placeholder="Введите описание задачи"></textarea>
            </div>
            <div class="mb-3">
                <label>Категория Задачи</label>
                <select class="form-control" v-model="category_id">
                    <option v-for="category in categories" :value="category.id">{{ category.title }}</option>
                </select>
            </div>
            <div class="mb-3 d-grid col-4">
                <input :disabled="!isDisabled" @click.prevent="store" class="btn btn-primary" type="submit"
                       value="Создать">
            </div>
        </div>
    </div>
</template>


<script>
//import User_error_block from "@/components/elements/user_error_block.vue";

export default {
    name: "CreateTask",
    //  components: {User_error_block},

    data() {
        return {
            title: null,
            description: null,
            category_id: null,
            categories: [],
            result: {'result': null, 'message': null}
        };
    },


    computed: {
        isDisabled() {
            return this.title && this.description && this.category_id
        },

    },

    mounted() {
        this.getCategories()
    },

    methods: {
        store() {
            console.log(this.category_id);
            console.log(this.description);
            console.log(this.title);
            axios.post('/api/tasks', {
                title: this.title,
                description: this.description,
                category_id: this.category_id
            }).then(response => {
                this.result = {'result': 'ok', 'message': "Задача создана"};
                setTimeout(() => {
                    this.result = {'result': null, 'message': null}
                    this.$router.push({name: 'tasks.index', params: {id: response.data.id}});
                }, 1500);
            }).catch(error => {
                this.result = {'result': 'error', 'message': error.response.data.message}
                setTimeout(() => {
                    this.result = {'result': null, 'message': null}
                }, 7000);
            })
        },
        getCategories() {
            axios.get('/api/categories')
                .then(response => {
                    console.log(response.data)
                    this.categories = response.data;
                })
                .catch(error => {
                    console.error('Ошибка получения категорий', error);
                });
        },
    },

};
</script>


<style scoped>

</style>
