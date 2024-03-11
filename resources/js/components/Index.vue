<template>
    <div class="d-flex justify-content-center align-items-center centered-links">
        <router-link :to="{ name: 'tasks.index' }" class="nav-link">Задачи</router-link>
    </div>

    <router-view :key="$route.fullPath"></router-view>
</template>


<script>

export default {
    name: "Index",

    data(){
        return{
            categories: [],
        }
    },

    mounted() {
        this.getCategories()
    },

    methods: {
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
    }
}
</script>


<style>

.nav-link {
    margin: 0 10px;
    color: #333;
    font-weight: bold;
}

</style>
