function signup(userName) {
    const usernames = ['Nikita_patel', 'Kajal_solanki', 'Arohi_patel', 'Princi_mehra'];
    
    if (usernames.includes(userName)) {
        return 'User Already Regsistered, Please Login';
    } else {
        usernames.push(userName);
        return 'Signup Sucessfull, Please Login';
    }
}
function login(userName, password) {
    const usernames = ['Nikita_patel', 'Kajal_solanki', 'Arohi_patel', 'Princi_mehra'];
    
    if (usernames.includes(userName)) {
        if (password === 'Emp@123') {
            return 'Login Sucessfull...';
        } else {
            return 'Wrong Password....';
        }
    } else {
        return 'User Not Found, Please Signup';
    }
}