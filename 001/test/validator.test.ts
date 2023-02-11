import { validate } from "../src/validator";

test.each([
    "407.302.170-27",
    "684.053.160-00",
    "746.971.314-01"])("Deve testar um CPF valido", function (cpf) {
        const isValid = validate(cpf);
        expect(isValid).toBeTruthy();

    });

test.each([
    "302.170-27",
    "222.053.160-00",
    "55.971.314-01",
    "406.302.170-27",
    "404446.304442.1704-2447",
    null,
    undefined])("Deve testar um CPF invalido", function (cpf) {
        const isValid = validate(cpf);
        expect(isValid).toBeFalsy();

    });

test.each([
    "111.111.111-11",
    "222.222.222-22",
    "333.333.333-33"])("Deve testar um CPF invalido com todos os digitos iguais", function (cpf) {
        const isValid = validate(cpf);
        expect(isValid).toBeFalsy();

    });