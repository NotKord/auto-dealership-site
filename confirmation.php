<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>K's Autos - Get In Contact</title>
    <link rel="stylesheet" href="main_style.css">
</head>
<body>
    <div id="main_menu">
        <div id="menu-container"></div>
    </div>

    <div id="main_content">
        <?php require_once "/home/hymank68/public_html/webdev/project/processforms.php";
            $first_name = $last_name = $email = $phone = $appoint_type = $date_time = $comment = "";
            
            if($_SERVER["REQUEST_METHOD"] == "POST"){
                $first_name = $_POST["first_name"];
                $last_name = $_POST["last_name"];
                $email = $_POST["email"];
                $phone = $_POST["phone"];
                $appoint_type = $_POST["appoint_type"];
                $comment = $_POST["comment"];

                $date_time = new DateTime($_POST['date_time']);
                $formattedDateTime = $date_time->format('m/d/Y, h:iA');
            };
            
            echo '<div class="confirmation-container">';
            echo '<h1>Form Submitted Successfully!</h1>';
            echo '<h2>Provided Details:</h2>';

            echo '<p><strong>First Name:</strong> ' . $first_name . '</p>';
            echo '<p><strong>Last Name:</strong> ' . $last_name . '</p>';
            echo '<p><strong>Email:</strong> ' . $email . '</p>';
            echo '<p><strong>Phone:</strong> ' . $phone . '</p>';

            if ((isset($appoint_type) && !empty($appoint_type)) && (isset($date_time) && !empty($date_time))) {
                echo '<p><strong>Appointment Type:</strong> ' . $appoint_type . '</p>';
                echo '<p><strong>Date & Time:</strong> ' . $formattedDateTime . '</p>';
                echo '<p><strong>Additional Comments:</strong> ' . nl2br($comment) . '</p>';
            } else {
                echo '<p><strong>Reason For Contacting:</strong> ' . nl2br($comment) . '</p>';
            }
            echo '</div>';

            if(isset($_POST['submit_contact'])) {
                createContactReq();
            };
            if(isset($_POST['submit_appoint'])) {
                echo 'submit appointment clicked';
                createAppointment();
            };
        ?>
    </div>
    <div id="page_bottom">
        <div id="bottom-container"></div>
    </div>
    <script src="menu.js"></script>
</body>
</html>