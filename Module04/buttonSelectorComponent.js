import { LightningElement, api } from 'lwc';

export default class ButtonSelectorComponent extends LightningElement {

    buttonOneSelection = "Deselected";
    buttonTwoSelection = "Deselected";
    buttonThreeSelection = "Deselected";

    @api parentReset()
    {
        this.buttonOneSelection = "Deselected";
        this.buttonTwoSelection = "Deselected";
        this.buttonThreeSelection = "Deselected";

        this.template.querySelector('c-button-one-component').childReset();
        this.template.querySelector('c-button-two-component').childReset();
        this.template.querySelector('c-button-three-component').childReset();
    }

    handleChild(event)
    {
        console.log('Came into handleChild');
        switch(event.target.buttonName)
        { 
            case "ButtonOne":
                console.log('Came into switch one');
                event.target.buttonSelection === "Select" ? this.buttonOneSelection = "Selected" : this.buttonOneSelection = "Deselected";
                break;
            case "ButtonTwo":
                console.log('Came into switch two');
                event.target.buttonSelection === "Select" ? this.buttonTwoSelection = "Selected" : this.buttonTwoSelection = "Deselected";
                break;
            case "ButtonThree":
                console.log('Came into switch three');
                event.target.buttonSelection === "Select" ? this.buttonThreeSelection = "Selected" : this.buttonThreeSelection = "Deselected";
                break;
        }
    }
}