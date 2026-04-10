<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>K's Autos - Schedule An Appointment</title>
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
        <h1>Schedule An Appointment</h1>
        <div class="main_form">
            <form method="POST" action="/~hymank68/webdev/project/confirmation.php">
                <table>
                    <tr>
                        <td>
                            Name:
                            <br>
                            <input type="text" class="req" placeholder="First*" name="first_name" onblur="this.value = capitalizeFirstLetter(this.value)" required/>
                            <input type="text" class="req" placeholder="Last*" name="last_name" onblur="this.value = capitalizeFirstLetter(this.value)" required/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Email:
                            <br>
                            <input type="email" class="req" placeholder="*" name="email" required/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Phone Number:
                            <br>
                            <input type="text" placeholder="Optional" name="phone"/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Appointment Type:
                            <br>
                            <label>
                                <input type="radio" name="appoint_type" value="maintenance" required> Maintenance
                            </label>
                            <label>
                                <input type="radio" name="appoint_type" value="body_work"> Body Work
                            </label>
                            <label>
                                <input type="radio" name="appoint_type" value="financing"> Financing
                            </label>
                            <label>
                                <input type="radio" name="appoint_type" value="test_drive"> Test Drive
                            </label>
                            <label>
                                <input type="radio" name="appoint_type" value="vehicle_inquiry"> Vehicle Inquiry
                            </label>
                            <label>
                                <input type="radio" name="appoint_type" value="other"> Other
                            </label>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Desired Date:
                            <br>
                            <input type="datetime-local" name="date_time" id="date_time" required/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Additional Information:
                            <br>
                            <textarea name="comment" placeholder="Optional" rows="5" cols="40"></textarea>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type="submit" name="submit_appoint" value="Submit">
                        </td>
                    </tr>
                </table>
            </form>
        </div>
    </div>
    <div id="page_bottom">
        <div id="bottom-container"></div>
    </div>
    <script src="/~hymank68/webdev/project/menu.js"></script>
    <script src="/~hymank68/webdev/project/functions.js"></script>
    <script>
        setMinDateTime('date_time');
    </script>
</body>
</html>