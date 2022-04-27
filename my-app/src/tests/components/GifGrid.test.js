import React from "react";
import '@testing-library/jest-dom';
import { GifGrid } from "../../components/GifGrid"
import {shallow} from 'enzyme';
import { useFetchGifs } from '../../hooks/useFetchGifs';


//Se hace el mock del componente useFetchGifs con el Path
jest.mock('../../hooks/useFetchGifs');

describe('Pruebas en el <GifGrid />',()=>{
    const category = 'One Punch';
    //Prueba con el componente
    test('debe de mostrarse correctamente' , () => {
      
        useFetchGifs.mockReturnValue({
            data:[],
            loading:true
        });

        const wrapper=shallow(<GifGrid category={category} />);
        expect(wrapper).toMatchSnapshot();
    
    
    });
    test('debe de mostrar items cuando se cargan imagenes useFetchGifs',() =>{
        //Se crean dos objetos
        const gifs =[{
            id:'ABC',
            url:'https://localhost/cualquier/cosa.jpg',
            title:'Cualquiera cosa'
        },
        {
            id:'ABC',
            url:'https://localhost/cualquier/cosa.jpg',
            title:'Cualquiera cosa'
        }]
        //Se retornan los mocks de los componentes 
        useFetchGifs.mockReturnValue({
            data:gifs,
            loading:false
        }); 
        
        //Se manda llamar el componente 
        const wrapper=shallow(<GifGrid category={category} />);
        //Se toma foto del codigo con toMatchSnapshot
        expect(wrapper).toMatchSnapshot();
        //Se compara si existe la etiqueta p en el componente GifGrid
        expect(wrapper.find('p').exists()).toBe(false);
        //Se comparan cuantos objetos existen con los propuestos
        //Se manda llamar el componente como se muestra en el codigo
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
  


    })

})