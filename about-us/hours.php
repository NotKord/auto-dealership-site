<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>K's Autos - Business Hours</title>
    <link rel="stylesheet" href="http://elvis.rowan.edu/~hymank68/webdev/project/main_style.css">
</head>
<body>
    <script src="/~hymank68/webdev/project/functions.js"></script>
    <div id="main_menu">
        <div id="menu-container"></div>
    </div>
    <div id="main_content">
        <h1>Hours of Operation</h1>
        <div id="calendar-container">
            <?php require_once "/home/hymank68/public_html/webdev/project/processforms.php";
                $hours = getOperationHours();
            ?>
            <script>
                const allhoursData = <?php echo json_encode($hours) ?>;
                generateCalendars();
            </script>
        </div>
    </div>
    <div id="page_bottom">
        <div id="bottom-container"></div>
    </div>
    <script src="/~hymank68/webdev/project/menu.js"></script>
</body>
</html>