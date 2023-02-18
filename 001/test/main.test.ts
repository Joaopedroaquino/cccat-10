import axios from "axios";

test("Nao deve aceitar um pedido com cpf invalido", async function () {
    const input = {
        cpf: "302.170-27",

    }
    const response = await axios.post("http://localhost:3000/checkout", input);
    const output = response.data;
    expect(output.message).toBe("Invalid cpf");

});