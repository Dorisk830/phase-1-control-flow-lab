function scuberGreetingForFeet(scuberGreetingForFeet) {

  if (scuberGreetingForFeet <= 400) {

    return "This one is on me!";

  } else if (scuberGreetingForFeet > 2000 && scuberGreetingForFeet < 2500) {

    return "I will gladly take your thirty bucks.";

  } else {

    return "No can do."

  }
}

function ternaryCheckCity(city) {
  var result = (city == "NYC") ? "Ok, sounds good." : "No go.";
  return result;
}
function switchOnCharmFromTip(tip) {

  switch (tip) {
    case "generous":
      return "Thank you so much."
    case "not as generous":
      return "Thank you.";
    default:
      return "Bye.";
  }




}
