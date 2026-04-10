<?php 
    function validate_input($data){
        $data = trim($data);//remove white spaces at end
        $data = stripslashes($data);
        $data = htmlspecialchars($data);

        return $data;
    };
    
    function getAutoListing($findAt) {
        $servername = 'elvisdb';
        $username = 'hymank68';
        $password = '1GReen8dog!';
        $databasename = 'hymank68';

        //Connection to a database
        $connection = mysqli_connect($servername,$username,$password, $databasename);
    
        // Check connection
        if(!$connection) {
            die ('Connection unsuccessful : ' . mysqli_connect_error());
        }
        else {
            echo '<script>console.log("Connection success!"); </script>';
        }
        
        //Setup or define our Update Query, the run it 
        $sql = "SELECT * FROM auto_listings 
            WHERE listing_vin = '$findAt';
        ";

        $result = mysqli_query($connection, $sql);
            
        // Initialize the array to store listings
        $autoListingsData = [];

        if ($result && mysqli_num_rows($result) > 0) {
            // Loop through the results and add to the array
            while ($row = mysqli_fetch_assoc($result)) {
                $autoListingsData[] = $row;
            };
        } else {
            echo '<script>console.log("No records found."); </script>';
        }
        
        // Close the connection
        mysqli_close($connection);

        return $autoListingsData;
    };

    function getAllAutoListings() {
        $servername = 'elvisdb';
        $username = 'hymank68';
        $password = '1GReen8dog!';
        $databasename = 'hymank68';
    
        // Connection to a database
        $connection = mysqli_connect($servername, $username, $password, $databasename);
    
        // Check connection
        if (!$connection) {
            die('Connection unsuccessful : ' . mysqli_connect_error());
        } else {
            echo '<script>console.log("Connection success!"); </script>';
        }
    
        // Query to fetch all listings
        $sql = "SELECT listing_make AS make, 
            listing_model AS model, 
            listing_trim AS trim, 
            listing_year AS year, 
            listing_mileage AS mileage, 
            listing_price AS price, 
            listing_keywords AS keywords, 
            listing_location AS location, 
            listing_image_path AS image, 
            listing_vin AS vin 
        FROM auto_listings";
    
        $result = mysqli_query($connection, $sql);
    
        // Initialize the array to store listings
        $autoListingsData = [];
    
        if ($result && mysqli_num_rows($result) > 0) {
            // Loop through the results and add to the array
            while ($row = mysqli_fetch_assoc($result)) {
                $autoListingsData[] = $row;
            }
        } else {
            echo '<script>console.log("No records found."); </script>';
        }
    
        // Close the connection
        mysqli_close($connection);
    
        return $autoListingsData;
    };

    function searchListings() {
        // Check if the POST data exists, and fetch the POST data directly
        $make = isset($_POST['make']) ? $_POST['make'] : '';
        $model = isset($_POST['model']) ? $_POST['model'] : '';
        $trim = isset($_POST['trim']) ? $_POST['trim'] : '';
        $year = isset($_POST['year']) ? $_POST['year'] : '';
        $min_mileage = isset($_POST['min_mileage']) ? $_POST['min_mileage'] : '';
        $max_mileage = isset($_POST['max_mileage']) ? $_POST['max_mileage'] : '';
        $title = isset($_POST['title']) ? $_POST['title'] : '';
        $engine = isset($_POST['engine']) ? $_POST['engine'] : '';
        $transmission = isset($_POST['transmission']) ? $_POST['transmission'] : '';
        $drivetrain = isset($_POST['drivetrain']) ? $_POST['drivetrain'] : '';
        $color_ext = isset($_POST['color_ext']) ? $_POST['color_ext'] : '';
        $color_int = isset($_POST['color_int']) ? $_POST['color_int'] : '';
        $doors = isset($_POST['doors']) ? $_POST['doors'] : '';
        $fueltype = isset($_POST['fueltype']) ? $_POST['fueltype'] : '';
        $min_price = isset($_POST['min_price']) ? $_POST['min_price'] : '';
        $max_price = isset($_POST['max_price']) ? $_POST['max_price'] : '';
        $location = isset($_POST['location']) ? $_POST['location'] : '';
        $keywords = isset($_POST['keywords']) ? $_POST['keywords'] : '';
    
        $servername = 'elvisdb';
        $username = 'hymank68';
        $password = '1GReen8dog!';
        $databasename = 'hymank68';
    
        // Connection to the database
        $connection = mysqli_connect($servername, $username, $password, $databasename);
    
        // Check connection
        if (!$connection) {
            die('Connection unsuccessful : ' . mysqli_connect_error());
        } else {
            echo '<script>console.log("Connection success!"); </script>';
        }
    
        // Start building the SQL query with the base SELECT statement
        $sql = "SELECT listing_make AS make, 
            listing_model AS model, 
            listing_trim AS trim, 
            listing_year AS year, 
            listing_mileage AS mileage, 
            listing_price AS price, 
            listing_keywords AS keywords, 
            listing_location AS location, 
            listing_image_path AS image, 
            listing_vin AS vin 
        FROM auto_listings WHERE 1";
    
        // Add conditions for each field if the input is not empty
        if ($make !== '') {
            $sql .= " AND listing_make = '" . mysqli_real_escape_string($connection, $make) . "'";
        }
        if ($model !== '') {
            $sql .= " AND listing_model = '" . mysqli_real_escape_string($connection, $model) . "'";
        }
        if ($trim !== '') {
            $sql .= " AND listing_trim = '" . mysqli_real_escape_string($connection, $trim) . "'";
        }
        if ($year !== '') {
            $sql .= " AND listing_year = '" . mysqli_real_escape_string($connection, $year) . "'";
        }
        if ($min_mileage !== '') {
            $sql .= " AND listing_mileage >= '" . mysqli_real_escape_string($connection, $min_mileage) . "'";
        }
        if ($max_mileage !== '') {
            $sql .= " AND listing_mileage <= '" . mysqli_real_escape_string($connection, $max_mileage) . "'";
        }
        if ($title !== '') {
            $sql .= " AND listing_title = '" . mysqli_real_escape_string($connection, $title) . "'";
        }
        if ($engine !== '') {
            $sql .= " AND listing_engine = '" . mysqli_real_escape_string($connection, $engine) . "'";
        }
        if ($transmission !== '') {
            $sql .= " AND listing_transmission = '" . mysqli_real_escape_string($connection, $transmission) . "'";
        }
        if ($drivetrain !== '') {
            $sql .= " AND listing_drivetrain = '" . mysqli_real_escape_string($connection, $drivetrain) . "'";
        }
        if ($color_ext !== '') {
            $sql .= " AND listing_color_ext = '" . mysqli_real_escape_string($connection, $color_ext) . "'";
        }
        if ($color_int !== '') {
            $sql .= " AND listing_color_int = '" . mysqli_real_escape_string($connection, $color_int) . "'";
        }
        if ($doors !== '') {
            $sql .= " AND listing_doors = '" . mysqli_real_escape_string($connection, $doors) . "'";
        }
        if ($fueltype !== '') {
            $sql .= " AND listing_fueltype = '" . mysqli_real_escape_string($connection, $fueltype) . "'";
        }
        if ($min_price !== '') {
            $sql .= " AND listing_price >= '" . mysqli_real_escape_string($connection, $min_price) . "'";
        }
        if ($max_price !== '') {
            $sql .= " AND listing_price <= '" . mysqli_real_escape_string($connection, $max_price) . "'";
        }
        if ($location !== '') {
            $sql .= " AND listing_location = '" . mysqli_real_escape_string($connection, $location) . "'";
        }
        // Split the keywords by commas and trim whitespace
        if ($keywords !== '') {
            $keyword_array = array_map('trim', explode(',', $keywords));
            
            $keyword_conditions = [];
            
            foreach ($keyword_array as $keyword) {
                $escaped_keyword = mysqli_real_escape_string($connection, $keyword);
                $keyword_conditions[] = "listing_keywords LIKE '%" . $escaped_keyword . "%'";
            }
            
            $sql .= " AND (" . implode(" OR ", $keyword_conditions) . ")";
        }
        
    
        $result = mysqli_query($connection, $sql);
    
        $autoListingsData = [];
    
        if ($result && mysqli_num_rows($result) > 0) {
            while ($row = mysqli_fetch_assoc($result)) {
                $autoListingsData[] = $row;
            }
        } else {
            echo '<script>console.log("No records found for search."); </script>';
        }
    
        // Close the connection
        mysqli_close($connection);
    
        return $autoListingsData;
    }
    

    function createAutoListing() {
        $servername = 'elvisdb';
        $username = 'hymank68';
        $password = '1GReen8dog!';
        $databasename = 'hymank68';
    
        // Connection to a database
        $connection = mysqli_connect($servername, $username, $password, $databasename);
    
        // Check connection
        if (!$connection) {
            die('Connection unsuccessful: ' . mysqli_connect_error());
        } else {
            echo '<script>console.log("Connection success!"); </script>';
        }
    
        // Validate form inputs
        $vehVin = validate_input($_POST['vin']);
        $vehMake = validate_input($_POST['make']);
        $vehModel = validate_input($_POST['model']);
        $vehYear = validate_input($_POST['year']);
        $vehMileage = validate_input($_POST['mileage']);
        $vehPrice = validate_input($_POST['price']);
        $vehTitle = validate_input($_POST['title']);
        $vehTransmission = validate_input($_POST['transmission']);
        $vehDrivetrain = validate_input($_POST['drivetrain']);
        $vehColorExt = validate_input($_POST['color_ext']);
        $vehColorInt = validate_input($_POST['color_int']);
        $vehDoors = validate_input($_POST['doors']);
        $vehEngine = validate_input($_POST['engine']);
        $vehFuelType = validate_input($_POST['fueltype']);
        $vehTrim = validate_input($_POST['trim']);
        $vehLocation = validate_input($_POST['location']);
        $vehKeywords = validate_input($_POST['keywords']);
    
        // Directory for file upload
        $uploadDirectory = '/home/hymank68/public_html/webdev/project/services/listings/pics/';
    
        // Check if file was uploaded
        if (isset($_FILES['listing_pic']) && $_FILES['listing_pic']['error'] === UPLOAD_ERR_OK) {
            $fileTmpPath = $_FILES['listing_pic']['tmp_name'];
            $fileName = basename($_FILES['listing_pic']['name']);
            $fileSize = $_FILES['listing_pic']['size'];
            $fileType = $_FILES['listing_pic']['type'];
            
            // Generate a unique filename using uniqid
            $fileExtension = pathinfo($fileName, PATHINFO_EXTENSION);
            $newFileName = uniqid('listing_', true) . '.' . $fileExtension;
    
            $destPath = $uploadDirectory . $newFileName;
            $imageUrl = '/~hymank68/webdev/project/services/listings/pics/' . $newFileName;
    
            // Move the file to the destination
            if (move_uploaded_file($fileTmpPath, $destPath)) {
                chmod($destPath, 0777);  // Set file permissions to 755
                echo '<script>console.log("File uploaded successfully."); </script>';
            } else {
                die('Error moving the uploaded file.');
            }
        } else {
            die('File upload error: ' . $_FILES['listing_pic']['error']);
        }
    
        // Attempt to INSERT data into the database
        $sql = "INSERT INTO auto_listings (
                    listing_vin, listing_make, listing_model, listing_year, listing_mileage, listing_price, 
                    listing_title, listing_transmission, listing_drivetrain, listing_color_ext, listing_color_int, 
                    listing_doors, listing_engine, listing_fueltype, listing_trim, listing_keywords, listing_location, listing_image_path
                ) VALUES (
                    '$vehVin', '$vehMake', '$vehModel', '$vehYear', '$vehMileage', '$vehPrice', 
                    '$vehTitle', '$vehTransmission', '$vehDrivetrain', '$vehColorExt', '$vehColorInt', 
                    '$vehDoors', '$vehEngine', '$vehFuelType', '$vehTrim', '$vehKeywords', '$vehLocation', '$imageUrl'
                )";
    
        // Check if inserting data was successful
        if (mysqli_query($connection, $sql)) {
            echo '<script>console.log("Successfully created listing!"); </script>';
        } else {
            echo 'Error: ' . $sql . mysqli_error($connection);
        }
    
        // Close the connection
        mysqli_close($connection);
    };

    function updateAutoListing($updateAt) {
        $servername = 'elvisdb';
        $username = 'hymank68';
        $password = '1GReen8dog!';
        $databasename = 'hymank68';

        //Connection to a database
        $connection = mysqli_connect($servername,$username,$password, $databasename);
    
        // Check connection
        if(!$connection) {
            die ('Connection unsuccessful : ' . mysqli_connect_error());
        }
        else {
            echo '<script>console.log("Connection success!"); </script>';
        }
    
        $vehVin = validate_input($_POST['vin']);
        $vehMake = validate_input($_POST['make']);
        $vehModel = validate_input($_POST['model']);
        $vehYear = validate_input($_POST['year']);
        $vehMileage = validate_input($_POST['mileage']);
        $vehPrice = validate_input($_POST['price']);
        $vehTitle = validate_input($_POST['title']);
        $vehTransmission = validate_input($_POST['transmission']);
        $vehDrivetrain = validate_input($_POST['drivetrain']);
        $vehColorExt = validate_input($_POST['color_ext']);
        $vehColorInt = validate_input($_POST['color_int']);
        $vehDoors = validate_input($_POST['doors']);
        $vehEngine = validate_input($_POST['engine']);
        $vehFuelType = validate_input($_POST['fueltype']);
        $vehTrim = validate_input($_POST['trim']);
        $vehLocation = validate_input($_POST['location']);
        $vehKeywords = validate_input($_POST['keywords']);

        $sql = "UPDATE auto_listings SET 
            listing_make = '$vehMake', 
            listing_model = '$vehModel', 
            listing_year = '$vehYear', 
            listing_mileage = '$vehMileage', 
            listing_price = '$vehPrice', 
            listing_title = '$vehTitle', 
            listing_transmission = '$vehTransmission', 
            listing_drivetrain = '$vehDrivetrain', 
            listing_color_ext = '$vehColorExt', 
            listing_color_int = '$vehColorInt', 
            listing_doors = '$vehDoors', 
            listing_engine = '$vehEngine', 
            listing_fueltype = '$vehFuelType', 
            listing_trim = '$vehTrim', 
            listing_location = '$vehLocation', 
            listing_keywords = '$vehKeywords' 
        WHERE listing_vin = '$updateAt'";

        //Check if updating data was successful
        if(mysqli_query($connection,$sql)) {
            echo '<script>console.log("Successfully updated listing with VIN: ' . $updateAt . '");</script>';
        }
        else {
            echo 'Error: ' . $sql.mysqli_error($connection);
        }
    
        // Close the connection
        mysqli_close($connection);
    };

    function deleteAutoListing($deleteAt) {
        $servername = 'elvisdb';
        $username = 'hymank68';
        $password = '1GReen8dog!';
        $databasename = 'hymank68';

        //Connection to a database
        $connection = mysqli_connect($servername,$username,$password, $databasename);
    
        // Check connection
        if(!$connection) {
            die ('Connection unsuccessful : ' . mysqli_connect_error());
        }
        else {
            echo 'Connection success!';
        }
        
        //Setup or define our Update Query, the run it 
        $sql = "DELETE FROM auto_listings 
            WHERE listing_vin = '$deleteAt'
        ";

        //Check if deleting data was successful
        if(mysqli_query($connection,$sql)) {
            echo '<script>console.log("Successfully deleted listing with VIN: ' . $deleteAt . '");</script>';
        }
        else {
            echo 'Error: ' . $sql.mysqli_error($connection);
        }
        
        // Close the connection
        mysqli_close($connection);
    };  

    function getDayHours($findAt) {
        $servername = 'elvisdb';
        $username = 'hymank68';
        $password = '1GReen8dog!';
        $databasename = 'hymank68';

        //Connection to a database
        $connection = mysqli_connect($servername,$username,$password, $databasename);
    
        // Check connection
        if(!$connection) {
            die ('Connection unsuccessful : ' . mysqli_connect_error());
        }
        else {
            echo '<script>console.log("Connection success!"); </script>';
        }
        
        //Setup or define our Update Query, the run it 
        $sql = "SELECT * FROM auto_hours 
            WHERE operations_date = '$findAt';
        ";

        $result = mysqli_query($connection, $sql);
            
        // Initialize the array to store listings
        $queryHoursData = [];

        if ($result && mysqli_num_rows($result) > 0) {
            // Loop through the results and add to the array
            while ($row = mysqli_fetch_assoc($result)) {
                $queryHoursData[] = $row;
            };
        } else {
            echo '<script>console.log("No records found."); </script>';
        }
        
        // Close the connection
        mysqli_close($connection);

        return $queryHoursData;
    };

    function getOperationHours() {
        $servername = 'elvisdb';
        $username = 'hymank68';
        $password = '1GReen8dog!';
        $databasename = 'hymank68';

        //Connection to a database
        $connection = mysqli_connect($servername,$username,$password, $databasename);
    
        // Check connection
        if(!$connection) {
            die ('Connection unsuccessful : ' . mysqli_connect_error());
        }
        else {
            echo '<script>console.log("Connection success!"); </script>';
        }
        
        //Setup or define our Update Query, the run it 
        $sql = "SELECT * FROM auto_hours";

        $result = mysqli_query($connection, $sql);
            
        // Initialize the array to store listings
        $queryHoursData = [];

        if ($result && mysqli_num_rows($result) > 0) {
            // Loop through the results and add to the array
            while ($row = mysqli_fetch_assoc($result)) {
                $queryHoursData[] = $row;
            };
        } else {
            echo '<script>console.log("No records found."); </script>';
        }
        
        // Close the connection
        mysqli_close($connection);

        return $queryHoursData;
    };

    function updateHours($updateAt) {
        $servername = 'elvisdb';
        $username = 'hymank68';
        $password = '1GReen8dog!';
        $databasename = 'hymank68';

        //Connection to a database
        $connection = mysqli_connect($servername,$username,$password, $databasename);
    
        // Check connection
        if(!$connection) {
            die ('Connection unsuccessful : ' . mysqli_connect_error());
        }
        else {
            echo '<script>console.log("Connection success!"); </script>';
        }
    
        $oopStatus = validate_input($_POST['status']);
        $oopOpenTime = validate_input($_POST['open_time']);
        $oopCloseTime = validate_input($_POST['close_time']);

        $sql = "UPDATE auto_hours SET 
            operations_status = '$oopStatus', 
            open_time = '$oopOpenTime', 
            close_time = '$oopCloseTime' 
        WHERE operations_date = '$updateAt'";

        //Check if updating data was successful
        if(mysqli_query($connection,$sql)) {
            echo '<script>console.log("Successfully updated business hours on : ' . $updateAt . '");</script>';
        }
        else {
            echo 'Error: ' . $sql.mysqli_error($connection);
        }
    
        // Close the connection
        mysqli_close($connection);
    };

    function getContactReq($findAt) {
        $servername = 'elvisdb';
        $username = 'hymank68';
        $password = '1GReen8dog!';
        $databasename = 'hymank68';

        //Connection to a database
        $connection = mysqli_connect($servername,$username,$password, $databasename);
    
        // Check connection
        if(!$connection) {
            die ('Connection unsuccessful : ' . mysqli_connect_error());
        }
        else {
            echo 'Connection success!';
        }
        
        //Setup or define our Update Query, the run it 
        $sql = "SELECT * FROM auto_contacts 
            WHERE contact_id = '$findAt';
        ";

        $result = mysqli_query($connection, $sql);
            
        // Initialize the array to store listings
        $queryContactData = [];

        if ($result && mysqli_num_rows($result) > 0) {
            // Loop through the results and add to the array
            while ($row = mysqli_fetch_assoc($result)) {
                $queryContactData[] = $row;
            };
        } else {
            echo '<script>console.log("No records found."); </script>';
        }
        
        // Close the connection
        mysqli_close($connection);

        return $queryContactData;
    };

    function getContactReqs() {
        $servername = 'elvisdb';
        $username = 'hymank68';
        $password = '1GReen8dog!';
        $databasename = 'hymank68';
    
        // Connection to a database
        $connection = mysqli_connect($servername, $username, $password, $databasename);
    
        // Check connection
        if (!$connection) {
            die('Connection unsuccessful : ' . mysqli_connect_error());
        } else {
            echo '<script>console.log("Connection success!"); </script>';
        }
    
        // Query to fetch all listings
        $sql = "SELECT * FROM auto_contacts";
    
        $result = mysqli_query($connection, $sql);
    
        // Initialize the array to store listings
        $queryContactData = [];
    
        if ($result && mysqli_num_rows($result) > 0) {
            // Loop through the results and add to the array
            while ($row = mysqli_fetch_assoc($result)) {
                $queryContactData[] = $row;
            }
        } else {
            echo '<script>console.log("No records found."); </script>';
        }
    
        // Close the connection
        mysqli_close($connection);
    
        return $queryContactData;
    };

    function createContactReq() {
        $servername = 'elvisdb';
        $username = 'hymank68';
        $password = '1GReen8dog!';
        $databasename = 'hymank68';

        //Connection to a database
        $connection = mysqli_connect($servername,$username,$password, $databasename);
    
        // Check connection
        if(!$connection) {
            die ('Connection unsuccessful : ' . mysqli_connect_error());
        }
        else {
            echo '<script>console.log("Connection success!"); </script>';
        }
    
        $contFirstName = validate_input($_POST['first_name']);
        $contLastName = validate_input($_POST['last_name']);
        $contEmail = validate_input($_POST['email']);
        $contPhone = validate_input($_POST['phone']);
        $contComment = validate_input($_POST['comment']);



        //Attempt to INSERT data intor our Table
        $sql = "INSERT INTO auto_contacts (first_name, last_name, email, phone, comment) 
            VALUES ('$contFirstName', '$contLastName', '$contEmail', '$contPhone', '$contComment')";

        //Check if inserting data was successful
        if(mysqli_query($connection,$sql)) {
            echo '<script>console.log("successfully created contact request!"); </script>';
        }
        else {
            echo 'Error: ' . $sql.mysqli_error($connection);
        }
    
        // Close the connection
        mysqli_close($connection);
    };

    function updateContactReq($updateAt) {
        $servername = 'elvisdb';
        $username = 'hymank68';
        $password = '1GReen8dog!';
        $databasename = 'hymank68';

        //Connection to a database
        $connection = mysqli_connect($servername,$username,$password, $databasename);
    
        // Check connection
        if(!$connection) {
            die ('Connection unsuccessful : ' . mysqli_connect_error());
        }
        else {
            echo '<script>console.log("Connection success!"); </script>';
        }
    
        $contFirstName = validate_input($_POST['first_name']);
        $contLastName = validate_input($_POST['last_name']);
        $contEmail = validate_input($_POST['email']);
        $contPhone = validate_input($_POST['phone']);
        $contComment = validate_input($_POST['comment']);

        $sql = "UPDATE auto_contacts SET 
            first_name = '$contFirstName', 
            last_name = '$contLastName', 
            email = '$contEmail', 
            phone = '$contPhone', 
            comment = '$contComment' 
        WHERE contact_id = '$updateAt'";

        //Check if updating data was successful
        if(mysqli_query($connection,$sql)) {
            echo '<script>console.log("Successfully updated contact request with ID#: ' . $updateAt . '");</script>';
        }
        else {
            echo 'Error: ' . $sql.mysqli_error($connection);
        }
    
        // Close the connection
        mysqli_close($connection);
    };

    function deleteContactReq($deleteAt) {
        $servername = 'elvisdb';
        $username = 'hymank68';
        $password = '1GReen8dog!';
        $databasename = 'hymank68';

        //Connection to a database
        $connection = mysqli_connect($servername,$username,$password, $databasename);
    
        // Check connection
        if(!$connection) {
            die ('Connection unsuccessful : ' . mysqli_connect_error());
        }
        else {
            echo 'Connection success!';
        }
        
        //Setup or define our Update Query, the run it 
        $sql = "DELETE FROM auto_contacts 
            WHERE contact_id = '$deleteAt'
        ";

        //Check if deleting data was successful
        if(mysqli_query($connection,$sql)) {
            echo '<script>console.log("Successfully deleted contact request with ID#: ' . $deleteAt . '");</script>';
        }
        else {
            echo 'Error: ' . $sql.mysqli_error($connection);
        }
        
        // Close the connection
        mysqli_close($connection);
    };

    function getAppointment($findAt) {
        $servername = 'elvisdb';
        $username = 'hymank68';
        $password = '1GReen8dog!';
        $databasename = 'hymank68';

        //Connection to a database
        $connection = mysqli_connect($servername,$username,$password, $databasename);
    
        // Check connection
        if(!$connection) {
            die ('Connection unsuccessful : ' . mysqli_connect_error());
        }
        else {
            echo 'Connection success!';
        }
        
        //Setup or define our Update Query, the run it 
        $sql = "SELECT * FROM auto_appointments 
            WHERE appoint_id = '$findAt';
        ";

        $result = mysqli_query($connection, $sql);
            
        // Initialize the array to store listings
        $queryAppointData = [];

        if ($result && mysqli_num_rows($result) > 0) {
            // Loop through the results and add to the array
            while ($row = mysqli_fetch_assoc($result)) {
                $queryAppointData[] = $row;
            };
        } else {
            echo '<script>console.log("No records found."); </script>';
        }
        
        // Close the connection
        mysqli_close($connection);

        return $queryAppointData;
    };

    function getAppointments() {
        $servername = 'elvisdb';
        $username = 'hymank68';
        $password = '1GReen8dog!';
        $databasename = 'hymank68';
    
        // Connection to a database
        $connection = mysqli_connect($servername, $username, $password, $databasename);
    
        // Check connection
        if (!$connection) {
            die('Connection unsuccessful : ' . mysqli_connect_error());
        } else {
            echo '<script>console.log("Connection success!"); </script>';
        }
    
        // Query to fetch all listings
        $sql = "SELECT * FROM auto_appointments";
    
        $result = mysqli_query($connection, $sql);
    
        // Initialize the array to store listings
        $queryAppointData = [];
    
        if ($result && mysqli_num_rows($result) > 0) {
            // Loop through the results and add to the array
            while ($row = mysqli_fetch_assoc($result)) {
                $queryAppointData[] = $row;
            }
        } else {
            echo '<script>console.log("No records found."); </script>';
        }
    
        // Close the connection
        mysqli_close($connection);
    
        return $queryAppointData;
    };

    function createAppointment() {
        $servername = 'elvisdb';
        $username = 'hymank68';
        $password = '1GReen8dog!';
        $databasename = 'hymank68';

        //Connection to a database
        $connection = mysqli_connect($servername,$username,$password, $databasename);
    
        // Check connection
        if(!$connection) {
            die ('Connection unsuccessful : ' . mysqli_connect_error());
        }
        else {
            echo '<script>console.log("Connection success!"); </script>';
        }
    
        $appointFirstName = validate_input($_POST['first_name']);
        $appointLastName = validate_input($_POST['last_name']);
        $appointEmail = validate_input($_POST['email']);
        $appointPhone = validate_input($_POST['phone']);
        $appointType = validate_input($_POST["appoint_type"]);
        $appointDate_Time = validate_input($_POST["date_time"]);
        $appointComment = validate_input($_POST['comment']);



        //Attempt to INSERT data intor our Table
        $sql = "INSERT INTO auto_appointments (first_name, last_name, email, phone, appoint_type, date_time, comment) 
            VALUES ('$appointFirstName', '$appointLastName', '$appointEmail', '$appointPhone', '$appointType', '$appointDate_Time', '$appointComment')";

        //Check if inserting data was successful
        if(mysqli_query($connection,$sql)) {
            echo '<script>console.log("successfully created appointment!"); </script>';
        }
        else {
            echo 'Error: ' . $sql.mysqli_error($connection);
        }
    
        // Close the connection
        mysqli_close($connection);
    };

    function updateAppointment($updateAt) {
        $servername = 'elvisdb';
        $username = 'hymank68';
        $password = '1GReen8dog!';
        $databasename = 'hymank68';

        //Connection to a database
        $connection = mysqli_connect($servername,$username,$password, $databasename);
    
        // Check connection
        if(!$connection) {
            die ('Connection unsuccessful : ' . mysqli_connect_error());
        }
        else {
            echo '<script>console.log("Connection success!"); </script>';
        }
    
        $contFirstName = validate_input($_POST['first_name']);
        $contLastName = validate_input($_POST['last_name']);
        $contEmail = validate_input($_POST['email']);
        $contPhone = validate_input($_POST['phone']);
        $contAppointType = validate_input($_POST['appoint_type']);
        $contDate_Time = validate_input($_POST['date_time']);
        $contComment = validate_input($_POST['comment']);

        $sql = "UPDATE auto_appointments SET 
            first_name = '$contFirstName', 
            last_name = '$contLastName', 
            email = '$contEmail', 
            phone = '$contPhone', 
            appoint_type = '$contAppointType', 
            date_time = '$contDate_Time' 
            comment = '$contComment' 
        WHERE appoint_id = '$updateAt'";

        //Check if updating data was successful
        if(mysqli_query($connection,$sql)) {
            echo '<script>console.log("Successfully updated appointment with ID: ' . $updateAt . '");</script>';
        }
        else {
            echo 'Error: ' . $sql.mysqli_error($connection);
        }
    
        // Close the connection
        mysqli_close($connection);
    };

    function deleteAppointment($deleteAt) {
        $servername = 'elvisdb';
        $username = 'hymank68';
        $password = '1GReen8dog!';
        $databasename = 'hymank68';

        //Connection to a database
        $connection = mysqli_connect($servername,$username,$password, $databasename);
    
        // Check connection
        if(!$connection) {
            die ('Connection unsuccessful : ' . mysqli_connect_error());
        }
        else {
            echo 'Connection success!';
        }
        
        //Setup or define our Update Query, the run it 
        $sql = "DELETE FROM auto_appointments 
            WHERE appoint_id = '$deleteAt'
        ";

        //Check if deleting data was successful
        if(mysqli_query($connection,$sql)) {
            echo '<script>console.log("Successfully deleted appointment with ID: ' . $deleteAt . '");</script>';
        }
        else {
            echo 'Error: ' . $sql.mysqli_error($connection);
        }
        
        // Close the connection
        mysqli_close($connection);
    };
?>