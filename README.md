# Rete Academy User Interface
> Inspired from [Elearn](https://www.figma.com/file/eSne3eAzr18sYZGLNUEHc3/Elearn-Dashboard), designed by [To Dao](https://dribbble.com/todao).

![preview image](elearn.png)

## Features
* Modern design.
* First class TypeScript support.
* Server side rendering support.
* Individually packaged and released components.


## Usage
1. This library use `TailwindCSS`'s packages as peer dependencies, so make sure your project already works well with Tailwind at first.
2. It's recommend that import only what you need. For example, if you need `Button`, import it with npm (or yarn):
```javascript
npm install @rete-academy/button
// then
import Button from '@rete-academy/button';
```

In case you want the whole library, install it by (still under development):
```javascript
npm install @rete-academy/ui
// then
import { Button } from '@rete-academy/ui';
```


## Development
#### Create new component:
> (should create a script for this later)

```bash
1. lerna create @rete-academy/[component-name] --yes
2. lerna add @rete-academy/[component-name] --scope=@rete-academy/ui
3. lerna add react --dev --scope '{@rete-academy/[component-name]}'
4. lerna add react@17.x --peer --scope '{@rete-academy/[component-name]}'
5. lerna add clsx --scope '{@rete-academy/[component-name]}' # (* Optional)
6. lerna add @rete-academy/builder --dev --scope '{@rete-academy/[component-name]}'
```

Definition files are in `lib` folder.

#### Some useful scripts for development
* `npm run storybook`: to preview the components.
* `npm run build`: to build project, we use Rollup here.
* `npm run publish:storybook`: update the GitHub pages, we use Storybook.
* `npm run publish`: publish all packages into npm.
* Not Available yet: `npm run test`: (TODO: make unit test for packages)
