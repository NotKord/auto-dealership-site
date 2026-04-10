<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Current Inventory Listings</title>
    <link rel="stylesheet" href="http://elvis.rowan.edu/~hymank68/webdev/project/main_style.css">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="https://code.jquery.com/ui/1.13.0/jquery-ui.min.js"></script>
    <link rel="stylesheet" href="https://code.jquery.com/ui/1.13.0/themes/base/jquery-ui.css">
    </head>
<body>
    <?php require_once "/home/hymank68/public_html/webdev/project/processforms.php";
        $vin = $make = $model = $trim = $year = $mileage = $price = $title = 
        $transmission = $drivetrain = $color_ext = $color_int = $doors = 
        $engine = $fueltype = $keywords = $location = $image = $listing = "";
        
        $listings = getAllAutoListings();

        if (isset($_POST['listing_edit']) && isset($_POST['edit'])) {
            $listing = getAutoListing($_POST['listing_edit']);
            
            if (!empty($listing)) {
                $vin = $listing[0]['listing_vin'];
                $make = $listing[0]['listing_make'];
                $model = $listing[0]['listing_model'];
                $trim = $listing[0]['listing_trim'];
                $year = $listing[0]['listing_year'];
                $mileage = $listing[0]['listing_mileage'];
                $price = $listing[0]['listing_price'];
                $title = $listing[0]['listing_title'];
                $transmission = $listing[0]['listing_transmission'];
                $drivetrain = $listing[0]['listing_drivetrain'];
                $color_ext = $listing[0]['listing_color_ext'];
                $color_int = $listing[0]['listing_color_int'];
                $doors = $listing[0]['listing_doors'];
                $engine = $listing[0]['listing_engine'];
                $fueltype = $listing[0]['listing_fueltype'];
                $keywords = $listing[0]['listing_keywords'];
                $location = $listing[0]['listing_location'];
                $image = $listing[0]['listing_image_path'];
            } else {
                echo '<script>console.log("No listing found for the given VIN.");</script>';
            }
        };

        $formData = [
            "vin" => $vin ?? '',
            "make" => $make ?? '',
            "model" => $model ?? '',
            "trim" => $trim ?? '',
            "year" => $year ?? '',
            "mileage" => $mileage ?? '',
            "price" => $price ?? '',
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
            "image" => $image ?? '',
        ];
    ?>
    <div id="backend_menu">
        <div id="backend-menu-container"></div>
    </div>
    <div id="main_content">
        <h1>Listings Panel</h1>
        <div id="overlay-container">
            <button id="newListing-button">Create New Listing</button>
        </div>
        <?php if (empty($listings)) {echo "<p id='empty-box'>Listings Will Appear Here!</p>";}?>
        <div id="autoListings"></div>
    </div>
    <div id="page_bottom">
        <div id="backend-bottom-container"></div>
    </div>
    <script src="/~hymank68/webdev/project/menu.js"></script>
    <script src="/~hymank68/webdev/project/functions.js"></script>
    <script>
        const allListingsData = <?php echo json_encode($listings); ?>;
        const listingData = <?php echo json_encode($listing); ?>;
        const formData = <?php echo json_encode($formData) ?>
        
        createAdminListingGui(allListingsData);
        if (listingData && Object.keys(listingData).length > 0) {
            editListingForm();
        };
    </script>
    <?php
        if (isset($_POST['listing_delete']) && isset($_POST['delete'])) {
            deleteAutoListing($_POST['listing_delete']);
            header("Location: listings.php");
        };
        if(isset($_POST['listing_create'])) {
            createAutoListing();
            header("Location: listings.php");
        };
        if(isset($_POST['listing_update'])) {
            updateAutoListing($_POST['vin']);
            header("Location: listings.php");
        };
    ?>
</body>
</html>