const telRegex = (text:string) => {
    const regex = "([0-9]{2,3})?(\([0-9]{2}\))([0-9]{4,5})([0-9]{4})"
    const result = text.replace(regex, "($1) $2-$3")
    return result
}

export {telRegex}