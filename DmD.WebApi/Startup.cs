﻿using Microsoft.Owin;
using Owin;

[assembly: OwinStartup(typeof(DmD.WebApi.Startup))]

namespace DmD.WebApi
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
