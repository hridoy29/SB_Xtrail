using DbExecutor;
using SecurityBLL;
using System;
using System.Web.Mvc;

namespace SB.UI.Controllers
{
    public class IndexController : Controller
    {
        [HttpGet]
        public JsonResult GetAdminAccess(string user_id)
        {
            try
            {
                var AdminList = Facade.IndexBLL.GetAdminAccess(user_id);
                return Json(AdminList, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {

                error_Log error = new error_Log();
                error.ErrorMessage = ex.Message;
                error.ErrorType = ex.GetType().ToString();
                error.FileName = "IndexController";
                new ErrorLogController().CreateErrorLog(error);
                return Json(null, JsonRequestBehavior.AllowGet);
            }

        }
    }
}