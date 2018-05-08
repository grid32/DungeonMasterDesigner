using System.ComponentModel.DataAnnotations.Schema;

namespace DmD.WebApi.Models
{
    public class Campaign
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Owner { get; set; }

        public int CurrentMapId { get; set; }

        [ForeignKey(nameof(CurrentMapId))]
        public Map Map { get; set; }
    }
}