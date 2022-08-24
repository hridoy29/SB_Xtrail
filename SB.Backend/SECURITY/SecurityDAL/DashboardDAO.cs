using DbExecutor;
using SecurityEntity.SECURITY.SecurityEntity;
using System;
using System.Collections.Generic;
using System.Data;

namespace SecurityEntity.SECURITY.SecurityDAL
{
    public class DashboardDAO
    {

        private static volatile DashboardDAO instance;
        private static readonly object lockObj = new object();

        private readonly DBExecutor dbExecutor;

        public DashboardDAO()
        {
            //dbExecutor = DBExecutor.GetInstanceThreadSafe;
            dbExecutor = new DBExecutor();
        }

        public static DashboardDAO GetInstanceThreadSafe
        {
            get
            {
                if (instance == null)
                    lock (lockObj)
                    {
                        if (instance == null) instance = new DashboardDAO();
                    }

                return instance;
            }
        }

        public static DashboardDAO GetInstance()
        {
            if (instance == null) instance = new DashboardDAO();
            return instance;
        }

        public List<DashboardInfo> GetDashboardInfo(DateTime from_date, DateTime to_date, String dept_id = null)
        {
            try
            {


                var InfoList = new List<DashboardInfo>();
                var colparameters = new Parameters[3]
               {
                    new Parameters("@from_date", from_date, DbType.DateTime, ParameterDirection.Input),
                    new Parameters("@to_date", to_date, DbType.DateTime, ParameterDirection.Input),
                    new Parameters("@dept_id", dept_id, DbType.String, ParameterDirection.Input)
               };
                InfoList = dbExecutor.FetchData<DashboardInfo>(CommandType.StoredProcedure,
                    "task_dashboard_info_get", colparameters);

                return InfoList;
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


                var InfoList = new List<DashboardInfo>();
                var colparameters = new Parameters[3]
               {
                    new Parameters("@from_date", from_date, DbType.DateTime, ParameterDirection.Input),
                    new Parameters("@to_date", to_date, DbType.DateTime, ParameterDirection.Input),
                    new Parameters("@dept_id", dept_id, DbType.String, ParameterDirection.Input)
               };
                InfoList = dbExecutor.FetchData<DashboardInfo>(CommandType.StoredProcedure,
                    "task_status_monthly_get", colparameters);

                return InfoList;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }






    }
}


