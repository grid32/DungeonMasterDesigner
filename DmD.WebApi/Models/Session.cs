using System.Collections.Generic;

namespace DmD.WebApi.Models
{
    public class Session
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public Campaign Campaign { get; set; }

        public Map Map { get; set; }

        public List<ApplicationUser> Users { get; set; }
    }
}