import {shallow} from 'enzyme';
import React from 'react';
import  {GifGridItem} from '../../components/GifGridItem';


describe('Pruebas en <GifGridItem />', () => {
    //Se agregarn variables para comparar  
    const title='Un titulo';
    const url ='https://localhost/algo.jpg';
    //Se le pasan las valores al componente mediante las variables
    const wrapper = shallow(<GifGridItem title={title} url={url} />);
      
    test('debe de mostrart el componente correctamente', () =>{
       expect(wrapper).toMatchSnapshot();
    })
    test('debe de tener un parrafo con el title', ()=>{
        //Buscar la etiqueta <p>/p> 
        const p = wrapper.find('p');
        // Revisa el contenido de la etiqueta
        //text() -> Revisa que sea texto
        //trim() -> Quita espacios en el Texto
        expect(p.text().trim()).toBe(title);
    })
    test('debe de tener la imagen igual al url y alt de los props',()=>{
        //Se busca la etiqueta <img/>
        const img=wrapper.find('img');
        //console.log(img.prop('src'))
        //Busca la propiedades de la etiqueta <img/>  -> 'src' ,'alt'
        //Las comprara con el valor de la variable declarada arriba
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
    })
    test('debe de tener animate__fadeIn',()=>{
        //Busca la etiqueta <div></div>
        const div= wrapper.find('div');
        //Obtiene las clases de la etiqueta <div></div>
        const className=div.prop('className');
        //Se comparan todas las clases del <div></div>, y revisa si esta la clase 'animate__fadeIn'
        expect(className.includes('animate__fadeIn')).toBe(true);

    })
})