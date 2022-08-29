using DbExecutor;
using SecurityEntity.SECURITY.SecurityBLL;

namespace SecurityBLL
{
    public static class Facade
    {


        
    
        public static LoginBLL LoginBLL { get { return new LoginBLL(); } }
       

   

        public static error_LogBLL ErrorLog { get { return new error_LogBLL(); } }

       
        public static DashboardBLL DashboardBLL { get { return new DashboardBLL(); } }
        public static IndexBLL IndexBLL { get { return new IndexBLL(); } }

    }
}