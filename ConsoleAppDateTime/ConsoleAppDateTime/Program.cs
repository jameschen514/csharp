using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Threading;

namespace ConsoleAppDateTime
{
    class Program
    {
        // Any week begins on a Sunday 

        // Any week ends on a Saturday

        // NextWeek function returns DateTime type for upcoming Sunday after current ending Saturday

        // PreviousWeek function returns DateTime type for previous Sunday.  Goto CurrentWeek that
        // has DateTime data of CurrentWeek and Subtract from days 7 days to get expected PreviousWeek Sunday

        public static DateTime CurrentWeek()
        {
            return DateTime.Today;
        }

        public static DateTime NextWeek(DateTime dt)
        {
            return dt.AddDays(7);
        }

        public static DateTime PreviousWeek(DateTime dt)
        {
            return dt.Subtract(TimeSpan.FromDays(7));
        }

        /*
        public DateTime StartOfWeek(DateTime dt)
        {
            //DateTime StartOfWeekDate = dt.Subtract(TimeSpan.FromDays(7));
            
            while (DayOfWeek.Sunday == dt.DayOfWeek)
            {
                // set StartOfWeekDate if day is Sunday
                DateTime StartOfWeekDate = dt;
            }

            return StartOfWeekDate;
        }
        

        public static List<DateTime> CurrentWeek(DateTime dt)
        {
            // Assume variable dt is of start week Sunday
            // Use dt and add to list each week day data

            // check dt to see which day it falls on; if Sunday assign it to BeginWeek
            // else find start week date

            DateTime BeginWeek = dt.

            List<DateTime> ThisWeek = new List<DateTime>();

            return ThisWeek;
        }
        */

        static void Main(string[] args)
        {
            //DateTime currentOfWeek = DateTime.Today.AddDays(-1 * (int)(DateTime.Today.DayOfWeek));        
            DateTime currentOfWeek = DateTime.Today;
            DateTime nextOfWeek = currentOfWeek.AddDays(7);
            DateTime previousOfWeek = currentOfWeek.Subtract(TimeSpan.FromDays(7));

            Console.WriteLine("Current week: {0}", currentOfWeek);
            Console.WriteLine("Next week: {0}", nextOfWeek);
            Console.WriteLine("Previous week: {0}", previousOfWeek);

            System.Threading.Thread.Sleep(4000);

            DateTimeFormatInfo dfi = DateTimeFormatInfo.CurrentInfo;
            DateTime date1 = DateTime.Now;
            Calendar cal = dfi.Calendar;

            Console.WriteLine("{0:d}: Week {1} ({2})", date1,
                              cal.GetWeekOfYear(date1, dfi.CalendarWeekRule,
                                                dfi.FirstDayOfWeek),
                              cal.ToString().Substring(cal.ToString().LastIndexOf(".") + 1));

            Console.WriteLine("--------------------------------");
            Console.WriteLine(cal.GetWeekOfYear(date1, dfi.CalendarWeekRule, dfi.FirstDayOfWeek));
            Console.WriteLine(cal.GetDayOfWeek(date1)); // Tuesday
            Console.WriteLine("--------------------------------");
            Console.WriteLine("First day of week: {0}", dfi.FirstDayOfWeek); //output sunday
            string weekof = cal.ToString().Substring(cal.ToString().LastIndexOf(".") + 1);
            Console.WriteLine("Week of: {0}", cal.GetWeekOfYear(date1, dfi.CalendarWeekRule, dfi.FirstDayOfWeek));
            
            // Given a week number. Get Sunday, Monday, Tuesday, Wednesday, - Saturday

            System.Threading.Thread.Sleep(10000);

            // get current datetime
            //DateTimeFormatInfo dfi2 = DateTimeFormatInfo.CurrentInfo;
            //Calendar calendar = dfi2.Calendar;
            //DateTime time = new DateTime(2018, 1, 1, new GregorianCalendar());

            // only show week of data

            // allow NextWeek and PreviousWeek

            // get current day

            // addday day until end of week saturday

            // get hours per day

            // subtract days until beginning of week sunday

            // get hours per day

            CultureInfo info = Thread.CurrentThread.CurrentCulture;
            DayOfWeek firstday = info.DateTimeFormat.FirstDayOfWeek;
            DayOfWeek today = info.Calendar.GetDayOfWeek(DateTime.Now);
            DayOfWeek saturday = info.Calendar.GetDayOfWeek(DateTime.Now.AddDays(4));
            
            /*
            int diff = today - firstday;
            DateTime firstDate = DateTime.Now.AddDays(-diff);

            diff = 0;
            if (firstday != DayOfWeek.Sunday)
                if (today == DayOfWeek.Sunday)
                    diff = 6;
                else
                    diff = today - firstday;
            */

            Console.WriteLine("First day: {0}", firstday);
            System.Threading.Thread.Sleep(10000);
        }
    }
}
