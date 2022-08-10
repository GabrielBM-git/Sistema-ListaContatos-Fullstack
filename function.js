
//-------------------------------------------------------------------------------------------------
// Função que recebe uma string de colchetes como entrada e determina se a ordem dos colchetes é válida. 
// Obs:. Um colchete é considerado qualquer um dos seguintes caracteres: (, ), {, }, [, or ].
//-------------------------------------------------------------------------------------------------

function Check(expression) {

    //---------------------------------------------------------------------------------------------
    
    var exp = Array.from(expression);

    var exps = [];

    var valid = true;

    //---------------------------------------------------------------------------------------------
    
    for(let i = 0; i < exp.length; i++) {

        //-----------------------------------------------------------------------------------------
        // é válida se as seguintes condições forem atendidas:
        // ● Não contém colchetes sem correspondência.
        // ● O subconjunto de colchetes dentro dos limites de um par de colchetes 
        //   correspondente também é um par de colchetes correspondentes.

        switch(exp[i]) {

            //-------------------------------------------------------------------------------------

            case '[':
                exps.push('[');
                break;

            case ']':
                if(exps[exps.length - 1] == '[')
                    exps.pop('[');
                else
                    valid = false;
                break;

            //-------------------------------------------------------------------------------------

            case '{':
                exps.push('{');
                break;

            case '}':
                if(exps[exps.length - 1] == '{')
                    exps.pop('{');
                else
                    valid = false;
                break;

            //-------------------------------------------------------------------------------------

            case '(':
                exps.push('(');
                break;

            case ')':
                if(exps[exps.length - 1] == '(')
                    exps.pop('(');
                else
                    valid = false;
                break;

        }
        
    }

    //---------------------------------------------------------------------------------------------
    
    return expression + ' => ' + ((exps.length == 0) ? valid : false);

}

//-------------------------------------------------------------------------------------------------

// Exemplos:
// ● (){}[] é válido
console.log(Check('(){}[]'));

// ● [{()}](){} é válido
console.log(Check('[{()}](){}'));

// ● []{() não é válido
console.log(Check('[]{()'));

// ● [{)] não é válido
console.log(Check('[{)]'));

//-------------------------------------------------------------------------------------------------
