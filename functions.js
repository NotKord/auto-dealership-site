$(document).ready(function () {
    if ($('#newListing-button').length) {
        $('#newListing-button').on('click', function () {
            newListingForm();
        });
    }
    if ($('#newAppoint-button').length) {
        $('#newAppoint-button').on('click', function () {
            newAppointForm();
        });
    }
});

function capitalizeFirstLetter(val) {
    return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}

// sets max and min on years for cars
function formatCarYears() {
    const currentYear = new Date().getFullYear();
    const inputField = document.getElementById('year');
    inputField.max = currentYear + 1;
    inputField.min = 1883;
};

//sets a min date and time so that users cant select something from the past
function setMinDateTime(inputId) {
    const inputElement = document.getElementById(inputId);

    // Get the current date and time
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');

    const formattedDateTime = `${year}-${month}-${day}T${hours}:${minutes}`;

    // Set the min attribute to the current date and time
    inputElement.setAttribute('min', formattedDateTime);

    // Add blur validation to check if the selected date/time is in the past
    inputElement.addEventListener('blur', () => {
        const selectedDateTime = new Date(inputElement.value);
        const now = new Date();

        if (selectedDateTime < now) {
            alert("Please select a date and time in the future.");
            inputElement.value = '';
        }
    });
}


function newListingForm() {
    // Creates the overlay
    const overlay = $(
        `<div id="createListing_overlay">
            <div class="content">
                <h2>New Auto Listing</h2>
                <form method="POST" enctype="multipart/form-data" action="listings.php">
                    <table class="edit_table">
                        <tr>
                            <td class="center_1_cell">
                                Vehicle Vin #:
                                <br>
                                <input type="text" class="req" placeholder="*" name="vin" onblur="this.value = this.value.toUpperCase()" required/>
                            </td>
                        </tr>
                        <tr class="center_3_cell">
                            <td>
                                Make:
                                <br>
                                <select class="req" name="make" required>
                                    <option value="" disabled selected hidden>Select..</option>
                                    <option value="toyota">Toyota</option>
                                    <option value="honda">Honda</option>
                                    <option value="ford">Ford</option>
                                    <option value="chevrolet">Chevrolet</option>
                                    <option value="bmw">BMW</option>
                                    <option value="mercedes">Mercedes</option>
                                    <option value="audi">Audi</option>
                                    <option value="nissan">Nissan</option>
                                    <option value="volkswagen">Volkswagen</option>
                                    <option value="hyundai">Hyundai</option>
                                    <option value="kia">Kia</option>
                                    <option value="subaru">Subaru</option>
                                    <option value="mazda">Mazda</option>
                                    <option value="jeep">Jeep</option>
                                    <option value="chrysler">Chrysler</option>
                                    <option value="gmc">GMC</option>
                                    <option value="resla">Tesla</option>
                                    <option value="porsche">Porsche</option>
                                    <option value="lexus">Lexus</option>
                                    <option value="land_rover">Land Rover</option>
                                </select>
                            </td>
                            <td>
                                Model:
                                <br>
                                <input type="text" class="req" placeholder="*" name="model" onblur="this.value = capitalizeFirstLetter(this.value)" required/>
                            </td>
                            <td>
                                Trim:
                                <br>
                                <input type="text" placeholder="Optional" name="trim" onblur="this.value = capitalizeFirstLetter(this.value)"/>
                            </td>
                        </tr>
                        <tr class="center_3_cell">
                            <td>
                                Production Year:
                                <br>
                                <input type="number" id="year" class="req" placeholder="*" name="year" required>
                            </td>
                            <td>
                                Mileage:
                                <br>
                                <input type="number" class="req" placeholder="*" name="mileage" min="0" required/>
                            </td>
                            <td>
                                Title:
                                <br>
                                <select class="req" name="title" required>
                                    <option value="" disabled selected hidden>Select..</option>
                                    <option value="clean">Clean</option>
                                    <option value="lemon">Lemon</option>
                                    <option value="linkholder">Linkholder</option>
                                    <option value="salvaged">Salvaged</option>
                                    <option value="reconstructed">Reconstructed</option>
                                    <option value="junk">Junk</option>
                                </select>
                            </td>
                        </tr>
                        <tr class="center_3_cell">
                            <td>
                                Engine:
                                <br>
                                <input type="text" class="req" placeholder="*" name="engine" onblur="this.value = capitalizeFirstLetter(this.value)" required/>
                            </td>
                            <td>
                                Transmission:
                                <br>
                                <select class="req" name="transmission" required>
                                    <option value="" disabled selected hidden>Select..</option>
                                    <option value="automatic">Automatic</option>
                                    <option value="manual">Manual</option>
                                    <option value="cvt">Continuously Variable (CVT)</option>
                                    <option value="dual_clutch">Dual Clutch</option>
                                    <option value="automated_manual">Automated Manual</option>
                                    <option value="semi_auto">Semi-Automatic</option>
                                </select>
                            </td>
                            <td>
                                Drivetrain:
                                <br>
                                <select class="req" name="drivetrain" required>
                                    <option value="" disabled selected hidden>Select..</option>
                                    <option value="fwd">Front-Wheel Drive (FWD)</option>
                                    <option value="rwd">Rear-Wheel Drive (RWD)</option>
                                    <option value="awd">All-Wheel Drive (AWD)</option>
                                    <option value="4wd">4-Wheel Drive (4WD)</option>
                                </select>
                            </td>
                        </tr>
                        <tr class="center_2_cell">
                            <td>
                                Exterior Color:
                                <br>
                                <input type="text" class="req" placeholder="*" name="color_ext" onblur="this.value = capitalizeFirstLetter(this.value)" required/>
                            </td>
                            <td>
                                Interior Color:
                                <br>
                                <input type="text" placeholder="Optional" name="color_int" onblur="this.value = capitalizeFirstLetter(this.value)"/>
                            </td>
                        </tr>
                        <tr class="center_2_cell">
                            <td>
                                Door Count:
                                <br>
                                <input type="number" class="req" placeholder="*" name="doors" min="1" max="4" required/>
                            </td>
                            <td>
                                Fuel-type:
                                <br>
                                <select class="req" name="fueltype" required>
                                    <option value="" disabled selected hidden>Select..</option>
                                    <option value="gas">Gasoline</option>
                                    <option value="diesel">Diesel</option>
                                    <option value="electric">Electric</option>
                                    <option value="hybrid">Hybrid</option>
                                    <option value="flex">Flex (E85)</option>
                                    <option value="hydrogen">Hydrogen</option>
                                    <option value="natural_gas">Natural Gas</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td class="center_1_cell">
                                Price:
                                <br>
                                <input type="number" class="req" placeholder="*" name="price" min="0" required/>
                            </td>
                        </tr>
                        <tr>
                            <td class="center_1_cell">
                                Location:
                                <br>
                                <select class="req" name="location" required>
                                    <option value="" disabled selected hidden>Select..</option>
                                    <option value="turnersville">Turnersville</option>
                                    <option value="marlton">Marlton</option>
                                    <option value="philly">Philly</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td class="center_1_cell">
                                Picture:
                                <br>
                                <input type="file" name="listing_pic" required/>
                            </td>
                        </tr>
                        <tr>
                            <td class="center_1_cell">
                                Keywords:
                                <br>
                                <textarea name="keywords" placeholder="Optional" rows="4" cols="30"></textarea>
                            </td>
                        </tr>
                        <tr>
                            <td class="center_1_cell">
                                <input type="submit" name="listing_create" value="Submit">
                            </td>
                        </tr>
                    </table>
                </form>
                <button id="closeOverlay">Close</button>
            </div>
        </div>`
    );

    $('body').append(overlay);

    formatCarYears();

    // Closes overlay
    $('#closeOverlay').on('click', function () {
        $('#createListing_overlay').remove();
    });
};

