document.getElementById('rideForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Collect ride details
    const startLocation = document.getElementById('startLocation').value;
    const endLocation = document.getElementById('endLocation').value;
    const rideDate = document.getElementById('rideDate').value;
    const rideTime = document.getElementById('rideTime').value;
    const timePeriod = document.getElementById('timePeriod').value;
    const seats = document.getElementById('seats').value;

    // Combine ride time with AM/PM selection
    const formattedTime = `${rideTime} ${timePeriod}`;

    // Validate time input (ensure it matches HH:MM format)
    const timePattern = /^(0[1-9]|1[0-2]):[0-5][0-9]$/;
    if (!timePattern.test(rideTime)) {
        alert('Please enter the time in a valid 12-hour format (HH:MM).');
        return;
    }

    // Create a new ride object
    const ride = {
        startLocation,
        endLocation,
        rideDate,
        rideTime: formattedTime,
        seats
    };

    // Store the ride (in a simple array for this example)
    addRideToList(ride);

    // Clear form after submission
    document.getElementById('rideForm').reset();
});

function addRideToList(ride) {
    const rideList = document.getElementById('rideList');

    // Create a new ride element
    const rideItem = document.createElement('div');
    rideItem.className = 'ride-item';
    rideItem.innerHTML = `
        <div>
            <strong>From:</strong> ${ride.startLocation} <br>
            <strong>To:</strong> ${ride.endLocation} <br>
            <strong>Date:</strong> ${ride.rideDate} <br>
            <strong>Time:</strong> ${ride.rideTime} <br>
            <strong>Seats:</strong> ${ride.seats}
        </div>
        <button onclick="bookRide('${ride.startLocation}', '${ride.endLocation}', '${ride.rideDate}', '${ride.rideTime}')">Book</button>
    `;

    rideList.appendChild(rideItem);
}

function bookRide(startLocation, endLocation, rideDate, rideTime) {
    alert(`You have booked a ride from ${startLocation} to ${endLocation} on ${rideDate} at ${rideTime}.`);
}

function logout() {
    localStorage.removeItem('loggedIn');
    alert('You have been logged out.');
    window.location.href = 'login.html';
}

// Simulating a login check (for demo purposes)
if (!localStorage.getItem('loggedIn')) {
    alert('Please login to access this page.');
    window.location.href = 'login.html';
} else {
    console.log('Welcome to the Ride Alerts page!');
}
