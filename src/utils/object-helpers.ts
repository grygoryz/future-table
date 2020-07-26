export const filterObjectByKey = (item: { [k: string]: any }, filterKey: string): boolean => {
    for (let key in item) {
        const value = item[key];
        if (typeof value === "object")  filterObjectByKey(value, filterKey);

        if (value.toString().includes(filterKey)) return true;
    }

    return false;
};