using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using Microsoft.Identity.Client;
using Newtonsoft.Json.Serialization;
using System.Configuration;
using webapi.Data;

internal class Program
{
    
    private static void Main(string[] args)
    {
        var builder = WebApplication.CreateBuilder(args);

        // Add services to the container.

        builder.Services.AddControllers();
        // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
        builder.Services.AddEndpointsApiExplorer();
        builder.Services.AddSwaggerGen();
        //Register the Database context service for dependency injection
        builder.Services.AddDbContext<Context>(options =>
        {
            options.UseSqlServer(builder.Configuration.GetConnectionString("connString"));
        });
      

        var app = builder.Build();

        // Configure the HTTP request pipeline.
        if (app.Environment.IsDevelopment())
        {
            app.UseSwagger();
            app.UseSwaggerUI();
        }

        

        app.Run();
    }

    public Program(IConfiguration configuration)
    {
        Configuration = configuration;
    }

    public IConfiguration Configuration { get; }
    public void ConfigureServices(IServiceCollection services)
    {
        services.AddCors(c => c.AddPolicy("AllowOrigin", options => 
        options.AllowAnyOrigin()
        .AllowAnyMethod()
        .AllowAnyHeader()));

        //Json Serializer
        services.AddControllersWithViews()
        .AddNewtonsoftJson(options => options.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore)
        .AddNewtonsoftJson(options => options.SerializerSettings.ContractResolver = new DefaultContractResolver());

        services.AddControllers();
    }

    //This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
    public void Configure (IApplicationBuilder app, IWebHostEnvironment environment)
    {
        app.UseCors(options => options.AllowAnyOrigin()
        .AllowAnyMethod()
        .AllowAnyHeader());

        app.UseRouting();

        app.UseAuthorization();

        app.UseAuthorization();

        app.UseHttpsRedirection();

        app.UseEndpoints(endpoints =>{endpoints.MapControllers();});

    }
}