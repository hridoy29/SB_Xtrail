using DbExecutor;
using SecurityEntity;
using System;
using System.Collections.Generic;
using System.Data;

namespace SecurityDAL
{
    public class IndexDAO
    {
        private static volatile IndexDAO instance;
        private static readonly object lockObj = new object();

        private readonly DBExecutor dbExecutor;

        public IndexDAO()
        {
            //dbExecutor = DBExecutor.GetInstanceThreadSafe;
            dbExecutor = new DBExecutor();
        }

        public static IndexDAO GetInstanceThreadSafe
        {
            get
            {
                if (instance == null)
                    lock (lockObj)
                    {
                        if (instance == null) instance = new IndexDAO();
                    }

                return instance;
            }
        }

        public static IndexDAO GetInstance()
        {
            if (instance == null) instance = new IndexDAO();
            return instance;
        }

        public List<Admin> GetAdminAccess(string user_id)
        {
            try
            {
                var AdminList = new List<Admin>();
                var colparameters = new Parameters[1]
                {
                    new Parameters("@user_id", user_id, DbType.String, ParameterDirection.Input)
                };
                AdminList = dbExecutor.FetchData<Admin>(CommandType.StoredProcedure,
                    "task_admin_access_get", colparameters);

                return AdminList;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }



    }
}
