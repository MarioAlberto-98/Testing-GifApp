import {getGifs} from '../../helpers/getGifs';


describe('Pruebas con getGifs Fetch', ()=>{
    test('debe de traer 10 elementos', async()=>{
        const gifs = await getGifs('One Punch');
        console.log(gifs);
        expect(gifs.length).toBe(10);
    })

   test('debe de traer 10 elementos pero sin parametro',async()=>{
        const gifs = await getGifs('');
        //Muestra un array vacio, ya que no se le esta mandando nada para buscar
        //Por consecuente no muestra nada
        console.log(gifs);
        //El test en 0 es correcto ya que no se le manda nada
        //Si se le agrega un numero va mostrar un fail en el test ya que no hay nada
        expect(gifs.length).toBe(0);

    })
})