function editListingForm() {
    // Creates the overlay
    const overlay = $(
        `<div id="createListing_overlay">
            <div class="content">
                <h2>Listing VIN: ${formData.vin}</h2>
                <form method="POST" action="listings.php">
                    <table class="edit_table">
                        <tr class="center_3_cell">
                            <td>
                                Make:
                                <br>
                                <select class="req" name="make" required>
                                    <option value="" disabled selected hidden>Select..</option>
                                    <option value="toyota" ${formData.make === 'toyota' ? 'selected' : ''}>Toyota</option>
                                    <option value="honda" ${formData.make === 'honda' ? 'selected' : ''}>Honda</option>
                                    <option value="ford" ${formData.make === 'ford' ? 'selected' : ''}>Ford</option>
                                    <option value="chevrolet" ${formData.make === 'chevrolet' ? 'selected' : ''}>Chevrolet</option>
                                    <option value="bmw" ${formData.make === 'bmw' ? 'selected' : ''}>BMW</option>
                                    <option value="mercedes" ${formData.make === 'mercedes' ? 'selected' : ''}>Mercedes</option>
                                    <option value="audi" ${formData.make === 'audi' ? 'selected' : ''}>Audi</option>
                                    <option value="nissan" ${formData.make === 'nissan' ? 'selected' : ''}>Nissan</option>
                                    <option value="volkswagen" ${formData.make === 'volkswagen' ? 'selected' : ''}>Volkswagen</option>
                                    <option value="hyundai" ${formData.make === 'hyundai' ? 'selected' : ''}>Hyundai</option>
                                    <option value="kia" ${formData.make === 'kia' ? 'selected' : ''}>Kia</option>
                                    <option value="subaru" ${formData.make === 'subaru' ? 'selected' : ''}>Subaru</option>
                                    <option value="mazda" ${formData.make === 'mazda' ? 'selected' : ''}>Mazda</option>
                                    <option value="jeep" ${formData.make === 'jeep' ? 'selected' : ''}>Jeep</option>
                                    <option value="chrysler" ${formData.make === 'chrysler' ? 'selected' : ''}>Chrysler</option>
                                    <option value="gmc" ${formData.make === 'gmc' ? 'selected' : ''}>GMC</option>
                                    <option value="resla" ${formData.make === 'resla' ? 'selected' : ''}>Tesla</option>
                                    <option value="porsche" ${formData.make === 'porsche' ? 'selected' : ''}>Porsche</option>
                                    <option value="lexus" ${formData.make === 'lexus' ? 'selected' : ''}>Lexus</option>
                                    <option value="land_rover" ${formData.make === 'land_rover' ? 'selected' : ''}>Land Rover</option>
                                </select>
                            </td>
                            <td>
                                Model:
                                <br>
                                <input type="text" class="req" placeholder="*" name="model" value="${formData.model || ''}" onblur="this.value = capitalizeFirstLetter(this.value)" required/>
                            </td>
                            <td>
                                Trim:
                                <br>
                                <input type="text" placeholder="Optional" name="trim" value="${formData.trim || ''}" onblur="this.value = capitalizeFirstLetter(this.value)"/>
                            </td>
                        </tr>
                        <tr class="center_3_cell">
                            <td>
                                Production Year:
                                <br>
                                <input type="number" id="year" class="req" placeholder="*" name="year" value="${formData.year || ''}" required>
                            </td>
                            <td>
                                Mileage:
                                <br>
                                <input type="number" class="req" placeholder="*" name="mileage" min="0" value="${formData.mileage || ''}" required/>
                            </td>
                            <td>
                                Title:
                                <br>
                                <select class="req" name="title" required>
                                    <option value="" disabled selected hidden>Select..</option>
                                    <option value="clean" ${formData.title === 'clean' ? 'selected' : ''}>Clean</option>
                                    <option value="lemon" ${formData.title === 'lemon' ? 'selected' : ''}>Lemon</option>
                                    <option value="linkholder" ${formData.title === 'linkholder' ? 'selected' : ''}>Linkholder</option>
                                    <option value="salvaged" ${formData.title === 'salvaged' ? 'selected' : ''}>Salvaged</option>
                                    <option value="reconstructed" ${formData.title === 'reconstructed' ? 'selected' : ''}>Reconstructed</option>
                                    <option value="junk" ${formData.title === 'junk' ? 'selected' : ''}>Junk</option>
                                </select>
                            </td>
                        </tr>
                        <tr class="center_3_cell">
                            <td>
                                Engine:
                                <br>
                                <input type="text" class="req" placeholder="*" name="engine" value="${formData.engine || ''}" onblur="this.value = capitalizeFirstLetter(this.value)" required/>
                            </td>
                            <td>
                                Transmission:
                                <br>
                                <select class="req" name="transmission" required>
                                    <option value="" disabled selected hidden>Select..</option>
                                    <option value="automatic" ${formData.transmission === 'automatic' ? 'selected' : ''}>Automatic</option>
                                    <option value="manual" ${formData.transmission === 'manual' ? 'selected' : ''}>Manual</option>
                                    <option value="cvt" ${formData.transmission === 'cvt' ? 'selected' : ''}>Continuously Variable (CVT)</option>
                                    <option value="dual_clutch" ${formData.transmission === 'dual_clutch' ? 'selected' : ''}>Dual Clutch</option>
                                    <option value="automated_manual" ${formData.transmission === 'automated_manual' ? 'selected' : ''}>Automated Manual</option>
                                    <option value="semi_auto" ${formData.transmission === 'semi_auto' ? 'selected' : ''}>Semi-Automatic</option>
                                </select>
                            </td>
                            <td>
                                Drivetrain:
                                <br>
                                <select class="req" name="drivetrain" required>
                                    <option value="" disabled selected hidden>Select..</option>
                                    <option value="fwd" ${formData.drivetrain === 'fwd' ? 'selected' : ''}>Front-Wheel Drive (FWD)</option>
                                    <option value="rwd" ${formData.drivetrain === 'rwd' ? 'selected' : ''}>Rear-Wheel Drive (RWD)</option>
                                    <option value="awd" ${formData.drivetrain === 'awd' ? 'selected' : ''}>All-Wheel Drive (AWD)</option>
                                    <option value="4wd" ${formData.drivetrain === '4wd' ? 'selected' : ''}>4-Wheel Drive (4WD)</option>
                                </select>
                            </td>
                        </tr>
                        <tr class="center_2_cell">
                            <td>
                                Exterior Color:
                                <br>
                                <input type="text" class="req" placeholder="*" name="color_ext" value="${formData.color_ext || ''}" onblur="this.value = capitalizeFirstLetter(this.value)" required/>
                            </td>
                            <td>
                                Interior Color:
                                <br>
                                <input type="text" placeholder="Optional" name="color_int" value="${formData.color_int || ''}" onblur="this.value = capitalizeFirstLetter(this.value)"/>
                            </td>
                        </tr>
                        <tr class="center_2_cell">
                            <td>
                                Door Count:
                                <br>
                                <input type="number" class="req" placeholder="*" name="doors" min="1" max="4" value="${formData.doors || ''}" required/>
                            </td>
                            <td>
                                Fuel-type:
                                <br>
                                <select class="req" name="fueltype" required>
                                    <option value="" disabled selected hidden>Select..</option>
                                    <option value="gas" ${formData.fueltype === 'gas' ? 'selected' : ''}>Gasoline</option>
                                    <option value="diesel" ${formData.fueltype === 'diesel' ? 'selected' : ''}>Diesel</option>
                                    <option value="electric" ${formData.fueltype === 'electric' ? 'selected' : ''}>Electric</option>
                                    <option value="hybrid" ${formData.fueltype === 'hybrid' ? 'selected' : ''}>Hybrid</option>
                                    <option value="flex" ${formData.fueltype === 'flex' ? 'selected' : ''}>Flex (E85)</option>
                                    <option value="hydrogen" ${formData.fueltype === 'hydrogen' ? 'selected' : ''}>Hydrogen</option>
                                    <option value="natural_gas" ${formData.fueltype === 'natural_gas' ? 'selected' : ''}>Natural Gas</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td class="center_1_cell">
                                Price:
                                <br>
                                <input type="number" class="req" placeholder="*" name="price" min="0" value="${formData.price || ''}" required/>
                            </td>
                        </tr>
                        <tr>
                            <td class="center_1_cell">
                                Location:
                                <br>
                                <select class="req" name="location" required>
                                    <option value="" disabled selected hidden>Select..</option>
                                    <option value="turnersville" ${formData.location === 'turnersville' ? 'selected' : ''}>Turnersville</option>
                                    <option value="marlton" ${formData.location === 'marlton' ? 'selected' : ''}>Marlton</option>
                                    <option value="philly" ${formData.location === 'philly' ? 'selected' : ''}>Philadelphia</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td class="center_1_cell">
                                Keywords:
                                <br>
                                <textarea name="keywords" placeholder="Optional" rows="4" cols="30">${formData.keywords || ''}</textarea>
                            </td>
                        </tr>
                        <tr>
                            <td class="center_1_cell">
                                <input type="hidden" name="vin" value="${formData.vin || ''}"/>
                                <input type="submit" name="listing_update" value="Submit">
                            </td>
                        </tr>
                    </table>
                </form>
                <button id="closeOverlay">Close</button>
            </div>
        </div>`
    );

    $('body').append(overlay);

    formatCarYears();

    // Closes overlay
    $('#closeOverlay').on('click', function () {
        $('#createListing_overlay').remove();
    });
};

