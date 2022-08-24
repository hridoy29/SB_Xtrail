using DbExecutor;
using SecurityEntity;
using System;
using System.Collections.Generic;
using System.Data;

namespace SecurityDAL
{
    public class LoginDAO
    {
        private static volatile LoginDAO instance;
        private static readonly object lockObj = new object();

        private readonly DBExecutor dbExecutor;

        public LoginDAO()
        {
            //dbExecutor = DBExecutor.GetInstanceThreadSafe;
            dbExecutor = new DBExecutor();
        }

        public static LoginDAO GetInstanceThreadSafe
        {
            get
            {
                if (instance == null)
                    lock (lockObj)
                    {
                        if (instance == null) instance = new LoginDAO();
                    }

                return instance;
            }
        }

        public static LoginDAO GetInstance()
        {
            if (instance == null) instance = new LoginDAO();
            return instance;
        }

        public List<Login> GetLoginStatus(string user_name, string password)
        {
            try
            {
                var LoginList = new List<Login>();
                var colparameters = new Parameters[2]
                {
                    new Parameters("@user_id", user_name, DbType.String, ParameterDirection.Input),
                    new Parameters("@password", password, DbType.String, ParameterDirection.Input),
                };
                LoginList = dbExecutor.FetchData<Login>(CommandType.StoredProcedure,
                    "user_login", colparameters);

                return LoginList;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public String GetUserDepartment(String user_id)
        {
            try
            {
                var UserDepartment = "";
                var colparameters = new Parameters[1]
                {
                    new Parameters("@user_id", user_id, DbType.String, ParameterDirection.Input)
                };

                dbExecutor.ManageTransaction(TransactionType.Open);
                UserDepartment = dbExecutor.ExecuteScalarString(true, CommandType.StoredProcedure,
                   "[user_department_Get]", colparameters, true);
                dbExecutor.ManageTransaction(TransactionType.Commit);


                return UserDepartment;
            }
            catch (Exception ex)
            {
                dbExecutor.ManageTransaction(TransactionType.Rollback);
                throw ex;
            }
        }

    }
}
