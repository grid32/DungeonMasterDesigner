namespace DmD.WebApi.Migrations
{
    using System.Data.Entity.Migrations;

    internal sealed class Configuration : DbMigrationsConfiguration<DmD.WebApi.Models.DmdContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(DmD.WebApi.Models.DmdContext context)
        {

        }
    }
}
