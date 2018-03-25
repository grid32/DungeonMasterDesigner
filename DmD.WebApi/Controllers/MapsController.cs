using DmD.WebApi.Models;
using System.Collections.Generic;
using System.Web.Http;

namespace DmD.WebApi.Controllers
{
    [RoutePrefix("maps")]
    public class MapsController : ApiController
    {
        [Route("index")]
        public List<Map> GetMaps()
        {
            var result = new List<Map>();

            result.Add(new Map() { Id = 1, Name = "Hello World" });

            return result;
        }
    }
}
