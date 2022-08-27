using DbExecutor;
using SecurityBLL;
using System;
using System.Web.Mvc;

namespace SB.UI.Controllers
{

    public class LoginController : Controller
    {
        [HttpGet]
        public JsonResult GetLoginStatus(string user_name, string password)
        {
            try
            {
                var LoginStatusList = Facade.LoginBLL.GetLoginStatus(user_name, password);
                return Json(LoginStatusList, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {

                error_Log error = new error_Log();
                error.ErrorMessage = ex.Message;
                error.ErrorType = ex.GetType().ToString();
                error.FileName = "LoginController";
                new ErrorLogController().CreateErrorLog(error);
                return Json(null, JsonRequestBehavior.AllowGet);
            }

        }

        [HttpGet]
        public JsonResult GetUserDepartment(String user_id)
        {
            try
            {
                var UserDepartment = Facade.LoginBLL.GetUserDepartment(user_id);
                return Json(UserDepartment, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {

                error_Log error = new error_Log();
                error.ErrorMessage = ex.Message;
                error.ErrorType = ex.GetType().ToString();
                error.FileName = "MyTaskController";
                new ErrorLogController().CreateErrorLog(error);
                return Json(null, JsonRequestBehavior.AllowGet);
            }

        }
    }
}