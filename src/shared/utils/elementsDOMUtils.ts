export function getElementSizeById(id: string) {
    const element = document.getElementById(id);
    return {width: element?.offsetWidth, height: element?.offsetHeight}
}