function createSearchForm() {
    const formHtml = `
        <form method="POST" action="index.php">
            <div>
                Make:
                <br>
                <select id="make" class="req" name="make">
                    <option value="" selected></option>
                    <option value="toyota" ${formData.make === 'toyota' ? 'selected' : ''}>Toyota</option>
                    <option value="honda" ${formData.make === 'honda' ? 'selected' : ''}>Honda</option>
                    <option value="ford" ${formData.make === 'ford' ? 'selected' : ''}>Ford</option>
                    <option value="chevrolet" ${formData.make === 'chevrolet' ? 'selected' : ''}>Chevrolet</option>
                    <option value="bmw" ${formData.make === 'bmw' ? 'selected' : ''}>BMW</option>
                    <option value="mercedes" ${formData.make === 'mercedes' ? 'selected' : ''}>Mercedes</option>
                    <option value="audi" ${formData.make === 'audi' ? 'selected' : ''}>Audi</option>
                    <option value="nissan" ${formData.make === 'nissan' ? 'selected' : ''}>Nissan</option>
                    <option value="volkswagen" ${formData.make === 'volkswagen' ? 'selected' : ''}>Volkswagen</option>
                    <option value="hyundai" ${formData.make === 'hyundai' ? 'selected' : ''}>Hyundai</option>
                    <option value="kia" ${formData.make === 'kia' ? 'selected' : ''}>Kia</option>
                    <option value="subaru" ${formData.make === 'subaru' ? 'selected' : ''}>Subaru</option>
                    <option value="mazda" ${formData.make === 'mazda' ? 'selected' : ''}>Mazda</option>
                    <option value="jeep" ${formData.make === 'jeep' ? 'selected' : ''}>Jeep</option>
                    <option value="chrysler" ${formData.make === 'chrysler' ? 'selected' : ''}>Chrysler</option>
                    <option value="gmc" ${formData.make === 'gmc' ? 'selected' : ''}>GMC</option>
                    <option value="tesla" ${formData.make === 'tesla' ? 'selected' : ''}>Tesla</option>
                    <option value="porsche" ${formData.make === 'porsche' ? 'selected' : ''}>Porsche</option>
                    <option value="lexus" ${formData.make === 'lexus' ? 'selected' : ''}>Lexus</option>
                    <option value="land_rover" ${formData.make === 'land_rover' ? 'selected' : ''}>Land Rover</option>
                </select>
            </div>
            <div>
                Model:
                <br>
                <input type="text" id="model" name="model" value="${formData.model || ''}" 
                    onblur="this.value = capitalizeFirstLetter(this.value)" />
            </div>
            <div>
                Trim:
                <br>
                <input type="text" id="trim" name="trim" value="${formData.trim || ''}" 
                    onblur="this.value = capitalizeFirstLetter(this.value)" />
            </div>
            <div>
                Year:
                <br>
                <input type="number" id="year" name="year" value="${formData.year || ''}">
            </div>
            <div>
                Min Mileage:
                <br>
                <input type="number" id="min_mileage" name="min_mileage" value="${formData.min_mileage || ''}" min="0" />
            </div>
            <div>
                Max Mileage:
                <br>
                <input type="number" id="max_mileage" name="max_mileage" value="${formData.max_mileage || ''}" min="0" />
            </div>
            <div>
                Title:
                <br>
                <select id="title" class="req" name="title">
                    <option value="" selected></option>
                    <option value="clean" ${formData.title === 'clean' ? 'selected' : ''}>Clean</option>
                    <option value="lemon" ${formData.title === 'lemon' ? 'selected' : ''}>Lemon</option>
                    <option value="linkholder" ${formData.title === 'linkholder' ? 'selected' : ''}>Linkholder</option>
                    <option value="salvaged" ${formData.title === 'salvaged' ? 'selected' : ''}>Salvaged</option>
                    <option value="reconstructed" ${formData.title === 'reconstructed' ? 'selected' : ''}>Reconstructed</option>
                    <option value="junk" ${formData.title === 'junk' ? 'selected' : ''}>Junk</option>
                </select>
            </div>
            <div>
                Engine:
                <br>
                <input type="text" id="engine" name="engine" value="${formData.engine || ''}" 
                    onblur="this.value = capitalizeFirstLetter(this.value)" />
            </div>
            <div>
                Transmission:
                <br>
                <select id="transmission" class="req" name="transmission">
                    <option value="" selected></option>
                    <option value="automatic" ${formData.transmission === 'automatic' ? 'selected' : ''}>Automatic</option>
                    <option value="manual" ${formData.transmission === 'manual' ? 'selected' : ''}>Manual</option>
                    <option value="cvt" ${formData.transmission === 'cvt' ? 'selected' : ''}>Continuously Variable (CVT)</option>
                    <option value="dual_clutch" ${formData.transmission === 'dual_clutch' ? 'selected' : ''}>Dual Clutch</option>
                    <option value="automated_manual" ${formData.transmission === 'automated_manual' ? 'selected' : ''}>Automated Manual</option>
                    <option value="semi_auto" ${formData.transmission === 'semi_auto' ? 'selected' : ''}>Semi-Automatic</option>
                </select>
            </div>
            <div>
                Drivetrain:
                <br>
                <select id="drivetrain" class="req" name="drivetrain">
                    <option value="" selected></option>
                    <option value="fwd" ${formData.drivetrain === 'fwd' ? 'selected' : ''}>Front-Wheel Drive (FWD)</option>
                    <option value="rwd" ${formData.drivetrain === 'rwd' ? 'selected' : ''}>Rear-Wheel Drive (RWD)</option>
                    <option value="awd" ${formData.drivetrain === 'awd' ? 'selected' : ''}>All-Wheel Drive (AWD)</option>
                    <option value="4wd" ${formData.drivetrain === '4wd' ? 'selected' : ''}>4-Wheel Drive (4WD)</option>
                </select>
            </div>
            <div>
                Exterior Color:
                <br>
                <input type="text" id="color_ext" name="color_ext" value="${formData.color_ext || ''}" 
                    onblur="this.value = capitalizeFirstLetter(this.value)" />
            </div>
            <div>
                Interior Color:
                <br>
                <input type="text" id="color_int" name="color_int" value="${formData.color_int || ''}" 
                    onblur="this.value = capitalizeFirstLetter(this.value)" />
            </div>
            <div>
                Door Count:
                <br>
                <input type="number" id="doors" name="doors" value="${formData.doors || ''}" min="1" max="4" />
            </div>
            <div>
                Fuel-type:
                <br>
                <select id="fueltype" class="req" name="fueltype">
                    <option value="" selected></option>
                    <option value="gas" ${formData.fueltype === 'gas' ? 'selected' : ''}>Gasoline</option>
                    <option value="diesel" ${formData.fueltype === 'diesel' ? 'selected' : ''}>Diesel</option>
                    <option value="electric" ${formData.fueltype === 'electric' ? 'selected' : ''}>Electric</option>
                    <option value="hybrid" ${formData.fueltype === 'hybrid' ? 'selected' : ''}>Hybrid</option>
                    <option value="flex" ${formData.fueltype === 'flex' ? 'selected' : ''}>Flex (E85)</option>
                    <option value="hydrogen" ${formData.fueltype === 'hydrogen' ? 'selected' : ''}>Hydrogen</option>
                    <option value="natural_gas" ${formData.fueltype === 'natural_gas' ? 'selected' : ''}>Natural Gas</option>
                </select>
            </div>
            <div>
                Min Price:
                <br>
                <input type="number" id="min_price" name="min_price" value="${formData.max_price || ''}" min="0" />
            </div>
            <div>
                Max Price:
                <br>
                <input type="number" id="max_price" name="max_price" value="${formData.min_price || ''}" min="0" />
            </div>
            <div>
                Location:
                <br>
                <select name="location">
                    <option value="" ${formData.location === '' ? 'selected' : ''}></option>
                    <option value="turnersville" ${formData.location === 'turnersville' ? 'selected' : ''}>Turnersville</option>
                    <option value="marlton" ${formData.location === 'marlton' ? 'selected' : ''}>Marlton</option>
                    <option value="philly" ${formData.location === 'philly' ? 'selected' : ''}>Philadelphia</option>
                </select>
            </div>
            <div>
                Keywords:
                <br>
                <textarea id="keywords" name="keywords" rows="4" cols="30">${formData.keywords || ''}</textarea>
            </div>
            <div id="submit_div">
                <input type="submit" name="listing_search" value="Submit">
            </div>
        </form>
    `;

    // Replace the form content dynamically
    $("#side_search").append(formHtml);
};


