function signup(userName) {
    const usernames = ['Nikita_patel', 'Kajal_solanki', 'Arohi_patel', 'Princi_mehra'];
    
    if (usernames.includes(userName)) {
        return 'User Already Regsistered, Please Login';
    } else {
        usernames.push(userName);
        return 'Signup Sucessfull, Please Login';
    }
}
