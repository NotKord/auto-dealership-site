<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>K's Auto Listings</title>
    <link rel="stylesheet" href="http://elvis.rowan.edu/~hymank68/webdev/project/main_style.css">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="https://code.jquery.com/ui/1.13.0/jquery-ui.min.js"></script>
    <link rel="stylesheet" href="https://code.jquery.com/ui/1.13.0/themes/base/jquery-ui.css">
</head>
<body>
    <?php require_once "/home/hymank68/public_html/webdev/project/processforms.php";
        $vin = $make = $model = $trim = $year = $min_mileage = $max_mileage = $min_price = $max_price = $title = 
        $transmission = $drivetrain = $color_ext = $color_int = $doors = 
        $engine = $fueltype = $keywords = $location = $image = $listing = "";
        
        $listings = getAllAutoListings();

        if (isset($_POST['listing_search'])) {
            $vin = $_POST['vin'];
            $make = $_POST['make'];
            $model = $_POST['model'];
            $trim = $_POST['trim'];
            $year = $_POST['year'];
            $min_mileage = $_POST['min_mileage'];
            $max_mileage = $_POST['max_mileage'];
            $min_price = $_POST['min_price'];
            $max_price = $_POST['max_price'];
            $title = $_POST['title'];
            $transmission = $_POST['transmission'];
            $drivetrain = $_POST['drivetrain'];
            $color_ext = $_POST['color_ext'];
            $color_int = $_POST['color_int'];
            $doors = $_POST['doors'];
            $engine = $_POST['engine'];
            $fueltype = $_POST['fueltype'];
            $keywords = $_POST['keywords'];
            $location = $_POST['location'];
        };

        $formData = [
            "vin" => $vin ?? '',
            "make" => $make ?? '',
            "model" => $model ?? '',
            "trim" => $trim ?? '',
            "year" => $year ?? '',
            "min_mileage" => $min_mileage ?? '',
            "max_mileage" => $max_mileage ?? '',
            "min_price" => $min_price ?? '',
            "max_price" => $max_price ?? '',
            "title" => $title ?? '',
            "transmission" => $transmission ?? '',
            "drivetrain" => $drivetrain ?? '',
            "color_ext" => $color_ext ?? '',
            "color_int" => $color_int ?? '',
            "doors" => $doors ?? '',
            "engine" => $engine ?? '',
            "fueltype" => $fueltype ?? '',
            "keywords" => $keywords ?? '',
            "location" => $location ?? '',
        ];
    ?>
    <div id="main_menu">
        <div id="menu-container"></div>
    </div>
    <div id="main_content">
        <div id="side_search">
            <div id="listings_content">
                <h2>Available Listings</h2>
                <?php if (empty($listings)) {echo "<p id='empty-box'>Something Went Wrong.. Try Refreshing The Page!</p>";}?>
                <div id="autoListingsFront"></div>
            </div>
        </div>
    </div>
    <div id="page_bottom">
        <div id="bottom-container"></div>
    </div>
    <script src="/~hymank68/webdev/project/menu.js"></script>
    <script src="/~hymank68/webdev/project/functions.js"></script>
    <script>
        const allListingsData = <?php echo json_encode($listings); ?>;
        const listingData = <?php echo json_encode($listing); ?>;
        const formData = <?php echo json_encode($formData) ?>
        
        createSearchForm();
        formatCarYears();

        //createListingGui(allListingsData);
        if (listingData && Object.keys(listingData).length > 0) {
            editListingForm();
        };
    </script>
    <?php
        if (isset($_POST['listing_search'])) {
            echo "<script>
                const searchData = " . json_encode(searchListings()) . ";
                createListingGui(searchData);
            </script>";
        } else {
            echo "<script>createListingGui(allListingsData);</script>";
        }
    ?>
</body>