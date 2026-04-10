<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>K's Autos - Get In Contact</title>
    <link rel="stylesheet" href="http://elvis.rowan.edu/~hymank68/webdev/project/main_style.css">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="https://code.jquery.com/ui/1.13.0/jquery-ui.min.js"></script>
    <link rel="stylesheet" href="https://code.jquery.com/ui/1.13.0/themes/base/jquery-ui.css">
</head>
<body>
    <script src="/~hymank68/webdev/project/functions.js"></script>
    <div id="backend_menu">
        <div id="backend-menu-container"></div>
    </div>
    <div id="main_content">
        <h1>Hours Of Operations Panel</h1>
        <div id="calendar-container">
            <?php 
            require_once "/home/hymank68/public_html/webdev/project/processforms.php";
            $date = $status = $open_time = $close_time = "";
            $hours = getOperationHours();

            if (isset($_POST['hours_edit']) && isset($_POST['edit'])) {
                $hour = getDayHours($_POST['hours_edit']);
                
                if (!empty($hour)) {
                    $date = $hour[0]['operations_date'];
                    $status = $hour[0]['operations_status'];
                    $open_time = $hour[0]['open_time'];
                    $close_time = $hour[0]['close_time'];

                    $dateObj = DateTime::createFromFormat('Y-m-d', $date);
                    $formattedDate = $dateObj->format('m-d-Y');
                } else {
                    echo '<script>console.log("No business hours found for given date.");</script>';
                }

                $formData = [
                    "date" => $date ?? '',
                    "dateFixed" => $formattedDate ?? '',
                    "status" => $status ?? '',
                    "otime" => $open_time ?? '',
                    "ctime" => $close_time ?? '',
                ];
            }

            if(isset($_POST['hours_update'])) {
                updateHours($_POST['operations_date']);
                header("Location: hours.php");
                exit();
            }
            ?>
            <script>
                const allhoursData = <?php echo json_encode($hours) ?>;
                const hoursData = <?php echo json_encode($hour) ?>;
                const formData = <?php echo json_encode($formData) ?>;

                generateAdminCalendars();

                if (hoursData && Object.keys(hoursData).length > 0) {
                    editHoursForm();
                };
            </script>
        </div>
    </div>
    <div id="page_bottom">
        <div id="backend-bottom-container"></div>
    </div>
    <script src="/~hymank68/webdev/project/menu.js"></script>
</body>
</html>
