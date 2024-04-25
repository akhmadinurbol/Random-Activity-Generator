function getRandomActivity() {
  var activities = [
    "Go for a hike in nature",
    "Cook a new recipe",
    "Learn a new language",
    "Start a journal",
    "Practice meditation",
    "Read a book",
    "Take a dance class",
    "Visit a museum",
    "Volunteer for a cause",
    "Try a new hobby"
  ];

  var randomIndex = Math.floor(Math.random() * activities.length);
  return activities[randomIndex];
}

function doGet() {
  return HtmlService.createHtmlOutputFromFile('index');
}