function viewListing(index, listing) {
    // Create overlay element
    const overlay = $(`
        <div id="overlay">
            <div class="overlay-content">
                <h2>Listing Details</h2>
                <p><strong>Make:</strong> ${listing.make}</p>
                <p><strong>Model:</strong> ${listing.model}</p>
                <p><strong>VIN:</strong> ${listing.vin}</p>
                <button id="closeOverlay">Close</button>
            </div>
        </div>
    `);

    // Append overlay to the body
    $('body').append(overlay);

    // Style the overlay (you can also move this to a CSS file)
    $('#overlay').css({
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
    });

    $('.overlay-content').css({
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '10px',
        textAlign: 'center',
    });

    $('#closeOverlay').css({
        marginTop: '10px',
        padding: '10px 20px',
        border: 'none',
        backgroundColor: '#007BFF',
        color: '#fff',
        borderRadius: '5px',
        cursor: 'pointer',
    });

    // Close overlay on button click
    $('#closeOverlay').on('click', function () {
        $('#overlay').remove();
    });
};

function deleteListing(vin) {
    const isConfirmed = window.confirm('Are you sure you want to delete the listing for VIN: ' + vin + '?');
    if (isConfirmed) {
        // Create a form element
        const form = document.createElement('form');
        form.method = 'POST';
        form.action = 'listings.php'; // Replace with the path to your PHP script

        // Create a hidden input for the search term (VIN)
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = 'listing_delete'; // The name of the input (you'll check for it in PHP)
        input.value = vin; // Set the VIN value passed to this function

        // Append the hidden input to the form
        form.appendChild(input);

        // Optionally, you can add a hidden field for a "delete" flag if you need it:
        const deleteFlagInput = document.createElement('input');
        deleteFlagInput.type = 'hidden';
        deleteFlagInput.name = 'delete';
        deleteFlagInput.value = 'true'; // You could check for this in PHP as an additional flag

        form.appendChild(deleteFlagInput);

        // Append the form to the body (this won't be visible)
        document.body.appendChild(form);

        // Submit the form
        form.submit();
    };
};

function editListing(vin) {
    // Create a form element
    const form = document.createElement('form');
    form.method = 'POST';
    form.action = 'listings.php';

    // Create a hidden input for the search term (VIN)
    const input = document.createElement('input');
    input.type = 'hidden';
    input.name = 'listing_edit';
    input.value = vin;

    // Append the hidden input to the form
    form.appendChild(input);

    const editFlagInput = document.createElement('input');
    editFlagInput.type = 'hidden';
    editFlagInput.name = 'edit';
    editFlagInput.value = 'true';

    form.appendChild(editFlagInput);

    // Append the form to the body (this won't be visible)
    document.body.appendChild(form);

    // Submit the form
    form.submit();
};

function createAdminListingGui(listings) {
    const container = document.getElementById('autoListings');
    container.innerHTML = ''; // Clear existing listings

    listings.forEach((listing, index) => {
        // Create a listing container
        const listingDiv = document.createElement('div');
        listingDiv.className = 'listing';
        listingDiv.id = `listing${index}`;

        // Create buttons container
        const buttonsDiv = document.createElement('div');
        buttonsDiv.className = 'buttons';

        // View button
        const viewButton = document.createElement('button');
        viewButton.className = 'view';
        viewButton.textContent = 'View';
        viewButton.onclick = () => viewListing(index, listing);
        buttonsDiv.appendChild(viewButton);

        // Edit button
        const editButton = document.createElement('button');
        editButton.className = 'edit';
        editButton.textContent = 'Edit';
        editButton.onclick = () => editListing(listing.vin);
        buttonsDiv.appendChild(editButton);

        // Delete button
        const deleteButton = document.createElement('button');
        deleteButton.className = 'delete';
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = () => {
            console.log(`Delete button clicked for VIN: ${listing.vin}`);
            deleteListing(listing.vin);
        };
        buttonsDiv.appendChild(deleteButton);

        // Create photo container
        const photoDiv = document.createElement('div');
        photoDiv.className = 'photo';
        const photoImg = document.createElement('img');
        photoImg.src = listing.image;
        photoImg.alt = `${capitalizeFirstLetter(listing.make)} ${listing.model}`;
        photoDiv.appendChild(photoImg);

        // Create details container
        const detailsDiv = document.createElement('div');
        detailsDiv.className = 'details';
        detailsDiv.innerHTML = `
            <p><strong>Make:</strong> ${capitalizeFirstLetter(listing.make)}</p>
            <p><strong>Model:</strong> ${listing.model}</p>
            <p><strong>VIN:</strong> ${listing.vin}</p>
        `;

        // Append buttons, photo, and details to the listing container
        listingDiv.appendChild(buttonsDiv);
        listingDiv.appendChild(photoDiv);
        listingDiv.appendChild(detailsDiv);

        // Append the listing container to the main container
        container.appendChild(listingDiv);
    });
};

