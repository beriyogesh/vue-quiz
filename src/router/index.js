import { createRouter,createWebHistory } from "vue-router";
import App from "../App.vue";
import NotFound from "@/components/pages/NotFound.vue";
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: App
        },
        {
            path:"/:catchall(.*)*",
            name:"not-found",
            component: NotFound,
        }
    ]
})
export default router;