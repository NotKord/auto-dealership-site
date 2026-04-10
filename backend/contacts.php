<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Requests</title>
    <link rel="stylesheet" href="http://elvis.rowan.edu/~hymank68/webdev/project/main_style.css">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="https://code.jquery.com/ui/1.13.0/jquery-ui.min.js"></script>
    <link rel="stylesheet" href="https://code.jquery.com/ui/1.13.0/themes/base/jquery-ui.css">
    </head>
<body>
    <?php require_once "/home/hymank68/public_html/webdev/project/processforms.php";
        $id = $fname = $lname = $email = $phone = $comment = "";
        
        $contacts = getContactReqs();

        if (isset($_POST['contact_edit']) && isset($_POST['edit'])) {
            $contact = getContactReq($_POST['contact_edit']);
            
            if (!empty($contact)) {
                $id = $contact[0]['contact_id'];
                $fname = $contact[0]['first_name'];
                $lname = $contact[0]['last_name'];
                $email = $contact[0]['email'];
                $phone = $contact[0]['phone'];
                $comment = $contact[0]['comment'];
            } else {
                echo '<script>console.log("No contact request found for the given ID.");</script>';
            }
        };

        $formData = [
            "id" => $id ?? '',
            "fname" => $fname ?? '',
            "lname" => $lname ?? '',
            "email" => $email ?? '',
            "phone" => $phone ?? '',
            "comment" => $comment ?? '',
        ];
    ?>
    <div id="backend_menu">
        <div id="backend-menu-container"></div>
    </div>
    <div id="main_content">
        <h1>Contact Requests Panel</h1>
        <?php if (empty($contacts)) {echo "<p id='empty-box'>Contact Requests Will Appear Here!</p>";}?>
        <div id="contactRequests"></div>
    </div>
    <div id="page_bottom">
        <div id="backend-bottom-container"></div>
    </div>
    <script src="/~hymank68/webdev/project/menu.js"></script>
    <script src="/~hymank68/webdev/project/functions.js"></script>
    <script>
        const allcontactsData = <?php echo json_encode($contacts); ?>;
        const contactData = <?php echo json_encode($contact); ?>;
        const formData = <?php echo json_encode($formData) ?>
        
        createContactGui(allcontactsData);
        if (contactData && Object.keys(contactData).length > 0) {
            editContactForm();
        };
    </script>
    <?php
        if (isset($_POST['contact_delete']) && isset($_POST['delete'])) {
            deleteContactReq($_POST['contact_delete']);
            header("Location: contacts.php");
        };
        if(isset($_POST['contact_update'])) {
            updateContactReq($_POST['contact_id']);
            header("Location: contacts.php");
        };
    ?>
</body>
</html>