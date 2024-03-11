
const routes = [


    {
        path: '/tasks',
        name: 'tasks.index',
        component: () => import('@/components/task/IndexTask.vue')
    },
    {
        path: '/tasks/create',
        name: 'tasks.create',
        component: () => import('@/components/task/CreateTask.vue')
    },
    {
        path: '/tasks/:id',
        name: 'tasks.show',
        component: () => import('@/components/task/ShowTask.vue')
    },
    {
        path: "/:pathMatch(.*)",
        redirect: { name: 'tasks.index'}
    }
];




export default routes;
