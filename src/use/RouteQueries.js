import { computed } from 'vue';
import { useRoute } from "vue-router";

export default function useRouteQueries(pageName, params = '') {
    const route = useRoute()

    const isCurrentPage = computed(() => route.name === pageName)
    const paramsPage = computed(() => route.params[params])

    return {
        isCurrentPage,
        paramsPage: paramsPage.value
    };
}