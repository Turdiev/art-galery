import { computed } from 'vue';
import { useMq } from 'vue3-mq';

export default function useMediaQueries() {
    const mq = useMq();

    const isMobile = computed(() => mq.current === 'mobile');
    const isTablet = computed(() => mq.current === 'tablet');

    return {
        isMobile,
        isTablet,
    };
}
