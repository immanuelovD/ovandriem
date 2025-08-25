

<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="thestyling.css">

<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">


</head>                                                               
<body>

<div class="topnav">
<script src="scriipt.js"></script>
</div>
<div style="padding: 33px;"> 
  <br>
    <div> 
      <hr>
    <h1> Welcome to my homepage! </h1>
    <pre style="padding-left: 20px; font-style: italic; font-size: large;">- Immanuel Orfeo van Driem</pre>

    <div class="container mt-5">
    <?php
    include_once"connect.php";
    $query = "SELECT * FROM images";
    $result = mysqli_query($conn, $query);
    echo "<a class='btn btn-info mb-4' href='create.php'>Add New</a>";
    if ($result->num_rows>0) {
        while($row = mysqli_fetch_array($result)){
            $name = $row["name"];
            $fileName = $row["filename"];
            $imageUrl = "uploads/".$fileName;
            echo "<div class='profile mt-4'>";
            echo "<img src='$imageUrl'>";
            echo "<h3>$name</h3>";
            echo "</div>";
        }
    }
    ?>
    </div>
</body>
</html>


    


    <br>

    <p> 
      This is my first PHP project, I hope you like it! 
    </p>
    <p> 
      If you want to see the code, you can find it on my GitHub page: 
      <a href="


</div>

<br><br>
  
  <p>
  
</p>
</div>
<div style="padding-left: 14px;"> 
</div>


</body>
</html>