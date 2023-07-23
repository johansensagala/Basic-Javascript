$.ajax({
    url: "https://example.com/data",
    success: function(response) {
        console.log("Data loaded:", response);
    },
    error: function(xhr, status, error) {
        console.error("Error loading data:", error);
    }
});

console.log("Waiting for data...");