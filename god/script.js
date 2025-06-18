
    const models = {
        samsung: ["Galaxy S21", "Galaxy S22", "Galaxy A52"],
        apple: ["iphone 11","iphone 11 PRO","iphone 11 pro","iPhone 13", "iPhone 14", "iPhone SE"],
        xiaomi: ["Redmi Note 10", "Redmi Note 11", "Mi 11"],
        vivo:["vivo v11","vivo v15 pro","vivo v17","vivo v19","vivo v17 pro"],
        huwaei:["huawei nova 4","huawei Y5 2019","huwaei Y6 2019","huwaei nova 21"],
        realme:["Realme 5/5l/5S","Realme7","Realme 71","Realme 71"],
        oppo:["oppo A1K","oppo A31","oppo A53","oppo A52/92","oppo A39"],
        oneplus:["oneplus 10 pro","oneplus 11R","oneplus 5","oneplus 12","oneplus 6","oneplus 9","oneplus 9 pro"]
    };

    document.getElementById("brand").addEventListener("change", function() {
        const brand = this.value;
        const modelSelect = document.getElementById("model");
        modelSelect.innerHTML = '<option value="">Select Model...</option>';

        if(models[brand]) {
            models[brand].forEach(function(model) {
                const option = document.createElement("option");
                option.value = model;
                option.textContent = model;
                modelSelect.appendChild(option);
            });
        }
    });

    function addToCart() {
        const brand = document.getElementById("brand").value;
        const model = document.getElementById("model").value;
        if (brand && model) {
            alert(`Added ${brand} - ${model} to cart!`);
        } else {
            alert("Please select both Brand and Model.");
        }
    }
