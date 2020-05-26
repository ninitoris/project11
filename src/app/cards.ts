export class Cards{
    static id: number;
    
    cardId: number;
    status:Boolean;
    name:string;
    color:string;
    
    constructor(){
        Cards.id =0;
    }
    
}

export let cardsArray:Cards[]=[]