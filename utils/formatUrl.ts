
export function formatURL(url: string) {
    const makeLowerCase = url.toLowerCase()
    const urlArr: string[] = makeLowerCase.split(' ')
    return urlArr.join('-')
}