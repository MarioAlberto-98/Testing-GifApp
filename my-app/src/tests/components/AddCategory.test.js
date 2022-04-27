import React from "react";
import { shallow } from "enzyme";
import { AddCategory } from "../../components/AddCategory";
import '@testing-library/jest-dom';

describe('Pruebas en <AddCategory />',()=>{
    
    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories}/>);

    beforeEach(()=>{
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories}/>);
    });

    test('debe de mostrarse correctamente', ()=>{
        expect(wrapper).toMatchSnapshot();
    })

    test('debe de cambiar la caja de texto', ()=>{
        //Busca la etiqueta <input/>
        const input = wrapper.find('input');
        //Se le pasa el valor 'Hola'
        const value = 'Hola';
        //input -> Se manda a llamar la etiqueta 
        //'change' -> se hace referencia a onChange
        //target/value -> Hace referencia al metodo que se manda llamar en onChange (e.target.value)
        input.simulate('change',{target:{value}});
        expect(wrapper.find('p').text().trim()).toBe(value);
    })

    test('No debe de portear la informacion con submit',()=>{

        wrapper.find('form').simulate('submit', {preventDefault(){}});
        expect(setCategories).not.toHaveBeenCalled();
    
    })
    test('debe de llamar el setCategoeries y limpia la caja de texto',()=>{
        const value = 'Hola Mundo';
        wrapper.find('input').simulate('change', {target: {value}});
        wrapper.find('form').simulate('submit', {preventDefault(){}});
        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledTimes(1);
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
        expect(wrapper.find('input').prop('value')).toBe('');

    })





})