using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json.Serialization;

namespace webapi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
       





        //public LoginController(Context context)
        //{
        //    _context = context;
        //}

        ////Get Endpoint Action Method
        //[HttpGet]
        //public async Task<IActionResult> Get()
        //{
        //    //The 'ToListAsync()' method fetches all records from the database asynchronously.
        //    var users = await _context.UserLogin.ToListAsync();
        //    //The 'Ok()' method return the success response.
        //    return Ok(users);
        //}
    }
}
