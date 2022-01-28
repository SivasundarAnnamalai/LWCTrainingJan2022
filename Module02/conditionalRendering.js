import { LightningElement } from 'lwc';

export default class ConditionalRendering extends LightningElement {

    isAddressSame=false;
    currentAddrLine1;
    currentAddrLine2;
    currentAddrLandmark;
    currentAddrZipCode;  

    handlePerAddrLine1(event)
    {
        this.currentAddrLine1=event.target.value;
    }

    handlePerAddrLine2(event)
    {
        this.currentAddrLine2=event.target.value;
    }

    handlePerAddrLandmark(event)
    {
        this.currentAddrLandmark=event.target.value;
    }

    handlePerAddrZipCode(event)
    {
        this.currentAddrZipCode=event.target.value;
    }

    handleChange(event)
    {
        if (event.target.checked)
        {
            this.isAddressSame=true;
        }
        else
        {
            this.isAddressSame=false;            
        }
    }
}
