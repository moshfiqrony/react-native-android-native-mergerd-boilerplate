# React Native and Anroid Native merged boilerplate

In this repo you can have a React Native app created by create-react-app command and a basic Android app.
Unsing this repo you can add mutiple android native intent or acativity to your react native app. just simply open the android folder with your android studio and use the folder as your android native app and the root as your react native app

## How to use the repo?
1. Simply clone the repo or download it.
2. Open the android folder with [Android Studio](https://developer.android.com/studio)
3. Open the root folder with any IDE like 
[Visual Code](https://code.visualstudio.com/), 
[Pycharm](https://www.jetbrains.com/pycharm/), 
[WebStorm](https://www.jetbrains.com/webstorm/),
4. run ```npm install``` or ```yarn install``` from the root of the repo.
5. Now run ```npm start``` or ```yarn start``` from the root of the repo.


## How to add Anroid Native Activity
1. Open the android folder with [Android Studio](https://developer.android.com/studio)
2. Now create an empty activity eg. My one I named as **BasicModule**
3. Now Extend **ReactContextBaseJavaModule** overrride and rearrange it all the required methods like bellow
```java
public class BasicModule extends ReactContextBaseJavaModule {

    ReactApplicationContext context = getReactApplicationContext();

    public BasicModule(@Nonnull ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Nonnull
    @Override
    public String getName() {
        return "MyModule";
    }


    @ReactMethod
    public void NavigateMe(){
        Intent intent = new Intent(context, NavigationDrawerActivity.class);
        if(intent.resolveActivity(context.getPackageManager()) != null){
            intent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
            context.startActivity(intent);
        }
    }
}
```
Your activity is now having a NavigationDrawer you can do whatever you need.

4. Now goto **MyModulePackage.java** and add your actvity like this bellow
```modules.add(new BasicModule(reactContext));```

In this way add how many activities you need.

## How to use it in Reacti Native
1. Import NativeModules
```javascript 
import {StyleSheet, View, Text, Button, NativeModules} from 'react-native';
```
2. Use it like 
```NativeModules.MyModule.NavigateMe();``` here ```NavigateMe()``` is the ```@ReactMethod``` that we defined in our activity **BasicModule**

Happy Coding


