// Create AppController class with getHomepage method
class AppController {
  static getHomepage(request, response) {
    response.status(200);
    response.send('Hello Holberton School!');
  }
}

// Export AppController class
export default AppController;
