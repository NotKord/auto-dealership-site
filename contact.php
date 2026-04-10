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
        <h1>Get In Contact</h1>
        <div class="main_form">
            <form method="POST" action="confirmation.php">
                <table>
                    <tr>
                        <td>
                            Name:
                            <br>
                            <input class="req" type="text" placeholder="First*" name="first_name" onblur="this.value = capitalizeFirstLetter(this.value)" required/>
                            <input class="req" type="text" placeholder="Last*" name="last_name" onblur="this.value = capitalizeFirstLetter(this.value)" required/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Email:
                            <br>
                            <input class="req" type="email" placeholder="*" name="email" required/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Phone Number:
                            <br>
                            <input type="text" class="req" placeholder="*" name="phone" required/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Describe What You Are Contacting About:
                            <br>
                            <textarea name="comment" placeholder="Optional" rows="5" cols="40"></textarea>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type="submit" name="submit_contact" value="Submit">
                        </td>
                    </tr>
                </table>
            </form>
        </div>
    </div>
    <div id="page_bottom">
        <div id="bottom-container"></div>
    </div>
    <script src="menu.js"></script>
    <script src="functions.js"></script>
</body>
</html>