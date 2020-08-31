class computations{
    constructor(a,b){
        this.curr = a;
        this.prev = b;
        this.sym = '';
    }
    delegate(){
        // console.log(this.prev + this.curr);
        if(this.prev != '0')
        document.querySelector(".prev").innerHTML = this.prev + ' ' + this.sym;
        document.querySelector(".curr").innerHTML = this.curr;
    }
    number(value){
        if(this.curr === '0')
            this.curr = value;
        else
            this.curr = this.curr + value;

        this.delegate();
    }
    operator(op){
        if(this.curr == '' && op != 'AC')
            return;
        switch(op){
            case '+':
                if(this.prev == ''){
                    this.prev = this.curr;
                    this.curr = '';
                }else{
                    this.prev = '' + (parseFloat(this.prev) + parseFloat(this.curr));
                    this.curr = '';
                }
                this.sym = '+';
                break;
            
            case '-':
                if(this.prev == ''){
                    this.prev = this.curr;
                    this.curr = '';
                }else{
                    this.prev = '' + (parseFloat(this.prev) - parseFloat(this.curr));
                    this.curr = '';
                }
                this.sym = '-';
                break;
            
            case '÷':
                if(this.prev == ''){
                    this.prev = this.curr;
                    this.curr = '';
                }else{
                    this.prev = '' + (parseFloat(this.prev) / parseFloat(this.curr));
                    this.curr = '';
                }
                this.sym = '÷';
                break;

            case 'x':
                if(this.prev == ''){
                    this.prev = this.curr;
                    this.curr = '';
                }else{
                    this.prev = '' + (parseFloat(this.curr) * parseFloat(this.prev));
                    this.curr = '';
                }
                this.sym = 'x';
                break;

            case '•':
                if(!this.curr.includes('.')){
                    this.curr = this.curr + '.';
                }
                break;

            case '=':
                if(this.sym != ''){
                    this.operator(this.sym);
                    this.sym = '';
                    this.curr = this.prev;
                    this.prev = '';
                }
                break;
    
            case 'AC':
                this.curr = '0'
                this.prev = this.sym = '';
                break;
            
            case '%':
                if(this.prev == ''){
                    this.prev = this.curr;
                    this.curr = '';
                }else{
                    this.prev = '' + ((parseFloat(this.prev) * parseFloat(this.curr)) / 100);
                    this.curr = '';
                }
                this.sym = '%';
                break;
                              
        }
        this.delegate();
    }
}

const calc = new computations('0','');
calc.delegate();

// filtering out the operators and operands(i.e numbers)
function buttonClick(value){
    console.log(value);
    if(isNaN(parseFloat(value))){
        calc.operator(value);
    }else{
        calc.number(value);
    }
}


//setting up the event listeners

const query = document.querySelectorAll('button')
console.log(query)
window.onload=function(){
    query.forEach(element => {    
        element.addEventListener("click",function(event){
            buttonClick(event.target.innerHTML);
        });
    });
}