function createListingGui(listings) {
    const container = document.getElementById('autoListingsFront');
    container.innerHTML = ''; // Clears existing listings

    listings.forEach((listing, index) => {
        const listingDiv = document.createElement('div');
        listingDiv.className = 'listing';
        listingDiv.id = `listing${index}`;

        const form = document.createElement('form');
        form.method = 'POST';
        form.action = 'view-listing.php';
        form.style.display = 'none';

        const hiddenInput = document.createElement('input');
        hiddenInput.type = 'hidden';
        hiddenInput.name = 'listingVin';
        hiddenInput.value = listing.vin;
        form.appendChild(hiddenInput);
        listingDiv.appendChild(form);

        const title = document.createElement('a');
        title.href = '#';
        title.textContent = `${listing.year} ${capitalizeFirstLetter(listing.make)} ${listing.model} ${listing.trim}`;
        title.className = 'listing-title';
        title.onclick = (e) => {
            e.preventDefault();
            form.submit();
        };
        listingDiv.appendChild(title);

        const contentDiv = document.createElement('div');
        contentDiv.className = 'content';

        const img = document.createElement('img');
        img.src = listing.image;
        img.alt = `${listing.year} ${capitalizeFirstLetter(listing.make)} ${listing.model}`;
        img.className = 'listing-img';
        img.onclick = () => form.submit();

        const detailsDiv = document.createElement('div');
        detailsDiv.className = 'details';

        const price = document.createElement('div');
        price.textContent = `${new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(listing.price)}`;
        price.className = 'listing-price';
        detailsDiv.appendChild(price);

        const mileage = document.createElement('div');
        mileage.textContent = `${new Intl.NumberFormat('en-US').format(listing.mileage)} mi.`;
        mileage.className = 'listing-mileage';
        detailsDiv.appendChild(mileage);

        const location = document.createElement('div');
        location.className = 'listing-location';
        if (listing.location == "turnersville") {
            location.textContent = `K's Autos of Turnersville`;
        } else if (listing.location == "marlton") {
            location.textContent = `K's Autos of Marlton`;
        } else {
            location.textContent = `K's Autos of Philly`;
        }
        detailsDiv.appendChild(location);

        const keywords = document.createElement('div');
        keywords.textContent = `${listing.keywords}`;
        keywords.className = 'listing-keywords';
        detailsDiv.appendChild(keywords);

        contentDiv.appendChild(img);
        contentDiv.appendChild(detailsDiv);

        listingDiv.appendChild(contentDiv);

        container.appendChild(listingDiv);
    });
};

function editContactForm() {
    // Creates the overlay
    const overlay = $(
        `<div id="editContact_overlay">
            <div class="content">
                <h2>Contact Request #: ${formData.id}</h2>
                <form method="POST" action="contacts.php">
                    <table class="edit_table">
                        <tr class="center_2_cell">
                            <td>
                                First Name:
                                <br>
                                <input type="text" class="req" placeholder="*" name="first_name" value="${formData.fname || ''}" onblur="this.value = capitalizeFirstLetter(this.value)" required/>
                            </td>
                            <td>
                                Last Name:
                                <br>
                                <input type="text" class="req" placeholder="*" name="last_name" value="${formData.lname || ''}" onblur="this.value = capitalizeFirstLetter(this.value)" required/>
                            </td>
                        </tr>
                        <tr class="center_2_cell">
                            <td>
                                Email:
                                <br>
                                <input type="text" class="req" placeholder="*" name="email" value="${formData.email || ''}" required/>
                            </td>
                            <td>
                                Phone #:
                                <br>
                                <input type="number" placeholder="Optional" name="phone" value="${formData.phone || ''}" required/>
                            </td>
                        </tr>
                        <tr>
                            <td class="center_1_cell">
                                Comments/Reason For Inquiry:
                                <br>
                                <textarea name="comment" placeholder="Optional" rows="5" cols="30">${formData.comment || ''}</textarea>
                            </td>
                        </tr>
                        <tr>
                            <td class="center_1_cell">
                                <input type="hidden" name="contact_id" value="${formData.id || ''}"/>
                                <input type="submit" name="contact_update" value="Submit">
                            </td>
                        </tr>
                    </table>
                </form>
                <button id="closeOverlay">Close</button>
            </div>
        </div>`
    );

    $('body').append(overlay);

    // Closes overlay
    $('#closeOverlay').on('click', function () {
        $('#editContact_overlay').remove();
    });
};

function viewContact(index, contact) {
    // Create overlay element
    const overlay = $(`
        <div id="overlay">
            <div class="overlay-content">
                <h2>Contact Request Details</h2>
                <p><strong>First Name:</strong> ${contact.first_name}</p>
                <p><strong>Last Name:</strong> ${contact.last_name}</p>
                <p><strong>Email:</strong> ${contact.email}</p>
                <p><strong>Phone #:</strong> ${contact.phone}</p>
                <p><strong>Reason For Inquiry:</strong> ${contact.comment}</p>
                <button id="closeOverlay">Close</button>
            </div>
        </div>
    `);

    // Append overlay to the body
    $('body').append(overlay);

    // Style the overlay (you can also move this to a CSS file)
    $('#overlay').css({
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
    });

    $('.overlay-content').css({
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '10px',
        textAlign: 'center',
    });

    $('#closeOverlay').css({
        marginTop: '10px',
        padding: '10px 20px',
        border: 'none',
        backgroundColor: '#007BFF',
        color: '#fff',
        borderRadius: '5px',
        cursor: 'pointer',
    });

    // Close overlay on button click
    $('#closeOverlay').on('click', function () {
        $('#overlay').remove();
    });
};

function deleteContact(id) {
    const isConfirmed = window.confirm('Are you sure you want to delete contact request #: ' + id + '?');
    if (isConfirmed) {
        const form = document.createElement('form');
        form.method = 'POST';
        form.action = 'contacts.php';

        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = 'contact_delete';
        input.value = id;

        form.appendChild(input);

        const deleteFlagInput = document.createElement('input');
        deleteFlagInput.type = 'hidden';
        deleteFlagInput.name = 'delete';
        deleteFlagInput.value = 'true';

        form.appendChild(deleteFlagInput);

        document.body.appendChild(form);

        form.submit();
    };
};

function editContact(id) {
    const form = document.createElement('form');
    form.method = 'POST';
    form.action = 'contacts.php';

    const input = document.createElement('input');
    input.type = 'hidden';
    input.name = 'contact_edit';
    input.value = id;

    form.appendChild(input);

    const editFlagInput = document.createElement('input');
    editFlagInput.type = 'hidden';
    editFlagInput.name = 'edit';
    editFlagInput.value = 'true';

    form.appendChild(editFlagInput);

    document.body.appendChild(form);

    form.submit();
};

