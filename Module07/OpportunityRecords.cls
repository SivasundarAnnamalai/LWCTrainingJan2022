public class OpportunityRecords 
{
	public OpportunityRecords() {}
    
    @AuraEnabled
    public static List<Opportunity> getRelatedOpps(ID accId, String str){
        try 
        {            
            str = '%'+str+'%';
            return [select  Id, Name, Amount, StageName From  Opportunity where  AccountID = :accID AND  Name LIKE :str];
        } 
        catch (Exception e) 
        {
            throw new AuraHandledException(e.getMessage());
        }
    }
}