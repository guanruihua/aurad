export const defaultValue = '* * * * * ? *'

const cronRegexQuartz =
  /^(\*|([0-5]?\d)(\/[1-5]?\d)?|([0-5]?\d)(-([0-5]?\d))?(,([0-5]?\d))*)\s+(\*|([0-5]?\d)(\/[1-5]?\d)?|([0-5]?\d)(-([0-5]?\d))?(,([0-5]?\d))*)\s+(\*|([01]?\d|2[0-3])(\/[1-5]?\d)?|([01]?\d|2[0-3])(-([01]?\d|2[0-3]))?(,([01]?\d|2[0-3]))*)\s+(\*|\?|0?[1-9]|[12]\d|3[01])\s+(\*|(0?[1-9]|1[0-2])(\/[1-2]?\d)?|((0?[1-9]|1[0-2]))(-((0?[1-9]|1[0-2])))?(,((0?[1-9]|1[0-2]))*))\s+(\*|\?|[0-6]|SUN|MON|TUE|WED|THU|FRI|SAT)\s+(\*|(\d{4}))$/

export function validateCron(cronExpression) {
  return cronRegexQuartz.test(cronExpression.trim())
}

export const language_en_US = {
  // 面板标题,
  // panel title,
  paneTitle: {
    second: 'seconds',
    minute: 'minute',
    hour: 'time',
    day: 'Day',
    month: 'month',
    week: 'Week',
    year: 'Year'
  },

  // assign  指定
  assign: 'Specify',
  // Don't assign  不指定
  donTAssign: 'Not specified',

  // Every minute ...   每一秒钟、每一分钟
  everyTime: {
    second: 'Every second',
    minute: 'Every minute',
    hour: 'Every hour',
    day: 'Every day',
    month: 'Every month',
    week: 'Every week',
    year: 'Every year'
  },

  // weel option  周选项
  week: {
    sun: 'Sunday',
    mon: 'Monday',
    tue: 'Tuesday',
    wed: 'Wednesday',
    thu: 'Thursday',
    fri: 'Friday',
    sat: 'Saturday'
  },

  // from [a] to [b] [unit], executed once [unit]    a 到 b 每一个时间单位执行一次
  aTob: {
    second: (AInput, BInput) => (
      <span>
        {/* 从{AInput}-{BInput}秒，每秒执行一次 */}
        From {AInput} - {BInput} seconds, executed once per second
      </span>
    ),
    minute: (AInput, BInput) => (
      <span>
        {/* 从{AInput}-{BInput}分，每分钟执行一次 */}
        Execute every minute from {AInput} to {BInput}
      </span>
    ),
    hour: (AInput, BInput) => (
      <span>
        {/* 从{AInput}-{BInput}时，每小时执行一次 */}
        Execute once every hour when going from {AInput} to {BInput}
      </span>
    ),
    day: (AInput, BInput) => (
      <span>
        {/* 从{AInput}-{BInput}日，每日执行一次 */}
        From {AInput}-{BInput}, execute once a day
      </span>
    ),
    month: (AInput, BInput) => (
      <span>
        {/* 从{AInput}-{BInput}月，每月执行一次 */}
        Execute once a month from {AInput} to {BInput}
      </span>
    ),
    week: (AInput, BInput) => (
      <span>
        {/* 从{AInput}-{BInput}，每星期执行一次 */}
        From {AInput} - {BInput}, execute once a week
      </span>
    ),
    year: (AInput, BInput) => (
      <span>
        {/* 从{AInput}-{BInput}年，每年执行一次 */}
        Execute once a year from {AInput}-{BInput}
      </span>
    )
  },

  // from [a] [unit] start, every [b] Execute once [unit]   从 a 开始, 每一个时间单位执行一次
  aStartTob: {
    second: (AInput, BInput) => (
      <span>
        {/* 从{AInput}秒开始，每{BInput}秒执行一次 */}
        Starting from {AInput} seconds, execute every {BInput} seconds
      </span>
    ),
    minute: (AInput, BInput) => (
      <span>
        {/* 从{AInput}分开始，每{BInput}分执行一次 */}
        Starting from {AInput} minutes, execute every {BInput} minutes
      </span>
    ),
    hour: (AInput, BInput) => (
      <span>
        {/* 从{AInput}时开始，每{BInput}小时执行一次 */}
        Starting at {AInput}, execute every {BInput} hours
      </span>
    ),
    day: (AInput, BInput) => (
      <span>
        {/* 从{AInput}日开始，每{BInput}日执行一次 */}
        Starting from {AInput} day, execute once every {BInput} day
      </span>
    ),
    month: (AInput, BInput) => (
      <span>
        {/* 从{AInput}月开始，每{BInput}月执行一次 */}
        Starting from {AInput} month, execute every {BInput} month
      </span>
    ),

    // [n] in the NTH week of this month    本月第 n 周的 星期[n] 执行一次
    week: (AInput, BInput) => (
      <span>
        {/* 本月第{AInput}周的{BInput}执行一次 */}
        Execute once in {BInput} of {AInput} week of this month
      </span>
    ),

    // 本月的最后一个 星期[n] 执行一次
    // week2: (AInput) => <span>月的最后一个{AInput}执行一次</span>,
    week2: (AInput) => <span>The last {AInput} of the month is executed once</span>,

    year: (AInput, BInput) => (
      <span>
        {/* 从{AInput}年开始，每{BInput}年执行一次 */}
        Starting from year {AInput}, execute every {BInput} years
      </span>
    )
  }
}

