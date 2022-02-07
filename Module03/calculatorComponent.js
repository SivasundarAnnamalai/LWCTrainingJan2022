import { LightningElement } from 'lwc';

export default class CalculatorComponent extends LightningElement {
    result = '';
    statement = '';
    clrStatement = false;
    previousOperation = '';

    operations = {
        current: 0,
        '=': function()
        {
            return this.current;
        },
        '+': function(n)
        {
            this.current += parseInt(n);
            return this;
        },
        '-': function(n)
        {
            this.current -= parseInt(n);
            return this;
        },
        '*': function(n)
        {
            this.current *= parseInt(n);
            return this;
        },
        '/': function(n)
        {
            this.current /= parseInt(n);
            return this;
        }
    }

    get showResult()
    {
        return this.operations.current;
    }

    handleClick(event)
    {
        if (this.clrStatement)
        {
            this.statement = '';
            this.result = '';
            this.operations.current = 0;
            this.clrStatement = false;
        }

        this.statement = this.statement + event.target.label;
        if (event.target.label === "CLR")
        {
            this.result = '';
            this.statement = '';
            this.operations.current = 0;
        }
        else if (event.target.label === "+")
        {
            if (this.operations.current === 0)
            {
                this.operations.current = parseInt(this.result);
            }
            else
            {
                this.result = this.operations[this.previousOperation](this.result);
            }
            this.previousOperation = '+';
            this.result = '';
        }
        else if (event.target.label === "-")
        {
            if (this.operations.current === 0)
            {
                this.operations.current = parseInt(this.result);
            }
            else
            {
                this.result = this.operations[this.previousOperation](this.result);
            }
            this.previousOperation = '-';
            this.result = '';
        }
        else if (event.target.label === "*")
        {
            if (this.operations.current === 0)
            {
                this.operations.current = parseInt(this.result);
            }
            else
            {
                this.result = this.operations[this.previousOperation](this.result);
            }
            this.previousOperation = '*';
            this.result = '';
        }
        else if (event.target.label === "/")
        {
            if (this.operations.current === 0)
            {
                this.operations.current = parseInt(this.result);
            }
            else
            {
                this.result = this.operations[this.previousOperation](this.result);
            }
            this.previousOperation = '/';
            this.result = '';
        }
        else if (event.target.label === "=")
        {
            this.result = this.operations[this.previousOperation](this.result);
            this.result = this.operations['=']();
            this.clrStatement = true;
        }
        else{
            this.result = this.result + event.target.label;
            
        }
    }
}