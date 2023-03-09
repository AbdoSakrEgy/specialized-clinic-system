import React, { useRef,useState,useEffect } from "react";

function AsyncTest() {
    // Async by using callback function
    setTimeout(()=>{
        document.getElementById("title1").style.visibility="hidden";
        setTimeout(()=>{
            document.getElementById("title2").style.visibility="hidden";
            setTimeout(()=>{
                document.getElementById("title3").style.visibility="hidden";
            },1000);
        },1000);
    },1000);
    // Async by using promise object
    // new Promise((resolve,reject)=>{
    //     setTimeout(() => {
    //         document.getElementById("div1").style.visibility="hidden";
    //         resolve();
    //     }, 1000);
    // }).then(()=>{
    //    new Promise((resolve,reject)=>{
    //         setTimeout(() => {
    //             document.getElementById("div2").style.visibility="hidden";
    //             resolve();
    //         }, 1000);
    //    }).then(()=>{
    //         setTimeout(() => {
    //             document.getElementById("div3").style.visibility="hidden";
    //         }, 1000);
    //    })
    // })

    // Async by using promise object
    const myPromise=new Promise((resolve,reject)=>{
        setTimeout(() => {
            document.getElementById("div1").style.visibility="hidden";
            false ? resolve() : reject()
        }, 1000);
    })
    myPromise.then(
        ()=>{
            setTimeout(() => {
                document.getElementById("div2").style.visibility="hidden";
            }, 1000);
        },
        ()=>{
            setTimeout(() => {
                document.getElementById("div3").style.visibility="hidden";
            }, 1000);
        }
    )

    // Async/Await
    async function myFun(){
        let json=(await fetch("http://localhost:4001/users")).json()
        console.log(json);
    }
    myFun();
    return ( 
        <React.Fragment>
            <div className="p-10 bg-black">
                <p className="bg-white">
                    <div id="title1">title1</div>
                    <div id="title2">title2</div>
                    <div id="title3">title3</div>
                    <div id="title4">title4</div>
                </p>
            </div>
            <div className="p-10 bg-yellow-500">
                <p className="bg-white">
                    <div id="div1">div1</div>
                    <div id="div2">div2</div>
                    <div id="div3">div3</div>
                    <div id="div4">div4</div>
                </p>
            </div>
            <div className="p-10 bg-green-500">
                <p className="bg-white">
                    <div id="part1">part1</div>
                    <div id="part2">part2</div>
                    <div id="part3">part3</div>
                    <div id="part4">part4</div>
                </p>
            </div>
        </React.Fragment>
     );
}

export default AsyncTest;