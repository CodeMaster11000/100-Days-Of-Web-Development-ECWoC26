function calculateBMI() {
    const heightValue = document.getElementById("height").value;
    const heightUnit = document.getElementById("heightUnit").value;
    const weight = document.getElementById("weight").value;

    const result = document.getElementById("bmiResult");
    const status = document.getElementById("bmiStatus");
    const idealInfo = document.getElementById("idealInfo");

    if (!heightValue || !weight || heightValue <= 0 || weight <= 0) {
        result.textContent = "Please enter valid values";
        status.textContent = "";
        idealInfo.textContent = "";
        status.className = "";
        return;
    }

    // Convert height to meters
    let heightCm = heightUnit === "ft"
        ? heightValue * 30.48
        : heightValue;

    const heightMeters = heightCm / 100;
    const bmi = weight / (heightMeters * heightMeters);
    const roundedBMI = bmi.toFixed(2);

    let message = "";
    let tip = "";
    let className = "";

    if (bmi < 18.5) {
        message = "Underweight";
        tip = "Increase calorie intake with nutritious food and strength training.";
        className = "underweight";
    } else if (bmi < 24.9) {
        message = "Normal weight";
        tip = "Maintain a balanced diet and regular exercise.";
        className = "normal";
    } else if (bmi < 29.9) {
        message = "Overweight";
        tip = "Focus on cardio, portion control, and consistency.";
        className = "overweight";
    } else {
        message = "Obese";
        tip = "Gradual weight loss through diet, exercise, and guidance is recommended.";
        className = "obese";
    }

    // Ideal BMI calculation
    const idealMinWeight = (18.5 * heightMeters * heightMeters).toFixed(1);
    const idealMaxWeight = (24.9 * heightMeters * heightMeters).toFixed(1);

    result.textContent = `Your BMI: ${roundedBMI}`;
    status.textContent = `Status: ${message} — ${tip}`;
    status.className = className;

    idealInfo.textContent =
        `Ideal BMI range: 18.5 – 24.9.
        For your height, ideal weight is between ${idealMinWeight} kg and ${idealMaxWeight} kg.`;
}
