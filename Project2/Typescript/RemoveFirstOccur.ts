function removeFirstOccurrence(str: string, search: string): string {
    return str.replace(search, "");
}
console.log(removeFirstOccurrence("Hello world", "ell"));