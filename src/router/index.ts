import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/HomePage.vue'
import MatchedActivities from '@/views/MatchedActivities.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            name: 'HomePage',
            path: '/',
            component: HomePage,
        },
        {
            name: 'MatchedActivities',
            path: '/activities',
            component: MatchedActivities,
        }
    ],
});

export default router;
