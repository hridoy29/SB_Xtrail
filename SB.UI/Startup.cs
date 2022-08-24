using Microsoft.Owin;
using Owin;

[assembly: OwinStartup(typeof(SB.UI.Startup))]

namespace SB.UI
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            //app.MapSignalR();
        }
    }
}
