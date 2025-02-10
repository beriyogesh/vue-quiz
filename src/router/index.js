import { createRouter,createWebHistory } from "vue-router";
import NotFound from "@/components/pages/NotFound.vue";
import QuizesView from "../views/QuizesView.vue";
import QuizView from "@/views/QuizView.vue";
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: QuizesView
        },
        {
            path:"/:catchall(.*)*",
            name:"not-found",
            component: NotFound,
        },
        {
            path:"/quiz/:id",
            name:"quiz",
            component: QuizView,
        }
    ]
})
export default router;