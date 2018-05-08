namespace DmD.WebApi.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Campaignandmapinit : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Campaigns",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Owner = c.String(),
                        CurrentMapId = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Maps", t => t.CurrentMapId, cascadeDelete: true)
                .Index(t => t.CurrentMapId);
            
            AddColumn("dbo.Maps", "Owner", c => c.String());
            AddColumn("dbo.Maps", "MapImageUrl", c => c.String());
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Campaigns", "CurrentMapId", "dbo.Maps");
            DropIndex("dbo.Campaigns", new[] { "CurrentMapId" });
            DropColumn("dbo.Maps", "MapImageUrl");
            DropColumn("dbo.Maps", "Owner");
            DropTable("dbo.Campaigns");
        }
    }
}
