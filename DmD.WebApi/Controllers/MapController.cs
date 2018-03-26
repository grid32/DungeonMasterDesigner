using DmD.WebApi.Models;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;

namespace DmD.WebApi.Controllers
{
    [RoutePrefix("map")]
    public class MapController : ApiController
    {
        public DmdContext _context { get; set; }

        public MapController()
        {
            _context = new DmdContext();
        }

        [Route("all")]
        public List<Map> GetMaps()
        {
            var result = new List<Map>();

            result = _context.Maps.ToList();

            return result;
        }

        [Route("add")]
        public Map AddMap(Map map)
        {
            _context.Maps.Add(map);
            _context.SaveChanges();

            return map;
        }
    }
}
