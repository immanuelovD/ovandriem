

<div class="topnav" id="myTopnav">

<a href="">Start</a>
<a href="">who I am</a>
<a href="">Music</a>
 <div class="dropdown">
    <button class="dropbtn">Medicine/Health 
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content">
      <a href="#">Link 1</a>
      <a href="#">Link 2</a>
      <a href="#">Link 3</a>
    </div>
  </div> 
<div class="dropdown">
    <button class="dropbtn">Blog 
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content">
      <a href="#">Link 1</a>
      <a href="#">Link 2</a>
      <a href="#">Link 3</a>
    </div>
  </div>
<a href="">My Social Media&Links</a>
  
  <a href="#about">About</a>
  <a href="javascript:void(0);" style="font-size:15px;" class="icon" onclick="myFunction()">&#9776;</a>
</div>

<div style="padding-left:250px">
  <h2>Welcome</h2>
  <p>Resize the browser window to see how it works.</p>
  <p>Hover over the dropdown button to open the dropdown menu.</p>
<?php
date_default_timezone_set("Europe/Amsterdam");
echo "The time is " . date("h:i:sa - ");        
echo "";
echo "The date is " . date ("jS-M-y");
?>
</div>
//https://how.dev/answers/how-to-format-a-date-in-php 
<script>
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}  

</script>

</body>
</html>