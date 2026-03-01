function validateEntry() {
    // جلب القيم من الإدخالات
    var fullName = document.getElementById("fullName").value.trim();
    var phoneNumber = document.getElementById("phoneNumber").value.trim();
    var requiredDate = document.getElementById("requiredDate").value.trim();
    var numPeople = document.getElementById("numPeople").value.trim();
    var packageType = document.getElementById("packageType").value.trim();
    var specialReq = document.getElementById("specialReq").value.trim();
    var stayDuration = document.getElementById("stayDuration").value.trim();
    var budget = document.getElementById("budget").value.trim();
    var email = document.getElementById("email").value.trim();
    var additionalServices = document.getElementById("additionalServices").value.trim();

    // التحقق من أن جميع الحقول ليست فارغة
    if (fullName === "" || phoneNumber === "" || requiredDate === "" || numPeople === "" ||
        packageType === "" || specialReq === "" || stayDuration === "" ||
        budget === "" || email === "" || additionalServices === "") {
        alert("خطأ: يرجى ملء جميع الحقول المطلوبة.");
        return false; // منع إرسال النموذج
    }

    return true; // السماح بإرسال النموذج إذا كانت جميع الحقول ممتلئة
}

function callme() {
    alert("لقد قمت بالنقر على زر الإرسال!");
}

