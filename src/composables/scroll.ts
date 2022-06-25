export const useSmoothScroll = () => {
    function scrollTo(elem: string): void {
        document.querySelector(elem)?.scrollIntoView({ behavior: "smooth", block: "center" });
    }

    return {
        scrollTo
    }
}