$(function() {
  $("#order").submit(function(event) {
    event.preventDefault();
    var jewelry = $("input:radio[name=jewelry]:checked").val();
    var firstName = $("#first-name").val();
    var lastName = $("#last-name").val();
    var street = $("#street").val();
    var city = $("#city").val();
    var state = $("#state").val();
    var zip = $("#zip").val();


    $(".first-name").text(firstName);
    $(".last-name").text(lastName);
    $(".street").text(street);
    $(".city").text(city);
    $(".state").text(state);
    $(".zip").text(zip);
    $(".jewelry").text(jewelry);

    $(".receipt").show();

  });
});
