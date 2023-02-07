import { getHeroeById , getHeroesByOwner} from '../../src/base-pruebas/08-imp-exp';

describe('Pruebas en 08-imp-exp', () => { 
    test('getHeroeById debe de retornar un héroe por ID', () => { 
        const id = 1;
        const hero = getHeroeById(id);
        expect(hero).toEqual(    {
            id: 1,
            name: 'Batman',
            owner: 'DC'
        })

        
     })

     test('getHeroeById debe de retornar un undefine si no existe', () => { 
        const id = 100;
        const hero = getHeroeById(id);
        expect(hero).toBeFalsy();

        
     })

     test('getHeroeByOwner debe de retornar un heroe por OWNER', () => { 
        const owner = 'DC' 
        const hero = getHeroesByOwner(owner);
        expect(hero.length).toBe(3);

        
     })
 })