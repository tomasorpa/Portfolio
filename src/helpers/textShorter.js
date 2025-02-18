export const textShorter = (text="") => {
    const shortText = (text.length > 17) ? text.slice(0, 31)+"..." : text
    return shortText
}