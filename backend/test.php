<?php

function insertOperationHours($year) {
    $servername = 'elvisdb';
    $username = 'hymank68';
    $password = '1GReen8dog!';
    $databasename = 'hymank68';

    // Connection to the database
    $connection = mysqli_connect($servername, $username, $password, $databasename);

    // Check connection
    if (!$connection) {
        die('Connection unsuccessful : ' . mysqli_connect_error());
    }

    // Loop through all days in the given year
    $startDate = $year . '-01-01'; // Start date of the year
    $endDate = $year . '-12-31'; // End date of the year

    $currentDate = $startDate;
    while (strtotime($currentDate) <= strtotime($endDate)) {
        // Format the date
        $dateFormatted = date('Y-m-d', strtotime($currentDate));
        
        // Define the status, open_time, and close_time
        $status = 'open';
        $open_time = '09:00';
        $close_time = '19:30';

        // Prepare the SQL statement
        $sql = "INSERT INTO auto_hours (date, status, open_time, close_time) 
                VALUES ('$dateFormatted', '$status', '$open_time', '$close_time')";

        // Execute the query
        if (!mysqli_query($connection, $sql)) {
            echo 'Error inserting record for ' . $dateFormatted . ': ' . mysqli_error($connection) . "<br>";
        }

        // Move to the next day
        $currentDate = date('Y-m-d', strtotime($currentDate . ' +1 day'));
    }

    // Close the connection
    mysqli_close($connection);

    echo 'Operation hours successfully inserted for the year ' . $year;
};

insertOperationHours(2025);

?>