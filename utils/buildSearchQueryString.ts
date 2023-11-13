type FilterObject = {
    [key: string]: string | undefined
}

export const buildSearchQueryString = (filters: FilterObject) => {
    const queryList = Object.entries(filters)
    .filter(([_, value]) => Boolean(value))
    .map(([key, value], index) => (index > 0 ? `&${key}=${value}`: `${key}=${value}`))

    return queryList.join("")
}