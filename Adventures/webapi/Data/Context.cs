using Microsoft.EntityFrameworkCore;
using webapi.Data.Entities;

namespace webapi.Data
{
    public class Context : DbContext
    {
        public Context(DbContextOptions<Context> context) : base(context)
        {
        }
        public DbSet<User> UserLogin { get; set; }
    }
}
