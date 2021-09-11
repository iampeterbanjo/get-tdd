/// <reference types="@types/jest" />

// jest.setTimeout(60000); // in milliseconds
// jest.useFakeTimers();

process.env = Object.assign(process.env, {
  COMMERCE_API_BASE_URL: 'http://samarkand.local',
  GLOBEPAY_PARTNER_CODE: 'F96FTB',
  GLOBEPAY_H5_PAYMENT_ENDPOINT: 'http://localhost/globepay-fake/h5_payment',
  GLOBEPAY_WECHAT_TRX_ENDPOINT: 'http://localhost/globepay-fake',
  GLOBEPAY_CUSTOM_ENDPOINT: 'http://localhost/globepay-fake/customs',
  GLOBEPAY_CREDENTIAL_CODE: '100000000001',
  GLOBEPAY_FAKE: 'not_in_production',
  SAMARKAND_CUSTOM_CODE: '1111117813',
  SAMARKAND_NAME_UK: 'Samarkand Global Limited',
  ALIPAY_CUSTOMCODE: 'ZONGSHU',
  WECHATPAY_CUSTOMCODE: 'GUANGZHOU_ZS',
  NOMAD_CBEC_APPCODE: 't35st',
  COMMERCE_ORDER_WEBHOOK_TOKEN: 's3cr3t-squ1r3LL',
  COMMERCE_URL: 'https://commerce.samarkand.api',
  COMMERCE_API_HOST: 'api.dongjiaxi.local.samarkand.io',
});

const { setGlobalDispatcher, Agent } = require('undici');

const agent = new Agent({
  keepAliveTimeout: 10, // milliseconds
  keepAliveMaxTimeout: 10, // milliseconds
});

setGlobalDispatcher(agent);
