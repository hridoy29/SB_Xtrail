using System;
using System.Collections.Generic;


namespace SecurityEntity
{
    public class Inbox
    {
        public Int64 task_id { get; set; }
        public String dept_id { get; set; }
        public Int32 StatusId { get; set; }
        public String venue { get; set; }
        public string agenda_item { get; set; }
        public string discussion_point { get; set; }
        public string actions { get; set; }
        public string task_remarks { get; set; }
        public string task_priority { get; set; }
        public string completion_status { get; set; }
        public DateTime meeting_date { get; set; }
        public DateTime duedate { get; set; }
        public int total_count { get; set; }
    }
    public class MyInboxFilter
    {
        public DateTime from_date { get; set; }
        public DateTime to_date { get; set; }
        public Int32 priority_id { get; set; }
        public String dept_id { get; set; }

    }

    public class InboxList
    {
        public List<Inbox> inbox_data { get; set; }
        public int total_count { get; set; }

    }
}
