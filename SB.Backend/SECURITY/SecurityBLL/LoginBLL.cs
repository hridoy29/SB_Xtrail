using SecurityDAL;
using SecurityEntity;
using System;
using System.Collections.Generic;

namespace SecurityBLL
{
    public class LoginBLL
    {
        public LoginBLL()
        {
            //LoginDAO = ad_Employee.GetInstanceThreadSafe;
            LoginDAO = new LoginDAO();
        }

        public LoginDAO LoginDAO { get; set; }
        public List<Login> GetLoginStatus(string user_name, string password)
        {
            try
            {
                return LoginDAO.GetLoginStatus(user_name, password);
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
                return LoginDAO.GetUserDepartment(user_id);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }


    }
}
