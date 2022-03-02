public class ContactsRecords 
{
	@AuraEnabled(cacheable=true)
    public static List<Contact> getContacts(Id accId)
    {
        try 
        {
            System.debug(accId);
            
                List<Contact> contactList = new List<Contact>([select Id, FirstName, Account.Name, Department, Email from Contact where AccountId = :accID]);
                System.debug(contactList);
                return contactList;
        } 
        catch (Exception e) 
        {
            throw new AuraHandledException(e.getMessage());
        }
    }
    
    @AuraEnabled(cacheable=true)
    public static List<Contact> getContactsList()
    {
        try 
        {
            return [select Id, Name, Account.Name, Department, MobilePhone, Email from Contact];
        } 
        catch (Exception e) 
        {
            throw new AuraHandledException(e.getMessage());
        }
    }
}