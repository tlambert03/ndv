var Or = Object.defineProperty;
var Tr = (o, e, a) => e in o ? Or(o, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : o[e] = a;
var qo = (o, e, a) => Tr(o, typeof e != "symbol" ? e + "" : e, a);
const Rr = '@layer wa-native,wa-utilities,wa-color-palette,wa-color-variant,wa-theme,wa-theme-dimension,wa-theme-overrides;@layer wa-color-variant{:where(:root),.wa-brand-blue{--wa-color-brand-95: var(--wa-color-blue-95);--wa-color-brand-90: var(--wa-color-blue-90);--wa-color-brand-80: var(--wa-color-blue-80);--wa-color-brand-70: var(--wa-color-blue-70);--wa-color-brand-60: var(--wa-color-blue-60);--wa-color-brand-50: var(--wa-color-blue-50);--wa-color-brand-40: var(--wa-color-blue-40);--wa-color-brand-30: var(--wa-color-blue-30);--wa-color-brand-20: var(--wa-color-blue-20);--wa-color-brand-10: var(--wa-color-blue-10);--wa-color-brand-05: var(--wa-color-blue-05);--wa-color-brand: var(--wa-color-blue);--wa-color-brand-on: var(--wa-color-blue-on)}.wa-brand-red{--wa-color-brand-95: var(--wa-color-red-95);--wa-color-brand-90: var(--wa-color-red-90);--wa-color-brand-80: var(--wa-color-red-80);--wa-color-brand-70: var(--wa-color-red-70);--wa-color-brand-60: var(--wa-color-red-60);--wa-color-brand-50: var(--wa-color-red-50);--wa-color-brand-40: var(--wa-color-red-40);--wa-color-brand-30: var(--wa-color-red-30);--wa-color-brand-20: var(--wa-color-red-20);--wa-color-brand-10: var(--wa-color-red-10);--wa-color-brand-05: var(--wa-color-red-05);--wa-color-brand: var(--wa-color-red);--wa-color-brand-on: var(--wa-color-red-on)}.wa-brand-orange{--wa-color-brand-95: var(--wa-color-orange-95);--wa-color-brand-90: var(--wa-color-orange-90);--wa-color-brand-80: var(--wa-color-orange-80);--wa-color-brand-70: var(--wa-color-orange-70);--wa-color-brand-60: var(--wa-color-orange-60);--wa-color-brand-50: var(--wa-color-orange-50);--wa-color-brand-40: var(--wa-color-orange-40);--wa-color-brand-30: var(--wa-color-orange-30);--wa-color-brand-20: var(--wa-color-orange-20);--wa-color-brand-10: var(--wa-color-orange-10);--wa-color-brand-05: var(--wa-color-orange-05);--wa-color-brand: var(--wa-color-orange);--wa-color-brand-on: var(--wa-color-orange-on)}.wa-brand-yellow{--wa-color-brand-95: var(--wa-color-yellow-95);--wa-color-brand-90: var(--wa-color-yellow-90);--wa-color-brand-80: var(--wa-color-yellow-80);--wa-color-brand-70: var(--wa-color-yellow-70);--wa-color-brand-60: var(--wa-color-yellow-60);--wa-color-brand-50: var(--wa-color-yellow-50);--wa-color-brand-40: var(--wa-color-yellow-40);--wa-color-brand-30: var(--wa-color-yellow-30);--wa-color-brand-20: var(--wa-color-yellow-20);--wa-color-brand-10: var(--wa-color-yellow-10);--wa-color-brand-05: var(--wa-color-yellow-05);--wa-color-brand: var(--wa-color-yellow);--wa-color-brand-on: var(--wa-color-yellow-on)}.wa-brand-green{--wa-color-brand-95: var(--wa-color-green-95);--wa-color-brand-90: var(--wa-color-green-90);--wa-color-brand-80: var(--wa-color-green-80);--wa-color-brand-70: var(--wa-color-green-70);--wa-color-brand-60: var(--wa-color-green-60);--wa-color-brand-50: var(--wa-color-green-50);--wa-color-brand-40: var(--wa-color-green-40);--wa-color-brand-30: var(--wa-color-green-30);--wa-color-brand-20: var(--wa-color-green-20);--wa-color-brand-10: var(--wa-color-green-10);--wa-color-brand-05: var(--wa-color-green-05);--wa-color-brand: var(--wa-color-green);--wa-color-brand-on: var(--wa-color-green-on)}.wa-brand-cyan{--wa-color-brand-95: var(--wa-color-cyan-95);--wa-color-brand-90: var(--wa-color-cyan-90);--wa-color-brand-80: var(--wa-color-cyan-80);--wa-color-brand-70: var(--wa-color-cyan-70);--wa-color-brand-60: var(--wa-color-cyan-60);--wa-color-brand-50: var(--wa-color-cyan-50);--wa-color-brand-40: var(--wa-color-cyan-40);--wa-color-brand-30: var(--wa-color-cyan-30);--wa-color-brand-20: var(--wa-color-cyan-20);--wa-color-brand-10: var(--wa-color-cyan-10);--wa-color-brand-05: var(--wa-color-cyan-05);--wa-color-brand: var(--wa-color-cyan);--wa-color-brand-on: var(--wa-color-cyan-on)}.wa-brand-indigo{--wa-color-brand-95: var(--wa-color-indigo-95);--wa-color-brand-90: var(--wa-color-indigo-90);--wa-color-brand-80: var(--wa-color-indigo-80);--wa-color-brand-70: var(--wa-color-indigo-70);--wa-color-brand-60: var(--wa-color-indigo-60);--wa-color-brand-50: var(--wa-color-indigo-50);--wa-color-brand-40: var(--wa-color-indigo-40);--wa-color-brand-30: var(--wa-color-indigo-30);--wa-color-brand-20: var(--wa-color-indigo-20);--wa-color-brand-10: var(--wa-color-indigo-10);--wa-color-brand-05: var(--wa-color-indigo-05);--wa-color-brand: var(--wa-color-indigo);--wa-color-brand-on: var(--wa-color-indigo-on)}.wa-brand-purple{--wa-color-brand-95: var(--wa-color-purple-95);--wa-color-brand-90: var(--wa-color-purple-90);--wa-color-brand-80: var(--wa-color-purple-80);--wa-color-brand-70: var(--wa-color-purple-70);--wa-color-brand-60: var(--wa-color-purple-60);--wa-color-brand-50: var(--wa-color-purple-50);--wa-color-brand-40: var(--wa-color-purple-40);--wa-color-brand-30: var(--wa-color-purple-30);--wa-color-brand-20: var(--wa-color-purple-20);--wa-color-brand-10: var(--wa-color-purple-10);--wa-color-brand-05: var(--wa-color-purple-05);--wa-color-brand: var(--wa-color-purple);--wa-color-brand-on: var(--wa-color-purple-on)}.wa-brand-pink{--wa-color-brand-95: var(--wa-color-pink-95);--wa-color-brand-90: var(--wa-color-pink-90);--wa-color-brand-80: var(--wa-color-pink-80);--wa-color-brand-70: var(--wa-color-pink-70);--wa-color-brand-60: var(--wa-color-pink-60);--wa-color-brand-50: var(--wa-color-pink-50);--wa-color-brand-40: var(--wa-color-pink-40);--wa-color-brand-30: var(--wa-color-pink-30);--wa-color-brand-20: var(--wa-color-pink-20);--wa-color-brand-10: var(--wa-color-pink-10);--wa-color-brand-05: var(--wa-color-pink-05);--wa-color-brand: var(--wa-color-pink);--wa-color-brand-on: var(--wa-color-pink-on)}.wa-brand-gray{--wa-color-brand-95: var(--wa-color-gray-95);--wa-color-brand-90: var(--wa-color-gray-90);--wa-color-brand-80: var(--wa-color-gray-80);--wa-color-brand-70: var(--wa-color-gray-70);--wa-color-brand-60: var(--wa-color-gray-60);--wa-color-brand-50: var(--wa-color-gray-50);--wa-color-brand-40: var(--wa-color-gray-40);--wa-color-brand-30: var(--wa-color-gray-30);--wa-color-brand-20: var(--wa-color-gray-20);--wa-color-brand-10: var(--wa-color-gray-10);--wa-color-brand-05: var(--wa-color-gray-05);--wa-color-brand: var(--wa-color-gray);--wa-color-brand-on: var(--wa-color-gray-on)}}@layer wa-color-variant{:where(:root),.wa-neutral-gray{--wa-color-neutral-95: var(--wa-color-gray-95);--wa-color-neutral-90: var(--wa-color-gray-90);--wa-color-neutral-80: var(--wa-color-gray-80);--wa-color-neutral-70: var(--wa-color-gray-70);--wa-color-neutral-60: var(--wa-color-gray-60);--wa-color-neutral-50: var(--wa-color-gray-50);--wa-color-neutral-40: var(--wa-color-gray-40);--wa-color-neutral-30: var(--wa-color-gray-30);--wa-color-neutral-20: var(--wa-color-gray-20);--wa-color-neutral-10: var(--wa-color-gray-10);--wa-color-neutral-05: var(--wa-color-gray-05);--wa-color-neutral: var(--wa-color-gray);--wa-color-neutral-on: var(--wa-color-gray-on)}.wa-neutral-red{--wa-color-neutral-95: var(--wa-color-red-95);--wa-color-neutral-90: var(--wa-color-red-90);--wa-color-neutral-80: var(--wa-color-red-80);--wa-color-neutral-70: var(--wa-color-red-70);--wa-color-neutral-60: var(--wa-color-red-60);--wa-color-neutral-50: var(--wa-color-red-50);--wa-color-neutral-40: var(--wa-color-red-40);--wa-color-neutral-30: var(--wa-color-red-30);--wa-color-neutral-20: var(--wa-color-red-20);--wa-color-neutral-10: var(--wa-color-red-10);--wa-color-neutral-05: var(--wa-color-red-05);--wa-color-neutral: var(--wa-color-red);--wa-color-neutral-on: var(--wa-color-red-on)}.wa-neutral-orange{--wa-color-neutral-95: var(--wa-color-orange-95);--wa-color-neutral-90: var(--wa-color-orange-90);--wa-color-neutral-80: var(--wa-color-orange-80);--wa-color-neutral-70: var(--wa-color-orange-70);--wa-color-neutral-60: var(--wa-color-orange-60);--wa-color-neutral-50: var(--wa-color-orange-50);--wa-color-neutral-40: var(--wa-color-orange-40);--wa-color-neutral-30: var(--wa-color-orange-30);--wa-color-neutral-20: var(--wa-color-orange-20);--wa-color-neutral-10: var(--wa-color-orange-10);--wa-color-neutral-05: var(--wa-color-orange-05);--wa-color-neutral: var(--wa-color-orange);--wa-color-neutral-on: var(--wa-color-orange-on)}.wa-neutral-yellow{--wa-color-neutral-95: var(--wa-color-yellow-95);--wa-color-neutral-90: var(--wa-color-yellow-90);--wa-color-neutral-80: var(--wa-color-yellow-80);--wa-color-neutral-70: var(--wa-color-yellow-70);--wa-color-neutral-60: var(--wa-color-yellow-60);--wa-color-neutral-50: var(--wa-color-yellow-50);--wa-color-neutral-40: var(--wa-color-yellow-40);--wa-color-neutral-30: var(--wa-color-yellow-30);--wa-color-neutral-20: var(--wa-color-yellow-20);--wa-color-neutral-10: var(--wa-color-yellow-10);--wa-color-neutral-05: var(--wa-color-yellow-05);--wa-color-neutral: var(--wa-color-yellow);--wa-color-neutral-on: var(--wa-color-yellow-on)}.wa-neutral-green{--wa-color-neutral-95: var(--wa-color-green-95);--wa-color-neutral-90: var(--wa-color-green-90);--wa-color-neutral-80: var(--wa-color-green-80);--wa-color-neutral-70: var(--wa-color-green-70);--wa-color-neutral-60: var(--wa-color-green-60);--wa-color-neutral-50: var(--wa-color-green-50);--wa-color-neutral-40: var(--wa-color-green-40);--wa-color-neutral-30: var(--wa-color-green-30);--wa-color-neutral-20: var(--wa-color-green-20);--wa-color-neutral-10: var(--wa-color-green-10);--wa-color-neutral-05: var(--wa-color-green-05);--wa-color-neutral: var(--wa-color-green);--wa-color-neutral-on: var(--wa-color-green-on)}.wa-neutral-cyan{--wa-color-neutral-95: var(--wa-color-cyan-95);--wa-color-neutral-90: var(--wa-color-cyan-90);--wa-color-neutral-80: var(--wa-color-cyan-80);--wa-color-neutral-70: var(--wa-color-cyan-70);--wa-color-neutral-60: var(--wa-color-cyan-60);--wa-color-neutral-50: var(--wa-color-cyan-50);--wa-color-neutral-40: var(--wa-color-cyan-40);--wa-color-neutral-30: var(--wa-color-cyan-30);--wa-color-neutral-20: var(--wa-color-cyan-20);--wa-color-neutral-10: var(--wa-color-cyan-10);--wa-color-neutral-05: var(--wa-color-cyan-05);--wa-color-neutral: var(--wa-color-cyan);--wa-color-neutral-on: var(--wa-color-cyan-on)}.wa-neutral-blue{--wa-color-neutral-95: var(--wa-color-blue-95);--wa-color-neutral-90: var(--wa-color-blue-90);--wa-color-neutral-80: var(--wa-color-blue-80);--wa-color-neutral-70: var(--wa-color-blue-70);--wa-color-neutral-60: var(--wa-color-blue-60);--wa-color-neutral-50: var(--wa-color-blue-50);--wa-color-neutral-40: var(--wa-color-blue-40);--wa-color-neutral-30: var(--wa-color-blue-30);--wa-color-neutral-20: var(--wa-color-blue-20);--wa-color-neutral-10: var(--wa-color-blue-10);--wa-color-neutral-05: var(--wa-color-blue-05);--wa-color-neutral: var(--wa-color-blue);--wa-color-neutral-on: var(--wa-color-blue-on)}.wa-neutral-indigo{--wa-color-neutral-95: var(--wa-color-indigo-95);--wa-color-neutral-90: var(--wa-color-indigo-90);--wa-color-neutral-80: var(--wa-color-indigo-80);--wa-color-neutral-70: var(--wa-color-indigo-70);--wa-color-neutral-60: var(--wa-color-indigo-60);--wa-color-neutral-50: var(--wa-color-indigo-50);--wa-color-neutral-40: var(--wa-color-indigo-40);--wa-color-neutral-30: var(--wa-color-indigo-30);--wa-color-neutral-20: var(--wa-color-indigo-20);--wa-color-neutral-10: var(--wa-color-indigo-10);--wa-color-neutral-05: var(--wa-color-indigo-05);--wa-color-neutral: var(--wa-color-indigo);--wa-color-neutral-on: var(--wa-color-indigo-on)}.wa-neutral-purple{--wa-color-neutral-95: var(--wa-color-purple-95);--wa-color-neutral-90: var(--wa-color-purple-90);--wa-color-neutral-80: var(--wa-color-purple-80);--wa-color-neutral-70: var(--wa-color-purple-70);--wa-color-neutral-60: var(--wa-color-purple-60);--wa-color-neutral-50: var(--wa-color-purple-50);--wa-color-neutral-40: var(--wa-color-purple-40);--wa-color-neutral-30: var(--wa-color-purple-30);--wa-color-neutral-20: var(--wa-color-purple-20);--wa-color-neutral-10: var(--wa-color-purple-10);--wa-color-neutral-05: var(--wa-color-purple-05);--wa-color-neutral: var(--wa-color-purple);--wa-color-neutral-on: var(--wa-color-purple-on)}.wa-neutral-pink{--wa-color-neutral-95: var(--wa-color-pink-95);--wa-color-neutral-90: var(--wa-color-pink-90);--wa-color-neutral-80: var(--wa-color-pink-80);--wa-color-neutral-70: var(--wa-color-pink-70);--wa-color-neutral-60: var(--wa-color-pink-60);--wa-color-neutral-50: var(--wa-color-pink-50);--wa-color-neutral-40: var(--wa-color-pink-40);--wa-color-neutral-30: var(--wa-color-pink-30);--wa-color-neutral-20: var(--wa-color-pink-20);--wa-color-neutral-10: var(--wa-color-pink-10);--wa-color-neutral-05: var(--wa-color-pink-05);--wa-color-neutral: var(--wa-color-pink);--wa-color-neutral-on: var(--wa-color-pink-on)}}@layer wa-color-variant{:where(:root),.wa-success-green{--wa-color-success-95: var(--wa-color-green-95);--wa-color-success-90: var(--wa-color-green-90);--wa-color-success-80: var(--wa-color-green-80);--wa-color-success-70: var(--wa-color-green-70);--wa-color-success-60: var(--wa-color-green-60);--wa-color-success-50: var(--wa-color-green-50);--wa-color-success-40: var(--wa-color-green-40);--wa-color-success-30: var(--wa-color-green-30);--wa-color-success-20: var(--wa-color-green-20);--wa-color-success-10: var(--wa-color-green-10);--wa-color-success-05: var(--wa-color-green-05);--wa-color-success: var(--wa-color-green);--wa-color-success-on: var(--wa-color-green-on)}.wa-success-red{--wa-color-success-95: var(--wa-color-red-95);--wa-color-success-90: var(--wa-color-red-90);--wa-color-success-80: var(--wa-color-red-80);--wa-color-success-70: var(--wa-color-red-70);--wa-color-success-60: var(--wa-color-red-60);--wa-color-success-50: var(--wa-color-red-50);--wa-color-success-40: var(--wa-color-red-40);--wa-color-success-30: var(--wa-color-red-30);--wa-color-success-20: var(--wa-color-red-20);--wa-color-success-10: var(--wa-color-red-10);--wa-color-success-05: var(--wa-color-red-05);--wa-color-success: var(--wa-color-red);--wa-color-success-on: var(--wa-color-red-on)}.wa-success-orange{--wa-color-success-95: var(--wa-color-orange-95);--wa-color-success-90: var(--wa-color-orange-90);--wa-color-success-80: var(--wa-color-orange-80);--wa-color-success-70: var(--wa-color-orange-70);--wa-color-success-60: var(--wa-color-orange-60);--wa-color-success-50: var(--wa-color-orange-50);--wa-color-success-40: var(--wa-color-orange-40);--wa-color-success-30: var(--wa-color-orange-30);--wa-color-success-20: var(--wa-color-orange-20);--wa-color-success-10: var(--wa-color-orange-10);--wa-color-success-05: var(--wa-color-orange-05);--wa-color-success: var(--wa-color-orange);--wa-color-success-on: var(--wa-color-orange-on)}.wa-success-yellow{--wa-color-success-95: var(--wa-color-yellow-95);--wa-color-success-90: var(--wa-color-yellow-90);--wa-color-success-80: var(--wa-color-yellow-80);--wa-color-success-70: var(--wa-color-yellow-70);--wa-color-success-60: var(--wa-color-yellow-60);--wa-color-success-50: var(--wa-color-yellow-50);--wa-color-success-40: var(--wa-color-yellow-40);--wa-color-success-30: var(--wa-color-yellow-30);--wa-color-success-20: var(--wa-color-yellow-20);--wa-color-success-10: var(--wa-color-yellow-10);--wa-color-success-05: var(--wa-color-yellow-05);--wa-color-success: var(--wa-color-yellow);--wa-color-success-on: var(--wa-color-yellow-on)}.wa-success-cyan{--wa-color-success-95: var(--wa-color-cyan-95);--wa-color-success-90: var(--wa-color-cyan-90);--wa-color-success-80: var(--wa-color-cyan-80);--wa-color-success-70: var(--wa-color-cyan-70);--wa-color-success-60: var(--wa-color-cyan-60);--wa-color-success-50: var(--wa-color-cyan-50);--wa-color-success-40: var(--wa-color-cyan-40);--wa-color-success-30: var(--wa-color-cyan-30);--wa-color-success-20: var(--wa-color-cyan-20);--wa-color-success-10: var(--wa-color-cyan-10);--wa-color-success-05: var(--wa-color-cyan-05);--wa-color-success: var(--wa-color-cyan);--wa-color-success-on: var(--wa-color-cyan-on)}.wa-success-blue{--wa-color-success-95: var(--wa-color-blue-95);--wa-color-success-90: var(--wa-color-blue-90);--wa-color-success-80: var(--wa-color-blue-80);--wa-color-success-70: var(--wa-color-blue-70);--wa-color-success-60: var(--wa-color-blue-60);--wa-color-success-50: var(--wa-color-blue-50);--wa-color-success-40: var(--wa-color-blue-40);--wa-color-success-30: var(--wa-color-blue-30);--wa-color-success-20: var(--wa-color-blue-20);--wa-color-success-10: var(--wa-color-blue-10);--wa-color-success-05: var(--wa-color-blue-05);--wa-color-success: var(--wa-color-blue);--wa-color-success-on: var(--wa-color-blue-on)}.wa-success-indigo{--wa-color-success-95: var(--wa-color-indigo-95);--wa-color-success-90: var(--wa-color-indigo-90);--wa-color-success-80: var(--wa-color-indigo-80);--wa-color-success-70: var(--wa-color-indigo-70);--wa-color-success-60: var(--wa-color-indigo-60);--wa-color-success-50: var(--wa-color-indigo-50);--wa-color-success-40: var(--wa-color-indigo-40);--wa-color-success-30: var(--wa-color-indigo-30);--wa-color-success-20: var(--wa-color-indigo-20);--wa-color-success-10: var(--wa-color-indigo-10);--wa-color-success-05: var(--wa-color-indigo-05);--wa-color-success: var(--wa-color-indigo);--wa-color-success-on: var(--wa-color-indigo-on)}.wa-success-purple{--wa-color-success-95: var(--wa-color-purple-95);--wa-color-success-90: var(--wa-color-purple-90);--wa-color-success-80: var(--wa-color-purple-80);--wa-color-success-70: var(--wa-color-purple-70);--wa-color-success-60: var(--wa-color-purple-60);--wa-color-success-50: var(--wa-color-purple-50);--wa-color-success-40: var(--wa-color-purple-40);--wa-color-success-30: var(--wa-color-purple-30);--wa-color-success-20: var(--wa-color-purple-20);--wa-color-success-10: var(--wa-color-purple-10);--wa-color-success-05: var(--wa-color-purple-05);--wa-color-success: var(--wa-color-purple);--wa-color-success-on: var(--wa-color-purple-on)}.wa-success-pink{--wa-color-success-95: var(--wa-color-pink-95);--wa-color-success-90: var(--wa-color-pink-90);--wa-color-success-80: var(--wa-color-pink-80);--wa-color-success-70: var(--wa-color-pink-70);--wa-color-success-60: var(--wa-color-pink-60);--wa-color-success-50: var(--wa-color-pink-50);--wa-color-success-40: var(--wa-color-pink-40);--wa-color-success-30: var(--wa-color-pink-30);--wa-color-success-20: var(--wa-color-pink-20);--wa-color-success-10: var(--wa-color-pink-10);--wa-color-success-05: var(--wa-color-pink-05);--wa-color-success: var(--wa-color-pink);--wa-color-success-on: var(--wa-color-pink-on)}.wa-success-gray{--wa-color-success-95: var(--wa-color-gray-95);--wa-color-success-90: var(--wa-color-gray-90);--wa-color-success-80: var(--wa-color-gray-80);--wa-color-success-70: var(--wa-color-gray-70);--wa-color-success-60: var(--wa-color-gray-60);--wa-color-success-50: var(--wa-color-gray-50);--wa-color-success-40: var(--wa-color-gray-40);--wa-color-success-30: var(--wa-color-gray-30);--wa-color-success-20: var(--wa-color-gray-20);--wa-color-success-10: var(--wa-color-gray-10);--wa-color-success-05: var(--wa-color-gray-05);--wa-color-success: var(--wa-color-gray);--wa-color-success-on: var(--wa-color-gray-on)}}@layer wa-color-variant{:where(:root),.wa-warning-yellow{--wa-color-warning-95: var(--wa-color-yellow-95);--wa-color-warning-90: var(--wa-color-yellow-90);--wa-color-warning-80: var(--wa-color-yellow-80);--wa-color-warning-70: var(--wa-color-yellow-70);--wa-color-warning-60: var(--wa-color-yellow-60);--wa-color-warning-50: var(--wa-color-yellow-50);--wa-color-warning-40: var(--wa-color-yellow-40);--wa-color-warning-30: var(--wa-color-yellow-30);--wa-color-warning-20: var(--wa-color-yellow-20);--wa-color-warning-10: var(--wa-color-yellow-10);--wa-color-warning-05: var(--wa-color-yellow-05);--wa-color-warning: var(--wa-color-yellow);--wa-color-warning-on: var(--wa-color-yellow-on)}.wa-warning-red{--wa-color-warning-95: var(--wa-color-red-95);--wa-color-warning-90: var(--wa-color-red-90);--wa-color-warning-80: var(--wa-color-red-80);--wa-color-warning-70: var(--wa-color-red-70);--wa-color-warning-60: var(--wa-color-red-60);--wa-color-warning-50: var(--wa-color-red-50);--wa-color-warning-40: var(--wa-color-red-40);--wa-color-warning-30: var(--wa-color-red-30);--wa-color-warning-20: var(--wa-color-red-20);--wa-color-warning-10: var(--wa-color-red-10);--wa-color-warning-05: var(--wa-color-red-05);--wa-color-warning: var(--wa-color-red);--wa-color-warning-on: var(--wa-color-red-on)}.wa-warning-orange{--wa-color-warning-95: var(--wa-color-orange-95);--wa-color-warning-90: var(--wa-color-orange-90);--wa-color-warning-80: var(--wa-color-orange-80);--wa-color-warning-70: var(--wa-color-orange-70);--wa-color-warning-60: var(--wa-color-orange-60);--wa-color-warning-50: var(--wa-color-orange-50);--wa-color-warning-40: var(--wa-color-orange-40);--wa-color-warning-30: var(--wa-color-orange-30);--wa-color-warning-20: var(--wa-color-orange-20);--wa-color-warning-10: var(--wa-color-orange-10);--wa-color-warning-05: var(--wa-color-orange-05);--wa-color-warning: var(--wa-color-orange);--wa-color-warning-on: var(--wa-color-orange-on)}.wa-warning-green{--wa-color-warning-95: var(--wa-color-green-95);--wa-color-warning-90: var(--wa-color-green-90);--wa-color-warning-80: var(--wa-color-green-80);--wa-color-warning-70: var(--wa-color-green-70);--wa-color-warning-60: var(--wa-color-green-60);--wa-color-warning-50: var(--wa-color-green-50);--wa-color-warning-40: var(--wa-color-green-40);--wa-color-warning-30: var(--wa-color-green-30);--wa-color-warning-20: var(--wa-color-green-20);--wa-color-warning-10: var(--wa-color-green-10);--wa-color-warning-05: var(--wa-color-green-05);--wa-color-warning: var(--wa-color-green);--wa-color-warning-on: var(--wa-color-green-on)}.wa-warning-cyan{--wa-color-warning-95: var(--wa-color-cyan-95);--wa-color-warning-90: var(--wa-color-cyan-90);--wa-color-warning-80: var(--wa-color-cyan-80);--wa-color-warning-70: var(--wa-color-cyan-70);--wa-color-warning-60: var(--wa-color-cyan-60);--wa-color-warning-50: var(--wa-color-cyan-50);--wa-color-warning-40: var(--wa-color-cyan-40);--wa-color-warning-30: var(--wa-color-cyan-30);--wa-color-warning-20: var(--wa-color-cyan-20);--wa-color-warning-10: var(--wa-color-cyan-10);--wa-color-warning-05: var(--wa-color-cyan-05);--wa-color-warning: var(--wa-color-cyan);--wa-color-warning-on: var(--wa-color-cyan-on)}.wa-warning-blue{--wa-color-warning-95: var(--wa-color-blue-95);--wa-color-warning-90: var(--wa-color-blue-90);--wa-color-warning-80: var(--wa-color-blue-80);--wa-color-warning-70: var(--wa-color-blue-70);--wa-color-warning-60: var(--wa-color-blue-60);--wa-color-warning-50: var(--wa-color-blue-50);--wa-color-warning-40: var(--wa-color-blue-40);--wa-color-warning-30: var(--wa-color-blue-30);--wa-color-warning-20: var(--wa-color-blue-20);--wa-color-warning-10: var(--wa-color-blue-10);--wa-color-warning-05: var(--wa-color-blue-05);--wa-color-warning: var(--wa-color-blue);--wa-color-warning-on: var(--wa-color-blue-on)}.wa-warning-indigo{--wa-color-warning-95: var(--wa-color-indigo-95);--wa-color-warning-90: var(--wa-color-indigo-90);--wa-color-warning-80: var(--wa-color-indigo-80);--wa-color-warning-70: var(--wa-color-indigo-70);--wa-color-warning-60: var(--wa-color-indigo-60);--wa-color-warning-50: var(--wa-color-indigo-50);--wa-color-warning-40: var(--wa-color-indigo-40);--wa-color-warning-30: var(--wa-color-indigo-30);--wa-color-warning-20: var(--wa-color-indigo-20);--wa-color-warning-10: var(--wa-color-indigo-10);--wa-color-warning-05: var(--wa-color-indigo-05);--wa-color-warning: var(--wa-color-indigo);--wa-color-warning-on: var(--wa-color-indigo-on)}.wa-warning-purple{--wa-color-warning-95: var(--wa-color-purple-95);--wa-color-warning-90: var(--wa-color-purple-90);--wa-color-warning-80: var(--wa-color-purple-80);--wa-color-warning-70: var(--wa-color-purple-70);--wa-color-warning-60: var(--wa-color-purple-60);--wa-color-warning-50: var(--wa-color-purple-50);--wa-color-warning-40: var(--wa-color-purple-40);--wa-color-warning-30: var(--wa-color-purple-30);--wa-color-warning-20: var(--wa-color-purple-20);--wa-color-warning-10: var(--wa-color-purple-10);--wa-color-warning-05: var(--wa-color-purple-05);--wa-color-warning: var(--wa-color-purple);--wa-color-warning-on: var(--wa-color-purple-on)}.wa-warning-pink{--wa-color-warning-95: var(--wa-color-pink-95);--wa-color-warning-90: var(--wa-color-pink-90);--wa-color-warning-80: var(--wa-color-pink-80);--wa-color-warning-70: var(--wa-color-pink-70);--wa-color-warning-60: var(--wa-color-pink-60);--wa-color-warning-50: var(--wa-color-pink-50);--wa-color-warning-40: var(--wa-color-pink-40);--wa-color-warning-30: var(--wa-color-pink-30);--wa-color-warning-20: var(--wa-color-pink-20);--wa-color-warning-10: var(--wa-color-pink-10);--wa-color-warning-05: var(--wa-color-pink-05);--wa-color-warning: var(--wa-color-pink);--wa-color-warning-on: var(--wa-color-pink-on)}.wa-warning-gray{--wa-color-warning-95: var(--wa-color-gray-95);--wa-color-warning-90: var(--wa-color-gray-90);--wa-color-warning-80: var(--wa-color-gray-80);--wa-color-warning-70: var(--wa-color-gray-70);--wa-color-warning-60: var(--wa-color-gray-60);--wa-color-warning-50: var(--wa-color-gray-50);--wa-color-warning-40: var(--wa-color-gray-40);--wa-color-warning-30: var(--wa-color-gray-30);--wa-color-warning-20: var(--wa-color-gray-20);--wa-color-warning-10: var(--wa-color-gray-10);--wa-color-warning-05: var(--wa-color-gray-05);--wa-color-warning: var(--wa-color-gray);--wa-color-warning-on: var(--wa-color-gray-on)}}@layer wa-color-variant{:where(:root),.wa-danger-red{--wa-color-danger-95: var(--wa-color-red-95);--wa-color-danger-90: var(--wa-color-red-90);--wa-color-danger-80: var(--wa-color-red-80);--wa-color-danger-70: var(--wa-color-red-70);--wa-color-danger-60: var(--wa-color-red-60);--wa-color-danger-50: var(--wa-color-red-50);--wa-color-danger-40: var(--wa-color-red-40);--wa-color-danger-30: var(--wa-color-red-30);--wa-color-danger-20: var(--wa-color-red-20);--wa-color-danger-10: var(--wa-color-red-10);--wa-color-danger-05: var(--wa-color-red-05);--wa-color-danger: var(--wa-color-red);--wa-color-danger-on: var(--wa-color-red-on)}.wa-danger-orange{--wa-color-danger-95: var(--wa-color-orange-95);--wa-color-danger-90: var(--wa-color-orange-90);--wa-color-danger-80: var(--wa-color-orange-80);--wa-color-danger-70: var(--wa-color-orange-70);--wa-color-danger-60: var(--wa-color-orange-60);--wa-color-danger-50: var(--wa-color-orange-50);--wa-color-danger-40: var(--wa-color-orange-40);--wa-color-danger-30: var(--wa-color-orange-30);--wa-color-danger-20: var(--wa-color-orange-20);--wa-color-danger-10: var(--wa-color-orange-10);--wa-color-danger-05: var(--wa-color-orange-05);--wa-color-danger: var(--wa-color-orange);--wa-color-danger-on: var(--wa-color-orange-on)}.wa-danger-yellow{--wa-color-danger-95: var(--wa-color-yellow-95);--wa-color-danger-90: var(--wa-color-yellow-90);--wa-color-danger-80: var(--wa-color-yellow-80);--wa-color-danger-70: var(--wa-color-yellow-70);--wa-color-danger-60: var(--wa-color-yellow-60);--wa-color-danger-50: var(--wa-color-yellow-50);--wa-color-danger-40: var(--wa-color-yellow-40);--wa-color-danger-30: var(--wa-color-yellow-30);--wa-color-danger-20: var(--wa-color-yellow-20);--wa-color-danger-10: var(--wa-color-yellow-10);--wa-color-danger-05: var(--wa-color-yellow-05);--wa-color-danger: var(--wa-color-yellow);--wa-color-danger-on: var(--wa-color-yellow-on)}.wa-danger-green{--wa-color-danger-95: var(--wa-color-green-95);--wa-color-danger-90: var(--wa-color-green-90);--wa-color-danger-80: var(--wa-color-green-80);--wa-color-danger-70: var(--wa-color-green-70);--wa-color-danger-60: var(--wa-color-green-60);--wa-color-danger-50: var(--wa-color-green-50);--wa-color-danger-40: var(--wa-color-green-40);--wa-color-danger-30: var(--wa-color-green-30);--wa-color-danger-20: var(--wa-color-green-20);--wa-color-danger-10: var(--wa-color-green-10);--wa-color-danger-05: var(--wa-color-green-05);--wa-color-danger: var(--wa-color-green);--wa-color-danger-on: var(--wa-color-green-on)}.wa-danger-cyan{--wa-color-danger-95: var(--wa-color-cyan-95);--wa-color-danger-90: var(--wa-color-cyan-90);--wa-color-danger-80: var(--wa-color-cyan-80);--wa-color-danger-70: var(--wa-color-cyan-70);--wa-color-danger-60: var(--wa-color-cyan-60);--wa-color-danger-50: var(--wa-color-cyan-50);--wa-color-danger-40: var(--wa-color-cyan-40);--wa-color-danger-30: var(--wa-color-cyan-30);--wa-color-danger-20: var(--wa-color-cyan-20);--wa-color-danger-10: var(--wa-color-cyan-10);--wa-color-danger-05: var(--wa-color-cyan-05);--wa-color-danger: var(--wa-color-cyan);--wa-color-danger-on: var(--wa-color-cyan-on)}.wa-danger-blue{--wa-color-danger-95: var(--wa-color-blue-95);--wa-color-danger-90: var(--wa-color-blue-90);--wa-color-danger-80: var(--wa-color-blue-80);--wa-color-danger-70: var(--wa-color-blue-70);--wa-color-danger-60: var(--wa-color-blue-60);--wa-color-danger-50: var(--wa-color-blue-50);--wa-color-danger-40: var(--wa-color-blue-40);--wa-color-danger-30: var(--wa-color-blue-30);--wa-color-danger-20: var(--wa-color-blue-20);--wa-color-danger-10: var(--wa-color-blue-10);--wa-color-danger-05: var(--wa-color-blue-05);--wa-color-danger: var(--wa-color-blue);--wa-color-danger-on: var(--wa-color-blue-on)}.wa-danger-indigo{--wa-color-danger-95: var(--wa-color-indigo-95);--wa-color-danger-90: var(--wa-color-indigo-90);--wa-color-danger-80: var(--wa-color-indigo-80);--wa-color-danger-70: var(--wa-color-indigo-70);--wa-color-danger-60: var(--wa-color-indigo-60);--wa-color-danger-50: var(--wa-color-indigo-50);--wa-color-danger-40: var(--wa-color-indigo-40);--wa-color-danger-30: var(--wa-color-indigo-30);--wa-color-danger-20: var(--wa-color-indigo-20);--wa-color-danger-10: var(--wa-color-indigo-10);--wa-color-danger-05: var(--wa-color-indigo-05);--wa-color-danger: var(--wa-color-indigo);--wa-color-danger-on: var(--wa-color-indigo-on)}.wa-danger-purple{--wa-color-danger-95: var(--wa-color-purple-95);--wa-color-danger-90: var(--wa-color-purple-90);--wa-color-danger-80: var(--wa-color-purple-80);--wa-color-danger-70: var(--wa-color-purple-70);--wa-color-danger-60: var(--wa-color-purple-60);--wa-color-danger-50: var(--wa-color-purple-50);--wa-color-danger-40: var(--wa-color-purple-40);--wa-color-danger-30: var(--wa-color-purple-30);--wa-color-danger-20: var(--wa-color-purple-20);--wa-color-danger-10: var(--wa-color-purple-10);--wa-color-danger-05: var(--wa-color-purple-05);--wa-color-danger: var(--wa-color-purple);--wa-color-danger-on: var(--wa-color-purple-on)}.wa-danger-pink{--wa-color-danger-95: var(--wa-color-pink-95);--wa-color-danger-90: var(--wa-color-pink-90);--wa-color-danger-80: var(--wa-color-pink-80);--wa-color-danger-70: var(--wa-color-pink-70);--wa-color-danger-60: var(--wa-color-pink-60);--wa-color-danger-50: var(--wa-color-pink-50);--wa-color-danger-40: var(--wa-color-pink-40);--wa-color-danger-30: var(--wa-color-pink-30);--wa-color-danger-20: var(--wa-color-pink-20);--wa-color-danger-10: var(--wa-color-pink-10);--wa-color-danger-05: var(--wa-color-pink-05);--wa-color-danger: var(--wa-color-pink);--wa-color-danger-on: var(--wa-color-pink-on)}.wa-danger-gray{--wa-color-danger-95: var(--wa-color-gray-95);--wa-color-danger-90: var(--wa-color-gray-90);--wa-color-danger-80: var(--wa-color-gray-80);--wa-color-danger-70: var(--wa-color-gray-70);--wa-color-danger-60: var(--wa-color-gray-60);--wa-color-danger-50: var(--wa-color-gray-50);--wa-color-danger-40: var(--wa-color-gray-40);--wa-color-danger-30: var(--wa-color-gray-30);--wa-color-danger-20: var(--wa-color-gray-20);--wa-color-danger-10: var(--wa-color-gray-10);--wa-color-danger-05: var(--wa-color-gray-05);--wa-color-danger: var(--wa-color-gray);--wa-color-danger-on: var(--wa-color-gray-on)}}:where(:root),:host{--wa-color-red-gte-60: calc(100% - (clamp(0, 60 - var(--wa-color-red-key), 1)*100%)) ;--wa-color-orange-gte-60: calc(100% - (clamp(0, 60 - var(--wa-color-orange-key), 1)*100%)) ;--wa-color-yellow-gte-60: calc(100% - (clamp(0, 60 - var(--wa-color-yellow-key), 1)*100%)) ;--wa-color-green-gte-60: calc(100% - (clamp(0, 60 - var(--wa-color-green-key), 1)*100%)) ;--wa-color-cyan-gte-60: calc(100% - (clamp(0, 60 - var(--wa-color-cyan-key), 1)*100%)) ;--wa-color-blue-gte-60: calc(100% - (clamp(0, 60 - var(--wa-color-blue-key), 1)*100%)) ;--wa-color-indigo-gte-60: calc(100% - (clamp(0, 60 - var(--wa-color-indigo-key), 1)*100%)) ;--wa-color-purple-gte-60: calc(100% - (clamp(0, 60 - var(--wa-color-purple-key), 1)*100%)) ;--wa-color-pink-gte-60: calc(100% - (clamp(0, 60 - var(--wa-color-pink-key), 1)*100%)) ;--wa-color-gray-gte-60: calc(100% - (clamp(0, 60 - var(--wa-color-gray-key), 1)*100%)) ;--wa-color-red-on: color-mix(in oklab, var(--wa-color-red-10) var(--wa-color-red-gte-60), white);--wa-color-orange-on: color-mix(in oklab, var(--wa-color-orange-10) var(--wa-color-orange-gte-60), white);--wa-color-yellow-on: color-mix(in oklab, var(--wa-color-yellow-10) var(--wa-color-yellow-gte-60), white);--wa-color-green-on: color-mix(in oklab, var(--wa-color-green-10) var(--wa-color-green-gte-60), white);--wa-color-cyan-on: color-mix(in oklab, var(--wa-color-cyan-10) var(--wa-color-cyan-gte-60), white);--wa-color-blue-on: color-mix(in oklab, var(--wa-color-blue-10) var(--wa-color-blue-gte-60), white);--wa-color-indigo-on: color-mix(in oklab, var(--wa-color-indigo-10) var(--wa-color-indigo-gte-60), white);--wa-color-purple-on: color-mix(in oklab, var(--wa-color-purple-10) var(--wa-color-purple-gte-60), white);--wa-color-pink-on: color-mix(in oklab, var(--wa-color-pink-10) var(--wa-color-pink-gte-60), white);--wa-color-gray-on: color-mix(in oklab, var(--wa-color-gray-10) var(--wa-color-gray-gte-60), white)}@layer wa-color-palette{:where(:root),.wa-palette-default{--wa-color-red-95: #fff0ef ;--wa-color-red-90: #ffdedc ;--wa-color-red-80: #ffb8b6 ;--wa-color-red-70: #fd8f90 ;--wa-color-red-60: #f3676c ;--wa-color-red-50: #dc3146 ;--wa-color-red-40: #b30532 ;--wa-color-red-30: #8a132c ;--wa-color-red-20: #631323 ;--wa-color-red-10: #3e0913 ;--wa-color-red-05: #2a040b ;--wa-color-red: var(--wa-color-red-50);--wa-color-red-key: 50;--wa-color-orange-95: #fff0e6 ;--wa-color-orange-90: #ffdfca ;--wa-color-orange-80: #ffbb94 ;--wa-color-orange-70: #ff9266 ;--wa-color-orange-60: #f46a45 ;--wa-color-orange-50: #cd491c ;--wa-color-orange-40: #9f3501 ;--wa-color-orange-30: #802700 ;--wa-color-orange-20: #601b00 ;--wa-color-orange-10: #3c0d00 ;--wa-color-orange-05: #280600 ;--wa-color-orange: var(--wa-color-orange-60);--wa-color-orange-key: 60;--wa-color-yellow-95: #fef3cd ;--wa-color-yellow-90: #ffe495 ;--wa-color-yellow-80: #fac22b ;--wa-color-yellow-70: #ef9d00 ;--wa-color-yellow-60: #da7e00 ;--wa-color-yellow-50: #b45f04 ;--wa-color-yellow-40: #8c4602 ;--wa-color-yellow-30: #6f3601 ;--wa-color-yellow-20: #532600 ;--wa-color-yellow-10: #331600 ;--wa-color-yellow-05: #220c00 ;--wa-color-yellow: var(--wa-color-yellow-80);--wa-color-yellow-key: 80;--wa-color-green-95: #e3f9e3 ;--wa-color-green-90: #c2f2c1 ;--wa-color-green-80: #93da98 ;--wa-color-green-70: #5dc36f ;--wa-color-green-60: #00ac49 ;--wa-color-green-50: #00883c ;--wa-color-green-40: #036730 ;--wa-color-green-30: #0a5027 ;--wa-color-green-20: #0a3a1d ;--wa-color-green-10: #052310 ;--wa-color-green-05: #031608 ;--wa-color-green: var(--wa-color-green-60);--wa-color-green-key: 60;--wa-color-cyan-95: #e3f6fb ;--wa-color-cyan-90: #c5ecf7 ;--wa-color-cyan-80: #7fd6ec ;--wa-color-cyan-70: #2fbedc ;--wa-color-cyan-60: #00a3c0 ;--wa-color-cyan-50: #078098 ;--wa-color-cyan-40: #026274 ;--wa-color-cyan-30: #014c5b ;--wa-color-cyan-20: #003844 ;--wa-color-cyan-10: #002129 ;--wa-color-cyan-05: #00151b ;--wa-color-cyan: var(--wa-color-cyan-70);--wa-color-cyan-key: 70;--wa-color-blue-95: #e8f3ff ;--wa-color-blue-90: #d1e8ff ;--wa-color-blue-80: #9fceff ;--wa-color-blue-70: #6eb3ff ;--wa-color-blue-60: #3e96ff ;--wa-color-blue-50: #0071ec ;--wa-color-blue-40: #0053c0 ;--wa-color-blue-30: #003f9c ;--wa-color-blue-20: #002d77 ;--wa-color-blue-10: #001a4e ;--wa-color-blue-05: #000f35 ;--wa-color-blue: var(--wa-color-blue-50);--wa-color-blue-key: 50;--wa-color-indigo-95: #f0f2ff ;--wa-color-indigo-90: #dfe5ff ;--wa-color-indigo-80: #bcc7ff ;--wa-color-indigo-70: #9da9ff ;--wa-color-indigo-60: #808aff ;--wa-color-indigo-50: #6163f2 ;--wa-color-indigo-40: #4945cb ;--wa-color-indigo-30: #3933a7 ;--wa-color-indigo-20: #292381 ;--wa-color-indigo-10: #181255 ;--wa-color-indigo-05: #0d0a3a ;--wa-color-indigo: var(--wa-color-indigo-50);--wa-color-indigo-key: 50;--wa-color-purple-95: #f7f0ff ;--wa-color-purple-90: #eedfff ;--wa-color-purple-80: #ddbdff ;--wa-color-purple-70: #ca99ff ;--wa-color-purple-60: #b678f5 ;--wa-color-purple-50: #9951db ;--wa-color-purple-40: #7936b3 ;--wa-color-purple-30: #612692 ;--wa-color-purple-20: #491870 ;--wa-color-purple-10: #2d0b48 ;--wa-color-purple-05: #1e0532 ;--wa-color-purple: var(--wa-color-purple-50);--wa-color-purple-key: 50;--wa-color-pink-95: #feeff9 ;--wa-color-pink-90: #feddf0 ;--wa-color-pink-80: #fcb5d8 ;--wa-color-pink-70: #f78dbf ;--wa-color-pink-60: #e66ba3 ;--wa-color-pink-50: #c84382 ;--wa-color-pink-40: #9e2a6c ;--wa-color-pink-30: #7d1e58 ;--wa-color-pink-20: #5e1342 ;--wa-color-pink-10: #3c0828 ;--wa-color-pink-05: #28041a ;--wa-color-pink: var(--wa-color-pink-50);--wa-color-pink-key: 50;--wa-color-gray-95: #f1f2f3 ;--wa-color-gray-90: #e4e5e9 ;--wa-color-gray-80: #c7c9d0 ;--wa-color-gray-70: #abaeb9 ;--wa-color-gray-60: #9194a2 ;--wa-color-gray-50: #717584 ;--wa-color-gray-40: #545868 ;--wa-color-gray-30: #424554 ;--wa-color-gray-20: #2f323f ;--wa-color-gray-10: #1b1d26 ;--wa-color-gray-05: #101219 ;--wa-color-gray: var(--wa-color-gray-40);--wa-color-gray-key: 40}}@layer wa-theme{:where(:root),.wa-theme-default,.wa-light,.wa-dark .wa-invert,.wa-light .wa-theme-default,.wa-dark .wa-theme-default.wa-invert,.wa-dark .wa-theme-default .wa-invert{color-scheme:light;color:var(--wa-color-text-normal);--wa-color-surface-raised: white;--wa-color-surface-default: white;--wa-color-surface-lowered: var(--wa-color-neutral-95);--wa-color-surface-border: var(--wa-color-neutral-90);--wa-color-text-normal: var(--wa-color-neutral-10);--wa-color-text-quiet: var(--wa-color-neutral-40);--wa-color-text-link: var(--wa-color-brand-40);--wa-color-overlay-modal: color-mix(in oklab, var(--wa-color-neutral-05) 50%, transparent);--wa-color-overlay-inline: color-mix(in oklab, var(--wa-color-neutral-80) 25%, transparent);--wa-color-shadow: color-mix( in oklab, var(--wa-color-neutral-05) calc(var(--wa-shadow-blur-scale) * 4% + 8%), transparent );--wa-color-focus: var(--wa-color-brand-60);--wa-color-mix-hover: black 10%;--wa-color-mix-active: black 20%;--wa-color-brand-fill-quiet: var(--wa-color-brand-95);--wa-color-brand-fill-normal: var(--wa-color-brand-90);--wa-color-brand-fill-loud: var(--wa-color-brand-50);--wa-color-brand-border-quiet: var(--wa-color-brand-90);--wa-color-brand-border-normal: var(--wa-color-brand-80);--wa-color-brand-border-loud: var(--wa-color-brand-60);--wa-color-brand-on-quiet: var(--wa-color-brand-40);--wa-color-brand-on-normal: var(--wa-color-brand-30);--wa-color-brand-on-loud: white;--wa-color-success-fill-quiet: var(--wa-color-success-95);--wa-color-success-fill-normal: var(--wa-color-success-90);--wa-color-success-fill-loud: var(--wa-color-success-50);--wa-color-success-border-quiet: var(--wa-color-success-90);--wa-color-success-border-normal: var(--wa-color-success-80);--wa-color-success-border-loud: var(--wa-color-success-60);--wa-color-success-on-quiet: var(--wa-color-success-40);--wa-color-success-on-normal: var(--wa-color-success-30);--wa-color-success-on-loud: white;--wa-color-warning-fill-quiet: var(--wa-color-warning-95);--wa-color-warning-fill-normal: var(--wa-color-warning-90);--wa-color-warning-fill-loud: var(--wa-color-warning-50);--wa-color-warning-border-quiet: var(--wa-color-warning-90);--wa-color-warning-border-normal: var(--wa-color-warning-80);--wa-color-warning-border-loud: var(--wa-color-warning-60);--wa-color-warning-on-quiet: var(--wa-color-warning-40);--wa-color-warning-on-normal: var(--wa-color-warning-30);--wa-color-warning-on-loud: white;--wa-color-danger-fill-quiet: var(--wa-color-danger-95);--wa-color-danger-fill-normal: var(--wa-color-danger-90);--wa-color-danger-fill-loud: var(--wa-color-danger-50);--wa-color-danger-border-quiet: var(--wa-color-danger-90);--wa-color-danger-border-normal: var(--wa-color-danger-80);--wa-color-danger-border-loud: var(--wa-color-danger-60);--wa-color-danger-on-quiet: var(--wa-color-danger-40);--wa-color-danger-on-normal: var(--wa-color-danger-30);--wa-color-danger-on-loud: white;--wa-color-neutral-fill-quiet: var(--wa-color-neutral-95);--wa-color-neutral-fill-normal: var(--wa-color-neutral-90);--wa-color-neutral-fill-loud: var(--wa-color-neutral-20);--wa-color-neutral-border-quiet: var(--wa-color-neutral-90);--wa-color-neutral-border-normal: var(--wa-color-neutral-80);--wa-color-neutral-border-loud: var(--wa-color-neutral-60);--wa-color-neutral-on-quiet: var(--wa-color-neutral-40);--wa-color-neutral-on-normal: var(--wa-color-neutral-30);--wa-color-neutral-on-loud: white}.wa-dark,.wa-invert,.wa-dark .wa-theme-default,.wa-light .wa-theme-default.wa-invert,.wa-light .wa-theme-default .wa-invert{color-scheme:dark;color:var(--wa-color-text-normal);--wa-color-surface-raised: var(--wa-color-neutral-10);--wa-color-surface-default: var(--wa-color-neutral-05);--wa-color-surface-lowered: color-mix(in oklab, var(--wa-color-surface-default), black 20%);--wa-color-surface-border: var(--wa-color-neutral-20);--wa-color-text-normal: var(--wa-color-neutral-95);--wa-color-text-quiet: var(--wa-color-neutral-60);--wa-color-text-link: var(--wa-color-brand-70);--wa-color-overlay-modal: color-mix(in oklab, black 60%, transparent);--wa-color-overlay-inline: color-mix(in oklab, var(--wa-color-neutral-50) 10%, transparent);--wa-color-shadow: color-mix( in oklab, var(--wa-color-surface-lowered) calc(var(--wa-shadow-blur-scale) * 32% + 40%), transparent );--wa-color-focus: var(--wa-color-brand-60);--wa-color-mix-hover: black 8%;--wa-color-mix-active: black 16%;--wa-color-brand-fill-quiet: var(--wa-color-brand-10);--wa-color-brand-fill-normal: var(--wa-color-brand-20);--wa-color-brand-fill-loud: var(--wa-color-brand-50);--wa-color-brand-border-quiet: var(--wa-color-brand-20);--wa-color-brand-border-normal: var(--wa-color-brand-30);--wa-color-brand-border-loud: var(--wa-color-brand-40);--wa-color-brand-on-quiet: var(--wa-color-brand-60);--wa-color-brand-on-normal: var(--wa-color-brand-70);--wa-color-brand-on-loud: white;--wa-color-success-fill-quiet: var(--wa-color-success-10);--wa-color-success-fill-normal: var(--wa-color-success-20);--wa-color-success-fill-loud: var(--wa-color-success-50);--wa-color-success-border-quiet: var(--wa-color-success-20);--wa-color-success-border-normal: var(--wa-color-success-30);--wa-color-success-border-loud: var(--wa-color-success-40);--wa-color-success-on-quiet: var(--wa-color-success-60);--wa-color-success-on-normal: var(--wa-color-success-70);--wa-color-success-on-loud: white;--wa-color-warning-fill-quiet: var(--wa-color-warning-10);--wa-color-warning-fill-normal: var(--wa-color-warning-20);--wa-color-warning-fill-loud: var(--wa-color-warning-50);--wa-color-warning-border-quiet: var(--wa-color-warning-20);--wa-color-warning-border-normal: var(--wa-color-warning-30);--wa-color-warning-border-loud: var(--wa-color-warning-40);--wa-color-warning-on-quiet: var(--wa-color-warning-60);--wa-color-warning-on-normal: var(--wa-color-warning-70);--wa-color-warning-on-loud: white;--wa-color-danger-fill-quiet: var(--wa-color-danger-10);--wa-color-danger-fill-normal: var(--wa-color-danger-20);--wa-color-danger-fill-loud: var(--wa-color-danger-50);--wa-color-danger-border-quiet: var(--wa-color-danger-20);--wa-color-danger-border-normal: var(--wa-color-danger-30);--wa-color-danger-border-loud: var(--wa-color-danger-40);--wa-color-danger-on-quiet: var(--wa-color-danger-60);--wa-color-danger-on-normal: var(--wa-color-danger-70);--wa-color-danger-on-loud: white;--wa-color-neutral-fill-quiet: var(--wa-color-neutral-10);--wa-color-neutral-fill-normal: var(--wa-color-neutral-20);--wa-color-neutral-fill-loud: var(--wa-color-neutral-90);--wa-color-neutral-border-quiet: var(--wa-color-neutral-20);--wa-color-neutral-border-normal: var(--wa-color-neutral-30);--wa-color-neutral-border-loud: var(--wa-color-neutral-40);--wa-color-neutral-on-quiet: var(--wa-color-neutral-60);--wa-color-neutral-on-normal: var(--wa-color-neutral-70);--wa-color-neutral-on-loud: var(--wa-color-neutral-05)}:where(:root),.wa-theme-default,.wa-light,.wa-dark,.wa-invert{font-family:var(--wa-font-family-body);--wa-font-family-body: ui-sans-serif, system-ui, sans-serif;--wa-font-family-heading: var(--wa-font-family-body);--wa-font-family-code: ui-monospace, monospace;--wa-font-family-longform: ui-serif, serif;--wa-font-size-scale: 1;--wa-font-size-3xs: round(calc(var(--wa-font-size-2xs) / 1.125), 1px);--wa-font-size-2xs: round(calc(var(--wa-font-size-xs) / 1.125), 1px);--wa-font-size-xs: round(calc(var(--wa-font-size-s) / 1.125), 1px);--wa-font-size-s: round(calc(var(--wa-font-size-m) / 1.125), 1px);--wa-font-size-m: calc(1rem * var(--wa-font-size-scale));--wa-font-size-l: round(calc(var(--wa-font-size-m) * 1.125 * 1.125), 1px);--wa-font-size-xl: round(calc(var(--wa-font-size-l) * 1.125 * 1.125), 1px);--wa-font-size-2xl: round(calc(var(--wa-font-size-xl) * 1.125 * 1.125), 1px);--wa-font-size-3xl: round(calc(var(--wa-font-size-2xl) * 1.125 * 1.125), 1px);--wa-font-size-4xl: round(calc(var(--wa-font-size-3xl) * 1.125 * 1.125), 1px);--wa-font-size-5xl: round(calc(var(--wa-font-size-4xl) * 1.125 * 1.125), 1px);--wa-font-size-smaller: round(calc(1em / 1.125), 1px);--wa-font-size-larger: round(calc(1em * 1.125 * 1.125), 1px);--wa-font-weight-light: 300;--wa-font-weight-normal: 400;--wa-font-weight-semibold: 500;--wa-font-weight-bold: 600;--wa-font-weight-body: var(--wa-font-weight-normal);--wa-font-weight-heading: var(--wa-font-weight-bold);--wa-font-weight-code: var(--wa-font-weight-normal);--wa-font-weight-longform: var(--wa-font-weight-normal);--wa-font-weight-action: var(--wa-font-weight-semibold);--wa-line-height-condensed: 1.2;--wa-line-height-normal: 1.6;--wa-line-height-expanded: 2;--wa-link-decoration-default: underline color-mix(in oklab, currentColor 70%, transparent) dotted;--wa-link-decoration-hover: underline;--wa-space-scale: 1;--wa-space-3xs: calc(var(--wa-space-scale) * .125rem);--wa-space-2xs: calc(var(--wa-space-scale) * .25rem);--wa-space-xs: calc(var(--wa-space-scale) * .5rem);--wa-space-s: calc(var(--wa-space-scale) * .75rem);--wa-space-m: calc(var(--wa-space-scale) * 1rem);--wa-space-l: calc(var(--wa-space-scale) * 1.5rem);--wa-space-xl: calc(var(--wa-space-scale) * 2rem);--wa-space-2xl: calc(var(--wa-space-scale) * 2.5rem);--wa-space-3xl: calc(var(--wa-space-scale) * 3rem);--wa-space-4xl: calc(var(--wa-space-scale) * 4rem);--wa-space-5xl: calc(var(--wa-space-scale) * 5rem);--wa-content-spacing: var(--wa-space-l);--wa-border-style: solid;--wa-border-width-scale: 1;--wa-border-width-s: calc(var(--wa-border-width-scale) * .0625rem);--wa-border-width-m: calc(var(--wa-border-width-scale) * .125rem);--wa-border-width-l: calc(var(--wa-border-width-scale) * .1875rem);--wa-border-radius-scale: 1;--wa-border-radius-s: calc(var(--wa-border-radius-scale) * .1875rem);--wa-border-radius-m: calc(var(--wa-border-radius-scale) * .375rem);--wa-border-radius-l: calc(var(--wa-border-radius-scale) * .75rem);--wa-border-radius-pill: 9999px;--wa-border-radius-circle: 50%;--wa-border-radius-square: 0px;--wa-focus-ring-style: solid;--wa-focus-ring-width: .1875rem;--wa-focus-ring: var(--wa-focus-ring-style) var(--wa-focus-ring-width) var(--wa-color-focus);--wa-focus-ring-offset: .0625rem;--wa-shadow-offset-x-scale: 0;--wa-shadow-offset-x-s: calc(var(--wa-shadow-offset-x-scale) * .125rem);--wa-shadow-offset-x-m: calc(var(--wa-shadow-offset-x-scale) * .25rem);--wa-shadow-offset-x-l: calc(var(--wa-shadow-offset-x-scale) * .5rem);--wa-shadow-offset-y-scale: 1;--wa-shadow-offset-y-s: calc(var(--wa-shadow-offset-y-scale) * .125rem);--wa-shadow-offset-y-m: calc(var(--wa-shadow-offset-y-scale) * .25rem);--wa-shadow-offset-y-l: calc(var(--wa-shadow-offset-y-scale) * .5rem);--wa-shadow-blur-scale: 1;--wa-shadow-blur-s: calc(var(--wa-shadow-blur-scale) * .125rem);--wa-shadow-blur-m: calc(var(--wa-shadow-blur-scale) * .25rem);--wa-shadow-blur-l: calc(var(--wa-shadow-blur-scale) * .5rem);--wa-shadow-spread-scale: -.5;--wa-shadow-spread-s: calc(var(--wa-shadow-spread-scale) * .125rem);--wa-shadow-spread-m: calc(var(--wa-shadow-spread-scale) * .25rem);--wa-shadow-spread-l: calc(var(--wa-shadow-spread-scale) * .5rem);--wa-shadow-s: var(--wa-shadow-offset-x-s) var(--wa-shadow-offset-y-s) var(--wa-shadow-blur-s) var(--wa-shadow-spread-s) var(--wa-color-shadow);--wa-shadow-m: var(--wa-shadow-offset-x-m) var(--wa-shadow-offset-y-m) var(--wa-shadow-blur-m) var(--wa-shadow-spread-m) var(--wa-color-shadow);--wa-shadow-l: var(--wa-shadow-offset-x-l) var(--wa-shadow-offset-y-l) var(--wa-shadow-blur-l) var(--wa-shadow-spread-l) var(--wa-color-shadow);--wa-transition-easing: ease;--wa-transition-slow: .3s;--wa-transition-normal: .15s;--wa-transition-fast: 75ms;--wa-form-control-background-color: var(--wa-color-surface-default);--wa-form-control-border-color: var(--wa-color-neutral-border-loud);--wa-form-control-border-style: var(--wa-border-style);--wa-form-control-border-width: var(--wa-border-width-s);--wa-form-control-border-radius: var(--wa-border-radius-m);--wa-form-control-activated-color: var(--wa-color-brand-fill-loud);--wa-form-control-label-color: var(--wa-color-text-normal);--wa-form-control-label-font-weight: var(--wa-font-weight-semibold);--wa-form-control-label-line-height: var(--wa-line-height-condensed);--wa-form-control-value-color: var(--wa-color-text-normal);--wa-form-control-value-font-weight: var(--wa-font-weight-body);--wa-form-control-value-line-height: var(--wa-line-height-condensed);--wa-form-control-hint-color: var(--wa-color-text-quiet);--wa-form-control-hint-font-weight: var(--wa-font-weight-body);--wa-form-control-hint-line-height: var(--wa-line-height-normal);--wa-form-control-placeholder-color: var(--wa-color-gray-50);--wa-form-control-required-content: "*";--wa-form-control-required-content-color: inherit;--wa-form-control-required-content-offset: .1em;--wa-form-control-padding-block: .75em;--wa-form-control-padding-inline: 1em;--wa-form-control-height: round( calc(2 * var(--wa-form-control-padding-block) + 1em * var(--wa-form-control-value-line-height)), 1px );--wa-form-control-toggle-size: round(1.25em, 1px);--wa-panel-border-style: var(--wa-border-style);--wa-panel-border-width: var(--wa-border-width-s);--wa-panel-border-radius: var(--wa-border-radius-l);--wa-tooltip-arrow-size: .375rem;--wa-tooltip-background-color: var(--wa-color-text-normal);--wa-tooltip-border-color: var(--wa-tooltip-background-color);--wa-tooltip-border-style: var(--wa-border-style);--wa-tooltip-border-width: var(--wa-border-width-s);--wa-tooltip-border-radius: var(--wa-border-radius-s);--wa-tooltip-content-color: var(--wa-color-surface-default);--wa-tooltip-font-size: var(--wa-font-size-s);--wa-tooltip-line-height: var(--wa-line-height-normal)}}', Mr = `@layer wa-native,wa-utilities,wa-color-palette,wa-color-variant,wa-theme,wa-theme-dimension,wa-theme-overrides;@layer wa-utilities{.wa-size-s{font-size:var(--wa-font-size-s)}.wa-size-m{font-size:var(--wa-font-size-m)}.wa-size-l{font-size:var(--wa-font-size-l)}}@layer wa-utilities{:where(:root),.wa-neutral{--wa-color-fill-loud: var(--wa-color-neutral-fill-loud);--wa-color-fill-normal: var(--wa-color-neutral-fill-normal);--wa-color-fill-quiet: var(--wa-color-neutral-fill-quiet);--wa-color-border-loud: var(--wa-color-neutral-border-loud);--wa-color-border-normal: var(--wa-color-neutral-border-normal);--wa-color-border-quiet: var(--wa-color-neutral-border-quiet);--wa-color-on-loud: var(--wa-color-neutral-on-loud);--wa-color-on-normal: var(--wa-color-neutral-on-normal);--wa-color-on-quiet: var(--wa-color-neutral-on-quiet)}.wa-brand{--wa-color-fill-loud: var(--wa-color-brand-fill-loud);--wa-color-fill-normal: var(--wa-color-brand-fill-normal);--wa-color-fill-quiet: var(--wa-color-brand-fill-quiet);--wa-color-border-loud: var(--wa-color-brand-border-loud);--wa-color-border-normal: var(--wa-color-brand-border-normal);--wa-color-border-quiet: var(--wa-color-brand-border-quiet);--wa-color-on-loud: var(--wa-color-brand-on-loud);--wa-color-on-normal: var(--wa-color-brand-on-normal);--wa-color-on-quiet: var(--wa-color-brand-on-quiet)}.wa-success{--wa-color-fill-loud: var(--wa-color-success-fill-loud);--wa-color-fill-normal: var(--wa-color-success-fill-normal);--wa-color-fill-quiet: var(--wa-color-success-fill-quiet);--wa-color-border-loud: var(--wa-color-success-border-loud);--wa-color-border-normal: var(--wa-color-success-border-normal);--wa-color-border-quiet: var(--wa-color-success-border-quiet);--wa-color-on-loud: var(--wa-color-success-on-loud);--wa-color-on-normal: var(--wa-color-success-on-normal);--wa-color-on-quiet: var(--wa-color-success-on-quiet)}.wa-warning{--wa-color-fill-loud: var(--wa-color-warning-fill-loud);--wa-color-fill-normal: var(--wa-color-warning-fill-normal);--wa-color-fill-quiet: var(--wa-color-warning-fill-quiet);--wa-color-border-loud: var(--wa-color-warning-border-loud);--wa-color-border-normal: var(--wa-color-warning-border-normal);--wa-color-border-quiet: var(--wa-color-warning-border-quiet);--wa-color-on-loud: var(--wa-color-warning-on-loud);--wa-color-on-normal: var(--wa-color-warning-on-normal);--wa-color-on-quiet: var(--wa-color-warning-on-quiet)}.wa-danger{--wa-color-fill-loud: var(--wa-color-danger-fill-loud);--wa-color-fill-normal: var(--wa-color-danger-fill-normal);--wa-color-fill-quiet: var(--wa-color-danger-fill-quiet);--wa-color-border-loud: var(--wa-color-danger-border-loud);--wa-color-border-normal: var(--wa-color-danger-border-normal);--wa-color-border-quiet: var(--wa-color-danger-border-quiet);--wa-color-on-loud: var(--wa-color-danger-on-loud);--wa-color-on-normal: var(--wa-color-danger-on-normal);--wa-color-on-quiet: var(--wa-color-danger-on-quiet)}}@layer wa-native{html{box-sizing:border-box;margin:0;padding:0;-moz-tab-size:4;tab-size:4;background-color:var(--wa-color-surface-default)}*,*:before,*:after{box-sizing:inherit}body{min-height:100vh;margin:0;padding:0;color:var(--wa-color-text-normal);font-family:var(--wa-font-family-body);font-size:var(--wa-font-size-m);font-weight:var(--wa-font-weight-body);line-height:var(--wa-line-height-normal);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;text-size-adjust:none;-moz-text-size-adjust:none;-webkit-text-size-adjust:none}address,audio,blockquote,dd,details,dl,fieldset,figure,h1,h2,h3,h4,h5,h6,hr,iframe,ol,p,pre,table,ul,video{margin:0}address:has(+*),audio:has(+*),blockquote:has(+*),dd:has(+*),details:has(+*),dl:has(+*),fieldset:has(+*),figure:has(+*),h1:has(+*),h2:has(+*),h3:has(+*),h4:has(+*),h5:has(+*),h6:has(+*),hr:has(+*),iframe:has(+*),ol:has(+*),p:has(+*),pre:has(+*),table:has(+*),ul:has(+*),video:has(+*){margin-block-end:var(--wa-content-spacing)}h1,h2,h3,h4,h5,h6{font-family:var(--wa-font-family-heading);font-weight:var(--wa-font-weight-heading);line-height:var(--wa-line-height-condensed);text-wrap:balance}h1{font-size:var(--wa-font-size-3xl)}h2{font-size:var(--wa-font-size-2xl)}h3{font-size:var(--wa-font-size-xl)}h4{font-size:var(--wa-font-size-l)}h5{font-size:var(--wa-font-size-m)}h6{font-size:var(--wa-font-size-s)}p{text-wrap:pretty}blockquote{padding:var(--wa-space-xl);font-family:var(--wa-font-family-longform);font-size:var(--wa-font-size-l);border-inline-start:var(--wa-border-style) var(--wa-border-width-l) var(--wa-color-neutral-border-quiet)}hr{margin:var(--wa-content-spacing) 0;border:none;border-bottom:solid var(--wa-border-width-s) var(--wa-color-surface-border)}ul,ol{padding:0}li>ul,li>ol{margin-inline-start:.25em}ul{list-style:disc}li{margin-inline-start:1.125em;padding:0}dt,strong,b{font-weight:var(--wa-font-weight-bold)}em,i{font-style:italic}u{text-decoration-line:underline;text-decoration-thickness:.09375em;text-underline-offset:.125em}s{text-decoration-line:line-through;text-decoration-thickness:.09375em}ins{text-decoration-color:var(--wa-color-success-on-quiet);text-decoration-line:underline;text-decoration-thickness:.09375em;text-underline-offset:.125em}del{color:color-mix(in oklab,currentColor,transparent 10%);text-decoration-color:var(--wa-color-danger-on-quiet);text-decoration-line:line-through;text-decoration-thickness:.09375em}mark{padding:.125em .25em;color:var(--wa-color-warning-on-quiet);background-color:var(--wa-color-warning-fill-quiet);border-radius:var(--wa-border-radius-s)}small{font-size:var(--wa-font-size-smaller)}sub,sup{font-size:var(--wa-font-size-smaller);line-height:0}sub{vertical-align:sub}sup{vertical-align:super}abbr[title]{text-decoration-line:underline;text-decoration-style:dotted;text-decoration-thickness:.09375em;text-underline-offset:.125em;cursor:help}kbd{padding:.125em .25em;font-family:var(--wa-font-family-code);font-size:var(--wa-font-size-smaller);font-weight:var(--wa-font-weight-code);border:solid var(--wa-border-width-s) color-mix(in oklab,currentColor,transparent 50%);border-radius:var(--wa-border-radius-s);box-shadow:0 .125em color-mix(in oklab,currentColor,transparent 50%)}kbd wa-icon{vertical-align:-2px}a{color:var(--wa-color-text-link);text-decoration:var(--wa-link-decoration-default);-webkit-text-decoration:var(--wa-link-decoration-default);text-decoration-thickness:.09375em;text-underline-offset:.125em}*:is([appearance~=accent],.wa-accent) a,*:is([appearance~=accent],.wa-accent) a:hover{color:currentColor}a:hover{color:color-mix(in oklab,var(--wa-color-text-link),var(--wa-color-mix-hover));text-decoration:var(--wa-link-decoration-hover);-webkit-text-decoration:var(--wa-link-decoration-hover)}a:focus,button:focus{outline:none}a:focus-visible,button:focus-visible{outline:var(--wa-focus-ring);outline-offset:var(--wa-focus-ring-offset)}code,samp,var{padding:.125em .25em;font-family:var(--wa-font-family-code);font-size:var(--wa-font-size-smaller);font-weight:var(--wa-font-weight-code);background-color:var(--wa-color-overlay-inline);border-radius:var(--wa-border-radius-s)}pre{padding:var(--wa-space-m);font-family:var(--wa-font-family-code);font-size:var(--wa-font-size-smaller);font-weight:var(--wa-font-weight-code);white-space:pre;background-color:var(--wa-color-overlay-inline);border-radius:var(--wa-border-radius-m)}pre code,pre samp,pre var{padding:0;font-size:1em;background-color:transparent}@media print{pre{background:none;border:solid var(--wa-border-width-s) var(--wa-color-surface-border)}}img,svg,picture,video{max-width:100%;height:auto}img,picture,video{border-radius:var(--wa-border-radius-m)}embed,iframe,object{max-width:100%}iframe{border:none}table{width:100%;border:none;border-collapse:collapse}caption{color:var(--wa-color-text-quiet);font-size:var(--wa-font-size-smaller)}caption:has(+*){margin-block-end:.75em}tbody tr{border-top:solid var(--wa-border-width-s) var(--wa-color-border-quiet)}:where(table.wa-zebra-rows) :is(tbody tr):nth-child(odd){background-color:color-mix(in oklab,var(--wa-color-fill-quiet) 60%,transparent)}@media (hover: hover){:where(table.wa-hover-rows) :is(tbody tr):hover{background-color:var(--wa-color-fill-quiet)}:where(table.wa-hover-rows) :is(tbody tr):hover,:where(table.wa-hover-rows) :is(tbody tr):hover+tr{border-top-color:var(--wa-color-border-normal)}}td,th{padding:.75em;text-align:start;vertical-align:top}th{padding-block:.75em;font-size:var(--wa-font-size-smaller);font-weight:var(--wa-font-weight-bold)}details{padding:0;background-color:var(--wa-color-surface-default);border:var(--wa-panel-border-width) var(--wa-color-surface-border) var(--wa-panel-border-style);border-radius:var(--wa-panel-border-radius);overflow-anchor:none}details summary{display:flex;align-items:center;justify-content:space-between;padding:var(--wa-space-m);border-radius:calc(var(--wa-panel-border-radius) - var(--wa-panel-border-width));cursor:pointer;user-select:none;-webkit-user-select:none}details summary>*{margin:0}details summary:focus{outline:none}details summary:focus-visible{outline:var(--wa-focus-ring);outline-offset:calc(var(--wa-panel-border-width) + var(--wa-focus-ring-offset))}details[open]{padding:0 var(--wa-space-m) var(--wa-space-m) var(--wa-space-m)}details[open] summary{margin-inline:calc(-1 * var(--wa-space-m));border-end-start-radius:0;border-end-end-radius:0}details::details-content{box-sizing:border-box}@media print{details{background:none;border:solid var(--wa-border-width-s) var(--wa-color-surface-border)}details summary{list-style:none}}details summary::marker,details summary::-webkit-details-marker{display:none}details summary:after{content:"";background-color:var(--wa-color-text-quiet);mask:url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M311.1 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L243.2 256 73.9 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>') center no-repeat;width:1rem;height:1rem;rotate:0deg}details summary:dir(rtl):after{rotate:180deg}details[open] summary:after{rotate:90deg}dialog{flex-direction:column;align-items:start;width:32rem;max-width:calc(100% - var(--wa-space-l));padding:var(--wa-space-l);background-color:var(--wa-color-surface-raised);border-radius:var(--wa-panel-border-radius);border:none;box-shadow:var(--wa-shadow-l);transition:var(--wa-transition-slow, .2s) var(--wa-transition-easing);margin:auto;top:0;right:0;bottom:0;left:0}dialog[open]{display:flex}dialog:focus{outline:none}dialog::backdrop{background-color:var(--wa-color-overlay-modal, rgb(0 0 0 / .25))}label{display:inline-block;position:relative;color:var(--wa-form-control-label-color);font-weight:var(--wa-form-control-label-font-weight);line-height:var(--wa-form-control-label-line-height)}label:has(input:not([type=button],[type=checkbox],[type=color],[type=file],[type=hidden],[type=image],[type=radio],[type=reset],[type=submit]),textarea,select){width:100%}label+:is(input:not([type=checkbox],[type=radio]),textarea,select),label>:is(input:not([type=checkbox],[type=radio]),textarea,select){margin-block-start:.5em}fieldset{padding:var(--wa-space-l);padding-block-start:calc(var(--wa-space-l) - .5em);border:solid 1px var(--wa-color-surface-border);border-radius:var(--wa-border-radius-m)}legend{padding:0;padding-inline:var(--wa-space-xs);font-weight:var(--wa-form-control-label-font-weight)}button:not(input[type=file]),button::file-selector-button,input[type=button]:not(input[type=file]),input[type=button]::file-selector-button,input[type=reset]:not(input[type=file]),input[type=reset]::file-selector-button,input[type=submit]:not(input[type=file]),input[type=submit]::file-selector-button,input[type=file]:not(input[type=file]),input[type=file]::file-selector-button,a.wa-button:not(input[type=file]),a.wa-button::file-selector-button{display:inline-flex;align-items:center;justify-content:center;height:var(--wa-form-control-height);padding:0 var(--wa-form-control-padding-inline);font-family:inherit;font-size:var(--wa-form-control-value-font-size);font-weight:var(--wa-font-weight-action);line-height:calc(var(--wa-form-control-height) - var(--border-width) * 2);text-decoration:none;vertical-align:middle;white-space:nowrap;border-style:var(--wa-border-style);border-width:max(1px,var(--wa-form-control-border-width));border-radius:var(--wa-form-control-border-radius);transition-property:background,border,box-shadow,color;transition-duration:var(--wa-transition-fast);transition-timing-function:var(--wa-transition-easing);cursor:pointer;user-select:none;-webkit-user-select:none}button:not(input[type=file]),input[type=button]:not(input[type=file]),input[type=reset]:not(input[type=file]),input[type=submit]:not(input[type=file]),input[type=file]:not(input[type=file]),a.wa-button:not(input[type=file]){color:var(--wa-color-on-loud, var(--wa-color-neutral-on-loud));background-color:var(--wa-color-fill-loud, var(--wa-color-neutral-fill-loud));border-color:transparent}button:not(input[type=file]):not(:disabled):hover,input[type=button]:not(input[type=file]):not(:disabled):hover,input[type=reset]:not(input[type=file]):not(:disabled):hover,input[type=submit]:not(input[type=file]):not(:disabled):hover,input[type=file]:not(input[type=file]):not(:disabled):hover,a.wa-button:not(input[type=file]):not(:disabled):hover{background-color:color-mix(in oklab,var(--wa-color-fill-loud, var(--wa-color-neutral-fill-loud)),var(--wa-color-mix-hover))}button:not(input[type=file]):not(:disabled):active,input[type=button]:not(input[type=file]):not(:disabled):active,input[type=reset]:not(input[type=file]):not(:disabled):active,input[type=submit]:not(input[type=file]):not(:disabled):active,input[type=file]:not(input[type=file]):not(:disabled):active,a.wa-button:not(input[type=file]):not(:disabled):active{background-color:color-mix(in oklab,var(--wa-color-fill-loud, var(--wa-color-neutral-fill-loud)),var(--wa-color-mix-active))}button:is(input[type=file])::file-selector-button,input[type=button]:is(input[type=file])::file-selector-button,input[type=reset]:is(input[type=file])::file-selector-button,input[type=submit]:is(input[type=file])::file-selector-button,input[type=file]:is(input[type=file])::file-selector-button,a.wa-button:is(input[type=file])::file-selector-button{color:var(--wa-color-on-normal, var(--wa-color-neutral-on-normal));background-color:var(--wa-color-fill-normal, var(--wa-color-neutral-fill-normal));border-color:transparent}button:is(input[type=file]):not(:disabled)::file-selector-button:hover,input[type=button]:is(input[type=file]):not(:disabled)::file-selector-button:hover,input[type=reset]:is(input[type=file]):not(:disabled)::file-selector-button:hover,input[type=submit]:is(input[type=file]):not(:disabled)::file-selector-button:hover,input[type=file]:is(input[type=file]):not(:disabled)::file-selector-button:hover,a.wa-button:is(input[type=file]):not(:disabled)::file-selector-button:hover{background-color:color-mix(in oklab,var(--wa-color-fill-normal, var(--wa-color-neutral-fill-normal)),var(--wa-color-mix-hover))}button:is(input[type=file]):not(:disabled)::file-selector-button:active,input[type=button]:is(input[type=file]):not(:disabled)::file-selector-button:active,input[type=reset]:is(input[type=file]):not(:disabled)::file-selector-button:active,input[type=submit]:is(input[type=file]):not(:disabled)::file-selector-button:active,input[type=file]:is(input[type=file]):not(:disabled)::file-selector-button:active,a.wa-button:is(input[type=file]):not(:disabled)::file-selector-button:active{background-color:color-mix(in oklab,var(--wa-color-fill-normal, var(--wa-color-neutral-fill-normal)),var(--wa-color-mix-active))}button.wa-plain:not(input[type=file]),button.wa-plain::file-selector-button,input[type=button].wa-plain:not(input[type=file]),input[type=button].wa-plain::file-selector-button,input[type=reset].wa-plain:not(input[type=file]),input[type=reset].wa-plain::file-selector-button,input[type=submit].wa-plain:not(input[type=file]),input[type=submit].wa-plain::file-selector-button,input[type=file].wa-plain:not(input[type=file]),input[type=file].wa-plain::file-selector-button,a.wa-button.wa-plain:not(input[type=file]),a.wa-button.wa-plain::file-selector-button{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:transparent;border-color:transparent}button.wa-plain:not(:disabled):not(input[type=file]):hover,button.wa-plain:not(:disabled)::file-selector-button:hover,input[type=button].wa-plain:not(:disabled):not(input[type=file]):hover,input[type=button].wa-plain:not(:disabled)::file-selector-button:hover,input[type=reset].wa-plain:not(:disabled):not(input[type=file]):hover,input[type=reset].wa-plain:not(:disabled)::file-selector-button:hover,input[type=submit].wa-plain:not(:disabled):not(input[type=file]):hover,input[type=submit].wa-plain:not(:disabled)::file-selector-button:hover,input[type=file].wa-plain:not(:disabled):not(input[type=file]):hover,input[type=file].wa-plain:not(:disabled)::file-selector-button:hover,a.wa-button.wa-plain:not(:disabled):not(input[type=file]):hover,a.wa-button.wa-plain:not(:disabled)::file-selector-button:hover{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet))}button.wa-plain:not(:disabled):not(input[type=file]):active,button.wa-plain:not(:disabled)::file-selector-button:active,input[type=button].wa-plain:not(:disabled):not(input[type=file]):active,input[type=button].wa-plain:not(:disabled)::file-selector-button:active,input[type=reset].wa-plain:not(:disabled):not(input[type=file]):active,input[type=reset].wa-plain:not(:disabled)::file-selector-button:active,input[type=submit].wa-plain:not(:disabled):not(input[type=file]):active,input[type=submit].wa-plain:not(:disabled)::file-selector-button:active,input[type=file].wa-plain:not(:disabled):not(input[type=file]):active,input[type=file].wa-plain:not(:disabled)::file-selector-button:active,a.wa-button.wa-plain:not(:disabled):not(input[type=file]):active,a.wa-button.wa-plain:not(:disabled)::file-selector-button:active{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:color-mix(in oklab,var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)),var(--wa-color-mix-active))}button.wa-outlined:not(input[type=file]),button.wa-outlined::file-selector-button,input[type=button].wa-outlined:not(input[type=file]),input[type=button].wa-outlined::file-selector-button,input[type=reset].wa-outlined:not(input[type=file]),input[type=reset].wa-outlined::file-selector-button,input[type=submit].wa-outlined:not(input[type=file]),input[type=submit].wa-outlined::file-selector-button,input[type=file].wa-outlined:not(input[type=file]),input[type=file].wa-outlined::file-selector-button,a.wa-button.wa-outlined:not(input[type=file]),a.wa-button.wa-outlined::file-selector-button{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:transparent;border-color:var(--wa-color-border-loud, var(--wa-color-neutral-border-loud))}button.wa-outlined:not(:disabled):not(input[type=file]):hover,button.wa-outlined:not(:disabled)::file-selector-button:hover,input[type=button].wa-outlined:not(:disabled):not(input[type=file]):hover,input[type=button].wa-outlined:not(:disabled)::file-selector-button:hover,input[type=reset].wa-outlined:not(:disabled):not(input[type=file]):hover,input[type=reset].wa-outlined:not(:disabled)::file-selector-button:hover,input[type=submit].wa-outlined:not(:disabled):not(input[type=file]):hover,input[type=submit].wa-outlined:not(:disabled)::file-selector-button:hover,input[type=file].wa-outlined:not(:disabled):not(input[type=file]):hover,input[type=file].wa-outlined:not(:disabled)::file-selector-button:hover,a.wa-button.wa-outlined:not(:disabled):not(input[type=file]):hover,a.wa-button.wa-outlined:not(:disabled)::file-selector-button:hover{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet))}button.wa-outlined:not(:disabled):not(input[type=file]):active,button.wa-outlined:not(:disabled)::file-selector-button:active,input[type=button].wa-outlined:not(:disabled):not(input[type=file]):active,input[type=button].wa-outlined:not(:disabled)::file-selector-button:active,input[type=reset].wa-outlined:not(:disabled):not(input[type=file]):active,input[type=reset].wa-outlined:not(:disabled)::file-selector-button:active,input[type=submit].wa-outlined:not(:disabled):not(input[type=file]):active,input[type=submit].wa-outlined:not(:disabled)::file-selector-button:active,input[type=file].wa-outlined:not(:disabled):not(input[type=file]):active,input[type=file].wa-outlined:not(:disabled)::file-selector-button:active,a.wa-button.wa-outlined:not(:disabled):not(input[type=file]):active,a.wa-button.wa-outlined:not(:disabled)::file-selector-button:active{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:color-mix(in oklab,var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)),var(--wa-color-mix-active))}button.wa-filled:not(input[type=file]),button.wa-filled::file-selector-button,input[type=button].wa-filled:not(input[type=file]),input[type=button].wa-filled::file-selector-button,input[type=reset].wa-filled:not(input[type=file]),input[type=reset].wa-filled::file-selector-button,input[type=submit].wa-filled:not(input[type=file]),input[type=submit].wa-filled::file-selector-button,input[type=file].wa-filled:not(input[type=file]),input[type=file].wa-filled::file-selector-button,a.wa-button.wa-filled:not(input[type=file]),a.wa-button.wa-filled::file-selector-button{color:var(--wa-color-on-normal, var(--wa-color-neutral-on-normal));background-color:var(--wa-color-fill-normal, var(--wa-color-neutral-fill-normal));border-color:transparent}button.wa-filled:not(:disabled):not(input[type=file]):hover,button.wa-filled:not(:disabled)::file-selector-button:hover,input[type=button].wa-filled:not(:disabled):not(input[type=file]):hover,input[type=button].wa-filled:not(:disabled)::file-selector-button:hover,input[type=reset].wa-filled:not(:disabled):not(input[type=file]):hover,input[type=reset].wa-filled:not(:disabled)::file-selector-button:hover,input[type=submit].wa-filled:not(:disabled):not(input[type=file]):hover,input[type=submit].wa-filled:not(:disabled)::file-selector-button:hover,input[type=file].wa-filled:not(:disabled):not(input[type=file]):hover,input[type=file].wa-filled:not(:disabled)::file-selector-button:hover,a.wa-button.wa-filled:not(:disabled):not(input[type=file]):hover,a.wa-button.wa-filled:not(:disabled)::file-selector-button:hover{color:var(--wa-color-on-normal, var(--wa-color-neutral-on-normal));background-color:color-mix(in oklab,var(--wa-color-fill-normal, var(--wa-color-neutral-fill-normal)),var(--wa-color-mix-hover))}button.wa-filled:not(:disabled):not(input[type=file]):active,button.wa-filled:not(:disabled)::file-selector-button:active,input[type=button].wa-filled:not(:disabled):not(input[type=file]):active,input[type=button].wa-filled:not(:disabled)::file-selector-button:active,input[type=reset].wa-filled:not(:disabled):not(input[type=file]):active,input[type=reset].wa-filled:not(:disabled)::file-selector-button:active,input[type=submit].wa-filled:not(:disabled):not(input[type=file]):active,input[type=submit].wa-filled:not(:disabled)::file-selector-button:active,input[type=file].wa-filled:not(:disabled):not(input[type=file]):active,input[type=file].wa-filled:not(:disabled)::file-selector-button:active,a.wa-button.wa-filled:not(:disabled):not(input[type=file]):active,a.wa-button.wa-filled:not(:disabled)::file-selector-button:active{color:var(--wa-color-on-normal, var(--wa-color-neutral-on-normal));background-color:color-mix(in oklab,var(--wa-color-fill-normal, var(--wa-color-neutral-fill-normal)),var(--wa-color-mix-active))}button.wa-filled.wa-outlined:not(input[type=file]),button.wa-filled.wa-outlined::file-selector-button,input[type=button].wa-filled.wa-outlined:not(input[type=file]),input[type=button].wa-filled.wa-outlined::file-selector-button,input[type=reset].wa-filled.wa-outlined:not(input[type=file]),input[type=reset].wa-filled.wa-outlined::file-selector-button,input[type=submit].wa-filled.wa-outlined:not(input[type=file]),input[type=submit].wa-filled.wa-outlined::file-selector-button,input[type=file].wa-filled.wa-outlined:not(input[type=file]),input[type=file].wa-filled.wa-outlined::file-selector-button,a.wa-button.wa-filled.wa-outlined:not(input[type=file]),a.wa-button.wa-filled.wa-outlined::file-selector-button{border-color:var(--wa-color-border-normal, var(--wa-color-neutral-border-normal))}button.wa-accent:not(input[type=file]),button.wa-accent::file-selector-button,input[type=button].wa-accent:not(input[type=file]),input[type=button].wa-accent::file-selector-button,input[type=reset].wa-accent:not(input[type=file]),input[type=reset].wa-accent::file-selector-button,input[type=submit].wa-accent:not(input[type=file]),input[type=submit].wa-accent::file-selector-button,input[type=file].wa-accent:not(input[type=file]),input[type=file].wa-accent::file-selector-button,a.wa-button.wa-accent:not(input[type=file]),a.wa-button.wa-accent::file-selector-button{color:var(--wa-color-on-loud, var(--wa-color-neutral-on-loud));background-color:var(--wa-color-fill-loud, var(--wa-color-neutral-fill-loud));border-color:transparent}button.wa-accent:not(:disabled):not(input[type=file]):hover,button.wa-accent:not(:disabled)::file-selector-button:hover,input[type=button].wa-accent:not(:disabled):not(input[type=file]):hover,input[type=button].wa-accent:not(:disabled)::file-selector-button:hover,input[type=reset].wa-accent:not(:disabled):not(input[type=file]):hover,input[type=reset].wa-accent:not(:disabled)::file-selector-button:hover,input[type=submit].wa-accent:not(:disabled):not(input[type=file]):hover,input[type=submit].wa-accent:not(:disabled)::file-selector-button:hover,input[type=file].wa-accent:not(:disabled):not(input[type=file]):hover,input[type=file].wa-accent:not(:disabled)::file-selector-button:hover,a.wa-button.wa-accent:not(:disabled):not(input[type=file]):hover,a.wa-button.wa-accent:not(:disabled)::file-selector-button:hover{background-color:color-mix(in oklab,var(--wa-color-fill-loud, var(--wa-color-neutral-fill-loud)),var(--wa-color-mix-hover))}button.wa-accent:not(:disabled):not(input[type=file]):active,button.wa-accent:not(:disabled)::file-selector-button:active,input[type=button].wa-accent:not(:disabled):not(input[type=file]):active,input[type=button].wa-accent:not(:disabled)::file-selector-button:active,input[type=reset].wa-accent:not(:disabled):not(input[type=file]):active,input[type=reset].wa-accent:not(:disabled)::file-selector-button:active,input[type=submit].wa-accent:not(:disabled):not(input[type=file]):active,input[type=submit].wa-accent:not(:disabled)::file-selector-button:active,input[type=file].wa-accent:not(:disabled):not(input[type=file]):active,input[type=file].wa-accent:not(:disabled)::file-selector-button:active,a.wa-button.wa-accent:not(:disabled):not(input[type=file]):active,a.wa-button.wa-accent:not(:disabled)::file-selector-button:active{background-color:color-mix(in oklab,var(--wa-color-fill-loud, var(--wa-color-neutral-fill-loud)),var(--wa-color-mix-active))}button.wa-pill:not(input[type=file]),button.wa-pill::file-selector-button,input[type=button].wa-pill:not(input[type=file]),input[type=button].wa-pill::file-selector-button,input[type=reset].wa-pill:not(input[type=file]),input[type=reset].wa-pill::file-selector-button,input[type=submit].wa-pill:not(input[type=file]),input[type=submit].wa-pill::file-selector-button,input[type=file].wa-pill:not(input[type=file]),input[type=file].wa-pill::file-selector-button,a.wa-button.wa-pill:not(input[type=file]),a.wa-button.wa-pill::file-selector-button{border-radius:var(--wa-border-radius-pill)}button:focus,input[type=button]:focus,input[type=reset]:focus,input[type=submit]:focus,input[type=file]:focus,a.wa-button:focus{outline:none}button:focus-visible,input[type=button]:focus-visible,input[type=reset]:focus-visible,input[type=submit]:focus-visible,input[type=file]:focus-visible,a.wa-button:focus-visible{outline:var(--wa-focus-ring);outline-offset:var(--wa-focus-ring-offset)}button:is(::-moz-focus-inner),input[type=button]:is(::-moz-focus-inner),input[type=reset]:is(::-moz-focus-inner),input[type=submit]:is(::-moz-focus-inner),input[type=file]:is(::-moz-focus-inner),a.wa-button:is(::-moz-focus-inner){border:0}button:disabled,input[type=button]:disabled,input[type=reset]:disabled,input[type=submit]:disabled,input[type=file]:disabled,a.wa-button:disabled{opacity:.5;cursor:not-allowed}button:disabled *,input[type=button]:disabled *,input[type=reset]:disabled *,input[type=submit]:disabled *,input[type=file]:disabled *,a.wa-button:disabled *{pointer-events:none}button>wa-icon:has(+*),input[type=button]>wa-icon:has(+*),input[type=reset]>wa-icon:has(+*),input[type=submit]>wa-icon:has(+*),input[type=file]>wa-icon:has(+*),a.wa-button>wa-icon:has(+*){margin-inline-end:.75em}button>*+wa-icon,input[type=button]>*+wa-icon,input[type=reset]>*+wa-icon,input[type=submit]>*+wa-icon,input[type=file]>*+wa-icon,a.wa-button>*+wa-icon{margin-inline-start:.75em}input[type=file]{display:block;max-inline-size:100%;color:var(--wa-form-control-value-color);font-family:inherit;font-size:var(--wa-form-control-value-font-size);font-weight:var(--wa-form-control-value-font-weight);line-height:var(--wa-form-control-value-line-height);vertical-align:middle;border-radius:var(--wa-border-radius-m);cursor:pointer}input[type=checkbox],label:has(input[type=checkbox]),input[type=radio],label:has(input[type=radio]){display:inline-flex;width:fit-content;color:var(--wa-form-control-value-color);font-family:inherit;font-size:var(--wa-form-control-value-font-size);font-weight:var(--wa-form-control-value-font-weight);line-height:var(--wa-form-control-value-line-height);user-select:none;-webkit-user-select:none}input[type=checkbox],input[type=checkbox]+label,label:has(input[type=checkbox]),label:has(input[type=checkbox])+label,input[type=radio],input[type=radio]+label,label:has(input[type=radio]),label:has(input[type=radio])+label{cursor:pointer}input[type=checkbox]:disabled,input[type=checkbox]:has(:disabled),label:has(input[type=checkbox]):disabled,label:has(input[type=checkbox]):has(:disabled),input[type=radio]:disabled,input[type=radio]:has(:disabled),label:has(input[type=radio]):disabled,label:has(input[type=radio]):has(:disabled){opacity:.5;cursor:not-allowed}input[type=checkbox],input[type=radio]{-webkit-appearance:none;-moz-appearance:none;appearance:none;flex:0 0 auto;align-items:center;justify-content:center;width:var(--wa-form-control-toggle-size);height:var(--wa-form-control-toggle-size);margin:0;margin-inline-end:.5em;background-color:var(--wa-form-control-background-color);border-color:var(--wa-form-control-border-color);border-style:var(--wa-border-style);border-width:var(--wa-form-control-border-width);transition:background var(--wa-transition-normal),border-color var(--wa-transition-fast),box-shadow var(--wa-transition-fast),color var(--wa-transition-fast);transition-timing-function:var(--wa-transition-easing)}input[type=checkbox]:focus-visible,input[type=radio]:focus-visible{outline:var(--wa-focus-ring);outline-offset:var(--wa-focus-ring-offset)}input[type=checkbox]{--checked-icon-color: var(--wa-color-brand-on-loud);--checked-icon-scale: .8;border-radius:min(calc(var(--wa-form-control-toggle-size) * .375),var(--wa-border-radius-s))}input[type=checkbox]:checked,input[type=checkbox]:indeterminate{color:var(--checked-icon-color);background-color:var(--wa-form-control-activated-color);border-color:var(--wa-form-control-activated-color)}input[type=checkbox]:checked:after,input[type=checkbox]:indeterminate:after{content:"";width:var(--wa-form-control-toggle-size);height:var(--wa-form-control-toggle-size);scale:var(--checked-icon-scale);background-color:currentColor}input[type=checkbox]:checked:after{mask:url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z"/></svg>') center / 1em 1em no-repeat}input[type=checkbox]:indeterminate:after{mask:url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><path d="M431 256c0 17.7-14.3 32-32 32H49c-17.7 0-32-14.3-32-32s14.3-32 32-32h350c17.7 0 32 14.3 32 32z"/></svg>') center no-repeat}input[type=radio]{--checked-icon-color: var(--wa-form-control-activated-color);--checked-icon-scale: .7;color:transparent;border-radius:50%}input[type=radio]:checked{color:var(--checked-icon-color);border-color:var(--wa-form-control-activated-color)}input[type=radio]:checked:after{content:"";aspect-ratio:1;width:100%;scale:var(--checked-icon-scale);background-color:currentColor;border-radius:50%}input:not([type=button],[type=checkbox],[type=color],[type=file],[type=hidden],[type=image],[type=radio],[type=range],[type=reset],[type=submit]),textarea,select{width:100%;height:var(--wa-form-control-height);padding:0 var(--wa-form-control-padding-inline);color:var(--wa-form-control-value-color);font-size:var(--wa-form-control-value-size);font-family:inherit;font-weight:var(--wa-form-control-value-font-weight);line-height:var(--wa-form-control-value-line-height);vertical-align:middle;background-color:var(--wa-form-control-background-color);border-color:var(--wa-form-control-border-color);border-style:var(--wa-form-control-border-style);border-width:var(--wa-form-control-border-width);border-radius:var(--wa-form-control-border-radius);transition:background-color var(--wa-transition-normal),border var(--wa-transition-normal),outline var(--wa-transition-fast);transition-timing-function:var(--wa-transition-easing);cursor:text}input:not([type=button],[type=checkbox],[type=color],[type=file],[type=hidden],[type=image],[type=radio],[type=range],[type=reset],[type=submit])::placeholder,textarea::placeholder,select::placeholder{color:var(--wa-form-control-placeholder-color);user-select:none;-webkit-user-select:none}input:not([type=button],[type=checkbox],[type=color],[type=file],[type=hidden],[type=image],[type=radio],[type=range],[type=reset],[type=submit]):focus,textarea:focus,select:focus{outline:none}input:not([type=button],[type=checkbox],[type=color],[type=file],[type=hidden],[type=image],[type=radio],[type=range],[type=reset],[type=submit]):focus-visible,textarea:focus-visible,select:focus-visible{outline:var(--wa-focus-ring);outline-offset:var(--wa-focus-ring-offset)}input:not([type=button],[type=checkbox],[type=color],[type=file],[type=hidden],[type=image],[type=radio],[type=range],[type=reset],[type=submit]):disabled,textarea:disabled,select:disabled{opacity:.5;cursor:not-allowed}input:not([type=button],[type=checkbox],[type=color],[type=file],[type=hidden],[type=image],[type=radio],[type=range],[type=reset],[type=submit]).wa-outlined,textarea.wa-outlined,select.wa-outlined{background-color:var(--wa-form-control-background-color);border-color:var(--wa-form-control-border-color)}input:not([type=button],[type=checkbox],[type=color],[type=file],[type=hidden],[type=image],[type=radio],[type=range],[type=reset],[type=submit]).wa-filled,textarea.wa-filled,select.wa-filled{background-color:var(--wa-color-neutral-fill-quiet);border-color:var(--wa-color-neutral-fill-quiet)}input:not([type=button],[type=checkbox],[type=color],[type=file],[type=hidden],[type=image],[type=radio],[type=range],[type=reset],[type=submit]).wa-filled.wa-outlined,textarea.wa-filled.wa-outlined,select.wa-filled.wa-outlined{border-color:var(--wa-form-control-border-color)}input:not([type=button],[type=checkbox],[type=color],[type=file],[type=hidden],[type=image],[type=radio],[type=range],[type=reset],[type=submit]).wa-pill,textarea.wa-pill,select.wa-pill{border-radius:var(--wa-border-radius-pill)}textarea{height:auto;min-height:var(--wa-form-control-height);padding:calc(var(--wa-form-control-padding-block) - ((1lh - 1em) / 2)) var(--wa-form-control-padding-inline);line-height:var(--wa-line-height-normal);resize:vertical}select{--icon-caret: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="rgb(180 180 200)" d="M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>');-webkit-appearance:none;-moz-appearance:none;appearance:none;position:relative;min-width:0;overflow:hidden;background-image:var(--icon-caret),var(--icon-caret);background-repeat:no-repeat;background-position:center right var(--wa-form-control-padding-inline);background-blend-mode:hue,difference;background-size:1rem 1rem;cursor:pointer}input[type=color]{display:block;block-size:var(--wa-form-control-height);inline-size:var(--wa-form-control-height);padding:calc(var(--wa-form-control-border-width) * 2);font-size:1em;background:transparent;border:var(--wa-form-control-border-width) var(--wa-border-style) var(--wa-form-control-border-color);border-radius:var(--wa-form-control-border-radius);cursor:pointer;forced-color-adjust:none}input[type=color]::-webkit-color-swatch-wrapper{padding:0;border-radius:inherit}input[type=color]::-webkit-color-swatch{border:none;border-radius:calc(var(--wa-form-control-border-radius) - var(--wa-form-control-border-width) * 3)}input[type=color]::-moz-color-swatch{border:none;border-radius:calc(var(--wa-form-control-border-radius) - var(--wa-form-control-border-width) * 3)}input[type=color]:focus-visible{outline:var(--wa-focus-ring);outline-offset:var(--wa-focus-ring-offset)}input[type=range]{--thumb-width: 1.4em;--thumb-height: 1.4em;--track-size: .5em;-webkit-appearance:none;display:flex;flex-direction:column;position:relative;width:100%;height:var(--track-size);margin:0;font-size:inherit;line-height:var(--wa-form-control-height);vertical-align:middle;background-color:var(--wa-color-neutral-fill-normal);border-radius:calc(var(--track-size) / 2)}input[type=range]::-webkit-slider-runnable-track{width:100%;height:var(--track-size);border:none;border-radius:999px}input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;width:var(--thumb-width);height:var(--thumb-height);margin-top:calc(var(--thumb-height) / -2 + var(--track-size) / 2);background-color:var(--wa-form-control-activated-color);border:solid .125em var(--wa-color-surface-default);border-radius:50%;transition-property:background-color,border-color,box-shadow,color;transition-duration:var(--wa-transition-normal);transition-timing-function:var(--wa-transition-easing)}input[type=range]:enabled:focus-visible::-webkit-slider-thumb{outline:var(--wa-focus-ring);outline-offset:var(--wa-focus-ring-offset)}input[type=range]:enabled::-webkit-slider-thumb{cursor:pointer}input[type=range]:enabled::-webkit-slider-thumb:active{cursor:grabbing}input[type=range]::-moz-focus-outer{border:0}input[type=range]::-moz-range-progress{height:var(--track-size);background-color:var(--wa-color-neutral-fill-normal);border-radius:3px}input[type=range]::-moz-range-track{width:100%;height:var(--track-size);background-color:var(--wa-color-neutral-fill-normal);border:none;border-radius:999px}input[type=range]::-moz-range-thumb{width:var(--thumb-width);height:var(--thumb-height);background-color:var(--wa-form-control-activated-color);border:solid .125em var(--wa-color-surface-default);border-radius:50%;transition-property:background-color,border-color,box-shadow,color;transition-duration:var(--wa-transition-normal);transition-timing-function:var(--wa-transition-easing)}input[type=range]:enabled:focus-visible::-moz-range-thumb{outline:var(--wa-focus-ring);outline-offset:var(--wa-focus-ring-offset)}input[type=range]:enabled::-moz-range-thumb{cursor:pointer}input[type=range]:enabled::-moz-range-thumb:active{cursor:grabbing}label>input[type=range]{margin-block-start:1em}input[type=range]:focus{outline:none}input[type=range]:disabled{opacity:.5;cursor:not-allowed}input[type=range]:disabled::-webkit-slider-thumb{cursor:not-allowed}input[type=range]:disabled::-moz-range-thumb{cursor:not-allowed}progress{--indicator-color: var(--wa-color-brand-fill-loud);width:100%;height:1rem;overflow:hidden;color:var(--wa-color-brand-on-loud);background-color:var(--wa-color-neutral-fill-normal);border-radius:var(--wa-border-radius-pill)}progress::-webkit-progress-bar{background:transparent}progress[value]::-webkit-progress-value{background-color:var(--indicator-color)}progress::-moz-progress-bar{background-color:var(--indicator-color)}progress:not([value]){padding-left:var(--inset-inline-start);animation:wa-progress-indeterminate 2.5s infinite cubic-bezier(.37,0,.63,1)}progress:not([value])::-webkit-progress-bar{background-color:var( --indicator-color )}@keyframes wa-fade-in{0%{opacity:0}}@keyframes wa-progress-indeterminate{0%{padding-inline-end:100%}25%,to{padding-inline-end:0%}75%,to{padding-inline-start:100%}}.wa-invalid{--wa-form-control-border-color: var(--wa-color-danger-border-loud);--wa-form-control-activated-color: var(--wa-color-danger-fill-loud);--wa-form-control-value-color: var(--wa-color-danger-on-quiet);--wa-color-focus: var(--wa-color-danger-border-loud);--wa-color-text-quiet: var(--wa-color-danger-on-quiet)}.wa-valid{--wa-form-control-border-color: var(--wa-color-success-border-loud);--wa-form-control-activated-color: var(--wa-color-success-fill-loud);--wa-form-control-value-color: var(--wa-color-success-on-quiet);--wa-color-focus: var(--wa-color-success-border-loud);--wa-color-text-quiet: var(--wa-color-success-on-quiet)}}@layer wa-utilities{.wa-cloak:has(:not(:defined)){animation:2s step-end wa-fouce-cloak}@keyframes wa-fouce-cloak{0%{opacity:0}to{opacity:1}}}@layer wa-utilities{.wa-visually-hidden:not(:focus-within),.wa-visually-hidden-force,.wa-visually-hidden-hint::part(hint),.wa-visually-hidden-label::part(label),.wa-visually-hidden-label::part(form-control-label){position:absolute!important;width:1px!important;height:1px!important;clip:rect(0 0 0 0)!important;clip-path:inset(50%)!important;border:none!important;overflow:hidden!important;white-space:nowrap!important;padding:0!important}}@layer wa-utilities{@supports (scrollbar-gutter: stable){.wa-scroll-lock{scrollbar-gutter:var(--wa-scroll-lock-gutter)!important}.wa-scroll-lock body{overflow:hidden!important}}@supports not (scrollbar-gutter: stable){.wa-scroll-lock body{padding-right:var(--wa-scroll-lock-size)!important;overflow:hidden!important}}}@layer wa-utilities{.wa-placeholder{align-self:stretch;background-color:var(--wa-color-neutral-fill-quiet);border:dashed var(--wa-border-width-s) var(--wa-color-neutral-border-normal);border-radius:var(--wa-border-radius-l);padding:var(--wa-space-3xl)}}@layer wa-utilities{:where(.wa-align-items-start,.wa-align-items-end,.wa-align-items-center,.wa-align-items-stretch,.wa-align-items-baseline){display:flex}.wa-align-items-start{align-items:flex-start}.wa-align-items-end{align-items:flex-end}.wa-align-items-center{align-items:center}.wa-align-items-stretch{align-items:stretch}.wa-align-items-baseline{align-items:baseline}.wa-align-self-start{align-self:flex-start}.wa-align-self-end{align-self:flex-end}.wa-align-self-center{align-self:center}.wa-align-self-stretch{align-self:stretch}.wa-align-self-baseline{align-self:baseline}}@layer wa-utilities{:where(.wa-justify-content-start,.wa-justify-content-end,.wa-justify-content-center,.wa-justify-content-space-around,.wa-justify-content-space-between,.wa-justify-content-space-evenly){display:flex}.wa-justify-content-start{justify-content:flex-start}.wa-justify-content-end{justify-content:flex-end}.wa-justify-content-center{justify-content:center}.wa-justify-content-space-around{justify-content:space-around}.wa-justify-content-space-between{justify-content:space-between}.wa-justify-content-space-evenly{justify-content:space-evenly}}@layer wa-utilities{:where(.wa-flex-wrap,.wa-flex-nowrap,.wa-flex-wrap-reverse){display:flex}.wa-flex-wrap{flex-wrap:wrap}.wa-flex-nowrap{flex-wrap:nowrap}.wa-flex-wrap-reverse{flex-wrap:wrap-reverse}}@layer wa-utilities{.wa-border-radius-s{border-radius:var(--wa-border-radius-s)}.wa-border-radius-m{border-radius:var(--wa-border-radius-m)}.wa-border-radius-l{border-radius:var(--wa-border-radius-l)}.wa-border-radius-pill{border-radius:var(--wa-border-radius-pill)}.wa-border-radius-circle{border-radius:var(--wa-border-radius-circle)}.wa-border-radius-square{border-radius:var(--wa-border-radius-square)}}@layer wa-utilities{:where(.wa-gap-0,.wa-gap-3xs,.wa-gap-2xs,.wa-gap-xs,.wa-gap-s,.wa-gap-m,.wa-gap-l,.wa-gap-xl,.wa-gap-2xl,.wa-gap-3xl,.wa-gap-4xl,.wa-gap-5xl){display:flex}.wa-gap-0{gap:0px}.wa-gap-3xs{gap:var(--wa-space-3xs)}.wa-gap-2xs{gap:var(--wa-space-2xs)}.wa-gap-xs{gap:var(--wa-space-xs)}.wa-gap-s{gap:var(--wa-space-s)}.wa-gap-m{gap:var(--wa-space-m)}.wa-gap-l{gap:var(--wa-space-l)}.wa-gap-xl{gap:var(--wa-space-xl)}.wa-gap-2xl{gap:var(--wa-space-2xl)}.wa-gap-3xl{gap:var(--wa-space-3xl)}.wa-gap-4xl{gap:var(--wa-space-4xl)}.wa-gap-5xl{gap:var(--wa-space-5xl)}}@layer wa-utilities{[class*=wa-body]{font-family:var(--wa-font-family-body);font-weight:var(--wa-font-weight-body);line-height:var(--wa-line-height-normal)}[class*=wa-heading]{font-family:var(--wa-font-family-heading);font-weight:var(--wa-font-weight-heading);line-height:var(--wa-line-height-condensed);text-wrap:balance}[class*=wa-caption]{color:var(--wa-color-text-quiet);font-family:var(--wa-font-family-body);font-weight:var(--wa-font-weight-body);line-height:var(--wa-line-height-condensed)}[class*=wa-longform]{font-family:var(--wa-font-family-longform);font-weight:var(--wa-font-weight-longform);line-height:var(--wa-line-height-normal)}.wa-font-size-3xs,.wa-body-3xs,.wa-heading-3xs,.wa-caption-3xs,.wa-longform-3xs{font-size:var(--wa-font-size-3xs)}.wa-font-size-2xs,.wa-body-2xs,.wa-heading-2xs,.wa-caption-2xs,.wa-longform-2xs{font-size:var(--wa-font-size-2xs)}.wa-font-size-xs,.wa-body-xs,.wa-heading-xs,.wa-caption-xs,.wa-longform-xs{font-size:var(--wa-font-size-xs)}.wa-font-size-s,.wa-body-s,.wa-heading-s,.wa-caption-s,.wa-longform-s{font-size:var(--wa-font-size-s)}.wa-font-size-m,.wa-body-m,.wa-heading-m,.wa-caption-m,.wa-longform-m{font-size:var(--wa-font-size-m)}.wa-font-size-l,.wa-body-l,.wa-heading-l,.wa-caption-l,.wa-longform-l{font-size:var(--wa-font-size-l)}.wa-font-size-xl,.wa-body-xl,.wa-heading-xl,.wa-caption-xl,.wa-longform-xl{font-size:var(--wa-font-size-xl)}.wa-font-size-2xl,.wa-body-2xl,.wa-heading-2xl,.wa-caption-2xl,.wa-longform-2xl{font-size:var(--wa-font-size-2xl)}.wa-font-size-3xl,.wa-body-3xl,.wa-heading-3xl,.wa-caption-3xl,.wa-longform-3xl{font-size:var(--wa-font-size-3xl)}.wa-font-size-4xl,.wa-body-4xl,.wa-heading-4xl,.wa-caption-4xl,.wa-longform-4xl{font-size:var(--wa-font-size-4xl)}.wa-font-size-5xl,.wa-body-5xl,.wa-heading-5xl,.wa-caption-5xl,.wa-longform-5xl{font-size:var(--wa-font-size-5xl)}.wa-font-weight-light{font-weight:var(--wa-font-weight-light)}.wa-font-weight-normal{font-weight:var(--wa-font-weight-normal)}.wa-font-weight-semibold{font-weight:var(--wa-font-weight-semibold)}.wa-font-weight-bold{font-weight:var(--wa-font-weight-bold)}.wa-color-text-normal{color:var(--wa-color-text-normal)}.wa-color-text-quiet{color:var(--wa-color-text-quiet)}.wa-color-text-link{color:var(--wa-color-text-link)}.wa-text-truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.wa-link{color:var(--wa-color-text-link);text-decoration:var(--wa-link-decoration-default);-webkit-text-decoration:var(--wa-link-decoration-default)}@media (hover: hover){.wa-link:hover{color:color-mix(in oklab,var(--wa-color-text-link) 100%,var(--wa-color-mix-hover));text-decoration:var(--wa-link-decoration-hover);-webkit-text-decoration:var(--wa-link-decoration-hover)}}.wa-link-plain{color:var(--wa-color-text-normal);text-decoration:none}@media (hover: hover){.wa-link-plain:hover{color:color-mix(in oklab,currentColor,var(--wa-color-mix-hover));text-decoration:none}}.wa-list-plain:is(ol,ul){list-style:none;padding-inline-start:0}.wa-list-plain:is(ol,ul)>li{margin-inline-start:0}.wa-form-control-label{color:var(--wa-form-control-label-color);font-weight:var(--wa-form-control-label-font-weight);line-height:var(--wa-form-control-label-line-height)}.wa-form-control-value{color:var(--wa-form-control-value-color);font-weight:var(--wa-form-control-value-font-weight);line-height:var(--wa-form-control-value-line-height)}.wa-form-control-placeholder{color:var(--wa-form-control-placeholder-color);font-weight:var(--wa-form-control-value-font-weight);line-height:var(--wa-form-control-value-line-height)}.wa-form-control-hint{color:var(--wa-form-control-hint-color);font-weight:var(--wa-form-control-hint-font-weight);font-size:var(--wa-font-size-smaller);line-height:var(--wa-form-control-hint-line-height)}}@layer wa-utilities{:is([class*=wa-cluster],[class*=wa-flank],[class*=wa-frame],[class*=wa-grid],[class*=wa-stack],[class*=wa-split])>*{margin-block:0;margin-inline:0}:where([class*=wa-cluster],[class*=wa-flank],[class*=wa-frame],[class*=wa-grid],[class*=wa-stack],[class*=wa-split]){gap:var(--wa-space-m)}[class*=wa-cluster]{display:flex}:where([class*=wa-cluster]){align-items:center;justify-content:flex-start;flex-wrap:wrap}[class*=wa-flank]{display:flex;--content-percentage: initial;--flank-size: initial}[class*=wa-flank]:not([class*=":end"])>:first-child,[class*=wa-flank][class*=":start"]>:first-child{flex-basis:var(--flank-size, auto);flex-grow:1}[class*=wa-flank]:not([class*=":end"])>:last-child,[class*=wa-flank][class*=":start"]>:last-child{flex-basis:0;flex-grow:999;min-inline-size:var(--content-percentage, 50%)}[class*=wa-flank][class*=":end"]>:last-child{flex-basis:var(--flank-size, auto);flex-grow:1}[class*=wa-flank][class*=":end"]>:first-child{flex-basis:0;flex-grow:999;min-inline-size:var(--content-percentage, 50%)}:where([class*=wa-flank]){align-items:center;flex-wrap:wrap}[class*=wa-frame]{display:flex;aspect-ratio:1 / 1;overflow:hidden}[class*=wa-frame]>img,[class*=wa-frame]>video{block-size:100%;inline-size:100%;object-fit:cover}[class*=wa-frame][class*=":square"]{aspect-ratio:1 / 1}[class*=wa-frame][class*=":landscape"]{aspect-ratio:16 / 9}[class*=wa-frame][class*=":portrait"]{aspect-ratio:9 / 16}:where([class*=wa-frame]){align-items:center;justify-content:center}[class*=wa-grid]{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(var(--min-column-size, 20ch),100%),1fr));--min-column-size: initial}.wa-span-grid{grid-column:1 / -1}[class*=wa-split]{display:flex}[class*=wa-split],[class*=wa-split][class*=":row"]{flex-direction:row;block-size:auto;inline-size:100%}[class*=wa-split]:not([class*=":column"])>:first-child{flex:0 1 auto}[class*=wa-split][class*=":column"]{flex-direction:column;block-size:auto;inline-size:auto;align-self:stretch}:where([class*=wa-split]){align-items:center;justify-content:space-between;flex-wrap:wrap}[class*=wa-stack]{display:flex;flex-direction:column}:where([class*=wa-stack]){align-items:stretch;justify-content:flex-start}}@layer wa-color-variant{:where(:root),.wa-brand-blue{--wa-color-brand-95: var(--wa-color-blue-95);--wa-color-brand-90: var(--wa-color-blue-90);--wa-color-brand-80: var(--wa-color-blue-80);--wa-color-brand-70: var(--wa-color-blue-70);--wa-color-brand-60: var(--wa-color-blue-60);--wa-color-brand-50: var(--wa-color-blue-50);--wa-color-brand-40: var(--wa-color-blue-40);--wa-color-brand-30: var(--wa-color-blue-30);--wa-color-brand-20: var(--wa-color-blue-20);--wa-color-brand-10: var(--wa-color-blue-10);--wa-color-brand-05: var(--wa-color-blue-05);--wa-color-brand: var(--wa-color-blue);--wa-color-brand-on: var(--wa-color-blue-on)}.wa-brand-red{--wa-color-brand-95: var(--wa-color-red-95);--wa-color-brand-90: var(--wa-color-red-90);--wa-color-brand-80: var(--wa-color-red-80);--wa-color-brand-70: var(--wa-color-red-70);--wa-color-brand-60: var(--wa-color-red-60);--wa-color-brand-50: var(--wa-color-red-50);--wa-color-brand-40: var(--wa-color-red-40);--wa-color-brand-30: var(--wa-color-red-30);--wa-color-brand-20: var(--wa-color-red-20);--wa-color-brand-10: var(--wa-color-red-10);--wa-color-brand-05: var(--wa-color-red-05);--wa-color-brand: var(--wa-color-red);--wa-color-brand-on: var(--wa-color-red-on)}.wa-brand-orange{--wa-color-brand-95: var(--wa-color-orange-95);--wa-color-brand-90: var(--wa-color-orange-90);--wa-color-brand-80: var(--wa-color-orange-80);--wa-color-brand-70: var(--wa-color-orange-70);--wa-color-brand-60: var(--wa-color-orange-60);--wa-color-brand-50: var(--wa-color-orange-50);--wa-color-brand-40: var(--wa-color-orange-40);--wa-color-brand-30: var(--wa-color-orange-30);--wa-color-brand-20: var(--wa-color-orange-20);--wa-color-brand-10: var(--wa-color-orange-10);--wa-color-brand-05: var(--wa-color-orange-05);--wa-color-brand: var(--wa-color-orange);--wa-color-brand-on: var(--wa-color-orange-on)}.wa-brand-yellow{--wa-color-brand-95: var(--wa-color-yellow-95);--wa-color-brand-90: var(--wa-color-yellow-90);--wa-color-brand-80: var(--wa-color-yellow-80);--wa-color-brand-70: var(--wa-color-yellow-70);--wa-color-brand-60: var(--wa-color-yellow-60);--wa-color-brand-50: var(--wa-color-yellow-50);--wa-color-brand-40: var(--wa-color-yellow-40);--wa-color-brand-30: var(--wa-color-yellow-30);--wa-color-brand-20: var(--wa-color-yellow-20);--wa-color-brand-10: var(--wa-color-yellow-10);--wa-color-brand-05: var(--wa-color-yellow-05);--wa-color-brand: var(--wa-color-yellow);--wa-color-brand-on: var(--wa-color-yellow-on)}.wa-brand-green{--wa-color-brand-95: var(--wa-color-green-95);--wa-color-brand-90: var(--wa-color-green-90);--wa-color-brand-80: var(--wa-color-green-80);--wa-color-brand-70: var(--wa-color-green-70);--wa-color-brand-60: var(--wa-color-green-60);--wa-color-brand-50: var(--wa-color-green-50);--wa-color-brand-40: var(--wa-color-green-40);--wa-color-brand-30: var(--wa-color-green-30);--wa-color-brand-20: var(--wa-color-green-20);--wa-color-brand-10: var(--wa-color-green-10);--wa-color-brand-05: var(--wa-color-green-05);--wa-color-brand: var(--wa-color-green);--wa-color-brand-on: var(--wa-color-green-on)}.wa-brand-cyan{--wa-color-brand-95: var(--wa-color-cyan-95);--wa-color-brand-90: var(--wa-color-cyan-90);--wa-color-brand-80: var(--wa-color-cyan-80);--wa-color-brand-70: var(--wa-color-cyan-70);--wa-color-brand-60: var(--wa-color-cyan-60);--wa-color-brand-50: var(--wa-color-cyan-50);--wa-color-brand-40: var(--wa-color-cyan-40);--wa-color-brand-30: var(--wa-color-cyan-30);--wa-color-brand-20: var(--wa-color-cyan-20);--wa-color-brand-10: var(--wa-color-cyan-10);--wa-color-brand-05: var(--wa-color-cyan-05);--wa-color-brand: var(--wa-color-cyan);--wa-color-brand-on: var(--wa-color-cyan-on)}.wa-brand-indigo{--wa-color-brand-95: var(--wa-color-indigo-95);--wa-color-brand-90: var(--wa-color-indigo-90);--wa-color-brand-80: var(--wa-color-indigo-80);--wa-color-brand-70: var(--wa-color-indigo-70);--wa-color-brand-60: var(--wa-color-indigo-60);--wa-color-brand-50: var(--wa-color-indigo-50);--wa-color-brand-40: var(--wa-color-indigo-40);--wa-color-brand-30: var(--wa-color-indigo-30);--wa-color-brand-20: var(--wa-color-indigo-20);--wa-color-brand-10: var(--wa-color-indigo-10);--wa-color-brand-05: var(--wa-color-indigo-05);--wa-color-brand: var(--wa-color-indigo);--wa-color-brand-on: var(--wa-color-indigo-on)}.wa-brand-purple{--wa-color-brand-95: var(--wa-color-purple-95);--wa-color-brand-90: var(--wa-color-purple-90);--wa-color-brand-80: var(--wa-color-purple-80);--wa-color-brand-70: var(--wa-color-purple-70);--wa-color-brand-60: var(--wa-color-purple-60);--wa-color-brand-50: var(--wa-color-purple-50);--wa-color-brand-40: var(--wa-color-purple-40);--wa-color-brand-30: var(--wa-color-purple-30);--wa-color-brand-20: var(--wa-color-purple-20);--wa-color-brand-10: var(--wa-color-purple-10);--wa-color-brand-05: var(--wa-color-purple-05);--wa-color-brand: var(--wa-color-purple);--wa-color-brand-on: var(--wa-color-purple-on)}.wa-brand-pink{--wa-color-brand-95: var(--wa-color-pink-95);--wa-color-brand-90: var(--wa-color-pink-90);--wa-color-brand-80: var(--wa-color-pink-80);--wa-color-brand-70: var(--wa-color-pink-70);--wa-color-brand-60: var(--wa-color-pink-60);--wa-color-brand-50: var(--wa-color-pink-50);--wa-color-brand-40: var(--wa-color-pink-40);--wa-color-brand-30: var(--wa-color-pink-30);--wa-color-brand-20: var(--wa-color-pink-20);--wa-color-brand-10: var(--wa-color-pink-10);--wa-color-brand-05: var(--wa-color-pink-05);--wa-color-brand: var(--wa-color-pink);--wa-color-brand-on: var(--wa-color-pink-on)}.wa-brand-gray{--wa-color-brand-95: var(--wa-color-gray-95);--wa-color-brand-90: var(--wa-color-gray-90);--wa-color-brand-80: var(--wa-color-gray-80);--wa-color-brand-70: var(--wa-color-gray-70);--wa-color-brand-60: var(--wa-color-gray-60);--wa-color-brand-50: var(--wa-color-gray-50);--wa-color-brand-40: var(--wa-color-gray-40);--wa-color-brand-30: var(--wa-color-gray-30);--wa-color-brand-20: var(--wa-color-gray-20);--wa-color-brand-10: var(--wa-color-gray-10);--wa-color-brand-05: var(--wa-color-gray-05);--wa-color-brand: var(--wa-color-gray);--wa-color-brand-on: var(--wa-color-gray-on)}}@layer wa-color-variant{:where(:root),.wa-neutral-gray{--wa-color-neutral-95: var(--wa-color-gray-95);--wa-color-neutral-90: var(--wa-color-gray-90);--wa-color-neutral-80: var(--wa-color-gray-80);--wa-color-neutral-70: var(--wa-color-gray-70);--wa-color-neutral-60: var(--wa-color-gray-60);--wa-color-neutral-50: var(--wa-color-gray-50);--wa-color-neutral-40: var(--wa-color-gray-40);--wa-color-neutral-30: var(--wa-color-gray-30);--wa-color-neutral-20: var(--wa-color-gray-20);--wa-color-neutral-10: var(--wa-color-gray-10);--wa-color-neutral-05: var(--wa-color-gray-05);--wa-color-neutral: var(--wa-color-gray);--wa-color-neutral-on: var(--wa-color-gray-on)}.wa-neutral-red{--wa-color-neutral-95: var(--wa-color-red-95);--wa-color-neutral-90: var(--wa-color-red-90);--wa-color-neutral-80: var(--wa-color-red-80);--wa-color-neutral-70: var(--wa-color-red-70);--wa-color-neutral-60: var(--wa-color-red-60);--wa-color-neutral-50: var(--wa-color-red-50);--wa-color-neutral-40: var(--wa-color-red-40);--wa-color-neutral-30: var(--wa-color-red-30);--wa-color-neutral-20: var(--wa-color-red-20);--wa-color-neutral-10: var(--wa-color-red-10);--wa-color-neutral-05: var(--wa-color-red-05);--wa-color-neutral: var(--wa-color-red);--wa-color-neutral-on: var(--wa-color-red-on)}.wa-neutral-orange{--wa-color-neutral-95: var(--wa-color-orange-95);--wa-color-neutral-90: var(--wa-color-orange-90);--wa-color-neutral-80: var(--wa-color-orange-80);--wa-color-neutral-70: var(--wa-color-orange-70);--wa-color-neutral-60: var(--wa-color-orange-60);--wa-color-neutral-50: var(--wa-color-orange-50);--wa-color-neutral-40: var(--wa-color-orange-40);--wa-color-neutral-30: var(--wa-color-orange-30);--wa-color-neutral-20: var(--wa-color-orange-20);--wa-color-neutral-10: var(--wa-color-orange-10);--wa-color-neutral-05: var(--wa-color-orange-05);--wa-color-neutral: var(--wa-color-orange);--wa-color-neutral-on: var(--wa-color-orange-on)}.wa-neutral-yellow{--wa-color-neutral-95: var(--wa-color-yellow-95);--wa-color-neutral-90: var(--wa-color-yellow-90);--wa-color-neutral-80: var(--wa-color-yellow-80);--wa-color-neutral-70: var(--wa-color-yellow-70);--wa-color-neutral-60: var(--wa-color-yellow-60);--wa-color-neutral-50: var(--wa-color-yellow-50);--wa-color-neutral-40: var(--wa-color-yellow-40);--wa-color-neutral-30: var(--wa-color-yellow-30);--wa-color-neutral-20: var(--wa-color-yellow-20);--wa-color-neutral-10: var(--wa-color-yellow-10);--wa-color-neutral-05: var(--wa-color-yellow-05);--wa-color-neutral: var(--wa-color-yellow);--wa-color-neutral-on: var(--wa-color-yellow-on)}.wa-neutral-green{--wa-color-neutral-95: var(--wa-color-green-95);--wa-color-neutral-90: var(--wa-color-green-90);--wa-color-neutral-80: var(--wa-color-green-80);--wa-color-neutral-70: var(--wa-color-green-70);--wa-color-neutral-60: var(--wa-color-green-60);--wa-color-neutral-50: var(--wa-color-green-50);--wa-color-neutral-40: var(--wa-color-green-40);--wa-color-neutral-30: var(--wa-color-green-30);--wa-color-neutral-20: var(--wa-color-green-20);--wa-color-neutral-10: var(--wa-color-green-10);--wa-color-neutral-05: var(--wa-color-green-05);--wa-color-neutral: var(--wa-color-green);--wa-color-neutral-on: var(--wa-color-green-on)}.wa-neutral-cyan{--wa-color-neutral-95: var(--wa-color-cyan-95);--wa-color-neutral-90: var(--wa-color-cyan-90);--wa-color-neutral-80: var(--wa-color-cyan-80);--wa-color-neutral-70: var(--wa-color-cyan-70);--wa-color-neutral-60: var(--wa-color-cyan-60);--wa-color-neutral-50: var(--wa-color-cyan-50);--wa-color-neutral-40: var(--wa-color-cyan-40);--wa-color-neutral-30: var(--wa-color-cyan-30);--wa-color-neutral-20: var(--wa-color-cyan-20);--wa-color-neutral-10: var(--wa-color-cyan-10);--wa-color-neutral-05: var(--wa-color-cyan-05);--wa-color-neutral: var(--wa-color-cyan);--wa-color-neutral-on: var(--wa-color-cyan-on)}.wa-neutral-blue{--wa-color-neutral-95: var(--wa-color-blue-95);--wa-color-neutral-90: var(--wa-color-blue-90);--wa-color-neutral-80: var(--wa-color-blue-80);--wa-color-neutral-70: var(--wa-color-blue-70);--wa-color-neutral-60: var(--wa-color-blue-60);--wa-color-neutral-50: var(--wa-color-blue-50);--wa-color-neutral-40: var(--wa-color-blue-40);--wa-color-neutral-30: var(--wa-color-blue-30);--wa-color-neutral-20: var(--wa-color-blue-20);--wa-color-neutral-10: var(--wa-color-blue-10);--wa-color-neutral-05: var(--wa-color-blue-05);--wa-color-neutral: var(--wa-color-blue);--wa-color-neutral-on: var(--wa-color-blue-on)}.wa-neutral-indigo{--wa-color-neutral-95: var(--wa-color-indigo-95);--wa-color-neutral-90: var(--wa-color-indigo-90);--wa-color-neutral-80: var(--wa-color-indigo-80);--wa-color-neutral-70: var(--wa-color-indigo-70);--wa-color-neutral-60: var(--wa-color-indigo-60);--wa-color-neutral-50: var(--wa-color-indigo-50);--wa-color-neutral-40: var(--wa-color-indigo-40);--wa-color-neutral-30: var(--wa-color-indigo-30);--wa-color-neutral-20: var(--wa-color-indigo-20);--wa-color-neutral-10: var(--wa-color-indigo-10);--wa-color-neutral-05: var(--wa-color-indigo-05);--wa-color-neutral: var(--wa-color-indigo);--wa-color-neutral-on: var(--wa-color-indigo-on)}.wa-neutral-purple{--wa-color-neutral-95: var(--wa-color-purple-95);--wa-color-neutral-90: var(--wa-color-purple-90);--wa-color-neutral-80: var(--wa-color-purple-80);--wa-color-neutral-70: var(--wa-color-purple-70);--wa-color-neutral-60: var(--wa-color-purple-60);--wa-color-neutral-50: var(--wa-color-purple-50);--wa-color-neutral-40: var(--wa-color-purple-40);--wa-color-neutral-30: var(--wa-color-purple-30);--wa-color-neutral-20: var(--wa-color-purple-20);--wa-color-neutral-10: var(--wa-color-purple-10);--wa-color-neutral-05: var(--wa-color-purple-05);--wa-color-neutral: var(--wa-color-purple);--wa-color-neutral-on: var(--wa-color-purple-on)}.wa-neutral-pink{--wa-color-neutral-95: var(--wa-color-pink-95);--wa-color-neutral-90: var(--wa-color-pink-90);--wa-color-neutral-80: var(--wa-color-pink-80);--wa-color-neutral-70: var(--wa-color-pink-70);--wa-color-neutral-60: var(--wa-color-pink-60);--wa-color-neutral-50: var(--wa-color-pink-50);--wa-color-neutral-40: var(--wa-color-pink-40);--wa-color-neutral-30: var(--wa-color-pink-30);--wa-color-neutral-20: var(--wa-color-pink-20);--wa-color-neutral-10: var(--wa-color-pink-10);--wa-color-neutral-05: var(--wa-color-pink-05);--wa-color-neutral: var(--wa-color-pink);--wa-color-neutral-on: var(--wa-color-pink-on)}}@layer wa-color-variant{:where(:root),.wa-success-green{--wa-color-success-95: var(--wa-color-green-95);--wa-color-success-90: var(--wa-color-green-90);--wa-color-success-80: var(--wa-color-green-80);--wa-color-success-70: var(--wa-color-green-70);--wa-color-success-60: var(--wa-color-green-60);--wa-color-success-50: var(--wa-color-green-50);--wa-color-success-40: var(--wa-color-green-40);--wa-color-success-30: var(--wa-color-green-30);--wa-color-success-20: var(--wa-color-green-20);--wa-color-success-10: var(--wa-color-green-10);--wa-color-success-05: var(--wa-color-green-05);--wa-color-success: var(--wa-color-green);--wa-color-success-on: var(--wa-color-green-on)}.wa-success-red{--wa-color-success-95: var(--wa-color-red-95);--wa-color-success-90: var(--wa-color-red-90);--wa-color-success-80: var(--wa-color-red-80);--wa-color-success-70: var(--wa-color-red-70);--wa-color-success-60: var(--wa-color-red-60);--wa-color-success-50: var(--wa-color-red-50);--wa-color-success-40: var(--wa-color-red-40);--wa-color-success-30: var(--wa-color-red-30);--wa-color-success-20: var(--wa-color-red-20);--wa-color-success-10: var(--wa-color-red-10);--wa-color-success-05: var(--wa-color-red-05);--wa-color-success: var(--wa-color-red);--wa-color-success-on: var(--wa-color-red-on)}.wa-success-orange{--wa-color-success-95: var(--wa-color-orange-95);--wa-color-success-90: var(--wa-color-orange-90);--wa-color-success-80: var(--wa-color-orange-80);--wa-color-success-70: var(--wa-color-orange-70);--wa-color-success-60: var(--wa-color-orange-60);--wa-color-success-50: var(--wa-color-orange-50);--wa-color-success-40: var(--wa-color-orange-40);--wa-color-success-30: var(--wa-color-orange-30);--wa-color-success-20: var(--wa-color-orange-20);--wa-color-success-10: var(--wa-color-orange-10);--wa-color-success-05: var(--wa-color-orange-05);--wa-color-success: var(--wa-color-orange);--wa-color-success-on: var(--wa-color-orange-on)}.wa-success-yellow{--wa-color-success-95: var(--wa-color-yellow-95);--wa-color-success-90: var(--wa-color-yellow-90);--wa-color-success-80: var(--wa-color-yellow-80);--wa-color-success-70: var(--wa-color-yellow-70);--wa-color-success-60: var(--wa-color-yellow-60);--wa-color-success-50: var(--wa-color-yellow-50);--wa-color-success-40: var(--wa-color-yellow-40);--wa-color-success-30: var(--wa-color-yellow-30);--wa-color-success-20: var(--wa-color-yellow-20);--wa-color-success-10: var(--wa-color-yellow-10);--wa-color-success-05: var(--wa-color-yellow-05);--wa-color-success: var(--wa-color-yellow);--wa-color-success-on: var(--wa-color-yellow-on)}.wa-success-cyan{--wa-color-success-95: var(--wa-color-cyan-95);--wa-color-success-90: var(--wa-color-cyan-90);--wa-color-success-80: var(--wa-color-cyan-80);--wa-color-success-70: var(--wa-color-cyan-70);--wa-color-success-60: var(--wa-color-cyan-60);--wa-color-success-50: var(--wa-color-cyan-50);--wa-color-success-40: var(--wa-color-cyan-40);--wa-color-success-30: var(--wa-color-cyan-30);--wa-color-success-20: var(--wa-color-cyan-20);--wa-color-success-10: var(--wa-color-cyan-10);--wa-color-success-05: var(--wa-color-cyan-05);--wa-color-success: var(--wa-color-cyan);--wa-color-success-on: var(--wa-color-cyan-on)}.wa-success-blue{--wa-color-success-95: var(--wa-color-blue-95);--wa-color-success-90: var(--wa-color-blue-90);--wa-color-success-80: var(--wa-color-blue-80);--wa-color-success-70: var(--wa-color-blue-70);--wa-color-success-60: var(--wa-color-blue-60);--wa-color-success-50: var(--wa-color-blue-50);--wa-color-success-40: var(--wa-color-blue-40);--wa-color-success-30: var(--wa-color-blue-30);--wa-color-success-20: var(--wa-color-blue-20);--wa-color-success-10: var(--wa-color-blue-10);--wa-color-success-05: var(--wa-color-blue-05);--wa-color-success: var(--wa-color-blue);--wa-color-success-on: var(--wa-color-blue-on)}.wa-success-indigo{--wa-color-success-95: var(--wa-color-indigo-95);--wa-color-success-90: var(--wa-color-indigo-90);--wa-color-success-80: var(--wa-color-indigo-80);--wa-color-success-70: var(--wa-color-indigo-70);--wa-color-success-60: var(--wa-color-indigo-60);--wa-color-success-50: var(--wa-color-indigo-50);--wa-color-success-40: var(--wa-color-indigo-40);--wa-color-success-30: var(--wa-color-indigo-30);--wa-color-success-20: var(--wa-color-indigo-20);--wa-color-success-10: var(--wa-color-indigo-10);--wa-color-success-05: var(--wa-color-indigo-05);--wa-color-success: var(--wa-color-indigo);--wa-color-success-on: var(--wa-color-indigo-on)}.wa-success-purple{--wa-color-success-95: var(--wa-color-purple-95);--wa-color-success-90: var(--wa-color-purple-90);--wa-color-success-80: var(--wa-color-purple-80);--wa-color-success-70: var(--wa-color-purple-70);--wa-color-success-60: var(--wa-color-purple-60);--wa-color-success-50: var(--wa-color-purple-50);--wa-color-success-40: var(--wa-color-purple-40);--wa-color-success-30: var(--wa-color-purple-30);--wa-color-success-20: var(--wa-color-purple-20);--wa-color-success-10: var(--wa-color-purple-10);--wa-color-success-05: var(--wa-color-purple-05);--wa-color-success: var(--wa-color-purple);--wa-color-success-on: var(--wa-color-purple-on)}.wa-success-pink{--wa-color-success-95: var(--wa-color-pink-95);--wa-color-success-90: var(--wa-color-pink-90);--wa-color-success-80: var(--wa-color-pink-80);--wa-color-success-70: var(--wa-color-pink-70);--wa-color-success-60: var(--wa-color-pink-60);--wa-color-success-50: var(--wa-color-pink-50);--wa-color-success-40: var(--wa-color-pink-40);--wa-color-success-30: var(--wa-color-pink-30);--wa-color-success-20: var(--wa-color-pink-20);--wa-color-success-10: var(--wa-color-pink-10);--wa-color-success-05: var(--wa-color-pink-05);--wa-color-success: var(--wa-color-pink);--wa-color-success-on: var(--wa-color-pink-on)}.wa-success-gray{--wa-color-success-95: var(--wa-color-gray-95);--wa-color-success-90: var(--wa-color-gray-90);--wa-color-success-80: var(--wa-color-gray-80);--wa-color-success-70: var(--wa-color-gray-70);--wa-color-success-60: var(--wa-color-gray-60);--wa-color-success-50: var(--wa-color-gray-50);--wa-color-success-40: var(--wa-color-gray-40);--wa-color-success-30: var(--wa-color-gray-30);--wa-color-success-20: var(--wa-color-gray-20);--wa-color-success-10: var(--wa-color-gray-10);--wa-color-success-05: var(--wa-color-gray-05);--wa-color-success: var(--wa-color-gray);--wa-color-success-on: var(--wa-color-gray-on)}}@layer wa-color-variant{:where(:root),.wa-warning-yellow{--wa-color-warning-95: var(--wa-color-yellow-95);--wa-color-warning-90: var(--wa-color-yellow-90);--wa-color-warning-80: var(--wa-color-yellow-80);--wa-color-warning-70: var(--wa-color-yellow-70);--wa-color-warning-60: var(--wa-color-yellow-60);--wa-color-warning-50: var(--wa-color-yellow-50);--wa-color-warning-40: var(--wa-color-yellow-40);--wa-color-warning-30: var(--wa-color-yellow-30);--wa-color-warning-20: var(--wa-color-yellow-20);--wa-color-warning-10: var(--wa-color-yellow-10);--wa-color-warning-05: var(--wa-color-yellow-05);--wa-color-warning: var(--wa-color-yellow);--wa-color-warning-on: var(--wa-color-yellow-on)}.wa-warning-red{--wa-color-warning-95: var(--wa-color-red-95);--wa-color-warning-90: var(--wa-color-red-90);--wa-color-warning-80: var(--wa-color-red-80);--wa-color-warning-70: var(--wa-color-red-70);--wa-color-warning-60: var(--wa-color-red-60);--wa-color-warning-50: var(--wa-color-red-50);--wa-color-warning-40: var(--wa-color-red-40);--wa-color-warning-30: var(--wa-color-red-30);--wa-color-warning-20: var(--wa-color-red-20);--wa-color-warning-10: var(--wa-color-red-10);--wa-color-warning-05: var(--wa-color-red-05);--wa-color-warning: var(--wa-color-red);--wa-color-warning-on: var(--wa-color-red-on)}.wa-warning-orange{--wa-color-warning-95: var(--wa-color-orange-95);--wa-color-warning-90: var(--wa-color-orange-90);--wa-color-warning-80: var(--wa-color-orange-80);--wa-color-warning-70: var(--wa-color-orange-70);--wa-color-warning-60: var(--wa-color-orange-60);--wa-color-warning-50: var(--wa-color-orange-50);--wa-color-warning-40: var(--wa-color-orange-40);--wa-color-warning-30: var(--wa-color-orange-30);--wa-color-warning-20: var(--wa-color-orange-20);--wa-color-warning-10: var(--wa-color-orange-10);--wa-color-warning-05: var(--wa-color-orange-05);--wa-color-warning: var(--wa-color-orange);--wa-color-warning-on: var(--wa-color-orange-on)}.wa-warning-green{--wa-color-warning-95: var(--wa-color-green-95);--wa-color-warning-90: var(--wa-color-green-90);--wa-color-warning-80: var(--wa-color-green-80);--wa-color-warning-70: var(--wa-color-green-70);--wa-color-warning-60: var(--wa-color-green-60);--wa-color-warning-50: var(--wa-color-green-50);--wa-color-warning-40: var(--wa-color-green-40);--wa-color-warning-30: var(--wa-color-green-30);--wa-color-warning-20: var(--wa-color-green-20);--wa-color-warning-10: var(--wa-color-green-10);--wa-color-warning-05: var(--wa-color-green-05);--wa-color-warning: var(--wa-color-green);--wa-color-warning-on: var(--wa-color-green-on)}.wa-warning-cyan{--wa-color-warning-95: var(--wa-color-cyan-95);--wa-color-warning-90: var(--wa-color-cyan-90);--wa-color-warning-80: var(--wa-color-cyan-80);--wa-color-warning-70: var(--wa-color-cyan-70);--wa-color-warning-60: var(--wa-color-cyan-60);--wa-color-warning-50: var(--wa-color-cyan-50);--wa-color-warning-40: var(--wa-color-cyan-40);--wa-color-warning-30: var(--wa-color-cyan-30);--wa-color-warning-20: var(--wa-color-cyan-20);--wa-color-warning-10: var(--wa-color-cyan-10);--wa-color-warning-05: var(--wa-color-cyan-05);--wa-color-warning: var(--wa-color-cyan);--wa-color-warning-on: var(--wa-color-cyan-on)}.wa-warning-blue{--wa-color-warning-95: var(--wa-color-blue-95);--wa-color-warning-90: var(--wa-color-blue-90);--wa-color-warning-80: var(--wa-color-blue-80);--wa-color-warning-70: var(--wa-color-blue-70);--wa-color-warning-60: var(--wa-color-blue-60);--wa-color-warning-50: var(--wa-color-blue-50);--wa-color-warning-40: var(--wa-color-blue-40);--wa-color-warning-30: var(--wa-color-blue-30);--wa-color-warning-20: var(--wa-color-blue-20);--wa-color-warning-10: var(--wa-color-blue-10);--wa-color-warning-05: var(--wa-color-blue-05);--wa-color-warning: var(--wa-color-blue);--wa-color-warning-on: var(--wa-color-blue-on)}.wa-warning-indigo{--wa-color-warning-95: var(--wa-color-indigo-95);--wa-color-warning-90: var(--wa-color-indigo-90);--wa-color-warning-80: var(--wa-color-indigo-80);--wa-color-warning-70: var(--wa-color-indigo-70);--wa-color-warning-60: var(--wa-color-indigo-60);--wa-color-warning-50: var(--wa-color-indigo-50);--wa-color-warning-40: var(--wa-color-indigo-40);--wa-color-warning-30: var(--wa-color-indigo-30);--wa-color-warning-20: var(--wa-color-indigo-20);--wa-color-warning-10: var(--wa-color-indigo-10);--wa-color-warning-05: var(--wa-color-indigo-05);--wa-color-warning: var(--wa-color-indigo);--wa-color-warning-on: var(--wa-color-indigo-on)}.wa-warning-purple{--wa-color-warning-95: var(--wa-color-purple-95);--wa-color-warning-90: var(--wa-color-purple-90);--wa-color-warning-80: var(--wa-color-purple-80);--wa-color-warning-70: var(--wa-color-purple-70);--wa-color-warning-60: var(--wa-color-purple-60);--wa-color-warning-50: var(--wa-color-purple-50);--wa-color-warning-40: var(--wa-color-purple-40);--wa-color-warning-30: var(--wa-color-purple-30);--wa-color-warning-20: var(--wa-color-purple-20);--wa-color-warning-10: var(--wa-color-purple-10);--wa-color-warning-05: var(--wa-color-purple-05);--wa-color-warning: var(--wa-color-purple);--wa-color-warning-on: var(--wa-color-purple-on)}.wa-warning-pink{--wa-color-warning-95: var(--wa-color-pink-95);--wa-color-warning-90: var(--wa-color-pink-90);--wa-color-warning-80: var(--wa-color-pink-80);--wa-color-warning-70: var(--wa-color-pink-70);--wa-color-warning-60: var(--wa-color-pink-60);--wa-color-warning-50: var(--wa-color-pink-50);--wa-color-warning-40: var(--wa-color-pink-40);--wa-color-warning-30: var(--wa-color-pink-30);--wa-color-warning-20: var(--wa-color-pink-20);--wa-color-warning-10: var(--wa-color-pink-10);--wa-color-warning-05: var(--wa-color-pink-05);--wa-color-warning: var(--wa-color-pink);--wa-color-warning-on: var(--wa-color-pink-on)}.wa-warning-gray{--wa-color-warning-95: var(--wa-color-gray-95);--wa-color-warning-90: var(--wa-color-gray-90);--wa-color-warning-80: var(--wa-color-gray-80);--wa-color-warning-70: var(--wa-color-gray-70);--wa-color-warning-60: var(--wa-color-gray-60);--wa-color-warning-50: var(--wa-color-gray-50);--wa-color-warning-40: var(--wa-color-gray-40);--wa-color-warning-30: var(--wa-color-gray-30);--wa-color-warning-20: var(--wa-color-gray-20);--wa-color-warning-10: var(--wa-color-gray-10);--wa-color-warning-05: var(--wa-color-gray-05);--wa-color-warning: var(--wa-color-gray);--wa-color-warning-on: var(--wa-color-gray-on)}}@layer wa-color-variant{:where(:root),.wa-danger-red{--wa-color-danger-95: var(--wa-color-red-95);--wa-color-danger-90: var(--wa-color-red-90);--wa-color-danger-80: var(--wa-color-red-80);--wa-color-danger-70: var(--wa-color-red-70);--wa-color-danger-60: var(--wa-color-red-60);--wa-color-danger-50: var(--wa-color-red-50);--wa-color-danger-40: var(--wa-color-red-40);--wa-color-danger-30: var(--wa-color-red-30);--wa-color-danger-20: var(--wa-color-red-20);--wa-color-danger-10: var(--wa-color-red-10);--wa-color-danger-05: var(--wa-color-red-05);--wa-color-danger: var(--wa-color-red);--wa-color-danger-on: var(--wa-color-red-on)}.wa-danger-orange{--wa-color-danger-95: var(--wa-color-orange-95);--wa-color-danger-90: var(--wa-color-orange-90);--wa-color-danger-80: var(--wa-color-orange-80);--wa-color-danger-70: var(--wa-color-orange-70);--wa-color-danger-60: var(--wa-color-orange-60);--wa-color-danger-50: var(--wa-color-orange-50);--wa-color-danger-40: var(--wa-color-orange-40);--wa-color-danger-30: var(--wa-color-orange-30);--wa-color-danger-20: var(--wa-color-orange-20);--wa-color-danger-10: var(--wa-color-orange-10);--wa-color-danger-05: var(--wa-color-orange-05);--wa-color-danger: var(--wa-color-orange);--wa-color-danger-on: var(--wa-color-orange-on)}.wa-danger-yellow{--wa-color-danger-95: var(--wa-color-yellow-95);--wa-color-danger-90: var(--wa-color-yellow-90);--wa-color-danger-80: var(--wa-color-yellow-80);--wa-color-danger-70: var(--wa-color-yellow-70);--wa-color-danger-60: var(--wa-color-yellow-60);--wa-color-danger-50: var(--wa-color-yellow-50);--wa-color-danger-40: var(--wa-color-yellow-40);--wa-color-danger-30: var(--wa-color-yellow-30);--wa-color-danger-20: var(--wa-color-yellow-20);--wa-color-danger-10: var(--wa-color-yellow-10);--wa-color-danger-05: var(--wa-color-yellow-05);--wa-color-danger: var(--wa-color-yellow);--wa-color-danger-on: var(--wa-color-yellow-on)}.wa-danger-green{--wa-color-danger-95: var(--wa-color-green-95);--wa-color-danger-90: var(--wa-color-green-90);--wa-color-danger-80: var(--wa-color-green-80);--wa-color-danger-70: var(--wa-color-green-70);--wa-color-danger-60: var(--wa-color-green-60);--wa-color-danger-50: var(--wa-color-green-50);--wa-color-danger-40: var(--wa-color-green-40);--wa-color-danger-30: var(--wa-color-green-30);--wa-color-danger-20: var(--wa-color-green-20);--wa-color-danger-10: var(--wa-color-green-10);--wa-color-danger-05: var(--wa-color-green-05);--wa-color-danger: var(--wa-color-green);--wa-color-danger-on: var(--wa-color-green-on)}.wa-danger-cyan{--wa-color-danger-95: var(--wa-color-cyan-95);--wa-color-danger-90: var(--wa-color-cyan-90);--wa-color-danger-80: var(--wa-color-cyan-80);--wa-color-danger-70: var(--wa-color-cyan-70);--wa-color-danger-60: var(--wa-color-cyan-60);--wa-color-danger-50: var(--wa-color-cyan-50);--wa-color-danger-40: var(--wa-color-cyan-40);--wa-color-danger-30: var(--wa-color-cyan-30);--wa-color-danger-20: var(--wa-color-cyan-20);--wa-color-danger-10: var(--wa-color-cyan-10);--wa-color-danger-05: var(--wa-color-cyan-05);--wa-color-danger: var(--wa-color-cyan);--wa-color-danger-on: var(--wa-color-cyan-on)}.wa-danger-blue{--wa-color-danger-95: var(--wa-color-blue-95);--wa-color-danger-90: var(--wa-color-blue-90);--wa-color-danger-80: var(--wa-color-blue-80);--wa-color-danger-70: var(--wa-color-blue-70);--wa-color-danger-60: var(--wa-color-blue-60);--wa-color-danger-50: var(--wa-color-blue-50);--wa-color-danger-40: var(--wa-color-blue-40);--wa-color-danger-30: var(--wa-color-blue-30);--wa-color-danger-20: var(--wa-color-blue-20);--wa-color-danger-10: var(--wa-color-blue-10);--wa-color-danger-05: var(--wa-color-blue-05);--wa-color-danger: var(--wa-color-blue);--wa-color-danger-on: var(--wa-color-blue-on)}.wa-danger-indigo{--wa-color-danger-95: var(--wa-color-indigo-95);--wa-color-danger-90: var(--wa-color-indigo-90);--wa-color-danger-80: var(--wa-color-indigo-80);--wa-color-danger-70: var(--wa-color-indigo-70);--wa-color-danger-60: var(--wa-color-indigo-60);--wa-color-danger-50: var(--wa-color-indigo-50);--wa-color-danger-40: var(--wa-color-indigo-40);--wa-color-danger-30: var(--wa-color-indigo-30);--wa-color-danger-20: var(--wa-color-indigo-20);--wa-color-danger-10: var(--wa-color-indigo-10);--wa-color-danger-05: var(--wa-color-indigo-05);--wa-color-danger: var(--wa-color-indigo);--wa-color-danger-on: var(--wa-color-indigo-on)}.wa-danger-purple{--wa-color-danger-95: var(--wa-color-purple-95);--wa-color-danger-90: var(--wa-color-purple-90);--wa-color-danger-80: var(--wa-color-purple-80);--wa-color-danger-70: var(--wa-color-purple-70);--wa-color-danger-60: var(--wa-color-purple-60);--wa-color-danger-50: var(--wa-color-purple-50);--wa-color-danger-40: var(--wa-color-purple-40);--wa-color-danger-30: var(--wa-color-purple-30);--wa-color-danger-20: var(--wa-color-purple-20);--wa-color-danger-10: var(--wa-color-purple-10);--wa-color-danger-05: var(--wa-color-purple-05);--wa-color-danger: var(--wa-color-purple);--wa-color-danger-on: var(--wa-color-purple-on)}.wa-danger-pink{--wa-color-danger-95: var(--wa-color-pink-95);--wa-color-danger-90: var(--wa-color-pink-90);--wa-color-danger-80: var(--wa-color-pink-80);--wa-color-danger-70: var(--wa-color-pink-70);--wa-color-danger-60: var(--wa-color-pink-60);--wa-color-danger-50: var(--wa-color-pink-50);--wa-color-danger-40: var(--wa-color-pink-40);--wa-color-danger-30: var(--wa-color-pink-30);--wa-color-danger-20: var(--wa-color-pink-20);--wa-color-danger-10: var(--wa-color-pink-10);--wa-color-danger-05: var(--wa-color-pink-05);--wa-color-danger: var(--wa-color-pink);--wa-color-danger-on: var(--wa-color-pink-on)}.wa-danger-gray{--wa-color-danger-95: var(--wa-color-gray-95);--wa-color-danger-90: var(--wa-color-gray-90);--wa-color-danger-80: var(--wa-color-gray-80);--wa-color-danger-70: var(--wa-color-gray-70);--wa-color-danger-60: var(--wa-color-gray-60);--wa-color-danger-50: var(--wa-color-gray-50);--wa-color-danger-40: var(--wa-color-gray-40);--wa-color-danger-30: var(--wa-color-gray-30);--wa-color-danger-20: var(--wa-color-gray-20);--wa-color-danger-10: var(--wa-color-gray-10);--wa-color-danger-05: var(--wa-color-gray-05);--wa-color-danger: var(--wa-color-gray);--wa-color-danger-on: var(--wa-color-gray-on)}}:where(:root),:host{--wa-color-red-gte-60: calc(100% - (clamp(0, 60 - var(--wa-color-red-key), 1)*100%)) ;--wa-color-orange-gte-60: calc(100% - (clamp(0, 60 - var(--wa-color-orange-key), 1)*100%)) ;--wa-color-yellow-gte-60: calc(100% - (clamp(0, 60 - var(--wa-color-yellow-key), 1)*100%)) ;--wa-color-green-gte-60: calc(100% - (clamp(0, 60 - var(--wa-color-green-key), 1)*100%)) ;--wa-color-cyan-gte-60: calc(100% - (clamp(0, 60 - var(--wa-color-cyan-key), 1)*100%)) ;--wa-color-blue-gte-60: calc(100% - (clamp(0, 60 - var(--wa-color-blue-key), 1)*100%)) ;--wa-color-indigo-gte-60: calc(100% - (clamp(0, 60 - var(--wa-color-indigo-key), 1)*100%)) ;--wa-color-purple-gte-60: calc(100% - (clamp(0, 60 - var(--wa-color-purple-key), 1)*100%)) ;--wa-color-pink-gte-60: calc(100% - (clamp(0, 60 - var(--wa-color-pink-key), 1)*100%)) ;--wa-color-gray-gte-60: calc(100% - (clamp(0, 60 - var(--wa-color-gray-key), 1)*100%)) ;--wa-color-red-on: color-mix(in oklab, var(--wa-color-red-10) var(--wa-color-red-gte-60), white);--wa-color-orange-on: color-mix(in oklab, var(--wa-color-orange-10) var(--wa-color-orange-gte-60), white);--wa-color-yellow-on: color-mix(in oklab, var(--wa-color-yellow-10) var(--wa-color-yellow-gte-60), white);--wa-color-green-on: color-mix(in oklab, var(--wa-color-green-10) var(--wa-color-green-gte-60), white);--wa-color-cyan-on: color-mix(in oklab, var(--wa-color-cyan-10) var(--wa-color-cyan-gte-60), white);--wa-color-blue-on: color-mix(in oklab, var(--wa-color-blue-10) var(--wa-color-blue-gte-60), white);--wa-color-indigo-on: color-mix(in oklab, var(--wa-color-indigo-10) var(--wa-color-indigo-gte-60), white);--wa-color-purple-on: color-mix(in oklab, var(--wa-color-purple-10) var(--wa-color-purple-gte-60), white);--wa-color-pink-on: color-mix(in oklab, var(--wa-color-pink-10) var(--wa-color-pink-gte-60), white);--wa-color-gray-on: color-mix(in oklab, var(--wa-color-gray-10) var(--wa-color-gray-gte-60), white)}@layer wa-color-palette{:where(:root),.wa-palette-default{--wa-color-red-95: #fff0ef ;--wa-color-red-90: #ffdedc ;--wa-color-red-80: #ffb8b6 ;--wa-color-red-70: #fd8f90 ;--wa-color-red-60: #f3676c ;--wa-color-red-50: #dc3146 ;--wa-color-red-40: #b30532 ;--wa-color-red-30: #8a132c ;--wa-color-red-20: #631323 ;--wa-color-red-10: #3e0913 ;--wa-color-red-05: #2a040b ;--wa-color-red: var(--wa-color-red-50);--wa-color-red-key: 50;--wa-color-orange-95: #fff0e6 ;--wa-color-orange-90: #ffdfca ;--wa-color-orange-80: #ffbb94 ;--wa-color-orange-70: #ff9266 ;--wa-color-orange-60: #f46a45 ;--wa-color-orange-50: #cd491c ;--wa-color-orange-40: #9f3501 ;--wa-color-orange-30: #802700 ;--wa-color-orange-20: #601b00 ;--wa-color-orange-10: #3c0d00 ;--wa-color-orange-05: #280600 ;--wa-color-orange: var(--wa-color-orange-60);--wa-color-orange-key: 60;--wa-color-yellow-95: #fef3cd ;--wa-color-yellow-90: #ffe495 ;--wa-color-yellow-80: #fac22b ;--wa-color-yellow-70: #ef9d00 ;--wa-color-yellow-60: #da7e00 ;--wa-color-yellow-50: #b45f04 ;--wa-color-yellow-40: #8c4602 ;--wa-color-yellow-30: #6f3601 ;--wa-color-yellow-20: #532600 ;--wa-color-yellow-10: #331600 ;--wa-color-yellow-05: #220c00 ;--wa-color-yellow: var(--wa-color-yellow-80);--wa-color-yellow-key: 80;--wa-color-green-95: #e3f9e3 ;--wa-color-green-90: #c2f2c1 ;--wa-color-green-80: #93da98 ;--wa-color-green-70: #5dc36f ;--wa-color-green-60: #00ac49 ;--wa-color-green-50: #00883c ;--wa-color-green-40: #036730 ;--wa-color-green-30: #0a5027 ;--wa-color-green-20: #0a3a1d ;--wa-color-green-10: #052310 ;--wa-color-green-05: #031608 ;--wa-color-green: var(--wa-color-green-60);--wa-color-green-key: 60;--wa-color-cyan-95: #e3f6fb ;--wa-color-cyan-90: #c5ecf7 ;--wa-color-cyan-80: #7fd6ec ;--wa-color-cyan-70: #2fbedc ;--wa-color-cyan-60: #00a3c0 ;--wa-color-cyan-50: #078098 ;--wa-color-cyan-40: #026274 ;--wa-color-cyan-30: #014c5b ;--wa-color-cyan-20: #003844 ;--wa-color-cyan-10: #002129 ;--wa-color-cyan-05: #00151b ;--wa-color-cyan: var(--wa-color-cyan-70);--wa-color-cyan-key: 70;--wa-color-blue-95: #e8f3ff ;--wa-color-blue-90: #d1e8ff ;--wa-color-blue-80: #9fceff ;--wa-color-blue-70: #6eb3ff ;--wa-color-blue-60: #3e96ff ;--wa-color-blue-50: #0071ec ;--wa-color-blue-40: #0053c0 ;--wa-color-blue-30: #003f9c ;--wa-color-blue-20: #002d77 ;--wa-color-blue-10: #001a4e ;--wa-color-blue-05: #000f35 ;--wa-color-blue: var(--wa-color-blue-50);--wa-color-blue-key: 50;--wa-color-indigo-95: #f0f2ff ;--wa-color-indigo-90: #dfe5ff ;--wa-color-indigo-80: #bcc7ff ;--wa-color-indigo-70: #9da9ff ;--wa-color-indigo-60: #808aff ;--wa-color-indigo-50: #6163f2 ;--wa-color-indigo-40: #4945cb ;--wa-color-indigo-30: #3933a7 ;--wa-color-indigo-20: #292381 ;--wa-color-indigo-10: #181255 ;--wa-color-indigo-05: #0d0a3a ;--wa-color-indigo: var(--wa-color-indigo-50);--wa-color-indigo-key: 50;--wa-color-purple-95: #f7f0ff ;--wa-color-purple-90: #eedfff ;--wa-color-purple-80: #ddbdff ;--wa-color-purple-70: #ca99ff ;--wa-color-purple-60: #b678f5 ;--wa-color-purple-50: #9951db ;--wa-color-purple-40: #7936b3 ;--wa-color-purple-30: #612692 ;--wa-color-purple-20: #491870 ;--wa-color-purple-10: #2d0b48 ;--wa-color-purple-05: #1e0532 ;--wa-color-purple: var(--wa-color-purple-50);--wa-color-purple-key: 50;--wa-color-pink-95: #feeff9 ;--wa-color-pink-90: #feddf0 ;--wa-color-pink-80: #fcb5d8 ;--wa-color-pink-70: #f78dbf ;--wa-color-pink-60: #e66ba3 ;--wa-color-pink-50: #c84382 ;--wa-color-pink-40: #9e2a6c ;--wa-color-pink-30: #7d1e58 ;--wa-color-pink-20: #5e1342 ;--wa-color-pink-10: #3c0828 ;--wa-color-pink-05: #28041a ;--wa-color-pink: var(--wa-color-pink-50);--wa-color-pink-key: 50;--wa-color-gray-95: #f1f2f3 ;--wa-color-gray-90: #e4e5e9 ;--wa-color-gray-80: #c7c9d0 ;--wa-color-gray-70: #abaeb9 ;--wa-color-gray-60: #9194a2 ;--wa-color-gray-50: #717584 ;--wa-color-gray-40: #545868 ;--wa-color-gray-30: #424554 ;--wa-color-gray-20: #2f323f ;--wa-color-gray-10: #1b1d26 ;--wa-color-gray-05: #101219 ;--wa-color-gray: var(--wa-color-gray-40);--wa-color-gray-key: 40}}@layer wa-theme{:where(:root),.wa-theme-default,.wa-light,.wa-dark .wa-invert,.wa-light .wa-theme-default,.wa-dark .wa-theme-default.wa-invert,.wa-dark .wa-theme-default .wa-invert{color-scheme:light;color:var(--wa-color-text-normal);--wa-color-surface-raised: white;--wa-color-surface-default: white;--wa-color-surface-lowered: var(--wa-color-neutral-95);--wa-color-surface-border: var(--wa-color-neutral-90);--wa-color-text-normal: var(--wa-color-neutral-10);--wa-color-text-quiet: var(--wa-color-neutral-40);--wa-color-text-link: var(--wa-color-brand-40);--wa-color-overlay-modal: color-mix(in oklab, var(--wa-color-neutral-05) 50%, transparent);--wa-color-overlay-inline: color-mix(in oklab, var(--wa-color-neutral-80) 25%, transparent);--wa-color-shadow: color-mix( in oklab, var(--wa-color-neutral-05) calc(var(--wa-shadow-blur-scale) * 4% + 8%), transparent );--wa-color-focus: var(--wa-color-brand-60);--wa-color-mix-hover: black 10%;--wa-color-mix-active: black 20%;--wa-color-brand-fill-quiet: var(--wa-color-brand-95);--wa-color-brand-fill-normal: var(--wa-color-brand-90);--wa-color-brand-fill-loud: var(--wa-color-brand-50);--wa-color-brand-border-quiet: var(--wa-color-brand-90);--wa-color-brand-border-normal: var(--wa-color-brand-80);--wa-color-brand-border-loud: var(--wa-color-brand-60);--wa-color-brand-on-quiet: var(--wa-color-brand-40);--wa-color-brand-on-normal: var(--wa-color-brand-30);--wa-color-brand-on-loud: white;--wa-color-success-fill-quiet: var(--wa-color-success-95);--wa-color-success-fill-normal: var(--wa-color-success-90);--wa-color-success-fill-loud: var(--wa-color-success-50);--wa-color-success-border-quiet: var(--wa-color-success-90);--wa-color-success-border-normal: var(--wa-color-success-80);--wa-color-success-border-loud: var(--wa-color-success-60);--wa-color-success-on-quiet: var(--wa-color-success-40);--wa-color-success-on-normal: var(--wa-color-success-30);--wa-color-success-on-loud: white;--wa-color-warning-fill-quiet: var(--wa-color-warning-95);--wa-color-warning-fill-normal: var(--wa-color-warning-90);--wa-color-warning-fill-loud: var(--wa-color-warning-50);--wa-color-warning-border-quiet: var(--wa-color-warning-90);--wa-color-warning-border-normal: var(--wa-color-warning-80);--wa-color-warning-border-loud: var(--wa-color-warning-60);--wa-color-warning-on-quiet: var(--wa-color-warning-40);--wa-color-warning-on-normal: var(--wa-color-warning-30);--wa-color-warning-on-loud: white;--wa-color-danger-fill-quiet: var(--wa-color-danger-95);--wa-color-danger-fill-normal: var(--wa-color-danger-90);--wa-color-danger-fill-loud: var(--wa-color-danger-50);--wa-color-danger-border-quiet: var(--wa-color-danger-90);--wa-color-danger-border-normal: var(--wa-color-danger-80);--wa-color-danger-border-loud: var(--wa-color-danger-60);--wa-color-danger-on-quiet: var(--wa-color-danger-40);--wa-color-danger-on-normal: var(--wa-color-danger-30);--wa-color-danger-on-loud: white;--wa-color-neutral-fill-quiet: var(--wa-color-neutral-95);--wa-color-neutral-fill-normal: var(--wa-color-neutral-90);--wa-color-neutral-fill-loud: var(--wa-color-neutral-20);--wa-color-neutral-border-quiet: var(--wa-color-neutral-90);--wa-color-neutral-border-normal: var(--wa-color-neutral-80);--wa-color-neutral-border-loud: var(--wa-color-neutral-60);--wa-color-neutral-on-quiet: var(--wa-color-neutral-40);--wa-color-neutral-on-normal: var(--wa-color-neutral-30);--wa-color-neutral-on-loud: white}.wa-dark,.wa-invert,.wa-dark .wa-theme-default,.wa-light .wa-theme-default.wa-invert,.wa-light .wa-theme-default .wa-invert{color-scheme:dark;color:var(--wa-color-text-normal);--wa-color-surface-raised: var(--wa-color-neutral-10);--wa-color-surface-default: var(--wa-color-neutral-05);--wa-color-surface-lowered: color-mix(in oklab, var(--wa-color-surface-default), black 20%);--wa-color-surface-border: var(--wa-color-neutral-20);--wa-color-text-normal: var(--wa-color-neutral-95);--wa-color-text-quiet: var(--wa-color-neutral-60);--wa-color-text-link: var(--wa-color-brand-70);--wa-color-overlay-modal: color-mix(in oklab, black 60%, transparent);--wa-color-overlay-inline: color-mix(in oklab, var(--wa-color-neutral-50) 10%, transparent);--wa-color-shadow: color-mix( in oklab, var(--wa-color-surface-lowered) calc(var(--wa-shadow-blur-scale) * 32% + 40%), transparent );--wa-color-focus: var(--wa-color-brand-60);--wa-color-mix-hover: black 8%;--wa-color-mix-active: black 16%;--wa-color-brand-fill-quiet: var(--wa-color-brand-10);--wa-color-brand-fill-normal: var(--wa-color-brand-20);--wa-color-brand-fill-loud: var(--wa-color-brand-50);--wa-color-brand-border-quiet: var(--wa-color-brand-20);--wa-color-brand-border-normal: var(--wa-color-brand-30);--wa-color-brand-border-loud: var(--wa-color-brand-40);--wa-color-brand-on-quiet: var(--wa-color-brand-60);--wa-color-brand-on-normal: var(--wa-color-brand-70);--wa-color-brand-on-loud: white;--wa-color-success-fill-quiet: var(--wa-color-success-10);--wa-color-success-fill-normal: var(--wa-color-success-20);--wa-color-success-fill-loud: var(--wa-color-success-50);--wa-color-success-border-quiet: var(--wa-color-success-20);--wa-color-success-border-normal: var(--wa-color-success-30);--wa-color-success-border-loud: var(--wa-color-success-40);--wa-color-success-on-quiet: var(--wa-color-success-60);--wa-color-success-on-normal: var(--wa-color-success-70);--wa-color-success-on-loud: white;--wa-color-warning-fill-quiet: var(--wa-color-warning-10);--wa-color-warning-fill-normal: var(--wa-color-warning-20);--wa-color-warning-fill-loud: var(--wa-color-warning-50);--wa-color-warning-border-quiet: var(--wa-color-warning-20);--wa-color-warning-border-normal: var(--wa-color-warning-30);--wa-color-warning-border-loud: var(--wa-color-warning-40);--wa-color-warning-on-quiet: var(--wa-color-warning-60);--wa-color-warning-on-normal: var(--wa-color-warning-70);--wa-color-warning-on-loud: white;--wa-color-danger-fill-quiet: var(--wa-color-danger-10);--wa-color-danger-fill-normal: var(--wa-color-danger-20);--wa-color-danger-fill-loud: var(--wa-color-danger-50);--wa-color-danger-border-quiet: var(--wa-color-danger-20);--wa-color-danger-border-normal: var(--wa-color-danger-30);--wa-color-danger-border-loud: var(--wa-color-danger-40);--wa-color-danger-on-quiet: var(--wa-color-danger-60);--wa-color-danger-on-normal: var(--wa-color-danger-70);--wa-color-danger-on-loud: white;--wa-color-neutral-fill-quiet: var(--wa-color-neutral-10);--wa-color-neutral-fill-normal: var(--wa-color-neutral-20);--wa-color-neutral-fill-loud: var(--wa-color-neutral-90);--wa-color-neutral-border-quiet: var(--wa-color-neutral-20);--wa-color-neutral-border-normal: var(--wa-color-neutral-30);--wa-color-neutral-border-loud: var(--wa-color-neutral-40);--wa-color-neutral-on-quiet: var(--wa-color-neutral-60);--wa-color-neutral-on-normal: var(--wa-color-neutral-70);--wa-color-neutral-on-loud: var(--wa-color-neutral-05)}:where(:root),.wa-theme-default,.wa-light,.wa-dark,.wa-invert{font-family:var(--wa-font-family-body);--wa-font-family-body: ui-sans-serif, system-ui, sans-serif;--wa-font-family-heading: var(--wa-font-family-body);--wa-font-family-code: ui-monospace, monospace;--wa-font-family-longform: ui-serif, serif;--wa-font-size-scale: 1;--wa-font-size-3xs: round(calc(var(--wa-font-size-2xs) / 1.125), 1px);--wa-font-size-2xs: round(calc(var(--wa-font-size-xs) / 1.125), 1px);--wa-font-size-xs: round(calc(var(--wa-font-size-s) / 1.125), 1px);--wa-font-size-s: round(calc(var(--wa-font-size-m) / 1.125), 1px);--wa-font-size-m: calc(1rem * var(--wa-font-size-scale));--wa-font-size-l: round(calc(var(--wa-font-size-m) * 1.125 * 1.125), 1px);--wa-font-size-xl: round(calc(var(--wa-font-size-l) * 1.125 * 1.125), 1px);--wa-font-size-2xl: round(calc(var(--wa-font-size-xl) * 1.125 * 1.125), 1px);--wa-font-size-3xl: round(calc(var(--wa-font-size-2xl) * 1.125 * 1.125), 1px);--wa-font-size-4xl: round(calc(var(--wa-font-size-3xl) * 1.125 * 1.125), 1px);--wa-font-size-5xl: round(calc(var(--wa-font-size-4xl) * 1.125 * 1.125), 1px);--wa-font-size-smaller: round(calc(1em / 1.125), 1px);--wa-font-size-larger: round(calc(1em * 1.125 * 1.125), 1px);--wa-font-weight-light: 300;--wa-font-weight-normal: 400;--wa-font-weight-semibold: 500;--wa-font-weight-bold: 600;--wa-font-weight-body: var(--wa-font-weight-normal);--wa-font-weight-heading: var(--wa-font-weight-bold);--wa-font-weight-code: var(--wa-font-weight-normal);--wa-font-weight-longform: var(--wa-font-weight-normal);--wa-font-weight-action: var(--wa-font-weight-semibold);--wa-line-height-condensed: 1.2;--wa-line-height-normal: 1.6;--wa-line-height-expanded: 2;--wa-link-decoration-default: underline color-mix(in oklab, currentColor 70%, transparent) dotted;--wa-link-decoration-hover: underline;--wa-space-scale: 1;--wa-space-3xs: calc(var(--wa-space-scale) * .125rem);--wa-space-2xs: calc(var(--wa-space-scale) * .25rem);--wa-space-xs: calc(var(--wa-space-scale) * .5rem);--wa-space-s: calc(var(--wa-space-scale) * .75rem);--wa-space-m: calc(var(--wa-space-scale) * 1rem);--wa-space-l: calc(var(--wa-space-scale) * 1.5rem);--wa-space-xl: calc(var(--wa-space-scale) * 2rem);--wa-space-2xl: calc(var(--wa-space-scale) * 2.5rem);--wa-space-3xl: calc(var(--wa-space-scale) * 3rem);--wa-space-4xl: calc(var(--wa-space-scale) * 4rem);--wa-space-5xl: calc(var(--wa-space-scale) * 5rem);--wa-content-spacing: var(--wa-space-l);--wa-border-style: solid;--wa-border-width-scale: 1;--wa-border-width-s: calc(var(--wa-border-width-scale) * .0625rem);--wa-border-width-m: calc(var(--wa-border-width-scale) * .125rem);--wa-border-width-l: calc(var(--wa-border-width-scale) * .1875rem);--wa-border-radius-scale: 1;--wa-border-radius-s: calc(var(--wa-border-radius-scale) * .1875rem);--wa-border-radius-m: calc(var(--wa-border-radius-scale) * .375rem);--wa-border-radius-l: calc(var(--wa-border-radius-scale) * .75rem);--wa-border-radius-pill: 9999px;--wa-border-radius-circle: 50%;--wa-border-radius-square: 0px;--wa-focus-ring-style: solid;--wa-focus-ring-width: .1875rem;--wa-focus-ring: var(--wa-focus-ring-style) var(--wa-focus-ring-width) var(--wa-color-focus);--wa-focus-ring-offset: .0625rem;--wa-shadow-offset-x-scale: 0;--wa-shadow-offset-x-s: calc(var(--wa-shadow-offset-x-scale) * .125rem);--wa-shadow-offset-x-m: calc(var(--wa-shadow-offset-x-scale) * .25rem);--wa-shadow-offset-x-l: calc(var(--wa-shadow-offset-x-scale) * .5rem);--wa-shadow-offset-y-scale: 1;--wa-shadow-offset-y-s: calc(var(--wa-shadow-offset-y-scale) * .125rem);--wa-shadow-offset-y-m: calc(var(--wa-shadow-offset-y-scale) * .25rem);--wa-shadow-offset-y-l: calc(var(--wa-shadow-offset-y-scale) * .5rem);--wa-shadow-blur-scale: 1;--wa-shadow-blur-s: calc(var(--wa-shadow-blur-scale) * .125rem);--wa-shadow-blur-m: calc(var(--wa-shadow-blur-scale) * .25rem);--wa-shadow-blur-l: calc(var(--wa-shadow-blur-scale) * .5rem);--wa-shadow-spread-scale: -.5;--wa-shadow-spread-s: calc(var(--wa-shadow-spread-scale) * .125rem);--wa-shadow-spread-m: calc(var(--wa-shadow-spread-scale) * .25rem);--wa-shadow-spread-l: calc(var(--wa-shadow-spread-scale) * .5rem);--wa-shadow-s: var(--wa-shadow-offset-x-s) var(--wa-shadow-offset-y-s) var(--wa-shadow-blur-s) var(--wa-shadow-spread-s) var(--wa-color-shadow);--wa-shadow-m: var(--wa-shadow-offset-x-m) var(--wa-shadow-offset-y-m) var(--wa-shadow-blur-m) var(--wa-shadow-spread-m) var(--wa-color-shadow);--wa-shadow-l: var(--wa-shadow-offset-x-l) var(--wa-shadow-offset-y-l) var(--wa-shadow-blur-l) var(--wa-shadow-spread-l) var(--wa-color-shadow);--wa-transition-easing: ease;--wa-transition-slow: .3s;--wa-transition-normal: .15s;--wa-transition-fast: 75ms;--wa-form-control-background-color: var(--wa-color-surface-default);--wa-form-control-border-color: var(--wa-color-neutral-border-loud);--wa-form-control-border-style: var(--wa-border-style);--wa-form-control-border-width: var(--wa-border-width-s);--wa-form-control-border-radius: var(--wa-border-radius-m);--wa-form-control-activated-color: var(--wa-color-brand-fill-loud);--wa-form-control-label-color: var(--wa-color-text-normal);--wa-form-control-label-font-weight: var(--wa-font-weight-semibold);--wa-form-control-label-line-height: var(--wa-line-height-condensed);--wa-form-control-value-color: var(--wa-color-text-normal);--wa-form-control-value-font-weight: var(--wa-font-weight-body);--wa-form-control-value-line-height: var(--wa-line-height-condensed);--wa-form-control-hint-color: var(--wa-color-text-quiet);--wa-form-control-hint-font-weight: var(--wa-font-weight-body);--wa-form-control-hint-line-height: var(--wa-line-height-normal);--wa-form-control-placeholder-color: var(--wa-color-gray-50);--wa-form-control-required-content: "*";--wa-form-control-required-content-color: inherit;--wa-form-control-required-content-offset: .1em;--wa-form-control-padding-block: .75em;--wa-form-control-padding-inline: 1em;--wa-form-control-height: round( calc(2 * var(--wa-form-control-padding-block) + 1em * var(--wa-form-control-value-line-height)), 1px );--wa-form-control-toggle-size: round(1.25em, 1px);--wa-panel-border-style: var(--wa-border-style);--wa-panel-border-width: var(--wa-border-width-s);--wa-panel-border-radius: var(--wa-border-radius-l);--wa-tooltip-arrow-size: .375rem;--wa-tooltip-background-color: var(--wa-color-text-normal);--wa-tooltip-border-color: var(--wa-tooltip-background-color);--wa-tooltip-border-style: var(--wa-border-style);--wa-tooltip-border-width: var(--wa-border-width-s);--wa-tooltip-border-radius: var(--wa-border-radius-s);--wa-tooltip-content-color: var(--wa-color-surface-default);--wa-tooltip-font-size: var(--wa-font-size-s);--wa-tooltip-line-height: var(--wa-line-height-normal)}}`, qr = "ndv-viewer{display:block;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;font-size:13px;--ndv-gap: 4px}.ndv-root{display:flex;flex-direction:column;gap:var(--ndv-gap)}.ndv-hidden{display:none!important}.ndv-info-bar{display:flex;justify-content:space-between;align-items:center;padding:2px 4px;opacity:.7;font-size:11px;min-height:18px;font-variant-numeric:tabular-nums}.ndv-info-bar span{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ndv-canvas-container{border:1px solid var(--wa-color-neutral-300, #ccc);border-radius:4px;overflow:hidden;position:relative;line-height:0}.ndv-spinner{position:absolute;top:8px;right:8px;width:18px;height:18px;border:2px solid var(--wa-color-neutral-300, #ccc);border-top-color:var(--wa-color-primary-600, #3b82f6);border-radius:50%;animation:ndv-spin .8s linear infinite;display:none;z-index:10}.ndv-spinner.ndv-visible{display:block}@keyframes ndv-spin{to{transform:rotate(360deg)}}.ndv-shared-histogram{height:120px;overflow:hidden;border:1px solid var(--wa-color-neutral-200, #e2e2e2);border-radius:4px}.ndv-shared-histogram .jupyter-rfb-canvas,.ndv-shared-histogram canvas,.ndv-shared-histogram>div{width:100%!important;height:100%!important}ndv-dim-sliders{display:block}.ndv-slider-row{display:flex;align-items:center;gap:6px;padding:2px 0}.ndv-axis-label{font-size:12px;font-weight:500;min-width:24px;text-align:right;opacity:.8}ndv-dim-sliders wa-slider{flex:1;--thumb-size: 14px;--track-height: 4px}.ndv-value-label{font-size:11px;font-variant-numeric:tabular-nums;min-width:40px;text-align:right;opacity:.7}ndv-lut-row{display:block;padding:2px 0}.ndv-lut-row{display:flex;align-items:center;gap:4px}.ndv-lut-row wa-checkbox{--size: 16px;flex-shrink:0}.ndv-channel-name{font-size:11px;min-width:40px;max-width:80px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.ndv-cmap-select{flex-shrink:0;width:90px}.ndv-cmap-select wa-select{font-size:11px}.ndv-lut-row wa-slider{flex:1;min-width:80px;--thumb-size: 12px;--track-height: 4px}.ndv-auto-btn{flex-shrink:0}.ndv-auto-btn wa-button{font-size:11px}ndv-toolbar{display:block}.ndv-toolbar{display:flex;align-items:center;gap:4px;flex-wrap:wrap}.ndv-toolbar wa-select{width:120px;font-size:12px}.ndv-toolbar wa-button{font-size:12px}.ndv-spacer{flex:1}";
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ue = globalThis, Ze = ue.ShadowRoot && (ue.ShadyCSS === void 0 || ue.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, Ge = Symbol(), ha = /* @__PURE__ */ new WeakMap();
let Ua = class {
  constructor(e, a, r) {
    if (this._$cssResult$ = !0, r !== Ge) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = a;
  }
  get styleSheet() {
    let e = this.o;
    const a = this.t;
    if (Ze && e === void 0) {
      const r = a !== void 0 && a.length === 1;
      r && (e = ha.get(a)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), r && ha.set(a, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const Dr = (o) => new Ua(typeof o == "string" ? o : o + "", void 0, Ge), D = (o, ...e) => {
  const a = o.length === 1 ? o[0] : e.reduce((r, t, l) => r + ((n) => {
    if (n._$cssResult$ === !0) return n.cssText;
    if (typeof n == "number") return n;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + n + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(t) + o[l + 1], o[0]);
  return new Ua(a, o, Ge);
}, Vr = (o, e) => {
  if (Ze) o.adoptedStyleSheets = e.map((a) => a instanceof CSSStyleSheet ? a : a.styleSheet);
  else for (const a of e) {
    const r = document.createElement("style"), t = ue.litNonce;
    t !== void 0 && r.setAttribute("nonce", t), r.textContent = a.cssText, o.appendChild(r);
  }
}, pa = Ze ? (o) => o : (o) => o instanceof CSSStyleSheet ? ((e) => {
  let a = "";
  for (const r of e.cssRules) a += r.cssText;
  return Dr(a);
})(o) : o;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: Br, defineProperty: Fr, getOwnPropertyDescriptor: Ir, getOwnPropertyNames: Pr, getOwnPropertySymbols: Hr, getPrototypeOf: Nr } = Object, mo = globalThis, va = mo.trustedTypes, Ur = va ? va.emptyScript : "", ze = mo.reactiveElementPolyfillSupport, Qo = (o, e) => o, ve = { toAttribute(o, e) {
  switch (e) {
    case Boolean:
      o = o ? Ur : null;
      break;
    case Object:
    case Array:
      o = o == null ? o : JSON.stringify(o);
  }
  return o;
}, fromAttribute(o, e) {
  let a = o;
  switch (e) {
    case Boolean:
      a = o !== null;
      break;
    case Number:
      a = o === null ? null : Number(o);
      break;
    case Object:
    case Array:
      try {
        a = JSON.parse(o);
      } catch {
        a = null;
      }
  }
  return a;
} }, Qe = (o, e) => !Br(o, e), fa = { attribute: !0, type: String, converter: ve, reflect: !1, useDefault: !1, hasChanged: Qe };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), mo.litPropertyMetadata ?? (mo.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let Vo = class extends HTMLElement {
  static addInitializer(e) {
    this._$Ei(), (this.l ?? (this.l = [])).push(e);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(e, a = fa) {
    if (a.state && (a.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(e) && ((a = Object.create(a)).wrapped = !0), this.elementProperties.set(e, a), !a.noAccessor) {
      const r = Symbol(), t = this.getPropertyDescriptor(e, r, a);
      t !== void 0 && Fr(this.prototype, e, t);
    }
  }
  static getPropertyDescriptor(e, a, r) {
    const { get: t, set: l } = Ir(this.prototype, e) ?? { get() {
      return this[a];
    }, set(n) {
      this[a] = n;
    } };
    return { get: t, set(n) {
      const i = t == null ? void 0 : t.call(this);
      l == null || l.call(this, n), this.requestUpdate(e, i, r);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) ?? fa;
  }
  static _$Ei() {
    if (this.hasOwnProperty(Qo("elementProperties"))) return;
    const e = Nr(this);
    e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(Qo("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(Qo("properties"))) {
      const a = this.properties, r = [...Pr(a), ...Hr(a)];
      for (const t of r) this.createProperty(t, a[t]);
    }
    const e = this[Symbol.metadata];
    if (e !== null) {
      const a = litPropertyMetadata.get(e);
      if (a !== void 0) for (const [r, t] of a) this.elementProperties.set(r, t);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [a, r] of this.elementProperties) {
      const t = this._$Eu(a, r);
      t !== void 0 && this._$Eh.set(t, a);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(e) {
    const a = [];
    if (Array.isArray(e)) {
      const r = new Set(e.flat(1 / 0).reverse());
      for (const t of r) a.unshift(pa(t));
    } else e !== void 0 && a.push(pa(e));
    return a;
  }
  static _$Eu(e, a) {
    const r = a.attribute;
    return r === !1 ? void 0 : typeof r == "string" ? r : typeof e == "string" ? e.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    var e;
    this._$ES = new Promise((a) => this.enableUpdating = a), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), (e = this.constructor.l) == null || e.forEach((a) => a(this));
  }
  addController(e) {
    var a;
    (this._$EO ?? (this._$EO = /* @__PURE__ */ new Set())).add(e), this.renderRoot !== void 0 && this.isConnected && ((a = e.hostConnected) == null || a.call(e));
  }
  removeController(e) {
    var a;
    (a = this._$EO) == null || a.delete(e);
  }
  _$E_() {
    const e = /* @__PURE__ */ new Map(), a = this.constructor.elementProperties;
    for (const r of a.keys()) this.hasOwnProperty(r) && (e.set(r, this[r]), delete this[r]);
    e.size > 0 && (this._$Ep = e);
  }
  createRenderRoot() {
    const e = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return Vr(e, this.constructor.elementStyles), e;
  }
  connectedCallback() {
    var e;
    this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (e = this._$EO) == null || e.forEach((a) => {
      var r;
      return (r = a.hostConnected) == null ? void 0 : r.call(a);
    });
  }
  enableUpdating(e) {
  }
  disconnectedCallback() {
    var e;
    (e = this._$EO) == null || e.forEach((a) => {
      var r;
      return (r = a.hostDisconnected) == null ? void 0 : r.call(a);
    });
  }
  attributeChangedCallback(e, a, r) {
    this._$AK(e, r);
  }
  _$ET(e, a) {
    var l;
    const r = this.constructor.elementProperties.get(e), t = this.constructor._$Eu(e, r);
    if (t !== void 0 && r.reflect === !0) {
      const n = (((l = r.converter) == null ? void 0 : l.toAttribute) !== void 0 ? r.converter : ve).toAttribute(a, r.type);
      this._$Em = e, n == null ? this.removeAttribute(t) : this.setAttribute(t, n), this._$Em = null;
    }
  }
  _$AK(e, a) {
    var l, n;
    const r = this.constructor, t = r._$Eh.get(e);
    if (t !== void 0 && this._$Em !== t) {
      const i = r.getPropertyOptions(t), c = typeof i.converter == "function" ? { fromAttribute: i.converter } : ((l = i.converter) == null ? void 0 : l.fromAttribute) !== void 0 ? i.converter : ve;
      this._$Em = t;
      const w = c.fromAttribute(a, i.type);
      this[t] = w ?? ((n = this._$Ej) == null ? void 0 : n.get(t)) ?? w, this._$Em = null;
    }
  }
  requestUpdate(e, a, r, t = !1, l) {
    var n;
    if (e !== void 0) {
      const i = this.constructor;
      if (t === !1 && (l = this[e]), r ?? (r = i.getPropertyOptions(e)), !((r.hasChanged ?? Qe)(l, a) || r.useDefault && r.reflect && l === ((n = this._$Ej) == null ? void 0 : n.get(e)) && !this.hasAttribute(i._$Eu(e, r)))) return;
      this.C(e, a, r);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(e, a, { useDefault: r, reflect: t, wrapped: l }, n) {
    r && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(e) && (this._$Ej.set(e, n ?? a ?? this[e]), l !== !0 || n !== void 0) || (this._$AL.has(e) || (this.hasUpdated || r || (a = void 0), this._$AL.set(e, a)), t === !0 && this._$Em !== e && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(e));
  }
  async _$EP() {
    this.isUpdatePending = !0;
    try {
      await this._$ES;
    } catch (a) {
      Promise.reject(a);
    }
    const e = this.scheduleUpdate();
    return e != null && await e, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var r;
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this._$Ep) {
        for (const [l, n] of this._$Ep) this[l] = n;
        this._$Ep = void 0;
      }
      const t = this.constructor.elementProperties;
      if (t.size > 0) for (const [l, n] of t) {
        const { wrapped: i } = n, c = this[l];
        i !== !0 || this._$AL.has(l) || c === void 0 || this.C(l, void 0, n, c);
      }
    }
    let e = !1;
    const a = this._$AL;
    try {
      e = this.shouldUpdate(a), e ? (this.willUpdate(a), (r = this._$EO) == null || r.forEach((t) => {
        var l;
        return (l = t.hostUpdate) == null ? void 0 : l.call(t);
      }), this.update(a)) : this._$EM();
    } catch (t) {
      throw e = !1, this._$EM(), t;
    }
    e && this._$AE(a);
  }
  willUpdate(e) {
  }
  _$AE(e) {
    var a;
    (a = this._$EO) == null || a.forEach((r) => {
      var t;
      return (t = r.hostUpdated) == null ? void 0 : t.call(r);
    }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(e)), this.updated(e);
  }
  _$EM() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = !1;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$ES;
  }
  shouldUpdate(e) {
    return !0;
  }
  update(e) {
    this._$Eq && (this._$Eq = this._$Eq.forEach((a) => this._$ET(a, this[a]))), this._$EM();
  }
  updated(e) {
  }
  firstUpdated(e) {
  }
};
Vo.elementStyles = [], Vo.shadowRootOptions = { mode: "open" }, Vo[Qo("elementProperties")] = /* @__PURE__ */ new Map(), Vo[Qo("finalized")] = /* @__PURE__ */ new Map(), ze == null || ze({ ReactiveElement: Vo }), (mo.reactiveElementVersions ?? (mo.reactiveElementVersions = [])).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Jo = globalThis, ga = (o) => o, fe = Jo.trustedTypes, ma = fe ? fe.createPolicy("lit-html", { createHTML: (o) => o }) : void 0, ja = "$lit$", go = `lit$${Math.random().toFixed(9).slice(2)}$`, Wa = "?" + go, jr = `<${Wa}>`, Ro = document, oe = () => Ro.createComment(""), ee = (o) => o === null || typeof o != "object" && typeof o != "function", Je = Array.isArray, Wr = (o) => Je(o) || typeof (o == null ? void 0 : o[Symbol.iterator]) == "function", Ee = `[
\f\r]`, Yo = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, ba = /-->/g, ya = />/g, _o = RegExp(`>|${Ee}(?:([^\\s"'>=/]+)(${Ee}*=${Ee}*(?:[^
\f\r"'\`<>=]|("|')|))|$)`, "g"), xa = /'/g, ka = /"/g, Ka = /^(?:script|style|textarea|title)$/i, Kr = (o) => (e, ...a) => ({ _$litType$: o, strings: e, values: a }), m = Kr(1), I = Symbol.for("lit-noChange"), A = Symbol.for("lit-nothing"), Ca = /* @__PURE__ */ new WeakMap(), Lo = Ro.createTreeWalker(Ro, 129);
function Ya(o, e) {
  if (!Je(o) || !o.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return ma !== void 0 ? ma.createHTML(e) : e;
}
const Yr = (o, e) => {
  const a = o.length - 1, r = [];
  let t, l = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", n = Yo;
  for (let i = 0; i < a; i++) {
    const c = o[i];
    let w, d, h = -1, p = 0;
    for (; p < c.length && (n.lastIndex = p, d = n.exec(c), d !== null); ) p = n.lastIndex, n === Yo ? d[1] === "!--" ? n = ba : d[1] !== void 0 ? n = ya : d[2] !== void 0 ? (Ka.test(d[2]) && (t = RegExp("</" + d[2], "g")), n = _o) : d[3] !== void 0 && (n = _o) : n === _o ? d[0] === ">" ? (n = t ?? Yo, h = -1) : d[1] === void 0 ? h = -2 : (h = n.lastIndex - d[2].length, w = d[1], n = d[3] === void 0 ? _o : d[3] === '"' ? ka : xa) : n === ka || n === xa ? n = _o : n === ba || n === ya ? n = Yo : (n = _o, t = void 0);
    const v = n === _o && o[i + 1].startsWith("/>") ? " " : "";
    l += n === Yo ? c + jr : h >= 0 ? (r.push(w), c.slice(0, h) + ja + c.slice(h) + go + v) : c + go + (h === -2 ? i : v);
  }
  return [Ya(o, l + (o[a] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), r];
};
class ae {
  constructor({ strings: e, _$litType$: a }, r) {
    let t;
    this.parts = [];
    let l = 0, n = 0;
    const i = e.length - 1, c = this.parts, [w, d] = Yr(e, a);
    if (this.el = ae.createElement(w, r), Lo.currentNode = this.el.content, a === 2 || a === 3) {
      const h = this.el.content.firstChild;
      h.replaceWith(...h.childNodes);
    }
    for (; (t = Lo.nextNode()) !== null && c.length < i; ) {
      if (t.nodeType === 1) {
        if (t.hasAttributes()) for (const h of t.getAttributeNames()) if (h.endsWith(ja)) {
          const p = d[n++], v = t.getAttribute(h).split(go), f = /([.?@])?(.*)/.exec(p);
          c.push({ type: 1, index: l, name: f[2], strings: v, ctor: f[1] === "." ? Zr : f[1] === "?" ? Gr : f[1] === "@" ? Qr : xe }), t.removeAttribute(h);
        } else h.startsWith(go) && (c.push({ type: 6, index: l }), t.removeAttribute(h));
        if (Ka.test(t.tagName)) {
          const h = t.textContent.split(go), p = h.length - 1;
          if (p > 0) {
            t.textContent = fe ? fe.emptyScript : "";
            for (let v = 0; v < p; v++) t.append(h[v], oe()), Lo.nextNode(), c.push({ type: 2, index: ++l });
            t.append(h[p], oe());
          }
        }
      } else if (t.nodeType === 8) if (t.data === Wa) c.push({ type: 2, index: l });
      else {
        let h = -1;
        for (; (h = t.data.indexOf(go, h + 1)) !== -1; ) c.push({ type: 7, index: l }), h += go.length - 1;
      }
      l++;
    }
  }
  static createElement(e, a) {
    const r = Ro.createElement("template");
    return r.innerHTML = e, r;
  }
}
function Io(o, e, a = o, r) {
  var n, i;
  if (e === I) return e;
  let t = r !== void 0 ? (n = a._$Co) == null ? void 0 : n[r] : a._$Cl;
  const l = ee(e) ? void 0 : e._$litDirective$;
  return (t == null ? void 0 : t.constructor) !== l && ((i = t == null ? void 0 : t._$AO) == null || i.call(t, !1), l === void 0 ? t = void 0 : (t = new l(o), t._$AT(o, a, r)), r !== void 0 ? (a._$Co ?? (a._$Co = []))[r] = t : a._$Cl = t), t !== void 0 && (e = Io(o, t._$AS(o, e.values), t, r)), e;
}
class Xr {
  constructor(e, a) {
    this._$AV = [], this._$AN = void 0, this._$AD = e, this._$AM = a;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(e) {
    const { el: { content: a }, parts: r } = this._$AD, t = ((e == null ? void 0 : e.creationScope) ?? Ro).importNode(a, !0);
    Lo.currentNode = t;
    let l = Lo.nextNode(), n = 0, i = 0, c = r[0];
    for (; c !== void 0; ) {
      if (n === c.index) {
        let w;
        c.type === 2 ? w = new No(l, l.nextSibling, this, e) : c.type === 1 ? w = new c.ctor(l, c.name, c.strings, this, e) : c.type === 6 && (w = new Jr(l, this, e)), this._$AV.push(w), c = r[++i];
      }
      n !== (c == null ? void 0 : c.index) && (l = Lo.nextNode(), n++);
    }
    return Lo.currentNode = Ro, t;
  }
  p(e) {
    let a = 0;
    for (const r of this._$AV) r !== void 0 && (r.strings !== void 0 ? (r._$AI(e, r, a), a += r.strings.length - 2) : r._$AI(e[a])), a++;
  }
}
class No {
  get _$AU() {
    var e;
    return ((e = this._$AM) == null ? void 0 : e._$AU) ?? this._$Cv;
  }
  constructor(e, a, r, t) {
    this.type = 2, this._$AH = A, this._$AN = void 0, this._$AA = e, this._$AB = a, this._$AM = r, this.options = t, this._$Cv = (t == null ? void 0 : t.isConnected) ?? !0;
  }
  get parentNode() {
    let e = this._$AA.parentNode;
    const a = this._$AM;
    return a !== void 0 && (e == null ? void 0 : e.nodeType) === 11 && (e = a.parentNode), e;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(e, a = this) {
    e = Io(this, e, a), ee(e) ? e === A || e == null || e === "" ? (this._$AH !== A && this._$AR(), this._$AH = A) : e !== this._$AH && e !== I && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : Wr(e) ? this.k(e) : this._(e);
  }
  O(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
  }
  _(e) {
    this._$AH !== A && ee(this._$AH) ? this._$AA.nextSibling.data = e : this.T(Ro.createTextNode(e)), this._$AH = e;
  }
  $(e) {
    var l;
    const { values: a, _$litType$: r } = e, t = typeof r == "number" ? this._$AC(e) : (r.el === void 0 && (r.el = ae.createElement(Ya(r.h, r.h[0]), this.options)), r);
    if (((l = this._$AH) == null ? void 0 : l._$AD) === t) this._$AH.p(a);
    else {
      const n = new Xr(t, this), i = n.u(this.options);
      n.p(a), this.T(i), this._$AH = n;
    }
  }
  _$AC(e) {
    let a = Ca.get(e.strings);
    return a === void 0 && Ca.set(e.strings, a = new ae(e)), a;
  }
  k(e) {
    Je(this._$AH) || (this._$AH = [], this._$AR());
    const a = this._$AH;
    let r, t = 0;
    for (const l of e) t === a.length ? a.push(r = new No(this.O(oe()), this.O(oe()), this, this.options)) : r = a[t], r._$AI(l), t++;
    t < a.length && (this._$AR(r && r._$AB.nextSibling, t), a.length = t);
  }
  _$AR(e = this._$AA.nextSibling, a) {
    var r;
    for ((r = this._$AP) == null ? void 0 : r.call(this, !1, !0, a); e !== this._$AB; ) {
      const t = ga(e).nextSibling;
      ga(e).remove(), e = t;
    }
  }
  setConnected(e) {
    var a;
    this._$AM === void 0 && (this._$Cv = e, (a = this._$AP) == null || a.call(this, e));
  }
}
class xe {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(e, a, r, t, l) {
    this.type = 1, this._$AH = A, this._$AN = void 0, this.element = e, this.name = a, this._$AM = t, this.options = l, r.length > 2 || r[0] !== "" || r[1] !== "" ? (this._$AH = Array(r.length - 1).fill(new String()), this.strings = r) : this._$AH = A;
  }
  _$AI(e, a = this, r, t) {
    const l = this.strings;
    let n = !1;
    if (l === void 0) e = Io(this, e, a, 0), n = !ee(e) || e !== this._$AH && e !== I, n && (this._$AH = e);
    else {
      const i = e;
      let c, w;
      for (e = l[0], c = 0; c < l.length - 1; c++) w = Io(this, i[r + c], a, c), w === I && (w = this._$AH[c]), n || (n = !ee(w) || w !== this._$AH[c]), w === A ? e = A : e !== A && (e += (w ?? "") + l[c + 1]), this._$AH[c] = w;
    }
    n && !t && this.j(e);
  }
  j(e) {
    e === A ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
class Zr extends xe {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === A ? void 0 : e;
  }
}
class Gr extends xe {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== A);
  }
}
class Qr extends xe {
  constructor(e, a, r, t, l) {
    super(e, a, r, t, l), this.type = 5;
  }
  _$AI(e, a = this) {
    if ((e = Io(this, e, a, 0) ?? A) === I) return;
    const r = this._$AH, t = e === A && r !== A || e.capture !== r.capture || e.once !== r.once || e.passive !== r.passive, l = e !== A && (r === A || t);
    t && this.element.removeEventListener(this.name, this, r), l && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    var a;
    typeof this._$AH == "function" ? this._$AH.call(((a = this.options) == null ? void 0 : a.host) ?? this.element, e) : this._$AH.handleEvent(e);
  }
}
class Jr {
  constructor(e, a, r) {
    this.element = e, this.type = 6, this._$AN = void 0, this._$AM = a, this.options = r;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e) {
    Io(this, e);
  }
}
const ot = { I: No }, Ae = Jo.litHtmlPolyfillSupport;
Ae == null || Ae(ae, No), (Jo.litHtmlVersions ?? (Jo.litHtmlVersions = [])).push("3.3.2");
const et = (o, e, a) => {
  const r = (a == null ? void 0 : a.renderBefore) ?? e;
  let t = r._$litPart$;
  if (t === void 0) {
    const l = (a == null ? void 0 : a.renderBefore) ?? null;
    r._$litPart$ = t = new No(e.insertBefore(oe(), l), l, void 0, a ?? {});
  }
  return t._$AI(o), t;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Oo = globalThis;
let lo = class extends Vo {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    var a;
    const e = super.createRenderRoot();
    return (a = this.renderOptions).renderBefore ?? (a.renderBefore = e.firstChild), e;
  }
  update(e) {
    const a = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = et(a, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    var e;
    super.connectedCallback(), (e = this._$Do) == null || e.setConnected(!0);
  }
  disconnectedCallback() {
    var e;
    super.disconnectedCallback(), (e = this._$Do) == null || e.setConnected(!1);
  }
  render() {
    return I;
  }
};
var Ha;
lo._$litElement$ = !0, lo.finalized = !0, (Ha = Oo.litElementHydrateSupport) == null || Ha.call(Oo, { LitElement: lo });
const Le = Oo.litElementPolyfillSupport;
Le == null || Le({ LitElement: lo });
(Oo.litElementVersions ?? (Oo.litElementVersions = [])).push("4.2.2");
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const at = !1;
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var rt = D`
  :host {
    --track-size: 0.5em;
    --thumb-width: 1.4em;
    --thumb-height: 1.4em;
    --marker-width: 0.1875em;
    --marker-height: 0.1875em;
  }

  :host([orientation='vertical']) {
    width: auto;
  }

  #label:has(~ .vertical) {
    display: block;
    order: 2;
    max-width: none;
    text-align: center;
  }

  #description:has(~ .vertical) {
    order: 3;
    text-align: center;
  }

  /* Add extra space between slider and label, when present */
  #label.has-label ~ #slider {
    &.horizontal {
      margin-block-start: 0.5em;
    }
    &.vertical {
      margin-block-end: 0.5em;
    }
  }

  #slider {
    touch-action: none;

    &:focus {
      outline: none;
    }

    &:focus-visible:not(.disabled) #thumb,
    &:focus-visible:not(.disabled) #thumb-min,
    &:focus-visible:not(.disabled) #thumb-max {
      outline: var(--wa-focus-ring);
      /* intentionally no offset due to border */
    }
  }

  #track {
    position: relative;
    border-radius: 9999px;
    background: var(--wa-color-neutral-fill-normal);
    isolation: isolate;
  }

  /* Orientation */
  .horizontal #track {
    height: var(--track-size);
  }

  .vertical #track {
    order: 1;
    width: var(--track-size);
    height: 200px;
  }

  /* Disabled */
  .disabled #track {
    cursor: not-allowed;
    opacity: 0.5;
  }

  /* Indicator */
  #indicator {
    position: absolute;
    border-radius: inherit;
    background-color: var(--wa-form-control-activated-color);

    &:dir(ltr) {
      right: calc(100% - max(var(--start), var(--end)));
      left: min(var(--start), var(--end));
    }

    &:dir(rtl) {
      right: min(var(--start), var(--end));
      left: calc(100% - max(var(--start), var(--end)));
    }
  }

  .horizontal #indicator {
    top: 0;
    height: 100%;
  }

  .vertical #indicator {
    top: calc(100% - var(--end));
    bottom: var(--start);
    left: 0;
    width: 100%;
  }

  /* Thumbs */
  #thumb,
  #thumb-min,
  #thumb-max {
    z-index: 3;
    position: absolute;
    width: var(--thumb-width);
    height: var(--thumb-height);
    border: solid 0.125em var(--wa-color-surface-default);
    border-radius: 50%;
    background-color: var(--wa-form-control-activated-color);
    cursor: pointer;
  }

  .disabled #thumb,
  .disabled #thumb-min,
  .disabled #thumb-max {
    cursor: inherit;
  }

  .horizontal #thumb,
  .horizontal #thumb-min,
  .horizontal #thumb-max {
    top: calc(50% - var(--thumb-height) / 2);

    &:dir(ltr) {
      right: auto;
      left: calc(var(--position) - var(--thumb-width) / 2);
    }

    &:dir(rtl) {
      right: calc(var(--position) - var(--thumb-width) / 2);
      left: auto;
    }
  }

  .vertical #thumb,
  .vertical #thumb-min,
  .vertical #thumb-max {
    bottom: calc(var(--position) - var(--thumb-height) / 2);
    left: calc(50% - var(--thumb-width) / 2);
  }

  /* Range-specific thumb styles */
  :host([range]) {
    #thumb-min:focus-visible,
    #thumb-max:focus-visible {
      z-index: 4; /* Ensure focused thumb appears on top */
      outline: var(--wa-focus-ring);
      /* intentionally no offset due to border */
    }
  }

  /* Markers */
  #markers {
    pointer-events: none;
  }

  .marker {
    z-index: 2;
    position: absolute;
    width: var(--marker-width);
    height: var(--marker-height);
    border-radius: 50%;
    background-color: var(--wa-color-surface-default);
  }

  .marker:first-of-type,
  .marker:last-of-type {
    display: none;
  }

  .horizontal .marker {
    top: calc(50% - var(--marker-height) / 2);
    left: calc(var(--position) - var(--marker-width) / 2);
  }

  .vertical .marker {
    top: calc(var(--position) - var(--marker-height) / 2);
    left: calc(50% - var(--marker-width) / 2);
  }

  /* Marker labels */
  #references {
    position: relative;

    slot {
      display: flex;
      justify-content: space-between;
      height: 100%;
    }

    ::slotted(*) {
      color: var(--wa-color-text-quiet);
      font-size: 0.875em;
      line-height: 1;
    }
  }

  .horizontal {
    #references {
      margin-block-start: 0.5em;
    }
  }

  .vertical {
    display: flex;
    margin-inline: auto;

    #track {
      order: 1;
    }

    #references {
      order: 2;
      width: min-content;
      margin-inline-start: 0.75em;

      slot {
        flex-direction: column;
      }
    }
  }

  .vertical #references slot {
    flex-direction: column;
  }
`;
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function tt(o, e) {
  const a = o.metaKey || o.ctrlKey || o.shiftKey || o.altKey;
  o.key === "Enter" && !a && setTimeout(() => {
    !o.defaultPrevented && !o.isComposing && lt(e);
  });
}
function lt(o) {
  let e = null;
  if ("form" in o && (e = o.form), !e && "getForm" in o && (e = o.getForm()), !e)
    return;
  const a = [...e.elements];
  if (a.length === 1) {
    e.requestSubmit(null);
    return;
  }
  const r = a.find((t) => t.type === "submit" && !t.matches(":disabled"));
  r && (["input", "button"].includes(r.localName) ? e.requestSubmit(r) : r.click());
}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Oe = typeof window < "u" && "ontouchstart" in window, se = class {
  constructor(o, e) {
    this.isActive = !1, this.isDragging = !1, this.handleDragStart = (a) => {
      const r = "touches" in a ? a.touches[0].clientX : a.clientX, t = "touches" in a ? a.touches[0].clientY : a.clientY;
      this.isDragging || // Prevent right-clicks from triggering drags
      !Oe && a.buttons > 1 || (this.isDragging = !0, document.addEventListener("pointerup", this.handleDragStop), document.addEventListener("pointermove", this.handleDragMove), document.addEventListener("pointercancel", this.handleDragStop), document.addEventListener("touchend", this.handleDragStop), document.addEventListener("touchmove", this.handleDragMove), document.addEventListener("touchcancel", this.handleDragStop), this.options.start(r, t));
    }, this.handleDragStop = (a) => {
      const r = "changedTouches" in a ? a.changedTouches[0].clientX : a.clientX, t = "changedTouches" in a ? a.changedTouches[0].clientY : a.clientY;
      this.isDragging = !1, document.removeEventListener("pointerup", this.handleDragStop), document.removeEventListener("pointermove", this.handleDragMove), document.removeEventListener("pointercancel", this.handleDragStop), document.removeEventListener("touchend", this.handleDragStop), document.removeEventListener("touchmove", this.handleDragMove), document.removeEventListener("touchcancel", this.handleDragStop), this.options.stop(r, t);
    }, this.handleDragMove = (a) => {
      var l;
      const r = "touches" in a ? a.touches[0].clientX : a.clientX, t = "touches" in a ? a.touches[0].clientY : a.clientY;
      (l = window.getSelection()) == null || l.removeAllRanges(), this.options.move(r, t);
    }, this.element = o, this.options = {
      start: () => {
      },
      stop: () => {
      },
      move: () => {
      },
      ...e
    }, this.start();
  }
  /** Start listening to drags. */
  start() {
    this.isActive || (this.element.addEventListener("pointerdown", this.handleDragStart), Oe && this.element.addEventListener("touchstart", this.handleDragStart), this.isActive = !0);
  }
  /** Stop listening to drags. */
  stop() {
    document.removeEventListener("pointerup", this.handleDragStop), document.removeEventListener("pointermove", this.handleDragMove), document.removeEventListener("pointercancel", this.handleDragStop), document.removeEventListener("touchend", this.handleDragStop), document.removeEventListener("touchmove", this.handleDragMove), document.removeEventListener("touchcancel", this.handleDragStop), this.element.removeEventListener("pointerdown", this.handleDragStart), Oe && this.element.removeEventListener("touchstart", this.handleDragStart), this.isActive = !1, this.isDragging = !1;
  }
  /** Starts or stops the drag listeners. */
  toggle(o) {
    (o !== void 0 ? o : !this.isActive) ? this.start() : this.stop();
  }
};
let nt = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict", it = (o = 21) => {
  let e = "", a = crypto.getRandomValues(new Uint8Array(o |= 0));
  for (; o--; )
    e += nt[a[o] & 63];
  return e;
};
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function F(o, e, a) {
  const r = (t) => Object.is(t, -0) ? 0 : t;
  return o < e ? r(e) : o > a ? r(a) : r(o);
}
function Xa(o = "") {
  return `${o}${it()}`;
}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var oa = D`
  :host {
    display: flex;
    flex-direction: column;
  }

  /* Treat wrapped labels, inputs, and hints as direct children of the host element */
  [part~='form-control'] {
    display: contents;
  }

  /* Label */
  :is([part~='form-control-label'], [part~='label']):has(*:not(:empty)),
  :is([part~='form-control-label'], [part~='label']).has-label {
    display: inline-flex;
    color: var(--wa-form-control-label-color);
    font-weight: var(--wa-form-control-label-font-weight);
    line-height: var(--wa-form-control-label-line-height);
    margin-block-end: 0.5em;
  }

  :host([required]) :is([part~='form-control-label'], [part~='label'])::after {
    content: var(--wa-form-control-required-content);
    margin-inline-start: var(--wa-form-control-required-content-offset);
    color: var(--wa-form-control-required-content-color);
  }

  /* Help text */
  [part~='hint'] {
    display: block;
    color: var(--wa-form-control-hint-color);
    font-weight: var(--wa-form-control-hint-font-weight);
    line-height: var(--wa-form-control-hint-line-height);
    margin-block-start: 0.5em;
    font-size: var(--wa-font-size-smaller);

    &:not(.has-slotted, .has-hint) {
      display: none;
    }
  }
`;
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Za = class extends Event {
  constructor() {
    super("wa-invalid", { bubbles: !0, cancelable: !1, composed: !0 });
  }
};
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var st = Object.defineProperty, ct = Object.getOwnPropertyDescriptor, Ga = (o) => {
  throw TypeError(o);
}, s = (o, e, a, r) => {
  for (var t = r > 1 ? void 0 : r ? ct(e, a) : e, l = o.length - 1, n; l >= 0; l--)
    (n = o[l]) && (t = (r ? n(e, a, t) : n(t)) || t);
  return r && t && st(e, a, t), t;
}, Qa = (o, e, a) => e.has(o) || Ga("Cannot " + a), wt = (o, e, a) => (Qa(o, e, "read from private field"), e.get(o)), dt = (o, e, a) => e.has(o) ? Ga("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(o) : e.set(o, a), ut = (o, e, a, r) => (Qa(o, e, "write to private field"), e.set(o, a), a);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const X = (o) => (e, a) => {
  a !== void 0 ? a.addInitializer(() => {
    customElements.define(o, e);
  }) : customElements.define(o, e);
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ht = { attribute: !0, type: String, converter: ve, reflect: !1, hasChanged: Qe }, pt = (o = ht, e, a) => {
  const { kind: r, metadata: t } = a;
  let l = globalThis.litPropertyMetadata.get(t);
  if (l === void 0 && globalThis.litPropertyMetadata.set(t, l = /* @__PURE__ */ new Map()), r === "setter" && ((o = Object.create(o)).wrapped = !0), l.set(a.name, o), r === "accessor") {
    const { name: n } = a;
    return { set(i) {
      const c = e.get.call(this);
      e.set.call(this, i), this.requestUpdate(n, c, o, !0, i);
    }, init(i) {
      return i !== void 0 && this.C(n, void 0, o, i), i;
    } };
  }
  if (r === "setter") {
    const { name: n } = a;
    return function(i) {
      const c = this[n];
      e.call(this, i), this.requestUpdate(n, c, o, !0, i);
    };
  }
  throw Error("Unsupported decorator location: " + r);
};
function u(o) {
  return (e, a) => typeof a == "object" ? pt(o, e, a) : ((r, t, l) => {
    const n = t.hasOwnProperty(l);
    return t.constructor.createProperty(l, r), n ? Object.getOwnPropertyDescriptor(t, l) : void 0;
  })(o, e, a);
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function eo(o) {
  return u({ ...o, state: !0, attribute: !1 });
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const vt = (o, e, a) => (a.configurable = !0, a.enumerable = !0, Reflect.decorate && typeof e != "object" && Object.defineProperty(o, e, a), a);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function z(o, e) {
  return (a, r, t) => {
    const l = (n) => {
      var i;
      return ((i = n.renderRoot) == null ? void 0 : i.querySelector(o)) ?? null;
    };
    return vt(a, r, { get() {
      return l(this);
    } });
  };
}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var ft = D`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`, he, Z = class extends lo {
  constructor() {
    super(), dt(this, he, !1), this.initialReflectedProperties = /* @__PURE__ */ new Map(), this.didSSR = !!this.shadowRoot, this.customStates = {
      /** Adds or removes the specified custom state. */
      set: (e, a) => {
        var r;
        if ((r = this.internals) != null && r.states)
          try {
            a ? this.internals.states.add(e) : this.internals.states.delete(e);
          } catch (t) {
            if (String(t).includes("must start with '--'"))
              console.error("Your browser implements an outdated version of CustomStateSet. Consider using a polyfill");
            else
              throw t;
          }
      },
      /** Determines whether or not the element currently has the specified state. */
      has: (e) => {
        var a;
        if (!((a = this.internals) != null && a.states)) return !1;
        try {
          return this.internals.states.has(e);
        } catch {
          return !1;
        }
      }
    };
    try {
      this.internals = this.attachInternals();
    } catch {
      console.error("Element internals are not supported in your browser. Consider using a polyfill");
    }
    this.customStates.set("wa-defined", !0);
    let o = this.constructor;
    for (let [e, a] of o.elementProperties)
      a.default === "inherit" && a.initial !== void 0 && typeof e == "string" && this.customStates.set(`initial-${e}-${a.initial}`, !0);
  }
  /** Prepends host styles to the component's styles. */
  static get styles() {
    const o = Array.isArray(this.css) ? this.css : this.css ? [this.css] : [];
    return [ft, ...o];
  }
  connectedCallback() {
    var o;
    super.connectedCallback(), (o = this.shadowRoot) == null || o.prepend(
      document.createComment(
        ` Web Awesome: https://webawesome.com/docs/components/${this.localName.replace("wa-", "")} `
      )
    );
  }
  attributeChangedCallback(o, e, a) {
    wt(this, he) || (this.constructor.elementProperties.forEach(
      (r, t) => {
        r.reflect && this[t] != null && this.initialReflectedProperties.set(t, this[t]);
      }
    ), ut(this, he, !0)), super.attributeChangedCallback(o, e, a);
  }
  willUpdate(o) {
    super.willUpdate(o), this.initialReflectedProperties.forEach((e, a) => {
      o.has(a) && this[a] == null && (this[a] = e);
    });
  }
  firstUpdated(o) {
    var e;
    super.firstUpdated(o), this.didSSR && ((e = this.shadowRoot) == null || e.querySelectorAll("slot").forEach((a) => {
      a.dispatchEvent(new Event("slotchange", { bubbles: !0, composed: !1, cancelable: !1 }));
    }));
  }
  update(o) {
    try {
      super.update(o);
    } catch (e) {
      if (this.didSSR && !this.hasUpdated) {
        const a = new Event("lit-hydration-error", { bubbles: !0, composed: !0, cancelable: !1 });
        a.error = e, this.dispatchEvent(a);
      }
      throw e;
    }
  }
  /**
   * @internal Given a native event, this function cancels it and dispatches it again from the host element using the desired
   * event options.
   */
  relayNativeEvent(o, e) {
    o.stopImmediatePropagation(), this.dispatchEvent(
      new o.constructor(o.type, {
        ...o,
        ...e
      })
    );
  }
};
he = /* @__PURE__ */ new WeakMap();
s([
  u()
], Z.prototype, "dir", 2);
s([
  u()
], Z.prototype, "lang", 2);
s([
  u({ type: Boolean, reflect: !0, attribute: "did-ssr" })
], Z.prototype, "didSSR", 2);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var gt = () => ({
  observedAttributes: ["custom-error"],
  checkValidity(o) {
    const e = {
      message: "",
      isValid: !0,
      invalidKeys: []
    };
    return o.customError && (e.message = o.customError, e.isValid = !1, e.invalidKeys = ["customError"]), e;
  }
}), U = class extends Z {
  constructor() {
    super(), this.name = null, this.disabled = !1, this.required = !1, this.assumeInteractionOn = ["input"], this.validators = [], this.valueHasChanged = !1, this.hasInteracted = !1, this.customError = null, this.emittedEvents = [], this.emitInvalid = (o) => {
      o.target === this && (this.hasInteracted = !0, this.dispatchEvent(new Za()));
    }, this.handleInteraction = (o) => {
      var a;
      const e = this.emittedEvents;
      e.includes(o.type) || e.push(o.type), e.length === ((a = this.assumeInteractionOn) == null ? void 0 : a.length) && (this.hasInteracted = !0);
    }, this.addEventListener("invalid", this.emitInvalid);
  }
  /**
   * Validators are static because they have `observedAttributes`, essentially attributes to "watch"
   * for changes. Whenever these attributes change, we want to be notified and update the validator.
   */
  static get validators() {
    return [gt()];
  }
  // Append all Validator "observedAttributes" into the "observedAttributes" so they can run.
  static get observedAttributes() {
    const o = new Set(super.observedAttributes || []);
    for (const e of this.validators)
      if (e.observedAttributes)
        for (const a of e.observedAttributes)
          o.add(a);
    return [...o];
  }
  connectedCallback() {
    super.connectedCallback(), this.updateValidity(), this.assumeInteractionOn.forEach((o) => {
      this.addEventListener(o, this.handleInteraction);
    });
  }
  firstUpdated(...o) {
    super.firstUpdated(...o), this.updateValidity();
  }
  willUpdate(o) {
    if (o.has("customError") && (this.customError || (this.customError = null), this.setCustomValidity(this.customError || "")), o.has("value") || o.has("disabled") || o.has("defaultValue")) {
      const e = this.value;
      if (Array.isArray(e)) {
        if (this.name) {
          const a = new FormData();
          for (const r of e)
            a.append(this.name, r);
          this.setValue(a, a);
        }
      } else
        this.setValue(e, e);
    }
    o.has("disabled") && (this.customStates.set("disabled", this.disabled), (this.hasAttribute("disabled") || !this.matches(":disabled")) && this.toggleAttribute("disabled", this.disabled)), super.willUpdate(o), this.updateValidity();
  }
  get labels() {
    return this.internals.labels;
  }
  getForm() {
    return this.internals.form;
  }
  /**
   * By default, form controls are associated with the nearest containing `<form>` element. This attribute allows you
   * to place the form control outside of a form and associate it with the form that has this `id`. The form must be in
   * the same document or shadow root for this to work.
   */
  set form(o) {
    o ? this.setAttribute("form", o) : this.removeAttribute("form");
  }
  get form() {
    return this.internals.form;
  }
  get validity() {
    return this.internals.validity;
  }
  // Not sure if this supports `novalidate`. Will need to test.
  get willValidate() {
    return this.internals.willValidate;
  }
  get validationMessage() {
    return this.internals.validationMessage;
  }
  checkValidity() {
    return this.updateValidity(), this.internals.checkValidity();
  }
  reportValidity() {
    return this.updateValidity(), this.hasInteracted = !0, this.internals.reportValidity();
  }
  /**
   * Override this to change where constraint validation popups are anchored.
   */
  get validationTarget() {
    return this.input || void 0;
  }
  setValidity(...o) {
    const e = o[0], a = o[1];
    let r = o[2];
    r || (r = this.validationTarget), this.internals.setValidity(e, a, r || void 0), this.requestUpdate("validity"), this.setCustomStates();
  }
  setCustomStates() {
    const o = !!this.required, e = this.internals.validity.valid, a = this.hasInteracted;
    this.customStates.set("required", o), this.customStates.set("optional", !o), this.customStates.set("invalid", !e), this.customStates.set("valid", e), this.customStates.set("user-invalid", !e && a), this.customStates.set("user-valid", e && a);
  }
  /**
   * Do not use this when creating a "Validator". This is intended for end users of components.
   * We track manually defined custom errors so we don't clear them on accident in our validators.
   *
   */
  setCustomValidity(o) {
    if (!o) {
      this.customError = null, this.setValidity({});
      return;
    }
    this.customError = o, this.setValidity({ customError: !0 }, o, this.validationTarget);
  }
  formResetCallback() {
    this.resetValidity(), this.hasInteracted = !1, this.valueHasChanged = !1, this.emittedEvents = [], this.updateValidity();
  }
  formDisabledCallback(o) {
    this.disabled = o, this.updateValidity();
  }
  /**
   * Called when the browser is trying to restore element’s state to state in which case reason is "restore", or when
   * the browser is trying to fulfill autofill on behalf of user in which case reason is "autocomplete". In the case of
   * "restore", state is a string, File, or FormData object previously set as the second argument to setFormValue.
   */
  formStateRestoreCallback(o, e) {
    this.value = o, e === "restore" && this.resetValidity(), this.updateValidity();
  }
  setValue(...o) {
    const [e, a] = o;
    this.internals.setFormValue(e, a);
  }
  get allValidators() {
    const o = this.constructor.validators || [], e = this.validators || [];
    return [...o, ...e];
  }
  /**
   * Reset validity is a way of removing manual custom errors and native validation.
   */
  resetValidity() {
    this.setCustomValidity(""), this.setValidity({});
  }
  updateValidity() {
    if (this.disabled || this.hasAttribute("disabled") || !this.willValidate) {
      this.resetValidity();
      return;
    }
    const o = this.allValidators;
    if (!(o != null && o.length))
      return;
    const e = {
      // Don't trust custom errors from the Browser. Safari breaks the spec.
      customError: !!this.customError
    }, a = this.validationTarget || this.input || void 0;
    let r = "";
    for (const t of o) {
      const { isValid: l, message: n, invalidKeys: i } = t.checkValidity(this);
      l || (r || (r = n), (i == null ? void 0 : i.length) >= 0 && i.forEach((c) => e[c] = !0));
    }
    r || (r = this.validationMessage), this.setValidity(e, r, a);
  }
};
U.formAssociated = !0;
s([
  u({ reflect: !0 })
], U.prototype, "name", 2);
s([
  u({ type: Boolean })
], U.prototype, "disabled", 2);
s([
  u({ state: !0, attribute: !1 })
], U.prototype, "valueHasChanged", 2);
s([
  u({ state: !0, attribute: !1 })
], U.prototype, "hasInteracted", 2);
s([
  u({ attribute: "custom-error", reflect: !0 })
], U.prototype, "customError", 2);
s([
  u({ attribute: !1, state: !0, type: Object })
], U.prototype, "validity", 1);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var te = class {
  constructor(o, ...e) {
    this.slotNames = [], this.handleSlotChange = (a) => {
      const r = a.target;
      (this.slotNames.includes("[default]") && !r.name || r.name && this.slotNames.includes(r.name)) && this.host.requestUpdate();
    }, (this.host = o).addController(this), this.slotNames = e;
  }
  hasDefaultSlot() {
    return this.host.childNodes ? [...this.host.childNodes].some((o) => {
      if (o.nodeType === Node.TEXT_NODE && o.textContent.trim() !== "")
        return !0;
      if (o.nodeType === Node.ELEMENT_NODE) {
        const e = o;
        if (e.tagName.toLowerCase() === "wa-visually-hidden")
          return !1;
        if (!e.hasAttribute("slot"))
          return !0;
      }
      return !1;
    }) : !1;
  }
  hasNamedSlot(o) {
    var e, a;
    return ((a = (e = this.host).querySelector) == null ? void 0 : a.call(e, `:scope > [slot="${o}"]`)) !== null;
  }
  test(o) {
    return o === "[default]" ? this.hasDefaultSlot() : this.hasNamedSlot(o);
  }
  hostConnected() {
    var o, e;
    (e = (o = this.host.shadowRoot) == null ? void 0 : o.addEventListener) == null || e.call(o, "slotchange", this.handleSlotChange);
  }
  hostDisconnected() {
    var o, e;
    (e = (o = this.host.shadowRoot) == null ? void 0 : o.removeEventListener) == null || e.call(o, "slotchange", this.handleSlotChange);
  }
};
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Uo = D`
  :host([size='small']),
  .wa-size-s {
    font-size: var(--wa-font-size-s);
  }

  :host([size='medium']),
  .wa-size-m {
    font-size: var(--wa-font-size-m);
  }

  :host([size='large']),
  .wa-size-l {
    font-size: var(--wa-font-size-l);
  }
`;
const He = /* @__PURE__ */ new Set(), Bo = /* @__PURE__ */ new Map();
let Ao, ea = "ltr", aa = "en";
const Ja = typeof MutationObserver < "u" && typeof document < "u" && typeof document.documentElement < "u";
if (Ja) {
  const o = new MutationObserver(er);
  ea = document.documentElement.dir || "ltr", aa = document.documentElement.lang || navigator.language, o.observe(document.documentElement, {
    attributes: !0,
    attributeFilter: ["dir", "lang"]
  });
}
function or(...o) {
  o.map((e) => {
    const a = e.$code.toLowerCase();
    Bo.has(a) ? Bo.set(a, Object.assign(Object.assign({}, Bo.get(a)), e)) : Bo.set(a, e), Ao || (Ao = e);
  }), er();
}
function er() {
  Ja && (ea = document.documentElement.dir || "ltr", aa = document.documentElement.lang || navigator.language), [...He.keys()].map((o) => {
    typeof o.requestUpdate == "function" && o.requestUpdate();
  });
}
let mt = class {
  constructor(e) {
    this.host = e, this.host.addController(this);
  }
  hostConnected() {
    He.add(this.host);
  }
  hostDisconnected() {
    He.delete(this.host);
  }
  dir() {
    return `${this.host.dir || ea}`.toLowerCase();
  }
  lang() {
    return `${this.host.lang || aa}`.toLowerCase();
  }
  getTranslationData(e) {
    var a, r;
    const t = new Intl.Locale(e.replace(/_/g, "-")), l = t == null ? void 0 : t.language.toLowerCase(), n = (r = (a = t == null ? void 0 : t.region) === null || a === void 0 ? void 0 : a.toLowerCase()) !== null && r !== void 0 ? r : "", i = Bo.get(`${l}-${n}`), c = Bo.get(l);
    return { locale: t, language: l, region: n, primary: i, secondary: c };
  }
  exists(e, a) {
    var r;
    const { primary: t, secondary: l } = this.getTranslationData((r = a.lang) !== null && r !== void 0 ? r : this.lang());
    return a = Object.assign({ includeFallback: !1 }, a), !!(t && t[e] || l && l[e] || a.includeFallback && Ao && Ao[e]);
  }
  term(e, ...a) {
    const { primary: r, secondary: t } = this.getTranslationData(this.lang());
    let l;
    if (r && r[e])
      l = r[e];
    else if (t && t[e])
      l = t[e];
    else if (Ao && Ao[e])
      l = Ao[e];
    else
      return console.error(`No translation found for: ${String(e)}`), String(e);
    return typeof l == "function" ? l(...a) : l;
  }
  date(e, a) {
    return e = new Date(e), new Intl.DateTimeFormat(this.lang(), a).format(e);
  }
  number(e, a) {
    return e = Number(e), isNaN(e) ? "" : new Intl.NumberFormat(this.lang(), a).format(e);
  }
  relativeTime(e, a, r) {
    return new Intl.RelativeTimeFormat(this.lang(), r).format(e, a);
  }
};
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var ar = {
  $code: "en",
  $name: "English",
  $dir: "ltr",
  carousel: "Carousel",
  clearEntry: "Clear entry",
  close: "Close",
  createOption: (o) => `Create "${o}"`,
  copied: "Copied",
  copy: "Copy",
  currentValue: "Current value",
  dropFileHere: "Drop file here or click to browse",
  decrement: "Decrement",
  dropFilesHere: "Drop files here or click to browse",
  error: "Error",
  goToSlide: (o, e) => `Go to slide ${o} of ${e}`,
  hidePassword: "Hide password",
  increment: "Increment",
  loading: "Loading",
  nextSlide: "Next slide",
  numOptionsSelected: (o) => o === 0 ? "No options selected" : o === 1 ? "1 option selected" : `${o} options selected`,
  pauseAnimation: "Pause animation",
  playAnimation: "Play animation",
  previousSlide: "Previous slide",
  progress: "Progress",
  remove: "Remove",
  resize: "Resize",
  scrollableRegion: "Scrollable region",
  scrollToEnd: "Scroll to end",
  scrollToStart: "Scroll to start",
  selectAColorFromTheScreen: "Select a color from the screen",
  showPassword: "Show password",
  slideNum: (o) => `Slide ${o}`,
  toggleColorFormat: "Toggle color format",
  zoomIn: "Zoom in",
  zoomOut: "Zoom out"
};
or(ar);
var bt = ar;
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var $o = class extends mt {
};
or(bt);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const to = { ATTRIBUTE: 1, CHILD: 2, PROPERTY: 3, BOOLEAN_ATTRIBUTE: 4 }, le = (o) => (...e) => ({ _$litDirective$: o, values: e });
let ne = class {
  constructor(e) {
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AT(e, a, r) {
    this._$Ct = e, this._$AM = a, this._$Ci = r;
  }
  _$AS(e, a) {
    return this.update(e, a);
  }
  update(e, a) {
    return this.render(...a);
  }
};
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Y = le(class extends ne {
  constructor(o) {
    var e;
    if (super(o), o.type !== to.ATTRIBUTE || o.name !== "class" || ((e = o.strings) == null ? void 0 : e.length) > 2) throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.");
  }
  render(o) {
    return " " + Object.keys(o).filter((e) => o[e]).join(" ") + " ";
  }
  update(o, [e]) {
    var r, t;
    if (this.st === void 0) {
      this.st = /* @__PURE__ */ new Set(), o.strings !== void 0 && (this.nt = new Set(o.strings.join(" ").split(/\s/).filter((l) => l !== "")));
      for (const l in e) e[l] && !((r = this.nt) != null && r.has(l)) && this.st.add(l);
      return this.render(e);
    }
    const a = o.element.classList;
    for (const l of this.st) l in e || (a.remove(l), this.st.delete(l));
    for (const l in e) {
      const n = !!e[l];
      n === this.st.has(l) || (t = this.nt) != null && t.has(l) || (n ? (a.add(l), this.st.add(l)) : (a.remove(l), this.st.delete(l)));
    }
    return I;
  }
});
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const rr = "important", yt = " !" + rr, Do = le(class extends ne {
  constructor(o) {
    var e;
    if (super(o), o.type !== to.ATTRIBUTE || o.name !== "style" || ((e = o.strings) == null ? void 0 : e.length) > 2) throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.");
  }
  render(o) {
    return Object.keys(o).reduce((e, a) => {
      const r = o[a];
      return r == null ? e : e + `${a = a.includes("-") ? a : a.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g, "-$&").toLowerCase()}:${r};`;
    }, "");
  }
  update(o, [e]) {
    const { style: a } = o.element;
    if (this.ft === void 0) return this.ft = new Set(Object.keys(e)), this.render(e);
    for (const r of this.ft) e[r] == null && (this.ft.delete(r), r.includes("-") ? a.removeProperty(r) : a[r] = null);
    for (const r in e) {
      const t = e[r];
      if (t != null) {
        this.ft.add(r);
        const l = typeof t == "string" && t.endsWith(yt);
        r.includes("-") || l ? a.setProperty(r, l ? t.slice(0, -11) : t, l ? rr : "") : a[r] = t;
      }
    }
    return I;
  }
});
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var xt = () => ({
  observedAttributes: ["min", "max", "step"],
  checkValidity(o) {
    const e = {
      message: "",
      isValid: !0,
      invalidKeys: []
    }, a = (r, t, l, n) => {
      const i = document.createElement("input");
      return i.type = "range", i.min = String(t), i.max = String(l), i.step = String(n), i.value = String(r), i.checkValidity(), i.validationMessage;
    };
    if (o.isRange) {
      const r = o.minValue, t = o.maxValue;
      if (r < o.min)
        return e.isValid = !1, e.invalidKeys.push("rangeUnderflow"), e.message = a(r, o.min, o.max, o.step) || `Value must be greater than or equal to ${o.min}.`, e;
      if (t > o.max)
        return e.isValid = !1, e.invalidKeys.push("rangeOverflow"), e.message = a(t, o.min, o.max, o.step) || `Value must be less than or equal to ${o.max}.`, e;
      if (o.step && o.step !== 1) {
        const l = (r - o.min) % o.step !== 0, n = (t - o.min) % o.step !== 0;
        if (l || n) {
          e.isValid = !1, e.invalidKeys.push("stepMismatch");
          const i = l ? r : t;
          return e.message = a(i, o.min, o.max, o.step) || `Value must be a multiple of ${o.step}.`, e;
        }
      }
    } else {
      const r = o.value;
      if (r < o.min)
        return e.isValid = !1, e.invalidKeys.push("rangeUnderflow"), e.message = a(r, o.min, o.max, o.step) || `Value must be greater than or equal to ${o.min}.`, e;
      if (r > o.max)
        return e.isValid = !1, e.invalidKeys.push("rangeOverflow"), e.message = a(r, o.min, o.max, o.step) || `Value must be less than or equal to ${o.max}.`, e;
      if (o.step && o.step !== 1 && (r - o.min) % o.step !== 0)
        return e.isValid = !1, e.invalidKeys.push("stepMismatch"), e.message = a(r, o.min, o.max, o.step) || `Value must be a multiple of ${o.step}.`, e;
    }
    return e;
  }
}), k = class extends U {
  constructor() {
    super(...arguments), this.draggableThumbMin = null, this.draggableThumbMax = null, this.hasSlotController = new te(this, "hint", "label"), this.localize = new $o(this), this.activeThumb = null, this.lastTrackPosition = null, this.label = "", this.hint = "", this.minValue = 0, this.maxValue = 50, this.defaultValue = this.getAttribute("value") == null ? this.minValue : Number(this.getAttribute("value")), this._value = null, this.range = !1, this.disabled = !1, this.readonly = !1, this.orientation = "horizontal", this.size = "medium", this.min = 0, this.max = 100, this.step = 1, this.tooltipDistance = 8, this.tooltipPlacement = "top", this.withMarkers = !1, this.withTooltip = !1;
  }
  static get validators() {
    return [...super.validators, xt()];
  }
  // Track last position for direction detection
  get focusableAnchor() {
    return this.isRange ? this.thumbMin || this.slider : this.slider;
  }
  /** Override validation target to point to the focusable element */
  get validationTarget() {
    return this.focusableAnchor;
  }
  /** The current value of the slider, submitted as a name/value pair with form data. */
  get value() {
    if (this.valueHasChanged) {
      const e = this._value ?? this.minValue ?? 0;
      return F(e, this.min, this.max);
    }
    const o = this._value ?? this.defaultValue;
    return F(o, this.min, this.max);
  }
  set value(o) {
    o = Number(o) ?? this.minValue, this._value !== o && (this.valueHasChanged = !0, this._value = o);
  }
  /** Get if this is a range slider */
  get isRange() {
    return this.range;
  }
  firstUpdated() {
    this.isRange ? (this.draggableThumbMin = new se(this.thumbMin, {
      start: () => {
        this.activeThumb = "min", this.trackBoundingClientRect = this.track.getBoundingClientRect(), this.valueWhenDraggingStarted = this.minValue, this.customStates.set("dragging", !0), this.showRangeTooltips();
      },
      move: (o, e) => {
        this.setThumbValueFromCoordinates(o, e, "min");
      },
      stop: () => {
        this.minValue !== this.valueWhenDraggingStarted && (this.updateComplete.then(() => {
          this.dispatchEvent(new Event("change", { bubbles: !0, composed: !0 }));
        }), this.hasInteracted = !0), this.hideRangeTooltips(), this.customStates.set("dragging", !1), this.valueWhenDraggingStarted = void 0, this.activeThumb = null;
      }
    }), this.draggableThumbMax = new se(this.thumbMax, {
      start: () => {
        this.activeThumb = "max", this.trackBoundingClientRect = this.track.getBoundingClientRect(), this.valueWhenDraggingStarted = this.maxValue, this.customStates.set("dragging", !0), this.showRangeTooltips();
      },
      move: (o, e) => {
        this.setThumbValueFromCoordinates(o, e, "max");
      },
      stop: () => {
        this.maxValue !== this.valueWhenDraggingStarted && (this.updateComplete.then(() => {
          this.dispatchEvent(new Event("change", { bubbles: !0, composed: !0 }));
        }), this.hasInteracted = !0), this.hideRangeTooltips(), this.customStates.set("dragging", !1), this.valueWhenDraggingStarted = void 0, this.activeThumb = null;
      }
    }), this.draggableTrack = new se(this.track, {
      start: (o, e) => {
        if (this.trackBoundingClientRect = this.track.getBoundingClientRect(), this.activeThumb)
          this.valueWhenDraggingStarted = this.activeThumb === "min" ? this.minValue : this.maxValue;
        else {
          const a = this.getValueFromCoordinates(o, e), r = Math.abs(a - this.minValue), t = Math.abs(a - this.maxValue);
          if (r === t)
            if (a > this.maxValue)
              this.activeThumb = "max";
            else if (a < this.minValue)
              this.activeThumb = "min";
            else {
              const l = this.localize.dir() === "rtl", n = this.orientation === "vertical", i = n ? e : o, c = this.lastTrackPosition || i;
              this.lastTrackPosition = i;
              const w = i > c !== l && !n || i < c && n;
              this.activeThumb = w ? "max" : "min";
            }
          else
            this.activeThumb = r <= t ? "min" : "max";
          this.valueWhenDraggingStarted = this.activeThumb === "min" ? this.minValue : this.maxValue;
        }
        this.customStates.set("dragging", !0), this.setThumbValueFromCoordinates(o, e, this.activeThumb), this.showRangeTooltips();
      },
      move: (o, e) => {
        this.activeThumb && this.setThumbValueFromCoordinates(o, e, this.activeThumb);
      },
      stop: () => {
        this.activeThumb && (this.activeThumb === "min" ? this.minValue : this.maxValue) !== this.valueWhenDraggingStarted && (this.updateComplete.then(() => {
          this.dispatchEvent(new Event("change", { bubbles: !0, composed: !0 }));
        }), this.hasInteracted = !0), this.hideRangeTooltips(), this.customStates.set("dragging", !1), this.valueWhenDraggingStarted = void 0, this.activeThumb = null;
      }
    })) : this.draggableTrack = new se(this.slider, {
      start: (o, e) => {
        this.trackBoundingClientRect = this.track.getBoundingClientRect(), this.valueWhenDraggingStarted = this.value, this.customStates.set("dragging", !0), this.setValueFromCoordinates(o, e), this.showTooltip();
      },
      move: (o, e) => {
        this.setValueFromCoordinates(o, e);
      },
      stop: () => {
        this.value !== this.valueWhenDraggingStarted && (this.updateComplete.then(() => {
          this.dispatchEvent(new Event("change", { bubbles: !0, composed: !0 }));
        }), this.hasInteracted = !0), this.hideTooltip(), this.customStates.set("dragging", !1), this.valueWhenDraggingStarted = void 0;
      }
    });
  }
  updated(o) {
    if (o.has("range") && this.requestUpdate(), this.isRange ? (o.has("minValue") || o.has("maxValue")) && (this.minValue = F(this.minValue, this.min, this.maxValue), this.maxValue = F(this.maxValue, this.minValue, this.max), this.updateFormValue()) : o.has("value") && this.setValue(String(this.value)), (o.has("min") || o.has("max")) && this.isRange && (this.minValue = F(this.minValue, this.min, this.max), this.maxValue = F(this.maxValue, this.min, this.max)), o.has("disabled") && this.customStates.set("disabled", this.disabled), o.has("disabled") || o.has("readonly")) {
      const e = !(this.disabled || this.readonly);
      this.isRange && (this.draggableThumbMin && this.draggableThumbMin.toggle(e), this.draggableThumbMax && this.draggableThumbMax.toggle(e)), this.draggableTrack && this.draggableTrack.toggle(e);
    }
    super.updated(o);
  }
  /** @internal Called when a containing fieldset is disabled. */
  formDisabledCallback(o) {
    this.disabled = o;
  }
  /** @internal Called when the form is reset. */
  formResetCallback() {
    this.isRange ? (this.minValue = parseFloat(this.getAttribute("min-value") ?? String(this.min)), this.maxValue = parseFloat(this.getAttribute("max-value") ?? String(this.max))) : (this._value = null, this.defaultValue = this.defaultValue ?? parseFloat(this.getAttribute("value") ?? String(this.min))), this.valueHasChanged = !1, this.hasInteracted = !1, super.formResetCallback();
  }
  /** Clamps a number to min/max while ensuring it's a valid step interval. */
  clampAndRoundToStep(o) {
    const e = (String(this.step).split(".")[1] || "").replace(/0+$/g, "").length, a = Number(this.step), r = Number(this.min), t = Number(this.max);
    return o = Math.round(o / a) * a, o = F(o, r, t), parseFloat(o.toFixed(e));
  }
  /** Given a value, returns its percentage within a range of min/max. */
  getPercentageFromValue(o) {
    return (o - this.min) / (this.max - this.min) * 100;
  }
  /** Converts coordinates to slider value */
  getValueFromCoordinates(o, e) {
    const a = this.localize.dir() === "rtl", r = this.orientation === "vertical", { top: t, right: l, bottom: n, left: i, height: c, width: w } = this.trackBoundingClientRect, d = r ? e : o, h = r ? { start: t, end: n, size: c } : { start: i, end: l, size: w }, v = (r || a ? h.end - d : d - h.start) / h.size;
    return this.clampAndRoundToStep(this.min + (this.max - this.min) * v);
  }
  handleBlur() {
    this.isRange ? requestAnimationFrame(() => {
      var a;
      const o = (a = this.shadowRoot) == null ? void 0 : a.activeElement;
      o === this.thumbMin || o === this.thumbMax || this.hideRangeTooltips();
    }) : this.hideTooltip(), this.customStates.set("focused", !1), this.dispatchEvent(new FocusEvent("blur", { bubbles: !0, composed: !0 }));
  }
  handleFocus(o) {
    const e = o.target;
    this.isRange ? (e === this.thumbMin ? this.activeThumb = "min" : e === this.thumbMax && (this.activeThumb = "max"), this.showRangeTooltips()) : this.showTooltip(), this.customStates.set("focused", !0), this.dispatchEvent(new FocusEvent("focus", { bubbles: !0, composed: !0 }));
  }
  handleKeyDown(o) {
    const e = this.localize.dir() === "rtl", a = o.target;
    if (this.disabled || this.readonly || this.isRange && (a === this.thumbMin ? this.activeThumb = "min" : a === this.thumbMax && (this.activeThumb = "max"), !this.activeThumb))
      return;
    const r = this.isRange ? this.activeThumb === "min" ? this.minValue : this.maxValue : this.value;
    let t = r;
    switch (o.key) {
      case "ArrowUp":
      case (e ? "ArrowLeft" : "ArrowRight"):
        o.preventDefault(), t = this.clampAndRoundToStep(r + this.step);
        break;
      case "ArrowDown":
      case (e ? "ArrowRight" : "ArrowLeft"):
        o.preventDefault(), t = this.clampAndRoundToStep(r - this.step);
        break;
      case "Home":
        o.preventDefault(), t = this.isRange && this.activeThumb === "min" ? this.min : this.isRange ? this.minValue : this.min;
        break;
      case "End":
        o.preventDefault(), t = this.isRange && this.activeThumb === "max" ? this.max : this.isRange ? this.maxValue : this.max;
        break;
      case "PageUp":
        o.preventDefault();
        const l = Math.max(
          r + (this.max - this.min) / 10,
          r + this.step
          // make sure we at least move up to the next step
        );
        t = this.clampAndRoundToStep(l);
        break;
      case "PageDown":
        o.preventDefault();
        const n = Math.min(
          r - (this.max - this.min) / 10,
          r - this.step
          // make sure we at least move down to the previous step
        );
        t = this.clampAndRoundToStep(n);
        break;
      case "Enter":
        tt(o, this);
        return;
    }
    t !== r && (this.isRange ? (this.activeThumb === "min" ? t > this.maxValue ? (this.maxValue = t, this.minValue = t) : this.minValue = Math.max(this.min, t) : t < this.minValue ? (this.minValue = t, this.maxValue = t) : this.maxValue = Math.min(this.max, t), this.updateFormValue()) : this.value = F(t, this.min, this.max), this.updateComplete.then(() => {
      this.dispatchEvent(new InputEvent("input", { bubbles: !0, composed: !0 })), this.dispatchEvent(new Event("change", { bubbles: !0, composed: !0 }));
    }), this.hasInteracted = !0);
  }
  handleLabelPointerDown(o) {
    var e;
    o.preventDefault(), this.disabled || (this.isRange ? (e = this.thumbMin) == null || e.focus() : this.slider.focus());
  }
  setValueFromCoordinates(o, e) {
    const a = this.value;
    this.value = this.getValueFromCoordinates(o, e), this.value !== a && this.updateComplete.then(() => {
      this.dispatchEvent(new InputEvent("input", { bubbles: !0, composed: !0 }));
    });
  }
  setThumbValueFromCoordinates(o, e, a) {
    const r = this.getValueFromCoordinates(o, e), t = a === "min" ? this.minValue : this.maxValue;
    a === "min" ? r > this.maxValue ? (this.maxValue = r, this.minValue = r) : this.minValue = Math.max(this.min, r) : r < this.minValue ? (this.minValue = r, this.maxValue = r) : this.maxValue = Math.min(this.max, r), t !== (a === "min" ? this.minValue : this.maxValue) && (this.updateFormValue(), this.updateComplete.then(() => {
      this.dispatchEvent(new InputEvent("input", { bubbles: !0, composed: !0 }));
    }));
  }
  showTooltip() {
    this.withTooltip && this.tooltip && (this.tooltip.open = !0);
  }
  hideTooltip() {
    this.withTooltip && this.tooltip && (this.tooltip.open = !1);
  }
  showRangeTooltips() {
    var a, r;
    if (!this.withTooltip) return;
    const o = (a = this.shadowRoot) == null ? void 0 : a.getElementById("tooltip-thumb-min"), e = (r = this.shadowRoot) == null ? void 0 : r.getElementById("tooltip-thumb-max");
    this.activeThumb === "min" ? (o && (o.open = !0), e && (e.open = !1)) : this.activeThumb === "max" && (e && (e.open = !0), o && (o.open = !1));
  }
  hideRangeTooltips() {
    var a, r;
    if (!this.withTooltip) return;
    const o = (a = this.shadowRoot) == null ? void 0 : a.getElementById("tooltip-thumb-min"), e = (r = this.shadowRoot) == null ? void 0 : r.getElementById("tooltip-thumb-max");
    o && (o.open = !1), e && (e.open = !1);
  }
  /** Updates the form value submission for range sliders */
  updateFormValue() {
    if (this.isRange) {
      const o = new FormData();
      o.append(this.name || "", String(this.minValue)), o.append(this.name || "", String(this.maxValue)), this.setValue(o);
    }
  }
  /** Sets focus to the slider. */
  focus() {
    var o;
    this.isRange ? (o = this.thumbMin) == null || o.focus() : this.slider.focus();
  }
  /** Removes focus from the slider. */
  blur() {
    this.isRange ? document.activeElement === this.thumbMin ? this.thumbMin.blur() : document.activeElement === this.thumbMax && this.thumbMax.blur() : this.slider.blur();
  }
  /**
   * Decreases the slider's value by `step`. This is a programmatic change, so `input` and `change` events will not be
   * emitted when this is called.
   */
  stepDown() {
    if (this.isRange) {
      const o = this.clampAndRoundToStep(this.minValue - this.step);
      this.minValue = F(o, this.min, this.maxValue), this.updateFormValue();
    } else {
      const o = this.clampAndRoundToStep(this.value - this.step);
      this.value = o;
    }
  }
  /**
   * Increases the slider's value by `step`. This is a programmatic change, so `input` and `change` events will not be
   * emitted when this is called.
   */
  stepUp() {
    if (this.isRange) {
      const o = this.clampAndRoundToStep(this.maxValue + this.step);
      this.maxValue = F(o, this.minValue, this.max), this.updateFormValue();
    } else {
      const o = this.clampAndRoundToStep(this.value + this.step);
      this.value = o;
    }
  }
  render() {
    const o = this.hasSlotController.test("label"), e = this.hasSlotController.test("hint"), a = this.label ? !0 : !!o, r = this.hint ? !0 : !!e, t = this.hasSlotController.test("reference"), l = Y({
      small: this.size === "small",
      medium: this.size === "medium",
      large: this.size === "large",
      horizontal: this.orientation === "horizontal",
      vertical: this.orientation === "vertical",
      disabled: this.disabled
    }), n = [];
    if (this.withMarkers)
      for (let p = this.min; p <= this.max; p += this.step)
        n.push(this.getPercentageFromValue(p));
    const i = m`
      <label
        id="label"
        part="label"
        for=${this.isRange ? "thumb-min" : "text-box"}
        class=${Y({ vh: !a, "has-label": a })}
        @pointerdown=${this.handleLabelPointerDown}
      >
        <slot name="label">${this.label}</slot>
      </label>
    `, c = m`
      <div
        id="hint"
        part="hint"
        class=${Y({
      "has-slotted": r
    })}
      >
        <slot name="hint">${this.hint}</slot>
      </div>
    `, w = this.withMarkers ? m`
          <div id="markers" part="markers">
            ${n.map(
      (p) => m`<span part="marker" class="marker" style=${Do({ "--position": `${p}%` })}></span>`
    )}
          </div>
        ` : "", d = t ? m`
          <div id="references" part="references" aria-hidden="true">
            <slot name="reference"></slot>
          </div>
        ` : "", h = (p, v) => this.withTooltip ? m`
            <wa-tooltip
              id=${`tooltip${p !== "thumb" ? "-" + p : ""}`}
              part="tooltip"
              exportparts="
                base:tooltip__base,
                body:tooltip__body,
                arrow:tooltip__arrow
              "
              trigger="manual"
              distance=${this.tooltipDistance}
              placement=${this.tooltipPlacement}
              for=${p}
              activation="manual"
              dir=${this.localize.dir()}
            >
              <span aria-hidden="true">
                ${typeof this.valueFormatter == "function" ? this.valueFormatter(v) : this.localize.number(v)}
              </span>
            </wa-tooltip>
          ` : "";
    if (this.isRange) {
      const p = F(this.getPercentageFromValue(this.minValue), 0, 100), v = F(this.getPercentageFromValue(this.maxValue), 0, 100);
      return m`
        ${i}

        <div id="slider" part="slider" class=${l}>
          <div id="track" part="track">
            <div
              id="indicator"
              part="indicator"
              style=${Do({
        "--start": `${Math.min(p, v)}%`,
        "--end": `${Math.max(p, v)}%`
      })}
            ></div>

            ${w}

            <span
              id="thumb-min"
              part="thumb thumb-min"
              style=${Do({ "--position": `${p}%` })}
              role="slider"
              aria-valuemin=${this.min}
              aria-valuenow=${this.minValue}
              aria-valuetext=${typeof this.valueFormatter == "function" ? this.valueFormatter(this.minValue) : this.localize.number(this.minValue)}
              aria-valuemax=${this.max}
              aria-label="${this.label ? `${this.label} (minimum value)` : "Minimum value"}"
              aria-orientation=${this.orientation}
              aria-disabled=${this.disabled ? "true" : "false"}
              aria-readonly=${this.readonly ? "true" : "false"}
              tabindex=${this.disabled ? -1 : 0}
              @blur=${this.handleBlur}
              @focus=${this.handleFocus}
              @keydown=${this.handleKeyDown}
            ></span>

            <span
              id="thumb-max"
              part="thumb thumb-max"
              style=${Do({ "--position": `${v}%` })}
              role="slider"
              aria-valuemin=${this.min}
              aria-valuenow=${this.maxValue}
              aria-valuetext=${typeof this.valueFormatter == "function" ? this.valueFormatter(this.maxValue) : this.localize.number(this.maxValue)}
              aria-valuemax=${this.max}
              aria-label="${this.label ? `${this.label} (maximum value)` : "Maximum value"}"
              aria-orientation=${this.orientation}
              aria-disabled=${this.disabled ? "true" : "false"}
              aria-readonly=${this.readonly ? "true" : "false"}
              tabindex=${this.disabled ? -1 : 0}
              @blur=${this.handleBlur}
              @focus=${this.handleFocus}
              @keydown=${this.handleKeyDown}
            ></span>
          </div>

          ${d} ${c}
        </div>

        ${h("thumb-min", this.minValue)} ${h("thumb-max", this.maxValue)}
      `;
    } else {
      const p = F(this.getPercentageFromValue(this.value), 0, 100), v = F(
        this.getPercentageFromValue(typeof this.indicatorOffset == "number" ? this.indicatorOffset : this.min),
        0,
        100
      );
      return m`
        ${i}

        <div
          id="slider"
          part="slider"
          class=${l}
          role="slider"
          aria-disabled=${this.disabled ? "true" : "false"}
          aria-readonly=${this.disabled ? "true" : "false"}
          aria-orientation=${this.orientation}
          aria-valuemin=${this.min}
          aria-valuenow=${this.value}
          aria-valuetext=${typeof this.valueFormatter == "function" ? this.valueFormatter(this.value) : this.localize.number(this.value)}
          aria-valuemax=${this.max}
          aria-labelledby="label"
          aria-describedby="hint"
          tabindex=${this.disabled ? -1 : 0}
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
          @keydown=${this.handleKeyDown}
        >
          <div id="track" part="track">
            <div
              id="indicator"
              part="indicator"
              style=${Do({ "--start": `${v}%`, "--end": `${p}%` })}
            ></div>

            ${w}
            <span id="thumb" part="thumb" style=${Do({ "--position": `${p}%` })}></span>
          </div>

          ${d} ${c}
        </div>

        ${h("thumb", this.value)}
      `;
    }
  }
};
k.formAssociated = !0;
k.observeSlots = !0;
k.css = [Uo, oa, rt];
s([
  z("#slider")
], k.prototype, "slider", 2);
s([
  z("#thumb")
], k.prototype, "thumb", 2);
s([
  z("#thumb-min")
], k.prototype, "thumbMin", 2);
s([
  z("#thumb-max")
], k.prototype, "thumbMax", 2);
s([
  z("#track")
], k.prototype, "track", 2);
s([
  z("#tooltip")
], k.prototype, "tooltip", 2);
s([
  u()
], k.prototype, "label", 2);
s([
  u({ attribute: "hint" })
], k.prototype, "hint", 2);
s([
  u({ reflect: !0 })
], k.prototype, "name", 2);
s([
  u({ type: Number, attribute: "min-value" })
], k.prototype, "minValue", 2);
s([
  u({ type: Number, attribute: "max-value" })
], k.prototype, "maxValue", 2);
s([
  u({ attribute: "value", reflect: !0, type: Number })
], k.prototype, "defaultValue", 2);
s([
  eo()
], k.prototype, "value", 1);
s([
  u({ type: Boolean, reflect: !0 })
], k.prototype, "range", 2);
s([
  u({ type: Boolean })
], k.prototype, "disabled", 2);
s([
  u({ type: Boolean, reflect: !0 })
], k.prototype, "readonly", 2);
s([
  u({ reflect: !0 })
], k.prototype, "orientation", 2);
s([
  u({ reflect: !0 })
], k.prototype, "size", 2);
s([
  u({ attribute: "indicator-offset", type: Number })
], k.prototype, "indicatorOffset", 2);
s([
  u({ type: Number })
], k.prototype, "min", 2);
s([
  u({ type: Number })
], k.prototype, "max", 2);
s([
  u({ type: Number })
], k.prototype, "step", 2);
s([
  u({ type: Boolean })
], k.prototype, "autofocus", 2);
s([
  u({ attribute: "tooltip-distance", type: Number })
], k.prototype, "tooltipDistance", 2);
s([
  u({ attribute: "tooltip-placement", reflect: !0 })
], k.prototype, "tooltipPlacement", 2);
s([
  u({ attribute: "with-markers", type: Boolean })
], k.prototype, "withMarkers", 2);
s([
  u({ attribute: "with-tooltip", type: Boolean })
], k.prototype, "withTooltip", 2);
s([
  u({ attribute: !1 })
], k.prototype, "valueFormatter", 2);
k = s([
  X("wa-slider")
], k);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var kt = D`
  :host {
    --max-width: 30ch;

    /** These styles are added so we don't interfere in the DOM. */
    display: inline-block;
    position: absolute;

    /** Defaults for inherited CSS properties */
    color: var(--wa-tooltip-content-color);
    font-size: var(--wa-tooltip-font-size);
    line-height: var(--wa-tooltip-line-height);
    text-align: start;
    white-space: normal;
  }

  .tooltip {
    --arrow-size: var(--wa-tooltip-arrow-size);
    --arrow-color: var(--wa-tooltip-background-color);
  }

  .tooltip::part(popup) {
    z-index: 1000;
  }

  .tooltip[placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .tooltip[placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .tooltip[placement^='left']::part(popup) {
    transform-origin: right;
  }

  .tooltip[placement^='right']::part(popup) {
    transform-origin: left;
  }

  .body {
    display: block;
    width: max-content;
    max-width: var(--max-width);
    border-radius: var(--wa-tooltip-border-radius);
    background-color: var(--wa-tooltip-background-color);
    border: var(--wa-tooltip-border-width) var(--wa-tooltip-border-style) var(--wa-tooltip-border-color);
    padding: 0.25em 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }

  .tooltip {
    --popup-border-width: var(--wa-tooltip-border-width);

    &::part(arrow) {
      border-bottom: var(--wa-tooltip-border-width) var(--wa-tooltip-border-style) var(--wa-tooltip-border-color);
      border-right: var(--wa-tooltip-border-width) var(--wa-tooltip-border-style) var(--wa-tooltip-border-color);
    }
  }
`;
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Ct = class extends Event {
  constructor() {
    super("wa-reposition", { bubbles: !0, cancelable: !1, composed: !0 });
  }
};
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var $t = D`
  :host {
    --arrow-color: black;
    --arrow-size: var(--wa-tooltip-arrow-size);
    --popup-border-width: 0px;
    --show-duration: 100ms;
    --hide-duration: 100ms;

    /*
     * These properties are computed to account for the arrow's dimensions after being rotated 45º. The constant
     * 0.7071 is derived from sin(45) to calculate the length of the arrow after rotation.
     *
     * The diamond will be translated inward by --arrow-base-offset, the border thickness, to centralise it on
     * the inner edge of the popup border. This also means we need to increase the size of the arrow by the
     * same amount to compensate.
     *
     * A diamond shaped clipping mask is used to avoid overlap of popup content. This extends slightly inward so
     * the popup border is covered with no sub-pixel rounding artifacts. The diamond corners are mitred at 22.5º
     * to properly merge any arrow border with the popup border. The constant 1.4142 is derived from 1 + tan(22.5).
     *
     */
    --arrow-base-offset: var(--popup-border-width);
    --arrow-size-diagonal: calc((var(--arrow-size) + var(--arrow-base-offset)) * 0.7071);
    --arrow-padding-offset: calc(var(--arrow-size-diagonal) - var(--arrow-size));
    --arrow-size-div: calc(var(--arrow-size-diagonal) * 2);
    --arrow-clipping-corner: calc(var(--arrow-base-offset) * 1.4142);

    display: contents;
  }

  .popup {
    position: absolute;
    isolation: isolate;
    max-width: var(--auto-size-available-width, none);
    max-height: var(--auto-size-available-height, none);

    /* Clear UA styles for [popover] */
    :where(&) {
      inset: unset;
      padding: unset;
      margin: unset;
      width: unset;
      height: unset;
      color: unset;
      background: unset;
      border: unset;
      overflow: unset;
    }
  }

  .popup-fixed {
    position: fixed;
  }

  .popup:not(.popup-active) {
    display: none;
  }

  .arrow {
    position: absolute;
    width: var(--arrow-size-div);
    height: var(--arrow-size-div);
    background: var(--arrow-color);
    z-index: 3;
    clip-path: polygon(
      var(--arrow-clipping-corner) 100%,
      var(--arrow-base-offset) calc(100% - var(--arrow-base-offset)),
      calc(var(--arrow-base-offset) - 2px) calc(100% - var(--arrow-base-offset)),
      calc(100% - var(--arrow-base-offset)) calc(var(--arrow-base-offset) - 2px),
      calc(100% - var(--arrow-base-offset)) var(--arrow-base-offset),
      100% var(--arrow-clipping-corner),
      100% 100%
    );
    rotate: 45deg;
  }

  :host([data-current-placement|='left']) .arrow {
    rotate: -45deg;
  }

  :host([data-current-placement|='right']) .arrow {
    rotate: 135deg;
  }

  :host([data-current-placement|='bottom']) .arrow {
    rotate: 225deg;
  }

  /* Hover bridge */
  .popup-hover-bridge:not(.popup-hover-bridge-visible) {
    display: none;
  }

  .popup-hover-bridge {
    position: fixed;
    z-index: 899;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--hover-bridge-top-left-x, 0) var(--hover-bridge-top-left-y, 0),
      var(--hover-bridge-top-right-x, 0) var(--hover-bridge-top-right-y, 0),
      var(--hover-bridge-bottom-right-x, 0) var(--hover-bridge-bottom-right-y, 0),
      var(--hover-bridge-bottom-left-x, 0) var(--hover-bridge-bottom-left-y, 0)
    );
  }

  /* Built-in animations */
  .show {
    animation: show var(--show-duration) ease;
  }

  .hide {
    animation: show var(--hide-duration) ease reverse;
  }

  @keyframes show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .show-with-scale {
    animation: show-with-scale var(--show-duration) ease;
  }

  .hide-with-scale {
    animation: show-with-scale var(--hide-duration) ease reverse;
  }

  @keyframes show-with-scale {
    from {
      opacity: 0;
      scale: 0.8;
    }
    to {
      opacity: 1;
      scale: 1;
    }
  }
`;
const bo = Math.min, H = Math.max, ge = Math.round, ce = Math.floor, no = (o) => ({
  x: o,
  y: o
}), St = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Ne(o, e, a) {
  return H(o, bo(e, a));
}
function jo(o, e) {
  return typeof o == "function" ? o(e) : o;
}
function yo(o) {
  return o.split("-")[0];
}
function Wo(o) {
  return o.split("-")[1];
}
function tr(o) {
  return o === "x" ? "y" : "x";
}
function ra(o) {
  return o === "y" ? "height" : "width";
}
function uo(o) {
  const e = o[0];
  return e === "t" || e === "b" ? "y" : "x";
}
function ta(o) {
  return tr(uo(o));
}
function _t(o, e, a) {
  a === void 0 && (a = !1);
  const r = Wo(o), t = ta(o), l = ra(t);
  let n = t === "x" ? r === (a ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return e.reference[l] > e.floating[l] && (n = me(n)), [n, me(n)];
}
function zt(o) {
  const e = me(o);
  return [Ue(o), e, Ue(e)];
}
function Ue(o) {
  return o.includes("start") ? o.replace("start", "end") : o.replace("end", "start");
}
const $a = ["left", "right"], Sa = ["right", "left"], Et = ["top", "bottom"], At = ["bottom", "top"];
function Lt(o, e, a) {
  switch (o) {
    case "top":
    case "bottom":
      return a ? e ? Sa : $a : e ? $a : Sa;
    case "left":
    case "right":
      return e ? Et : At;
    default:
      return [];
  }
}
function Ot(o, e, a, r) {
  const t = Wo(o);
  let l = Lt(yo(o), a === "start", r);
  return t && (l = l.map((n) => n + "-" + t), e && (l = l.concat(l.map(Ue)))), l;
}
function me(o) {
  const e = yo(o);
  return St[e] + o.slice(e.length);
}
function Tt(o) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...o
  };
}
function lr(o) {
  return typeof o != "number" ? Tt(o) : {
    top: o,
    right: o,
    bottom: o,
    left: o
  };
}
function be(o) {
  const {
    x: e,
    y: a,
    width: r,
    height: t
  } = o;
  return {
    width: r,
    height: t,
    top: a,
    left: e,
    right: e + r,
    bottom: a + t,
    x: e,
    y: a
  };
}
function _a(o, e, a) {
  let {
    reference: r,
    floating: t
  } = o;
  const l = uo(e), n = ta(e), i = ra(n), c = yo(e), w = l === "y", d = r.x + r.width / 2 - t.width / 2, h = r.y + r.height / 2 - t.height / 2, p = r[i] / 2 - t[i] / 2;
  let v;
  switch (c) {
    case "top":
      v = {
        x: d,
        y: r.y - t.height
      };
      break;
    case "bottom":
      v = {
        x: d,
        y: r.y + r.height
      };
      break;
    case "right":
      v = {
        x: r.x + r.width,
        y: h
      };
      break;
    case "left":
      v = {
        x: r.x - t.width,
        y: h
      };
      break;
    default:
      v = {
        x: r.x,
        y: r.y
      };
  }
  switch (Wo(e)) {
    case "start":
      v[n] -= p * (a && w ? -1 : 1);
      break;
    case "end":
      v[n] += p * (a && w ? -1 : 1);
      break;
  }
  return v;
}
async function Rt(o, e) {
  var a;
  e === void 0 && (e = {});
  const {
    x: r,
    y: t,
    platform: l,
    rects: n,
    elements: i,
    strategy: c
  } = o, {
    boundary: w = "clippingAncestors",
    rootBoundary: d = "viewport",
    elementContext: h = "floating",
    altBoundary: p = !1,
    padding: v = 0
  } = jo(e, o), f = lr(v), y = i[p ? h === "floating" ? "reference" : "floating" : h], b = be(await l.getClippingRect({
    element: (a = await (l.isElement == null ? void 0 : l.isElement(y))) == null || a ? y : y.contextElement || await (l.getDocumentElement == null ? void 0 : l.getDocumentElement(i.floating)),
    boundary: w,
    rootBoundary: d,
    strategy: c
  })), C = h === "floating" ? {
    x: r,
    y: t,
    width: n.floating.width,
    height: n.floating.height
  } : n.reference, S = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(i.floating)), E = await (l.isElement == null ? void 0 : l.isElement(S)) ? await (l.getScale == null ? void 0 : l.getScale(S)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, M = be(l.convertOffsetParentRelativeRectToViewportRelativeRect ? await l.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: i,
    rect: C,
    offsetParent: S,
    strategy: c
  }) : C);
  return {
    top: (b.top - M.top + f.top) / E.y,
    bottom: (M.bottom - b.bottom + f.bottom) / E.y,
    left: (b.left - M.left + f.left) / E.x,
    right: (M.right - b.right + f.right) / E.x
  };
}
const Mt = 50, qt = async (o, e, a) => {
  const {
    placement: r = "bottom",
    strategy: t = "absolute",
    middleware: l = [],
    platform: n
  } = a, i = n.detectOverflow ? n : {
    ...n,
    detectOverflow: Rt
  }, c = await (n.isRTL == null ? void 0 : n.isRTL(e));
  let w = await n.getElementRects({
    reference: o,
    floating: e,
    strategy: t
  }), {
    x: d,
    y: h
  } = _a(w, r, c), p = r, v = 0;
  const f = {};
  for (let g = 0; g < l.length; g++) {
    const y = l[g];
    if (!y)
      continue;
    const {
      name: b,
      fn: C
    } = y, {
      x: S,
      y: E,
      data: M,
      reset: O
    } = await C({
      x: d,
      y: h,
      initialPlacement: r,
      placement: p,
      strategy: t,
      middlewareData: f,
      rects: w,
      platform: i,
      elements: {
        reference: o,
        floating: e
      }
    });
    d = S ?? d, h = E ?? h, f[b] = {
      ...f[b],
      ...M
    }, O && v < Mt && (v++, typeof O == "object" && (O.placement && (p = O.placement), O.rects && (w = O.rects === !0 ? await n.getElementRects({
      reference: o,
      floating: e,
      strategy: t
    }) : O.rects), {
      x: d,
      y: h
    } = _a(w, p, c)), g = -1);
  }
  return {
    x: d,
    y: h,
    placement: p,
    strategy: t,
    middlewareData: f
  };
}, Dt = (o) => ({
  name: "arrow",
  options: o,
  async fn(e) {
    const {
      x: a,
      y: r,
      placement: t,
      rects: l,
      platform: n,
      elements: i,
      middlewareData: c
    } = e, {
      element: w,
      padding: d = 0
    } = jo(o, e) || {};
    if (w == null)
      return {};
    const h = lr(d), p = {
      x: a,
      y: r
    }, v = ta(t), f = ra(v), g = await n.getDimensions(w), y = v === "y", b = y ? "top" : "left", C = y ? "bottom" : "right", S = y ? "clientHeight" : "clientWidth", E = l.reference[f] + l.reference[v] - p[v] - l.floating[f], M = p[v] - l.reference[v], O = await (n.getOffsetParent == null ? void 0 : n.getOffsetParent(w));
    let q = O ? O[S] : 0;
    (!q || !await (n.isElement == null ? void 0 : n.isElement(O))) && (q = i.floating[S] || l.floating[f]);
    const co = E / 2 - M / 2, ao = q / 2 - g[f] / 2 - 1, W = bo(h[b], ao), po = bo(h[C], ao), ro = W, vo = q - g[f] - po, V = q / 2 - g[f] / 2 + co, So = Ne(ro, V, vo), wo = !c.arrow && Wo(t) != null && V !== So && l.reference[f] / 2 - (V < ro ? W : po) - g[f] / 2 < 0, G = wo ? V < ro ? V - ro : V - vo : 0;
    return {
      [v]: p[v] + G,
      data: {
        [v]: So,
        centerOffset: V - So - G,
        ...wo && {
          alignmentOffset: G
        }
      },
      reset: wo
    };
  }
}), Vt = function(o) {
  return o === void 0 && (o = {}), {
    name: "flip",
    options: o,
    async fn(e) {
      var a, r;
      const {
        placement: t,
        middlewareData: l,
        rects: n,
        initialPlacement: i,
        platform: c,
        elements: w
      } = e, {
        mainAxis: d = !0,
        crossAxis: h = !0,
        fallbackPlacements: p,
        fallbackStrategy: v = "bestFit",
        fallbackAxisSideDirection: f = "none",
        flipAlignment: g = !0,
        ...y
      } = jo(o, e);
      if ((a = l.arrow) != null && a.alignmentOffset)
        return {};
      const b = yo(t), C = uo(i), S = yo(i) === i, E = await (c.isRTL == null ? void 0 : c.isRTL(w.floating)), M = p || (S || !g ? [me(i)] : zt(i)), O = f !== "none";
      !p && O && M.push(...Ot(i, g, f, E));
      const q = [i, ...M], co = await c.detectOverflow(e, y), ao = [];
      let W = ((r = l.flip) == null ? void 0 : r.overflows) || [];
      if (d && ao.push(co[b]), h) {
        const V = _t(t, n, E);
        ao.push(co[V[0]], co[V[1]]);
      }
      if (W = [...W, {
        placement: t,
        overflows: ao
      }], !ao.every((V) => V <= 0)) {
        var po, ro;
        const V = (((po = l.flip) == null ? void 0 : po.index) || 0) + 1, So = q[V];
        if (So && (!(h === "alignment" ? C !== uo(So) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        W.every((Q) => uo(Q.placement) === C ? Q.overflows[0] > 0 : !0)))
          return {
            data: {
              index: V,
              overflows: W
            },
            reset: {
              placement: So
            }
          };
        let wo = (ro = W.filter((G) => G.overflows[0] <= 0).sort((G, Q) => G.overflows[1] - Q.overflows[1])[0]) == null ? void 0 : ro.placement;
        if (!wo)
          switch (v) {
            case "bestFit": {
              var vo;
              const G = (vo = W.filter((Q) => {
                if (O) {
                  const fo = uo(Q.placement);
                  return fo === C || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  fo === "y";
                }
                return !0;
              }).map((Q) => [Q.placement, Q.overflows.filter((fo) => fo > 0).reduce((fo, Lr) => fo + Lr, 0)]).sort((Q, fo) => Q[1] - fo[1])[0]) == null ? void 0 : vo[0];
              G && (wo = G);
              break;
            }
            case "initialPlacement":
              wo = i;
              break;
          }
        if (t !== wo)
          return {
            reset: {
              placement: wo
            }
          };
      }
      return {};
    }
  };
}, Bt = /* @__PURE__ */ new Set(["left", "top"]);
async function Ft(o, e) {
  const {
    placement: a,
    platform: r,
    elements: t
  } = o, l = await (r.isRTL == null ? void 0 : r.isRTL(t.floating)), n = yo(a), i = Wo(a), c = uo(a) === "y", w = Bt.has(n) ? -1 : 1, d = l && c ? -1 : 1, h = jo(e, o);
  let {
    mainAxis: p,
    crossAxis: v,
    alignmentAxis: f
  } = typeof h == "number" ? {
    mainAxis: h,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: h.mainAxis || 0,
    crossAxis: h.crossAxis || 0,
    alignmentAxis: h.alignmentAxis
  };
  return i && typeof f == "number" && (v = i === "end" ? f * -1 : f), c ? {
    x: v * d,
    y: p * w
  } : {
    x: p * w,
    y: v * d
  };
}
const It = function(o) {
  return o === void 0 && (o = 0), {
    name: "offset",
    options: o,
    async fn(e) {
      var a, r;
      const {
        x: t,
        y: l,
        placement: n,
        middlewareData: i
      } = e, c = await Ft(e, o);
      return n === ((a = i.offset) == null ? void 0 : a.placement) && (r = i.arrow) != null && r.alignmentOffset ? {} : {
        x: t + c.x,
        y: l + c.y,
        data: {
          ...c,
          placement: n
        }
      };
    }
  };
}, Pt = function(o) {
  return o === void 0 && (o = {}), {
    name: "shift",
    options: o,
    async fn(e) {
      const {
        x: a,
        y: r,
        placement: t,
        platform: l
      } = e, {
        mainAxis: n = !0,
        crossAxis: i = !1,
        limiter: c = {
          fn: (b) => {
            let {
              x: C,
              y: S
            } = b;
            return {
              x: C,
              y: S
            };
          }
        },
        ...w
      } = jo(o, e), d = {
        x: a,
        y: r
      }, h = await l.detectOverflow(e, w), p = uo(yo(t)), v = tr(p);
      let f = d[v], g = d[p];
      if (n) {
        const b = v === "y" ? "top" : "left", C = v === "y" ? "bottom" : "right", S = f + h[b], E = f - h[C];
        f = Ne(S, f, E);
      }
      if (i) {
        const b = p === "y" ? "top" : "left", C = p === "y" ? "bottom" : "right", S = g + h[b], E = g - h[C];
        g = Ne(S, g, E);
      }
      const y = c.fn({
        ...e,
        [v]: f,
        [p]: g
      });
      return {
        ...y,
        data: {
          x: y.x - a,
          y: y.y - r,
          enabled: {
            [v]: n,
            [p]: i
          }
        }
      };
    }
  };
}, Ht = function(o) {
  return o === void 0 && (o = {}), {
    name: "size",
    options: o,
    async fn(e) {
      var a, r;
      const {
        placement: t,
        rects: l,
        platform: n,
        elements: i
      } = e, {
        apply: c = () => {
        },
        ...w
      } = jo(o, e), d = await n.detectOverflow(e, w), h = yo(t), p = Wo(t), v = uo(t) === "y", {
        width: f,
        height: g
      } = l.floating;
      let y, b;
      h === "top" || h === "bottom" ? (y = h, b = p === (await (n.isRTL == null ? void 0 : n.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : (b = h, y = p === "end" ? "top" : "bottom");
      const C = g - d.top - d.bottom, S = f - d.left - d.right, E = bo(g - d[y], C), M = bo(f - d[b], S), O = !e.middlewareData.shift;
      let q = E, co = M;
      if ((a = e.middlewareData.shift) != null && a.enabled.x && (co = S), (r = e.middlewareData.shift) != null && r.enabled.y && (q = C), O && !p) {
        const W = H(d.left, 0), po = H(d.right, 0), ro = H(d.top, 0), vo = H(d.bottom, 0);
        v ? co = f - 2 * (W !== 0 || po !== 0 ? W + po : H(d.left, d.right)) : q = g - 2 * (ro !== 0 || vo !== 0 ? ro + vo : H(d.top, d.bottom));
      }
      await c({
        ...e,
        availableWidth: co,
        availableHeight: q
      });
      const ao = await n.getDimensions(i.floating);
      return f !== ao.width || g !== ao.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function ke() {
  return typeof window < "u";
}
function Ko(o) {
  return nr(o) ? (o.nodeName || "").toLowerCase() : "#document";
}
function N(o) {
  var e;
  return (o == null || (e = o.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function so(o) {
  var e;
  return (e = (nr(o) ? o.ownerDocument : o.document) || window.document) == null ? void 0 : e.documentElement;
}
function nr(o) {
  return ke() ? o instanceof Node || o instanceof N(o).Node : !1;
}
function J(o) {
  return ke() ? o instanceof Element || o instanceof N(o).Element : !1;
}
function ho(o) {
  return ke() ? o instanceof HTMLElement || o instanceof N(o).HTMLElement : !1;
}
function za(o) {
  return !ke() || typeof ShadowRoot > "u" ? !1 : o instanceof ShadowRoot || o instanceof N(o).ShadowRoot;
}
function ie(o) {
  const {
    overflow: e,
    overflowX: a,
    overflowY: r,
    display: t
  } = oo(o);
  return /auto|scroll|overlay|hidden|clip/.test(e + r + a) && t !== "inline" && t !== "contents";
}
function Nt(o) {
  return /^(table|td|th)$/.test(Ko(o));
}
function Ce(o) {
  try {
    if (o.matches(":popover-open"))
      return !0;
  } catch {
  }
  try {
    return o.matches(":modal");
  } catch {
    return !1;
  }
}
const Ut = /transform|translate|scale|rotate|perspective|filter/, jt = /paint|layout|strict|content/, zo = (o) => !!o && o !== "none";
let Te;
function $e(o) {
  const e = J(o) ? oo(o) : o;
  return zo(e.transform) || zo(e.translate) || zo(e.scale) || zo(e.rotate) || zo(e.perspective) || !la() && (zo(e.backdropFilter) || zo(e.filter)) || Ut.test(e.willChange || "") || jt.test(e.contain || "");
}
function Wt(o) {
  let e = xo(o);
  for (; ho(e) && !Po(e); ) {
    if ($e(e))
      return e;
    if (Ce(e))
      return null;
    e = xo(e);
  }
  return null;
}
function la() {
  return Te == null && (Te = typeof CSS < "u" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none")), Te;
}
function Po(o) {
  return /^(html|body|#document)$/.test(Ko(o));
}
function oo(o) {
  return N(o).getComputedStyle(o);
}
function Se(o) {
  return J(o) ? {
    scrollLeft: o.scrollLeft,
    scrollTop: o.scrollTop
  } : {
    scrollLeft: o.scrollX,
    scrollTop: o.scrollY
  };
}
function xo(o) {
  if (Ko(o) === "html")
    return o;
  const e = (
    // Step into the shadow DOM of the parent of a slotted node.
    o.assignedSlot || // DOM Element detected.
    o.parentNode || // ShadowRoot detected.
    za(o) && o.host || // Fallback.
    so(o)
  );
  return za(e) ? e.host : e;
}
function ir(o) {
  const e = xo(o);
  return Po(e) ? o.ownerDocument ? o.ownerDocument.body : o.body : ho(e) && ie(e) ? e : ir(e);
}
function Ho(o, e, a) {
  var r;
  e === void 0 && (e = []), a === void 0 && (a = !0);
  const t = ir(o), l = t === ((r = o.ownerDocument) == null ? void 0 : r.body), n = N(t);
  if (l) {
    const i = je(n);
    return e.concat(n, n.visualViewport || [], ie(t) ? t : [], i && a ? Ho(i) : []);
  } else
    return e.concat(t, Ho(t, [], a));
}
function je(o) {
  return o.parent && Object.getPrototypeOf(o.parent) ? o.frameElement : null;
}
function sr(o) {
  const e = oo(o);
  let a = parseFloat(e.width) || 0, r = parseFloat(e.height) || 0;
  const t = ho(o), l = t ? o.offsetWidth : a, n = t ? o.offsetHeight : r, i = ge(a) !== l || ge(r) !== n;
  return i && (a = l, r = n), {
    width: a,
    height: r,
    $: i
  };
}
function na(o) {
  return J(o) ? o : o.contextElement;
}
function Fo(o) {
  const e = na(o);
  if (!ho(e))
    return no(1);
  const a = e.getBoundingClientRect(), {
    width: r,
    height: t,
    $: l
  } = sr(e);
  let n = (l ? ge(a.width) : a.width) / r, i = (l ? ge(a.height) : a.height) / t;
  return (!n || !Number.isFinite(n)) && (n = 1), (!i || !Number.isFinite(i)) && (i = 1), {
    x: n,
    y: i
  };
}
const Kt = /* @__PURE__ */ no(0);
function cr(o) {
  const e = N(o);
  return !la() || !e.visualViewport ? Kt : {
    x: e.visualViewport.offsetLeft,
    y: e.visualViewport.offsetTop
  };
}
function Yt(o, e, a) {
  return e === void 0 && (e = !1), !a || e && a !== N(o) ? !1 : e;
}
function Mo(o, e, a, r) {
  e === void 0 && (e = !1), a === void 0 && (a = !1);
  const t = o.getBoundingClientRect(), l = na(o);
  let n = no(1);
  e && (r ? J(r) && (n = Fo(r)) : n = Fo(o));
  const i = Yt(l, a, r) ? cr(l) : no(0);
  let c = (t.left + i.x) / n.x, w = (t.top + i.y) / n.y, d = t.width / n.x, h = t.height / n.y;
  if (l) {
    const p = N(l), v = r && J(r) ? N(r) : r;
    let f = p, g = je(f);
    for (; g && r && v !== f; ) {
      const y = Fo(g), b = g.getBoundingClientRect(), C = oo(g), S = b.left + (g.clientLeft + parseFloat(C.paddingLeft)) * y.x, E = b.top + (g.clientTop + parseFloat(C.paddingTop)) * y.y;
      c *= y.x, w *= y.y, d *= y.x, h *= y.y, c += S, w += E, f = N(g), g = je(f);
    }
  }
  return be({
    width: d,
    height: h,
    x: c,
    y: w
  });
}
function _e(o, e) {
  const a = Se(o).scrollLeft;
  return e ? e.left + a : Mo(so(o)).left + a;
}
function wr(o, e) {
  const a = o.getBoundingClientRect(), r = a.left + e.scrollLeft - _e(o, a), t = a.top + e.scrollTop;
  return {
    x: r,
    y: t
  };
}
function Xt(o) {
  let {
    elements: e,
    rect: a,
    offsetParent: r,
    strategy: t
  } = o;
  const l = t === "fixed", n = so(r), i = e ? Ce(e.floating) : !1;
  if (r === n || i && l)
    return a;
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  }, w = no(1);
  const d = no(0), h = ho(r);
  if ((h || !h && !l) && ((Ko(r) !== "body" || ie(n)) && (c = Se(r)), h)) {
    const v = Mo(r);
    w = Fo(r), d.x = v.x + r.clientLeft, d.y = v.y + r.clientTop;
  }
  const p = n && !h && !l ? wr(n, c) : no(0);
  return {
    width: a.width * w.x,
    height: a.height * w.y,
    x: a.x * w.x - c.scrollLeft * w.x + d.x + p.x,
    y: a.y * w.y - c.scrollTop * w.y + d.y + p.y
  };
}
function Zt(o) {
  return Array.from(o.getClientRects());
}
function Gt(o) {
  const e = so(o), a = Se(o), r = o.ownerDocument.body, t = H(e.scrollWidth, e.clientWidth, r.scrollWidth, r.clientWidth), l = H(e.scrollHeight, e.clientHeight, r.scrollHeight, r.clientHeight);
  let n = -a.scrollLeft + _e(o);
  const i = -a.scrollTop;
  return oo(r).direction === "rtl" && (n += H(e.clientWidth, r.clientWidth) - t), {
    width: t,
    height: l,
    x: n,
    y: i
  };
}
const Ea = 25;
function Qt(o, e) {
  const a = N(o), r = so(o), t = a.visualViewport;
  let l = r.clientWidth, n = r.clientHeight, i = 0, c = 0;
  if (t) {
    l = t.width, n = t.height;
    const d = la();
    (!d || d && e === "fixed") && (i = t.offsetLeft, c = t.offsetTop);
  }
  const w = _e(r);
  if (w <= 0) {
    const d = r.ownerDocument, h = d.body, p = getComputedStyle(h), v = d.compatMode === "CSS1Compat" && parseFloat(p.marginLeft) + parseFloat(p.marginRight) || 0, f = Math.abs(r.clientWidth - h.clientWidth - v);
    f <= Ea && (l -= f);
  } else w <= Ea && (l += w);
  return {
    width: l,
    height: n,
    x: i,
    y: c
  };
}
function Jt(o, e) {
  const a = Mo(o, !0, e === "fixed"), r = a.top + o.clientTop, t = a.left + o.clientLeft, l = ho(o) ? Fo(o) : no(1), n = o.clientWidth * l.x, i = o.clientHeight * l.y, c = t * l.x, w = r * l.y;
  return {
    width: n,
    height: i,
    x: c,
    y: w
  };
}
function Aa(o, e, a) {
  let r;
  if (e === "viewport")
    r = Qt(o, a);
  else if (e === "document")
    r = Gt(so(o));
  else if (J(e))
    r = Jt(e, a);
  else {
    const t = cr(o);
    r = {
      x: e.x - t.x,
      y: e.y - t.y,
      width: e.width,
      height: e.height
    };
  }
  return be(r);
}
function dr(o, e) {
  const a = xo(o);
  return a === e || !J(a) || Po(a) ? !1 : oo(a).position === "fixed" || dr(a, e);
}
function ol(o, e) {
  const a = e.get(o);
  if (a)
    return a;
  let r = Ho(o, [], !1).filter((i) => J(i) && Ko(i) !== "body"), t = null;
  const l = oo(o).position === "fixed";
  let n = l ? xo(o) : o;
  for (; J(n) && !Po(n); ) {
    const i = oo(n), c = $e(n);
    !c && i.position === "fixed" && (t = null), (l ? !c && !t : !c && i.position === "static" && !!t && (t.position === "absolute" || t.position === "fixed") || ie(n) && !c && dr(o, n)) ? r = r.filter((d) => d !== n) : t = i, n = xo(n);
  }
  return e.set(o, r), r;
}
function el(o) {
  let {
    element: e,
    boundary: a,
    rootBoundary: r,
    strategy: t
  } = o;
  const n = [...a === "clippingAncestors" ? Ce(e) ? [] : ol(e, this._c) : [].concat(a), r], i = Aa(e, n[0], t);
  let c = i.top, w = i.right, d = i.bottom, h = i.left;
  for (let p = 1; p < n.length; p++) {
    const v = Aa(e, n[p], t);
    c = H(v.top, c), w = bo(v.right, w), d = bo(v.bottom, d), h = H(v.left, h);
  }
  return {
    width: w - h,
    height: d - c,
    x: h,
    y: c
  };
}
function al(o) {
  const {
    width: e,
    height: a
  } = sr(o);
  return {
    width: e,
    height: a
  };
}
function rl(o, e, a) {
  const r = ho(e), t = so(e), l = a === "fixed", n = Mo(o, !0, l, e);
  let i = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = no(0);
  function w() {
    c.x = _e(t);
  }
  if (r || !r && !l)
    if ((Ko(e) !== "body" || ie(t)) && (i = Se(e)), r) {
      const v = Mo(e, !0, l, e);
      c.x = v.x + e.clientLeft, c.y = v.y + e.clientTop;
    } else t && w();
  l && !r && t && w();
  const d = t && !r && !l ? wr(t, i) : no(0), h = n.left + i.scrollLeft - c.x - d.x, p = n.top + i.scrollTop - c.y - d.y;
  return {
    x: h,
    y: p,
    width: n.width,
    height: n.height
  };
}
function Re(o) {
  return oo(o).position === "static";
}
function La(o, e) {
  if (!ho(o) || oo(o).position === "fixed")
    return null;
  if (e)
    return e(o);
  let a = o.offsetParent;
  return so(o) === a && (a = a.ownerDocument.body), a;
}
function ur(o, e) {
  const a = N(o);
  if (Ce(o))
    return a;
  if (!ho(o)) {
    let t = xo(o);
    for (; t && !Po(t); ) {
      if (J(t) && !Re(t))
        return t;
      t = xo(t);
    }
    return a;
  }
  let r = La(o, e);
  for (; r && Nt(r) && Re(r); )
    r = La(r, e);
  return r && Po(r) && Re(r) && !$e(r) ? a : r || Wt(o) || a;
}
const tl = async function(o) {
  const e = this.getOffsetParent || ur, a = this.getDimensions, r = await a(o.floating);
  return {
    reference: rl(o.reference, await e(o.floating), o.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function ll(o) {
  return oo(o).direction === "rtl";
}
const pe = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Xt,
  getDocumentElement: so,
  getClippingRect: el,
  getOffsetParent: ur,
  getElementRects: tl,
  getClientRects: Zt,
  getDimensions: al,
  getScale: Fo,
  isElement: J,
  isRTL: ll
};
function hr(o, e) {
  return o.x === e.x && o.y === e.y && o.width === e.width && o.height === e.height;
}
function nl(o, e) {
  let a = null, r;
  const t = so(o);
  function l() {
    var i;
    clearTimeout(r), (i = a) == null || i.disconnect(), a = null;
  }
  function n(i, c) {
    i === void 0 && (i = !1), c === void 0 && (c = 1), l();
    const w = o.getBoundingClientRect(), {
      left: d,
      top: h,
      width: p,
      height: v
    } = w;
    if (i || e(), !p || !v)
      return;
    const f = ce(h), g = ce(t.clientWidth - (d + p)), y = ce(t.clientHeight - (h + v)), b = ce(d), S = {
      rootMargin: -f + "px " + -g + "px " + -y + "px " + -b + "px",
      threshold: H(0, bo(1, c)) || 1
    };
    let E = !0;
    function M(O) {
      const q = O[0].intersectionRatio;
      if (q !== c) {
        if (!E)
          return n();
        q ? n(!1, q) : r = setTimeout(() => {
          n(!1, 1e-7);
        }, 1e3);
      }
      q === 1 && !hr(w, o.getBoundingClientRect()) && n(), E = !1;
    }
    try {
      a = new IntersectionObserver(M, {
        ...S,
        // Handle <iframe>s
        root: t.ownerDocument
      });
    } catch {
      a = new IntersectionObserver(M, S);
    }
    a.observe(o);
  }
  return n(!0), l;
}
function pr(o, e, a, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: t = !0,
    ancestorResize: l = !0,
    elementResize: n = typeof ResizeObserver == "function",
    layoutShift: i = typeof IntersectionObserver == "function",
    animationFrame: c = !1
  } = r, w = na(o), d = t || l ? [...w ? Ho(w) : [], ...e ? Ho(e) : []] : [];
  d.forEach((b) => {
    t && b.addEventListener("scroll", a, {
      passive: !0
    }), l && b.addEventListener("resize", a);
  });
  const h = w && i ? nl(w, a) : null;
  let p = -1, v = null;
  n && (v = new ResizeObserver((b) => {
    let [C] = b;
    C && C.target === w && v && e && (v.unobserve(e), cancelAnimationFrame(p), p = requestAnimationFrame(() => {
      var S;
      (S = v) == null || S.observe(e);
    })), a();
  }), w && !c && v.observe(w), e && v.observe(e));
  let f, g = c ? Mo(o) : null;
  c && y();
  function y() {
    const b = Mo(o);
    g && !hr(g, b) && a(), g = b, f = requestAnimationFrame(y);
  }
  return a(), () => {
    var b;
    d.forEach((C) => {
      t && C.removeEventListener("scroll", a), l && C.removeEventListener("resize", a);
    }), h == null || h(), (b = v) == null || b.disconnect(), v = null, c && cancelAnimationFrame(f);
  };
}
const vr = It, fr = Pt, gr = Vt, Oa = Ht, il = Dt, mr = (o, e, a) => {
  const r = /* @__PURE__ */ new Map(), t = {
    platform: pe,
    ...a
  }, l = {
    ...t.platform,
    _c: r
  };
  return qt(o, e, {
    ...t,
    platform: l
  });
};
function sl(o) {
  return cl(o);
}
function Me(o) {
  return o.assignedSlot ? o.assignedSlot : o.parentNode instanceof ShadowRoot ? o.parentNode.host : o.parentNode;
}
function cl(o) {
  for (let e = o; e; e = Me(e)) if (e instanceof Element && getComputedStyle(e).display === "none") return null;
  for (let e = Me(o); e; e = Me(e)) {
    if (!(e instanceof Element)) continue;
    const a = getComputedStyle(e);
    if (a.display !== "contents" && (a.position !== "static" || $e(a) || e.tagName === "BODY"))
      return e;
  }
  return null;
}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function Ta(o) {
  return o !== null && typeof o == "object" && "getBoundingClientRect" in o && ("contextElement" in o ? o instanceof Element : !0);
}
var Na, we = (Na = globalThis == null ? void 0 : globalThis.HTMLElement) == null ? void 0 : Na.prototype.hasOwnProperty("popover"), _ = class extends Z {
  constructor() {
    super(...arguments), this.localize = new $o(this), this.active = !1, this.placement = "top", this.boundary = "viewport", this.distance = 0, this.skidding = 0, this.arrow = !1, this.arrowPlacement = "anchor", this.arrowPadding = 10, this.flip = !1, this.flipFallbackPlacements = "", this.flipFallbackStrategy = "best-fit", this.flipPadding = 0, this.shift = !1, this.shiftPadding = 0, this.autoSizePadding = 0, this.hoverBridge = !1, this.updateHoverBridge = () => {
      if (this.hoverBridge && this.anchorEl && this.popup) {
        const o = this.anchorEl.getBoundingClientRect(), e = this.popup.getBoundingClientRect(), a = this.placement.includes("top") || this.placement.includes("bottom");
        let r = 0, t = 0, l = 0, n = 0, i = 0, c = 0, w = 0, d = 0;
        a ? o.top < e.top ? (r = o.left, t = o.bottom, l = o.right, n = o.bottom, i = e.left, c = e.top, w = e.right, d = e.top) : (r = e.left, t = e.bottom, l = e.right, n = e.bottom, i = o.left, c = o.top, w = o.right, d = o.top) : o.left < e.left ? (r = o.right, t = o.top, l = e.left, n = e.top, i = o.right, c = o.bottom, w = e.left, d = e.bottom) : (r = e.right, t = e.top, l = o.left, n = o.top, i = e.right, c = e.bottom, w = o.left, d = o.bottom), this.style.setProperty("--hover-bridge-top-left-x", `${r}px`), this.style.setProperty("--hover-bridge-top-left-y", `${t}px`), this.style.setProperty("--hover-bridge-top-right-x", `${l}px`), this.style.setProperty("--hover-bridge-top-right-y", `${n}px`), this.style.setProperty("--hover-bridge-bottom-left-x", `${i}px`), this.style.setProperty("--hover-bridge-bottom-left-y", `${c}px`), this.style.setProperty("--hover-bridge-bottom-right-x", `${w}px`), this.style.setProperty("--hover-bridge-bottom-right-y", `${d}px`);
      }
    };
  }
  async connectedCallback() {
    super.connectedCallback(), await this.updateComplete, this.start();
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.stop();
  }
  async updated(o) {
    super.updated(o), o.has("active") && (this.active ? this.start() : this.stop()), o.has("anchor") && this.handleAnchorChange(), this.active && (await this.updateComplete, this.reposition());
  }
  async handleAnchorChange() {
    if (await this.stop(), this.anchor && typeof this.anchor == "string") {
      const o = this.getRootNode();
      this.anchorEl = o.getElementById(this.anchor);
    } else this.anchor instanceof Element || Ta(this.anchor) ? this.anchorEl = this.anchor : this.anchorEl = this.querySelector('[slot="anchor"]');
    this.anchorEl instanceof HTMLSlotElement && (this.anchorEl = this.anchorEl.assignedElements({ flatten: !0 })[0]), this.anchorEl && this.start();
  }
  start() {
    var o, e;
    !this.anchorEl || !this.active || !this.isConnected || ((e = (o = this.popup) == null ? void 0 : o.showPopover) == null || e.call(o), this.cleanup = pr(this.anchorEl, this.popup, () => {
      this.reposition();
    }));
  }
  async stop() {
    return new Promise((o) => {
      var e, a;
      (a = (e = this.popup) == null ? void 0 : e.hidePopover) == null || a.call(e), this.cleanup ? (this.cleanup(), this.cleanup = void 0, this.removeAttribute("data-current-placement"), this.style.removeProperty("--auto-size-available-width"), this.style.removeProperty("--auto-size-available-height"), requestAnimationFrame(() => o())) : o();
    });
  }
  /** Forces the popup to recalculate and reposition itself. */
  reposition() {
    if (!this.active || !this.anchorEl || !this.popup)
      return;
    const o = [
      // The offset middleware goes first
      vr({ mainAxis: this.distance, crossAxis: this.skidding })
    ];
    this.sync ? o.push(
      Oa({
        apply: ({ rects: r }) => {
          const t = this.sync === "width" || this.sync === "both", l = this.sync === "height" || this.sync === "both";
          this.popup.style.width = t ? `${r.reference.width}px` : "", this.popup.style.height = l ? `${r.reference.height}px` : "";
        }
      })
    ) : (this.popup.style.width = "", this.popup.style.height = "");
    let e;
    we && !Ta(this.anchor) && this.boundary === "scroll" && (e = Ho(this.anchorEl).filter((r) => r instanceof Element)), this.flip && o.push(
      gr({
        boundary: this.flipBoundary || e,
        // @ts-expect-error - We're converting a string attribute to an array here
        fallbackPlacements: this.flipFallbackPlacements,
        fallbackStrategy: this.flipFallbackStrategy === "best-fit" ? "bestFit" : "initialPlacement",
        padding: this.flipPadding
      })
    ), this.shift && o.push(
      fr({
        boundary: this.shiftBoundary || e,
        padding: this.shiftPadding
      })
    ), this.autoSize ? o.push(
      Oa({
        boundary: this.autoSizeBoundary || e,
        padding: this.autoSizePadding,
        apply: ({ availableWidth: r, availableHeight: t }) => {
          this.autoSize === "vertical" || this.autoSize === "both" ? this.style.setProperty("--auto-size-available-height", `${t}px`) : this.style.removeProperty("--auto-size-available-height"), this.autoSize === "horizontal" || this.autoSize === "both" ? this.style.setProperty("--auto-size-available-width", `${r}px`) : this.style.removeProperty("--auto-size-available-width");
        }
      })
    ) : (this.style.removeProperty("--auto-size-available-width"), this.style.removeProperty("--auto-size-available-height")), this.arrow && o.push(
      il({
        element: this.arrowEl,
        padding: this.arrowPadding
      })
    );
    const a = we ? (r) => pe.getOffsetParent(r, sl) : pe.getOffsetParent;
    mr(this.anchorEl, this.popup, {
      placement: this.placement,
      middleware: o,
      strategy: we ? "absolute" : "fixed",
      platform: {
        ...pe,
        getOffsetParent: a
      }
    }).then(({ x: r, y: t, middlewareData: l, placement: n }) => {
      const i = this.localize.dir() === "rtl", c = { top: "bottom", right: "left", bottom: "top", left: "right" }[n.split("-")[0]];
      if (this.setAttribute("data-current-placement", n), Object.assign(this.popup.style, {
        left: `${r}px`,
        top: `${t}px`
      }), this.arrow) {
        const w = l.arrow.x, d = l.arrow.y;
        let h = "", p = "", v = "", f = "";
        if (this.arrowPlacement === "start") {
          const g = typeof w == "number" ? `calc(${this.arrowPadding}px - var(--arrow-padding-offset))` : "";
          h = typeof d == "number" ? `calc(${this.arrowPadding}px - var(--arrow-padding-offset))` : "", p = i ? g : "", f = i ? "" : g;
        } else if (this.arrowPlacement === "end") {
          const g = typeof w == "number" ? `calc(${this.arrowPadding}px - var(--arrow-padding-offset))` : "";
          p = i ? "" : g, f = i ? g : "", v = typeof d == "number" ? `calc(${this.arrowPadding}px - var(--arrow-padding-offset))` : "";
        } else this.arrowPlacement === "center" ? (f = typeof w == "number" ? "calc(50% - var(--arrow-size-diagonal))" : "", h = typeof d == "number" ? "calc(50% - var(--arrow-size-diagonal))" : "") : (f = typeof w == "number" ? `${w}px` : "", h = typeof d == "number" ? `${d}px` : "");
        Object.assign(this.arrowEl.style, {
          top: h,
          right: p,
          bottom: v,
          left: f,
          [c]: "calc(var(--arrow-base-offset) - var(--arrow-size-diagonal))"
        });
      }
    }), requestAnimationFrame(() => this.updateHoverBridge()), this.dispatchEvent(new Ct());
  }
  render() {
    return m`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${Y({
      "popup-hover-bridge": !0,
      "popup-hover-bridge-visible": this.hoverBridge && this.active
    })}
      ></span>

      <div
        popover="manual"
        part="popup"
        class=${Y({
      popup: !0,
      "popup-active": this.active,
      "popup-fixed": !we,
      "popup-has-arrow": this.arrow
    })}
      >
        <slot></slot>
        ${this.arrow ? m`<div part="arrow" class="arrow" role="presentation"></div>` : ""}
      </div>
    `;
  }
};
_.css = $t;
s([
  z(".popup")
], _.prototype, "popup", 2);
s([
  z(".arrow")
], _.prototype, "arrowEl", 2);
s([
  u()
], _.prototype, "anchor", 2);
s([
  u({ type: Boolean, reflect: !0 })
], _.prototype, "active", 2);
s([
  u({ reflect: !0 })
], _.prototype, "placement", 2);
s([
  u()
], _.prototype, "boundary", 2);
s([
  u({ type: Number })
], _.prototype, "distance", 2);
s([
  u({ type: Number })
], _.prototype, "skidding", 2);
s([
  u({ type: Boolean })
], _.prototype, "arrow", 2);
s([
  u({ attribute: "arrow-placement" })
], _.prototype, "arrowPlacement", 2);
s([
  u({ attribute: "arrow-padding", type: Number })
], _.prototype, "arrowPadding", 2);
s([
  u({ type: Boolean })
], _.prototype, "flip", 2);
s([
  u({
    attribute: "flip-fallback-placements",
    converter: {
      fromAttribute: (o) => o.split(" ").map((e) => e.trim()).filter((e) => e !== ""),
      toAttribute: (o) => o.join(" ")
    }
  })
], _.prototype, "flipFallbackPlacements", 2);
s([
  u({ attribute: "flip-fallback-strategy" })
], _.prototype, "flipFallbackStrategy", 2);
s([
  u({ type: Object })
], _.prototype, "flipBoundary", 2);
s([
  u({ attribute: "flip-padding", type: Number })
], _.prototype, "flipPadding", 2);
s([
  u({ type: Boolean })
], _.prototype, "shift", 2);
s([
  u({ type: Object })
], _.prototype, "shiftBoundary", 2);
s([
  u({ attribute: "shift-padding", type: Number })
], _.prototype, "shiftPadding", 2);
s([
  u({ attribute: "auto-size" })
], _.prototype, "autoSize", 2);
s([
  u()
], _.prototype, "sync", 2);
s([
  u({ type: Object })
], _.prototype, "autoSizeBoundary", 2);
s([
  u({ attribute: "auto-size-padding", type: Number })
], _.prototype, "autoSizePadding", 2);
s([
  u({ attribute: "hover-bridge", type: Boolean })
], _.prototype, "hoverBridge", 2);
_ = s([
  X("wa-popup")
], _);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var ia = class extends Event {
  constructor() {
    super("wa-show", { bubbles: !0, cancelable: !0, composed: !0 });
  }
};
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var sa = class extends Event {
  constructor(o) {
    super("wa-hide", { bubbles: !0, cancelable: !0, composed: !0 }), this.detail = o;
  }
};
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var ca = class extends Event {
  constructor() {
    super("wa-after-hide", { bubbles: !0, cancelable: !1, composed: !0 });
  }
};
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var wa = class extends Event {
  constructor() {
    super("wa-after-show", { bubbles: !0, cancelable: !1, composed: !0 });
  }
};
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var To = [];
function da(o) {
  To.push(o);
}
function re(o) {
  for (let e = To.length - 1; e >= 0; e--)
    if (To[e] === o) {
      To.splice(e, 1);
      break;
    }
}
function ua(o) {
  return To.length > 0 && To[To.length - 1] === o;
}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function ye(o, e) {
  return new Promise((a) => {
    function r(t) {
      t.target === o && (o.removeEventListener(e, r), a());
    }
    o.addEventListener(e, r);
  });
}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function ko(o, e) {
  return new Promise((a) => {
    const r = new AbortController(), { signal: t } = r;
    if (o.classList.contains(e))
      return;
    o.classList.add(e);
    let l = !1, n = () => {
      l || (l = !0, o.classList.remove(e), a(), r.abort());
    };
    o.addEventListener("animationend", n, { once: !0, signal: t }), o.addEventListener("animationcancel", n, { once: !0, signal: t }), requestAnimationFrame(() => {
      !l && o.getAnimations().length === 0 && n();
    });
  });
}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function j(o, e) {
  const a = {
    waitUntilFirstUpdate: !1,
    ...e
  };
  return (r, t) => {
    const { update: l } = r, n = Array.isArray(o) ? o : [o];
    r.update = function(i) {
      n.forEach((c) => {
        const w = c;
        if (i.has(w)) {
          const d = i.get(w), h = this[w];
          d !== h && (!a.waitUntilFirstUpdate || this.hasUpdated) && this[t](d, h);
        }
      }), l.call(this, i);
    };
  };
}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var L = class extends Z {
  constructor() {
    super(...arguments), this.placement = "top", this.disabled = !1, this.distance = 8, this.open = !1, this.skidding = 0, this.showDelay = 150, this.hideDelay = 0, this.trigger = "hover focus", this.withoutArrow = !1, this.for = null, this.anchor = null, this.eventController = new AbortController(), this.handleBlur = () => {
      this.hasTrigger("focus") && this.hide();
    }, this.handleClick = () => {
      this.hasTrigger("click") && (this.open ? this.hide() : this.show());
    }, this.handleFocus = () => {
      this.hasTrigger("focus") && this.show();
    }, this.handleDocumentKeyDown = (o) => {
      o.key === "Escape" && this.open && ua(this) && (o.preventDefault(), o.stopPropagation(), this.hide());
    }, this.handleMouseOver = () => {
      this.hasTrigger("hover") && (clearTimeout(this.hoverTimeout), this.hoverTimeout = window.setTimeout(() => this.show(), this.showDelay));
    }, this.handleMouseOut = () => {
      var o;
      if (this.hasTrigger("hover")) {
        const e = !!((o = this.anchor) != null && o.matches(":hover")), a = this.matches(":hover");
        if (e || a)
          return;
        clearTimeout(this.hoverTimeout), e || a || (this.hoverTimeout = window.setTimeout(() => {
          this.hide();
        }, this.hideDelay));
      }
    };
  }
  connectedCallback() {
    super.connectedCallback(), this.eventController.signal.aborted && (this.eventController = new AbortController()), this.addEventListener("mouseout", this.handleMouseOut), this.open && (this.open = !1, this.updateComplete.then(() => {
      this.open = !0;
    })), this.id || (this.id = Xa("wa-tooltip-")), this.for && this.anchor ? (this.anchor = null, this.handleForChange()) : this.for && this.handleForChange();
  }
  disconnectedCallback() {
    super.disconnectedCallback(), document.removeEventListener("keydown", this.handleDocumentKeyDown), re(this), this.eventController.abort(), this.anchor && this.removeFromAriaLabelledBy(this.anchor, this.id);
  }
  firstUpdated() {
    this.body.hidden = !this.open, this.open && (this.popup.active = !0, this.popup.reposition());
  }
  hasTrigger(o) {
    return this.trigger.split(" ").includes(o);
  }
  /** Adds the tooltip ID to the aria-labelledby attribute */
  addToAriaLabelledBy(o, e) {
    const r = (o.getAttribute("aria-labelledby") || "").split(/\s+/).filter(Boolean);
    r.includes(e) || (r.push(e), o.setAttribute("aria-labelledby", r.join(" ")));
  }
  /** Removes the tooltip ID from the aria-labelledby attribute */
  removeFromAriaLabelledBy(o, e) {
    const t = (o.getAttribute("aria-labelledby") || "").split(/\s+/).filter(Boolean).filter((l) => l !== e);
    t.length > 0 ? o.setAttribute("aria-labelledby", t.join(" ")) : o.removeAttribute("aria-labelledby");
  }
  async handleOpenChange() {
    if (this.open) {
      if (this.disabled)
        return;
      const o = new ia();
      if (this.dispatchEvent(o), o.defaultPrevented) {
        this.open = !1;
        return;
      }
      document.addEventListener("keydown", this.handleDocumentKeyDown, { signal: this.eventController.signal }), da(this), this.body.hidden = !1, this.popup.active = !0, await ko(this.popup.popup, "show-with-scale"), this.popup.reposition(), this.dispatchEvent(new wa());
    } else {
      const o = new sa();
      if (this.dispatchEvent(o), o.defaultPrevented) {
        this.open = !1;
        return;
      }
      document.removeEventListener("keydown", this.handleDocumentKeyDown), re(this), await ko(this.popup.popup, "hide-with-scale"), this.popup.active = !1, this.body.hidden = !0, this.dispatchEvent(new ca());
    }
  }
  handleForChange() {
    const o = this.getRootNode();
    if (!o)
      return;
    const e = this.for ? o.getElementById(this.for) : null, a = this.anchor;
    if (e === a)
      return;
    const { signal: r } = this.eventController;
    e && (this.addToAriaLabelledBy(e, this.id), e.addEventListener("blur", this.handleBlur, { capture: !0, signal: r }), e.addEventListener("focus", this.handleFocus, { capture: !0, signal: r }), e.addEventListener("click", this.handleClick, { signal: r }), e.addEventListener("mouseover", this.handleMouseOver, { signal: r }), e.addEventListener("mouseout", this.handleMouseOut, { signal: r })), a && (this.removeFromAriaLabelledBy(a, this.id), a.removeEventListener("blur", this.handleBlur, { capture: !0 }), a.removeEventListener("focus", this.handleFocus, { capture: !0 }), a.removeEventListener("click", this.handleClick), a.removeEventListener("mouseover", this.handleMouseOver), a.removeEventListener("mouseout", this.handleMouseOut)), this.anchor = e;
  }
  async handleOptionsChange() {
    this.hasUpdated && (await this.updateComplete, this.popup.reposition());
  }
  handleDisabledChange() {
    this.disabled && this.open && this.hide();
  }
  /** Shows the tooltip. */
  async show() {
    if (!this.open)
      return this.open = !0, ye(this, "wa-after-show");
  }
  /** Hides the tooltip */
  async hide() {
    if (this.open)
      return this.open = !1, ye(this, "wa-after-hide");
  }
  render() {
    return m`
      <wa-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${Y({
      tooltip: !0,
      "tooltip-open": this.open
    })}
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        flip
        shift
        ?arrow=${!this.withoutArrow}
        hover-bridge
        .anchor=${this.anchor}
      >
        <div part="body" class="body">
          <slot></slot>
        </div>
      </wa-popup>
    `;
  }
};
L.css = kt;
L.dependencies = { "wa-popup": _ };
s([
  z("slot:not([name])")
], L.prototype, "defaultSlot", 2);
s([
  z(".body")
], L.prototype, "body", 2);
s([
  z("wa-popup")
], L.prototype, "popup", 2);
s([
  u()
], L.prototype, "placement", 2);
s([
  u({ type: Boolean, reflect: !0 })
], L.prototype, "disabled", 2);
s([
  u({ type: Number })
], L.prototype, "distance", 2);
s([
  u({ type: Boolean, reflect: !0 })
], L.prototype, "open", 2);
s([
  u({ type: Number })
], L.prototype, "skidding", 2);
s([
  u({ attribute: "show-delay", type: Number })
], L.prototype, "showDelay", 2);
s([
  u({ attribute: "hide-delay", type: Number })
], L.prototype, "hideDelay", 2);
s([
  u()
], L.prototype, "trigger", 2);
s([
  u({ attribute: "without-arrow", type: Boolean, reflect: !0 })
], L.prototype, "withoutArrow", 2);
s([
  u()
], L.prototype, "for", 2);
s([
  eo()
], L.prototype, "anchor", 2);
s([
  j("open", { waitUntilFirstUpdate: !0 })
], L.prototype, "handleOpenChange", 1);
s([
  j("for")
], L.prototype, "handleForChange", 1);
s([
  j(["distance", "placement", "skidding"])
], L.prototype, "handleOptionsChange", 1);
s([
  j("disabled")
], L.prototype, "handleDisabledChange", 1);
L = s([
  X("wa-tooltip")
], L);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var wl = D`
  :host {
    --tag-max-size: 10ch;
    --show-duration: 100ms;
    --hide-duration: 100ms;
  }

  /* Add ellipses to multi select options */
  :host wa-tag::part(content) {
    display: initial;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    max-width: var(--tag-max-size);
  }

  :host .disabled [part~='combobox'] {
    opacity: 0.5;
    cursor: not-allowed;
    outline: none;
  }

  :host .enabled:is(.open, :focus-within) [part~='combobox'] {
    outline: var(--wa-focus-ring);
    outline-offset: var(--wa-focus-ring-offset);
  }

  /** The popup */
  .select {
    flex: 1 1 auto;
    display: inline-flex;
    width: 100%;
    position: relative;
    vertical-align: middle;

    /* Pass through from select to the popup */
    --show-duration: inherit;
    --hide-duration: inherit;

    &::part(popup) {
      z-index: 900;
    }

    &[data-current-placement^='top']::part(popup) {
      transform-origin: bottom;
    }

    &[data-current-placement^='bottom']::part(popup) {
      transform-origin: top;
    }
  }

  /* Combobox */
  .combobox {
    flex: 1;
    display: flex;
    width: 100%;
    min-width: 0;
    align-items: center;
    justify-content: start;

    min-height: var(--wa-form-control-height);

    background-color: var(--wa-form-control-background-color);
    border-color: var(--wa-form-control-border-color);
    border-radius: var(--wa-form-control-border-radius);
    border-style: var(--wa-form-control-border-style);
    border-width: var(--wa-form-control-border-width);
    color: var(--wa-form-control-value-color);
    cursor: pointer;
    font-family: inherit;
    font-weight: var(--wa-form-control-value-font-weight);
    line-height: var(--wa-form-control-value-line-height);
    overflow: hidden;
    padding: 0 var(--wa-form-control-padding-inline);
    position: relative;
    vertical-align: middle;
    transition:
      background-color var(--wa-transition-normal),
      border var(--wa-transition-normal),
      outline var(--wa-transition-fast);
    transition-timing-function: var(--wa-transition-easing);

    /* Pills */
    :host([pill]) & {
      border-radius: var(--wa-border-radius-pill);
    }
  }

  /* Appearance modifiers */
  :host([appearance='outlined']) .combobox {
    background-color: var(--wa-form-control-background-color);
    border-color: var(--wa-form-control-border-color);
  }

  :host([appearance='filled']) .combobox {
    background-color: var(--wa-color-neutral-fill-quiet);
    border-color: var(--wa-color-neutral-fill-quiet);
  }

  :host([appearance='filled-outlined']) .combobox {
    background-color: var(--wa-color-neutral-fill-quiet);
    border-color: var(--wa-form-control-border-color);
  }

  .display-input {
    position: relative;
    width: 100%;
    font: inherit;
    border: none;
    background: none;
    line-height: var(--wa-form-control-value-line-height);
    color: var(--wa-form-control-value-color);
    cursor: inherit;
    overflow: hidden;
    padding: 0;
    margin: 0;
    -webkit-appearance: none;

    &:focus {
      outline: none;
    }

    &::placeholder {
      color: var(--wa-form-control-placeholder-color);
    }
  }

  /* Manage spacing when tags are present */
  :host([multiple]) {
    --_padding-with-tags: calc(var(--wa-form-control-height) * 0.1 - var(--wa-form-control-border-width));

    & .combobox:has(.tags wa-tag) {
      padding-block: var(--_padding-with-tags);
      padding-inline-start: var(--_padding-with-tags);
    }
  }

  /* Visually hide the display input when multiple is enabled */
  :host([multiple]) .combobox:has(.tags wa-tag) .display-input {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }

  .value-input {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    padding: 0;
    margin: 0;
  }

  .tags {
    display: flex;
    flex: 1;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.25em;

    &::slotted(wa-tag) {
      cursor: pointer !important;
    }

    .disabled &,
    .disabled &::slotted(wa-tag) {
      cursor: not-allowed !important;
    }
  }

  /* Start and End */

  .start,
  .end {
    flex: 0;
    display: inline-flex;
    align-items: center;
    color: var(--wa-color-neutral-on-quiet);
  }

  .end::slotted(*) {
    margin-inline-start: var(--wa-form-control-padding-inline);
  }

  .start::slotted(*) {
    margin-inline-end: var(--wa-form-control-padding-inline);
  }

  :host([multiple]) .combobox:has(.tags wa-tag) .start::slotted(*) {
    margin-inline-start: calc(var(--wa-form-control-padding-inline) - var(--_padding-with-tags));
  }

  /* Clear button */
  [part~='clear-button'] {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--wa-color-neutral-on-quiet);
    border: none;
    background: none;
    padding: 0;
    transition: color var(--wa-transition-normal);
    cursor: pointer;
    margin-inline-start: var(--wa-form-control-padding-inline);

    &:focus {
      outline: none;
    }

    @media (hover: hover) {
      &:hover {
        color: color-mix(in oklab, currentColor, var(--wa-color-mix-hover));
      }
    }

    &:active {
      color: color-mix(in oklab, currentColor, var(--wa-color-mix-active));
    }
  }

  /* Expand icon */
  .expand-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    color: var(--wa-color-neutral-on-quiet);
    transition: rotate var(--wa-transition-slow) ease;
    rotate: 0deg;
    margin-inline-start: var(--wa-form-control-padding-inline);

    .open & {
      rotate: -180deg;
    }
  }

  /* Listbox */
  .listbox {
    display: block;
    position: relative;
    font: inherit;
    box-shadow: var(--wa-shadow-m);
    background: var(--wa-color-surface-raised);
    border-color: var(--wa-color-surface-border);
    border-radius: var(--wa-border-radius-m);
    border-style: var(--wa-border-style);
    border-width: var(--wa-border-width-s);
    padding-block: 0.5em;
    padding-inline: 0;
    overflow: auto;
    overscroll-behavior: none;

    /* Make sure it adheres to the popup's auto size */
    max-width: var(--auto-size-available-width);
    max-height: var(--auto-size-available-height);

    &::slotted(wa-divider) {
      --spacing: 0.5em;
    }
  }

  slot:not([name])::slotted(small) {
    display: block;
    font-size: var(--wa-font-size-smaller);
    font-weight: var(--wa-font-weight-semibold);
    color: var(--wa-color-text-quiet);
    padding-block: 0.5em;
    padding-inline: 2.25em;
  }
`;
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var dl = class extends Event {
  constructor() {
    super("wa-clear", { bubbles: !0, cancelable: !1, composed: !0 });
  }
};
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function ul(o, e) {
  return {
    top: Math.round(o.getBoundingClientRect().top - e.getBoundingClientRect().top),
    left: Math.round(o.getBoundingClientRect().left - e.getBoundingClientRect().left)
  };
}
function hl(o, e, a = "vertical", r = "smooth") {
  const t = ul(o, e), l = t.top + e.scrollTop, n = t.left + e.scrollLeft, i = e.scrollLeft, c = e.scrollLeft + e.offsetWidth, w = e.scrollTop, d = e.scrollTop + e.offsetHeight;
  (a === "horizontal" || a === "both") && (n < i ? e.scrollTo({ left: n, behavior: r }) : n + o.clientWidth > c && e.scrollTo({ left: n - e.offsetWidth + o.clientWidth, behavior: r })), (a === "vertical" || a === "both") && (l < w ? e.scrollTo({ top: l, behavior: r }) : l + o.clientHeight > d && e.scrollTo({ top: l - e.offsetHeight + o.clientHeight, behavior: r }));
}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var br = (o = {}) => {
  let { validationElement: e, validationProperty: a } = o;
  e || (e = Object.assign(document.createElement("input"), { required: !0 })), a || (a = "value");
  const r = {
    observedAttributes: ["required"],
    message: e.validationMessage,
    // @TODO: Add a translation.
    checkValidity(t) {
      const l = {
        message: "",
        isValid: !0,
        invalidKeys: []
      };
      return (t.required ?? t.hasAttribute("required")) && !t[a] && (l.message = typeof r.message == "function" ? r.message(t) : r.message || "", l.isValid = !1, l.invalidKeys.push("valueMissing")), l;
    }
  };
  return r;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class We extends ne {
  constructor(e) {
    if (super(e), this.it = A, e.type !== to.CHILD) throw Error(this.constructor.directiveName + "() can only be used in child bindings");
  }
  render(e) {
    if (e === A || e == null) return this._t = void 0, this.it = e;
    if (e === I) return e;
    if (typeof e != "string") throw Error(this.constructor.directiveName + "() called with a non-string value");
    if (e === this.it) return this._t;
    this.it = e;
    const a = [e];
    return a.raw = a, this._t = { _$litType$: this.constructor.resultType, strings: a, values: [] };
  }
}
We.directiveName = "unsafeHTML", We.resultType = 1;
const pl = le(We);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var x = class extends U {
  constructor() {
    super(...arguments), this.assumeInteractionOn = ["blur", "input"], this.cachedOptions = null, this.hasSlotController = new te(this, "hint", "label"), this.localize = new $o(this), this.selectionOrder = /* @__PURE__ */ new Map(), this.typeToSelectString = "", this.slotChangePending = !1, this.displayLabel = "", this.selectedOptions = [], this.name = "", this._defaultValue = null, this.size = "medium", this.placeholder = "", this.multiple = !1, this.maxOptionsVisible = 3, this.disabled = !1, this.withClear = !1, this.open = !1, this.appearance = "outlined", this.pill = !1, this.label = "", this.placement = "bottom", this.hint = "", this.withLabel = !1, this.withHint = !1, this.required = !1, this.getTag = (o) => m`
        <wa-tag
          part="tag"
          exportparts="
            base:tag__base,
            content:tag__content,
            remove-button:tag__remove-button,
            remove-button__base:tag__remove-button__base
          "
          ?pill=${this.pill}
          size=${this.size}
          with-remove
          data-value=${o.value}
          @wa-remove=${(e) => this.handleTagRemove(e, o)}
        >
          ${o.label}
        </wa-tag>
      `, this.handleDocumentFocusIn = (o) => {
      const e = o.composedPath();
      this && !e.includes(this) && this.hide();
    }, this.handleDocumentKeyDown = (o) => {
      var t;
      const e = o.target, a = e.closest('[part~="clear-button"]') !== null, r = e.closest("wa-button") !== null;
      if (!(a || r)) {
        if (o.key === "Escape" && this.open && ua(this) && (o.preventDefault(), o.stopPropagation(), this.hide(), this.displayInput.focus({ preventScroll: !0 })), o.key === "Enter" || o.key === " " && this.typeToSelectString === "") {
          if (o.preventDefault(), o.stopImmediatePropagation(), !this.open) {
            this.show();
            return;
          }
          this.currentOption && !this.currentOption.disabled && (this.valueHasChanged = !0, this.hasInteracted = !0, this.multiple ? this.toggleOptionSelection(this.currentOption) : this.setSelectedOptions(this.currentOption), this.updateComplete.then(() => {
            this.dispatchEvent(new InputEvent("input", { bubbles: !0, composed: !0 })), this.dispatchEvent(new Event("change", { bubbles: !0, composed: !0 }));
          }), this.multiple || (this.hide(), this.displayInput.focus({ preventScroll: !0 })));
          return;
        }
        if (["ArrowUp", "ArrowDown", "Home", "End"].includes(o.key)) {
          const l = this.getAllOptions(), n = l.indexOf(this.currentOption);
          let i = Math.max(0, n);
          if (o.preventDefault(), !this.open && (this.show(), this.currentOption))
            return;
          o.key === "ArrowDown" ? (i = n + 1, i > l.length - 1 && (i = 0)) : o.key === "ArrowUp" ? (i = n - 1, i < 0 && (i = l.length - 1)) : o.key === "Home" ? i = 0 : o.key === "End" && (i = l.length - 1), this.setCurrentOption(l[i]);
        }
        if (((t = o.key) == null ? void 0 : t.length) === 1 || o.key === "Backspace") {
          const l = this.getAllOptions();
          if (o.metaKey || o.ctrlKey || o.altKey)
            return;
          if (!this.open) {
            if (o.key === "Backspace")
              return;
            this.show();
          }
          o.stopPropagation(), o.preventDefault(), clearTimeout(this.typeToSelectTimeout), this.typeToSelectTimeout = window.setTimeout(() => this.typeToSelectString = "", 1e3), o.key === "Backspace" ? this.typeToSelectString = this.typeToSelectString.slice(0, -1) : this.typeToSelectString += o.key.toLowerCase();
          for (const n of l)
            if (n.label.toLowerCase().startsWith(this.typeToSelectString)) {
              this.setCurrentOption(n);
              break;
            }
        }
      }
    }, this.handleDocumentMouseDown = (o) => {
      const e = o.composedPath();
      this && !e.includes(this) && this.hide();
    };
  }
  static get validators() {
    const o = [
      br({
        validationElement: Object.assign(document.createElement("select"), { required: !0 })
      })
    ];
    return [...super.validators, ...o];
  }
  /** Where to anchor native constraint validation */
  get validationTarget() {
    return this.valueInput;
  }
  set defaultValue(o) {
    this._defaultValue = this.convertDefaultValue(o);
  }
  get defaultValue() {
    return this.convertDefaultValue(this._defaultValue);
  }
  /**
   * @private
   * A converter for defaultValue from array to string if its multiple. Also fixes some hydration issues.
   */
  convertDefaultValue(o) {
    return !(this.multiple || this.hasAttribute("multiple")) && Array.isArray(o) && (o = o[0]), o;
  }
  set value(o) {
    let e = this.value;
    o instanceof FormData && (o = o.getAll(this.name)), o != null && !Array.isArray(o) && (o = [o]), this._value = o ?? null, this.value !== e && (this.valueHasChanged = !0, this.requestUpdate("value", e));
  }
  get value() {
    let o = this._value ?? this.defaultValue ?? null;
    o != null && (o = Array.isArray(o) ? o : [o]), this.optionValues === void 0 && (o == null ? this.optionValues = /* @__PURE__ */ new Set(null) : this.optionValues = new Set(
      this.getAllOptions().filter((a) => !a.disabled).map((a) => a.value)
    ));
    let e = o;
    return o != null && (e = o.filter((a) => this.optionValues.has(a)), e = this.multiple ? e : e[0], e = e ?? null), e;
  }
  connectedCallback() {
    super.connectedCallback(), this.processSlotChange(), this.open = !1;
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.removeOpenListeners(), this.cachedOptions = null;
  }
  updateDefaultValue() {
    const e = this.getAllOptions().filter((a) => a.hasAttribute("selected") || a.defaultSelected);
    if (e.length > 0) {
      const a = e.map((r) => r.value);
      this._defaultValue = this.multiple ? a : a[0];
    }
    this.hasAttribute("value") && (this._defaultValue = this.getAttribute("value") || null);
  }
  addOpenListeners() {
    document.addEventListener("focusin", this.handleDocumentFocusIn), document.addEventListener("keydown", this.handleDocumentKeyDown), document.addEventListener("mousedown", this.handleDocumentMouseDown), da(this), this.getRootNode() !== document && this.getRootNode().addEventListener("focusin", this.handleDocumentFocusIn);
  }
  removeOpenListeners() {
    document.removeEventListener("focusin", this.handleDocumentFocusIn), document.removeEventListener("keydown", this.handleDocumentKeyDown), document.removeEventListener("mousedown", this.handleDocumentMouseDown), re(this), this.getRootNode() !== document && this.getRootNode().removeEventListener("focusin", this.handleDocumentFocusIn);
  }
  handleFocus() {
    this.displayInput.setSelectionRange(0, 0);
  }
  handleLabelClick() {
    this.displayInput.focus();
  }
  handleComboboxClick(o) {
    o.preventDefault();
  }
  handleComboboxMouseDown(o) {
    const a = o.composedPath().some((r) => r instanceof Element && r.tagName.toLowerCase() === "wa-button");
    this.disabled || a || (o.preventDefault(), this.displayInput.focus({ preventScroll: !0 }), this.open = !this.open);
  }
  handleComboboxKeyDown(o) {
    o.stopPropagation(), this.handleDocumentKeyDown(o);
  }
  handleClearClick(o) {
    o.stopPropagation(), this.hasInteracted = !0, this.valueHasChanged = !0, this.value !== null && (this.selectionOrder.clear(), this.setSelectedOptions([]), this.displayInput.focus({ preventScroll: !0 }), this.updateComplete.then(() => {
      this.dispatchEvent(new dl()), this.dispatchEvent(new InputEvent("input", { bubbles: !0, composed: !0 })), this.dispatchEvent(new Event("change", { bubbles: !0, composed: !0 }));
    }));
  }
  handleClearMouseDown(o) {
    o.stopPropagation(), o.preventDefault();
  }
  handleOptionClick(o) {
    const a = o.target.closest("wa-option");
    a && !a.disabled && (this.hasInteracted = !0, this.valueHasChanged = !0, this.multiple ? this.toggleOptionSelection(a) : this.setSelectedOptions(a), this.updateComplete.then(() => this.displayInput.focus({ preventScroll: !0 })), this.requestUpdate("value"), this.updateComplete.then(() => {
      this.dispatchEvent(new InputEvent("input", { bubbles: !0, composed: !0 })), this.dispatchEvent(new Event("change", { bubbles: !0, composed: !0 }));
    }), this.multiple || (this.hide(), this.displayInput.focus({ preventScroll: !0 })));
  }
  /* @internal - used by options to update labels */
  handleDefaultSlotChange() {
    this.slotChangePending || (this.slotChangePending = !0, queueMicrotask(() => {
      this.slotChangePending = !1, this.processSlotChange();
    }));
  }
  processSlotChange() {
    customElements.get("wa-option") || customElements.whenDefined("wa-option").then(() => this.handleDefaultSlotChange()), this.cachedOptions = null, this.optionValues = void 0;
    const o = this.getAllOptions();
    this.updateDefaultValue();
    let e = this.value;
    if (e == null || !this.valueHasChanged && !this.hasInteracted) {
      this.selectionChanged();
      return;
    }
    Array.isArray(e) || (e = [e]);
    const a = o.filter((r) => e.includes(r.value));
    this.setSelectedOptions(a);
  }
  handleTagRemove(o, e) {
    if (o.stopPropagation(), this.disabled) return;
    this.hasInteracted = !0, this.valueHasChanged = !0;
    let a = e;
    if (!a) {
      const r = o.target.closest("wa-tag[data-value]");
      if (r) {
        const t = r.dataset.value;
        a = this.selectedOptions.find((l) => l.value === t);
      }
    }
    a && (this.toggleOptionSelection(a, !1), this.updateComplete.then(() => {
      this.dispatchEvent(new InputEvent("input", { bubbles: !0, composed: !0 })), this.dispatchEvent(new Event("change", { bubbles: !0, composed: !0 }));
    }));
  }
  // Gets an array of all `<wa-option>` elements
  getAllOptions() {
    return this.cachedOptions ? this.cachedOptions : this != null && this.querySelectorAll ? (this.cachedOptions = [...this.querySelectorAll("wa-option")], this.cachedOptions) : [];
  }
  // Gets the first `<wa-option>` element
  getFirstOption() {
    return this.querySelector("wa-option");
  }
  // Sets the current option, which is the option the user is currently interacting with (e.g. via keyboard). Only one
  // option may be "current" at a time.
  setCurrentOption(o) {
    this.getAllOptions().forEach((a) => {
      a.current = !1, a.tabIndex = -1;
    }), o && (this.currentOption = o, o.current = !0, o.tabIndex = 0, o.focus({ preventScroll: !0 }));
  }
  // Sets the selected option(s)
  setSelectedOptions(o) {
    const e = this.getAllOptions(), a = Array.isArray(o) ? o : [o];
    e.forEach((r) => {
      a.includes(r) || (r.selected = !1);
    }), a.length && a.forEach((r) => r.selected = !0), this.selectionChanged();
  }
  // Toggles an option's selected state
  toggleOptionSelection(o, e) {
    e === !0 || e === !1 ? o.selected = e : o.selected = !o.selected, this.selectionChanged();
  }
  // @internal This method must be called whenever the selection changes. It will update the selected options cache, the
  // current value, and the display value. The option component uses it internally to update labels as they change.
  selectionChanged() {
    var n, i, c;
    const e = this.getAllOptions().filter((w) => {
      if (!this.hasInteracted && !this.valueHasChanged) {
        const d = this.defaultValue, h = Array.isArray(d) ? d : [d];
        return w.hasAttribute("selected") || w.defaultSelected || w.selected || (h == null ? void 0 : h.includes(w.value));
      }
      return w.selected;
    }), a = new Set(e.map((w) => w.value));
    for (const w of this.selectionOrder.keys())
      a.has(w) || this.selectionOrder.delete(w);
    let t = (this.selectionOrder.size > 0 ? Math.max(...this.selectionOrder.values()) : -1) + 1;
    for (const w of e)
      this.selectionOrder.has(w.value) || this.selectionOrder.set(w.value, t++);
    this.selectedOptions = e.sort((w, d) => {
      const h = this.selectionOrder.get(w.value) ?? 0, p = this.selectionOrder.get(d.value) ?? 0;
      return h - p;
    });
    let l = new Set(this.selectedOptions.map((w) => w.value));
    if (l.size > 0 || this._value) {
      const w = this._value;
      if (this._value == null) {
        let d = this.defaultValue ?? [];
        this._value = Array.isArray(d) ? d : [d];
      }
      this._value = ((n = this._value) == null ? void 0 : n.filter((d) => {
        var h;
        return !((h = this.optionValues) != null && h.has(d));
      })) ?? null, (i = this._value) == null || i.unshift(...l), this.requestUpdate("value", w);
    }
    if (this.multiple)
      this.placeholder && !((c = this.value) != null && c.length) ? this.displayLabel = "" : this.displayLabel = this.localize.term("numOptionsSelected", this.selectedOptions.length);
    else {
      const w = this.selectedOptions[0];
      this.displayLabel = (w == null ? void 0 : w.label) ?? "";
    }
    this.updateComplete.then(() => {
      this.updateValidity();
    });
  }
  get tags() {
    return this.selectedOptions.map((o, e) => {
      if (e < this.maxOptionsVisible || this.maxOptionsVisible <= 0) {
        const a = this.getTag(o, e);
        return a ? typeof a == "string" ? pl(a) : a : null;
      } else if (e === this.maxOptionsVisible)
        return m`
          <wa-tag
            part="tag"
            exportparts="
              base:tag__base,
              content:tag__content,
              remove-button:tag__remove-button,
              remove-button__base:tag__remove-button__base
            "
            >+${this.selectedOptions.length - e}</wa-tag
          >
        `;
      return null;
    });
  }
  updated(o) {
    super.updated(o), o.has("value") && this.customStates.set("blank", !this.value);
  }
  handleDisabledChange() {
    this.disabled && this.open && (this.open = !1);
  }
  handleValueChange() {
    const o = this.getAllOptions(), e = Array.isArray(this.value) ? this.value : [this.value], a = o.filter((r) => e.includes(r.value));
    this.setSelectedOptions(a), this.updateValidity();
  }
  async handleOpenChange() {
    if (this.open && !this.disabled) {
      this.setCurrentOption(this.selectedOptions[0] || this.getFirstOption());
      const o = new ia();
      if (this.dispatchEvent(o), o.defaultPrevented) {
        this.open = !1;
        return;
      }
      this.addOpenListeners(), this.listbox.hidden = !1, this.popup.active = !0, requestAnimationFrame(() => {
        this.setCurrentOption(this.currentOption);
      }), await ko(this.popup.popup, "show"), this.currentOption && hl(this.currentOption, this.listbox, "vertical", "auto"), this.dispatchEvent(new wa());
    } else {
      const o = new sa();
      if (this.dispatchEvent(o), o.defaultPrevented) {
        this.open = !1;
        return;
      }
      this.removeOpenListeners(), await ko(this.popup.popup, "hide"), this.listbox.hidden = !0, this.popup.active = !1, this.dispatchEvent(new ca());
    }
  }
  /** Shows the listbox. */
  async show() {
    if (this.open || this.disabled) {
      this.open = !1;
      return;
    }
    return this.open = !0, ye(this, "wa-after-show");
  }
  /** Hides the listbox. */
  async hide() {
    if (!this.open || this.disabled) {
      this.open = !1;
      return;
    }
    return this.open = !1, ye(this, "wa-after-hide");
  }
  /** Sets focus on the control. */
  focus(o) {
    this.displayInput.focus(o);
  }
  /** Removes focus from the control. */
  blur() {
    this.displayInput.blur();
  }
  formResetCallback() {
    this.selectionOrder.clear(), this.value = this.defaultValue, super.formResetCallback(), this.handleValueChange(), this.updateComplete.then(() => {
      this.dispatchEvent(new InputEvent("input", { bubbles: !0, composed: !0 })), this.dispatchEvent(new Event("change", { bubbles: !0, composed: !0 }));
    });
  }
  render() {
    const o = this.hasUpdated ? this.hasSlotController.test("label") : this.withLabel, e = this.hasUpdated ? this.hasSlotController.test("hint") : this.withHint, a = this.label ? !0 : !!o, r = this.hint ? !0 : !!e, t = (this.hasUpdated || at) && this.withClear && !this.disabled && this.value && this.value.length > 0;
    return m`
      <div
        part="form-control"
        class=${Y({
      "form-control": !0,
      "form-control-has-label": a
    })}
      >
        <label
          id="label"
          part="form-control-label label"
          class=${Y({
      label: !0,
      "has-label": a
    })}
          aria-hidden=${a ? "false" : "true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <wa-popup
            class=${Y({
      select: !0,
      open: this.open,
      disabled: this.disabled,
      enabled: !this.disabled,
      multiple: this.multiple
    })}
            placement=${this.placement}
            flip
            shift
            sync="width"
            auto-size="vertical"
            auto-size-padding="10"
          >
            <div
              part="combobox"
              class="combobox"
              slot="anchor"
              @keydown=${this.handleComboboxKeyDown}
              @mousedown=${this.handleComboboxMouseDown}
              @click=${this.handleComboboxClick}
            >
              <slot part="start" name="start" class="start"></slot>

              <input
                part="display-input"
                class="display-input"
                type="text"
                placeholder=${this.placeholder}
                .disabled=${this.disabled}
                .value=${this.displayLabel}
                ?required=${this.required}
                autocomplete="off"
                spellcheck="false"
                autocapitalize="off"
                readonly
                aria-invalid=${!this.validity.valid}
                aria-controls="listbox"
                aria-expanded=${this.open ? "true" : "false"}
                aria-haspopup="listbox"
                aria-labelledby="label"
                aria-disabled=${this.disabled ? "true" : "false"}
                aria-describedby="hint"
                role="combobox"
                tabindex="0"
                @focus=${this.handleFocus}
              />

              <!-- Tags need to wait for first hydration before populating otherwise it will create a hydration mismatch. -->
              ${this.multiple && this.hasUpdated ? m`<div part="tags" class="tags" @wa-remove=${this.handleTagRemove}>${this.tags}</div>` : ""}

              <input
                class="value-input"
                type="text"
                ?disabled=${this.disabled}
                ?required=${this.required}
                .value=${Array.isArray(this.value) ? this.value.join(", ") : this.value}
                tabindex="-1"
                aria-hidden="true"
                @focus=${() => this.focus()}
              />

              ${t ? m`
                    <button
                      part="clear-button"
                      type="button"
                      aria-label=${this.localize.term("clearEntry")}
                      @mousedown=${this.handleClearMouseDown}
                      @click=${this.handleClearClick}
                      tabindex="-1"
                    >
                      <slot name="clear-icon">
                        <wa-icon name="circle-xmark" library="system" variant="regular"></wa-icon>
                      </slot>
                    </button>
                  ` : ""}

              <slot name="end" part="end" class="end"></slot>

              <slot name="expand-icon" part="expand-icon" class="expand-icon">
                <wa-icon library="system" name="chevron-down" variant="solid"></wa-icon>
              </slot>
            </div>

            <div
              id="listbox"
              role="listbox"
              aria-expanded=${this.open ? "true" : "false"}
              aria-multiselectable=${this.multiple ? "true" : "false"}
              aria-labelledby="label"
              part="listbox"
              class="listbox"
              tabindex="-1"
              @mouseup=${this.handleOptionClick}
            >
              <slot @slotchange=${this.handleDefaultSlotChange}></slot>
            </div>
          </wa-popup>
        </div>

        <slot
          id="hint"
          name="hint"
          part="hint"
          class=${Y({
      "has-slotted": r
    })}
          aria-hidden=${r ? "false" : "true"}
          >${this.hint}</slot
        >
      </div>
    `;
  }
};
x.css = [wl, oa, Uo];
s([
  z(".select")
], x.prototype, "popup", 2);
s([
  z(".combobox")
], x.prototype, "combobox", 2);
s([
  z(".display-input")
], x.prototype, "displayInput", 2);
s([
  z(".value-input")
], x.prototype, "valueInput", 2);
s([
  z(".listbox")
], x.prototype, "listbox", 2);
s([
  eo()
], x.prototype, "displayLabel", 2);
s([
  eo()
], x.prototype, "currentOption", 2);
s([
  eo()
], x.prototype, "selectedOptions", 2);
s([
  eo()
], x.prototype, "optionValues", 2);
s([
  u({ reflect: !0 })
], x.prototype, "name", 2);
s([
  u({
    attribute: !1
  })
], x.prototype, "defaultValue", 1);
s([
  u({ attribute: "value", reflect: !1 })
], x.prototype, "value", 1);
s([
  u({ reflect: !0 })
], x.prototype, "size", 2);
s([
  u()
], x.prototype, "placeholder", 2);
s([
  u({ type: Boolean, reflect: !0 })
], x.prototype, "multiple", 2);
s([
  u({ attribute: "max-options-visible", type: Number })
], x.prototype, "maxOptionsVisible", 2);
s([
  u({ type: Boolean })
], x.prototype, "disabled", 2);
s([
  u({ attribute: "with-clear", type: Boolean })
], x.prototype, "withClear", 2);
s([
  u({ type: Boolean, reflect: !0 })
], x.prototype, "open", 2);
s([
  u({ reflect: !0 })
], x.prototype, "appearance", 2);
s([
  u({ type: Boolean, reflect: !0 })
], x.prototype, "pill", 2);
s([
  u()
], x.prototype, "label", 2);
s([
  u({ reflect: !0 })
], x.prototype, "placement", 2);
s([
  u({ attribute: "hint" })
], x.prototype, "hint", 2);
s([
  u({ attribute: "with-label", type: Boolean })
], x.prototype, "withLabel", 2);
s([
  u({ attribute: "with-hint", type: Boolean })
], x.prototype, "withHint", 2);
s([
  u({ type: Boolean, reflect: !0 })
], x.prototype, "required", 2);
s([
  u({ attribute: !1 })
], x.prototype, "getTag", 2);
s([
  j("disabled", { waitUntilFirstUpdate: !0 })
], x.prototype, "handleDisabledChange", 1);
s([
  j("value", { waitUntilFirstUpdate: !0 })
], x.prototype, "handleValueChange", 1);
s([
  j("open", { waitUntilFirstUpdate: !0 })
], x.prototype, "handleOpenChange", 1);
x = s([
  X("wa-select")
], x);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var vl = class extends Event {
  constructor() {
    super("wa-remove", { bubbles: !0, cancelable: !1, composed: !0 });
  }
};
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var fl = D`
  @layer wa-component {
    :host {
      display: inline-flex;
      gap: 0.5em;
      border-radius: var(--wa-border-radius-m);
      align-items: center;
      background-color: var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet));
      border-color: var(--wa-color-border-normal, var(--wa-color-neutral-border-normal));
      border-style: var(--wa-border-style);
      border-width: var(--wa-border-width-s);
      color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
      font-size: inherit;
      line-height: 1;
      white-space: nowrap;
      user-select: none;
      -webkit-user-select: none;
      height: calc(var(--wa-form-control-height) * 0.8);
      line-height: calc(var(--wa-form-control-height) - var(--wa-form-control-border-width) * 2);
      padding: 0 0.75em;
    }

    /* Appearance modifiers */
    :host([appearance='outlined']) {
      color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
      background-color: transparent;
      border-color: var(--wa-color-border-loud, var(--wa-color-neutral-border-loud));
    }

    :host([appearance='filled']) {
      color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
      background-color: var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet));
      border-color: transparent;
    }

    :host([appearance='filled-outlined']) {
      color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
      background-color: var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet));
      border-color: var(--wa-color-border-normal, var(--wa-color-neutral-border-normal));
    }

    :host([appearance='accent']) {
      color: var(--wa-color-on-loud, var(--wa-color-neutral-on-loud));
      background-color: var(--wa-color-fill-loud, var(--wa-color-neutral-fill-loud));
      border-color: transparent;
    }
  }

  .content {
    font-size: var(--wa-font-size-smaller);
  }

  [part='remove-button'] {
    line-height: 1;
  }

  [part='remove-button']::part(base) {
    padding: 0;
    height: 1em;
    width: 1em;
    color: currentColor;
  }

  @media (hover: hover) {
    :host(:hover) > [part='remove-button']::part(base) {
      background-color: transparent;
      color: color-mix(in oklab, currentColor, var(--wa-color-mix-hover));
    }
  }

  :host(:active) > [part='remove-button']::part(base) {
    background-color: transparent;
    color: color-mix(in oklab, currentColor, var(--wa-color-mix-active));
  }

  /*
   * Pill modifier
   */
  :host([pill]) {
    border-radius: var(--wa-border-radius-pill);
  }
`;
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var yr = D`
  :where(:root),
  .wa-neutral,
  :host([variant='neutral']) {
    --wa-color-fill-loud: var(--wa-color-neutral-fill-loud);
    --wa-color-fill-normal: var(--wa-color-neutral-fill-normal);
    --wa-color-fill-quiet: var(--wa-color-neutral-fill-quiet);
    --wa-color-border-loud: var(--wa-color-neutral-border-loud);
    --wa-color-border-normal: var(--wa-color-neutral-border-normal);
    --wa-color-border-quiet: var(--wa-color-neutral-border-quiet);
    --wa-color-on-loud: var(--wa-color-neutral-on-loud);
    --wa-color-on-normal: var(--wa-color-neutral-on-normal);
    --wa-color-on-quiet: var(--wa-color-neutral-on-quiet);
  }

  .wa-brand,
  :host([variant='brand']) {
    --wa-color-fill-loud: var(--wa-color-brand-fill-loud);
    --wa-color-fill-normal: var(--wa-color-brand-fill-normal);
    --wa-color-fill-quiet: var(--wa-color-brand-fill-quiet);
    --wa-color-border-loud: var(--wa-color-brand-border-loud);
    --wa-color-border-normal: var(--wa-color-brand-border-normal);
    --wa-color-border-quiet: var(--wa-color-brand-border-quiet);
    --wa-color-on-loud: var(--wa-color-brand-on-loud);
    --wa-color-on-normal: var(--wa-color-brand-on-normal);
    --wa-color-on-quiet: var(--wa-color-brand-on-quiet);
  }

  .wa-success,
  :host([variant='success']) {
    --wa-color-fill-loud: var(--wa-color-success-fill-loud);
    --wa-color-fill-normal: var(--wa-color-success-fill-normal);
    --wa-color-fill-quiet: var(--wa-color-success-fill-quiet);
    --wa-color-border-loud: var(--wa-color-success-border-loud);
    --wa-color-border-normal: var(--wa-color-success-border-normal);
    --wa-color-border-quiet: var(--wa-color-success-border-quiet);
    --wa-color-on-loud: var(--wa-color-success-on-loud);
    --wa-color-on-normal: var(--wa-color-success-on-normal);
    --wa-color-on-quiet: var(--wa-color-success-on-quiet);
  }

  .wa-warning,
  :host([variant='warning']) {
    --wa-color-fill-loud: var(--wa-color-warning-fill-loud);
    --wa-color-fill-normal: var(--wa-color-warning-fill-normal);
    --wa-color-fill-quiet: var(--wa-color-warning-fill-quiet);
    --wa-color-border-loud: var(--wa-color-warning-border-loud);
    --wa-color-border-normal: var(--wa-color-warning-border-normal);
    --wa-color-border-quiet: var(--wa-color-warning-border-quiet);
    --wa-color-on-loud: var(--wa-color-warning-on-loud);
    --wa-color-on-normal: var(--wa-color-warning-on-normal);
    --wa-color-on-quiet: var(--wa-color-warning-on-quiet);
  }

  .wa-danger,
  :host([variant='danger']) {
    --wa-color-fill-loud: var(--wa-color-danger-fill-loud);
    --wa-color-fill-normal: var(--wa-color-danger-fill-normal);
    --wa-color-fill-quiet: var(--wa-color-danger-fill-quiet);
    --wa-color-border-loud: var(--wa-color-danger-border-loud);
    --wa-color-border-normal: var(--wa-color-danger-border-normal);
    --wa-color-border-quiet: var(--wa-color-danger-border-quiet);
    --wa-color-on-loud: var(--wa-color-danger-on-loud);
    --wa-color-on-normal: var(--wa-color-danger-on-normal);
    --wa-color-on-quiet: var(--wa-color-danger-on-quiet);
  }
`;
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Co = class extends Z {
  constructor() {
    super(...arguments), this.localize = new $o(this), this.variant = "neutral", this.appearance = "filled-outlined", this.size = "medium", this.pill = !1, this.withRemove = !1;
  }
  handleRemoveClick() {
    this.dispatchEvent(new vl());
  }
  render() {
    return m`
      <slot part="content" class="content"></slot>

      ${this.withRemove ? m`
            <wa-button
              part="remove-button"
              exportparts="base:remove-button__base"
              class="remove"
              appearance="plain"
              @click=${this.handleRemoveClick}
              tabindex="-1"
            >
              <wa-icon name="xmark" library="system" variant="solid" label=${this.localize.term("remove")}></wa-icon>
            </wa-button>
          ` : ""}
    `;
  }
};
Co.css = [fl, yr, Uo];
s([
  u({ reflect: !0 })
], Co.prototype, "variant", 2);
s([
  u({ reflect: !0 })
], Co.prototype, "appearance", 2);
s([
  u({ reflect: !0 })
], Co.prototype, "size", 2);
s([
  u({ type: Boolean, reflect: !0 })
], Co.prototype, "pill", 2);
s([
  u({ attribute: "with-remove", type: Boolean })
], Co.prototype, "withRemove", 2);
Co = s([
  X("wa-tag")
], Co);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var gl = D`
  :host {
    display: block;
    color: var(--wa-color-text-normal);
    -webkit-user-select: none;
    user-select: none;

    position: relative;
    display: flex;
    align-items: center;
    font: inherit;
    padding: 0.5em 1em 0.5em 0.25em;
    line-height: var(--wa-line-height-condensed);
    transition: fill var(--wa-transition-normal) var(--wa-transition-easing);
    cursor: pointer;
  }

  :host(:focus) {
    outline: none;
  }

  @media (hover: hover) {
    :host(:not([disabled], :state(current)):is(:state(hover), :hover)) {
      background-color: var(--wa-color-neutral-fill-normal);
      color: var(--wa-color-neutral-on-normal);
    }
  }

  :host(:state(current)),
  :host([disabled]:state(current)) {
    background-color: var(--wa-color-brand-fill-loud);
    color: var(--wa-color-brand-on-loud);
    opacity: 1;
  }

  :host([disabled]) {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .label {
    flex: 1 1 auto;
    display: inline-block;
  }

  .check {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: var(--wa-font-size-smaller);
    visibility: hidden;
    width: 2em;
  }

  :host(:state(selected)) .check {
    visibility: visible;
  }

  .start,
  .end {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .start::slotted(*) {
    margin-inline-end: 0.5em;
  }

  .end::slotted(*) {
    margin-inline-start: 0.5em;
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }
`;
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function Go(o, e = 0) {
  if (!o || !globalThis.Node)
    return "";
  if (typeof o[Symbol.iterator] == "function")
    return (Array.isArray(o) ? o : [...o]).map((t) => Go(t, --e)).join("");
  let a = o;
  if (a.nodeType === Node.TEXT_NODE)
    return a.textContent ?? "";
  if (a.nodeType === Node.ELEMENT_NODE) {
    let r = a;
    if (r.hasAttribute("slot") || r.matches("style, script"))
      return "";
    if (r instanceof HTMLSlotElement) {
      let t = r.assignedNodes({ flatten: !0 });
      if (t.length > 0)
        return Go(t, --e);
    }
    return e > -1 ? Go(r, --e) : r.textContent ?? "";
  }
  return a.hasChildNodes() ? Go(a.childNodes, --e) : "";
}
var io = class extends Z {
  constructor() {
    super(...arguments), this.localize = new $o(this), this.cachedDefaultLabel = "", this.isInitialized = !1, this.isDefaultLabelDirty = !0, this.current = !1, this.value = "", this.disabled = !1, this.selected = !1, this.defaultSelected = !1, this._label = "", this.handleHover = (o) => {
      o.type === "mouseenter" ? this.customStates.set("hover", !0) : o.type === "mouseleave" && this.customStates.set("hover", !1);
    };
  }
  set label(o) {
    const e = this._label;
    this._label = o || "", this._label !== e && this.requestUpdate("label", e);
  }
  get label() {
    return this._label ? this._label : this.defaultLabel;
  }
  /** The default label, generated from the element contents. Will be equal to `label` in most cases. */
  get defaultLabel() {
    return (this.isDefaultLabelDirty || !this.cachedDefaultLabel) && this.updateDefaultLabel(), this.cachedDefaultLabel;
  }
  connectedCallback() {
    super.connectedCallback(), this.setAttribute("role", "option"), this.setAttribute("aria-selected", "false"), this.addEventListener("mouseenter", this.handleHover), this.addEventListener("mouseleave", this.handleHover);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.removeEventListener("mouseenter", this.handleHover), this.removeEventListener("mouseleave", this.handleHover);
  }
  handleDefaultSlotChange() {
    this.isDefaultLabelDirty = !0, this.isInitialized ? (customElements.whenDefined("wa-select").then(() => {
      const o = this.closest("wa-select");
      o && o.handleDefaultSlotChange();
    }), customElements.whenDefined("wa-combobox").then(() => {
      const o = this.closest("wa-combobox");
      o && o.handleDefaultSlotChange();
    })) : this.isInitialized = !0;
  }
  willUpdate(o) {
    var e;
    if (o.has("defaultSelected") && !((e = this.closest("wa-combobox, wa-select")) != null && e.hasInteracted) && this.defaultSelected) {
      const a = this.selected;
      this.selected = this.defaultSelected, this.requestUpdate("selected", a);
    }
    super.willUpdate(o);
  }
  updated(o) {
    super.updated(o), o.has("disabled") && this.setAttribute("aria-disabled", this.disabled ? "true" : "false"), o.has("selected") && (this.setAttribute("aria-selected", this.selected ? "true" : "false"), this.customStates.set("selected", this.selected), this.handleDefaultSlotChange()), o.has("value") && (typeof this.value != "string" && (this.value = String(this.value)), this.handleDefaultSlotChange()), o.has("current") && this.customStates.set("current", this.current);
  }
  firstUpdated(o) {
    var e;
    if (super.firstUpdated(o), this.selected && !this.defaultSelected) {
      const a = this.closest("wa-select, wa-combobox");
      a && !a.hasInteracted && ((e = a.selectionChanged) == null || e.call(a));
    }
  }
  updateDefaultLabel() {
    let o = this.cachedDefaultLabel;
    this.cachedDefaultLabel = Go(this).trim(), this.isDefaultLabelDirty = !1;
    let e = this.cachedDefaultLabel !== o;
    return !this._label && e && this.requestUpdate("label", o), e;
  }
  render() {
    return m`
      ${this.selected ? m`<wa-icon
            part="checked-icon"
            class="check"
            name="check"
            library="system"
            variant="solid"
            aria-hidden="true"
          ></wa-icon>` : m`<span part="checked-icon" class="check" aria-hidden="true"></span>`}
      <slot part="start" name="start" class="start"></slot>
      <slot part="label" class="label" @slotchange=${this.handleDefaultSlotChange}></slot>
      <slot part="end" name="end" class="end"></slot>
    `;
  }
};
io.css = gl;
s([
  z(".label")
], io.prototype, "defaultSlot", 2);
s([
  eo()
], io.prototype, "current", 2);
s([
  u({ reflect: !0 })
], io.prototype, "value", 2);
s([
  u({ type: Boolean })
], io.prototype, "disabled", 2);
s([
  u({ type: Boolean, attribute: !1 })
], io.prototype, "selected", 2);
s([
  u({ type: Boolean, attribute: "selected" })
], io.prototype, "defaultSelected", 2);
s([
  u()
], io.prototype, "label", 1);
io = s([
  X("wa-option")
], io);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var ml = () => ({
  checkValidity(o) {
    const e = o.input, a = {
      message: "",
      isValid: !0,
      invalidKeys: []
    };
    if (!e)
      return a;
    let r = !0;
    if ("checkValidity" in e && (r = e.checkValidity()), r)
      return a;
    if (a.isValid = !1, "validationMessage" in e && (a.message = e.validationMessage), !("validity" in e))
      return a.invalidKeys.push("customError"), a;
    for (const t in e.validity) {
      if (t === "valid")
        continue;
      const l = t;
      e.validity[l] && a.invalidKeys.push(l);
    }
    return a;
  }
});
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var bl = D`
  @layer wa-component {
    :host {
      display: inline-block;

      /* Workaround because Chrome doesn't like :host(:has()) below
       * https://issues.chromium.org/issues/40062355
       * Firefox doesn't like this nested rule, so both are needed */
      &:has(wa-badge) {
        position: relative;
      }
    }

    /* Apply relative positioning only when needed to position wa-badge
     * This avoids creating a new stacking context for every button */
    :host(:has(wa-badge)) {
      position: relative;
    }
  }

  .button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    transition-property: background, border, box-shadow, color, opacity;
    transition-duration: var(--wa-transition-fast);
    transition-timing-function: var(--wa-transition-easing);
    cursor: pointer;
    padding: 0 var(--wa-form-control-padding-inline);
    font-family: inherit;
    font-size: inherit;
    font-weight: var(--wa-font-weight-action);
    line-height: calc(var(--wa-form-control-height) - var(--wa-form-control-border-width) * 2);
    height: var(--wa-form-control-height);
    width: 100%;

    background-color: var(--wa-color-fill-loud, var(--wa-color-neutral-fill-loud));
    border-color: transparent;
    color: var(--wa-color-on-loud, var(--wa-color-neutral-on-loud));
    border-start-start-radius: var(--_button-start-start-radius, var(--wa-form-control-border-radius));
    border-start-end-radius: var(--_button-start-end-radius, var(--wa-form-control-border-radius));
    border-end-start-radius: var(--_button-end-start-radius, var(--wa-form-control-border-radius));
    border-end-end-radius: var(--_button-end-end-radius, var(--wa-form-control-border-radius));
    border-style: var(--wa-form-control-border-style);
    border-width: var(--wa-form-control-border-width);
  }

  /* Appearance modifiers */
  :host([appearance='plain']) {
    /* Indentation overrides for grouping */
    margin-inline-start: var(--_button-horizontal-indent);
    margin-block-start: var(--_button-vertical-indent);

    .button {
      color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
      background-color: transparent;
      border-color: transparent;
    }
    @media (hover: hover) {
      .button:not(.disabled):not(.loading):hover {
        color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
        background-color: var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet));
      }
    }
    .button:not(.disabled):not(.loading):active {
      color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
      background-color: color-mix(
        in oklab,
        var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)),
        var(--wa-color-mix-active)
      );
    }
  }

  :host([appearance='outlined']) {
    /* Indentation overrides for grouping outlined */
    margin-inline-start: var(--_button-horizontal-indent-outlined);
    margin-block-start: var(--_button-vertical-indent-outlined);

    .button {
      color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
      background-color: transparent;
      border-color: var(--wa-color-border-loud, var(--wa-color-neutral-border-loud));
    }
    @media (hover: hover) {
      .button:not(.disabled):not(.loading):hover {
        color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
        background-color: var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet));
      }
    }
    .button:not(.disabled):not(.loading):active {
      color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
      background-color: color-mix(
        in oklab,
        var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)),
        var(--wa-color-mix-active)
      );
    }
  }

  :host([appearance='filled']) {
    /* Indentation overrides for grouping */
    margin-inline-start: var(--_button-horizontal-indent);
    margin-block-start: var(--_button-vertical-indent);

    .button {
      color: var(--wa-color-on-normal, var(--wa-color-neutral-on-normal));
      background-color: var(--wa-color-fill-normal, var(--wa-color-neutral-fill-normal));
      border-color: transparent;
    }
    @media (hover: hover) {
      .button:not(.disabled):not(.loading):hover {
        color: var(--wa-color-on-normal, var(--wa-color-neutral-on-normal));
        background-color: color-mix(
          in oklab,
          var(--wa-color-fill-normal, var(--wa-color-neutral-fill-normal)),
          var(--wa-color-mix-hover)
        );
      }
    }
    .button:not(.disabled):not(.loading):active {
      color: var(--wa-color-on-normal, var(--wa-color-neutral-on-normal));
      background-color: color-mix(
        in oklab,
        var(--wa-color-fill-normal, var(--wa-color-neutral-fill-normal)),
        var(--wa-color-mix-active)
      );
    }
  }

  :host([appearance='filled-outlined']) {
    /* Indentation overrides for grouping outlined */
    margin-inline-start: var(--_button-horizontal-indent-outlined);
    margin-block-start: var(--_button-vertical-indent-outlined);

    .button {
      color: var(--wa-color-on-normal, var(--wa-color-neutral-on-normal));
      background-color: var(--wa-color-fill-normal, var(--wa-color-neutral-fill-normal));
      border-color: var(--wa-color-border-normal, var(--wa-color-neutral-border-normal));
    }
    @media (hover: hover) {
      .button:not(.disabled):not(.loading):hover {
        color: var(--wa-color-on-normal, var(--wa-color-neutral-on-normal));
        background-color: color-mix(
          in oklab,
          var(--wa-color-fill-normal, var(--wa-color-neutral-fill-normal)),
          var(--wa-color-mix-hover)
        );
      }
    }
    .button:not(.disabled):not(.loading):active {
      color: var(--wa-color-on-normal, var(--wa-color-neutral-on-normal));
      background-color: color-mix(
        in oklab,
        var(--wa-color-fill-normal, var(--wa-color-neutral-fill-normal)),
        var(--wa-color-mix-active)
      );
    }
  }

  :host([appearance='accent']) {
    /* Indentation overrides for grouping */
    margin-inline-start: var(--_button-horizontal-indent);
    margin-block-start: var(--_button-vertical-indent);

    .button {
      color: var(--wa-color-on-loud, var(--wa-color-neutral-on-loud));
      background-color: var(--wa-color-fill-loud, var(--wa-color-neutral-fill-loud));
      border-color: transparent;
    }
    @media (hover: hover) {
      .button:not(.disabled):not(.loading):hover {
        background-color: color-mix(
          in oklab,
          var(--wa-color-fill-loud, var(--wa-color-neutral-fill-loud)),
          var(--wa-color-mix-hover)
        );
      }
    }
    .button:not(.disabled):not(.loading):active {
      background-color: color-mix(
        in oklab,
        var(--wa-color-fill-loud, var(--wa-color-neutral-fill-loud)),
        var(--wa-color-mix-active)
      );
    }
  }

  /* Focus states */
  .button:focus {
    outline: none;
  }

  .button:focus-visible {
    outline: var(--wa-focus-ring);
    outline-offset: var(--wa-focus-ring-offset);
  }

  /* Disabled state */
  :host([disabled]) {
    opacity: 0.5;
    cursor: not-allowed;

    /* When disabled, prevent mouse events from bubbling up from children */
    .button {
      pointer-events: none;
    }
  }

  /* Keep it last so Safari doesn't stop parsing this block */
  .button::-moz-focus-inner {
    border: 0;
  }

  /* Icon buttons */
  .button.is-icon-button {
    outline-offset: 2px;
    width: var(--wa-form-control-height);
    aspect-ratio: 1;
  }

  .button.is-icon-button:has(wa-icon) {
    width: auto;
  }

  /* Pill modifier */
  :host([pill]) .button {
    border-start-start-radius: var(--_button-start-start-radius, var(--wa-border-radius-pill));
    border-start-end-radius: var(--_button-start-end-radius, var(--wa-border-radius-pill));
    border-end-start-radius: var(--_button-end-start-radius, var(--wa-border-radius-pill));
    border-end-end-radius: var(--_button-end-end-radius, var(--wa-border-radius-pill));
  }

  /*
   * Label
   */

  .start,
  .end {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    pointer-events: none;
  }

  .label {
    display: inline-block;
  }

  .is-icon-button .label {
    display: flex;
  }

  .label::slotted(wa-icon) {
    align-self: center;
  }

  /*
   * Caret modifier
   */

  wa-icon[part='caret'] {
    display: flex;
    align-self: center;
    align-items: center;

    &::part(svg) {
      width: 0.875em;
      height: 0.875em;
    }

    .button:has(&) .end {
      display: none;
    }
  }

  /*
   * Loading modifier
   */

  .loading {
    position: relative;
    cursor: wait;

    .start,
    .label,
    .end,
    .caret {
      visibility: hidden;
    }

    wa-spinner {
      --indicator-color: currentColor;
      --track-color: color-mix(in oklab, currentColor, transparent 90%);

      position: absolute;
      font-size: 1em;
      height: 1em;
      width: 1em;
      top: calc(50% - 0.5em);
      left: calc(50% - 0.5em);
    }
  }

  /*
   * Badges
   */

  .button ::slotted(wa-badge) {
    border-color: var(--wa-color-surface-default);
    position: absolute;
    inset-block-start: 0;
    inset-inline-end: 0;
    translate: 50% -50%;
    pointer-events: none;
  }

  :host(:dir(rtl)) ::slotted(wa-badge) {
    translate: -50% -50%;
  }

  /*
  * Button spacing
  */

  slot[name='start']::slotted(*) {
    margin-inline-end: 0.75em;
  }

  slot[name='end']::slotted(*),
  .button:not(.visually-hidden-label) [part='caret'] {
    margin-inline-start: 0.75em;
  }
`;
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const K = (o) => o ?? A;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const xr = Symbol.for(""), yl = (o) => {
  if ((o == null ? void 0 : o.r) === xr) return o == null ? void 0 : o._$litStatic$;
}, Ra = (o, ...e) => ({ _$litStatic$: e.reduce((a, r, t) => a + ((l) => {
  if (l._$litStatic$ !== void 0) return l._$litStatic$;
  throw Error(`Value passed to 'literal' function must be a 'literal' result: ${l}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`);
})(r) + o[t + 1], o[0]), r: xr }), Ma = /* @__PURE__ */ new Map(), xl = (o) => (e, ...a) => {
  const r = a.length;
  let t, l;
  const n = [], i = [];
  let c, w = 0, d = !1;
  for (; w < r; ) {
    for (c = e[w]; w < r && (l = a[w], (t = yl(l)) !== void 0); ) c += t + e[++w], d = !0;
    w !== r && i.push(l), n.push(c), w++;
  }
  if (w === r && n.push(e[r]), d) {
    const h = n.join("$$lit$$");
    (e = Ma.get(h)) === void 0 && (n.raw = n, Ma.set(h, e = n)), a = i;
  }
  return o(e, ...a);
}, qe = xl(m);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var $ = class extends U {
  constructor() {
    super(...arguments), this.assumeInteractionOn = ["click"], this.hasSlotController = new te(this, "[default]", "start", "end"), this.localize = new $o(this), this.invalid = !1, this.isIconButton = !1, this.title = "", this.variant = "neutral", this.appearance = "accent", this.size = "medium", this.withCaret = !1, this.disabled = !1, this.loading = !1, this.pill = !1, this.type = "button";
  }
  static get validators() {
    return [...super.validators, ml()];
  }
  constructLightDOMButton() {
    const o = document.createElement("button");
    for (const e of this.attributes)
      e.name !== "style" && o.setAttribute(e.name, e.value);
    return o.type = this.type, o.style.position = "absolute !important", o.style.width = "0 !important", o.style.height = "0 !important", o.style.clipPath = "inset(50%) !important", o.style.overflow = "hidden !important", o.style.whiteSpace = "nowrap !important", this.name && (o.name = this.name), o.value = this.value || "", o;
  }
  handleClick(o) {
    var r;
    if (this.disabled || this.loading) {
      o.preventDefault(), o.stopImmediatePropagation();
      return;
    }
    if (this.type !== "submit" && this.type !== "reset" || !this.getForm()) return;
    const a = this.constructLightDOMButton();
    (r = this.parentElement) == null || r.append(a), a.click(), a.remove();
  }
  handleInvalid() {
    this.dispatchEvent(new Za());
  }
  handleLabelSlotChange() {
    const o = this.labelSlot.assignedNodes({ flatten: !0 });
    let e = !1, a = !1, r = !1, t = !1;
    [...o].forEach((l) => {
      var n;
      if (l.nodeType === Node.ELEMENT_NODE) {
        const i = l;
        i.localName === "wa-icon" ? (a = !0, e || (e = i.label !== void 0)) : t = !0;
      } else l.nodeType === Node.TEXT_NODE && (((n = l.textContent) == null ? void 0 : n.trim()) || "").length > 0 && (r = !0);
    }), this.isIconButton = a && !r && !t, this.isIconButton && !e && console.warn(
      'Icon buttons must have a label for screen readers. Add <wa-icon label="..."> to remove this warning.',
      this
    );
  }
  isButton() {
    return !this.href;
  }
  isLink() {
    return !!this.href;
  }
  handleDisabledChange() {
    this.updateValidity();
  }
  // eslint-disable-next-line
  setValue(...o) {
  }
  /** Simulates a click on the button. */
  click() {
    this.button.click();
  }
  /** Sets focus on the button. */
  focus(o) {
    this.button.focus(o);
  }
  /** Removes focus from the button. */
  blur() {
    this.button.blur();
  }
  render() {
    const o = this.isLink(), e = o ? Ra`a` : Ra`button`;
    return qe`
      <${e}
        part="base"
        class=${Y({
      button: !0,
      caret: this.withCaret,
      disabled: this.disabled,
      loading: this.loading,
      rtl: this.localize.dir() === "rtl",
      "has-label": this.hasSlotController.test("[default]"),
      "has-start": this.hasSlotController.test("start"),
      "has-end": this.hasSlotController.test("end"),
      "is-icon-button": this.isIconButton
    })}
        ?disabled=${K(o ? void 0 : this.disabled)}
        type=${K(o ? void 0 : this.type)}
        title=${this.title}
        name=${K(o ? void 0 : this.name)}
        value=${K(o ? void 0 : this.value)}
        href=${K(o ? this.href : void 0)}
        target=${K(o ? this.target : void 0)}
        download=${K(o ? this.download : void 0)}
        rel=${K(o && this.rel ? this.rel : void 0)}
        role=${K(o ? void 0 : "button")}
        aria-disabled=${K(o && this.disabled ? "true" : void 0)}
        tabindex=${this.disabled ? "-1" : "0"}
        @invalid=${this.isButton() ? this.handleInvalid : null}
        @click=${this.handleClick}
      >
        <slot name="start" part="start" class="start"></slot>
        <slot part="label" class="label" @slotchange=${this.handleLabelSlotChange}></slot>
        <slot name="end" part="end" class="end"></slot>
        ${this.withCaret ? qe`
                <wa-icon part="caret" class="caret" library="system" name="chevron-down" variant="solid"></wa-icon>
              ` : ""}
        ${this.loading ? qe`<wa-spinner part="spinner"></wa-spinner>` : ""}
      </${e}>
    `;
  }
};
$.shadowRootOptions = { ...U.shadowRootOptions, delegatesFocus: !0 };
$.css = [bl, yr, Uo];
s([
  z(".button")
], $.prototype, "button", 2);
s([
  z("slot:not([name])")
], $.prototype, "labelSlot", 2);
s([
  eo()
], $.prototype, "invalid", 2);
s([
  eo()
], $.prototype, "isIconButton", 2);
s([
  u()
], $.prototype, "title", 2);
s([
  u({ reflect: !0 })
], $.prototype, "variant", 2);
s([
  u({ reflect: !0 })
], $.prototype, "appearance", 2);
s([
  u({ reflect: !0 })
], $.prototype, "size", 2);
s([
  u({ attribute: "with-caret", type: Boolean, reflect: !0 })
], $.prototype, "withCaret", 2);
s([
  u({ type: Boolean })
], $.prototype, "disabled", 2);
s([
  u({ type: Boolean, reflect: !0 })
], $.prototype, "loading", 2);
s([
  u({ type: Boolean, reflect: !0 })
], $.prototype, "pill", 2);
s([
  u()
], $.prototype, "type", 2);
s([
  u({ reflect: !0 })
], $.prototype, "name", 2);
s([
  u({ reflect: !0 })
], $.prototype, "value", 2);
s([
  u({ reflect: !0 })
], $.prototype, "href", 2);
s([
  u()
], $.prototype, "target", 2);
s([
  u()
], $.prototype, "rel", 2);
s([
  u()
], $.prototype, "download", 2);
s([
  u({ attribute: "formaction" })
], $.prototype, "formAction", 2);
s([
  u({ attribute: "formenctype" })
], $.prototype, "formEnctype", 2);
s([
  u({ attribute: "formmethod" })
], $.prototype, "formMethod", 2);
s([
  u({ attribute: "formnovalidate", type: Boolean })
], $.prototype, "formNoValidate", 2);
s([
  u({ attribute: "formtarget" })
], $.prototype, "formTarget", 2);
s([
  j("disabled", { waitUntilFirstUpdate: !0 })
], $.prototype, "handleDisabledChange", 1);
$ = s([
  X("wa-button")
], $);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var kl = D`
  :host {
    --track-width: 2px;
    --track-color: var(--wa-color-neutral-fill-normal);
    --indicator-color: var(--wa-color-brand-fill-loud);
    --speed: 2s;

    /*
      Resizing a spinner element using anything but font-size will break the animation because the animation uses em
      units. Therefore, if a spinner is used in a flex container without \`flex: none\` applied, the spinner can
      grow/shrink and break the animation. The use of \`flex: none\` on the host element prevents this by always having
      the spinner sized according to its actual dimensions.
    */
    flex: none;
    display: inline-flex;
    width: 1em;
    height: 1em;
  }

  svg {
    width: 100%;
    height: 100%;
    aspect-ratio: 1;
    animation: spin var(--speed) linear infinite;
  }

  .track {
    stroke: var(--track-color);
  }

  .indicator {
    stroke: var(--indicator-color);
    stroke-dasharray: 75, 100;
    stroke-dashoffset: -5;
    animation: dash 1.5s ease-in-out infinite;
    stroke-linecap: round;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`;
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Ke = class extends Z {
  constructor() {
    super(...arguments), this.localize = new $o(this);
  }
  render() {
    return m`
      <svg
        part="base"
        role="progressbar"
        aria-label=${this.localize.term("loading")}
        fill="none"
        viewBox="0 0 50 50"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle class="track" cx="25" cy="25" r="20" fill="none" stroke-width="5" />
        <circle class="indicator" cx="25" cy="25" r="20" fill="none" stroke-width="5" />
      </svg>
    `;
  }
};
Ke.css = kl;
Ke = s([
  X("wa-spinner")
], Ke);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Cl = class extends Event {
  constructor() {
    super("wa-error", { bubbles: !0, cancelable: !1, composed: !0 });
  }
};
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var $l = D`
  :host {
    --primary-color: currentColor;
    --primary-opacity: 1;
    --secondary-color: currentColor;
    --secondary-opacity: 0.4;
    --rotate-angle: 0deg;

    box-sizing: content-box;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    vertical-align: -0.125em;
  }

  /* Standard */
  :host(:not([auto-width])) {
    width: 1.25em;
    height: 1em;
  }

  /* Auto-width */
  :host([auto-width]) {
    width: auto;
    height: 1em;
  }

  svg {
    height: 1em;
    overflow: visible;
    width: auto;

    /* Duotone colors with path-specific opacity fallback */
    path[data-duotone-primary] {
      color: var(--primary-color);
      opacity: var(--path-opacity, var(--primary-opacity));
    }

    path[data-duotone-secondary] {
      color: var(--secondary-color);
      opacity: var(--path-opacity, var(--secondary-opacity));
    }
  }

  /* Rotation */
  :host([rotate]) {
    transform: rotate(var(--rotate-angle, 0deg));
  }

  /* Flipping */
  :host([flip='x']) {
    transform: scaleX(-1);
  }
  :host([flip='y']) {
    transform: scaleY(-1);
  }
  :host([flip='both']) {
    transform: scale(-1, -1);
  }

  /* Rotation and Flipping combined */
  :host([rotate][flip='x']) {
    transform: rotate(var(--rotate-angle, 0deg)) scaleX(-1);
  }
  :host([rotate][flip='y']) {
    transform: rotate(var(--rotate-angle, 0deg)) scaleY(-1);
  }
  :host([rotate][flip='both']) {
    transform: rotate(var(--rotate-angle, 0deg)) scale(-1, -1);
  }

  /* Animations */
  :host([animation='beat']) {
    animation-name: beat;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 1s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, ease-in-out);
  }

  :host([animation='fade']) {
    animation-name: fade;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 1s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
  }

  :host([animation='beat-fade']) {
    animation-name: beat-fade;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 1s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
  }

  :host([animation='bounce']) {
    animation-name: bounce;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 1s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
  }

  :host([animation='flip']) {
    animation-name: flip;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 1s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, ease-in-out);
  }

  :host([animation='shake']) {
    animation-name: shake;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 1s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, linear);
  }

  :host([animation='spin']) {
    animation-name: spin;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 2s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, linear);
  }

  :host([animation='spin-pulse']) {
    animation-name: spin-pulse;
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 1s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, steps(8));
  }

  :host([animation='spin-reverse']) {
    animation-name: spin;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, reverse);
    animation-duration: var(--animation-duration, 2s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, linear);
  }

  /* Keyframes */
  @media (prefers-reduced-motion: reduce) {
    :host([animation='beat']),
    :host([animation='bounce']),
    :host([animation='fade']),
    :host([animation='beat-fade']),
    :host([animation='flip']),
    :host([animation='shake']),
    :host([animation='spin']),
    :host([animation='spin-pulse']),
    :host([animation='spin-reverse']) {
      animation: none !important;
      transition: none !important;
    }
  }
  @keyframes beat {
    0%,
    90% {
      transform: scale(1);
    }
    45% {
      transform: scale(var(--beat-scale, 1.25));
    }
  }

  @keyframes fade {
    50% {
      opacity: var(--fade-opacity, 0.4);
    }
  }

  @keyframes beat-fade {
    0%,
    100% {
      opacity: var(--beat-fade-opacity, 0.4);
      transform: scale(1);
    }
    50% {
      opacity: 1;
      transform: scale(var(--beat-fade-scale, 1.125));
    }
  }

  @keyframes bounce {
    0% {
      transform: scale(1, 1) translateY(0);
    }
    10% {
      transform: scale(var(--bounce-start-scale-x, 1.1), var(--bounce-start-scale-y, 0.9)) translateY(0);
    }
    30% {
      transform: scale(var(--bounce-jump-scale-x, 0.9), var(--bounce-jump-scale-y, 1.1))
        translateY(var(--bounce-height, -0.5em));
    }
    50% {
      transform: scale(var(--bounce-land-scale-x, 1.05), var(--bounce-land-scale-y, 0.95)) translateY(0);
    }
    57% {
      transform: scale(1, 1) translateY(var(--bounce-rebound, -0.125em));
    }
    64% {
      transform: scale(1, 1) translateY(0);
    }
    100% {
      transform: scale(1, 1) translateY(0);
    }
  }

  @keyframes flip {
    50% {
      transform: rotate3d(var(--flip-x, 0), var(--flip-y, 1), var(--flip-z, 0), var(--flip-angle, -180deg));
    }
  }

  @keyframes shake {
    0% {
      transform: rotate(-15deg);
    }
    4% {
      transform: rotate(15deg);
    }
    8%,
    24% {
      transform: rotate(-18deg);
    }
    12%,
    28% {
      transform: rotate(18deg);
    }
    16% {
      transform: rotate(-22deg);
    }
    20% {
      transform: rotate(22deg);
    }
    32% {
      transform: rotate(-12deg);
    }
    36% {
      transform: rotate(12deg);
    }
    40%,
    100% {
      transform: rotate(0deg);
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes spin-pulse {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Sl = class extends Event {
  constructor() {
    super("wa-load", { bubbles: !0, cancelable: !1, composed: !0 });
  }
};
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Ye = "";
function _l(o) {
  Ye = o;
}
function zl() {
  if (!Ye) {
    const o = document.querySelector("[data-fa-kit-code]");
    o && _l(o.getAttribute("data-fa-kit-code") || "");
  }
  return Ye;
}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var qa = "7.2.0";
function El(o, e, a) {
  const r = zl(), t = r.length > 0;
  let l = "solid";
  return e === "chisel" && (l = "chisel-regular"), e === "etch" && (l = "etch-solid"), e === "graphite" && (l = "graphite-thin"), e === "jelly" && (l = "jelly-regular", a === "duo-regular" && (l = "jelly-duo-regular"), a === "fill-regular" && (l = "jelly-fill-regular")), e === "jelly-duo" && (l = "jelly-duo-regular"), e === "jelly-fill" && (l = "jelly-fill-regular"), e === "notdog" && (a === "solid" && (l = "notdog-solid"), a === "duo-solid" && (l = "notdog-duo-solid")), e === "notdog-duo" && (l = "notdog-duo-solid"), e === "slab" && ((a === "solid" || a === "regular") && (l = "slab-regular"), a === "press-regular" && (l = "slab-press-regular")), e === "slab-press" && (l = "slab-press-regular"), e === "thumbprint" && (l = "thumbprint-light"), e === "utility" && (l = "utility-semibold"), e === "utility-duo" && (l = "utility-duo-semibold"), e === "utility-fill" && (l = "utility-fill-semibold"), e === "whiteboard" && (l = "whiteboard-semibold"), e === "classic" && (a === "thin" && (l = "thin"), a === "light" && (l = "light"), a === "regular" && (l = "regular"), a === "solid" && (l = "solid")), e === "duotone" && (a === "thin" && (l = "duotone-thin"), a === "light" && (l = "duotone-light"), a === "regular" && (l = "duotone-regular"), a === "solid" && (l = "duotone")), e === "sharp" && (a === "thin" && (l = "sharp-thin"), a === "light" && (l = "sharp-light"), a === "regular" && (l = "sharp-regular"), a === "solid" && (l = "sharp-solid")), e === "sharp-duotone" && (a === "thin" && (l = "sharp-duotone-thin"), a === "light" && (l = "sharp-duotone-light"), a === "regular" && (l = "sharp-duotone-regular"), a === "solid" && (l = "sharp-duotone-solid")), e === "brands" && (l = "brands"), t ? `https://ka-p.fontawesome.com/releases/v${qa}/svgs/${l}/${o}.svg?token=${encodeURIComponent(r)}` : `https://ka-f.fontawesome.com/releases/v${qa}/svgs/${l}/${o}.svg`;
}
var Al = {
  name: "default",
  resolver: (o, e = "classic", a = "solid") => El(o, e, a),
  mutator: (o, e) => {
    if (e != null && e.family && !o.hasAttribute("data-duotone-initialized")) {
      const { family: a, variant: r } = e;
      if (
        // Duotone
        a === "duotone" || // Sharp duotone
        a === "sharp-duotone" || // Notdog duo (correct usage: family="notdog-duo")
        a === "notdog-duo" || // NOTE: family="notdog" variant="duo-solid" is deprecated
        a === "notdog" && r === "duo-solid" || // Jelly duo (correct usage: family="jelly-duo")
        a === "jelly-duo" || // NOTE: family="jelly" variant="duo-regular" is deprecated
        a === "jelly" && r === "duo-regular" || // Utility duo (correct usage: family="utility-duo")
        a === "utility-duo" || // Thumbprint
        a === "thumbprint"
      ) {
        const t = [...o.querySelectorAll("path")], l = t.find((i) => !i.hasAttribute("opacity")), n = t.find((i) => i.hasAttribute("opacity"));
        if (!l || !n) return;
        if (l.setAttribute("data-duotone-primary", ""), n.setAttribute("data-duotone-secondary", ""), e.swapOpacity && l && n) {
          const i = n.getAttribute("opacity") || "0.4";
          l.style.setProperty("--path-opacity", i), n.style.setProperty("--path-opacity", "1");
        }
        o.setAttribute("data-duotone-initialized", "");
      }
    }
  }
}, Ll = Al;
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function Ol(o) {
  return `data:image/svg+xml,${encodeURIComponent(o)}`;
}
var De = {
  //
  // Solid variant
  //
  solid: {
    check: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z"/></svg>',
    "chevron-down": '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>',
    "chevron-left": '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>',
    "chevron-right": '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M311.1 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L243.2 256 73.9 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>',
    circle: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0z"/></svg>',
    eyedropper: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M341.6 29.2l-101.6 101.6-9.4-9.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-9.4-9.4 101.6-101.6c39-39 39-102.2 0-141.1s-102.2-39-141.1 0zM55.4 323.3c-15 15-23.4 35.4-23.4 56.6l0 42.4-26.6 39.9c-8.5 12.7-6.8 29.6 4 40.4s27.7 12.5 40.4 4l39.9-26.6 42.4 0c21.2 0 41.6-8.4 56.6-23.4l109.4-109.4-45.3-45.3-109.4 109.4c-3 3-7.1 4.7-11.3 4.7l-36.1 0 0-36.1c0-4.2 1.7-8.3 4.7-11.3l109.4-109.4-45.3-45.3-109.4 109.4z"/></svg>',
    file: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M192 64C156.7 64 128 92.7 128 128L128 512C128 547.3 156.7 576 192 576L448 576C483.3 576 512 547.3 512 512L512 234.5C512 217.5 505.3 201.2 493.3 189.2L386.7 82.7C374.7 70.7 358.5 64 341.5 64L192 64zM453.5 240L360 240C346.7 240 336 229.3 336 216L336 122.5L453.5 240z"/></svg>',
    "file-audio": '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM389.8 307.7C380.7 301.4 368.3 303.6 362 312.7C355.7 321.8 357.9 334.2 367 340.5C390.9 357.2 406.4 384.8 406.4 416C406.4 447.2 390.8 474.9 367 491.5C357.9 497.8 355.7 510.3 362 519.3C368.3 528.3 380.8 530.6 389.8 524.3C423.9 500.5 446.4 460.8 446.4 416C446.4 371.2 424 331.5 389.8 307.7zM208 376C199.2 376 192 383.2 192 392L192 440C192 448.8 199.2 456 208 456L232 456L259.2 490C262.2 493.8 266.8 496 271.7 496L272 496C280.8 496 288 488.8 288 480L288 352C288 343.2 280.8 336 272 336L271.7 336C266.8 336 262.2 338.2 259.2 342L232 376L208 376zM336 448.2C336 458.9 346.5 466.4 354.9 459.8C367.8 449.5 376 433.7 376 416C376 398.3 367.8 382.5 354.9 372.2C346.5 365.5 336 373.1 336 383.8L336 448.3z"/></svg>',
    "file-code": '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM282.2 359.6C290.8 349.5 289.7 334.4 279.6 325.8C269.5 317.2 254.4 318.3 245.8 328.4L197.8 384.4C190.1 393.4 190.1 406.6 197.8 415.6L245.8 471.6C254.4 481.7 269.6 482.8 279.6 474.2C289.6 465.6 290.8 450.4 282.2 440.4L247.6 400L282.2 359.6zM394.2 328.4C385.6 318.3 370.4 317.2 360.4 325.8C350.4 334.4 349.2 349.6 357.8 359.6L392.4 400L357.8 440.4C349.2 450.5 350.3 465.6 360.4 474.2C370.5 482.8 385.6 481.7 394.2 471.6L442.2 415.6C449.9 406.6 449.9 393.4 442.2 384.4L394.2 328.4z"/></svg>',
    "file-excel": '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM292 330.7C284.6 319.7 269.7 316.7 258.7 324C247.7 331.3 244.7 346.3 252 357.3L291.2 416L252 474.7C244.6 485.7 247.6 500.6 258.7 508C269.8 515.4 284.6 512.4 292 501.3L320 459.3L348 501.3C355.4 512.3 370.3 515.3 381.3 508C392.3 500.7 395.3 485.7 388 474.7L348.8 416L388 357.3C395.4 346.3 392.4 331.4 381.3 324C370.2 316.6 355.4 319.6 348 330.7L320 372.7L292 330.7z"/></svg>',
    "file-image": '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM256 320C256 302.3 241.7 288 224 288C206.3 288 192 302.3 192 320C192 337.7 206.3 352 224 352C241.7 352 256 337.7 256 320zM220.6 512L419.4 512C435.2 512 448 499.2 448 483.4C448 476.1 445.2 469 440.1 463.7L343.3 361.9C337.3 355.6 328.9 352 320.1 352L319.8 352C311 352 302.7 355.6 296.6 361.9L199.9 463.7C194.8 469 192 476.1 192 483.4C192 499.2 204.8 512 220.6 512z"/></svg>',
    "file-pdf": '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M128 64C92.7 64 64 92.7 64 128L64 512C64 547.3 92.7 576 128 576L208 576L208 464C208 428.7 236.7 400 272 400L448 400L448 234.5C448 217.5 441.3 201.2 429.3 189.2L322.7 82.7C310.7 70.7 294.5 64 277.5 64L128 64zM389.5 240L296 240C282.7 240 272 229.3 272 216L272 122.5L389.5 240zM272 444C261 444 252 453 252 464L252 592C252 603 261 612 272 612C283 612 292 603 292 592L292 564L304 564C337.1 564 364 537.1 364 504C364 470.9 337.1 444 304 444L272 444zM304 524L292 524L292 484L304 484C315 484 324 493 324 504C324 515 315 524 304 524zM400 444C389 444 380 453 380 464L380 592C380 603 389 612 400 612L432 612C460.7 612 484 588.7 484 560L484 496C484 467.3 460.7 444 432 444L400 444zM420 572L420 484L432 484C438.6 484 444 489.4 444 496L444 560C444 566.6 438.6 572 432 572L420 572zM508 464L508 592C508 603 517 612 528 612C539 612 548 603 548 592L548 548L576 548C587 548 596 539 596 528C596 517 587 508 576 508L548 508L548 484L576 484C587 484 596 475 596 464C596 453 587 444 576 444L528 444C517 444 508 453 508 464z"/></svg>',
    "file-powerpoint": '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM280 320C266.7 320 256 330.7 256 344L256 488C256 501.3 266.7 512 280 512C293.3 512 304 501.3 304 488L304 464L328 464C367.8 464 400 431.8 400 392C400 352.2 367.8 320 328 320L280 320zM328 416L304 416L304 368L328 368C341.3 368 352 378.7 352 392C352 405.3 341.3 416 328 416z"/></svg>',
    "file-video": '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM208 368L208 464C208 481.7 222.3 496 240 496L336 496C353.7 496 368 481.7 368 464L368 440L403 475C406.2 478.2 410.5 480 415 480C424.4 480 432 472.4 432 463L432 368.9C432 359.5 424.4 351.9 415 351.9C410.5 351.9 406.2 353.7 403 356.9L368 391.9L368 367.9C368 350.2 353.7 335.9 336 335.9L240 335.9C222.3 335.9 208 350.2 208 367.9z"/></svg>',
    "file-word": '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM263.4 338.8C260.5 325.9 247.7 317.7 234.8 320.6C221.9 323.5 213.7 336.3 216.6 349.2L248.6 493.2C250.9 503.7 260 511.4 270.8 512C281.6 512.6 291.4 505.9 294.8 495.6L320 419.9L345.2 495.6C348.6 505.8 358.4 512.5 369.2 512C380 511.5 389.1 503.8 391.4 493.2L423.4 349.2C426.3 336.3 418.1 323.4 405.2 320.6C392.3 317.8 379.4 325.9 376.6 338.8L363.4 398.2L342.8 336.4C339.5 326.6 330.4 320 320 320C309.6 320 300.5 326.6 297.2 336.4L276.6 398.2L263.4 338.8z"/></svg>',
    "file-zipper": '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM192 136C192 149.3 202.7 160 216 160L264 160C277.3 160 288 149.3 288 136C288 122.7 277.3 112 264 112L216 112C202.7 112 192 122.7 192 136zM192 232C192 245.3 202.7 256 216 256L264 256C277.3 256 288 245.3 288 232C288 218.7 277.3 208 264 208L216 208C202.7 208 192 218.7 192 232zM256 304L224 304C206.3 304 192 318.3 192 336L192 384C192 410.5 213.5 432 240 432C266.5 432 288 410.5 288 384L288 336C288 318.3 273.7 304 256 304zM240 368C248.8 368 256 375.2 256 384C256 392.8 248.8 400 240 400C231.2 400 224 392.8 224 384C224 375.2 231.2 368 240 368z"/></svg>',
    "grip-vertical": '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M128 40c0-22.1-17.9-40-40-40L40 0C17.9 0 0 17.9 0 40L0 88c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zm0 192c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zM0 424l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM320 40c0-22.1-17.9-40-40-40L232 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zM192 232l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM320 424c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48z"/></svg>',
    indeterminate: '<svg part="indeterminate-icon" class="icon" viewBox="0 0 16 16"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round"><g stroke="currentColor" stroke-width="2"><g transform="translate(2.285714 6.857143)"><path d="M10.2857143,1.14285714 L1.14285714,1.14285714"/></g></g></g></svg>',
    minus: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32z"/></svg>',
    pause: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M48 32C21.5 32 0 53.5 0 80L0 432c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48L48 32zm224 0c-26.5 0-48 21.5-48 48l0 352c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48l-64 0z"/></svg>',
    play: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M91.2 36.9c-12.4-6.8-27.4-6.5-39.6 .7S32 57.9 32 72l0 368c0 14.1 7.5 27.2 19.6 34.4s27.2 7.5 39.6 .7l336-184c12.8-7 20.8-20.5 20.8-35.1s-8-28.1-20.8-35.1l-336-184z"/></svg>',
    plus: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M352 128C352 110.3 337.7 96 320 96C302.3 96 288 110.3 288 128L288 288L128 288C110.3 288 96 302.3 96 320C96 337.7 110.3 352 128 352L288 352L288 512C288 529.7 302.3 544 320 544C337.7 544 352 529.7 352 512L352 352L512 352C529.7 352 544 337.7 544 320C544 302.3 529.7 288 512 288L352 288L352 128z"/></svg>',
    star: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z"/></svg>',
    upload: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M352 173.3L352 384C352 401.7 337.7 416 320 416C302.3 416 288 401.7 288 384L288 173.3L246.6 214.7C234.1 227.2 213.8 227.2 201.3 214.7C188.8 202.2 188.8 181.9 201.3 169.4L297.3 73.4C309.8 60.9 330.1 60.9 342.6 73.4L438.6 169.4C451.1 181.9 451.1 202.2 438.6 214.7C426.1 227.2 405.8 227.2 393.3 214.7L352 173.3zM320 464C364.2 464 400 428.2 400 384L480 384C515.3 384 544 412.7 544 448L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 448C96 412.7 124.7 384 160 384L240 384C240 428.2 275.8 464 320 464zM464 488C477.3 488 488 477.3 488 464C488 450.7 477.3 440 464 440C450.7 440 440 450.7 440 464C440 477.3 450.7 488 464 488z"/></svg>',
    user: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M224 248a120 120 0 1 0 0-240 120 120 0 1 0 0 240zm-29.7 56C95.8 304 16 383.8 16 482.3 16 498.7 29.3 512 45.7 512l356.6 0c16.4 0 29.7-13.3 29.7-29.7 0-98.5-79.8-178.3-178.3-178.3l-59.4 0z"/></svg>',
    xmark: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192.5 301.3 329.9 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.8 256 375.1 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192.5 210.7 55.1 73.4z"/></svg>'
  },
  //
  // Regular variant
  //
  regular: {
    "circle-question": '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M464 256a208 208 0 1 0 -416 0 208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zm256-80c-17.7 0-32 14.3-32 32 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-44.2 35.8-80 80-80s80 35.8 80 80c0 47.2-36 67.2-56 74.5l0 3.8c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-8.1c0-20.5 14.8-35.2 30.1-40.2 6.4-2.1 13.2-5.5 18.2-10.3 4.3-4.2 7.7-10 7.7-19.6 0-17.7-14.3-32-32-32zM224 368a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>',
    "circle-xmark": '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512zM167 167c-9.4 9.4-9.4 24.6 0 33.9l55 55-55 55c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l55-55 55 55c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-55-55 55-55c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-55 55-55-55c-9.4-9.4-24.6-9.4-33.9 0z"/></svg>',
    copy: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M384 336l-192 0c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l133.5 0c4.2 0 8.3 1.7 11.3 4.7l58.5 58.5c3 3 4.7 7.1 4.7 11.3L400 320c0 8.8-7.2 16-16 16zM192 384l192 0c35.3 0 64-28.7 64-64l0-197.5c0-17-6.7-33.3-18.7-45.3L370.7 18.7C358.7 6.7 342.5 0 325.5 0L192 0c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-16-48 0 0 16c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l16 0 0-48-16 0z"/></svg>',
    eye: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M288 80C222.8 80 169.2 109.6 128.1 147.7 89.6 183.5 63 226 49.4 256 63 286 89.6 328.5 128.1 364.3 169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256 513 226 486.4 183.5 447.9 147.7 406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1 3.3 7.9 3.3 16.7 0 24.6-14.9 35.7-46.2 87.7-93 131.1-47.1 43.7-111.8 80.6-192.6 80.6S142.5 443.2 95.4 399.4c-46.8-43.5-78.1-95.4-93-131.1-3.3-7.9-3.3-16.7 0-24.6 14.9-35.7 46.2-87.7 93-131.1zM288 336c44.2 0 80-35.8 80-80 0-29.6-16.1-55.5-40-69.3-1.4 59.7-49.6 107.9-109.3 109.3 13.8 23.9 39.7 40 69.3 40zm-79.6-88.4c2.5 .3 5 .4 7.6 .4 35.3 0 64-28.7 64-64 0-2.6-.2-5.1-.4-7.6-37.4 3.9-67.2 33.7-71.1 71.1zm45.6-115c10.8-3 22.2-4.5 33.9-4.5 8.8 0 17.5 .9 25.8 2.6 .3 .1 .5 .1 .8 .2 57.9 12.2 101.4 63.7 101.4 125.2 0 70.7-57.3 128-128 128-61.6 0-113-43.5-125.2-101.4-1.8-8.6-2.8-17.5-2.8-26.6 0-11 1.4-21.8 4-32 .2-.7 .3-1.3 .5-1.9 11.9-43.4 46.1-77.6 89.5-89.5z"/></svg>',
    "eye-slash": '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M41-24.9c-9.4-9.4-24.6-9.4-33.9 0S-2.3-.3 7 9.1l528 528c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-96.4-96.4c2.7-2.4 5.4-4.8 8-7.2 46.8-43.5 78.1-95.4 93-131.1 3.3-7.9 3.3-16.7 0-24.6-14.9-35.7-46.2-87.7-93-131.1-47.1-43.7-111.8-80.6-192.6-80.6-56.8 0-105.6 18.2-146 44.2L41-24.9zM176.9 111.1c32.1-18.9 69.2-31.1 111.1-31.1 65.2 0 118.8 29.6 159.9 67.7 38.5 35.7 65.1 78.3 78.6 108.3-13.6 30-40.2 72.5-78.6 108.3-3.1 2.8-6.2 5.6-9.4 8.4L393.8 328c14-20.5 22.2-45.3 22.2-72 0-70.7-57.3-128-128-128-26.7 0-51.5 8.2-72 22.2l-39.1-39.1zm182 182l-108-108c11.1-5.8 23.7-9.1 37.1-9.1 44.2 0 80 35.8 80 80 0 13.4-3.3 26-9.1 37.1zM103.4 173.2l-34-34c-32.6 36.8-55 75.8-66.9 104.5-3.3 7.9-3.3 16.7 0 24.6 14.9 35.7 46.2 87.7 93 131.1 47.1 43.7 111.8 80.6 192.6 80.6 37.3 0 71.2-7.9 101.5-20.6L352.2 422c-20 6.4-41.4 10-64.2 10-65.2 0-118.8-29.6-159.9-67.7-38.5-35.7-65.1-78.3-78.6-108.3 10.4-23.1 28.6-53.6 54-82.8z"/></svg>',
    star: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M288.1-32c9 0 17.3 5.1 21.4 13.1L383 125.3 542.9 150.7c8.9 1.4 16.3 7.7 19.1 16.3s.5 18-5.8 24.4L441.7 305.9 467 465.8c1.4 8.9-2.3 17.9-9.6 23.2s-17 6.1-25 2L288.1 417.6 143.8 491c-8 4.1-17.7 3.3-25-2s-11-14.2-9.6-23.2L134.4 305.9 20 191.4c-6.4-6.4-8.6-15.8-5.8-24.4s10.1-14.9 19.1-16.3l159.9-25.4 73.6-144.2c4.1-8 12.4-13.1 21.4-13.1zm0 76.8L230.3 158c-3.5 6.8-10 11.6-17.6 12.8l-125.5 20 89.8 89.9c5.4 5.4 7.9 13.1 6.7 20.7l-19.8 125.5 113.3-57.6c6.8-3.5 14.9-3.5 21.8 0l113.3 57.6-19.8-125.5c-1.2-7.6 1.3-15.3 6.7-20.7l89.8-89.9-125.5-20c-7.6-1.2-14.1-6-17.6-12.8L288.1 44.8z"/></svg>'
  }
}, Tl = {
  name: "system",
  resolver: (o, e = "classic", a = "solid") => {
    let t = De[a][o] ?? De.regular[o] ?? De.regular["circle-question"];
    return t ? Ol(t) : "";
  }
}, Rl = Tl;
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Ml = "classic", ql = [Ll, Rl], Xe = [];
function Dl(o) {
  Xe.push(o);
}
function Vl(o) {
  Xe = Xe.filter((e) => e !== o);
}
function Ve(o) {
  return ql.find((e) => e.name === o);
}
function Bl() {
  return Ml;
}
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { I: Fl } = ot, Da = (o) => o, Il = (o, e) => (o == null ? void 0 : o._$litType$) !== void 0, Pl = (o) => o.strings === void 0, Va = () => document.createComment(""), Xo = (o, e, a) => {
  var l;
  const r = o._$AA.parentNode, t = e === void 0 ? o._$AB : e._$AA;
  if (a === void 0) {
    const n = r.insertBefore(Va(), t), i = r.insertBefore(Va(), t);
    a = new Fl(n, i, o, o.options);
  } else {
    const n = a._$AB.nextSibling, i = a._$AM, c = i !== o;
    if (c) {
      let w;
      (l = a._$AQ) == null || l.call(a, o), a._$AM = o, a._$AP !== void 0 && (w = o._$AU) !== i._$AU && a._$AP(w);
    }
    if (n !== t || c) {
      let w = a._$AA;
      for (; w !== n; ) {
        const d = Da(w).nextSibling;
        Da(r).insertBefore(w, t), w = d;
      }
    }
  }
  return a;
}, Eo = (o, e, a = o) => (o._$AI(e, a), o), Hl = {}, kr = (o, e = Hl) => o._$AH = e, Nl = (o) => o._$AH, Be = (o) => {
  o._$AR(), o._$AA.remove();
};
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Zo = Symbol(), de = Symbol(), Fe, Ie = /* @__PURE__ */ new Map(), R = class extends Z {
  constructor() {
    super(...arguments), this.svg = null, this.autoWidth = !1, this.swapOpacity = !1, this.label = "", this.library = "default", this.rotate = 0, this.resolveIcon = async (o, e) => {
      var r;
      let a;
      if (e != null && e.spriteSheet) {
        this.hasUpdated || await this.updateComplete, this.svg = m`<svg part="svg">
        <use part="use" href="${o}"></use>
      </svg>`, await this.updateComplete;
        const t = this.shadowRoot.querySelector("[part='svg']");
        return typeof e.mutator == "function" && e.mutator(t, this), this.svg;
      }
      try {
        if (a = await fetch(o, { mode: "cors" }), !a.ok) return a.status === 410 ? Zo : de;
      } catch {
        return de;
      }
      try {
        const t = document.createElement("div");
        t.innerHTML = await a.text();
        const l = t.firstElementChild;
        if (((r = l == null ? void 0 : l.tagName) == null ? void 0 : r.toLowerCase()) !== "svg") return Zo;
        Fe || (Fe = new DOMParser());
        const i = Fe.parseFromString(l.outerHTML, "text/html").body.querySelector("svg");
        return i ? (i.part.add("svg"), document.adoptNode(i)) : Zo;
      } catch {
        return Zo;
      }
    };
  }
  connectedCallback() {
    super.connectedCallback(), Dl(this);
  }
  firstUpdated(o) {
    super.firstUpdated(o), this.hasAttribute("rotate") && this.style.setProperty("--rotate-angle", `${this.rotate}deg`), this.setIcon();
  }
  disconnectedCallback() {
    super.disconnectedCallback(), Vl(this);
  }
  async getIconSource() {
    const o = Ve(this.library), e = this.family || Bl();
    if (this.name && o) {
      let a;
      try {
        a = await o.resolver(this.name, e, this.variant, this.autoWidth);
      } catch {
        a = void 0;
      }
      return { url: a, fromLibrary: !0 };
    }
    return {
      url: this.src,
      fromLibrary: !1
    };
  }
  handleLabelChange() {
    typeof this.label == "string" && this.label.length > 0 ? (this.setAttribute("role", "img"), this.setAttribute("aria-label", this.label), this.removeAttribute("aria-hidden")) : (this.removeAttribute("role"), this.removeAttribute("aria-label"), this.setAttribute("aria-hidden", "true"));
  }
  async setIcon() {
    var n;
    const { url: o, fromLibrary: e } = await this.getIconSource(), a = e ? Ve(this.library) : void 0;
    if (!o) {
      this.svg = null;
      return;
    }
    let r = Ie.get(o);
    r || (r = this.resolveIcon(o, a), Ie.set(o, r));
    const t = await r;
    t === de && Ie.delete(o);
    const l = await this.getIconSource();
    if (o === l.url) {
      if (Il(t)) {
        this.svg = t;
        return;
      }
      switch (t) {
        case de:
        case Zo:
          this.svg = null, this.dispatchEvent(new Cl());
          break;
        default:
          this.svg = t.cloneNode(!0), (n = a == null ? void 0 : a.mutator) == null || n.call(a, this.svg, this), this.dispatchEvent(new Sl());
      }
    }
  }
  updated(o) {
    var r, t;
    super.updated(o);
    const e = Ve(this.library);
    this.hasAttribute("rotate") && this.style.setProperty("--rotate-angle", `${this.rotate}deg`);
    const a = (r = this.shadowRoot) == null ? void 0 : r.querySelector("svg");
    a && ((t = e == null ? void 0 : e.mutator) == null || t.call(e, a, this));
  }
  render() {
    return this.hasUpdated ? this.svg : m`<svg part="svg" width="16" height="16"></svg>`;
  }
};
R.css = $l;
s([
  eo()
], R.prototype, "svg", 2);
s([
  u({ reflect: !0 })
], R.prototype, "name", 2);
s([
  u({ reflect: !0 })
], R.prototype, "family", 2);
s([
  u({ reflect: !0 })
], R.prototype, "variant", 2);
s([
  u({ attribute: "auto-width", type: Boolean, reflect: !0 })
], R.prototype, "autoWidth", 2);
s([
  u({ attribute: "swap-opacity", type: Boolean, reflect: !0 })
], R.prototype, "swapOpacity", 2);
s([
  u()
], R.prototype, "src", 2);
s([
  u()
], R.prototype, "label", 2);
s([
  u({ reflect: !0 })
], R.prototype, "library", 2);
s([
  u({ type: Number, reflect: !0 })
], R.prototype, "rotate", 2);
s([
  u({ type: String, reflect: !0 })
], R.prototype, "flip", 2);
s([
  u({ type: String, reflect: !0 })
], R.prototype, "animation", 2);
s([
  j("label")
], R.prototype, "handleLabelChange", 1);
s([
  j(["family", "name", "library", "variant", "src", "autoWidth", "swapOpacity"], { waitUntilFirstUpdate: !0 })
], R.prototype, "setIcon", 1);
R = s([
  X("wa-icon")
], R);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Ul = D`
  :host {
    --checked-icon-color: var(--wa-color-brand-on-loud);
    --checked-icon-scale: 0.8;

    display: inline-flex;
    color: var(--wa-form-control-value-color);
    font-family: inherit;
    font-weight: var(--wa-form-control-value-font-weight);
    line-height: var(--wa-form-control-value-line-height);
    user-select: none;
    -webkit-user-select: none;
  }

  [part~='control'] {
    display: inline-flex;
    flex: 0 0 auto;
    position: relative;
    align-items: center;
    justify-content: center;
    width: var(--wa-form-control-toggle-size);
    height: var(--wa-form-control-toggle-size);
    border-color: var(--wa-form-control-border-color);
    border-radius: min(
      calc(var(--wa-form-control-toggle-size) * 0.375),
      var(--wa-border-radius-s)
    ); /* min prevents entirely circular checkbox */
    border-style: var(--wa-border-style);
    border-width: var(--wa-form-control-border-width);
    background-color: var(--wa-form-control-background-color);
    transition:
      background var(--wa-transition-normal),
      border-color var(--wa-transition-fast),
      box-shadow var(--wa-transition-fast),
      color var(--wa-transition-fast);
    transition-timing-function: var(--wa-transition-easing);

    margin-inline-end: 0.5em;
  }

  [part~='base'] {
    display: flex;
    align-items: flex-start;
    position: relative;
    color: currentColor;
    vertical-align: middle;
    cursor: pointer;
  }

  [part~='label'] {
    display: inline;
  }

  /* Checked */
  [part~='control']:has(:checked, :indeterminate) {
    color: var(--checked-icon-color);
    border-color: var(--wa-form-control-activated-color);
    background-color: var(--wa-form-control-activated-color);
  }

  /* Focus */
  [part~='control']:has(> input:focus-visible:not(:disabled)) {
    outline: var(--wa-focus-ring);
    outline-offset: var(--wa-focus-ring-offset);
  }

  /* Disabled */
  :host [part~='base']:has(input:disabled) {
    opacity: 0.5;
    cursor: not-allowed;
  }

  input {
    position: absolute;
    padding: 0;
    margin: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    pointer-events: none;
  }

  [part~='icon'] {
    display: flex;
    scale: var(--checked-icon-scale);

    /* Without this, Safari renders the icon slightly to the left */
    &::part(svg) {
      translate: 0.0009765625em;
    }

    input:not(:checked, :indeterminate) + & {
      visibility: hidden;
    }
  }

  :host([required]) [part~='label']::after {
    content: var(--wa-form-control-required-content);
    color: var(--wa-form-control-required-content-color);
    margin-inline-start: var(--wa-form-control-required-content-offset);
  }
`;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Ba = le(class extends ne {
  constructor(o) {
    if (super(o), o.type !== to.PROPERTY && o.type !== to.ATTRIBUTE && o.type !== to.BOOLEAN_ATTRIBUTE) throw Error("The `live` directive is not allowed on child or event bindings");
    if (!Pl(o)) throw Error("`live` bindings can only contain a single expression");
  }
  render(o) {
    return o;
  }
  update(o, [e]) {
    if (e === I || e === A) return e;
    const a = o.element, r = o.name;
    if (o.type === to.PROPERTY) {
      if (e === a[r]) return I;
    } else if (o.type === to.BOOLEAN_ATTRIBUTE) {
      if (!!e === a.hasAttribute(r)) return I;
    } else if (o.type === to.ATTRIBUTE && a.getAttribute(r) === e + "") return I;
    return kr(o), e;
  }
});
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var T = class extends U {
  constructor() {
    super(...arguments), this.hasSlotController = new te(this, "hint"), this.title = "", this.name = null, this._value = this.getAttribute("value") ?? null, this.size = "medium", this.disabled = !1, this.indeterminate = !1, this._checked = null, this.defaultChecked = this.hasAttribute("checked"), this.required = !1, this.hint = "";
  }
  static get validators() {
    const o = [
      br({
        validationProperty: "checked",
        // Use a checkbox so we get "free" translation strings.
        validationElement: Object.assign(document.createElement("input"), {
          type: "checkbox",
          required: !0
        })
      })
    ];
    return [...super.validators, ...o];
  }
  /** The value of the checkbox, submitted as a name/value pair with form data. */
  get value() {
    const o = this._value || "on";
    return this.checked ? o : null;
  }
  set value(o) {
    this._value = o;
  }
  get checked() {
    return this.valueHasChanged ? !!this._checked : this._checked ?? this.defaultChecked;
  }
  set checked(o) {
    this._checked = !!o, this.valueHasChanged = !0;
  }
  handleClick() {
    this.hasInteracted = !0, this.checked = !this.checked, this.indeterminate = !1, this.updateComplete.then(() => {
      this.dispatchEvent(new Event("change", { bubbles: !0, composed: !0 }));
    });
  }
  connectedCallback() {
    super.connectedCallback(), this.handleDefaultCheckedChange();
  }
  handleDefaultCheckedChange() {
    this.handleValueOrCheckedChange();
  }
  handleValueOrCheckedChange() {
    this.setValue(this.checked ? this.value : null, this._value), this.updateValidity();
  }
  handleStateChange() {
    this.hasUpdated && (this.input.checked = this.checked, this.input.indeterminate = this.indeterminate), this.customStates.set("checked", this.checked), this.customStates.set("indeterminate", this.indeterminate), this.updateValidity();
  }
  handleDisabledChange() {
    this.customStates.set("disabled", this.disabled);
  }
  willUpdate(o) {
    super.willUpdate(o), (o.has("value") || o.has("checked") || o.has("defaultChecked")) && this.handleValueOrCheckedChange();
  }
  formResetCallback() {
    this._checked = null, super.formResetCallback(), this.handleValueOrCheckedChange();
  }
  /** Simulates a click on the checkbox. */
  click() {
    this.input.click();
  }
  /** Sets focus on the checkbox. */
  focus(o) {
    this.input.focus(o);
  }
  /** Removes focus from the checkbox. */
  blur() {
    this.input.blur();
  }
  render() {
    const o = this.hasSlotController.test("hint"), e = this.hint ? !0 : !!o, a = !this.checked && this.indeterminate, r = a ? "indeterminate" : "check", t = a ? "indeterminate" : "check";
    return m`
      <label part="base">
        <span part="control">
          <input
            class="input"
            type="checkbox"
            title=${this.title}
            name=${K(this.name)}
            value=${K(this._value)}
            .indeterminate=${Ba(this.indeterminate)}
            .checked=${Ba(this.checked)}
            .disabled=${this.disabled}
            .required=${this.required}
            aria-checked=${this.checked ? "true" : "false"}
            aria-describedby="hint"
            @click=${this.handleClick}
          />

          <wa-icon part="${t}-icon icon" library="system" name=${r}></wa-icon>
        </span>

        <slot part="label"></slot>
      </label>

      <slot
        id="hint"
        part="hint"
        name="hint"
        aria-hidden=${e ? "false" : "true"}
        class="${Y({ "has-slotted": e })}"
      >
        ${this.hint}
      </slot>
    `;
  }
};
T.css = [oa, Uo, Ul];
T.shadowRootOptions = { ...U.shadowRootOptions, delegatesFocus: !0 };
s([
  z('input[type="checkbox"]')
], T.prototype, "input", 2);
s([
  u()
], T.prototype, "title", 2);
s([
  u({ reflect: !0 })
], T.prototype, "name", 2);
s([
  u({ reflect: !0 })
], T.prototype, "value", 1);
s([
  u({ reflect: !0 })
], T.prototype, "size", 2);
s([
  u({ type: Boolean })
], T.prototype, "disabled", 2);
s([
  u({ type: Boolean, reflect: !0 })
], T.prototype, "indeterminate", 2);
s([
  u({ type: Boolean, attribute: !1 })
], T.prototype, "checked", 1);
s([
  u({ type: Boolean, reflect: !0, attribute: "checked" })
], T.prototype, "defaultChecked", 2);
s([
  u({ type: Boolean, reflect: !0 })
], T.prototype, "required", 2);
s([
  u()
], T.prototype, "hint", 2);
s([
  j(["checked", "defaultChecked"])
], T.prototype, "handleDefaultCheckedChange", 1);
s([
  j(["checked", "indeterminate"])
], T.prototype, "handleStateChange", 1);
s([
  j("disabled")
], T.prototype, "handleDisabledChange", 1);
T = s([
  X("wa-checkbox")
], T);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var jl = class extends Event {
  constructor(o) {
    super("wa-select", { bubbles: !0, cancelable: !0, composed: !0 }), this.detail = o;
  }
};
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Wl = D`
  :host {
    --show-duration: 50ms;
    --hide-duration: 50ms;
    display: contents;
  }

  #menu {
    display: flex;
    flex-direction: column;
    width: max-content;
    margin: 0;
    padding: 0.25em;
    border: var(--wa-border-style) var(--wa-border-width-s) var(--wa-color-surface-border);
    border-radius: var(--wa-border-radius-m);
    background-color: var(--wa-color-surface-raised);
    box-shadow: var(--wa-shadow-m);
    color: var(--wa-color-text-normal);
    text-align: start;
    user-select: none;
    overflow: auto;
    max-width: var(--auto-size-available-width) !important;
    max-height: var(--auto-size-available-height) !important;

    &.show {
      animation: show var(--show-duration) ease;
    }

    &.hide {
      animation: show var(--hide-duration) ease reverse;
    }

    ::slotted(h1),
    ::slotted(h2),
    ::slotted(h3),
    ::slotted(h4),
    ::slotted(h5),
    ::slotted(h6) {
      display: block !important;
      margin: 0.25em 0 !important;
      padding: 0.25em 0.75em !important;
      color: var(--wa-color-text-quiet) !important;
      font-family: var(--wa-font-family-body) !important;
      font-weight: var(--wa-font-weight-semibold) !important;
      font-size: var(--wa-font-size-smaller) !important;
    }

    ::slotted(wa-divider) {
      --spacing: 0.25em; /* Component-specific, left as-is */
    }
  }

  wa-popup[data-current-placement^='top'] #menu {
    transform-origin: bottom;
  }

  wa-popup[data-current-placement^='bottom'] #menu {
    transform-origin: top;
  }

  wa-popup[data-current-placement^='left'] #menu {
    transform-origin: right;
  }

  wa-popup[data-current-placement^='right'] #menu {
    transform-origin: left;
  }

  wa-popup[data-current-placement='left-start'] #menu {
    transform-origin: right top;
  }

  wa-popup[data-current-placement='left-end'] #menu {
    transform-origin: right bottom;
  }

  wa-popup[data-current-placement='right-start'] #menu {
    transform-origin: left top;
  }

  wa-popup[data-current-placement='right-end'] #menu {
    transform-origin: left bottom;
  }

  @keyframes show {
    from {
      scale: 0.9;
      opacity: 0;
    }
    to {
      scale: 1;
      opacity: 1;
    }
  }
`;
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function* Cr(o = document.activeElement) {
  o != null && (yield o, "shadowRoot" in o && o.shadowRoot && o.shadowRoot.mode !== "closed" && (yield* Cr(o.shadowRoot.activeElement)));
}
var Pe = /* @__PURE__ */ new Set(), P = class extends Z {
  constructor() {
    super(...arguments), this.submenuCleanups = /* @__PURE__ */ new Map(), this.localize = new $o(this), this.userTypedQuery = "", this.openSubmenuStack = [], this.open = !1, this.size = "medium", this.placement = "bottom-start", this.distance = 0, this.skidding = 0, this.handleDocumentKeyDown = async (o) => {
      const e = this.localize.dir() === "rtl";
      if (o.key === "Escape" && this.open && ua(this)) {
        const d = this.getTrigger();
        o.preventDefault(), o.stopPropagation(), this.open = !1, d == null || d.focus({ preventScroll: !0 });
        return;
      }
      const a = [...Cr()].find((d) => d.localName === "wa-dropdown-item"), r = (a == null ? void 0 : a.localName) === "wa-dropdown-item", t = this.getCurrentSubmenuItem(), l = !!t;
      let n, i, c;
      l ? (n = this.getSubmenuItems(t), i = n.find((d) => d.active || d === a), c = i ? n.indexOf(i) : -1) : (n = this.getItems(), i = n.find((d) => d.active || d === a), c = i ? n.indexOf(i) : -1);
      let w;
      if (o.key === "ArrowUp" && (o.preventDefault(), o.stopPropagation(), c > 0 ? w = n[c - 1] : w = n[n.length - 1]), o.key === "ArrowDown" && (o.preventDefault(), o.stopPropagation(), c !== -1 && c < n.length - 1 ? w = n[c + 1] : w = n[0]), o.key === (e ? "ArrowLeft" : "ArrowRight") && r && i && i.hasSubmenu) {
        o.preventDefault(), o.stopPropagation(), i.submenuOpen = !0, this.addToSubmenuStack(i), setTimeout(() => {
          const d = this.getSubmenuItems(i);
          d.length > 0 && (d.forEach((h, p) => h.active = p === 0), d[0].focus({ preventScroll: !0 }));
        }, 0);
        return;
      }
      if (o.key === (e ? "ArrowRight" : "ArrowLeft") && l) {
        o.preventDefault(), o.stopPropagation();
        const d = this.removeFromSubmenuStack();
        d && (d.submenuOpen = !1, setTimeout(() => {
          d.focus({ preventScroll: !0 }), d.active = !0, (d.slot === "submenu" ? this.getSubmenuItems(d.parentElement) : this.getItems()).forEach((p) => {
            p !== d && (p.active = !1);
          });
        }, 0));
        return;
      }
      if ((o.key === "Home" || o.key === "End") && (o.preventDefault(), o.stopPropagation(), w = o.key === "Home" ? n[0] : n[n.length - 1]), o.key === "Tab" && await this.hideMenu(), o.key.length === 1 && !(o.metaKey || o.ctrlKey || o.altKey) && !(o.key === " " && this.userTypedQuery === "") && (clearTimeout(this.userTypedTimeout), this.userTypedTimeout = setTimeout(() => {
        this.userTypedQuery = "";
      }, 1e3), this.userTypedQuery += o.key, n.some((d) => {
        const h = (d.textContent || "").trim().toLowerCase(), p = this.userTypedQuery.trim().toLowerCase();
        return h.startsWith(p) ? (w = d, !0) : !1;
      })), w) {
        o.preventDefault(), o.stopPropagation(), n.forEach((d) => d.active = d === w), w.focus({ preventScroll: !0 });
        return;
      }
      (o.key === "Enter" || o.key === " " && this.userTypedQuery === "") && r && i && (o.preventDefault(), o.stopPropagation(), i.hasSubmenu ? (i.submenuOpen = !0, this.addToSubmenuStack(i), setTimeout(() => {
        const d = this.getSubmenuItems(i);
        d.length > 0 && (d.forEach((h, p) => h.active = p === 0), d[0].focus({ preventScroll: !0 }));
      }, 0)) : this.makeSelection(i));
    }, this.handleDocumentPointerDown = (o) => {
      o.composedPath().some((r) => r instanceof HTMLElement ? r === this || r.closest('wa-dropdown, [part="submenu"]') : !1) || (this.open = !1);
    }, this.handleGlobalMouseMove = (o) => {
      var p;
      const e = this.getCurrentSubmenuItem();
      if (!(e != null && e.submenuOpen) || !e.submenuElement) return;
      const a = e.submenuElement.getBoundingClientRect(), r = this.localize.dir() === "rtl", t = r ? a.right : a.left, l = r ? Math.max(o.clientX, t) : Math.min(o.clientX, t), n = Math.max(a.top, Math.min(o.clientY, a.bottom));
      e.submenuElement.style.setProperty("--safe-triangle-cursor-x", `${l}px`), e.submenuElement.style.setProperty("--safe-triangle-cursor-y", `${n}px`);
      const i = o.composedPath(), c = e.matches(":hover"), w = !!((p = e.submenuElement) != null && p.matches(":hover")), d = c || !!i.find((v) => v === e), h = w || !!i.find(
        (v) => v instanceof HTMLElement && v.closest('[part="submenu"]') === e.submenuElement
      );
      !d && !h && setTimeout(() => {
        !c && !w && (e.submenuOpen = !1);
      }, 100);
    };
  }
  disconnectedCallback() {
    super.disconnectedCallback(), clearInterval(this.userTypedTimeout), this.closeAllSubmenus(), this.submenuCleanups.forEach((o) => o()), this.submenuCleanups.clear(), document.removeEventListener("mousemove", this.handleGlobalMouseMove), document.removeEventListener("keydown", this.handleDocumentKeyDown), document.removeEventListener("pointerdown", this.handleDocumentPointerDown), re(this);
  }
  firstUpdated() {
    this.syncAriaAttributes();
  }
  async updated(o) {
    if (o.has("open")) {
      const e = o.get("open");
      if (e === this.open || e === void 0 && this.open === !1)
        return;
      this.customStates.set("open", this.open), this.open ? await this.showMenu() : (this.closeAllSubmenus(), await this.hideMenu());
    }
    o.has("size") && this.syncItemSizes();
  }
  /** Gets all dropdown items slotted in the menu. */
  getItems(o = !1) {
    var a;
    const e = (((a = this.defaultSlot) == null ? void 0 : a.assignedElements({ flatten: !0 })) ?? []).filter(
      (r) => r.localName === "wa-dropdown-item"
    );
    return o ? e : e.filter((r) => !r.disabled);
  }
  /** Gets all dropdown items in a specific submenu. */
  getSubmenuItems(o, e = !1) {
    var t;
    const a = ((t = o.shadowRoot) == null ? void 0 : t.querySelector('slot[name="submenu"]')) || o.querySelector('slot[name="submenu"]');
    if (!a)
      return [];
    const r = a.assignedElements({ flatten: !0 }).filter((l) => l.localName === "wa-dropdown-item");
    return e ? r : r.filter((l) => !l.disabled);
  }
  /** Syncs item sizes with the dropdown's size property. */
  syncItemSizes() {
    var e;
    (((e = this.defaultSlot) == null ? void 0 : e.assignedElements({ flatten: !0 })) ?? []).filter(
      (a) => a.localName === "wa-dropdown-item"
    ).forEach((a) => a.size = this.size);
  }
  /** Handles the submenu navigation stack */
  addToSubmenuStack(o) {
    const e = this.openSubmenuStack.indexOf(o);
    e !== -1 ? this.openSubmenuStack = this.openSubmenuStack.slice(0, e + 1) : this.openSubmenuStack.push(o);
  }
  /** Removes the last item from the submenu stack */
  removeFromSubmenuStack() {
    return this.openSubmenuStack.pop();
  }
  /** Gets the current active submenu item */
  getCurrentSubmenuItem() {
    return this.openSubmenuStack.length > 0 ? this.openSubmenuStack[this.openSubmenuStack.length - 1] : void 0;
  }
  /** Closes all submenus in the dropdown. */
  closeAllSubmenus() {
    this.getItems(!0).forEach((e) => {
      e.submenuOpen = !1;
    }), this.openSubmenuStack = [];
  }
  /** Closes sibling submenus at the same level as the specified item. */
  closeSiblingSubmenus(o) {
    const e = o.closest('wa-dropdown-item:not([slot="submenu"])');
    let a;
    e ? a = this.getSubmenuItems(e, !0) : a = this.getItems(!0), a.forEach((r) => {
      r !== o && r.submenuOpen && (r.submenuOpen = !1);
    }), this.openSubmenuStack.includes(o) || this.openSubmenuStack.push(o);
  }
  /** Get the slotted trigger button, a <wa-button> or <button> element */
  getTrigger() {
    return this.querySelector('[slot="trigger"]');
  }
  /** Shows the dropdown menu. This should only be called from within updated(). */
  async showMenu() {
    if (!this.getTrigger() || !this.popup || !this.menu) return;
    const e = new ia();
    if (this.dispatchEvent(e), e.defaultPrevented) {
      this.open = !1;
      return;
    }
    if (this.popup.active)
      return;
    Pe.forEach((r) => r.open = !1), this.popup.active = !0, this.open = !0, Pe.add(this), da(this), this.syncAriaAttributes(), document.addEventListener("keydown", this.handleDocumentKeyDown), document.addEventListener("pointerdown", this.handleDocumentPointerDown), document.addEventListener("mousemove", this.handleGlobalMouseMove), this.menu.classList.remove("hide"), await ko(this.menu, "show");
    const a = this.getItems();
    a.length > 0 && (a.forEach((r, t) => r.active = t === 0), a[0].focus({ preventScroll: !0 })), this.dispatchEvent(new wa());
  }
  /** Hides the dropdown menu. This should only be called from within updated(). */
  async hideMenu() {
    if (!this.popup || !this.menu) return;
    const o = new sa({ source: this });
    if (this.dispatchEvent(o), o.defaultPrevented) {
      this.open = !0;
      return;
    }
    this.open = !1, Pe.delete(this), re(this), this.syncAriaAttributes(), document.removeEventListener("keydown", this.handleDocumentKeyDown), document.removeEventListener("pointerdown", this.handleDocumentPointerDown), document.removeEventListener("mousemove", this.handleGlobalMouseMove), this.menu.classList.remove("show"), await ko(this.menu, "hide"), this.popup.active = this.open, this.dispatchEvent(new ca());
  }
  /** Handles clicks on the menu. */
  handleMenuClick(o) {
    const e = o.target.closest("wa-dropdown-item");
    if (!(!e || e.disabled)) {
      if (e.hasSubmenu) {
        e.submenuOpen || (this.closeSiblingSubmenus(e), this.addToSubmenuStack(e), e.submenuOpen = !0), o.stopPropagation();
        return;
      }
      this.makeSelection(e);
    }
  }
  /** Prepares dropdown items when they get added or removed */
  async handleMenuSlotChange() {
    const o = this.getItems(!0);
    await Promise.all(o.map((r) => r.updateComplete)), this.syncItemSizes();
    const e = o.some((r) => r.type === "checkbox"), a = o.some((r) => r.hasSubmenu);
    o.forEach((r, t) => {
      r.active = t === 0, r.checkboxAdjacent = e, r.submenuAdjacent = a;
    });
  }
  /** Toggles the dropdown menu */
  handleTriggerClick() {
    this.open = !this.open;
  }
  /** Handles submenu opening events */
  handleSubmenuOpening(o) {
    const e = o.detail.item;
    this.closeSiblingSubmenus(e), this.addToSubmenuStack(e), this.setupSubmenuPosition(e), this.processSubmenuItems(e);
  }
  /** Sets up submenu positioning with autoUpdate */
  setupSubmenuPosition(o) {
    if (!o.submenuElement) return;
    this.cleanupSubmenuPosition(o);
    const e = pr(o, o.submenuElement, () => {
      this.positionSubmenu(o), this.updateSafeTriangleCoordinates(o);
    });
    this.submenuCleanups.set(o, e);
    const a = o.submenuElement.querySelector('slot[name="submenu"]');
    a && (a.removeEventListener("slotchange", P.handleSubmenuSlotChange), a.addEventListener("slotchange", P.handleSubmenuSlotChange), P.handleSubmenuSlotChange({ target: a }));
  }
  static handleSubmenuSlotChange(o) {
    const e = o.target;
    if (!e) return;
    const a = e.assignedElements().filter((l) => l.localName === "wa-dropdown-item");
    if (a.length === 0) return;
    const r = a.some((l) => l.hasSubmenu), t = a.some((l) => l.type === "checkbox");
    a.forEach((l) => {
      l.submenuAdjacent = r, l.checkboxAdjacent = t;
    });
  }
  processSubmenuItems(o) {
    if (!o.submenuElement) return;
    const e = this.getSubmenuItems(o, !0), a = e.some((r) => r.hasSubmenu);
    e.forEach((r) => {
      r.submenuAdjacent = a;
    });
  }
  /** Cleans up submenu positioning */
  cleanupSubmenuPosition(o) {
    const e = this.submenuCleanups.get(o);
    e && (e(), this.submenuCleanups.delete(o));
  }
  /** Positions a submenu relative to its parent item */
  positionSubmenu(o) {
    if (!o.submenuElement) return;
    const a = this.localize.dir() === "rtl" ? "left-start" : "right-start";
    mr(o, o.submenuElement, {
      placement: a,
      middleware: [
        vr({
          mainAxis: 0,
          crossAxis: -5
        }),
        gr({
          fallbackStrategy: "bestFit"
        }),
        fr({
          padding: 8
        })
      ]
    }).then(({ x: r, y: t, placement: l }) => {
      o.submenuElement.setAttribute("data-placement", l), Object.assign(o.submenuElement.style, {
        left: `${r}px`,
        top: `${t}px`
      });
    });
  }
  /** Updates the safe triangle coordinates for a submenu */
  updateSafeTriangleCoordinates(o) {
    var t;
    if (!o.submenuElement || !o.submenuOpen) return;
    if ((t = document.activeElement) == null ? void 0 : t.matches(":focus-visible")) {
      o.submenuElement.style.setProperty("--safe-triangle-visible", "none");
      return;
    }
    o.submenuElement.style.setProperty("--safe-triangle-visible", "block");
    const a = o.submenuElement.getBoundingClientRect(), r = this.localize.dir() === "rtl";
    o.submenuElement.style.setProperty(
      "--safe-triangle-submenu-start-x",
      `${r ? a.right : a.left}px`
    ), o.submenuElement.style.setProperty("--safe-triangle-submenu-start-y", `${a.top}px`), o.submenuElement.style.setProperty(
      "--safe-triangle-submenu-end-x",
      `${r ? a.right : a.left}px`
    ), o.submenuElement.style.setProperty("--safe-triangle-submenu-end-y", `${a.bottom}px`);
  }
  /** Makes a selection, emits the wa-select event, and closes the dropdown. */
  makeSelection(o) {
    const e = this.getTrigger();
    if (o.disabled)
      return;
    o.type === "checkbox" && (o.checked = !o.checked);
    const a = new jl({ item: o });
    this.dispatchEvent(a), a.defaultPrevented || (this.open = !1, e == null || e.focus({ preventScroll: !0 }));
  }
  /** Syncs aria attributes on the slotted trigger element and the menu based on the dropdown's current state */
  async syncAriaAttributes() {
    var a;
    const o = this.getTrigger();
    let e;
    o && (o.localName === "wa-button" ? (await customElements.whenDefined("wa-button"), await o.updateComplete, e = o.shadowRoot.querySelector('[part="base"]')) : e = o, e.hasAttribute("id") || e.setAttribute("id", Xa("wa-dropdown-trigger-")), e.setAttribute("aria-haspopup", "menu"), e.setAttribute("aria-expanded", this.open ? "true" : "false"), (a = this.menu) == null || a.setAttribute("aria-expanded", "false"));
  }
  render() {
    var e;
    let o = this.hasUpdated ? (e = this.popup) == null ? void 0 : e.active : this.open;
    return m`
      <wa-popup
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        ?active=${o}
        flip
        flip-fallback-strategy="best-fit"
        shift
        shift-padding="10"
        auto-size="vertical"
        auto-size-padding="10"
      >
        <slot
          name="trigger"
          slot="anchor"
          @click=${this.handleTriggerClick}
          @slotchange=${this.syncAriaAttributes}
        ></slot>
        <div
          id="menu"
          part="menu"
          role="menu"
          tabindex="-1"
          aria-orientation="vertical"
          @click=${this.handleMenuClick}
          @submenu-opening=${this.handleSubmenuOpening}
        >
          <slot @slotchange=${this.handleMenuSlotChange}></slot>
        </div>
      </wa-popup>
    `;
  }
};
P.css = [Uo, Wl];
s([
  z("slot:not([name])")
], P.prototype, "defaultSlot", 2);
s([
  z("#menu")
], P.prototype, "menu", 2);
s([
  z("wa-popup")
], P.prototype, "popup", 2);
s([
  u({ type: Boolean, reflect: !0 })
], P.prototype, "open", 2);
s([
  u({ reflect: !0 })
], P.prototype, "size", 2);
s([
  u({ reflect: !0 })
], P.prototype, "placement", 2);
s([
  u({ type: Number })
], P.prototype, "distance", 2);
s([
  u({ type: Number })
], P.prototype, "skidding", 2);
P = s([
  X("wa-dropdown")
], P);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Kl = D`
  :host {
    display: flex;
    position: relative;
    align-items: center;
    padding: 0.5em 1em;
    border-radius: var(--wa-border-radius-s);
    isolation: isolate;
    color: var(--wa-color-text-normal);
    line-height: var(--wa-line-height-condensed);
    cursor: pointer;
    transition:
      var(--wa-transition-fast) background-color var(--wa-transition-easing),
      var(--wa-transition-fast) color var(--wa-transition-easing);
  }

  @media (hover: hover) {
    :host(:hover:not(:state(disabled))) {
      background-color: var(--wa-color-neutral-fill-normal);
    }
  }

  :host(:focus-visible) {
    z-index: 1;
    outline: var(--wa-focus-ring);
    background-color: var(--wa-color-neutral-fill-normal);
  }

  :host(:state(disabled)),
  :host([disabled]) {
    opacity: 0.5;
    cursor: not-allowed;
    pointer-events: none;
  }

  /* Danger variant */
  :host([variant='danger']),
  :host([variant='danger']) #details {
    color: var(--wa-color-danger-on-quiet);
  }

  @media (hover: hover) {
    :host([variant='danger']:hover) {
      background-color: var(--wa-color-danger-fill-normal);
      color: var(--wa-color-danger-on-normal);
    }
  }

  :host([variant='danger']:focus-visible) {
    background-color: var(--wa-color-danger-fill-normal);
    color: var(--wa-color-danger-on-normal);
  }

  :host([checkbox-adjacent]) {
    padding-inline-start: 2em;
  }

  /* Only add padding when item actually has a submenu */
  :host([submenu-adjacent]:not(:state(has-submenu))) #details {
    padding-inline-end: 0;
  }

  :host(:state(has-submenu)[submenu-adjacent]) #details {
    padding-inline-end: 1.75em;
  }

  #check {
    visibility: hidden;
    margin-inline-start: -1.5em;
    margin-inline-end: 0.5em;
    font-size: var(--wa-font-size-smaller);
  }

  :host(:state(checked)) #check {
    visibility: visible;
  }

  #icon ::slotted(*) {
    display: flex;
    flex: 0 0 auto;
    align-items: center;
    margin-inline-end: 0.75em !important;
    font-size: var(--wa-font-size-smaller);
  }

  #label {
    flex: 1 1 auto;
    min-width: 0;
  }

  #details {
    display: flex;
    flex: 0 0 auto;
    align-items: center;
    justify-content: end;
    color: var(--wa-color-text-quiet);
    font-size: var(--wa-font-size-smaller) !important;
  }

  #details ::slotted(*) {
    margin-inline-start: 2em !important;
  }

  /* Submenu indicator icon */
  #submenu-indicator {
    position: absolute;
    inset-inline-end: 1em;
    color: var(--wa-color-neutral-on-quiet);
    font-size: var(--wa-font-size-smaller);
  }

  /* Flip chevron icon when RTL */
  :host(:dir(rtl)) #submenu-indicator {
    transform: scaleX(-1);
  }

  /* Submenu styles */
  #submenu {
    display: flex;
    z-index: 10;
    position: absolute;
    top: 0;
    left: 0;
    flex-direction: column;
    width: max-content;
    margin: 0;
    padding: 0.25em;
    border: var(--wa-border-style) var(--wa-border-width-s) var(--wa-color-surface-border);
    border-radius: var(--wa-border-radius-m);
    background-color: var(--wa-color-surface-raised);
    box-shadow: var(--wa-shadow-m);
    color: var(--wa-color-text-normal);
    text-align: start;
    user-select: none;

    /* Override default popover styles */
    &[popover] {
      margin: 0;
      inset: auto;
      padding: 0.25em;
      overflow: visible;
      border-radius: var(--wa-border-radius-m);
    }

    &.show {
      animation: submenu-show var(--show-duration, 50ms) ease;
    }

    &.hide {
      animation: submenu-show var(--show-duration, 50ms) ease reverse;
    }

    /* Submenu placement transform origins */
    &[data-placement^='top'] {
      transform-origin: bottom;
    }

    &[data-placement^='bottom'] {
      transform-origin: top;
    }

    &[data-placement^='left'] {
      transform-origin: right;
    }

    &[data-placement^='right'] {
      transform-origin: left;
    }

    &[data-placement='left-start'] {
      transform-origin: right top;
    }

    &[data-placement='left-end'] {
      transform-origin: right bottom;
    }

    &[data-placement='right-start'] {
      transform-origin: left top;
    }

    &[data-placement='right-end'] {
      transform-origin: left bottom;
    }

    /* Safe triangle styling */
    &::before {
      display: none;
      z-index: 9;
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-color: transparent;
      content: '';
      clip-path: polygon(
        var(--safe-triangle-cursor-x, 0) var(--safe-triangle-cursor-y, 0),
        var(--safe-triangle-submenu-start-x, 0) var(--safe-triangle-submenu-start-y, 0),
        var(--safe-triangle-submenu-end-x, 0) var(--safe-triangle-submenu-end-y, 0)
      );
      pointer-events: auto; /* Enable mouse events on the triangle */
    }

    &[data-visible]::before {
      display: block;
    }
  }

  ::slotted(wa-dropdown-item) {
    font-size: inherit;
  }

  ::slotted(wa-divider) {
    --spacing: 0.25em;
  }

  @keyframes submenu-show {
    from {
      scale: 0.9;
      opacity: 0;
    }
    to {
      scale: 1;
      opacity: 1;
    }
  }
`;
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var B = class extends Z {
  constructor() {
    super(...arguments), this.hasSlotController = new te(this, "[default]", "start", "end"), this.active = !1, this.variant = "default", this.size = "medium", this.checkboxAdjacent = !1, this.submenuAdjacent = !1, this.type = "normal", this.checked = !1, this.disabled = !1, this.submenuOpen = !1, this.hasSubmenu = !1, this.handleSlotChange = () => {
      this.hasSubmenu = this.hasSlotController.test("submenu"), this.updateHasSubmenuState(), this.hasSubmenu ? (this.setAttribute("aria-haspopup", "menu"), this.setAttribute("aria-expanded", this.submenuOpen ? "true" : "false")) : (this.removeAttribute("aria-haspopup"), this.removeAttribute("aria-expanded"));
    }, this.handleClick = (o) => {
      this.disabled && (o.preventDefault(), o.stopImmediatePropagation());
    };
  }
  connectedCallback() {
    super.connectedCallback(), this.addEventListener("mouseenter", this.handleMouseEnter.bind(this)), this.shadowRoot.addEventListener("click", this.handleClick, { capture: !0 }), this.shadowRoot.addEventListener("slotchange", this.handleSlotChange);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.closeSubmenu(), this.removeEventListener("mouseenter", this.handleMouseEnter), this.shadowRoot.removeEventListener("click", this.handleClick, { capture: !0 }), this.shadowRoot.removeEventListener("slotchange", this.handleSlotChange);
  }
  firstUpdated() {
    this.setAttribute("tabindex", "-1"), this.hasSubmenu = this.hasSlotController.test("submenu"), this.updateHasSubmenuState();
  }
  updated(o) {
    o.has("active") && (this.setAttribute("tabindex", this.active ? "0" : "-1"), this.customStates.set("active", this.active)), o.has("checked") && (this.type === "checkbox" ? this.setAttribute("aria-checked", this.checked ? "true" : "false") : this.removeAttribute("aria-checked"), this.customStates.set("checked", this.checked)), o.has("disabled") && (this.setAttribute("aria-disabled", this.disabled ? "true" : "false"), this.customStates.set("disabled", this.disabled), this.style.pointerEvents = this.disabled ? "none" : ""), o.has("type") && (this.type === "checkbox" ? (this.setAttribute("role", "menuitemcheckbox"), this.setAttribute("aria-checked", this.checked ? "true" : "false")) : (this.setAttribute("role", "menuitem"), this.removeAttribute("aria-checked"))), o.has("submenuOpen") && (this.customStates.set("submenu-open", this.submenuOpen), this.submenuOpen ? this.openSubmenu() : this.closeSubmenu());
  }
  /** Update the has-submenu custom state */
  updateHasSubmenuState() {
    this.customStates.set("has-submenu", this.hasSubmenu);
  }
  /** Opens the submenu. */
  async openSubmenu() {
    var e;
    const o = this.submenuElement;
    !this.hasSubmenu || !o || !this.isConnected || (this.notifyParentOfOpening(), (e = o.showPopover) == null || e.call(o), o.hidden = !1, o.setAttribute("data-visible", ""), this.submenuOpen = !0, this.setAttribute("aria-expanded", "true"), await ko(o, "show"), setTimeout(() => {
      const a = this.getSubmenuItems();
      a.length > 0 && (a.forEach((r, t) => r.active = t === 0), a[0].focus({ preventScroll: !0 }));
    }, 0));
  }
  /** Notifies the parent dropdown that this item is opening its submenu */
  notifyParentOfOpening() {
    const o = new CustomEvent("submenu-opening", {
      bubbles: !0,
      composed: !0,
      detail: { item: this }
    });
    this.dispatchEvent(o);
    const e = this.parentElement;
    e && [...e.children].filter(
      (r) => r !== this && r.localName === "wa-dropdown-item" && r.getAttribute("slot") === this.getAttribute("slot") && r.submenuOpen
    ).forEach((r) => {
      r.submenuOpen = !1;
    });
  }
  /** Closes the submenu. */
  async closeSubmenu() {
    var e;
    const o = this.submenuElement;
    !this.hasSubmenu || !o || (this.submenuOpen = !1, this.setAttribute("aria-expanded", "false"), o.hidden || (await ko(o, "hide"), o != null && o.isConnected && (o.hidden = !0, o.removeAttribute("data-visible"), (e = o.hidePopover) == null || e.call(o))));
  }
  /** Gets all dropdown items in the submenu. */
  getSubmenuItems() {
    return [...this.children].filter(
      (o) => o.localName === "wa-dropdown-item" && o.getAttribute("slot") === "submenu" && !o.hasAttribute("disabled")
    );
  }
  /** Handles mouse enter to open the submenu */
  handleMouseEnter() {
    this.hasSubmenu && !this.disabled && (this.notifyParentOfOpening(), this.submenuOpen = !0);
  }
  render() {
    return m`
      ${this.type === "checkbox" ? m`
            <wa-icon
              id="check"
              part="checkmark"
              exportparts="svg:checkmark__svg"
              library="system"
              name="check"
            ></wa-icon>
          ` : ""}

      <span id="icon" part="icon">
        <slot name="icon"></slot>
      </span>

      <span id="label" part="label">
        <slot></slot>
      </span>

      <span id="details" part="details">
        <slot name="details"></slot>
      </span>

      ${this.hasSubmenu ? m`
            <wa-icon
              id="submenu-indicator"
              part="submenu-icon"
              exportparts="svg:submenu-icon__svg"
              library="system"
              name="chevron-right"
            ></wa-icon>
          ` : ""}
      ${this.hasSubmenu ? m`
            <div
              id="submenu"
              part="submenu"
              popover="manual"
              role="menu"
              tabindex="-1"
              aria-orientation="vertical"
              hidden
            >
              <slot name="submenu"></slot>
            </div>
          ` : ""}
    `;
  }
};
B.css = Kl;
s([
  z("#submenu")
], B.prototype, "submenuElement", 2);
s([
  u({ type: Boolean })
], B.prototype, "active", 2);
s([
  u({ reflect: !0 })
], B.prototype, "variant", 2);
s([
  u({ reflect: !0 })
], B.prototype, "size", 2);
s([
  u({ attribute: "checkbox-adjacent", type: Boolean, reflect: !0 })
], B.prototype, "checkboxAdjacent", 2);
s([
  u({ attribute: "submenu-adjacent", type: Boolean, reflect: !0 })
], B.prototype, "submenuAdjacent", 2);
s([
  u()
], B.prototype, "value", 2);
s([
  u({ reflect: !0 })
], B.prototype, "type", 2);
s([
  u({ type: Boolean })
], B.prototype, "checked", 2);
s([
  u({ type: Boolean, reflect: !0 })
], B.prototype, "disabled", 2);
s([
  u({ type: Boolean, reflect: !0 })
], B.prototype, "submenuOpen", 2);
s([
  eo()
], B.prototype, "hasSubmenu", 2);
B = s([
  X("wa-dropdown-item")
], B);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Fa = (o, e, a) => {
  const r = /* @__PURE__ */ new Map();
  for (let t = e; t <= a; t++) r.set(o[t], t);
  return r;
}, $r = le(class extends ne {
  constructor(o) {
    if (super(o), o.type !== to.CHILD) throw Error("repeat() can only be used in text expressions");
  }
  dt(o, e, a) {
    let r;
    a === void 0 ? a = e : e !== void 0 && (r = e);
    const t = [], l = [];
    let n = 0;
    for (const i of o) t[n] = r ? r(i, n) : n, l[n] = a(i, n), n++;
    return { values: l, keys: t };
  }
  render(o, e, a) {
    return this.dt(o, e, a).values;
  }
  update(o, [e, a, r]) {
    const t = Nl(o), { values: l, keys: n } = this.dt(e, a, r);
    if (!Array.isArray(t)) return this.ut = n, l;
    const i = this.ut ?? (this.ut = []), c = [];
    let w, d, h = 0, p = t.length - 1, v = 0, f = l.length - 1;
    for (; h <= p && v <= f; ) if (t[h] === null) h++;
    else if (t[p] === null) p--;
    else if (i[h] === n[v]) c[v] = Eo(t[h], l[v]), h++, v++;
    else if (i[p] === n[f]) c[f] = Eo(t[p], l[f]), p--, f--;
    else if (i[h] === n[f]) c[f] = Eo(t[h], l[f]), Xo(o, c[f + 1], t[h]), h++, f--;
    else if (i[p] === n[v]) c[v] = Eo(t[p], l[v]), Xo(o, t[h], t[p]), p--, v++;
    else if (w === void 0 && (w = Fa(n, v, f), d = Fa(i, h, p)), w.has(i[h])) if (w.has(i[p])) {
      const g = d.get(n[v]), y = g !== void 0 ? t[g] : null;
      if (y === null) {
        const b = Xo(o, t[h]);
        Eo(b, l[v]), c[v] = b;
      } else c[v] = Eo(y, l[v]), Xo(o, t[h], y), t[g] = null;
      v++;
    } else Be(t[p]), p--;
    else Be(t[h]), h++;
    for (; v <= f; ) {
      const g = Xo(o, c[f + 1]);
      Eo(g, l[v]), c[v++] = g;
    }
    for (; h <= p; ) {
      const g = t[h++];
      g !== null && Be(g);
    }
    return this.ut = n, kr(o, c), I;
  }
});
class Sr extends lo {
  createRenderRoot() {
    return this;
  }
  constructor() {
    super(), this.sliders = [], this.model = null, this._dragging = /* @__PURE__ */ new Set();
  }
  _onSliderInput(e, a) {
    const r = e.target.value;
    this._dragging.add(a.axis), this.model && (this.model.set("_js_event", {
      type: "slider_changed",
      axis: a.axis,
      value: r
    }), this.model.save_changes());
  }
  _onSliderChange(e, a) {
    this._dragging.delete(a.axis);
  }
  render() {
    return m`
      ${$r(
      this.sliders,
      (e) => e.axis,
      (e) => m`
          <div class="ndv-slider-row ${e.visible ? "" : "ndv-hidden"}">
            <span class="ndv-axis-label">${e.label}</span>
            <wa-slider
              size="small"
              min=${e.min}
              max=${e.max}
              .value=${this._dragging.has(e.axis) ? void 0 : e.value}
              step=${e.step}
              with-tooltip
              @input=${(a) => this._onSliderInput(a, e)}
              @change=${(a) => this._onSliderChange(a, e)}
            ></wa-slider>
            <span class="ndv-value-label">${e.value} / ${e.max}</span>
          </div>
        `
    )}
    `;
  }
}
qo(Sr, "properties", {
  sliders: { type: Array },
  model: { type: Object }
});
customElements.get("ndv-dim-sliders") || customElements.define("ndv-dim-sliders", Sr);
class _r extends lo {
  createRenderRoot() {
    return this;
  }
  constructor() {
    super(), this.lut = {}, this.model = null, this.showHistogramButton = !0;
  }
  _sendLutUpdate(e) {
    this.model && (this.model.set("_js_event", {
      type: "update_lut",
      key: this.lut.key,
      ...e
    }), this.model.save_changes());
  }
  _onVisibleChange(e) {
    this._sendLutUpdate({ visible: e.target.checked });
  }
  _onCmapChange(e) {
    this._sendLutUpdate({ cmap_name: e.target.value });
  }
  _onClimInput(e) {
    const a = e.target;
    this._sendLutUpdate({
      clim_min: a.minValue ?? a.value,
      clim_max: a.maxValue ?? a.value
    });
  }
  _onAutoToggle() {
    const e = !this.lut.auto_clim, a = { auto_clim: e };
    e ? (a.auto_lower_tail = this.lut.auto_lower_tail || 0, a.auto_upper_tail = this.lut.auto_upper_tail || 0) : (a.clim_min = this.lut.clim_min, a.clim_max = this.lut.clim_max), this._sendLutUpdate(a);
  }
  render() {
    const e = this.lut;
    return !e || !e.key ? m`` : m`
      <div class="ndv-lut-row">
        <wa-checkbox
          size="small"
          ?checked=${e.visible}
          @change=${this._onVisibleChange}
        >
          <span class="ndv-channel-name">${e.name || e.key}</span>
        </wa-checkbox>

        ${e.show_cmap ? m`
              <div class="ndv-cmap-select">
                <wa-select
                  size="small"
                  value=${e.cmap_name}
                  @change=${this._onCmapChange}
                  hoist
                >
                  ${(e.cmap_options || []).map(
      (a) => m`<wa-option value=${a}>${a}</wa-option>`
    )}
                </wa-select>
              </div>
            ` : m`<span class="ndv-channel-name" style="opacity:0.5">RGB</span>`}

        <wa-slider
          size="small"
          range
          min=${e.clim_bound_min}
          max=${e.clim_bound_max}
          min-value=${e.clim_min}
          max-value=${e.clim_max}
          with-tooltip
          @input=${this._onClimInput}
        ></wa-slider>

        <div class="ndv-auto-btn">
          <wa-button
            size="small"
            appearance=${e.auto_clim ? "filled" : "outlined"}
            @click=${this._onAutoToggle}
          >
            Auto
          </wa-button>
        </div>
      </div>
    `;
  }
}
qo(_r, "properties", {
  lut: { type: Object },
  model: { type: Object },
  showHistogramButton: { type: Boolean }
});
customElements.get("ndv-lut-row") || customElements.define("ndv-lut-row", _r);
class zr extends lo {
  createRenderRoot() {
    return this;
  }
  constructor() {
    super(), this.luts = [], this.model = null, this.showHistogramButton = !0, this.useSharedHistogram = !1;
  }
  render() {
    return m`
      ${$r(
      this.luts,
      (e) => e.key,
      (e) => m`
          <ndv-lut-row
            .lut=${e}
            .model=${this.model}
            .showHistogramButton=${this.showHistogramButton && !this.useSharedHistogram}
            style="${e.row_visible ? "" : "display:none"}"
          ></ndv-lut-row>
        `
    )}
    `;
  }
}
qo(zr, "properties", {
  luts: { type: Array },
  model: { type: Object },
  showHistogramButton: { type: Boolean },
  useSharedHistogram: { type: Boolean }
});
customElements.get("ndv-lut-panel") || customElements.define("ndv-lut-panel", zr);
class Er extends lo {
  createRenderRoot() {
    return this;
  }
  constructor() {
    super(), this.model = null, this.channelMode = "grayscale", this.channelModeOptions = [], this.is3d = !1, this.show3dButton = !0, this.showChannelModeSelector = !0, this.showResetZoomButton = !0, this.showRoiButton = !1, this.showHistogramButton = !0, this.useSharedHistogram = !1, this.sharedHistogramVisible = !1, this.sharedHistogramLog = !1;
  }
  _sendAction(e, a = {}) {
    this.model && (this.model.set("_js_event", { type: e, ...a }), this.model.save_changes());
  }
  _onChannelModeChange(e) {
    this.model && (this.model.set("channel_mode", e.target.value), this.model.save_changes());
  }
  _onNdimToggle() {
    this._sendAction("ndim_toggle", { value: !this.is3d });
  }
  _onResetZoom() {
    this._sendAction("reset_zoom");
  }
  _onRoiToggle() {
    this._sendAction("roi_toggle", { value: !0 });
  }
  _onSharedHistogramToggle() {
    this.sharedHistogramVisible || this._sendAction("shared_histogram_request"), this.model && (this.model.set(
      "shared_histogram_visible",
      !this.sharedHistogramVisible
    ), this.model.save_changes());
  }
  _onSharedHistLogToggle() {
    this.model && (this.model.set("shared_histogram_log", !this.sharedHistogramLog), this.model.save_changes());
  }
  render() {
    return m`
      <div class="ndv-toolbar">
        <wa-button
          size="small"
          appearance=${this.sharedHistogramVisible ? "filled" : "outlined"}
          class="${this.useSharedHistogram ? "" : "ndv-hidden"}"
          @click=${this._onSharedHistogramToggle}
          title="Toggle shared histogram"
        >
          Hist
        </wa-button>

        <wa-button
          size="small"
          appearance=${this.sharedHistogramLog ? "filled" : "outlined"}
          class="${this.sharedHistogramVisible ? "" : "ndv-hidden"}"
          @click=${this._onSharedHistLogToggle}
          title="Log scale"
        >
          Log
        </wa-button>

        <div class="ndv-spacer"></div>

        <wa-select
          size="small"
          value=${this.channelMode}
          class="${this.showChannelModeSelector ? "" : "ndv-hidden"}"
          @change=${this._onChannelModeChange}
          hoist
        >
          ${(this.channelModeOptions || []).map(
      (e) => m`<wa-option value=${e.value} ?disabled=${!e.enabled}>
                ${e.label}
              </wa-option>`
    )}
        </wa-select>

        <wa-button
          size="small"
          appearance=${this.is3d ? "filled" : "outlined"}
          class="${this.show3dButton ? "" : "ndv-hidden"}"
          @click=${this._onNdimToggle}
          title="${this.is3d ? "Switch to 2D" : "Switch to 3D"}"
        >
          ${this.is3d ? "3D" : "2D"}
        </wa-button>

        <wa-button
          size="small"
          appearance="outlined"
          class="${this.showRoiButton ? "" : "ndv-hidden"}"
          @click=${this._onRoiToggle}
          title="Add ROI"
        >
          ROI
        </wa-button>

        <wa-button
          size="small"
          appearance="outlined"
          class="${this.showResetZoomButton ? "" : "ndv-hidden"}"
          @click=${this._onResetZoom}
          title="Reset zoom"
        >
          ⛶
        </wa-button>
      </div>
    `;
  }
}
qo(Er, "properties", {
  model: { type: Object },
  channelMode: { type: String },
  channelModeOptions: { type: Array },
  is3d: { type: Boolean },
  show3dButton: { type: Boolean },
  showChannelModeSelector: { type: Boolean },
  showResetZoomButton: { type: Boolean },
  showRoiButton: { type: Boolean },
  showHistogramButton: { type: Boolean },
  useSharedHistogram: { type: Boolean },
  sharedHistogramVisible: { type: Boolean },
  sharedHistogramLog: { type: Boolean }
});
customElements.get("ndv-toolbar") || customElements.define("ndv-toolbar", Er);
class Ar extends lo {
  createRenderRoot() {
    return this;
  }
  constructor() {
    super(), this.model = null, this._sliders = [], this._luts = [], this._channelMode = "grayscale", this._channelModeOptions = [], this._showControls = !0, this._is3d = !1, this._show3dButton = !0, this._showChannelModeSelector = !0, this._showResetZoomButton = !0, this._showRoiButton = !1, this._showHistogramButton = !0, this._useSharedHistogram = !1, this._sharedHistogramVisible = !1, this._sharedHistogramLog = !1, this._cleanups = [];
  }
  connectedCallback() {
    super.connectedCallback(), this.model && this._bindModel();
  }
  updated(e) {
    e.has("model") && this.model && this._bindModel();
  }
  _bindModel() {
    const e = this.model, a = (r, t) => {
      this[t] = e.get(r) ?? this[t];
      const l = () => {
        this[t] = e.get(r);
      };
      e.on(`change:${r}`, l), this._cleanups.push(() => e.off(`change:${r}`, l));
    };
    a("sliders", "_sliders"), a("luts", "_luts"), a("channel_mode", "_channelMode"), a("channel_mode_options", "_channelModeOptions"), a("show_controls", "_showControls"), a("is_3d", "_is3d"), a("show_3d_button", "_show3dButton"), a("show_channel_mode_selector", "_showChannelModeSelector"), a("show_reset_zoom_button", "_showResetZoomButton"), a("show_roi_button", "_showRoiButton"), a("show_histogram_button", "_showHistogramButton"), a("use_shared_histogram", "_useSharedHistogram"), a("shared_histogram_visible", "_sharedHistogramVisible"), a("shared_histogram_log", "_sharedHistogramLog");
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    for (const e of this._cleanups) e();
    this._cleanups = [];
  }
  render() {
    return m`
      <div class="ndv-root">
        <ndv-dim-sliders
          class="${this._showControls ? "" : "ndv-hidden"}"
          .sliders=${this._sliders}
          .model=${this.model}
        ></ndv-dim-sliders>

        <ndv-lut-panel
          class="${this._showControls ? "" : "ndv-hidden"}"
          .luts=${this._luts}
          .model=${this.model}
          .showHistogramButton=${this._showHistogramButton}
          .useSharedHistogram=${this._useSharedHistogram}
        ></ndv-lut-panel>

        <ndv-toolbar
          class="${this._showControls ? "" : "ndv-hidden"}"
          .model=${this.model}
          .channelMode=${this._channelMode}
          .channelModeOptions=${this._channelModeOptions}
          .is3d=${this._is3d}
          .show3dButton=${this._show3dButton}
          .showChannelModeSelector=${this._showChannelModeSelector}
          .showResetZoomButton=${this._showResetZoomButton}
          .showRoiButton=${this._showRoiButton}
          .showHistogramButton=${this._showHistogramButton}
          .useSharedHistogram=${this._useSharedHistogram}
          .sharedHistogramVisible=${this._sharedHistogramVisible}
          .sharedHistogramLog=${this._sharedHistogramLog}
        ></ndv-toolbar>
      </div>
    `;
  }
}
qo(Ar, "properties", {
  model: { type: Object },
  _sliders: { state: !0 },
  _luts: { state: !0 },
  _channelMode: { state: !0 },
  _channelModeOptions: { state: !0 },
  _showControls: { state: !0 },
  _is3d: { state: !0 },
  _show3dButton: { state: !0 },
  _showChannelModeSelector: { state: !0 },
  _showResetZoomButton: { state: !0 },
  _showRoiButton: { state: !0 },
  _showHistogramButton: { state: !0 },
  _useSharedHistogram: { state: !0 },
  _sharedHistogramVisible: { state: !0 },
  _sharedHistogramLog: { state: !0 }
});
customElements.get("ndv-controls") || customElements.define("ndv-controls", Ar);
const Yl = customElements.define.bind(customElements);
customElements.define = function(o, e, a) {
  customElements.get(o) || Yl(o, e, a);
};
const Ia = [Rr, Mr, qr].join(`
`);
let Pa = !1;
function Xl(o) {
  const e = o.getRootNode(), a = e instanceof ShadowRoot ? e : document.head;
  if (a.querySelector("[data-ndv-controls-style]")) return;
  const r = document.createElement("style");
  if (r.setAttribute("data-ndv-controls-style", ""), r.textContent = Ia, a.appendChild(r), a !== document.head && !Pa) {
    const t = document.createElement("style");
    t.setAttribute("data-ndv-controls-style", ""), t.textContent = Ia, document.head.appendChild(t), Pa = !0;
  }
}
function Zl({ model: o, el: e }) {
  Xl(e);
  const a = document.createElement("ndv-controls");
  return a.model = o, e.appendChild(a), () => a.remove();
}
const rn = { render: Zl };
export {
  rn as default
};
