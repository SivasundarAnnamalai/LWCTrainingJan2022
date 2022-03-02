import { LightningElement, wire, api } from 'lwc';
import apexSearch from '@salesforce/apex/AccountsRecords.Search';
import getContacts from '@salesforce/apex/ContactsRecords.getContacts';

export default class RelatedRecordsComp extends LightningElement 
{
    searchValue = '';
    @api recordId;
    selectedAccount; 
    selected;
    contacts;

    @wire(apexSearch, { searchTerm: '$searchValue' }) accounts;

    handleSearch(event) 
    {       
        this.recordId = null;
        this.searchValue = event.target.value;       
    }

    handleReset()
    {
        searchValue = null;
        this.recordId = null;
        this.selectedAccount = null;
    }

    handleOnSelect(event)
    {        
        console.log('a',event.detail);
        this.recordId = event.detail;
        console.log('a',this.recordId);
        this.selectedAccount = this.accounts.data.find(account => account.Id === event.detail);
        
        getContacts({ accId: event.detail })
          .then(result => {            
            this.contacts = result;
          })
          .catch(error => {
            console.error('Error:', error);
        });
        console.log(this.contacts);
    }
}