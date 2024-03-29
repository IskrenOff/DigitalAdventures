﻿using Newtonsoft.Json;

namespace webapi.Data.Entities
{
    public class Register
    {
        public int Id { get; set; }
        public string? FirstName { get; set; }
        public string? LastName { get; set; }
        public string? Email { get; set; }
        public string? Gender { get; set; }
        public string? UserName { get; set; }
        public string? Password { get; set; }
     }
}
