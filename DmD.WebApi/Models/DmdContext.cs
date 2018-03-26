using System.Data.Entity;

namespace DmD.WebApi.Models
{
    public class DmdContext : DbContext
    {
        public DmdContext() : base("name=DmdConnection") {}

        public DbSet<Map> Maps { get; set; }
    }
}