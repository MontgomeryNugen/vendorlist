$().ready(function () {

    var url = "http://localhost:8080/Vendors/List";

    $.getJSON(url)
        .then(function(vendors) {
            console.log(vendors);
            render(vendors);
        });   
});

function render(vendors) {
    var tbody = $("#tbody");
    // var products = products;   
    tbody.empty();
    for(var vendor of vendors) {
        var row = "<tr>";
        row += "<td>" + vendor.id + "</td>";
        row += "<td>" + vendor.code + "</td>";
        row += "<td>" + vendor.address + ", " + vendor.city + ", " + vendor.state + " " + vendor.zip + "</td>";
        row += "<td>" + vendor.phone + "</td>";
        row += "<td>" + vendor.email + "</td>";
        row += "</tr>";

        tbody.append(row);
    }

}
