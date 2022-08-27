using DbExecutor;
using SecurityBLL;
using System;
using System.Web.Mvc;

namespace SB.UI.Controllers
{
    public class DashboardController : Controller
    {
        // GET: Dashboard
        [HttpGet]
        public JsonResult GetDashboardInfo(DateTime from_date, DateTime to_date, String dept_id = null)
        {
            try
            {
                var InfoList = Facade.DashboardBLL.GetDashboardInfo(from_date, to_date, dept_id);
                return Json(InfoList, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {

                error_Log error = new error_Log();
                error.ErrorMessage = ex.Message;
                error.ErrorType = ex.GetType().ToString();
                error.FileName = "DashboardController";
                new ErrorLogController().CreateErrorLog(error);
                return Json(null, JsonRequestBehavior.AllowGet);
            }

        }

        [HttpGet]
        public JsonResult GetThisMonthTaskStatusList(DateTime from_date, DateTime to_date, String dept_id = null)
        {
            try
            {
                var InfoList = Facade.DashboardBLL.GetThisMonthTaskStatusList(from_date, to_date, dept_id);
                return Json(InfoList, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {

                error_Log error = new error_Log();
                error.ErrorMessage = ex.Message;
                error.ErrorType = ex.GetType().ToString();
                error.FileName = "DashboardController";
                new ErrorLogController().CreateErrorLog(error);
                return Json(null, JsonRequestBehavior.AllowGet);
            }

        }
    }
}