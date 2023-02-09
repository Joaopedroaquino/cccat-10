import { validate } from "../src/validator";

test("Deve testar um CPF valido", function(){
   const isValid = validate("407.302.170-27");
    expect(isValid).toBeTruthy();

});

test("Deve testar um CPF invalido", function(){
    const isValid = validate("406.302.170-27");
     expect(isValid).toBeFalsy();
 
 });