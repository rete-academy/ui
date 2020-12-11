# UI
The Rete Academy User Interface library

### Create new component:

1. `lerna create @rete-academy/[component-name] --yes`
2. `lerna add @rete-academy/[component-name] --scope=@rete-academy/ui`
3. `lerna add react --dev --scope '{@rete-academy/[component-name]}'`
4. `lerna add react@17.x --peer --scope '{@rete-academy/[component-name]}'`
5. `lerna add clsx --scope '{@rete-academy/[component-name]}'` (* Optional)
6. `lerna add @rete-academy/builder --dev --scope '{@rete-academy/[component-name]}'

Definition files are in `lib` folder.
