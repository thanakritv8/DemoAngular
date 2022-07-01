using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DemoAngular.Models;
using DemoAngular.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace DemoAngular.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        [HttpPost]
        [Route("login")]
        [AllowAnonymous]
        public async Task<ActionResult<dynamic>> Login(UserLogin val)
        {

            if (val.Username != "admin" || val.Password != "admin123%")
            {
                return NotFound(new { message = "Username invalid" });
            }
            List<Role> lsRole = new List<Role>();
            Role role = new Role();
            role.RoleId = 1;
            role.Code = "user";
            lsRole.Add(role);
            ResultLogin resLogin = new ResultLogin();
            resLogin.UserId = Guid.Parse("42FDDCBE-60A7-4F7E-A619-59B5AFD81EB3");
            resLogin.Username = val.Username;
            resLogin.Roles = lsRole;
            var token = AuthService.CreateToken(resLogin);
            return new
            {
                user = resLogin,
                token = token
            };
        }

        [HttpGet]
        [Route("get-user-by-login")]
        [Authorize]
        public async Task<ActionResult<dynamic>> GetUserByLogin()
        {
            try
            {
                List<Role> lsRole = new List<Role>();
                Role role = new Role();
                role.RoleId = 1;
                role.Code = "user";
                lsRole.Add(role);
                ResultLogin resLogin = new ResultLogin();
                resLogin.UserId = Guid.Parse(User.Identity.Name);
                resLogin.Username = "admin";
                resLogin.Roles = lsRole;
                return new
                {
                    user = resLogin,
                };
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = ex.Message });
            }

        }
    }
}

