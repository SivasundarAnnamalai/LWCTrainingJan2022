import { LightningElement, api } from 'lwc';
import apexSearch from "@salesforce/apex/OpportunityRecords.getRelatedOpps";
export default class ShowOpptyRelatedComp extends LightningElement {
    @api recordId;
    opportunities; 
    selectedOpp; 
    currentState; 
    search = true;
    steps = [
        {label : 'Prospecting',          value: '1'},
        {label : 'Qualification',        value: '2'},
        {label : 'Needs Analysis',       value: '3'},
        {label : 'Value Proposition',    value: '4'},
        {label : 'Id. Decision Makers',  value: '5'},
        {label : 'Perception Analysis',  value: '6'},
        {label : 'Proposal/Price Quote', value: '7'},
        {label : 'Negotiation/Review',   value: '8'},
        {label : 'Closed Won',           value: '9'},
        {label : 'Closed Lost',          value: '10'}
        ];

    handleSearch(event) 
    {
        this.search = true;
        apexSearch({ str: event.target.value , accId : this.recordId })
          .then(result => {
            console.log('Result', result);
            this.opportunities = result;
          })
          .catch(error => {
            console.error('Error:', error);
        });
    }

    handleSelect1(event)
    {
        this.search = false;
        this.selectedOpp = this.opportunities.find(opp => opp.Id === event.detail);
        this.currentState = this.steps.find(step => step.label == this.selectedOpp.StageName).value;
    }
}