import { LightningElement, api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

import NAME_FIELD from '@salesforce/schema/Account.Name';
import REVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';

export default class QuickCreate extends LightningElement {
    fields = [NAME_FIELD, REVENUE_FIELD, INDUSTRY_FIELD];
    
    viewAllAccountFields = false; 
    viewAllOpportunityFields = false; 
    viewAllContactFields = false; 

    accountButtonLabel = 'View All Account Fields';
    opportunityButtonLabel = 'View All Opportunity Fields';
    contactButtonLabel = 'View All Contact Fields';

    handleSuccess(event) {
        const evt = new ShowToastEvent({
            title: 'Record' +' created',
            message: 'Record Id {1}',
            messageData: [
                'Salesforce',
                {
                    url: 'https://ust-1f2-dev-ed.lightning.force.com/'+event.detail.id,
                    label: event.detail.id
                }
            ],
            variant: 'success',
        });
        this.dispatchEvent(evt);
        
        const fields = this.template.querySelectorAll('lightning-input-field');
        fields.forEach(element => {
            element.reset();
        });
    }
    handleOnClickAccountButton() 
    {
        this.viewAllAccountFields = (this.viewAllAccountFields == true) ? false : true;
        this.accountButtonLabel = (this.accountButtonLabel == 'View All Account Fields') ? 'Hide Fields' : 'View All Account Fields';
    }

    handleOnClickContactButton() 
    {
        this.viewAllContactFields = (this.viewAllContactFields == true) ? false : true;
        this.contactButtonLabel = (this.contactButtonLabel == 'View All Contact Fields') ? 'Hide Fields' : 'View All Contact Fields';
    }

    handleOppFields() 
    {
        this.viewAllOpportunityFields = (this.viewAllOpportunityFields == true) ? false : true;
        this.opportunityButtonLabel = (this.opportunityButtonLabel == 'View All Opportunity Fields') ? 'Hide Fields' : 'View All Opportunity Fields';
    }

    handleReset()
    {
        const fields = this.template.querySelectorAll('lightning-input-field');
        fields.forEach(element => {
            element.reset();
        });
    }
}