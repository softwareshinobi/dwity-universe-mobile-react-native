import React, { Component, useState, useEffect } from 'react';

import { StatusBar } from 'expo-status-bar';

import { StyleSheet, Text, View } from 'react-native';

import axios from 'axios';

export default function App() {

  const [data, setData] = useState({ status: [] });
    
useEffect(() => {
         
        console.log("enter :: componentDidMount()");
        
        console.log("Sending rest request");

        var request = new XMLHttpRequest();

        request.onreadystatechange = (e) => {

            if (request.readyState !== 4) {
            
                return;
            
            }

            if (request.status === 200) {
    
                console.log("the response came back good");

                console.log("response: " + request.responseText);

                console.log("load-state-before: ")
                console.log(data);

                setData(request.responseText);

                console.log("load-state-after: ")
                console.log(data);

            } else {
           
                console.warn('error');
                
            }
            
       };
       
       var restEndpoint = 'http://desktop.softwareshinobi.online:8080/dwity/latest-known-event';
    
    console.log("endpoint URL: ",restEndpoint );

    request.open('GET', restEndpoint);
    
    request.send();

    console.log("finished sending request");
         
    }, []);
  
    return (

        <View style={styles.container}>

            <Text style={styles.content}>

                   { data + "" }
                
            </Text>

            <StatusBar style="auto" />

        </View>
        
    );
  
}

const styles = StyleSheet.create({

    container: {

        flex: 1,     

        backgroundColor: 'pink',

        alignItems: 'center',

        justifyContent: 'center',

    },

    content: {
    
        //   fontSize: RFValue(124, 580), // arg #2 is standardScreenHeight(optional), 
    
        fontSize: 48,
    
     transform: [{ rotate: '90deg'}]//this needs to be removed
    
    },

});