function createContactGui(contacts) {
    const container = document.getElementById('contactRequests');
    container.innerHTML = '';

    contacts.forEach((contact, index) => {
        const contactDiv = document.createElement('div');
        contactDiv.className = 'contact';
        contactDiv.id = `contact${index}`;

        const buttonsDiv = document.createElement('div');
        buttonsDiv.className = 'buttons';

        const viewButton = document.createElement('button');
        viewButton.className = 'view';
        viewButton.textContent = 'View';
        viewButton.onclick = () =>  viewContact(index, contact);
        buttonsDiv.appendChild(viewButton);

        const editButton = document.createElement('button');
        editButton.className = 'edit';
        editButton.textContent = 'Edit';
        editButton.onclick = () => editContact(contact.contact_id);
        buttonsDiv.appendChild(editButton);
        

        const deleteButton = document.createElement('button');
        deleteButton.className = 'delete';
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = () => {
            console.log(`Delete button clicked for contact_id: ${contact.contact_id}`);
            deleteContact(contact.contact_id);
        };
        buttonsDiv.appendChild(deleteButton);

        // Create details container
        const detailsDiv = document.createElement('div');
        detailsDiv.className = 'details';
        detailsDiv.innerHTML = `
            <p><strong>Request #:</strong> ${contact.contact_id}</p>
            <p><strong>First Name:</strong> ${contact.first_name}</p>
            <p><strong>Last Name:</strong> ${contact.last_name}</p>
            <p><strong>Inquiry:</strong> ${contact.comment}</p>
        `;

        contactDiv.appendChild(buttonsDiv);
        contactDiv.appendChild(detailsDiv);

        container.appendChild(contactDiv);
    });
};

function newAppointForm() {
    // Creates the overlay
    const overlay = $(
        `<div id="createAppoint_overlay">
            <div class="content">
                <h2>Schedule A New Appointment</h2>
                <form method="POST" action="appointments.php">
                    <table class="edit_table">
                        <tr class="center_2_cell">
                            <td>
                                <strong>First Name:</strong>
                                <br>
                                <input type="text" class="req" placeholder="*" name="first_name" onblur="this.value = capitalizeFirstLetter(this.value)" required/>
                            </td>
                            <td>
                                Last Name:
                                <br>
                                <input type="text" class="req" placeholder="*" name="last_name" onblur="this.value = capitalizeFirstLetter(this.value)"/>
                            </td>
                        </tr>
                        <tr class="center_2_cell">
                            <td>
                                Email:
                                <br>
                                <input type="email" class="req" placeholder="*" name="email"/>
                            </td>
                            <td>
                                Phone #:
                                <br>
                                <input type="number" placeholder="Optional" name="phone"/>
                            </td>
                        </tr>
                        <tr>
                            <td  class="center_1_cell">
                                Time:
                                <br>
                                <input type="datetime-local" name="date_time" id="date_time" required/>
                            </td>
                        </tr>
                        <tr>
                            <td  class="center_1_cell">
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
                            <td class="center_1_cell">
                                Comments/Reason For Inquiry:
                                <br>
                                <textarea name="comment" placeholder="Optional" rows="5" cols="30"></textarea>
                            </td>
                        </tr>
                        <tr>
                            <td class="center_1_cell">
                                <input type="submit" name="appointment_create" value="Submit">
                            </td>
                        </tr>
                    </table>
                </form>
                <button id="closeOverlay">Close</button>
            </div>
        </div>`
    );

    $('body').append(overlay);

    setMinDateTime('date_time');

    // Closes overlay
    $('#closeOverlay').on('click', function () {
        $('#createAppoint_overlay').remove();
    });
};

function editAppointForm() {
    // Creates the overlay
    const overlay = $(
        `<div id="editAppoint_overlay">
            <div class="content">
                <h2>Appointment ID: ${formData.id}</h2>
                <form method="POST" action="appointments.php">
                    <table class="edit_table">
                        <tr class="center_2_cell">
                            <td>
                                <strong>First Name:</strong>
                                <br>
                                <input type="text" class="req" placeholder="*" name="first_name" value="${formData.fname || ''}" onblur="this.value = capitalizeFirstLetter(this.value)" required/>
                            </td>
                            <td>
                                Last Name:
                                <br>
                                <input type="text" class="req" placeholder="*" name="last_name" value="${formData.lname || ''}" onblur="this.value = capitalizeFirstLetter(this.value)"/>
                            </td>
                        </tr>
                        <tr class="center_2_cell">
                            <td>
                                Email:
                                <br>
                                <input type="email" class="req" placeholder="*" name="email" value="${formData.email || ''}" required/>
                            </td>
                            <td>
                                Phone #:
                                <br>
                                <input type="number" placeholder="Optional" name="phone" value="${formData.phone || ''}"/>
                            </td>
                        </tr>
                        <tr>
                            <td class="center_1_cell">
                                Time:
                                <br>
                                <input type="datetime-local" name="date_time" id="date_time" value="${formData.date_time || ''}" required/>
                            </td>
                        </tr>
                        <tr>
                            <td class="center_1_cell">
                                Appointment Type:
                                <br>
                                <label>
                                    <input type="radio" name="appoint_type" value="maintenance" required ${formData.appoint_type === 'maintenance' ? 'checked' : ''}> Maintenance
                                </label>
                                <label>
                                    <input type="radio" name="appoint_type" value="body_work" ${formData.appoint_type === 'body_work' ? 'checked' : ''}> Body Work
                                </label>
                                <label>
                                    <input type="radio" name="appoint_type" value="financing" ${formData.appoint_type === 'financing' ? 'checked' : ''}> Financing
                                </label>
                                <label>
                                    <input type="radio" name="appoint_type" value="test_drive" ${formData.appoint_type === 'test_drive' ? 'checked' : ''}> Test Drive
                                </label>
                                <label>
                                    <input type="radio" name="appoint_type" value="vehicle_inquiry" ${formData.appoint_type === 'vehicle_inquiry' ? 'checked' : ''}> Vehicle Inquiry
                                </label>
                                <label>
                                    <input type="radio" name="appoint_type" value="other" ${formData.appoint_type === 'other' ? 'checked' : ''}> Other
                                </label>
                            </td>
                        </tr>
                        <tr>
                            <td class="center_1_cell">
                                Comments/Reason For Inquiry:
                                <br>
                                <textarea name="comment" placeholder="Optional" rows="5" cols="30">${formData.comment || ''}</textarea>
                            </td>
                        </tr>
                        <tr>
                            <td class="center_1_cell">
                                <input type="hidden" name="appoint_id" value="${formData.id || ''}"/>
                                <input type="submit" name="appointment_update" value="Submit">
                            </td>
                        </tr>
                    </table>
                </form>
                <button id="closeOverlay">Close</button>
            </div>
        </div>`
    );

    $('body').append(overlay);

    setMinDateTime('date_time');

    // Closes overlay
    $('#closeOverlay').on('click', function () {
        $('#editAppoint_overlay').remove();
    });
};

function viewAppointment(index, appointment) {
    // Create overlay element
    const overlay = $(`
        <div id="overlay">
            <div class="overlay-content">
                <h2>Appointment Details</h2>
                <p><strong>First Name:</strong> ${appointment.first_name}</p>
                <p><strong>Last Name:</strong> ${appointment.last_name}</p>
                <p><strong>Email:</strong> ${appointment.email}</p>
                <p><strong>Phone #:</strong> ${appointment.phone}</p>
                <p><strong>Reason For Appointment:</strong> ${appointment.comment}</p>
                <p><strong>Appointment Date and Time:</strong> ${new Date(appointment.date_time).toLocaleString()}</p>
                <button id="closeOverlay">Close</button>
            </div>
        </div>
    `);

    // Append overlay to the body
    $('body').append(overlay);

    // Style the overlay (you can also move this to a CSS file)
    $('#overlay').css({
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
    });

    $('.overlay-content').css({
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '10px',
        textAlign: 'center',
    });

    $('#closeOverlay').css({
        marginTop: '10px',
        padding: '10px 20px',
        border: 'none',
        backgroundColor: '#007BFF',
        color: '#fff',
        borderRadius: '5px',
        cursor: 'pointer',
    });

    // Close overlay on button click
    $('#closeOverlay').on('click', function () {
        $('#overlay').remove();
    });
};

