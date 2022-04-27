//Documentacion library-react-hooks
//      https://react-hooks-testing-library.com/
//Libreria para testear Hooks import { renderHook } from "@testing-library/react-hooks";
import { renderHook } from "@testing-library/react-hooks";
import { useFetchGifs } from "../../hooks/useFetchGifs";
describe('Pruebas en el hook useFetchGifs', ()=>{
    
    //Asi se prueba un hook creado
    /*test('debe de tornar el estado inicial', ()=>{  
 //renderHook() -> Lo que hace es para renderizar o cree un componente vistual y ahi colocar nuestro custome hook
//Para usarlo, nosotros mandamos llamar a una funcion anonima como esto:
//renderHook(() => useFetchGifs('One Punch'))
        const {result} = renderHook(() => useFetchGifs('One Punch'));
        const {data,loading} = result.current;
        expect(data).toEqual([]);
        expect(loading).toBe(true);
    })*/

 // La libreria afecta a todos los testing al primer momento en la que se usa
    test('debe de tornar el estado inicial', async()=>{
        const {result, waitForNextUpdate} = renderHook(() => useFetchGifs('One Punch'));
        //Se hace destructutracion  con los datos 'data' y 'loading'

        const {data,loading} = result.current;
        await waitForNextUpdate();
        expect(data).toEqual([]);
        expect(loading).toBe(true);
    })
    test('debe de retornar un arreglo de img y el loading en false', async()=>{
        const {result, waitForNextUpdate} = renderHook(() =>useFetchGifs('One Punch'));
        await waitForNextUpdate();
             //Se hace destructutracion  con los datos 'data' y 'loading'
             //Se obtiene 'data' y 'loading' mediante result.current
        const {data, loading} =result.current;
        expect(data.length).toBe(10);
        expect(loading).toBe(false);


    })

})