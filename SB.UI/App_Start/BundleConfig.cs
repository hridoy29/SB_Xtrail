using System.Web.Optimization;

namespace SB
{
    public class BundleConfig
    {
        // For more information on bundling, visit https://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"

                        ));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.validate*"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at https://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(

                      "~/Content/assets/plugins/select2/select2.min.css",
                      "~/Content/assets/plugins/bootstrap-colorpicker/css/bootstrap-colorpicker.css",
                      "~/Content/assets/plugins/timepicker/bootstrap-material-datetimepicker.css",
                      "~/Content/assets/plugins/bootstrap-touchspin/css/jquery.bootstrap-touchspin.min.css",
                      "~/Content/assets/css/bootstrap.min.css",
                      "~/Content/assets/css/icons.css",
                      "~/Content/assets/css/metisMenu.min.css",
                      "~/Content/assets/css/style.css",
                      //"~/Content/site.css",
                      "~/Content/datepicker.css",
                      "~/Content/bootstrap-select.min.css",

                      "~/Content/assets/plugins/creditcard/card.css",
                      "~/Content/assets/plugins/summernote/summernote-bs4.css",

                      "~/Content/toastr.min.css"
                      ));


            bundles.Add(new ScriptBundle("~/bundles/spa").Include(


                 //---- Angular Assets ------

                 "~/Scripts/multiple-select.js",
                "~/Scripts/angular.min.js",
                "~/Scripts/angular-route.min.js",
                "~/Scripts/angular-cookies.js",
                "~/Scripts/angular-animate.js",
                "~/Scripts/angular-filter.min.js",
                //"~/Scripts/mapapi.js",

                //"~/Scripts/bootstrap-select.min.js",
                //"~/Scripts/bootstrap-datepicker.js",
                //"~/Scripts/select2.min.js",
                //"~/Scripts/angularjs-dropdown-multiselect.js",

                "~/Scripts/jquery-3.4.1.min.js",
                //"~/Scripts/toastr.min.js",


                //"~/Scripts/jquery.dropotron.min.js",
                //"~/Scripts/jquery.scrollex.min.js",
                //"~/Scripts/browser.min.js",
                //"~/Scripts/breakpoints.min.js",
                //"~/Scripts/util.js",
                //"~/Scripts/main.js",


                "~/Content/assets/plugins/creditcard/card.js",
                "~/Content/assets/plugins/creditcard/jquery.card.js",
                "~/Content/assets/plugins/summernote/summernote-bs4.min.js",
                //"~/Scripts/jquery-3.4.1.min.js",
                //"~/Scripts/alertify.js",
                //"~/Scripts/alertify.min.js",

                //"~/Scripts/alasql.min.js",

                //----

                "~/SPA/app.js",
                 //"~/Scripts/dirPagination.js",
                 //"~/Content/plugins/timepicker/bootstrap-material-datetimepicker.js",
                 //"~/Content/plugins/timepicker/bootstrap-material-datetimepicker.css",






                 ///----DailyMeeting-----///
                 "~/SPA/SB/Dashboard/DashboardController.js",
              

                 "~/SPA/LandingPage/LandingPageController.js",

                 "~/SPA/SB/ApproveReg/ApproveRegController.js",

                  "~/SPA/SB/UserRole/UserRoleEntryController.js",

                  "~/SPA/SB/UserManage/UserManageController.js",

                  //"~/SPA/Login/LoginController.js",
                  "~/SPA/IndexController.js"

                ));

        }
    }
}