function deleteAppointment(id) {
    const isConfirmed = window.confirm('Are you sure you want to delete appointment #: ' + id + '?');
    if (isConfirmed) {
        const form = document.createElement('form');
        form.method = 'POST';
        form.action = 'appointments.php';

        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = 'appointment_delete';
        input.value = id;

        form.appendChild(input);

        const deleteFlagInput = document.createElement('input');
        deleteFlagInput.type = 'hidden';
        deleteFlagInput.name = 'delete';
        deleteFlagInput.value = 'true';

        form.appendChild(deleteFlagInput);

        document.body.appendChild(form);

        form.submit();
    };
};

function editAppointment(id) {
    const form = document.createElement('form');
    form.method = 'POST';
    form.action = 'appointments.php';

    const input = document.createElement('input');
    input.type = 'hidden';
    input.name = 'appointment_edit';
    input.value = id;

    form.appendChild(input);

    const editFlagInput = document.createElement('input');
    editFlagInput.type = 'hidden';
    editFlagInput.name = 'edit';
    editFlagInput.value = 'true';

    form.appendChild(editFlagInput);

    document.body.appendChild(form);

    form.submit();
};

function formatAppointmentDate(dateTime) {
    const appointmentDate = new Date(dateTime);
    const today = new Date();
    const tomorrow = new Date(today);

    today.setHours(0, 0, 0, 0);
    tomorrow.setDate(today.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);

    if (appointmentDate.toDateString() === today.toDateString()) {
        return 'Today ' + appointmentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    } else if (appointmentDate.toDateString() === tomorrow.toDateString()) {
        return 'Tomorrow ' + appointmentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    } else if (appointmentDate < today) {
        return 'Past Due';
    } else {
        return appointmentDate.toLocaleDateString() + ' ' + appointmentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    }
};

function createAppointmentGui(appointments) {
    // Sort appointments by date_time in ascending order
    appointments.sort((a, b) => new Date(a.date_time) - new Date(b.date_time));

    const container = document.getElementById('appointments');
    container.innerHTML = '';

    appointments.forEach((appointment, index) => {
        const appointmentDiv = document.createElement('div');
        appointmentDiv.className = 'appointment';
        appointmentDiv.id = `appointment${index}`;

        const buttonsDiv = document.createElement('div');
        buttonsDiv.className = 'buttons';

        const viewButton = document.createElement('button');
        viewButton.className = 'view';
        viewButton.textContent = 'View';
        viewButton.onclick = () =>  viewAppointment(index, appointment);
        buttonsDiv.appendChild(viewButton);

        const editButton = document.createElement('button');
        editButton.className = 'edit';
        editButton.textContent = 'Edit';
        editButton.onclick = () => editAppointment(appointment.appoint_id);
        buttonsDiv.appendChild(editButton);
        
        const deleteButton = document.createElement('button');
        deleteButton.className = 'delete';
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = () => {
            console.log(`Delete button clicked for appointment_id: ${appointment.appoint_id}`);
            deleteAppointment(appointment.appoint_id);
        };
        buttonsDiv.appendChild(deleteButton);

        const detailsDiv = document.createElement('div');
        detailsDiv.className = 'details';
        detailsDiv.innerHTML = `
            <p><strong>Appointment #:</strong> ${appointment.appoint_id}</p>
            <p><strong>Appointment Date and Time:</strong> ${formatAppointmentDate(appointment.date_time)}</p>
            <p><strong>First Name:</strong> ${appointment.first_name}</p>
            <p><strong>Last Name:</strong> ${appointment.last_name}</p>
            <p><strong>Appointment Type:</strong> ${appointment.appoint_type}</p>
        `;

        appointmentDiv.appendChild(buttonsDiv);
        appointmentDiv.appendChild(detailsDiv);

        container.appendChild(appointmentDiv);
    });
};

function generateCalendars() {
    const container = document.getElementById('calendar-container');
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth(); // Current month (0-based index)
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const daysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();

    // Number of months to display (current month and next 2 months)
    const monthsToDisplay = 3;

    // Iterate over the next 3 months (current month and next two months)
    for (let i = 0; i < monthsToDisplay; i++) {
        const month = (currentMonth + i) % 12; // Wrap around months using modulo operator
        const year = currentYear + Math.floor((currentMonth + i) / 12); // Calculate year if month exceeds December

        // Create calendar container
        const calendar = document.createElement('div');
        calendar.className = 'calendar';

        // Add month title
        const title = document.createElement('div');
        title.className = 'month-title';
        title.textContent = `${monthNames[month]} ${year}`;
        calendar.appendChild(title);

        // Create table for calendar
        const table = document.createElement('table');
        
        // Add table header with day names
        const headerRow = document.createElement('tr');
        const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        dayNames.forEach(dayName => {
            const th = document.createElement('th');
            th.textContent = dayName;
            headerRow.appendChild(th);
        });
        table.appendChild(headerRow);

        // Generate all days
        const totalDays = daysInMonth(month, year);
        const firstDay = new Date(year, month, 1).getDay();
        let currentDay = 1;
        let row = document.createElement('tr');

        // Adds empty cells for days before first day of the month
        for (let i = 0; i < firstDay; i++) {
            const emptyCell = document.createElement('td');
            row.appendChild(emptyCell);
        }

        // Fill in first week
        for (let i = firstDay; i < 7; i++) {
            if (currentDay > totalDays) break;
            const cell = document.createElement('td');
            const dayNumber = document.createElement('div');
            dayNumber.className = 'day-number';
            dayNumber.textContent = currentDay;
            cell.appendChild(dayNumber);

            // Check if there is operational hours for this day
            const dateString = `${year}-${(month + 1).toString().padStart(2, '0')}-${currentDay.toString().padStart(2, '0')}`;
            const hoursEntry = allhoursData.find(item => item.operations_date === dateString); // Changed to operations_date

            const hoursPlaceholder = document.createElement('div');
            if (hoursEntry) {
                if (hoursEntry.operations_status === "closed") {
                    hoursPlaceholder.textContent = "Closed";  // Displays "Closed" if status is "closed"
                } else {
                    hoursPlaceholder.innerHTML = `Open: <br>${hoursEntry.open_time} - ${hoursEntry.close_time}`;
                }
            } else {
                hoursPlaceholder.textContent = "No Data.";
            }
            cell.appendChild(hoursPlaceholder);

            row.appendChild(cell);
            currentDay++;
        }
        table.appendChild(row);

        // Continues adding rows until all days are filled
        while (currentDay <= totalDays) {
            row = document.createElement('tr');
            for (let i = 0; i < 7; i++) {
                if (currentDay > totalDays) {
                    const emptyCell = document.createElement('td');
                    row.appendChild(emptyCell);
                } else {
                    const cell = document.createElement('td');
                    const dayNumber = document.createElement('div');
                    dayNumber.className = 'day-number';
                    dayNumber.textContent = currentDay;
                    cell.appendChild(dayNumber);

                    // Check if there is operational hours for this day
                    const dateString = `${year}-${(month + 1).toString().padStart(2, '0')}-${currentDay.toString().padStart(2, '0')}`;
                    const hoursEntry = allhoursData.find(item => item.operations_date === dateString); // Changed to operations_date

                    const hoursPlaceholder = document.createElement('div');
                    if (hoursEntry) {
                        if (hoursEntry.operations_status === "closed") {
                            hoursPlaceholder.textContent = "Closed";  // Displays "Closed" if status is "closed"
                        } else {
                            hoursPlaceholder.innerHTML = `Open: <br>${hoursEntry.open_time} - ${hoursEntry.close_time}`;
                        }
                    } else {
                        hoursPlaceholder.textContent = "No Data.";
                    }
                    cell.appendChild(hoursPlaceholder);

                    row.appendChild(cell);
                    currentDay++;
                }
            }
            table.appendChild(row);
        }

        calendar.appendChild(table);
        container.appendChild(calendar);
    }
};

