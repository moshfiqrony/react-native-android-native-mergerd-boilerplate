package com.myapp;

import android.content.Intent;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import javax.annotation.Nonnull;

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
