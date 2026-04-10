<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Scheduled Appointments</title>
    <link rel="stylesheet" href="http://elvis.rowan.edu/~hymank68/webdev/project/main_style.css">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="https://code.jquery.com/ui/1.13.0/jquery-ui.min.js"></script>
    <link rel="stylesheet" href="https://code.jquery.com/ui/1.13.0/themes/base/jquery-ui.css">
    </head>
<body>
<?php require_once "/home/hymank68/public_html/webdev/project/processforms.php";
        $id = $fname = $lname = $email = $appoint_type = $date_time = $phone = $comment = "";
        
        //$appoints = "";
        $appoints = getAppointments();

        if (isset($_POST['appointment_edit']) && isset($_POST['edit'])) {
            $appoint = getAppointment($_POST['appointment_edit']);
            
            if (!empty($appoint)) {
                $id = $appoint[0]['contact_id'];
                $fname = $appoint[0]['first_name'];
                $lname = $appoint[0]['last_name'];
                $email = $appoint[0]['email'];
                $appoint_type = $appoint[0]['appoint_type'];
                $date_time = $appoint[0]['date_time'];
                $phone = $appoint[0]['phone'];
                $comment = $appoint[0]['comment'];
            } else {
                echo '<script>console.log("No appointments found for the given ID.");</script>';
            }
        };

        $formData = [
            "id" => $id ?? '',
            "fname" => $fname ?? '',
            "lname" => $lname ?? '',
            "email" => $email ?? '',
            "appoint_type" => $appoint_type ?? '',
            "date_time" => $date_time ?? '',
            "phone" => $phone ?? '',
            "comment" => $comment ?? '',
        ];
    ?>
    <div id="backend_menu">
        <div id="backend-menu-container"></div>
    </div>
    <div id="main_content">
        <h1>Scheduled Appointments Panel</h1>
        <div id="overlay-container">
            <button id="newAppoint-button">Create New Appointment</button>
        </div>
        <?php if (empty($appoints)) {echo "<p id='empty-box'>Appointments Will Appear Here!</p>";}?>
        <div id="appointments"></div>
    </div>
    <div id="page_bottom">
        <div id="backend-bottom-container"></div>
    </div>
    <script src="/~hymank68/webdev/project/menu.js"></script>
    <script src="/~hymank68/webdev/project/functions.js"></script>
    <script>
        const allappointsData = <?php echo json_encode($appoints); ?>;
        const appointData = <?php echo json_encode($appoint); ?>;
        const formData = <?php echo json_encode($formData) ?>
        
        createAppointmentGui(allappointsData);
        if (appointData && Object.keys(appointData).length > 0) {
            editAppointForm();
        };
    </script>
    <?php
        if (isset($_POST['appointment_delete']) && isset($_POST['delete'])) {
            deleteAppointment($_POST['appointment_delete']);
            header("Location: appointments.php");
        };
        if(isset($_POST['appointment_create'])) {
            createAppointment();
            header("Location: appointments.php");
        };
        if(isset($_POST['appointment_update'])) {
            updateAppointment($_POST['appoint_id']);
            header("Location: appointments.php");
        };
    ?>
</body>
</html>