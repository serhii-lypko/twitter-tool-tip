export default function removeElementsByClassName(className){
    const elements = document.getElementsByClassName(className)

    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0])
    }
}
