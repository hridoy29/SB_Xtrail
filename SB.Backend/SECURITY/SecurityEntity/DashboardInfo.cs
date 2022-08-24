using System;

namespace SecurityEntity.SECURITY.SecurityEntity
{
    public class DashboardInfo
    {

        public String DepartmentName { get; set; }
        public String DepartmentCode { get; set; }
        public int TotalTaskCount { get; set; }
        public int TaskCount { get; set; }
        public int InboxCount { get; set; }
        public int PendingCount { get; set; }
        public int OngoingCount { get; set; }
        public int CompletedCount { get; set; }
        public int CurrentMonthPendingCount { get; set; }
        public int CurrentMonthOngoingCount { get; set; }
        public int CurrentMonthCompletedCount { get; set; }
    }
}
