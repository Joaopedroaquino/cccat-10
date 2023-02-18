// @ts-nocheck

function calculateDigit(cpf, factor) {
    let total = 0
    for (const digit of cpf) {
        if (factor > 1) total += parseInt(digit) * factor--;
    }
    const rest = total % 11
    return (rest < 2) ? 0 : 11 - rest
}

export function validate(cpf) {
    if (!cpf) return false;
    cpf = cpf.replace(/\D/g, "")
    if (cpf.length !== 11) return false;
    if (cpf.split("").every(c => c === cpf[0])) return false;
    const dg1 = calculateDigit(cpf, 10);
    const dg2 = calculateDigit(cpf, 11);
    let nDigVerific = cpf.substring(cpf.length - 2, cpf.length);
    const nDigResult = "" + dg1 + "" + dg2;
    return nDigVerific == nDigResult;
}


