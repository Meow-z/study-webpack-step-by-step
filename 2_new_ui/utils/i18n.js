import { merge } from 'lodash';
import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import moment from 'moment';
import 'moment/locale/zh-cn';


// zh-cn 或者 en
// 当前还是设置为英文了
moment.locale('en');

const loadResources = (langs, isWrapper = false) => {
  const resources = {};
  // if this is a wrapper instance, you need to merge other resources
  // e.g. you required subModules which have their own i18n instances
  // this is not needed when you are writing plugins for Cube
  if (isWrapper) {
    for (const i of i18n.instances) {
      merge(resources, i.options.resources);
    }
  }
  for (const l of langs) {
    const lc = require(`./locales/${l}`);
    merge(resources, { [l]: lc.default || lc });
  }
  return resources;
};

const instance = i18n.createInstance();
i18n.instances = i18n.instances || [];
i18n.instances.push(instance);

// 通过浏览器初始化语言
instance.use(LanguageDetector).init({
  fallbackLng: 'zh',
  resources: loadResources(['en', 'zh'], true),
});

// todo 可以修改为直接是不支持从浏览器读取语言？
for (const i of i18n.instances) {
  const lang = 'zh';
  i.changeLanguage(lang);
}

export default instance;

const changeLang = () => {
  const lang = instance.language === 'zh' ? 'en' : 'zh';
  for (const i of i18n.instances) {
    i.changeLanguage(lang);
  }
};

export { instance as i18n, changeLang };
