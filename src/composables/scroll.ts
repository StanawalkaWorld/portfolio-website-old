export const useSmoothScroll = () => {
    function scrollTo(elem: string, position?: ScrollLogicalPosition): void {
        document.querySelector(elem)?.scrollIntoView({ behavior: "smooth", block: (position || "center") });
    }

    return {
        scrollTo
    }
}