# MataiPro

[![Travis (.com)](https://img.shields.io/travis/matai-tech/matai-pro.svg?style=popout-square)](https://travis-ci.org/matai-tech/matai-pro.svg?branch=master)
[![GitHub](https://img.shields.io/github/license/matai-tech/matai-pro.svg?style=popout-square)](https://github.com/matai-tech/matai-pro/blob/master/LICENSE)
[![npm](https://img.shields.io/npm/v/matai-pro.svg?style=popout-square)](https://www.npmjs.com/package/matai-pro)

Dev environment is from [ng-zorro-antd](https://github.com/NG-ZORRO/ng-zorro-antd)

## Quick start

```shell
$ npm install three -S
$ npm install matai-pro -S
```

```ts
// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MataiProModule } from 'matai-pro';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MataiProModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

## Development
```shell
$ git clone https://github.com/matai-tech/matai-pro.git
$ cd matai-pro
$ npm install
$ npm run start
```

## Publish
```shell
$ npm config set scope mta-tech
$ npm run release
# after CI passed
$ npm run generate
$ cd publish && npm publish
```


