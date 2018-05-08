using DmD.WebApi.Models;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;

namespace DmD.WebApi.Controllers
{
    [RoutePrefix("campaigns")]
    public class CampaignController : ApiController
    {
        [Route("mine")]
        public List<Campaign> GetMyCampaigns()
        {
            List<Campaign> campaigns;
            using (var context = new DmdContext())
            {
                campaigns = context.Campaigns.Where(c => c.Owner == RequestContext.Principal.Identity.Name).ToList();
            }

            campaigns.Add(new Campaign()
            {
                Id = 0,
                Name = "Test",
                Owner = "p.fraser@live.com",
                CurrentMapId = 0,
                Map = new Map()
            });
            return campaigns;
        }
    }
}
