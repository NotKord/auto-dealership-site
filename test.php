<?php
    $imagePath = $_SERVER['DOCUMENT_ROOT'] . "/~hymank68/webdev/project/services/listings/pics/silverado.jpg";

    // Check the resolved path
    $realPath = realpath($imagePath);
    unlink($imagePath);
    if ($realPath) {
        echo "Resolved Path: $realPath<br>";
    } else {
        echo "realpath() failed. The path might not exist as expected.<br>";
    }    
?>