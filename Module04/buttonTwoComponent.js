import { LightningElement, api } from 'lwc';

export default class ButtonTwoComponent extends LightningElement {

    @api buttonSelection = "Select";
    @api buttonName = "ButtonTwo";
    buttonState = "success";
   

    @api childReset()
    {
        this.buttonSelection = "Select";
        this.buttonState = "success";
    }

    handleClick(event)
    {
        const event1 = new CustomEvent('buttonclick',
        {
            bubbles: true,
            composed: true,
            detail: this.buttonSelection
        });
        this.dispatchEvent(event1);

        if (this.buttonSelection === "Select")
        {
            this.buttonSelection = "Deselect";
            this.buttonState = "destructive";
        }
        else
        {
            this.buttonSelection = "Select";
            this.buttonState = "success";
        }
    }
}