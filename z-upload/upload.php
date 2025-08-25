<?php 
include_once "connect.php"; 

if ($_POST["submit"]) {
    $fullName = $_POST["fullname"];
    $fileName = $_FILES["image"]["name"];
    $ext = strtolower(pathinfo($fileName, PATHINFO_EXTENSION));
    $allowedTypes = ["jpg", "jpeg", "png", "gif", "webp", "bmp", "svg"];
    $tempName = $_FILES["image"]["tmp_name"];
    $targetPath = __DIR__."/uploads/".$fileName;
    
    // Create uploads directory if it doesn't exist
    if (!is_dir(__DIR__."/uploads/")) {
        mkdir(__DIR__."/uploads/", 0777, true);
    }
    
    if(in_array($ext, $allowedTypes)){
        if(move_uploaded_file($tempName, $targetPath)){
            $query = "INSERT INTO images (name, filename) VALUES ('$fullName', '$fileName')";
            if(mysqli_query($con, $query)){
                header("Location: ../index.php");
            }else{
                echo "Something is wrong";
            }
        }else{
            echo "File is not uploaded";
        }
    }else{
        echo "Your files are not allowed";
    }
}
?>