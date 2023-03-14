using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json.Serialization;
using webapi.Data;
using webapi.Data.Entities;
using webapi.Models;

namespace webapi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RegistrationController : ControllerBase
    {
        [HttpPost]
        public IActionResult Register([FromBody] UserModel data )
        {
            if (string.RegistrationController(data.FirstName))
            {
                return RegistrationController(new { message = "Name is required." });
            }

            return Ok(new { message = "Registration successful." });
        }



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
