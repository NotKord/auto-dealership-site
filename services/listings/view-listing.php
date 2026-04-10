<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vehicle Listing</title>
    <link rel="stylesheet" href="http://elvis.rowan.edu/~hymank68/webdev/project/main_style.css">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="https://code.jquery.com/ui/1.13.0/jquery-ui.min.js"></script>
    <link rel="stylesheet" href="https://code.jquery.com/ui/1.13.0/themes/base/jquery-ui.css">
</head>
<body>
<div id="main_menu">
        <div id="menu-container"></div>
    </div>
    <div id="main_content">
        <div class="viewlist-container">
            <?php require_once "/home/hymank68/public_html/webdev/project/processforms.php";
                $vin = $_POST['listingVin'];
                $listingData = getAutoListing($vin);
                $fueltype = $listing['listing_fueltype'];
                $make = $listing['listing_make'];
                if ($fueltype === "natural_gas"){
                    $fueltype = "natural gas";
                }
                if ($make === "land_rover"){
                    $make = "land rover";
                }


                if (!empty($listingData)) {
                    foreach ($listingData as $listing) {
                        ?>
                        <div class="listing-container">
                            <div id="title">
                                <h1><?php echo $listing['listing_year'] . ' ' . ucfirst($listing['listing_make']) . ' ' . $listing['listing_model'] . ' ' . $listing['listing_trim']; ?></h1>
                            </div>
                            <div class="listing-content">
                                <div id="pic">
                                    <img src="<?php echo $listing['listing_image_path']; ?>" alt="Vehicle Image" class="listing-image">
                                </div>
                                <div class="listing-details">
                                    <p><strong>Price:</strong> $<?php echo number_format($listing['listing_price']); ?></p>
                                    <p><strong>Mileage:</strong> <?php echo number_format($listing['listing_mileage']); ?> miles</p>
                                    <p><strong>Transmission:</strong> 
                                        <?php 
                                            if ($listing['listing_transmission'] === "automatic") {
                                                echo "Automatic";
                                            } elseif ($listing['listing_transmission'] === "manual") {
                                                echo "Manual";
                                            } elseif ($listing['listing_transmission'] === "cvt") {
                                                echo "Continuously Variable (CVT)";
                                            } elseif ($listing['listing_transmission'] === "dual_clutch") {
                                                echo "Dual Clutch";
                                            } elseif ($listing['listing_transmission'] === "automated_manual") {
                                                echo "Automated-Manual";
                                            } else {
                                                echo "Semi-Automatic";
                                            }
                                        ?>
                                    </p>
                                    <p><strong>Drivetrain:</strong> <?php echo strtoupper($listing['listing_drivetrain']); ?></p>
                                    <p><strong>Exterior Color:</strong> <?php echo $listing['listing_color_ext']; ?></p>
                                    <?php
                                        if($listing['listing_color_int'] != "") {
                                            echo "<p><strong>Interior Color:</strong> " .  $listing['listing_color_int'];
                                        };
                                    ?>
                                    <p><strong>Engine:</strong> <?php echo $listing['listing_engine']; ?></p>
                                    <p><strong>Fuel Type:</strong> <?php echo ucfirst($listing['listing_fueltype']); ?></p>
                                    <p><strong>Doors:</strong> <?php echo $listing['listing_doors']; ?></p>
                                    <p><strong>Vin #:</strong> <?php echo $listing['listing_vin']; ?></p>
                                    <p><strong>Location:</strong> 
                                        <?php 
                                            if ($listing['listing_location'] === "turnersville") {
                                                echo "K's Autos of Turnersville";
                                            } elseif ($listing['listing_location'] === "marlton") {
                                                echo "K's Autos of Marlton";
                                            } else {
                                                echo "K's Autos of Philly";
                                            }
                                        ?>
                                    </p>
                                    <?php
                                        if($listing['listing_keywords'] != "") {
                                            echo "<p><strong>Notes/Keywords:</strong> " .  $listing['listing_keywords'];
                                        };
                                    ?>
                                </div>
                            </div>
                        </div>
                        <?php
                    }
                } else {
                    echo '<p>No vehicle data found.</p>';
                }
            ?>
        </div>
    </div>
    <div id="page_bottom">
        <div id="bottom-container"></div>
    </div>
    <script src="/~hymank68/webdev/project/menu.js"></script>
    <script src="/~hymank68/webdev/project/functions.js"></script>
</body>
</html>
