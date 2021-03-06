# React Native and Android Native merged boilerplate

In this repo you can have a React Native app and a basic Android app.
Using this repo you can add multiple android native intent or activity to your react native app. just simply open the android folder with your android studio and use the folder as your android native app and the root as your react native app

## Pre Environment or setup
1. [JDK 1.8](https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html) or higher
2. JAVA_HOME path setup correctly.
3. [Android Studio](https://developer.android.com/studio) installed and running.


**for all kind of environment edit like adding path and installing node, restart your ide.


## How to use the repo?
1. Simply clone the repo or download it.
2. Open the android folder with [Android Studio](https://developer.android.com/studio)
3. Open the root folder with any IDE like 
[Visual Code](https://code.visualstudio.com/), 
[Pycharm](https://www.jetbrains.com/pycharm/), 
[WebStorm](https://www.jetbrains.com/webstorm/),
4. run ```npm install``` or ```yarn install``` from the root of the repo.
5. Now run ```react-native run-android``` then run ```react-native start``` if you get any error like **debug.keystore** not found or SDK dir not found then.
6. Create **local.properties** file inside android folder and write 

```sdk.dir = your sdk dir```


7. run this command 

```keytool -genkey -v -keystore debug.keystore -storepass android -alias androiddebugkey -keypass android -keyalg RSA -keysize 2048 -validity 10000```

for **debug.keystore** if needed and move it to **app** folder under **android** folder

8. Finally run ```react-native run-android```

9. And run ```react-native start```

10. if ```react-native start``` is giving Invalid regular expression invalid error check **node.js** version and install version **10**

11. if adb is not found then add the path ```<YOUR_SDK_LOCATION>\platform-tools``` in environment variables


## How to add Android Native Activity
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
```java 
modules.add(new BasicModule(reactContext));
```
**Full code is here**
```java
public class MyModulePackage implements ReactPackage {
    @Nonnull
    @Override
    public List<NativeModule> createNativeModules(@Nonnull ReactApplicationContext reactContext) {
        List <NativeModule> modules = new ArrayList();
        modules.add(new BasicModule(reactContext));
        //add more here
        return modules;
    }

    @Nonnull
    @Override
    public List<ViewManager> createViewManagers(@Nonnull ReactApplicationContext reactContext) {
        return Collections.emptyList();
    }
}
```

In this way add how many activities you need.

## How to use it in React Native
1. Import NativeModules
```javascript 
import {StyleSheet, View, Text, Button, NativeModules} from 'react-native';
```
2. Use it like 
```javascript 
NativeModules.MyModule.NavigateMe();
```
here ```NavigateMe()``` is the ```@ReactMethod``` that we defined in our activity **BasicModule**

Now whenever the code will call the function ```NavigateMe()``` it will activate the android native activity **Basic Module**


Happy Coding


