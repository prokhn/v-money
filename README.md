# v-money Mask for Vue.js

![The Mask Money](https://cdn-images-1.medium.com/max/600/1*Rpc289FpghuHrnzyVpOUig.gif)

## Features

- Lightweight (<2KB gzipped)
- Dependency free
- Mobile support
- Component or Directive flavors
- Accept copy/paste
- Editable
- Min / Max Limits

For other types of mask, use [vue-the-mask](https://vuejs-tips.github.io/vue-the-mask)

## Usage

### A. Globally

```js
import Vue from 'vue'
import money from 'v-money'

// register directive v-money and component <money>
Vue.use(money, {precision: 4})
```

### B. Use as component: https://jsfiddle.net/auom8st8/

```html
<template>
  <div>
    <money v-model="price" v-bind="money"></money> {{price}}
  </div>
</template>

<script>
  import {Money} from 'v-money'

  export default {
    components: {Money},

    data () {
      return {
        price: 123.45,
        money: {
          decimal: ',',
          thousands: '.',
          prefix: 'R$ ',
          suffix: ' #',
          precision: 2,
          masked: false,
          min: Number.MIN_SAFE_INTEGER,
          max: Number.MAX_SAFE_INTEGER
        }
      }
    }
  }
</script>
```

### C. Use as directive: https://jsfiddle.net/nj3cLoum/2/
Must use `vmodel.lazy` to bind works properly.
```html
<template>
  <div>
    <input v-model.lazy="price" v-money="money" /> {{price}}
  </div>
</template>

<script>
  import {VMoney} from 'v-money'

  export default {
    data () {
      return {
        price: 123.45,
        money: {
          decimal: ',',
          thousands: '.',
          prefix: 'R$ ',
          suffix: ' #',
          precision: 2,
          masked: false /* doesn't work with directive */,
          min: Number.MIN_SAFE_INTEGER,
          max: Number.MAX_SAFE_INTEGER
        }
      }
    },

    directives: {money: VMoney}
  }
</script>
```

## Properties

| property   | Required | Type    | Default | Description                                             |
|------------|----------|---------|---------|---------------------------------------------------------|
| precision  | **true** | Number  | 2       | How many decimal places                                 |
| decimal    | false    | String  | "."     | Decimal separator                                       |
| thousands  | false    | String  | ","     | Thousands separator                                     |
| prefix     | false    | String  | ""      | Currency symbol followed by a Space, like "R$ "         |
| suffix     | false    | String  | ""      | Percentage for example: " %"                            |
| masked     | false    | Boolean | false   | If the component output should include the mask or not  |
| allowBlank | false    | Boolean | false   | If the field can start blank and be cleared out by user |
| property  | Required | Type    | Default                 | Description                              |
| min       | false    | Number  | Number.MIN_SAFE_INTEGER | The min value allowed                    |
| max       | false    | Number  | Number.MAX_SAFE_INTEGER | The max value allowed                    |

### References

- https://en.wikipedia.org/wiki/Decimal_mark
- https://docs.oracle.com/cd/E19455-01/806-0169/overview-9/index.html
- http://www.xe.com/symbols.php
- https://github.com/kevinongko/vue-numeric
- https://github.com/plentz/jquery-maskmoney