export const language_zh_CN = {
  // 面板标题,
  // panel title,
  paneTitle: {
    second: '秒',
    minute: '分',
    hour: '时',
    day: '日',
    month: '月',
    week: '周',
    year: '年'
  },

  // assign  指定
  assign: '指定',
  // Don't assign  不指定
  donTAssign: '不指定',

  // Every minute ...   每一秒钟、每一分钟
  everyTime: {
    second: '每一秒钟',
    minute: '每一分钟',
    hour: '每一小时',
    day: '每一日',
    month: '每一月',
    week: '每一周',
    year: '每年'
  },

  // weel option  周选项
  week: {
    sun: '星期日',
    mon: '星期一',
    tue: '星期二',
    wed: '星期三',
    thu: '星期四',
    fri: '星期五',
    sat: '星期六'
  },

  // from [a] to [b] [unit], executed once [unit]    a 到 b 每一个时间单位执行一次
  aTob: {
    second: (AInput, BInput) => (
      <span>
        从{AInput}-{BInput}秒，每秒执行一次
      </span>
    ),
    minute: (AInput, BInput) => (
      <span>
        从{AInput}-{BInput}分，每分钟执行一次
      </span>
    ),
    hour: (AInput, BInput) => (
      <span>
        从{AInput}-{BInput}时，每小时执行一次
      </span>
    ),
    day: (AInput, BInput) => (
      <span>
        从{AInput}-{BInput}日，每日执行一次
      </span>
    ),
    month: (AInput, BInput) => (
      <span>
        从{AInput}-{BInput}月，每月执行一次
      </span>
    ),
    week: (AInput, BInput) => (
      <span>
        从{AInput}-{BInput}，每星期执行一次
      </span>
    ),
    year: (AInput, BInput) => (
      <span>
        从{AInput}-{BInput}年，每年执行一次
      </span>
    )
  },

  // from [a] [unit] start, every [b] Execute once [unit]   从 a 开始, 每一个时间单位执行一次
  aStartTob: {
    second: (AInput, BInput) => (
      <span>
        从{AInput}秒开始，每{BInput}秒执行一次
      </span>
    ),
    minute: (AInput, BInput) => (
      <span>
        从{AInput}分开始，每{BInput}分执行一次
      </span>
    ),
    hour: (AInput, BInput) => (
      <span>
        从{AInput}时开始，每{BInput}小时执行一次
      </span>
    ),
    day: (AInput, BInput) => (
      <span>
        从{AInput}日开始，每{BInput}日执行一次
      </span>
    ),
    month: (AInput, BInput) => (
      <span>
        从{AInput}月开始，每{BInput}月执行一次
      </span>
    ),

    // [n] in the NTH week of this month    本月第 n 周的 星期[n] 执行一次
    week: (AInput, BInput) => (
      <span>
        本月第{AInput}周的{BInput}执行一次
      </span>
    ),

    // 本月的最后一个 星期[n] 执行一次
    week2: (AInput) => <span>月的最后一个{AInput}执行一次</span>,

    year: (AInput, BInput) => (
      <span>
        从{AInput}年开始，每{BInput}年执行一次
      </span>
    )
  }
}
