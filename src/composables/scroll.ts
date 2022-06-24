export const useSmoothScroll = () => {
    function scrollTo(elem: string): void {
        document.querySelector(elem)?.scrollIntoView({ behavior: "smooth" });
    }

    return {
        scrollTo
    }
}