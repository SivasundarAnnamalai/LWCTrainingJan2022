public class AccountsRecords 
{
    @AuraEnabled(Cacheable=true)
    public static List<Account>  Search(String searchTerm) 
    {
        try 
        {
            searchTerm = '%' + searchTerm + '%';
            
            if(searchTerm.length()>2)
            {
                return [select Id, Name, Type, AccountSource, Industry, AnnualRevenue from Account WHERE Name like :searchTerm ];
            }
            return null;
        } 
        catch (Exception e) 
        {
            throw new AuraHandledException(e.getMessage());
        }
    }

}