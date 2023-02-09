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
    "406.302.170-27"

])("Deve testar um CPF invalido", function (cpf) {
    const isValid = validate(cpf);
    expect(isValid).toBeFalsy();

});

test("Deve testar um CPF invalido com todos os digitos iguais", function () {
    const isValid = validate("111.111.111-11");
    expect(isValid).toBeFalsy();

});