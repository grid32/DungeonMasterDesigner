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
        [HttpGet]
        public List<Map> GetMaps()
        {
            var result = new List<Map>();

            result = _context.Maps.ToList();

            return result;
        }

        [Route("create")]
        [HttpPost]
        public Map CreateMap(Map map)
        {
            _context.Maps.Add(map);
            _context.SaveChanges();

            return map;
        }

        [Route("delete")]
        [HttpPost]
        public void DeleteMap(Map map)
        {
            _context.Maps.Remove(map);
            _context.SaveChanges();
        }

        [Route("{id}")]
        [HttpGet]
        public Map GetMap(int id)
        {
            return _context.Maps.Where(map => map.Id == id).FirstOrDefault();
        }
    }
}