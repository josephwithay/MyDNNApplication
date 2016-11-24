using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(UserListApplication.Startup))]
namespace UserListApplication
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
