using SecurityEntity.SECURITY.SecurityDAL;
using SecurityEntity.SECURITY.SecurityEntity;
using System;
using System.Collections.Generic;

namespace SecurityEntity.SECURITY.SecurityBLL
{
    public class DashboardBLL
    {

        public DashboardBLL()
        {

            DashboardDAO = new DashboardDAO();
        }

        public DashboardDAO DashboardDAO { get; set; }

        public List<DashboardInfo> GetDashboardInfo(DateTime from_date, DateTime to_date, String dept_id = null)
        {
            try
            {
                return DashboardDAO.GetDashboardInfo(from_date, to_date, dept_id);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }


        public List<DashboardInfo> GetThisMonthTaskStatusList(DateTime from_date, DateTime to_date, String dept_id = null)
        {
            try
            {
                return DashboardDAO.GetThisMonthTaskStatusList(from_date, to_date, dept_id);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }



    }
}
