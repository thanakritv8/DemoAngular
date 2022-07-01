using System;
using System.Collections.Generic;

namespace DemoAngular.Models
{
    public class UserLogin
    {
        public string Username { get; set; }
        public string Password { get; set; }
    }

    public class ResultLogin
    {
        public Guid UserId { get; set; }
        public string Username { get; set; }
        public List<Role> Roles { get; set; }
    }
}

