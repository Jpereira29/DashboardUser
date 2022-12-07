export function welcome() {
    let date = new Date()
    if (date.getHours() < 12)
        return "Bom dia,"
    else if (date.getHours() < 18)
        return "Boa tarde,"
    else "Boa noite"

    return "Olá,"
}