function editDate(opers_date) {
    const form = document.createElement('form');
    form.method = 'POST';
    form.action = 'hours.php';

    const input = document.createElement('input');
    input.type = 'hidden';
    input.name = 'hours_edit';
    input.value = opers_date;

    form.appendChild(input);

    const editFlagInput = document.createElement('input');
    editFlagInput.type = 'hidden';
    editFlagInput.name = 'edit';
    editFlagInput.value = 'true';

    form.appendChild(editFlagInput);

    document.body.appendChild(form);

    form.submit();
};

function generateAdminCalendars() {
    const container = document.getElementById('calendar-container');
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth(); // Current month (0-based index)
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const daysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();

    // Calculate the months to display (current month and next 2 months)
    const monthsToDisplay = 3;

    // Iterate over the next 3 months, even if they cross into a new year
    for (let i = 0; i < monthsToDisplay; i++) {
        const month = (currentMonth + i) % 12; // Use modulo to wrap around the year if needed
        const year = currentYear + Math.floor((currentMonth + i) / 12); // Increase year when month crosses December

        // Create calendar container
        const calendar = document.createElement('div');
        calendar.className = 'calendar';

        // Add month title
        const title = document.createElement('div');
        title.className = 'month-title';
        title.textContent = `${monthNames[month]} ${year}`;
        calendar.appendChild(title);

        // Create table for calendar
        const table = document.createElement('table');
        
        // Add table header with day names
        const headerRow = document.createElement('tr');
        const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        dayNames.forEach(dayName => {
            const th = document.createElement('th');
            th.textContent = dayName;
            headerRow.appendChild(th);
        });
        table.appendChild(headerRow);

        // Generate all days
        const totalDays = daysInMonth(month, year);
        const firstDay = new Date(year, month, 1).getDay();
        let currentDay = 1;
        let row = document.createElement('tr');

        // Adds empty cells for days before first day of the month
        for (let i = 0; i < firstDay; i++) {
            const emptyCell = document.createElement('td');
            row.appendChild(emptyCell);
        }

        // Fill in first week
        for (let i = firstDay; i < 7; i++) {
            if (currentDay > totalDays) break;
            const cell = document.createElement('td');
            const dayNumber = document.createElement('div');
            dayNumber.className = 'day-number';
            dayNumber.textContent = currentDay;
            cell.appendChild(dayNumber);

            // Check if there are operational hours for this day (using the updated column name 'operations_date')
            const dateString = `${year}-${(month + 1).toString().padStart(2, '0')}-${currentDay.toString().padStart(2, '0')}`;
            const hoursEntry = allhoursData.find(item => item.operations_date === dateString); // Changed to operations_date

            const hoursPlaceholder = document.createElement('div');
            if (hoursEntry) {
                if (hoursEntry.operations_status === "closed") {
                    hoursPlaceholder.textContent = "Closed";  // Displays "Closed" if status is "closed"
                } else {
                    hoursPlaceholder.innerHTML = `Open: <br>${hoursEntry.open_time} - ${hoursEntry.close_time}`;
                }
            } else {
                hoursPlaceholder.textContent = "No Data.";
            }
            cell.appendChild(hoursPlaceholder);

            const editButton = document.createElement('button');
            editButton.className = 'edit_hours-button';
            editButton.textContent = 'Edit';
            editButton.onclick = () => editDate(hoursEntry.operations_date);
            cell.appendChild(editButton);

            row.appendChild(cell);
            currentDay++;
        }
        table.appendChild(row);

        // Continue adding rows until all days are filled
        while (currentDay <= totalDays) {
            row = document.createElement('tr');
            for (let i = 0; i < 7; i++) {
                if (currentDay > totalDays) {
                    const emptyCell = document.createElement('td');
                    row.appendChild(emptyCell);
                } else {
                    const cell = document.createElement('td');
                    const dayNumber = document.createElement('div');
                    dayNumber.className = 'day-number';
                    dayNumber.textContent = currentDay;
                    cell.appendChild(dayNumber);

                    // Check if there are operational hours for this day (using the updated column name 'operations_date')
                    const dateString = `${year}-${(month + 1).toString().padStart(2, '0')}-${currentDay.toString().padStart(2, '0')}`;
                    const hoursEntry = allhoursData.find(item => item.operations_date === dateString); // Changed to operations_date

                    const hoursPlaceholder = document.createElement('div');
                    if (hoursEntry) {
                        if (hoursEntry.operations_status === "closed") {
                            hoursPlaceholder.textContent = "Closed";  // Displays "Closed" if status is "closed"
                        } else {
                            hoursPlaceholder.innerHTML = `Open: <br>${hoursEntry.open_time} - ${hoursEntry.close_time}`;
                        }
                    } else {
                        hoursPlaceholder.textContent = "No Data.";
                    }
                    cell.appendChild(hoursPlaceholder);

                    const editButton = document.createElement('button');
                    editButton.className = 'edit_hours-button';
                    editButton.textContent = 'Edit';
                    editButton.onclick = () => editDate(hoursEntry.operations_date);
                    cell.appendChild(editButton);

                    row.appendChild(cell);
                    currentDay++;
                }
            }
            table.appendChild(row);
        }
        calendar.appendChild(table);
        container.appendChild(calendar);
    }
};

function editHoursForm() {
    // Creates the overlay
    const overlay = $(
        `<div id="editHours_overlay">
            <div class="content">
                <h2>Business Hours For: ${formData.dateFixed}</h2>
                <form method="POST" action="hours.php">
                    <table class="edit_table">
                        <tr>
                            <td class="center_1_cell">
                                Status:
                                <br>
                                <select class="req" name="status" required>
                                    <option value="" disabled selected hidden>Select..</option>
                                    <option value="open" ${formData.status === 'open' ? 'selected' : ''}>Open</option>
                                    <option value="closed" ${formData.status === 'closed' ? 'selected' : ''}>Closed</option>
                                </select>
                            </td>
                        </tr>
                        <tr class="center_2_cell">
                            <td>
                                Open At:
                                <br>
                                <input type="time" class="req" placeholder="*" name="open_time" value="${formData.otime || ''}" required/>
                            </td>
                            <td>
                                Close At:
                                <br>
                                <input type="time" class="req" placeholder="*" name="close_time" value="${formData.ctime || ''}" required/>
                            </td>
                        </tr>
                        <tr>
                            <td class="center_1_cell">
                                <input type="hidden" name="operations_date" value="${formData.date || ''}"/>
                                <input type="submit" name="hours_update" value="Submit">
                            </td>
                        </tr>
                    </table>
                </form>
                <button id="closeOverlay">Close</button>
            </div>
        </div>`
    );

    $('body').append(overlay);

    // Closes overlay
    $('#closeOverlay').on('click', function () {
        $('#editHours_overlay').remove();
    });
};