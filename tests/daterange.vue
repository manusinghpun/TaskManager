
          <center><date-range-picker
            :startDate="startDate"
            :endDate="endDate"
            @update="console.log(value)"
            :locale-data="locale"
            :opens="opens"
            :dateRange="ranges"
          >
            <div slot="input" slot-scope="picker"> </div>
          </date-range-picker>
          </center>




import DateRangePicker from "vue2-daterange-picker";
import 'vue2-daterange-picker/dist/vue2-daterange-picker.css'





      //daterange picker
      startDate: '2017-09-05',
      endDate: '2020-12-31',
      opens: 'center',
      locale: {
        direction: 'ltr',
        format: 'DD-MM-YYYY',
        separator: '-',
        applyLabel: 'Apply',
        cancelLabel: 'Cancel',
        weekLabel: 'W',
        customRangeLabel: 'Custom Range',
        daysOfWeek: moment.weekdaysMin(),
        monthNames: moment.monthsShort(),
        firstDay: 1,
        showWeekNumbers: true,

      },
      ranges: {
        'Today' : [ moment(), moment() ],
        'Yesterday' : [ moment().subtract(1, 'days'), moment().subtract(1, 'days') ],
        'This month' : [ moment().subtract(1, 'month'), moment().subtract(1, 'month') ],
        'This year' : [ moment().subtract(1, 'year'), moment().subtract(1, 'year') ],
        'Last week' : [ moment().subtract(1, 'week').startOf('week'), moment().subtract(1, 'week').endOf('week') ],
        'Last month' : [ moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month') ]
      }