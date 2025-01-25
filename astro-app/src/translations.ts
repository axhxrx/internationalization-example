export const translations = {
  messages: {
    hello: {
      en: "Hello, this is a translation for the 'en' locale",
      ja: "こんにちは、'ja' ロケール用の翻訳です",
    },
    details: {
      en: 'This is just some example text.. foo bar baz',
      ja: 'これは、例文です・・・　ホゲ　ヒゲ　ハゲ',
    },
    goodbye: {
      en: 'Well, my work is done here!',
      ja: 'ここで作業は終わりました!',
    },
  },
  button: {
    erase: {
      en: 'Erase',
      ja: '消去' ,
    },
    ok: {
      en: 'OK',
      ja: 'OK',
    },
    cancel: {
      en: 'Cancel',
      ja: 'キャンセル',
    },
  },
  greeting: {
    en: 'Welcome {{ username }}',
    ja: 'ようこそ {{username}}',
  },
} as const;
