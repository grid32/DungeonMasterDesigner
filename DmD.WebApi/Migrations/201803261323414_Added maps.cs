namespace DmD.WebApi.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Addedmaps : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Maps",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.Maps");
        }
    }
}
