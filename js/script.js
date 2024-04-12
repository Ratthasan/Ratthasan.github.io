document.addEventListener('DOMContentLoaded', function() {
    var reasonInputs = document.querySelectorAll('input[name="reason"]');
    var hourlyRateInput = document.getElementById('hourly-rate-input');

    reasonInputs.forEach(function(input) {
        input.addEventListener('change', function() {
            if (this.value === 'Hiring') {
                hourlyRateInput.style.display = 'block';
            } else {
                hourlyRateInput.style.display = 'none';
            }
        });
    });
});