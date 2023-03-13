import React, { Fragment } from "react";
export default function Pricing(){
    return( 
        <Fragment> 
<div id="pricing-table" class="clear">
<div class="plan">
<h3>Enterprise<span>$59</span></h3>
<a class="signup" href='/sign-up'>Sign up</a>        
<ul>
<li>Price Alerts</li>
<li>Risk Assessment</li>
<li>Suggested Entry and Exit Signals</li>
</ul> 
</div>
<div class="plan" id="most-popular">
<h3>Standard<span>FREE</span></h3>
<a class="signup" href='/sign-up'>Sign up</a>        
<ul>
<li>Free Courses</li>
<li>Free Market Anaylsis</li>
<li></li>
</ul>    
</div>
<div class="plan">
<h3>Premium<span>$17</span></h3>
<a class="signup" href='/sign-up'>Sign up</a>        
<ul>
<li>Premium Courses</li>
<li><b>Full News Access</b></li>
<li>Ad-free</li>
</ul>
</div>

</div>
</Fragment>
    );
}