import React from 'react';
import ReactDOM from 'react-dom';

import  Welcome  from "./welcomecomponent";
import Community from './community';

import Review from './component/review/reviewComponent';
import Lifecycle from './lifecycle/lifecycle';
import RestAPI from './remoteData/remotedata';

var location = document.getElementById('home');
var loc2= document.getElementById('day2');
var loc3= document.getElementById('lifecycle');
var loc4= document.getElementById('remoteData');

ReactDOM.render(
    <div>
        <Welcome msg="Namste" msg2="Bangalore"></Welcome>
        <Welcome msg="Hello" msg2="USA"></Welcome>
        <Welcome msg="Namskar" msg2="Chennai"></Welcome>
        <Community></Community>
    </div>
,location)
ReactDOM.render(
    <div>
<div>
<Review title="Samsung Galary note 9" rating="0" desc="Creativity comes with cost!" ></Review>
<Review title="Nokia 3010" desc="Creativity comes with cost!" rating="2"></Review>
<Review title="Samsung Galary note 9" desc="Creativity comes with cost!" rating="2"></Review>
<Review title="Nokia 3010" desc="Creativity comes with cost!" rating="3"></Review>
</div>
</div>,loc2)
ReactDOM.render(<Lifecycle></Lifecycle>,loc3)
ReactDOM.render(<RestAPI></RestAPI>,loc4)

//ReactDOM.render(<Community></Community>,loc2);