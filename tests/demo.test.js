
describe("Prueba en <DemoComponent />", ( ) => {
    test("Esta prueba no debe de fallar", () => {
        //  1. INICIALIZACION
        const message1 = "Hola Mundo";
      
        // 2. ESTIMULO
        const message2 = message1.trim();
      
        //  3. OBSERVAR EL COMPORTAMIENTO ... ESPERADO
        expect(message1).toBe(message2);
      });
      
})