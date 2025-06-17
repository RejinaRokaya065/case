
 const models = {
        samsung: ["Galaxy S21", "Galaxy S22", "Galaxy A52"],
        apple: ["iPhone 13", "iPhone 14", "iPhone SE"],
        xiaomi: ["Redmi Note 10", "Redmi Note 11", "Mi 11"]
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