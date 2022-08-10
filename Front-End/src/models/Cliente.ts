import { Contato } from './Contato';

export class Cliente {

    public id: number = 0;

    //---------------------------------------------------------------------------------------------

    public nome: string = '';

    public grupo: string = '';

    //---------------------------------------------------------------------------------------------

    public contatos: Contato[] = [];

}