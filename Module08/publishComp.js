import { LightningElement, wire } from 'lwc';
import {MessageContext, publish} from 'lightning/messageService';
import conCreated from '@salesforce/messageChannel/conCreated__c';
export default class PublishComp extends LightningElement 
{
    @wire(MessageContext) messageContext;

    handleSuccess(event) 
    {
        const payload = { contact: event.detail.id };
        publish(this.messageContext, conCreated, payload);
    }

    handleReset()
    {
        const fields = this.template.querySelectorAll('lightning-input-field');
        fields.forEach(element => {
            element.reset();
        });
    }
}