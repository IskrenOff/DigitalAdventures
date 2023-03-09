using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using webapi.Data;

namespace webapi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly Context _context;

        public UserController(Context context)
        {
            _context = context;
        }

        //Get Endpoint Action Method
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            //The 'ToListAsync()' method fetches all records from the database asynchronously.
            var users = await _context.UserLogin.ToListAsync();
            //The 'Ok()' method return the success response.
            return Ok(users);
        }
    }
}
