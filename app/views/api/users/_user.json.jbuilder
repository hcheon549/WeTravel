json.extract! current_user, :id, :email, :fname, :lname, :introduction
json.photoUrl url_for(current_user.photo)
