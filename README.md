# bw-wmp (Anywhere Fitness)

Deployed URL: https://web51-bw3-kcm.herokuapp.com/

API Endpoints

--- Login/Register
Post - /api/auth/register - Creates new user with 'username', 'password', and 'role' into req.

Post - /api/auth/login - Logs in an already created user, returns a welcome message. If an unregistered user tries to log it, it denies them.


--- Users
Get - /api/users - Returns array of users.

--- Classes
Get - /api/classes - Returns array of classes.

Post - /api/classes - Authentication required, and Instructor tag required. Creates a new class with 'class_name', 'class_type', 'start_time', 'class_duration', 'intensity_level', 'location', 'registred_number', 'registered_max' into req.body.

Put - /api/classes/:class_id - Authentication required, Instructor tag required. Updates specified class using data from req.body. Returns modified class.

Delete - Authentication required, Instructor tag required. Deleted specified class.