(function(){
    let date = new Date,
        currentYar = date.getFullYear(),
        currentMonth = date.getMonth() + 1,
        currentDay = date.getDate(),
        anniversaryYear = "1995",
        anniversaryMonth = "07",
        anniversaryDay = "19",
        age = currentYar - anniversaryYear;

    if (currentMonth < anniversaryMonth || currentMonth == anniversaryMonth && currentDay < anniversaryDay) {
        age--;
    }

    document.getElementById("age").textContent = age;
})();