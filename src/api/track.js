

fetch("https://www.ubereats.com/api/getActiveOrdersV1?localeCode=tw", {
  "headers": {
    "accept": "*/*",
    "accept-language": "zh-TW,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6,zh-CN;q=0.5",
    "content-type": "application/json",
    "sec-ch-ua-mobile": "?0",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "x-csrf-token": "x",
  },
  "referrer": "https://www.ubereats.com/tw/orders/4344faf8-ee72-4079-8008-696eb2c5258a",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": "{\"orderUuid\":\"4344faf8-ee72-4079-8008-696eb2c5258a\",\"timezone\":\"Asia/Taipei\",\"showAppUpsellIllustration\":true}",
  "method": "POST",
  "mode": "cors"
});

