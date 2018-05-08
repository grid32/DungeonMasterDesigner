namespace DmD.WebApi.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddedCampaignname : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Campaigns", "Name", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.Campaigns", "Name");
        }
    }
}
