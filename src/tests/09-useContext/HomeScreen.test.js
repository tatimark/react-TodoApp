import React from 'react';
import { shallow, mount } from 'enzyme';
import { HomeScreen } from '../../components/09-useContext/HomeScreen';
import { UserContext } from '../../components/09-useContext/UserContext';



describe('Pruebas en HomeScreen', () => {

    const user = {
        name:'Tati',
        email: 'tatimark@hotmail.com'
    }

    const wrapper = mount( 
        <UserContext.Provider value={{
            user: user
        }}>
        <HomeScreen />
        </UserContext.Provider>
     );
    test('debe de mostar el componente correctamente ', () => {
        expect( wrapper ).toMatchSnapshot();
    })



})