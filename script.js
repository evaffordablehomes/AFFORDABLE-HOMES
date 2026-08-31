document.getElementById('rentalForm').addEventListener('submit', function(e) {
    e.preventDefault(); 

    // Extracting Core Personal Information
    var firstName = document.getElementById('first_name').value;
    var lastName = document.getElementById('last_name').value;
    var clientEmail = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var dob = document.getElementById('dob').value;
    var moveIn = document.getElementById('move_in_date').value;
    
    // Extracting Preferences
    var state = document.getElementById('desired_state').value;
    var zip = document.getElementById('desired_zip').value;
    var deposit = document.getElementById('security_deposit').value;
    
    // Extracting Professional Income
    var employer = document.getElementById('employer').value;
    var job = document.getElementById('job_title').value;
    var income = document.getElementById('income').value;
    
    // Extracting Residential Rental History
    var currentAddress = document.getElementById('current_address').value;
    var landlord = document.getElementById('landlord_name').value || "N/A";
    var landlordPhone = document.getElementById('landlord_phone').value || "N/A";
    
    // Extracting the New Background Screening Declarations
    var credit = document.getElementById('credit_score').value;
    var eviction = document.getElementById('eviction').value;
    var bankruptcy = document.getElementById('bankruptcy').value;
    var felony = document.getElementById('felony').value;
    
    // Extracting Final Attributes
    var pets = document.getElementById('pets').value;
    var smoker = document.getElementById('smoker').value;
    var notes = document.getElementById('additional_notes').value || "None";

    // Automate Random Track Ticket String Generation
    var randomNum = Math.floor(100000 + Math.random() * 900000);
    var ticket = "APP-" + randomNum;

    // Compile Clean Raw Email Subject Line and Text Parameter Encodings
    var emailSubject = encodeURIComponent("New Rental Application [" + ticket + "] - " + firstName + " " + lastName);
    var emailBody = encodeURIComponent(
        "RENTAL APPLICATION DETAILS\n" +
        "=============================\n" +
        "Ticket ID: " + ticket + "\n\n" +
        "1. PERSONAL INFORMATION\n" +
        "Name: " + firstName + " " + lastName + "\n" +
        "Email: " + clientEmail + "\n" +
        "Phone: " + phone + "\n" +
        "DOB: " + dob + "\n" +
        "Move-In Date: " + moveIn + "\n\n" +
        "2. LOCATION PREFERENCES\n" +
        "State: " + state + " | Zip: " + zip + "\n" +
        "Ready for Deposit: " + deposit + "\n\n" +
        "3. INCOME & EMPLOYMENT\n" +
        "Employer: " + employer + "\n" +
        "Job Title: " + job + "\n" +
        "Monthly Income: $" + income + "\n\n" +
        "4. RENTAL HISTORY\n" +
        "Current Address: " + currentAddress + "\n" +
        "Landlord Name: " + landlord + " | Phone: " + landlordPhone + "\n\n" +
        "5. BACKGROUND SCREENING DECLARATIONS\n" +
        "Estimated Credit Score: " + credit + "\n" +
        "Prior Eviction History: " + eviction + "\n" +
        "Prior Bankruptcy History: " + bankruptcy + "\n" +
        "Prior Felony Convictions: " + felony + "\n\n" +
        "6. ADDITIONAL DETAILS\n" +
        "Has Pets: " + pets + " | Smoker: " + smoker + "\n" +
        "Comments: " + notes
    );

    // Bulletproof Native Link Hook Assignment
    window.location.href = "mailto:evaffordablehomes@://gmail.com" + emailSubject + "&body=" + emailBody;

    // Dynamically update view windows natively right on the current page 
    document.getElementById('ticket-number').textContent = ticket;
    document.getElementById('visitor-name').textContent = firstName;
    document.getElementById('formWindow').style.display = "none";
    document.getElementById('successWindow').style.display = "block";
    window.scrollTo(0, 0);
});
