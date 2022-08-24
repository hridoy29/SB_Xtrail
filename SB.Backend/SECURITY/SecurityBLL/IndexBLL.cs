using SecurityDAL;
using SecurityEntity;
using System;
using System.Collections.Generic;

namespace SecurityBLL
{
    public class IndexBLL
    {
        public IndexBLL()
        {
            //LoginDAO = ad_Employee.GetInstanceThreadSafe;
            IndexDAO = new IndexDAO();
        }

        public IndexDAO IndexDAO { get; set; }
        public List<Admin> GetAdminAccess(string user_id)
        {
            try
            {
                return IndexDAO.GetAdminAccess(user_id);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }




    }
}
