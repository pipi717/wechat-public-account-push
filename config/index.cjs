/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx188a5df88d2e8748',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '4e4df708a927ccf1461c27c46a2cd191',

  PROVINCE: '山东',
  CITY: '淄博',

  USERS: [
    {
      // 想要发送的人的名字
      name: '琳琳宝贝',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oCT9_53THakpm9JGxeyGo6Ke3FuI',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'H3oltPAdU8KOHVDPCNIqlelfLbdv2fR7YdGtaGDRzd0',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '09-11',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '琳琳', year: '2002', date: '08-03',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '琳琳', year: '2002', date: '09-11',
        },
        {
          type: '节日', name: '相识纪念日', year: '2020', date: '09-03',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2022-08-03' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2022-09-09' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'H3oltPAdU8KOHVDPCNIqlelfLbdv2fR7YdGtaGDRzd0',

  CALLBACK_USERS: [
    {
      name: '屁屁',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oCT9_53THakpm9JGxeyGo6Ke3FuI',
    }
  ],

}

module.exports = USER_CONFIG

